import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Error() {
  
  let navigate = useNavigate();

  return (
    <div className="container my-5">
      <center>
        <h2>
          <b>404: Page Not Found</b><br/>
          <br/>
          <Button variant="contained" onClick={() => navigate("/")}>Go Back</Button>
        </h2>
      </center>
    </div>
  );
}
