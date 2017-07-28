import React, { Component, PropTypes } from 'react';
import '../styles/app.css';


const Converter=({currencies,convertTo,converterData,updateBaseAmt,changeBase,toggleToolTip})=>(
<div className="converter">
        {currencies && currencies.length>1 &&
          <div>
            <div className="converterHolder">
              <h3>Currency Converter</h3>
              <p className="fieldLabel">Type in amount and select currency:</p>
              <input type="text" className="default-input" defaultValue={1} onKeyUp={(e)=>updateBaseAmt(e.target.value,converterData.base.currency,converterData.name)}/>
              <select onChange={(e)=>changeBase(e.target.value,converterData.name)} className="default-select">
                {currencies.map((currency, i) => {
                return (
                  <option key={i} value={currency}>{currency}</option>
                )})}
              </select>
              <br/>
              <p className="fieldLabel">Converted amount:</p>
              <input type="text" className="default-input" value={converterData.converted.amt} disabled/>
              <select onChange={(e)=>convertTo(e.target.value,converterData.name)} className="default-select">
                {currencies.map((currency, i) => {
                return (
                  <option key={i} value={currency}>{currency}</option>
                )})}
              </select>
              <nav>
              <a className="disclaimer" onClick={(e)=>toggleToolTip(e)}>Disclaimer</a><br/>
              <article className="tooltip">
                <h5>Disclaimer</h5>
                <hr/>
                <p>
                  The rates are updated daily around 4PM CET.<br/>
                  These are rates published by the European Central Bank.
                </p>
              </article>
              </nav>
            </div>
          </div>
        }
</div>
);

Converter.prototype = {
convertTo: PropTypes.func,
currencies: PropTypes.object,
updateBaseAmt: PropTypes.func,
converterData: PropTypes.object,
changeBase:PropTypes.func,
toggleToolTip: PropTypes.func
}

export default Converter;