"use client";

import { Layout } from "./components/Layout/Layout";
import { Box } from "@chakra-ui/react";
import FormLogin from "./components/FormLogin/FormLogin";
import CardNome from "./components/CardNome/CardNome";

export default function Home() {
  return (
    <Box width="100%" height={"100%"}>
      <Layout>
        <h2 className="title">Informe seus dados para login</h2>

        <FormLogin />
        <CardNome />
      </Layout>
    </Box>
  );
}
