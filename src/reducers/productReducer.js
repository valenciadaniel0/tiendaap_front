const productReducer = (state = [], action) => {
    switch (action.type) {
      case "PRODUCT_LIST":
        return action.payload;
      default:
        return state;
    }
  };

  export default productReducer;
