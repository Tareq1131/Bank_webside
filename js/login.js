document.getElementById("btn-submit").addEventListener("click", function(){
    const emailfild = document.getElementById("userEmail");
    const email = emailfild.value;
    //console.log(email);
    const passwordFild = document.getElementById("user-password");
    const password = passwordFild.value;

if (email=== 't@i.com'&& password=== '123') {
    window.location.href = 'bank.html';
  }else{
    alert('invalid password');
  }

})