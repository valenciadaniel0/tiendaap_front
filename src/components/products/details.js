import React, { useEffect } from "react";
import { show } from "../../actions/product";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { id } = useParams();
  useEffect(() => {
    props.show(props.user.authentication_token, id);
  }, []);
  return (
    <div>
      <p>Hello + {props.product.name}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    product: state.productDetails,
  };
};

export default connect(mapStateToProps, { show })(ProductDetails);
