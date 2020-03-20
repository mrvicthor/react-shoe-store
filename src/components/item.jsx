import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./item.css";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Item extends Component {
  render() {
    const { id, name, imageUrl, price } = this.props.product;

    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <ProductConsumer>
          {value => (
            <div
              className="card"
              onClick={() => value.handleDetail(id)}
              style={{ width: "14rem" }}
            >
              <Link to="/details">
                <img src={imageUrl} className="card-img-top" alt="product" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle text-muted">{price}</h6>
              </div>
              <div className="overlay">
                <button type="button" className="btn btn-light">
                  {" "}
                  <FontAwesomeIcon
                    className="icons"
                    icon={faHeart}
                  ></FontAwesomeIcon>
                </button>
                <button type="button" className="btn btn-light">
                  <FontAwesomeIcon
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className="icons"
                    icon={faShoppingCart}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

export default Item;
