import React from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";

import { Grid, GridItem } from "@chakra-ui/react";

export function Layout({ children }: React.ProfilerProps) {
  return (
    <Grid templateRows="repeat(5, 1fr)" height={"100%"} gap={10}>
      <GridItem rowSpan={1}>
        <Header />
      </GridItem>
      <GridItem rowSpan={3} justifyItems={"center"}>
        {children}
      </GridItem>

      <GridItem rowSpan={1}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
