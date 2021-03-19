import React,{useRef} from 'react'
import {APPLContext} from './../App'
import './rating.css'
import StarYellow from './SVGIMAGES/StarYellow.svg'
import StarGrey from './SVGIMAGES/Stargrey.svg'
import Review from '../json/MasterDetailListInfo.json'

const Rating = (props) => {
    const {ProdID} = props
    //console.log(ProdID)
    
    const ReRating = useRef()
    const ReRatingStarYellow = useRef([])
    const ReRatingStarGrey = useRef([])
    const Restars = useRef([])
    
    //find total objects in json file -Review-
    //and loop through until it finds a rating based on product id
    let count = Object.keys(Review).length;
    Restars.current.splice(0, Restars.current.length)
    
    for(var i = 0; i < count; i++) {
       // console.log(i);
        
         if(ProdID === Review[i].ProductID){
             
            let v = 'Rating ' + Review[i].Rating + ' /5'
            ReRating.current = v
            
            //store number of yellow star images to be printed out to screen
            for(let y=0; y < Review[i].Rating; y++){
            
            Restars.current.push({ star:'yellow' })
            //console.log(ReRatingStarYellow.current)
            }
            
           // console.log('length of stars array = '+Restars.current.length)

            //load grey stars if any to be loaded
            let greystarcnt=5-Restars.current.length
            for(let z=0; z < greystarcnt; z++){
               
               Restars.current.push({ star:'grey' })
               //console.log('for loop ='+ (greystarcnt))
              // console.log(Restars.current)
               }
            //console.log(ProdID + ' <> ' + Review[i].ProductID);
            
            break
         }else{
            ReRating.current ='No Rating'
           
         }

    }
   

    return (
      <div>
      {ReRating.current} 
      <div className = 'stars'>
      {Restars.current.map((staritems)=>{ 
                     if(staritems.star === 'yellow'){
                     return ( 
                        <div className='star'>
                        
                        <img src={StarYellow} width='32px' height='32px'></img>
                        </div>
                     )}else{
                        return ( 
                           <div className='Star'>
                           
                           <img src={StarGrey} width='32px' height='32px'></img>
                           </div>
                        )
                     }
                     
                     ;})} 
            </div>
           
            </div> 
    )
    
}

export default Rating

