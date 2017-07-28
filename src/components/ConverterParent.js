import React, { Component, PropTypes } from 'react';
import '../styles/app.css';
import Converter from './Converter.js';


const ConverterParent=({currencies,convertTo,converterData,updateBaseAmt,changeBase,toggleToolTip})=>(
  <div className="convertersHolder">

    <Converter key={1} currencies={currencies.converter1} convertTo={convertTo}
      updateBaseAmt={updateBaseAmt} converterData={converterData.converter1} changeBase={changeBase} toggleToolTip={toggleToolTip}/>

    <Converter key={2} currencies={currencies.converter2} convertTo={convertTo}
      updateBaseAmt={updateBaseAmt} converterData={converterData.converter2} changeBase={changeBase} toggleToolTip={toggleToolTip}/>

    <Converter key={3} currencies={currencies.converter3} convertTo={convertTo}
      updateBaseAmt={updateBaseAmt} converterData={converterData.converter3} changeBase={changeBase} toggleToolTip={toggleToolTip}/>
      <hr/>
  </div>
  
);

ConverterParent.prototype = {
convertTo: PropTypes.func,
currencies: PropTypes.object,
updateBaseAmt: PropTypes.func,
converterData: PropTypes.object,
changeBase:PropTypes.func,
toggleToolTip:PropTypes.func
}

export default ConverterParent;