window.onload=function(){
    var blackmode=document.getElementById('B_dark');
    var whitemode = document.getElementById('B_light');

    blackmode.classList.add('displaybuttondark');
    whitemode.classList.add('changeMenuL');

    whitemode.addEventListener('click', light_style);
    whitemode.addEventListener('click', light);
    whitemode.addEventListener('click', light1);

    whitemode.addEventListener('click', changeIntroLight);
    blackmode.addEventListener('click', dark_style);
    blackmode.addEventListener('click', dark);
    blackmode.addEventListener('click', dark1);

    blackmode.addEventListener('click', changeIntroDark);
    blackmode.addEventListener('click', changeStatsDark);
    whitemode.addEventListener('click', changeStatsLight);

}





function light(){
    var displayLight= document.getElementById('B_light');
    style = displayLight.style;
    displayLight.classList.add('LightButtonDisp');
}
function light1(){
    var displayDark= document.getElementById('B_dark');
    style = displayDark.style;
    displayDark.classList.remove('DarkButtonDisp');
}
function dark(){
    var displayDark= document.getElementById('B_dark');
    style = displayDark.style;
    displayDark.classList.add('DarkButtonDisp');
}
function dark1(){
    var displayLight= document.getElementById('B_light');
    style = displayLight.style;
    displayLight.classList.remove('LightButtonDisp');
}
function dark_style()
{
    var dfooter= document.getElementById('sectionplus'), style = dfooter.style;
    dfooter.classList.add('SSDark');

}
function light_style()
{
    var footercl= document.getElementById('sectionplus'), style = footercl.style;
    footercl.classList.remove('SSDark');
}
function changeIntroDark(){
    var IntroDark = document.getElementById('introplus'),
        style= IntroDark.style;
    IntroDark.classList.add('MenuDark');
    IntroDark.classList.remove('MenuLight');
}
function changeIntroLight(){
    var IntroLight = document.getElementById('introplus'),
        style= IntroLight.style;
    IntroLight.classList.add('MenuLight');
    IntroLight.classList.remove('MenuDark');
}
function changeStatsLight(){
    var chStatLight = document.getElementById('statistics_plus'), style= chStatLight.style;
    // chStatLight.classList.add('stat_l');
    chStatLight.classList.remove('stat_d');
}
function changeStatsDark(){
    var chStatDark = document.getElementById('statistics_plus'), style= chStatDark.style;
    chStatDark.classList.add('stat_d');
    // chStatDark.classList.remove('stat_l');
}