import React, { Component } from 'react'
import data from '../data.js'
import { Link } from 'react-router-dom'
import Sidebar from '../components/sidebar/sidebar'
export default class HomeScreen extends Component {
  state = {
    showSidebar: true
  }

  toggle = () => {
    const doesShow = this.state.showSidebar;
    this.setState({ showSidebar: !doesShow });
  };
  render() {


    return <ul className="products">
      {
        data.products.map(product =>
          <li>
            <div className="product">
              <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product" /></Link>
              <div className="product-name"><Link to={'/product/' + product._id}>{product.name}     &#8377; {product.price} </Link></div>
              <div className="product-brand">{product.brand}</div>
              {/* <div className="product-price">{product.price}</div> */}
              <div className="product-rating">{product.rating} Stars({product.numRating})</div>
            </div>

          </li>)
      }


    </ul>
  }
}
