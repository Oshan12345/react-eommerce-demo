import React, { Component } from "react";

import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    product: [],
    detailProduct: detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      //  const singleProduct = { ...item };
      const singleProduct = item;
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState(() => {
      return { product: tempProducts };
    });
  };
  getItem = (id) => {
    const product = this.state.product.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    console.log("hello from addToCart,, This is id:", id);

    let tempProducts = [...this.state.product];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      }
      // () => {
      //   console.log(this.state);
      //   this.addTotal();
      // }
    );
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(() => {
      return (
        {
          cart: [...tempCart],
        },
        () => {
          this.addTotal();
        }
      );
    });
  };
  decrement = (id) => {
    console.log("this is decrement");

    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    console.log("item removed");
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    console.log(removedProduct);
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProduct],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };
  clearCart = () => {
    console.log("cart is cleared");
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };
  addTotal = () => {
    let subtotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
