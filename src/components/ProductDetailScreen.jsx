import React,{useContext,useState} from 'react'
import {APPLContext} from './../App'
import Header from './Header'
import LeftSideBarFilter from './LeftSideBarFilter'
import LocationQuantity from './LocationQuantity'
import MasterDataDetailList from '../json/MasterDetailListInfo.json'
import CategoryList from '../json/CategoryList.json'
import './ProductDetailScreen.css'
import ProductList from'./ProductList'
import SubCategoryList from '../json/SubCategoryList.json'
import FilterList from './FilterList'

import Rating from './Rating'

const ProductDetailScreen = (props) => {
    let  [,setState]=useState();
  //gets parms from url string and props
  //props.match.params.id
  const aPPLContext = useContext(APPLContext)
    const product = MasterDataDetailList.find(x => x.ProductID === parseInt(props.match.params.id))
    const category = CategoryList.find(y=>y.ProductCategoryID === product.ProductCategoryID)
    //aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
    console.log(category.CategoryName)
    
    
    

    const onclickevent =()=>{
        aPPLContext.cartcounter = aPPLContext.cartcounter + 1
        aPPLContext.TotalPrice = aPPLContext.TotalPrice + product.ListPrice
        aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
        aPPLContext.ChangeTotalPrice(aPPLContext.TotalPrice)
        aPPLContext.Changecartcounter(aPPLContext.cartcounter)
        console.log(aPPLContext.cartcounter)
        let lengtharry=aPPLContext.cartitems.length
        let rowid = lengtharry + 1
        aPPLContext.cartitems.push({prodrowid:rowid, prodID:product.ProductID,prodname:product.Name, prodprice:product.ListPrice })
        console.log(aPPLContext.cartitems)   
        setState({});
    }
    return(
        <div>
            
            <Header/>
            <LeftSideBarFilter/>
            <ProductList/>
            <main>
            <section class={aPPLContext.ShowNoShowProductDetail}>
                <ul>
                <li className>
                    <figure>
                    <img src={process.env.PUBLIC_URL + '/images/' + product.LargePhotoFileName} alt="image" />
                    </figure>
              
                </li>
                <li>
                <div className='Detail-Product-name'>Product ID: {product.ProductID}</div>
                    <div className='Detail-Product-name'>Name: {product.Name}</div>
                    <div className='Detail-Product-color'>Category : {category.CategoryName}</div>
                    <div className='Detail-Product-color'>Sub Category : {product.SubcatName}</div>
                 
                    <div className='Detail-Product-color'>Color  : {product.color}</div>
                    <div><p> </p></div>
                    <div className='Detail-Product-color'>Description : {product.description}</div>
                    <div><p> </p></div>
                    <div className='Detail-Product-color'><Rating ProdID={product.ProductID}/></div>
                   
                </li>
                <li>
                    <div>
                    <div className='Detail-Product-name'>Price: ${product.ListPrice}</div>
                    <div className='cartbutton' onClick={() => onclickevent()} >Add to cart</div>
                    <LocationQuantity ProdID={product.ProductID}/>
                    
                    </div>
                </li>
                </ul>
                </section>
                </main>
        </div>
    )
   
}

export default ProductDetailScreen
