def filter_by_reqs(projects:list, user_reqs:dict):
    result = []
    for proj in projects:
        if set(proj['age_r']).intersection(set(user_reqs['age'])) != set():
            if (proj['indoors'] == user_reqs['indoors'][0]) or\
                 (proj['indoors'] != user_reqs['indoors'][1] and user_reqs['indoors'][1] is not None):
                result.append(proj)
    return result