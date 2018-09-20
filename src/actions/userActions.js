import axios from "axios";
export const sampleAction = () => dispatch => {
  console.log("hello");
  dispatch({
    type: "SAMPLE_ACTION",
    payload: "result yielded."
  });
};
export const sampleFetch = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "SAMPLE_FETCH",
        payload: json
      });
    });
};
export const sampleAxios = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
    console.log(response);
    dispatch({
      type: "SAMPLE_AXIOS",
      payload: response.data
    });
  });
};
