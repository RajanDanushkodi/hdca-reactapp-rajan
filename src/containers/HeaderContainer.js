import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import Header from '../components/Header.js';

import logo from '../images/r-300.png';




function mapStateToProps(state, ownProps) { 
    return{
        logo: logo,
    }
}

const mapDispatchToProps =  {}


export default connect(mapStateToProps,mapDispatchToProps)(Header);