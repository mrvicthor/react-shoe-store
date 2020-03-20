import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./button";
const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const { id, name, imageUrl, info, price } = value.detailProduct;

        return (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{name}</h1>
              </div>
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <img src={imageUrl} className="img-fluid" alt="product" />
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h4 className="text-blue">
                    <strong>
                      {" "}
                      price :<span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3">
                    some info about the product
                  </p>
                  <p className="text-muted lead">{info}</p>
                </div>
                <div>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    add to cart
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
