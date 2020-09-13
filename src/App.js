import React from "react";
import { Button, Container, Typography, Box } from "@material-ui/core";
import Table from "./Table";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Button color="primary" variant="outlined">
        Hello World
      </Button>
      <Box mt={3}>
        <Table></Table>
      </Box>
    </Container>
  );
}

export default App;
