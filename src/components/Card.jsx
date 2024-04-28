
 

 const date = new Date()  ; 
 const dateName = date.getDate() ; 
 const monthName = date.getMonth() ; 
 const currentYear = date.getFullYear() ; 

 function Card(props){
   const {cardTitle , cardDesc}= props ; 
    return <div className='card'>
                <h3 className='cardTitle'>{cardTitle}</h3>
                <p className='cardDesc'>{cardDesc}</p>
                <p className='cardFooter'>{dateName+"/"+monthName+"/"+currentYear}</p>
             </div>
 
 }

export default Card ; 