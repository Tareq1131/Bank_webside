document.getElementById("btn-diposit").addEventListener("click", function () {
  const diposit = document.getElementById("diposite-fild");
  const newDipositString = diposit.value;

  const newDiposit = parseFloat(newDipositString)
  //console.log(newDiposit);
  //console.log(typeof newDiposit);

  //step3
  //for non input(element other than input, textarea) use innerText to get the text
  const diposittotalElm = document.getElementById("diposite-total");
  const previousDipositTotalString = diposittotalElm.innerText;
  const previousDipositTotal = parseFloat(previousDipositTotalString);
//step 4 add total diposit.
  const currentDipositAmount = previousDipositTotal+ newDiposit
  diposittotalElm.innerText = currentDipositAmount;

//step 5 get balance current total
const balancetotalElm = document.getElementById('balance-total');
 const balancetotalElmString = balancetotalElm.innerText;
 const prebalancetotal = parseFloat(balancetotalElmString);
//step 6
 const currentBalance = prebalancetotal+newDiposit;
 balancetotalElm.innerText= currentBalance;

  diposit.value ='';
});
