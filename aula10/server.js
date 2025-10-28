var http = require('http');
var express = require ('express') ;
var colors = require('colors') ;
var bodyParser = require ('body-parser') ;

var app = express () ;
app.use (express.static('./public'));
app. use (bodyParser. urlencoded({ extended: false} ) )
app.use (bodyParser. json () )
app.set ('view engine', 'ejs')
app.set ('views' , './view') ;

var server = http. createServer (app) ;
server. listen (80) ;

console.log ('Servidor rodando ...'.rainbow);

app.get ('/', function (requisicao, resposta) {
resposta.redirect ('/Projetos/project.html');
})

app.get ('/inicio', function (requisicao, resposta) {
var nome = requisicao.query. info;
console. log (nome);
})

app.post ('/inicio', function (requisicao, resposta) {
var data = requisicao.body.data;
console.log (data);
})

app.get ('/cadastra', function (requisicao, resposta) {
var nome = requisicao.query. nome;
var sobrenome = requisicao.query. sobrenome;
var nascimento = requisicao.query.nascimento;
var civil = requisicao.query. civil;
resposta. render ('resposta_cadastro', {nome, sobrenome, nascimento, civil})
})

app.post ('/login', function (requisicao, resposta) {
var usuario = requisicao.body.usuario;
var senha   = requisicao.body.senha;
resposta. render ('status_login', {usuario, senha})
})