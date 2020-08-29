from database import project_schema, user_schema
import time

import utils

app = Flask(__name__)

projects = []
projects.append(project_schema.create(
    'Water Rockets', '2w', \
    ['science', 'engineering', 'space', 'rocket', 'physics', 'models', 'patience', 'long-term effort'], \
    ['drill', 'scissors', 'knife', 'tape', 'sandpaper'], \
    ['plastic bottles', 'paper', 'strut', 'cardboard', 'garden hose tap', 'foam'], \
    age_r=[3, 4],
    indoors=False))
projects.append(project_schema.create(
    'Glowing Bouncy Egg',
    '1w',
    ['science', 'chemistry', 'food', 'biology'],
    None,
    ['jar', 'vinegar', 'egg'],
    age_r=[2,3],
    indoors=True))
projects.append(project_schema.create(
    'Building a Bridge',
    '3hr',
    ['science', 'engineering', 'design', 'creative', 'collaborative', 'fun'],
    None,
    ['marshmallows', 'spaghetti'],
    age_r=[1,2,3,4],
    indoors=True))
projects.append(project_schema.create(
    'Rocket like Mae Jemison',
    '2hr',
    ['art', 'craft', 'drawing', 'fun', 'simple', 'colorful', 'crafting'],
    None,
    ['coloured pencils', 'crayons', 'papers'],
    age_r=[1],
    indoors=True))
projects.append(project_schema.create(
    'Egg Drop',
    '3hr',
    ['design', 'engineering', 'science', 'craft', 'creative', 'open-ended', 'challenge'],
    ['glue', 'tape', 'foam', 'any'],
    ['egg', 'any'],
    age_r=[1, 2],
    indoors=True))

@app.route("/process", methods=['POST'])
def match_preference():
    # user_tags = request.form['tags']   # list of strings
    # user_reqs = request.form['resources'] # list of strings
    # # more user_relevant features

    return jsonify(sorted_projects)
    # return "ANOTHER HELLO WORLD!"
    # pass_required = utils.filter(projects, user_reqs)
    # sorted_projects = sorted(projects, key=utils.string_match())

# Called whenever a checkbox is ticked/unticked
# Updates projects shown on page based on preferences chosen
current_preferences = []
@app.route('/update_preferences', methods=['POST'])
def update_preferences():
    print("Hello")
    jsondata = request.get_json()
    print(jsondata)
    pref_name = jsondata['pref_name']   # name of preference ticked/unticked
    pref_ticked = jsondata['pref_value'] # preference ticked or not
    print(pref_name, pref_ticked) # testing
    current_preferences.append(pref_name)
    # RUN SORT
    if pref_ticked and len(current_preferences) == 1: # Just add projects
        # Search projects list for one with corresponding preference tag
        for project in projects:
            if project[]

    # RETURN ranked projects
    return "Placeholder"

if __name__ == "__main___":
    app.run(debug=True)
