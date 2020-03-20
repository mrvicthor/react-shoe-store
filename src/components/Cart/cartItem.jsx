import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item, value }) => {
  const { id, imageUrl, name, price, count, total } = item;
  
  const { handleDelete, increment, decrement } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={imageUrl}
          className="img-fluid"
          alt="product"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span onClick={() => decrement(id)} className="btn btn-black mx-1">
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span onClick={() => increment(id)} className="btn btn-black mx-1">
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon1" onClick={() => handleDelete(id)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
