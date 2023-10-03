const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'Feminino',
      generoDR: "DR(a)",
      imagemPerfil: 'http://placekitten.com/400/400'
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'Masculino',
      generoDR: "DR",
      imagemPerfil: 'http://placekitten.com/401/401'
      
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'Não-binario',
      generoDR: "DR(e)",
      imagemPerfil: 'http://placekitten.com/402/402'
    },
  ];
  const htmlList = document.querySelector("#medicos");
  for(let medico of medicos){
    const img = document.createElement("img");
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img)

    let apresentacao = "";
    switch(medico.genero){
        case "Não-binario":
            apresentacao = `DR(e). ${medico.nome} ${medico.sobrenome}`;
            break;
            case "Masculino":
            apresentacao = `DR. ${medico.nome} ${medico.sobrenome}`;
            break;
            case "Feminino":
            apresentacao = `DR(a). ${medico.nome} ${medico.sobrenome}`;
            break;
            default:
                apresentacao = `Médico nao informou o genero`;
    }

    const p = document.createElement("p");
    p.textContent= `${apresentacao}`;
    htmlList.appendChild(p)
}
