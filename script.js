// let botaoEntrar = document.getElementById('botaoEntrar')
// botaoEntrar.addEventListener ('click' ,

// function alertar () {
//   let eMail = document.getElementById('form1Email').value;
//   let senha = document.getElementById('form1Senha').value;
//   console.log(eMail.lenght)
//     if(eMail.lenght < 1 ){
//         alert('Email ou senha inválidos');
//     } else if (eMail.lenght !== null && senha.lenght !== null){
//         alert('Olá, Tryber!');
//     }
// })

let botaoEntrar = document.getElementById('botaoEntrar')
botaoEntrar.addEventListener ('click' ,
function validamail() {
    let eMail = document.getElementById('form1Email').value;
    let senha = document.getElementById('form1Senha').value;
    if (eMail == "tryber@teste.com" || senha == "123456") {
        alert('Olá, Tryber!');
    }else {alert('Email ou senha inválidos.')}
  }
)


let enviar = document.getElementById("submit-btn");
let checkB = document.getElementById("agreement");
enviar.disabled = true;
checkB.addEventListener("change", xablau);
function xablau() {
  if (document.getElementById("agreement").check === false) {
    enviar.disabled = true; 
  } else {
    enviar.disabled = false;
  }
}