import React from "react";
import AddressCard from "../checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20 mt-10">
      <div>
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3}/>
      </div>

      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=>
                <Grid item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:'space-between'}}>
                <Grid item xs={6}>
    
                    <div className="flex items-center space-x-4">
                        <img className='w-[10rem] h-[10rem] object-cover object-top' src="https://m.media-amazon.com/images/I/81AFxU2P5JL._SY879_.jpg" alt="" />
                        <div className="space-y-2 ml-5">
                            <p className='font-semibold'>NoBrand Women's Chikankari Embroidered Naira Cut Kurta</p>
                            <p className="space-x-5 opacity-50 text-s font-semibold"><span>Color: Gold</span> <span>Size: M</span></p>
                            <p>Seller: NoBrand</p>
                            <p>&#8377; 1099</p>
                        </div>
                    </div>
                </Grid>
    
                <Grid item>
                    <Box sx={{color:deepOrange[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
                        <span>Rate & Review</span>
                    </Box>
                </Grid>
            </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
