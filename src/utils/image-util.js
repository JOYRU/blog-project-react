
function getImageURL(name){
    return new URL('../assests/product/${name}',import.meta.url).href
 
}

export {getImageURL} ; 