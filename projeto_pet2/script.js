
let clientes = [];
let pets = [];
let agendamentos = [];

document.getElementById("form-cliente").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;

    clientes.push({ nome, telefone, endereco });
    alert("Cliente cadastrado com sucesso!");
    this.reset();
});

document.getElementById("form-pet").addEventListener("submit", function (event) {
    event.preventDefault();
    const nomePet = document.getElementById("nome-pet").value;
    const especie = document.getElementById("especie").value;
    const raca = document.getElementById("raca").value;
    const idade = document.getElementById("idade").value;

    pets.push({ nomePet, especie, raca, idade });
    alert("Pet cadastrado com sucesso!");
    this.reset();
});

document.getElementById("form-agendamento").addEventListener("submit", function (event) {
    event.preventDefault();
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const servico = document.getElementById("servico").value;

    agendamentos.push({ data, horario, servico });
    alert("Serviço agendado com sucesso!");
    this.reset();
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});
