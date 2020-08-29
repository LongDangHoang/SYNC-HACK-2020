from flask import Flask, render_template, request, jsonify
from database import project_schema, user_schema
import time

# import utils

app = Flask(__name__)


projects = []
for i in range(10):
    project = project_schema.create('Water Rockets', '2w', \
            ['science', 'engineering', 'space', 'rocket', 'physics', 'models'], \
            ['drill', 'scissors', 'knife', 'tape', 'sandpaper'], \
            ['plastic bottles', 'paper', 'strut', 'cardboard', 'garden hose tap', 'foam'])
    projects.append(project)

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
    return render_template("index.html", projects=projects)

# Testing React works
@app.route('/time')
def get_current_time():
    return {'time': time.asctime( time.localtime(time.time()))}

if __name__ == "__main___":
    app.run(debug=True)
