import React,{useState,useContext,useEffect} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {APPLContext} from './../App'
import MasterDataDetailList from '../json/MasterDetailListInfo.json'
import ProductList from'./ProductList'
import magfglass from './SVGIMAGES/MNGICON.svg'
import cart from './SVGIMAGES/CART.svg'
import user from './SVGIMAGES/USER.svg'
import hamburger from './SVGIMAGES/hamburger.svg'

const Header = () =>{
    const aPPLContext = useContext(APPLContext)
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(MasterDataDetailList);
    let  [,setState]=useState();
    // exclude column list from filter
    const excludeColumns = ["ProductID","description", "color","ListPrice","ProductPhotoID","ProductSubcategoryID","ProductCategoryID","LargePhotoFileName"];

    // handle change event of search input
    const handleChange = value => {
        aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
        console.log(value)
        setSearchText(value);
        filterData(value);

        //setscreens to show or not show
        aPPLContext.ShowNoShowHomeScreen = 'dontshow'
        aPPLContext.ChangeShowNoShowHomeScreen(aPPLContext.ShowNoShowHomeScreen)
        aPPLContext.ShowNoShowProductDetail = 'dontshow'
        aPPLContext.ChangeShowNoShowProductDetail(aPPLContext.ShowNoShowProductDetail)
        aPPLContext.ShowNoShowcheckoutcontainer = 'dontshow'
        aPPLContext.ChangeShowNoShowcheckoutcontainer(aPPLContext.ShowNoShowcheckoutcontainer)
      
        aPPLContext.ShowNoShowProductlist = 'Products-Container'
        aPPLContext.ChangeShowNoShowProductlist(aPPLContext.ShowNoShowProductlist)
        
    };
    const onclickevent = (value) =>{
        filterData(value);
        
    };
// 
   
  
  const resetlist = (e) =>{
    aPPLContext.ChangeConList(MasterDataDetailList)
    aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
    aPPLContext.ShowNoShowHomeScreen = 'homescreen-container-details'
        aPPLContext.ChangeShowNoShowHomeScreen(aPPLContext.ShowNoShowHomeScreen)
       
        aPPLContext.ShowNoShowProductDetail = 'dontshow'
        aPPLContext.ChangeShowNoShowProductDetail(aPPLContext.ShowNoShowProductDetail)
        aPPLContext.ShowNoShowcheckoutcontainer = 'dontshow'
        aPPLContext.ChangeShowNoShowcheckoutcontainer(aPPLContext.ShowNoShowcheckoutcontainer)
        aPPLContext.ShowNoShowProductlist = 'dontshow'
        aPPLContext.ChangeShowNoShowProductlist(aPPLContext.ShowNoShowProductlist)
  }

   
    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(MasterDataDetailList);
        else {
        const filteredData = MasterDataDetailList.filter(item => {
            return Object.keys(item).some(key =>
            excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            
            );
        });
        setData(filteredData);
        aPPLContext.ChangeConList(data)
        }
     }

     
     const openNav = () => {
        setState({});
        document.getElementById(aPPLContext.sidenavidname).style.width = "270px";
        
      }
     const displaycheckoutScreen = () =>{
        aPPLContext.ShowNoShowProductlist = 'dontshow'
        aPPLContext.ChangeShowNoShowProductlist(aPPLContext.ShowNoShowProductlist)
        aPPLContext.ShowNoShowcheckoutcontainer = 'checkoutListContainer'
        aPPLContext.ChangeShowNoShowcheckoutcontainer(aPPLContext.ShowNoShowcheckoutcontainer)
        aPPLContext.checkboxarray.splice(0, aPPLContext.checkboxarray.length)
     }
   

    return(
        <header className='HeaderContainer'>
            <div className='hamburger' ><img src={hamburger} width='34px' height='34px'onClick={e=>openNav()}></img></div>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
            <div className='CompanyName' onClick={e => resetlist(e)}> &nbsp; Some Bike shop Logo</div>
            </Link>
            
                 
                     <input className='SearchInputBox'
                          style={{ marginLeft: 5 }}
                          type="text"
                          placeholder="Type to search..."
                          value={searchText}
                          onChange={e => handleChange(e.target.value)}
                          
                         
                     />
                      <div className='SearchMagnifingGlass'  onClick={e => onclickevent(searchText)}>
                <img src={magfglass} width='32px' height='32px'></img>
            </div>
               
            
           
            <div className='iconitemsContainer'>
                <div className='UserAccountIcon'>
                <img src={user} width='34px' height='35px'></img>
                </div>
                <div className='userAccountWord'>User Account</div>
                <Link to={'/component'} style={{ textDecoration: 'none' }} onClick={() => displaycheckoutScreen()}>
                <div className='shoppingCartIcon'>
                <img src={cart} width='32px' height='32px'></img>
                </div>
                <div className='CheckoutWord'>Check Out</div>
                <div className='Checkoutquanity'>{aPPLContext.cartcounter}</div>
                </Link>
            </div>
            <div className="clearboth">
       
        </div>
        
        </header>
        
    )
}
export default Header