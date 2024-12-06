"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function salvar(veiculos) {
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }
        function adicionar(veiculo, salvo) {
            var _a, _b;
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${veiculo.nome}</td>
        <td>${veiculo.placa}</td>
        <td>${veiculo.entrada}</td>
        <td>
            <button class='delete' data-placa="${veiculo.placa}">Excluir</button>
        </td>
      `;
            (_a = row.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
                const button = event.currentTarget; // Garante o tipo do botão
                const placa = button.dataset.placa; // Acessa o dataset
                if (placa)
                    remover(placa);
            });
            (_b = $("#patio")) === null || _b === void 0 ? void 0 : _b.appendChild(row);
            if (salvo) {
                salvar([...ler(), veiculo]);
            }
        }
        function remover(placa) {
            const veiculo = ler().find((veiculo) => veiculo.placa === placa);
            if (!veiculo) {
                alert("Veículo não encontrado!");
                return;
            }
            const { entrada, nome } = veiculo;
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            alert(`Veículo ${nome} ficou com ${tempo}`);
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function render() {
            $("#patio").innerHTML = "";
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
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
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
