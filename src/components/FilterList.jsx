import React,{useContext,useState,useRef} from 'react'
import {APPLContext} from './../App'
import MasterDataDetailList from '../json/MasterDetailListInfo.json'
import Review from '../json/Rating.json'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ContactSupportOutlined } from '@material-ui/icons';

const  FilterList = (props) => {
    const {li,nm}=props
    const aPPLContext = useContext(APPLContext)
    const [catary, setcatary] = useState(0);
    const checkboxvaluesarray = useRef([])
    const filteredlists = useRef([])
    const NewFilteredList = useRef([])
   
    const checkboxRatvaluesarray = useRef([])
    const filteredRatlists = useRef([])
    const NewFilteredRatList = useRef([])
    const tempRatList = useRef([])
    let  [,setState]=useState();

    const [checkboxes, setcheckboxes] = useState({
        Accessories: false,
        Bikes: false,
        Clothing: false,
        Components: false,
      });
    
    const handleClick = (event) =>{
        
    //init all variables and arrays
        let onestarlist=[]
        let twostarlist=[]
        let threestarlist=[]
        let fourstarlist=[]
        let fivestarlist=[]
        let arraysofstarlist=[]
        let masterstarlist=[]
        let onepricelist=[]
        let twopricelist=[]
        let threepricelist=[]
        let fourpricelist=[]
        let fivepricelist=[]
        let sixpricelist=[]
        let sevenpricelist=[]
        let arraysofpricelist=[]
        let masterpricelist=[]
        let Silverlist=[]
        let Blacklist=[]
        let Yellowlist=[]
        let Redlist=[]
        let Whitelist=[]
        let Bluelist=[]
        let arraysofcolorlist=[]
        let mastercolorlist=[]
        let OneStarflag=false
        let TwoStarflag=false
        let ThreeStarflag=false
        let FourStarflag=false
        let FiveStarflag=false

        let e=event

        const target = event.target;

        let value = target.value;

        
        //store checked value in array
        if(target.checked){
            setcheckboxes({ ...checkboxes, [target.name]: target.checked })
            checkboxvaluesarray.current.push(value) 
            aPPLContext.checkboxarray.push(value)
            console.log(checkboxvaluesarray.current)  
            console.log('contextarray='+ aPPLContext.checkboxarray)
            target.checked = true
        }else{
            // remove value from array when unchecked
                 
                 setcheckboxes({ ...checkboxes, [target.name]: target.checked=false})
                 const index = aPPLContext.checkboxarray.indexOf(value);
                 target.checked = false
                if (index > -1) {
                    
                    console.log('this target unchecked ' + target.checked )
                    checkboxvaluesarray.current.splice(index, 1);
                    filteredlists.current.splice(index,1)
                    aPPLContext.checkboxarray.splice(index, 1);
                    console.log('contextarray='+ aPPLContext.checkboxarray)
                    setState({});
                }
           
          
        }
        

        //create lists based on what has been checked 
        for(let a=0; a < aPPLContext.checkboxarray.length; a++){
            
            
            if(aPPLContext.checkboxarray[a]==='R1'){
                onestarlist = MasterDataDetailList.filter(elem => parseInt(elem.Rating) === 1)
                //console.log('onestar = '+onestarlist)
                OneStarflag = true
            }
            //list of all products for two star rating
            
            if(aPPLContext.checkboxarray[a]==='R2'){
                twostarlist= MasterDataDetailList.filter(elem => parseInt(elem.Rating) === 2)
               // console.log('twostar = '+twostarlist)
                TwoStarflag = true
                
            }
            if(aPPLContext.checkboxarray[a]==='R3'){
                threestarlist= MasterDataDetailList.filter(elem => parseInt(elem.Rating) === 3)
               // console.log('twostar = '+threestarlist)
                ThreeStarflag = true
                
            }
            if(aPPLContext.checkboxarray[a]==='R4'){
                fourstarlist= MasterDataDetailList.filter(elem => parseInt(elem.Rating) === 4)
               // console.log('twostar = '+fourstarlist)
                FourStarflag = true
                
            }
            if(aPPLContext.checkboxarray[a]==='R5'){
                fivestarlist= MasterDataDetailList.filter(elem => parseInt(elem.Rating) === 5)
               // console.log('twostar = '+fivestarlist)
                FiveStarflag = true
                
            }
            if(aPPLContext.checkboxarray[a]==='P1'){
                onepricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 0 &&  parseInt(elem.ListPrice) <=50)
               // console.log('onepricelist = '+onepricelist)
               
                
            }
            if(aPPLContext.checkboxarray[a]==='P2'){
                twopricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 49 &&  parseInt(elem.ListPrice) <=100)
               // console.log('onepricelist = '+twopricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='P3'){
                threepricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 100 &&  parseInt(elem.ListPrice) <=1000)
                //console.log('onepricelist = '+threepricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='P4'){
                fourpricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 1000 &&  parseInt(elem.ListPrice) <=2000)
               // console.log('onepricelist = '+fourpricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='P5'){
                fivepricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 2000 &&  parseInt(elem.ListPrice) <=3000)
               // console.log('onepricelist = '+fivepricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='P6'){
                sixpricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 3000 &&  parseInt(elem.ListPrice) <=4000)
               // console.log('onepricelist = '+sixpricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='P7'){
                sevenpricelist= MasterDataDetailList.filter(elem => parseInt(elem.ListPrice) > 4000 &&  parseInt(elem.ListPrice) <=5000)
               // console.log('onepricelist = '+sevenpricelist)
                
                
            }
            if(aPPLContext.checkboxarray[a]==='Silver'){
                Silverlist= MasterDataDetailList.filter(elem => elem.color === 'Silver')
               // console.log('onepricelist = '+Silverlist)
               
            }
            if(aPPLContext.checkboxarray[a]==='Black'){
                Blacklist= MasterDataDetailList.filter(elem => elem.color === 'Black')
              //  console.log('onepricelist = '+Blacklist)
              
            }
            if(aPPLContext.checkboxarray[a]==='Yellow'){
                Yellowlist= MasterDataDetailList.filter(elem => elem.color === 'Yellow')
              //  console.log('onepricelist = '+Yellowlist)
              
            }
            if(aPPLContext.checkboxarray[a]==='Red'){
                Redlist= MasterDataDetailList.filter(elem => elem.color === 'Red')
              //  console.log('onepricelist = '+Redlist)
              
            }
            if(aPPLContext.checkboxarray[a]==='White'){
                Whitelist= MasterDataDetailList.filter(elem => elem.color === 'White')
              //  console.log('onepricelist = '+Whitelist)
              
            }
            if(aPPLContext.checkboxarray[a]==='Blue'){
                Bluelist= MasterDataDetailList.filter(elem => elem.color === 'Blue')
             //   console.log('onepricelist = '+Bluelist)
              
            }

        }

        //build new arrays of starlists
        arraysofstarlist=[
        onestarlist,
        twostarlist,
        threestarlist,
        fourstarlist,
        fivestarlist
        ]

        arraysofpricelist=[
        onepricelist,
        twopricelist,
        threepricelist,
        fourpricelist,
        fivepricelist,
        sixpricelist,
        sevenpricelist,
        ]


        arraysofcolorlist=[
        Silverlist,
        Blacklist,
        Yellowlist,
        Redlist,
        Whitelist,
        Bluelist,
        ]
        
        //build the different lists
        mastercolorlist=[].concat(...arraysofcolorlist);
        
        masterpricelist=[].concat(...arraysofpricelist);
        masterstarlist =[].concat(...arraysofstarlist);
        
        console.log(masterstarlist)

        if(masterstarlist.length === 0 ){
        //get and store the different lists for categories based around a star rating or no star rating
                    for(let z=0; z < aPPLContext.checkboxarray.length; z++){
                        filteredlists.current[z] = MasterDataDetailList.filter(elem => parseInt(elem.ProductCategoryID) === parseInt(aPPLContext.checkboxarray[z]))
                       
                        }
                    //filter catorgorys by price
                    if(masterpricelist.length > 0) {
                        for(let z=0; z < aPPLContext.checkboxarray.length; z++){
                            filteredlists.current[z] = masterpricelist.filter(elem => parseInt(elem.ProductCategoryID) === parseInt(aPPLContext.checkboxarray[z]))
                           // console.log('stored lists = '+filteredlists.current[0])
                           
                        }
                    }

                    //filter catorgories by color
                    if(mastercolorlist.length > 0) {
                        for(let z=0; z < aPPLContext.checkboxarray.length; z++){
                            filteredlists.current[z] = mastercolorlist.filter(elem => parseInt(elem.ProductCategoryID) === parseInt(aPPLContext.checkboxarray[z]))
                           // console.log('stored lists = '+filteredlists.current[0])
                           
                        }
                    }
            }else{
                // filter list on the starrating list
                for(let z=0; z < aPPLContext.checkboxarray.length; z++){
                    filteredlists.current[z] = masterstarlist.filter(elem => parseInt(elem.ProductCategoryID) === parseInt(aPPLContext.checkboxarray[z]))
                   // console.log('stored lists of star = '+filteredlists.current[0])
                }
            } 
            console.log('contextarrayend of loop='+ aPPLContext.checkboxarray)      
        //build new filtered list based on stored lists in array
        NewFilteredList.current=filteredlists.current.flat()

        //display default list if nothing selected from all filter boxes
        if(NewFilteredList.current.length === 0 && aPPLContext.checkboxarray.length === 0){
            NewFilteredList.current = MasterDataDetailList
            
        }

     
       //set new list to be displayed
        aPPLContext.ChangeConList(NewFilteredList.current)
        

        //set screens to be displayed or not displayed
        aPPLContext.ShowNoShowHomeScreen = 'dontshow'
        aPPLContext.ChangeShowNoShowHomeScreen(aPPLContext.ShowNoShowHomeScreen)
       
        aPPLContext.ShowNoShowProductDetail = 'dontshow'
        aPPLContext.ChangeShowNoShowProductDetail(aPPLContext.ShowNoShowProductDetail)
        aPPLContext.ShowNoShowcheckoutcontainer = 'dontshow'
        aPPLContext.ChangeShowNoShowcheckoutcontainer(aPPLContext.ShowNoShowcheckoutcontainer)
        aPPLContext.ShowNoShowProductlist = 'Products-Container'
        aPPLContext.ChangeShowNoShowProductlist(aPPLContext.ShowNoShowProductlist)
        console.log(aPPLContext.ShowNoShowProductlist)
        
        
    } 

    

    if(nm==='Category'){
    return (
        <div>
            <FormControl>
              <FormGroup>
              {li.map(item=>{
                   return <FormControlLabel
                    value={item.ProductCategoryID}
                    control={<Checkbox color="primary" checked={checkboxes.CategoryName}/>}
                    label={item.CategoryName}
                    labelPlacement="end"
                    onClick={e => handleClick(e)}
                    
                    />

        })}
             <button onClick={e => handleClick(e)}>search</button>   
             </FormGroup>
            </FormControl>
        </div>
    )
    }

    if(nm==='Rating'){
        return (
            <div>
                <FormControl>
                  <FormGroup>
                  {li.map(item=>{
                       return <FormControlLabel
                        value={'R'+item.Rating}
                        control={<Checkbox color="primary" />}
                        label={item.Rating +'/5'} 
                        labelPlacement="end"
                        onClick={e => handleClick(e)}
                        />
    
            })}
                     <button onClick={e => handleClick(e)}>search</button>
                 </FormGroup>
                </FormControl>
            </div>
        )
        }

        if(nm==='Price'){
            return (
                <div>
                    <FormControl>
                      <FormGroup>
                      {li.map(item=>{
                           return <FormControlLabel
                            value={'P'+item.priceId}
                            control={<Checkbox color="primary" />}
                            label={item.price} 
                            labelPlacement="end"
                            onClick={e => handleClick(e)}
                            />
        
                })}
                         <button onClick={e => handleClick(e)}>search</button>
                     </FormGroup>
                    </FormControl>
                </div>
            )
            }
            if(nm==='Color'){
            return (
                <div>
                    <FormControl>
                      <FormGroup>
                      {li.map(item=>{
                           return <FormControlLabel
                            value={item.color}
                            control={<Checkbox color="primary" />}
                            label={item.color} 
                            labelPlacement="end"
                            onClick={e => handleClick(e)}
                            />
        
                })}
                         <button onClick={e => handleClick(e)}>search</button>
                     </FormGroup>
                    </FormControl>
                </div>
            )
            }
        return(
            null
        )
    
}

export default FilterList
