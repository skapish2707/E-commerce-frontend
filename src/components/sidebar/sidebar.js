import React from 'react'
import './sidebar.css'
import { BrowserRouter, Route } from 'react-router-dom'


const sidebar = props => (
  <BrowserRouter>
    <div className="main-div">
      <div className="categories">
        <h3>Categories</h3>
        <p>Training and Gym</p>
        <p>Running</p>
        <p>Lifestyle</p>
        <p>Athletics</p>
      </div>
      <hr />

      <h3>Gender</h3>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">Men</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">Women</label>
      </div>
      <hr />

      {/* Product Color */}
      <div className="color">
        <h3>Colour</h3>

        <div className="choose-color">
          <div className="same">
            <label for="purple-radio" class="purple"></label>
            <p class="para-col">
              Purple</p>
          </div>
          <div className="same">
            <label for="black-radio" class="black"></label>
            <p class="para-col">Black</p>
          </div>
          <div className="same">
            <label for="red-radio" class="red"></label>
            <p class="para-col">Red</p>
          </div>
          <div className="same">
            <label for="orange-radio" class="orange"></label>
            <p class="para-col">Orange</p>
          </div>
          <div className="same">
            <label for="blue-radio" class="blue"></label>
            <p class="para-col">Blue</p>
          </div>
          <div className="same">
            <label for="white-radio" class="white"></label>
            <p class="para-col">White</p>

          </div>
          <div className="same">
            <label for="brown-radio" class="brown"></label>
            <p class="para-col">Brown</p>
          </div>
          <div className="same">
            <label for="green-radio" class="green"></label>
            <p class="para-col">Green</p>
          </div>
          <div className="same">
            <label for="yellow-radio" class="yellow"></label>
            <p class="para-col">Yellow</p>
          </div>
          <div className="same">
            <label for="multi-radio" class="multi"></label>
            <p class="para-col">Multi-
              colour</p>
          </div>
          <div className="same">
            <label for="gray-radio" class="gray"></label>
            <p class="para-col">Gray</p>
          </div>
          <div className="same">
            <label for="pink-radio" class="pink"></label>
            <p class="para-col">Pink</p>
          </div>


        </div>
      </div>
      <hr />
      {/*Size*/}
      <h3>Size</h3>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK5</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK6</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK7</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK8</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK9</label>
      </div>
      <div className="size">
        <input type="checkbox" />
        <label for="checkbox">UK10</label>
      </div>
      <hr />
      <div className="container">
        <h3>Price Range</h3>
        <input type="range" min="0" max="100" id="slider" />
      </div>



    </div>
  </BrowserRouter>
)

export default sidebar;