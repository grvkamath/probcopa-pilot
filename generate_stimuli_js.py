import numpy as np 
import pandas as pd 
import os 
import json 

data_path = "copa-test.xml"
data = pd.read_xml(data_path)
sublist_size = 10
n_splits = len(data) // sublist_size

data = data.sample(frac=1, random_state=3535).reset_index(drop=True)

# Split into 25 subsets of 20 rows each
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

# The final result is json_subsets, which is a list of lists
# Each sublist contains 20 dictionaries (one for each row)

# Write to a .js file with COPA_DATA variable and proper formatting
with open('copa_data.js', 'w') as f:
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
    
    f.write('];\n\n')
    f.write('export default COPA_DATA;\n')

# Print the structure for verification
print(f"Created {len(json_subsets)} subsets")
print(f"Each subset contains {len(json_subsets[0])} rows")
print(f"Total rows processed: {sum(len(subset) for subset in json_subsets)}")
