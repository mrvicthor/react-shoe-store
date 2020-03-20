import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import {ButtonContainer} from "./button";

const Modal = () => {
  return (
    <ProductConsumer>
      {value => {
        const { modalOpen, closeModal } = value;
        const { imageUrl, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalWrapper>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <h5>Item has been added to the cart</h5>
                    <img src={imageUrl} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : $ {price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        store
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        go to cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalWrapper>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-tems: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
  z-index: 3;
`;
