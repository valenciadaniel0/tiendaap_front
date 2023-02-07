export const productListReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCT_LIST":
      return action.payload;
    default:
      return state;
  }
};


export const productDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

