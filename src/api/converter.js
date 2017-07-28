
export function loadDoc() {
    return fetch("https://api.fixer.io/latest").then(resp => resp.json())
}

export function changeBase(base,converterName) {
    let baseParam= base?'base='+base:'';
    return fetch("https://api.fixer.io/latest?"+baseParam).then(resp => resp.json())
}


export function convertTo(value, rates){
    return rates.value;
}