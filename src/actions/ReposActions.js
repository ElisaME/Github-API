export const REQUEST_REPO = 'REQUEST_REPO';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const GET_DETAILED_REPO = 'GET_DETAILED_REPO';
export const SAVE_REPO_NAME = 'SAVE_REPO_NAME';

export const fetchBegin = () => ({ type: REQUEST_REPO });

export const fetchRepos = (payload) => {
  return { type: FETCH_REPOS_SUCCESS, payload }
};

export const getDetailedRepo = (payload) => {
  return { type: GET_DETAILED_REPO, payload }
};

export const saveRepoName = (payload) => {
  return { type: SAVE_REPO_NAME, payload }
};