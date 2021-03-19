import React,{useRef,useContext} from 'react'
import {Link} from 'react-router-dom'
import {APPLContext} from './../App'
import './ProductList.css'
import MasterDataDetailList from '../json/MasterDetailListInfo.json'
import Rating from './Rating'


const ProductList = () => {

const RefList = useRef()

const aPPLContext = useContext(APPLContext)

const ChangeDisplayofPage = () =>{
    aPPLContext.ShowNoShowProductlist = 'dontshow'
    aPPLContext.ChangeShowNoShowProductlist( aPPLContext.ShowNoShowProductlist)
    aPPLContext.ShowNoShowProductDetail = 'Detail-Product-info'
    aPPLContext.ChangeShowNoShowProductDetail( aPPLContext.ShowNoShowProductDetail)
} 
    

    if(aPPLContext.ConList.length>0){  
    return (
        <div className={aPPLContext.ShowNoShowProductlist}>
           
            {aPPLContext.ConList.map((e)=>{ 
                return (
                <Link to={'/component/' + e.ProductID}>
                <div  key={e.ProductID} className='Product' onClick={e => ChangeDisplayofPage()}>  
                        
                        <div className='Product-Image'>
                        <img src={process.env.PUBLIC_URL + '/images/' + e.LargePhotoFileName} alt="image" />
                        </div>
                        <div className='Product-Name'><h4>{e.Name}</h4></div>
                        <div className='Product-Price'>${e.ListPrice}</div>
                        <div className='Product-Rating'>
                        
                        <Rating ProdID={e.ProductID}/>
                        </div>

                </div>
                </Link>
         
        );})}
        
        </div>
    )
    }else{
        return(
            <div className='No-Items-Returned'>
                <p >Nothing found based on your search selections</p>
            </div>
        )
    }
}


export default ProductList

