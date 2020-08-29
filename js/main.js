function clicou(){
    //alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar" //innerHTML injeta o conteúdo no html
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("http://www.google.com.br"); //encaminha pro link em nova guia
    window.location.href = "http://www.google.com.br" //abre na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert ("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}   

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getDate()); //dia
alert(d.getHours()); //horas
alert(d.getMonth()+1); //mês (contagem começa em 0, tem que somar 1.)
*/



/*var count;
for (count=0; count <=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    console.log (count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?"); //prompt exibe pergunta na tela
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]  //Objetos(structs)
console.log(frutas); //exibe tudo do objeto
console.log(frutas[1].nome); //exibe nome da posição1
console.log(frutas[0].cor); //exibe cor da posição0
*/


/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();

console.log(lista[1]); //mostra só a posição 1 da lista
console.log(lista.length);//tamanho da lista (quantos itens tem)
console.log(lista.reverse());//mostra os itens em ordem invertida

console.log(lista.toString());//transforma a array numa string.

console.log(lista.join(" - ")); //substitui o espaço que tem entre cada fruta da lista (cada item)

//push inclui item na lista, pop remove o último item da lista.

*/


/*var nome = "Vinicius Gomes";
var idade = 24;
var idade2 = 10;
var frase = "Japão é o melhor país do mundo";


//alert(nome + " tem " + idade + " anos");

alert(frase.toUpperCase("Japão", "Brasil"));

console.log (nome);
console.log (idade);
//console.log (frase.replace("Japão", "Brasil"));//replace substitui palavra 
console.log (frase.toUpperCase("Japão", "Brasil"))*/