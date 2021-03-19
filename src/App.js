
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header'
import ProductList from'./components/ProductList'
import { Switch, Route } from 'react-router-dom';
import Homescreen from './components/Homescreen'
import ProductDetailScreen from './components/ProductDetailScreen'
import CheckoutSummaryScreen from './components/CheckoutSummaryScreen'
import MasterDataDetailList from './json/MasterDetailListInfo.json'
export const APPLContext = React.createContext({
 checkboxes:[],

 ConList:'',
 cartcounter:0,
 cartitems:[],
 LoadStarSwitch:true,
 checkboxarray:[],
 TotalPrice:0,
 sidenavidname:'mySidenav',
 ShowNoShowProductlist:'Products-Container',
 ShowNoShowProductDetail:'Detail-Product-info',
 ShowNoShowcheckoutcontainer:'checkoutListContainer',
 ShowNoShowHomeScreen:'homescreen-container-details',
  ChangeConList: ()  => {},
  Changecartitems: ()  => {},
  Changecartcounter: ()  => {},
  ChangeLoadStarSwitch: ()  => {},
  Changecheckboxarray: ()  => {},
  ChangeTotalPrice: ()  => {},
  Changesidenavidname: ()  => {}, 
  ChangeShowNoShowProductlist: ()  => {},
  ChangeShowNoShowProductDetail: ()  => {},
  ChangeShowNoShowcheckoutcontainer: ()  => {},
  ChangeShowNoShowHomeScreen: ()  => {},
  Changecheckboxes: ()  => {},
 });


function App() {
  const [ConList, setConList] = useState(MasterDataDetailList)
  const [cartitems, setcartitems] = useState([])
  const [cartcounter, setcartcounter] = useState(0)
  const [LoadStarSwitch, setLoadStarSwitch] = useState(true)
  const [checkboxarray, setcheckboxarray] = useState([])
  const [TotalPrice, setTotalPrice] = useState(0)
  const [sidenavidname, setsidenavidname] = useState('mySidenav')
  const [ShowNoShowProductlist, setShowNoShowProductlist] = useState('dontshow')
  const [ShowNoShowProductDetail, setShowNoShowProductDetail] = useState('Detail-Product-info')
  const [ShowNoShowcheckoutcontainer, setShowNoShowcheckoutcontainer] = useState('checkoutListContainer')
  const [ShowNoShowHomeScreen, setShowNoShowHomeScreen] = useState('homescreen-container-details')
  const [checkboxes, setcheckboxes] = useState({
        Accessories: true,
        Bikes: true,
        Clothing: false,
        Components: false,
      });


  
  return (
    <APPLContext.Provider value = {{
      ConList,
      cartitems,
      cartcounter,
      LoadStarSwitch,
      checkboxarray,
      TotalPrice,
      sidenavidname,
      ShowNoShowProductlist,
      ShowNoShowProductDetail,
      ShowNoShowcheckoutcontainer,
      ShowNoShowHomeScreen,
      checkboxes,

      ChangeConList: ConList => setConList(ConList),
      Changecartitems: cartitems => setcartitems(cartitems),
      Changecartcounter: cartcounter => setcartcounter(cartcounter),
      ChangeLoadStarSwitch: LoadStarSwitch => setLoadStarSwitch(LoadStarSwitch),
      Changecheckboxarray: checkboxarray => setcheckboxarray(checkboxarray),
      ChangeTotalPrice: TotalPrice => setTotalPrice(TotalPrice),
      Changesidenavidname: sidenavidname => sidenavidname(sidenavidname),
      ChangeShowNoShowProductlist: ShowNoShowProductlist => setShowNoShowProductlist(ShowNoShowProductlist),
      ChangeShowNoShowProductDetail: ShowNoShowProductDetail => setShowNoShowProductDetail(ShowNoShowProductDetail),
      ChangeShowNoShowcheckoutcontainer: ShowNoShowcheckoutcontainer => setShowNoShowcheckoutcontainer(ShowNoShowcheckoutcontainer),
      ChangeShowNoShowHomeScreen: ShowNoShowHomeScreen => setShowNoShowHomeScreen(ShowNoShowHomeScreen),
      Changecheckboxes: checkboxes => setcheckboxes(checkboxes),
     
      
      }}>
    <div className="App">
     
      
      <Switch>
      <Route exact path='/'  component={Homescreen}/>
      <Route exact path='/component/:id'  component={ProductDetailScreen}/>
      <Route exact path='/component' component={CheckoutSummaryScreen}/>
      
    </Switch>
      
      
    
     
    </div>
    </APPLContext.Provider>
  );
}

export default App;
