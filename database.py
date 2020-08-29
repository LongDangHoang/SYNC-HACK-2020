from copy import deepcopy

class project_schema():

    project_id = '0projectInstance'
    project_template = { 
                        "id": None,
                        "name": None,
                        "time": None,
                        "tags": [],
                        "tools": [],
                        "mater": [],
                        "age_r": None,
                        "numb": None,
                        "indoors": None,
                        "instructions": []
    }

    @staticmethod
    def create(name=None, time=None, tags=[], tools=[], mater=[], age_r=None, numb=None, indoors=None, instructions=[]):
        project = deepcopy(project_schema.project_template)
        project['name'] = name
        project['time'] = time
        project['tags'] = tags
        project['tools'] = tools
        project['mater'] = mater
        project['age_r'] = age_r
        project['numb'] =  numb
        project['instructions'] = instructions
        project['indoors'] = indoors
        project['id'] = project_schema.project_id      
        project_schema.project_id = str(int(project_schema.project_id[0])+1) + project_schema.project_id[1:]
        return project

class user_schema(): 

    user_id = "0userInstance"
    user_template = { \
                        "id": None, \
                        "username": None,\
                        "password": None,\
                        "tags": [], \
                        "liked": [], \
                        "completed": [], \
                        "in_progress": None
    }

    @staticmethod
    def create(username=None, password=None, tags=[], liked=[], completed=[], in_progress=[]):
        user = deepcopy(user_schema.user_template)
        user["id"] = user_schema.user_id
        user["username"] = username
        user["password"] = password # THIS IS NOT OK!!!
        user["tags"] = tags
        user["liked"] = liked
        user["completed"] = completed
        user["in_progress"] = []
        user_schema.user_id = str(int(user_schema.user_id[0])+1) + user_schema.user_id[1:]
        return user

# Instantiate some sample projects
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

