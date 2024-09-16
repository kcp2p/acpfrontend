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
      <Grid container spacing={0.5}>
        <Grid size={{ xs: 6, md: 4}}>
          <Button variant="contained" color="primary" href="/page1">
            Go to Page 1
          </Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4}}>
          <Button variant="contained" color="primary" href="/page2">
            Go to Page 2
          </Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4}}>
          <Button variant="contained" color="primary" href="/page3">
            Go to Page 3
          </Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4}}>
          <Button variant="contained" color="primary" href="/">
            HOME
          </Button>
        </Grid>     
      </Grid>

      <TextField id="filled-basic" label="Search" variant="filled" />

    </Box>
  );
}

export default Home;
