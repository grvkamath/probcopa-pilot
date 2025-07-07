#!/usr/bin/env python3
"""
Generate stimuli.js from copa-test.xml
Takes sublist_size as command line argument
"""

import sys
import random
import json
import xml.etree.ElementTree as ET
import pandas as pd

def main():
    # Check if sublist_size argument is provided
    if len(sys.argv) != 2:
        print("Usage: python generate_stimuli_js_v2.py <sublist_size>")
        sys.exit(1)
    
    try:
        sublist_size = int(sys.argv[1])
    except ValueError:
        print("Error: sublist_size must be an integer")
        sys.exit(1)
    
    # Read XML data
    print(f"Reading data from copa-test.xml...")
    data = pd.read_xml("copa-test.xml")
    
    # Shuffle data with random seed 3535
    print(f"Shuffling data with random seed 3535...")
    data = data.sample(frac=1, random_state=3535).reset_index(drop=True)
    
    # Calculate number of splits
    n_splits = len(data) // sublist_size
    
    # Split into sublists
    print(f"Splitting data into {n_splits} sublists of size {sublist_size}...")
    subsets = []
    for i in range(n_splits):
        start_idx = i * sublist_size
        end_idx = start_idx + sublist_size
        subset = data.iloc[start_idx:end_idx]
        subsets.append(subset)
    
    # Convert each subset to a list of dictionaries
    json_subsets = []
    for subset in subsets:
        # Convert DataFrame subset to list of dictionaries
        subset_dicts = subset.to_dict('records')
        json_subsets.append(subset_dicts)
    
    # Write to stimuli.js file with proper formatting
    print(f"Writing to stimuli.js...")
    with open('stimuli.js', 'w') as f:
        f.write('const COPA_DATA = [\n')
        
        # Write each subset with proper indentation
        for i, subset in enumerate(json_subsets):
            f.write('  [\n')  # Start of subset with 2-space indent
            
            # Write each row in the subset
            for j, row in enumerate(subset):
                # Convert row to JSON with proper indentation
                row_json = json.dumps(row, indent=2)
                # Split into lines and add 2 more spaces to align with subset
                lines = row_json.split('\n')
                indented_lines = ['    ' + line for line in lines]
                indented_row = '\n'.join(indented_lines)
                
                if j < len(subset) - 1:
                    f.write(indented_row + ',\n')
                else:
                    f.write(indented_row + '\n')
            
            if i < len(json_subsets) - 1:
                f.write('  ],\n')  # End of subset with comma
            else:
                f.write('  ]\n')   # End of last subset without comma
        
        f.write('];\n')
    
    # Print summary
    print(f"Successfully created {len(json_subsets)} subsets")
    print(f"Each subset contains {len(json_subsets[0])} rows")
    print(f"Total rows processed: {sum(len(subset) for subset in json_subsets)}")
    print(f"Output written to stimuli.js")

if __name__ == "__main__":
    main() 