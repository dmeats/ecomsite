import React,{useState,useContext,useEffect} from 'react'
import {APPLContext} from './../App'
import useWindowDimensions from './usewindowsize'
import CategoryList from '../json/CategoryList.json'
import { makeStyles } from "@material-ui/core/styles";
import SubCategoryList from '../json/SubCategoryList.json'
//import MasterList from '../json/MasterDetailList.json'
import MyAccordion from "./MyAccordion.jsx";
import xbutton from './SVGIMAGES/close_x_icon.svg'
import './LeftSideBarFilter.css'
import { ContactSupportOutlined } from '@material-ui/icons';


const  LeftSideBarFilter = () => {
  let  [,setState]=useState();
  const { height, width } = useWindowDimensions();
  const aPPLContext = useContext(APPLContext)
    const useStyles = makeStyles((theme) => ({
        root: {
          width: "220px",
          background: 'rgb(148, 123, 123)',
          height: "25vh",
          display: "flex",
          flexDirection: "column"
        }
      }));

      const ratinglist = [{
                            "StarId" : 1,
                            "Rating" : 1,
                          },
                          {
                            "StarId" : 2,
                            "Rating" : 2,
                          },
                          {
                            "StarId" : 3,
                            "Rating" : 3,
                          },
                          {
                            "StarId" : 4,
                            "Rating" : 4,
                          },
                          {
                            "StarId" : 5,
                            "Rating" : 5,
                          },


                        ]



    const Pricelist = [{
                            "priceId" : 1,
                            "price" : '$0.00 - $49.99',
                          },
                          {
                            "priceId" : 2,
                            "price" : '$50.00 - $99.99',
                          },
                          {
                            "priceId" : 3,
                            "price" : '$100.00 - $1000',
                          },
                          {
                            "priceId" : 4,
                            "price" : '$1000.00 - $2000',
                          },
                          {
                            "priceId" : 5,
                            "price" : '$2000.00 - $3000',
                          },
                          {
                            "priceId" : 6,
                            "price" : '$3000.00 - $4000',
                          },
                          {
                            "priceId" : 7,
                            "price" : '$4000.00 - $5000',
                          },


                        ]

                        const Colorlist = [{
                            "colorId" : 1,
                            "color" : 'Silver',
                          },
                          {
                            "colorId" : 2,
                            "color" : 'Black',
                          },
                          {
                            "colorId" : 3,
                            "color" : 'Yellow',
                          },
                          {
                            "colorId" : 4,
                            "color" : 'Red',
                          },
                          {
                            "colorId" : 5,
                            "color" : 'White',
                          },
                          {
                            "colorId" : 6,
                            "color" : 'Blue',
                          },
                          


                        ]
      const classes = useStyles();

      const unCheck = () => {
        
     //   let b = document.getElementsByClassName("PrivateSwitchBase-input-10");
        
     //   for(let i=0; i<b.length; i++) {
     //     console.log('indexvalue = ' + b[i] + ' = '+ b[i].checked)
     //   b[i].checked = false;
       
     //   }  
    
    //    aPPLContext.checkboxes.Accessories = false
     // let value = aPPLContext.checkboxes.Accessories
     //   console.log(value)
      //  aPPLContext.Changecheckboxes(value)
      //  aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
       
    }

      const closeNav = () =>{
        setState({});
        
        unCheck()
        document.getElementById(aPPLContext.sidenavidname).style.width = "0px";
        console.log('closing sidenav')
        
        aPPLContext.checkboxarray = aPPLContext.checkboxarray
        aPPLContext.Changecheckboxarray =(aPPLContext.checkboxarray)
        
      }

      const checkwidth = () =>{
      if(width > 415){
        setState({});
        
        document.getElementById(aPPLContext.sidenavidname).style.width = "240px"; 
             
        console.log('checking width')
      }
    }

   // useEffect(() => {
   //   checkwidth()
      
   // }, [])
    

    return (
        <div id={aPPLContext.sidenavidname} onLoad={()=>checkwidth()}>
        
             <div className='closebutton' ><img src={xbutton} width='34px' height='34px' onClick={e=>closeNav()}></img></div>
                <div className={classes.root}>
                    <MyAccordion name="Category" list = {CategoryList}/>
                    <MyAccordion name="Rating" list ={ratinglist}/>
                    <MyAccordion name="Price" list={Pricelist}/>
                    <MyAccordion name="Color" list={Colorlist}/>
                   
                    </div>
           
        </div>
    )
}

export default LeftSideBarFilter
