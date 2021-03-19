import React,{useContext,useRef} from 'react'
import {APPLContext} from './../App'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import LeftSideBarFilter from './LeftSideBarFilter'
import ProductList from'./ProductList'
import './CheckoutSummaryScreen.css'
import Header from './Header'
import subtract from './SVGIMAGES/subtract.svg'
import add from './SVGIMAGES/add.svg'
import { PlayCircleFilledWhite } from '@material-ui/icons';

const CheckoutSummaryScreen =()=> {
    const aPPLContext = useContext(APPLContext)
    const totalprice = useRef(0)
    aPPLContext.ShowNoShowApprootScreen='dontshow'
    aPPLContext.ChangeShowNoShowApprootScreen(aPPLContext.ShowNoShowApprootScreen)
  
 const useStyles = makeStyles({
        table: {
          maxWidth: 90,
          background: 'White',
        },
      });
   

    const classes = useStyles();
   

    //add an item to the list
    const additem = (prodID,prodprice,prodname) =>{
        console.log('adding' + prodID)



        aPPLContext.cartcounter = aPPLContext.cartcounter + 1
        aPPLContext.TotalPrice = aPPLContext.TotalPrice + prodprice
        
        aPPLContext.ChangeTotalPrice(aPPLContext.TotalPrice)
        aPPLContext.Changecartcounter(aPPLContext.cartcounter)
      //  console.log(aPPLContext.cartcounter)
      let lengtharry=aPPLContext.cartitems.length
        let rowid = lengtharry + 1
        aPPLContext.cartitems.push({prodrowid:rowid, prodID:prodID,prodname:prodname, prodprice:prodprice })
        aPPLContext.cartitems.sort(function (a, b) {
            return a.prodID - b.prodID;
          });
        aPPLContext.Changecartitems(aPPLContext.cartitems)
     


    }

    //subtract item from the list
    const subtractitem = (prodID,prodprice) =>{
        console.log('subtracting' + prodID)


        var index = aPPLContext.cartitems.map(x => {
            return x.prodID;
            
          }).indexOf(prodID);
          
          aPPLContext.cartitems.splice(index, 1);
         let cnt = 0
          for(let a=0; a<aPPLContext.cartitems.length; a++){
              
              cnt = cnt + 1
              console.log('cnt='+cnt+' === '+ aPPLContext.cartitems[a].prodrowid)
           
                aPPLContext.cartitems[a].prodrowid = cnt; 
                console.log(aPPLContext.cartitems)
            
          }

          aPPLContext.Changecartitems(aPPLContext.cartitems)
        aPPLContext.cartcounter = aPPLContext.cartcounter - 1
        aPPLContext.Changecartcounter(aPPLContext.cartcounter)
        aPPLContext.TotalPrice = aPPLContext.TotalPrice - prodprice
       // console.log(aPPLContext.cartitems);
        aPPLContext.ChangeTotalPrice(aPPLContext.TotalPrice)
       // aPPLContext.Changecartcounter(aPPLContext.cartcounter)
       // console.log(aPPLContext.cartcounter)
       // aPPLContext.cartitems.push({ prodID:product.ProductID,prodname:product.Name, prodprice:product.ListPrice })
       


    }

    return (
        <div className='checkoutcontainer'>
            <Header/>
            <LeftSideBarFilter/>
            <ProductList/>
            <div className={aPPLContext.ShowNoShowcheckoutcontainer}>

            <h1>Payment Summary</h1><br></br>
            <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row" align="left">ProductID</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Price &nbsp;$</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {aPPLContext.cartitems.map((row) => (
              
            <TableRow key={row.prodrowid}>
              
              <TableCell align="left">{row.prodID}</TableCell>
              <TableCell align="left">{row.prodname}</TableCell>
              <TableCell align="left">{row.prodprice}</TableCell>
              <TableCell align="left" onClick={() => additem(row.prodID,row.prodprice,row.prodname)}><img src={add} width='17px' height='17px'></img></TableCell>
              <TableCell align="left" onClick={() => subtractitem(row.prodID,row.prodprice)}><img src={subtract} width='17px' height='17px'></img></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                
                    
                <div>
               <br></br> <h3>Total Price:${aPPLContext.TotalPrice.toFixed(2)}</h3>

               <br></br>
               <h5>Transactional component would go here - call financial institution track order </h5>
                </div>
            </div>
        </div>
    )
}

export default CheckoutSummaryScreen
