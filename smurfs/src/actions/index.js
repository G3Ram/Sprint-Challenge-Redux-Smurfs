/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const SHOW_SMURFS_START = "SHOW_SMURFS_START";
export const SHOW_SMURFS_SUCCESS = "SHOW_SMURFS_SUCCESS";
export const SHOW_SMURFS_FAILURE = "SHOW_SMURFS_FAILURE";
export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SHOW_SMURFS_START });
  console.log(":: CALLING GET SMURFS ::");
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SHOW_SMURFS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SHOW_SMURFS_FAILURE, payload: err });
    });
};
