import React from 'react'
import Quantityinfo from '../json/LoactionQuantity.json'
import Location from '../json/LoactionName.json'

const LocationQuantity = (props) => {

    const {ProdID} = props
        
    let qtycount = Object.keys(Quantityinfo).length;
    let locnamecount = Object.keys(Location).length;
    let locationqtinfo = []
    let foundLoactionName =''
    let jsonArrData=''
   
    //look for productid in quantity info json file
    for(var i = 0; i < qtycount; i++) {
      
        //if product exist in quantity json file look for Locationid and get the name
         if(ProdID === Quantityinfo[i].ProductID){

            
            for(var z = 0; z < locnamecount; z++) {
                    if(Quantityinfo[i].LocationID === Location[z].LocationID){
                        foundLoactionName = Location[z].Name
                       // console.log('made it here')
                    }

            }
             
            //build new array with with qty and loaction name
            locationqtinfo.push({ locid:Quantityinfo[i].LocationID,qty:Quantityinfo[i].Quantity, Name:foundLoactionName })
              
            //converts array to json format - is not used in program for reference only
              jsonArrData = JSON.stringify(locationqtinfo)

         }

    }
   //check to see if there is 0 qty in the locationqtinfo array
    if(locationqtinfo.length === 0){
        console.log(locnamecount)
        return(
            <div>
            Qty on hand: 0
            </div>
        )
    } else {
        return (
        <div>
        Qty on hand:
          {locationqtinfo.map((locationqtinfo)=>{ 
                return ( 
                    <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{locationqtinfo.Name} : {locationqtinfo.qty}
                   
                    </div>
                );})}
        </div>
        )
    }
}

export default LocationQuantity
