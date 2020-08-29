from flask import Flask, render_template, request, jsonify
from copy import deepcopy

import utils

app = Flask(__name__)

project_template = { \
                    "name": None,\
                    "time": None,\
                    "tags": [], \
                    "tools": [], \
                    "mater": [], \
                    "age_r": None, \
                    "numb": None, \
                    "instructions": [] \
}

project_1 = deepcopy(project_template)
project_1['name'] = 'Water Rockets'
project_1['time'] = '2w'
project_1['tags'] = ['science', 'engineering', 'space', 'rocket', 'physics', 'models']
project_1['tools'] = ['drill', 'scissors', 'knife', 'tape', 'sandpaper']
project_1['mater'] = ['plastic bottles', 'paper', 'strut', 'cardboard', 'garden hose tap', 'foam']

projects = [project_1]

@app.route("/process", methods=['POST'])
def match_preference():
    # user_tags = request.form['tags']   # list of strings
    # user_reqs = request.form['resources'] # list of strings
    # # more user_relevant features

    # pass_required = utils.filter(projects, user_reqs)
    # sorted_projects = sorted(projects, key=utils.string_match())

    # return jsonify(sorted_projects)
    return "ANOTHER HELLO WORLD!"

@app.route("/")
def hello():
    return render_template("index.html")

if __name__ == "__main___":
    app.run(debug=True)
