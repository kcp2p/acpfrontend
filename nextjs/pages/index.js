import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material"; // Use by LoginForm
import useBearStore from "@/store/useBearStore";
import { useState } from "react";

function Home() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputText);
  }

  return (
    <Box textAlign="center" p={4} sx={{ bgcolor: '#FAD5A5' }}>
      <Typography variant="h4" gutterBottom>
        Index
      </Typography>
      <Grid container spacing={0.5}>
          <Button variant="contained" color="primary" href="/page1">
            Go to Page 1
          </Button>
          <Button variant="contained" color="primary" href="/page2">
            Go to Page 2
          </Button>
          <Button variant="contained" color="primary" href="/page3">
            Go to Page 3
          </Button>
      </Grid>

      <Grid item xs={12} md={12}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          value={inputText}
          onChange={handleInputChange}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Click
        </Button>
      </Grid>

      {/* Display the text below */}
      {displayText && (
        <Grid item xs={12} md={12}>
          <Typography variant="h6" gutterBottom>
            You Search for: {displayText}
          </Typography>
        </Grid>
      )}
    </Box>
  );
}

export default Home;
