import {
  SHOW_SMURFS_SUCCESS,
  SHOW_SMURFS_START,
  SHOW_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  DEL_SMURFS_START,
  DEL_SMURFS_SUCCESS,
  DEL_SMURFS_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  error: "",
  isLoading: false
};

function smurfsReducer(state = initialState, action) {
  console.log(":: IN SMURFS REDUCER ::");
  console.log("ACTION TYPE IS " + action.type);
  console.log("ACTION PAYLOAD IS " + action.payload);

  switch (action.type) {
    case SHOW_SMURFS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SHOW_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    }
    case SHOW_SMURFS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case ADD_SMURFS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    }
    case ADD_SMURFS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    case DEL_SMURFS_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case DEL_SMURFS_SUCCESS: {
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    }
    case DEL_SMURFS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default smurfsReducer;
