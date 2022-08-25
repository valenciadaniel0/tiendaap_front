import back from "../apis/back";

export const list = (auth_token) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  };
  let error = false;

  const response = await back
    .get(`categories`, config)
    .catch((errorResponse) => {
      error = true;
      dispatch({
        type: "CATEGORY_LIST",
        payload: [],
      });
    });

  if (!error) {
    dispatch({
      type: "CATEGORY_LIST",
      payload: response.data,
    });
  }
};
