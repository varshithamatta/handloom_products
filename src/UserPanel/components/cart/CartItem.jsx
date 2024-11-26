import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { color } from "../product/FilterData";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md mb-10">
      <div className="flex items-center">
        <div className="w-[9rem] h-[9rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://m.media-amazon.com/images/I/81AFxU2P5JL._SY879_.jpg"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            NoBrand Women's Chikankari Embroidered Naira Cut Kurta
          </p>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller : NoBrand</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">&#8377; 479</p>
            <p className="opacity-50 line-through">&#8377; 2396</p>
            <p className="text-green-600 font-semibold">80% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "#F8962F" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>

        <div>
          <Button sx={{ color: "#F8962F" }}>REMOVE</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
