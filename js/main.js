// domdagi elementlar chaqirib olindi yani form va form ichidagi class lar chaqirildi
var formEl=document.getElementById('form');
var formInput=document.querySelector('.form__input');
var formSelect=document.querySelector('.form__select');
var resultEl=document.getElementById('result');
var eror=document.getElementById('catch')
formEl.addEventListener("submit", function(event){
    event.preventDefault()
    // kelayotgan malumotlaring value si yani ichidagi malumoti olindi
    var formInputEl=formInput.value
    var formSelectEl=formSelect.value
    //if else shartlaridan foydalandik nimaga kelayotgan malumot tog'riligini aniqroq bilish maqsadida
   if(formInputEl>0){
    resultEl.textContent=formInputEl *formSelectEl
    console.log(resultEl)
   }else{
       eror.textContent="Kechirasz xato kiritdingiz?"
   }
}) 