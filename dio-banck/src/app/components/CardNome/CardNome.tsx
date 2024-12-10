import { useState } from "react";
import { Input } from "../Input/Input";
import wellcome from "@/app/services/wellcome";

export default function CardNome() {
  const [nome, setNome] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNome(event.target.value);
  };

  const handleSave = (): void => {
    if (nome.trim() === "") {
      alert("Por favor, insira um nome.");
      return;
    }
    wellcome(nome); // Chama a função passando o nome dinamicamente
  };
  return (
    <div>
      <h2 className="title">Qual seu nome?</h2>
      <Input
        type="text"
        placeholder="Nome..."
        id="nome"
        label="Nome"
        value={nome}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
}
