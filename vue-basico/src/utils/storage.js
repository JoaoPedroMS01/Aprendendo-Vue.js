import Usuario from "@/models/Usuario";

function salvarUsuarioNaStorage(usuario) {
    let usuarioString = JSON.stringify(usuario);
    localStorage.setItem('usuario', usuarioString);
}

function obterUsuarioDaStorage() {
    let usuarioString = localStorage.getItem('usuario');
    return new Usuario(JSON.parse(usuarioString));
}

function salvarTokenNaStorage(token) {
    localStorage.setItem('token', token);
}

function obterTokenNaStorage() {
    return localStorage.getItem('token');
}

function removerTokenDaStorage() {
    localStorage.removeItem('token');
}

function removerUsuarioDaStorage() {
    localStorage.removeItem('usuario');
}

export default {
    salvarUsuarioNaStorage,
    obterUsuarioDaStorage,
    salvarTokenNaStorage,
    obterTokenNaStorage,
    removerTokenDaStorage,
    removerUsuarioDaStorage
}