const botaoEntrar = document.getElementById('botaoEntrar');
botaoEntrar.addEventListener('click',
  () => {
    const eMail = document.getElementById('form1Email').value;
    const senha = document.getElementById('form1Senha').value;
    if (eMail === 'tryber@teste.com' || senha === '123456') {
      alert('Olá, Tryber!');
    } else { alert('Email ou senha inválidos.'); }
  });

const enviar = document.getElementById('submit-btn');
const checkB = document.getElementById('agreement');
enviar.disabled = true;
checkB.addEventListener('change',
  () => {
    if (document.getElementById('agreement').check === false) {
      enviar.disabled = true;
    } else {
      enviar.disabled = false;
    }
  });
