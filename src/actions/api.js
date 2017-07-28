export function updateApiResponse(response,converterName) {  
  return {
    type: "UPDATE_APIRESPONSE",
    apiresponse:response,
    converter:converterName
  };
}

