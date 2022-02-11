//tailwind custom color....
document.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tahiti': {
        100: '#cffafe',
      },
      // ...
    },
  },
}
//my javascript 


var depositAmount = document.getElementById('deposit-amount');
var withdrawAmount = document.getElementById('withdraw-amount');
var balanceAmount = document.getElementById('balance-amount');
var depositField = document.getElementById('deposit-field');
var withdrawField = document.getElementById('withdraw-field');
var depositButton = document.getElementById('deposit-button');
var withdrawButton = document.getElementById('withdraw-button');

//common function
function commonThing(field , amount , addIt ){
  amount.innerText = Number(field.value ) + Number(amount.innerText);
  if(addIt == true){
    balanceAmount.innerText =Number(balanceAmount.innerText)  + Number(field.value) ;
  }
  if(addIt == false){
    balanceAmount.innerText = Number(balanceAmount.innerText)-Number(field.value);
  }
  field.value = '';
  if (balanceAmount.innerText == 'NaN' ) {
    alert('You enterd a wrong value !!! please set a valid value to deposit money in your account');
    location.reload();
  }
}

//deposit section 
depositButton.addEventListener('click', function () {
// const current = depositAmount.innerText;
 /*  depositAmount.innerText = Number(depositField.value ) + Number(depositAmount.innerText);
  balanceAmount.innerText = Number(depositField.value) + Number(balanceAmount.innerText);
  depositField.value = '';
  if (balanceAmount.innerText == 'NaN' ) {
    alert('You enterd a wrong value !!! please set a valid value to deposit money in your account');
    location.reload();
  } */
  commonThing(depositField , depositAmount , true);
})

withdrawButton.addEventListener('click', function () {
  /* withdrawAmount.innerText = Number(withdrawField.value) + Number(withdrawAmount.innerText);
  balanceAmount.innerText = Number(balanceAmount.innerText) - Number(withdrawField.value);
  withdrawField.value = '';
  if (balanceAmount.innerText == 'NaN' ) {
    alert('You enterd a wrong value !!! please set a valid value to deposit money in your account');
    location.reload();
  } */
  commonThing(withdrawField , withdrawAmount , false);
})