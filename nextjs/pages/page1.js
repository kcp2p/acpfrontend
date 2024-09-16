import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Test() {
  return (
    <Box textAlign="center" p={4}>
      <Typography variant="h1" gutterBottom>
        Hello World, this is Page 1
      </Typography>
      <Button variant="contained" color="primary" href="/">
        Go back to Home
      </Button>
    </Box>
  );
}
