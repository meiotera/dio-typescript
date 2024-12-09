import { Input } from "../Input/Input";
import login from "@/app/services/login";

export default function FormLogin() {
  return (
    <form className="form">
      <Input
        type={"text"}
        placeholder="Informe seu email"
        label={"Email"}
        id={"email"}
      />
      <Input
        type={"password"}
        placeholder="Informe sua senha"
        label={"Senha"}
        id={"password"}
      />

      <button className="button" onClick={login}>
        Entrar
      </button>
    </form>
  );
}
