import login from "@/app/services/login";
import { Input } from "../Input/Input";

import React, { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleDataLogin = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    if (email === "" || senha === "") {
      alert("Informe os dados");
      return;
    }

    login(email, senha);
  };

  return (
    <form className="form" onSubmit={handleDataLogin}>
      <Input
        type={"text"}
        placeholder="Informe seu email"
        label={"Email"}
        id={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"password"}
        placeholder="Informe sua senha"
        label={"Senha"}
        id={"password"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <button className="button" type="submit">
        Entrar
      </button>
    </form>
  );
}
