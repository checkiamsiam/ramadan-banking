var button = document.getElementById('submit-button');
button.addEventListener('click', function(){
  const emailField = document.getElementById('email-field');
  const emailAdress = emailField.value ;
  const passField = document.getElementById('pass-field');
  const password = passField.value ;
  if(emailAdress == 'issiam02415@gmail.com' && password == 'page-e-dhuka'){
    location.href = './pages/main.html';
  }else{
    alert('The email or password you entered is not valid. please give valid value to redirect or login you account!');
  }
})