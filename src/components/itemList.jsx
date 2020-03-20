import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Item from "./item";

class ItemList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <ProductConsumer>
            {value => {
              const { displayAlert } = value;
              return (
                <div className={displayAlert ? "alert alert-danger mt-2" : "status"}>
                  This item already exist in cart
                </div>
              );
            }}
          </ProductConsumer>

          <h2>New Arrivals</h2>

          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Item key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemList;
