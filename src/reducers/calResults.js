
const initialState ={
    converter1:{base:{amt:1},converted:{amt:1},name:"converter1"},
    converter2:{base:{amt:1},converted:{amt:1},name:"converter2"},
    converter3:{base:{amt:1},converted:{amt:1},name:"converter3"},base:{amt:1},converted:{amt:1}
}


export default function calResults(state = initialState, action) {  
  let defaultBaseAmt;
  let defaultConvertedAmt;

  let converter1;
  let converter2;
  let converter3;
  let baseAmt;
  let baseCurrency;
  let convertedAmt;
  let convertedCurrency;
  
  let converterKey=action.converterName;
  let actionCurrency = action.currency;
  let actionAmt = action.amt;
  switch (action.type) {
    case "INITIALIZE_WITHCURRENCIES":
    defaultBaseAmt=state.base.amt;
    defaultConvertedAmt=state.converted.amt;
      return {
          ...state,
          converter1:{
                    name:"converter1",
                    converted:{
                        amt:defaultConvertedAmt,
                        currency:actionCurrency,
                      },
                      base:{
                        amt:defaultBaseAmt,
                        currency:actionCurrency
                      }
                  },
          converter2:{
                    name:"converter2",
                    converted:{
                        amt:defaultConvertedAmt,
                        currency:actionCurrency
                      },
                      base:{
                        amt:defaultBaseAmt,
                        currency:actionCurrency
                      }
                  },
          converter3:{
                    name:"converter3",
                    converted:{
                        amt:defaultConvertedAmt,
                        currency:actionCurrency
                      },
                      base:{
                        amt:defaultBaseAmt,
                        currency:actionCurrency
                      }
                  }
          }
    case "CHANGE_BASECURRENCY":
    defaultBaseAmt=state[converterKey].base.amt;
    converter1=(converterKey!=="converter1")?state.converter1:{"name":converterKey, base:{amt:defaultBaseAmt,currency:actionCurrency}, converted:state.converter1.converted};
    converter2=(converterKey!=="converter2")?state.converter2:{"name":converterKey, base:{amt:defaultBaseAmt,currency:actionCurrency}, converted:state.converter2.converted};
    converter3=(converterKey!=="converter3")?state.converter3:{"name":converterKey, base:{amt:defaultBaseAmt,currency:actionCurrency}, converted:state.converter3.converted};
      return {
          ...state,
          converter1:converter1,
          converter2:converter2,
          converter3:converter3
          }
    case "UPDATE_CONVERTEDAMT":
    converter1=(converterKey!=="converter1")?state.converter1:{"name":converterKey, base:state.converter1.base, converted:{amt:actionAmt,currency:actionCurrency}};
    converter2=(converterKey!=="converter2")?state.converter2:{"name":converterKey, base:state.converter2.base, converted:{amt:actionAmt,currency:actionCurrency}};
    converter3=(converterKey!=="converter3")?state.converter3:{"name":converterKey, base:state.converter3.base, converted:{amt:actionAmt,currency:actionCurrency}};
      return {
          ...state,
          converter1:converter1,
          converter2:converter2,
          converter3:converter3
          }
    case "UPDATE_BASEAMT" :
    converter1=(converterKey!=="converter1")?state.converter1:{"name":converterKey, base:{amt:actionAmt,currency:actionCurrency}, converted:state.converter1.converted};
    converter2=(converterKey!=="converter2")?state.converter2:{"name":converterKey, base:{amt:actionAmt,currency:actionCurrency}, converted:state.converter2.converted};
    converter3=(converterKey!=="converter3")?state.converter3:{"name":converterKey, base:{amt:actionAmt,currency:actionCurrency}, converted:state.converter3.converted};
      return {
          ...state,
          converter1:converter1,
          converter2:converter2,
          converter3:converter3
          }
    default:
      return state;
  }
}