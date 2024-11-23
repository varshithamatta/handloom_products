import React from "react";
import CartItem from "./CartItem";
import { Divider } from "@mui/material";
import Button from '@mui/material/Button';

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-7">
        <div className="col-span-2">
         {[1,1,1].map((item)=> <CartItem />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div>
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>&#8377; 4697</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">- &#8377;1233</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">&#8377; 3464</span>
              </div>
            </div>
            <Button
                    variant="contained"
                    className="w-full mt-5"
                    sx={{
                      px: "2.5rem",
                      py: ".7rem",
                      bgcolor: "#F8962F",
                      mt: "2rem",
                    }}
                  >
                    CHECKOUT
                  </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
