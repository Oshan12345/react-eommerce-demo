import React from "react";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="Your" title="cart" />
                <CartColumn />
                <CartList value={value} />
                <CartTotal value={value} history={this.prop.history} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
}
