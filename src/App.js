import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

export default class App extends React.Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container>
          {/* 
          We could specify more than 1 breakpoint, here we are saying:
          - for xs screens, we take up 0 space on the padding
          - for sm screens, we add 2 slots on left and right, creating
            gutters
              */}
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    );
  }
}
