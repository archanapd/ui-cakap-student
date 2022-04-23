import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import QuestionWrapper from "components/shared/QuestionWrapper";
import Button from "react-bootstrap/Button";
import { Container, Grid, Box } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  let navigate = useNavigate();

  let [component] = React.useState(1);
  
  const handleNextClick = () => {
    navigate("/questions/"+component);
  }
  
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "white", height: "1000px" }}>
          {component === 0 && (
            <img
              height="500px"
              src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/9fc43ef159a1d8067b1c8cbcc2f9e0fb.jpg"
            ></img>
          )}

          <Grid className="mx-0">
            <Button variant="secondary" className="mx-2" onClick={handleNextClick}>Start &rarr;</Button>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
