import sys
import random
import json
import xml.etree.ElementTree as ET
import pandas as pd

def main():
    if len(sys.argv) != 2:
        print("Usage: python generate_stimuli_js_v2.py <sublist_size>")
        sys.exit(1)
    
    try:
        sublist_size = int(sys.argv[1])
    except ValueError:
        print("Error: sublist_size must be an integer")
        sys.exit(1)
    
    # Read in data:
    data = pd.read_xml("copa-test.xml")
    data = data.sample(frac=1, random_state=3535).reset_index(drop=True)

    # Split into NLI pairs:
    nli_formatted_dicts = []
    for index, row in data.iterrows():
        a1_label = 1 if row['most-plausible-alternative'] == 1 else 0
        a2_label = 1 if row['most-plausible-alternative'] == 2 else 0
        formatted_a1 = {'id': row['id'], 'asks-for': row['asks-for'], 'p': row['p'], 'a': row['a1'], 'hard_label': a1_label}
        formatted_a2 = {'id': row['id'], 'asks-for': row['asks-for'], 'p': row['p'], 'a': row['a2'], 'hard_label': a2_label}
        nli_formatted_dicts.append(formatted_a1)
        nli_formatted_dicts.append(formatted_a2)
    #
    nli_formatted = pd.DataFrame(nli_formatted_dicts)
    
    # Make sure sublist_size is divisible by 2, so that we can split into NLI pairs:
    if sublist_size % 2 != 0:
        print("Error: sublist_size must be divisible by 2, so that we can split into NLI pairs")
        sys.exit(1)
    
    # Calculate number of splits
    n_splits = len(data) // sublist_size
    
    # Split into sublists
    print(f"Splitting data into {n_splits} sublists of size {sublist_size}...")
    subsets = []
    for i in range(n_splits):
        start_idx = i * sublist_size
        end_idx = start_idx + sublist_size
        subset = nli_formatted.iloc[start_idx:end_idx]
        subsets.append(subset)
    
    # Convert each subset to a list of dictionaries
    json_subsets = []
    for subset in subsets:
        # Convert DataFrame subset to list of dictionaries
        subset_dicts = subset.to_dict('records')
        json_subsets.append(subset_dicts)
    
    # Write to stimuli.js file with proper formatting
        print(f"Writing to split_stimuli.js...")
        with open('split_stimuli.js', 'w') as f:
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
        print(f"Output written to split_stimuli.js")

if __name__ == "__main__":
    main() 
#
