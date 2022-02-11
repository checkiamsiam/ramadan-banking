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

//random rgba color generator
function rgbaGenerator(){
  var red = parseInt(Math.random()*250);
  var green = parseInt(Math.random()*250);
  var blue = parseInt(Math.random()*250);
  return `rgba(${red}, ${green} , ${blue})`;
}
document.body.addEventListener('dblclick' , function(){
  document.body.style.backgroundColor = rgbaGenerator();
})