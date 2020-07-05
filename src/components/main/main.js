import React from 'react'
import './main.css'
import { Route } from 'react-router-dom'
import HomeScreen from '../../Screens/HomeScreen'
import ProductScreen from '../../Screens/ProductScreen'

const main = props => (
  <main className="main">
    <div className="content">
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />

    </div>

  </main>
)


export default main;