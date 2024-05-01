
 

 const date = new Date()  ; 
 const dateName = date.getDate() ; 
 const monthName = date.getMonth() ; 
 const currentYear = date.getFullYear() ; 
 import products from "../assets/products/camera.jpg" ;
 import { getImageURL } from "../utils/image-util";

 function Card(props){
   const {cardTitle , cardDesc , cardCover}= props ; 
    return <div className='card'>
                {/* <img src={getImageURL(cardCover)} alt={cardCover} className='w-full object-cover' /> */}
                <img src={cardCover} alt={cardCover} className='w-full object-cover' />

                <h3 className='cardTitle'>{cardTitle}</h3>
                <p className='cardDesc'>{cardDesc}</p>
                <p className='cardFooter'>{dateName+"/"+monthName+"/"+currentYear}</p>

             </div>
 
 }

export default Card ; 