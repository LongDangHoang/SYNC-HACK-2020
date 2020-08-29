from flask import Flask, render_template, request, jsonify
from database import project_schema, user_schema, projects
import time

from utils import filter_by_reqs

app = Flask(__name__)

# Called whenever a checkbox is ticked/unticked
# Updates projects shown on page based on preferences chosen
age_ranges = {'1-2': 0, '3-6': 1, '6-12': 2, '12-16': 3, '16+': 4}
current_reqs = {'age': [], 'indoors': [None, None], 'numb': None}
current_prefs = []

@app.route('/update_preferences', methods=['POST'])
def update_preferences():
    print("Hello")
    
    jsondata = request.get_json()
    print(jsondata)

    pref_name = jsondata['pref_name']   # name of preference ticked/unticked
    pref_ticked = jsondata['pref_value'] # preference ticked or not
    print(pref_name, pref_ticked) # testing
    
    if pref_name in age_ranges.keys():
        if pref_ticked == True: # ticked
            current_reqs['age'].append(age_ranges[pref_name])
        else:
            current_reqs['age'].pop(current_reqs['age'].index(age_ranges[pref_name]))

    elif pref_name in ('Indoor', 'Outdoor'):
        if pref_name == 'Indoor':
            current_reqs['indoors'][0] = pref_ticked if pref_ticked else None
        else:
            current_reqs['indoors'][1] = pref_ticked if pref_ticked else None
    
    else:
        if pref_ticked == True: # ticked
            current_prefs.append(pref_name)
        else:
            current_prefs.pop(current_prefs.index(pref_name))

    print(current_prefs)
    print(current_reqs)

    # FILTER
    filtered_projs = filter_by_reqs(projects, current_reqs)
    print(filtered_projs)

    # # RUN SORT
    # if pref_ticked and len(current_preferences) == 1: # Just add projects
    #     # Search projects list for one with corresponding preference tag
    #     for project in projects:
    #         if project[]

    # RETURN ranked projects
    return "Placeholder"

@app.route('/time')
def get_time():
    return {'time': time.time()}

if __name__ == "__main___":
    app.run(debug=True)
