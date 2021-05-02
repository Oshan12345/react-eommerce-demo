import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Details() {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value.detailProduct);
        const {
          id,
          title,
          img,
          price,
          company,
          inCart,
          info,
        } = value.detailProduct;
        return (
          // bootstrap

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={img} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text_title">Model : {title}</h5>
                  <h5 className="card-title">Manufacturer : {company}</h5>
                  <h5 className="card-title">Price : ${price}</h5>
                  <p className="card-text  ">
                    <span className="font-weight-bold  ">
                      Some info about the product
                    </span>
                    <br />
                    <span>{info}</span>
                  </p>
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Back to Product
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    className={inCart ? "btn2" : "btn"}
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default Details;
