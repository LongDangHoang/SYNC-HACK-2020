from flask import Flask, render_template, request, jsonify
from database import project_schema, user_schema, projects
import time

# import utils

app = Flask(__name__)

@app.route("/process", methods=['POST'])
def match_preference():
    # user_tags = request.form['tags']   # list of strings
    # user_reqs = request.form['resources'] # list of strings
    # # more user_relevant features

    # pass_required = utils.filter(projects, user_reqs)
    # sorted_projects = sorted(projects, key=utils.string_match())

    # return jsonify(sorted_projects)
    return "ANOTHER HELLO WORLD!"

# Testing React works
@app.route('/time')
def get_current_time():
    return {'time': time.asctime( time.localtime(time.time()))}

if __name__ == "__main___":
    app.run(debug=True)
