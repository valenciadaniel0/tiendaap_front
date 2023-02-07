import back from "../apis/back";

let headersConfiguration = (auth_token) => {
  return {
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  };
};

export const list = (auth_token) => async (dispatch) => {
  let config = headersConfiguration(auth_token);
  let error = false;

  const response = await back.get(`products`, config).catch((errorResponse) => {
    error = true;
    dispatch({
      type: "PRODUCT_LIST",
      payload: [],
    });
  });

  if (!error) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: response.data,
    });
  }
};

export const show = (auth_token, product_id) => async (dispatch) => {
  let config = headersConfiguration(auth_token);
  let error = false;
  const response = await back
    .get(`products/${product_id}`, config)
    .catch((errorResponse) => {
      error = true;
      dispatch({
        type: "PRODUCT_DETAILS",
        payload: {},
      });
    });

  if (!error) {
    dispatch({
      type: "PRODUCT_DETAILS",
      payload: response.data,
    });
  }
};
