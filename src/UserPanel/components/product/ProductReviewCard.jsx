import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd  " }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 item xs={9}>
          <div className="space-y-2 text-left">
            <div>
              <p>Raam</p>
              <p>April 5, 2023</p>
            </div>
          </div>

          <div className="text-left">
          <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
          <p>
            Good Product. I am impressed by the quality of cloth
          </p>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
