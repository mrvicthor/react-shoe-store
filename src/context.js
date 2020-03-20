import React, { Component } from "react";

import { itemsData, detailProduct } from "./itemsData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],

    modalOpen: false,
    modalProduct: detailProduct,
    displayAlert: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let initialProducts = [];
    itemsData.forEach(item => {
      const singleItem = { ...item };
      initialProducts = [...initialProducts, singleItem];
    });
    this.setState(() => {
      return {
        products: initialProducts
      };
    });
  };

  setErrorMsg = () => {
    this.setState({ displayAlert: !this.state.displayAlert });
  };

  getItem = id => {
    const product = this.state.products.find(product => product.id === id);
    return product;
  };

  checkIfInCart = id => {
    const inCart = this.state.cart.find(item => item.id === id);
    return inCart;
  };
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const selectedProduct = tempProducts[index];
    selectedProduct.count = 1;
    const price = selectedProduct.price;
    selectedProduct.total = price;
    console.log(selectedProduct);
    const cart = [...this.state.cart];
    if (this.checkIfInCart(selectedProduct.id)) {
      this.setErrorMsg();
      setTimeout(() => {
        this.setErrorMsg();
      }, 2000);

      const index = cart.indexOf(selectedProduct);
      cart.splice(index);

      return cart;
    }

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, selectedProduct]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDelete = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.products];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      this.handleDelete(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDelete: this.handleDelete,
          handleDetail: this.handleDetail,
          increment: this.increment,
          decrement: this.decrement,
          openModal: this.openModal,
          closeModal: this.closeModal,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
