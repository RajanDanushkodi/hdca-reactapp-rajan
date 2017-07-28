
const initialState ={
    latest:{"default":"RAJAN is great"},
    prevLatest:{}
}


export default function apiRes(state = initialState, action) {  
  switch (action.type) {
    case "UPDATE_APIRESPONSE":
    let prevlatestApiRes = state.latest;
    let latestApiRes = action.apiresponse;
    latestApiRes.rates[latestApiRes.base]=1;
    let converterKey=action.converter;
    if(action.converter){
      let prevconverter1=state.latest.converter1;
      let prevconverter2=state.latest.converter2;
      let prevconverter3=state.latest.converter3;
      let initialres=state.latest.initialres;
      let cvrtrOne = (converterKey!=="converter1")?prevconverter1:latestApiRes;
      let cvrtrTwo = (converterKey!=="converter2")?prevconverter2:latestApiRes;
      let cvrtrThree = (converterKey!=="converter3")?prevconverter3:latestApiRes;
      return {
        ...state,
        latest :{
          initialres:initialres,
          converter1:cvrtrOne,
          converter2:cvrtrTwo,
          converter3:cvrtrThree
        },
        prevLatest : prevlatestApiRes
        }
    }else{
      let latestState={initialres:latestApiRes,converter1:latestApiRes,converter2:latestApiRes,converter3:latestApiRes}
      return {
        ...state,
        latest :latestState,
        prevLatest : prevlatestApiRes
          }
    } 

    default:
      return state;
  }
}