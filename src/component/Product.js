import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { ProductConsumer } from "../context";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
function Product({ product }) {
  const { id, title, img, price, inCart } = product;

  return (
    <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <Paper elevation={5}>
        <div className="card">
          <ProductConsumer>
            {(value) => {
              console.log(value.handleDetail);
              return (
                <>
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">price : ${price}</h6>
                    <Link
                      to="/details"
                      className="card-link button_detail text_title"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        // onClick={value.handleDetail(id)}
                        onClick={() => {
                          value.handleDetail(id);
                        }}
                      >
                        View details
                      </Button>
                    </Link>
                    <Button
                      className="card-link button_cart text_title"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? (
                        <p className="text-capitalize mb-0" disabled>
                          In Cart
                        </p>
                      ) : (
                        <ShoppingCartIcon>Add to Cart</ShoppingCartIcon>
                      )}
                    </Button>
                  </div>
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </Paper>
    </div>
  );
}

export default Product;

// <Button
//   variant="contained"
//   classNameName="cart-btn"
//   disabled={inCart ? true : false}
//   onClick={() => {
//     console.log("you have clicked the button");
//     value.addToCart(id);
//     value.openModal(id);
//   }}
// >
//   {inCart ? (
//     <p classNameName="text-xapitalize mb-0" disabled>
//       In Cart
//     </p>
//   ) : (
//     <ShoppingCartIcon />
//   )}
// </Button>;
