import React from 'react'
import './footer.css'

const footer = props => (
  <footer className="footer">
    <div className="row">
      <div className="column">
        <ul>
          <li>Address:</li>
          <li>WeBuild Corporation, Bandra(500123)</li>
          <li>Maharashtra, India</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>Contact Us:</li>
          <li>Phone: 012-3456789</li>
          <li>Email: WeBuild.CoX5@gmail.com</li>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li>Instagram    Facebook    Youtube    Twitter</li>
        </ul>
      </div>

      <hr />
      <div className="row">
        <p className="bottom-bar">
          &copy;{new Date().getFullYear()} Nike,Inc. All Rights Reserved.
      </p>
      </div>
    </div>
  </footer>
)




export default footer