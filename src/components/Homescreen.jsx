import React,{useContext,useState} from 'react'
import {APPLContext} from './../App'
import useWindowDimensions from './usewindowsize'
import Header from './Header'
import mobilebackground from './images/mobile_background.png'
import desktopbackground from './images/background.png'

import './homescreen.css'
import LeftSideBarFilter from './LeftSideBarFilter'
import ProductList from'./ProductList'

const Homescreen = () => {
    //console.log('in homescreen')
    const aPPLContext = useContext(APPLContext)
    const { height, width } = useWindowDimensions();
    console.log(width)
    if(width > 425){
    return (
        <div className='homescreen-container'>
            
            <Header/>
            <LeftSideBarFilter/>
            <ProductList/>
            <div className={aPPLContext.ShowNoShowHomeScreen} style={{ backgroundImage: `url(${desktopbackground})`,backgroundRepeat: 'no-repeat' }}>
                       <div className='title'>
                       <h1>Best Bike shop on the planet</h1>
                       </div>
            </div>
            
            
        </div>
    )
    }else{
        return (
            <div className='homescreen-container'>
                
                <Header/>
                <LeftSideBarFilter/>
                <ProductList/>
                <div className={aPPLContext.ShowNoShowHomeScreen} style={{ backgroundImage: `url(${mobilebackground})`,backgroundRepeat: 'no-repeat' }}>
                <div className='title'>
                       <h1>Best Bike shop on the planet</h1>
                       </div>
                </div>
                
                
            </div>
        )
    }
}

export default Homescreen

