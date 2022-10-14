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
    if (eMail == "" || senha == "") {
      alert("Email ou senha inválidos");
    }else {alert('Olá, Tryber!')}
  }
)