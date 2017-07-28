import React, { Component, PropTypes } from 'react';
import '../styles/app.css';


const Header=({logo})=>(
<div className="App">
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Currency Converter</h2>
        <p>React--Redux--Scss</p>
        <br/>
    </div><br/>
</div>
);

Header.prototype = {
    logo:PropTypes.string
}

export default Header;