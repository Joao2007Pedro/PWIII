const times = [
    { nome: "Corinthians", pontos: 27, jogos: 12, vitorias: 8, empates: 3, derrotas: 1, gp: 20, gc: 13, sg: 7 },
    { nome: "São Bernardo", pontos: 23, jogos: 12, vitorias: 7, empates: 2, derrotas: 3, gp: 19, gc: 16, sg: 3 },
    { nome: "Palmeiras", pontos: 23, jogos: 12, vitorias: 6, empates: 5, derrotas: 1, gp: 21, gc: 10, sg: 11 },
    { nome: "Ponte Preta", pontos: 22, jogos: 12, vitorias: 6, empates: 4, derrotas: 2, gp: 12, gc: 8, sg: 4 },
    { nome: "São Paulo", pontos: 19, jogos: 12, vitorias: 5, empates: 4, derrotas: 3, gp: 18, gc: 13, sg: 5 },
    { nome: "Santos", pontos: 18, jogos: 12, vitorias: 5, empates: 3, derrotas: 4, gp: 20, gc: 14, sg: 6 },
    { nome: "Novorizontino", pontos: 18, jogos: 12, vitorias: 4, empates: 6, derrotas: 2, gp: 13, gc: 11, sg: 2 },
    { nome: "Mirassol", pontos: 17, jogos: 12, vitorias: 5, empates: 2, derrotas: 5, gp: 21, gc: 20, sg: 1 },
    { nome: "Bragantino", pontos: 17, jogos: 12, vitorias: 5, empates: 2, derrotas: 5, gp: 14, gc: 13, sg: 1 },
    { nome: "Guarani", pontos: 13, jogos: 12, vitorias: 3, empates: 4, derrotas: 5, gp: 14, gc: 14, sg: 0 },
    { nome: "Velo Clube", pontos: 13, jogos: 12, vitorias: 3, empates: 4, derrotas: 5, gp: 13, gc: 16, sg: -3 },
    { nome: "Portuguesa", pontos: 13, jogos: 12, vitorias: 2, empates: 7, derrotas: 3, gp: 15, gc: 16, sg: -1 },
    { nome: "Botafogo-SP", pontos: 11, jogos: 12, vitorias: 2, empates: 5, derrotas: 5, gp: 8, gc: 13, sg: -5 },
    { nome: "Noroeste", pontos: 8, jogos: 12, vitorias: 1, empates: 5, derrotas: 6, gp: 12, gc: 19, sg: -7 },
    { nome: "Água Santa", pontos: 7, jogos: 12, vitorias: 1, empates: 4, derrotas: 7, gp: 10, gc: 23, sg: -13 },
    { nome: "Inter de Limeira", pontos: 7, jogos: 12, vitorias: 0, empates: 7, derrotas: 5, gp: 9, gc: 19, sg: -10 }
  ];
  
  const grupos = {
    A: ["Santos", "Portuguesa", "São Bernardo", "Inter de Limeira"],
    B: ["Palmeiras", "Guarani", "Água Santa", "Ponte Preta"],
    C: ["Corinthians", "Mirassol", "Bragantino", "Botafogo-SP"],
    D: ["São Paulo", "Novorizontino", "Velo Clube", "Noroeste"]
  };

  function getGrupoDoTime(nome) {
    for (const grupo in grupos) {
      if (grupos[grupo].includes(nome)) {
        return grupo;
      }
    }
    return "N/A";
  }
  


  const tabela = document.getElementById("tabela-times");

  times.forEach(time => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
    <td>${getGrupoDoTime(time.nome)}</td>
    <td>${time.nome}</td>
    <td>${time.pontos}</td>
    <td>${time.jogos}</td>
    <td>${time.vitorias}</td>
    <td>${time.empates}</td>
    <td>${time.derrotas}</td>
    <td>${time.gp}</td>
    <td>${time.gc}</td>
    <td>${time.sg}</td>  
`;

    tabela.appendChild(linha);
  });

  console.log(times);
