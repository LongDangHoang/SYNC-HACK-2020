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
                        "instructions": []
    }

    @staticmethod
    def create(name=None, time=None, tags=[], tools=[], mater=[], age_r=None, numb=None, instructions=[]):
        project = deepcopy(project_schema.project_template)
        project['name'] = name
        project['time'] = time
        project['tags'] = tags
        project['tools'] = tools
        project['mater'] = mater
        project['age_r'] = age_r
        project['numb'] =  numb
        project['instructions'] = instructions
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