function cadastrar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;
    let name = document.getElementById('name').value;
   
    if(name == 1 && email == 1 && senha == 1) {
       alert("Sucesso");
       location.href= "../homePage/index.html";
    }else {
       alert("Usuario ou senha incorretos")
    }
   }