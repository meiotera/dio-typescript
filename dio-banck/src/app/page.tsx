"use client";

import { Layout } from "./components/Layout/Layout";
import { Box } from "@chakra-ui/react";
import FormLogin from "./components/FormLogin/FormLogin";
import CardNome from "./components/CardNome/CardNome";

export default function Home() {
  return (
    <Box width="100%" height={"100%"}>
      <Layout
        id={""}
        onRender={function (
          id: string,
          phase: "mount" | "update" | "nested-update",
          actualDuration: number,
          baseDuration: number,
          startTime: number,
          commitTime: number
        ): void {
          throw new Error("Function not implemented.");
        }}
      >
        <h2 className="title">Informe seus dados para login</h2>

        <FormLogin />
        <CardNome />
      </Layout>
    </Box>
  );
}
