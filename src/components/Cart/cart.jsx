import React, { Component } from "react";
import EmptyCart from "./emptyCart";
import CartColumns from "./cartColumns";
import { ProductConsumer } from "../../context";
import CartList from "./cartList";
import CartTotal from "./cartTotal";
class Cart extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h1 className="text-center">your wishlist</h1>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
