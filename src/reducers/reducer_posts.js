import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = {
  all: [], // index page for posts
  post: null // active post - showing when a post is clicked
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
