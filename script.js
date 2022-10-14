let botaoEntrar = document.getElementById('botaoEntrar')
botaoEntrar.addEventListener ('click' ,

function alertar () {
  let eMail = document.getElementById('form1Email').value;
  let senha = document.getElementById('form1Senha').value;
    if(eMail === null || senha === null){
        alert('Email ou senha inválidos');
    } else if (eMail !== null && senha !== null){
        alert('Olá, Tryber!');
    }
})