import pandas as pd
import os 
import json 

random_seed = 3535

probcopa_v1_path = "probcopa_v1.jsonl"
probcopa_v2_path = "probcopa_v2.jsonl"

probcopa_v1 = pd.read_json(probcopa_v1_path, lines=True)
probcopa_v1['identifier'] = probcopa_v1['premise'] + "|" + probcopa_v1['hypothesis'] + "|" + probcopa_v1['asks-for']
probcopa_v2 = pd.read_json(probcopa_v2_path, lines=True)
probcopa_v2['identifier'] = probcopa_v2['premise'] + "|" + probcopa_v2['hypothesis'] + "|" + probcopa_v2['asks-for']

# First, filter for effect-only stimuli in ProbCOPA v1; we'll use these for the validation study:
probcopa_v1_effects_only = probcopa_v1[probcopa_v1['asks-for'] == 'effect']
probcopa_v1_effects_only_sample = probcopa_v1_effects_only.sample(n=20, random_state=random_seed)

sublist_size  = 20

n_splits = len(probcopa_v1_effects_only_sample) // sublist_size
print(f"Splitting data into {n_splits} sublists of size {sublist_size}...")
subsets = []
for i in range(n_splits):
    start_idx = i * sublist_size
    end_idx = start_idx + sublist_size
    subset = probcopa_v1_effects_only_sample.iloc[start_idx:end_idx]
    subsets.append(subset)

json_subsets = []
for subset in subsets:
    subset_dicts = subset.to_dict('records')
    json_subsets.append(subset_dicts)
# Write to validation_effect_datapoints_split_stimuli.js file with proper formatting
print(f"Writing to validation_effect_datapoints_split_stimuli.js...")
with open('validation_effect_datapoints.js', 'w') as f:
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



# Now, let's create js files for the items that are in ProbCOPA v2 but not in ProbCOPA v1:
probcopa_v2_not_in_v1 = probcopa_v2[~probcopa_v2['identifier'].isin(probcopa_v1_effects_only['identifier'])]
sublist_size = 28 # There are 112 NLI items from 56 COPA items, 112/28 = 4 (close enough to the original sublist_size of 30)
n_splits = len(probcopa_v2_not_in_v1) // sublist_size

# Split into sublists
print(f"Splitting data into {n_splits} sublists of size {sublist_size}...")
subsets = []
for i in range(n_splits):
    start_idx = i * sublist_size
    end_idx = start_idx + sublist_size
    subset = probcopa_v2_not_in_v1.iloc[start_idx:end_idx]
    subsets.append(subset)

# Convert each subset to a list of dictionaries
json_subsets = []
for subset in subsets:
    # Convert DataFrame subset to list of dictionaries
    subset_dicts = subset.to_dict('records')
    json_subsets.append(subset_dicts)
# Write to new_effect_datapoints_split_stimuli.js file with proper formatting
print(f"Writing to new_effect_datapoints_split_stimuli.js...")
with open('new_effect_datapoints_split_stimuli.js', 'w') as f:
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

