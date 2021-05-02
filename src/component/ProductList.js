import React from "react";
import { ProductConsumer } from "../context";
import Title from "./Title";
import Product from "./Product";
export default function ProductList() {
  return (
    <>
      <div className="py-4">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.product.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
}
