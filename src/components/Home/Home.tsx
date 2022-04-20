import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import QuestionWrapper from "components/shared/QuestionWrapper";
import Button from "react-bootstrap/Button";
import { Container, Grid, Box } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";




function App() {
  let navigate = useNavigate();

  let [component, setComponent] = React.useState(0);
  
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
              src="https://i.pinimg.com/736x/79/b2/13/79b213aff2e98fa6412100c47b6304f0--quizes-screens.jpg"
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
