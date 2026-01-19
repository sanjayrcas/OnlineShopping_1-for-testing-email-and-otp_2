import * as React from "react";
import "../MediaQProductView.css";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// import Typography from '@mui/material/Typography';

export default function ProductViewRatings() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="d-flex align-items-center justify-content-center bg-succes">
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          className="RatingUi bg-dange d-flex"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <span>(12 reviews)</span>
    </div>
  );
}
