import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material"; // Use by LoginForm
import useBearStore from "@/store/useBearStore";

function Home() {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h4" gutterBottom>
        Index
      </Typography>
      <Button variant="contained" color="primary" href="/page1">
        Go to Page 1
      </Button>
      <Button variant="contained" color="primary" href="/page2">
        Go to Page 2
      </Button>
      <Button variant="contained" color="primary" href="/page3">
        Go to Page 3
      </Button>
    </Box>
  );
}

export default Home;
