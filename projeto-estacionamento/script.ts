interface Veiculo {
  nome: string;
  placa: string;
  entrada: Date;
}
(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  function calcTempo(mil: number): string {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor((mil % 60000) / 1000);

    return `${min}m e ${sec}s`;
  }

  function patio() {
    function ler(): Veiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }

    function salvar(veiculos: Veiculo[]) {
      localStorage.setItem("patio", JSON.stringify(veiculos));
    }
    function adicionar(veiculo: Veiculo, salvo?: boolean) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${veiculo.nome}</td>
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td>
            <button class='delete' data-placa="${veiculo.placa}">Excluir</button>
        </td>
      `;

      row.querySelector(".delete")?.addEventListener("click", (event) => {
        const button = event.currentTarget as HTMLButtonElement; // Garante o tipo do botão
        const placa = button.dataset.placa; // Acessa o dataset
        if (placa) remover(placa);
      });

      $("#patio")?.appendChild(row);

      if (salvo) {
        salvar([...ler(), veiculo]);
      }
    }
    function remover(placa: string) {
      const veiculo = ler().find((veiculo) => veiculo.placa === placa);

      if (!veiculo) {
        alert("Veículo não encontrado!");
        return;
      }

      const { entrada, nome } = veiculo;
      const tempo = calcTempo(
        new Date().getTime() - new Date(entrada).getTime()
      );

      alert(`Veículo ${nome} ficou com ${tempo}`);

      salvar(ler().filter((veiculo) => veiculo.placa !== placa));
      render();
    }

    function render() {
      $("#patio")!.innerHTML = "";
      const patio = ler();

      if (patio.length) {
        patio.forEach((veiculo) => {
          adicionar(veiculo);
        });
      }
    }

    return { ler, adicionar, remover, salvar, render };
  }

  patio().render();

  $("#cadastrar")?.addEventListener("click", () => {
    const nomeInput = $("#nome");
    const placaInput = $("#placa");

    // Valida se os inputs existem
    if (!nomeInput || !placaInput) {
      alert("Erro ao encontrar campos de entrada!");
      return;
    }

    let nome = nomeInput.value.trim();
    let placa = placaInput.value.trim();

    if (!nome || !placa) {
      alert("nome e placa são obrigadtórios");
      return;
    }

    patio().adicionar({ nome, placa, entrada: new Date() }, true);

    nomeInput.value = "";
    placaInput.value = "";
  });
})();
