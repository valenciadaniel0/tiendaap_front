import back from "../apis/back";

export const search = (code, auth_token) => async (dispatch) => {
  let config = {
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  };
  let error = false;

  dispatch({
    type: "ITEM",
    payload: null,
  });

  const response = await back
    .get(`/items/${code}/find_by_code`, config)
    .catch((errorResponse) => {
      error = true;
      let errorMessage = code
        ? errorResponse.response.data.error
        : "You must enter a product code";
      dispatch({
        type: "FORM_ERROR",
        payload: errorMessage,
      });
    });

  if (!error) {
    dispatch({
      type: "ITEM",
      payload: response.data,
    });
  }
};
