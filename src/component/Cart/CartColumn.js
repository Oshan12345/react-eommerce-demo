import React from "react";

function CartColumn() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>PRODUCTS</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>NAME OF PRODUCTS</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>PRICE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>QUENTITY</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>REMOVE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>TOTAL</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumn;
