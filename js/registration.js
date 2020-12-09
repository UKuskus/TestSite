
document.getElementById("reg").addEventListener('mouseover', registration_focus, false);
document.getElementById("reg").addEventListener('mouseout', registration_blur, false);
document.getElementById("mail").addEventListener( 'dblclick',double_trouble )
var color='#a157a8';
function registration_focus() {
this.style.background=color;
}
function registration_blur() {
    this.style.background='blue';
}
;
function double_trouble() {
    alert("Example: whyyou@xyz.com")
}
document.getElementById('password').addEventListener("click", (event) => {
    if(event.ctrlKey){
        var example=Math.random().toString(36).slice(-8);
        alert("Random password: "+example);
    }
});

function valid(form) {
    var fail= "";
    var name = form.username.value;
    var password = form.password.value;

    var Mnumber = form.phone_number.value;
    var email = form.email_address.value;

    var digital_pattern = /^[\+]\d+$/i;
    var literu_pettern = /^[a-zа-яІ]+$/i;
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_]+\.[a-z]{2,5}/i;

    if (name == "" || name == " ")
        fail = "Ви не ввели ім'я\n";
    if (literu_pettern.test(name) == false)
        fail += "Ви ввели неправильне ім'я\n";

  if (email == "" || email == " ")
        fail += "Ви не ввели email\n";
   if (adr_pattern.test(email) == false)
        fail += "Ви ввели неправильний Email(Формат)\n";
    if (Mnumber == "" || Mnumber == " ")
        fail += "Ви не ввели номер\n";
    if (isNaN(Mnumber) == true || Mnumber.length < 10)
        fail += "Ви ввели неправильний номер(Розмір)\n";
    if (digital_pattern.test(Mnumber) == false)
        fail+= "Ви ввели неправильний номер(Формат)\n";
   if (password == "")
        fail += "Ви не ввели  пароль\n";
   if (password.length <= 8)
        fail += "Ви ввели поганий пароль(Розмір)\n";

    if (fail) {
        alert(fail);
        return false;
    }
}
