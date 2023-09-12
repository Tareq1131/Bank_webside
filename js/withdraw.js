document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField = document.getElementById('withdraw-fild');

const withdrawFieldString = withdrawField.value ;
const newWithdrawAmount = parseFloat(withdrawFieldString);
 //step-7 
 withdrawField.value ='';
if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid numer');
    return;
}

//step-3
const withdrawTotalElement = document.getElementById('withdraw-total');

const withdrawTotalElementString =withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(withdrawTotalElementString);



//step -6
const balanceTotalElement = document.getElementById('balance-total');
 const bs = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(bs);



 if(newWithdrawAmount>previousBalanceTotal){
    alert('Not enough money...');
    return;
 }
 //step 4
const currentWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
//step-5
withdrawTotalElement.innerText = currentWithdrawTotal;

 //step-7
  const newBalanceTotal = previousBalanceTotal-newWithdrawAmount; 
  balanceTotalElement.innerText=newBalanceTotal




})