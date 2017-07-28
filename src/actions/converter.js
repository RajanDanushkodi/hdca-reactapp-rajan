export function updateConvertedAmt(params) {  
  return {
    type: "UPDATE_CONVERTEDAMT",
    amt:params.amt,
    currency:params.currency,
    converterName:params.converterName
  };
}

export function updateBaseAmt(params) {  
  return {
    type: "UPDATE_BASEAMT",
    amt:params.amt,
    currency:params.currency,
    converterName:params.converterName
  };
}

export function initialiseCurrencies(params){
  return {
    type: "INITIALIZE_WITHCURRENCIES",
    currency:params.currency
  };
}

export function changeBaseCurrency(params){
  return {
    type: "CHANGE_BASECURRENCY",
    amt:params.amt,
    currency:params.currency,
    converterName:params.converterName
  };
}

