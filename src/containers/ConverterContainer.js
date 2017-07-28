import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConverterParent from '../components/ConverterParent.js';
import * as apiActions from '../actions/api.js';
import * as converterActions from '../actions/converter.js';
import {loadDoc,changeBase} from '../api/converter.js';
import {convertTo} from '../utils/converter.js';
let ONCE=true;
let FIRSTTIME=true;
let currencies={converter1:[],converter2:[],converter3:[]};
let apiResObj={};
let calResults={};


function mapStateToProps(state, ownProps) {
    apiResObj=state.apiRes;
    calResults=state.calResults;
    let initialres=apiResObj.latest.initialres;
    if(ONCE && initialres){
        currencies = {converter1:[initialres.base],converter2:[initialres.base],converter3:[initialres.base]};
        for(var k in initialres.rates){
            currencies.converter1.push(k);
            currencies.converter2.push(k);
            currencies.converter3.push(k);
        } 
        ONCE=false;
    }
    return{

        converterData:calResults,
        currencies: currencies
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    if(FIRSTTIME){
    loadDoc().then(resp => {

        dispatch(apiActions.updateApiResponse(resp));
        let params={currency:resp.base};
        dispatch(converterActions.initialiseCurrencies(params));
    });
    FIRSTTIME=false;

    }

return{
//loadDoc:()=>dispatch(latestActions.updateApiResponse(loadDoc()))

    
changeBase:(base,converterName)=>{
    changeBase(base,converterName).then(resp => {
        dispatch(apiActions.updateApiResponse(resp,converterName));
        let params={currency:resp.base,converterName:converterName}
        dispatch(converterActions.changeBaseCurrency(params));
        let converatedAmt=Number(calResults[converterName].base.amt);
        if(calResults[converterName].base.currency!==calResults[converterName].converted.currency){
            converatedAmt=convertTo(calResults[converterName].converted.currency,apiResObj.latest[converterName].rates,Number(calResults[converterName].base.amt));
        }
        let convertedParams={amt:converatedAmt,currency:calResults[converterName].converted.currency,converterName:converterName};
        dispatch(converterActions.updateConvertedAmt(convertedParams));
    })
},
updateBaseAmt:(value,baseCurrency,converterName)=>{
    let updateParams={amt:Number(value),currency:baseCurrency,converterName:converterName};
    dispatch(converterActions.updateBaseAmt(updateParams));
    let converatedAmt=Number(value);
    if(baseCurrency!==calResults[converterName].converted.currency){
        converatedAmt=convertTo(calResults[converterName].converted.currency,apiResObj.latest[converterName].rates,Number(value));
    }
    let convertedParams={amt:converatedAmt,currency:calResults[converterName].converted.currency,converterName:converterName};
    dispatch(converterActions.updateConvertedAmt(convertedParams));
},
convertTo:(value,converterName)=>{
    let converatedAmt=calResults[converterName].base.amt;
    if(value!==calResults[converterName].base.currency){
        converatedAmt=convertTo(value,apiResObj.latest[converterName].rates,converatedAmt);
    }
    let convertedParams={amt:converatedAmt,currency:value, converterName:converterName};
    dispatch(converterActions.updateConvertedAmt(convertedParams));

},

toggleToolTip:(element)=>{
    let toggleElement=element.target.parentElement.lastChild;
    if(toggleElement.style.visibility=="hidden" || toggleElement.style.visibility==""){
    toggleElement.style.visibility="visible";
    }else{
       toggleElement.style.visibility="hidden"; 
    }
}

}
}


export default connect(mapStateToProps,mapDispatchToProps)(ConverterParent);