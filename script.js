$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    $('.form-submit').click(function(){
        window.location.pathname='https://buibao3103.github.io/KT_SOCIAL/home.html';
    });
});


let slideIndex = 1;

autoshowSlides();

function autoshowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoshowSlides, 4000); // Change image every 2 seconds
}


showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
     showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let storyIndex = 0;
function plusStories(n, direction) {
    showStory(storyIndex += n, direction);
}

function showStory(n, direction) {
    console.log(storyIndex)
    let stories = document.getElementsByClassName("myStory");
    console.log(stories.length)
    if (storyIndex < 0){
        storyIndex += 1;
        return;
    }
    if (storyIndex == stories.length){
        storyIndex -= 1;
        return;
    }
    if(direction == 'right'){
        stories[storyIndex-1].style.display = "none";
        
    }
    else {
        stories[storyIndex].classList.add("animate__animated");
        stories[storyIndex].classList.add("animate__slideInLeft");
        stories[storyIndex].style.display = "block";
    }
}

function market(type,element)
{
    let tabs = document.getElementsByClassName('item');
    for(i=0;i<tabs.length;i++)
    {
        tabs[i].style.background='#362f2f';
    }
    element.style.background ='#f42424';

    document.getElementById(type).style.display='block';
    switch (type) {
        case 'luachon1':
            document.getElementById('luachon2').style.display='none';
            document.getElementById('luachon3').style.display='none';
           
            break;
        case 'luachon2':
            document.getElementById('luachon1').style.display='none';
            document.getElementById('luachon3').style.display='none';
            
            break;
        case 'luachon3':
            document.getElementById('luachon2').style.display='none';
            document.getElementById('luachon1').style.display='none';
            break;
      
        default:
            break;
    }
}
function giaodien(type,element)
{
    console.log(type);
    if (pc.matches && type != 'nen1') { // If media query matches
        let mess = document.querySelector(".mess_er");
        mess.style.display='none';
    }
    let tabs = document.getElementsByClassName('gd');
    for(i=0;i<tabs.length;i++)
    {
        tabs[i].style.background='#AB9383';
    }
    if (type !='nen1')
        element.style.background ='#daa48e';

    document.getElementById(type).style.display='block';
    switch (type) {
        case 'nen1':
            document.getElementById('nen2').style.display='none';
            document.getElementById('nen3').style.display='none';
            document.getElementById('nen4').style.display='none';
            document.getElementById('nen5').style.display='none';
            document.getElementById('nen6').style.display='none';
            break;
        case 'nen2':
            document.getElementById('nen1').style.display='none';
            document.getElementById('nen3').style.display='none';
            document.getElementById('nen4').style.display='none';
            document.getElementById('nen5').style.display='none';
            document.getElementById('nen6').style.display='none';
            break;
        case 'nen3':
            document.getElementById('nen2').style.display='none';
            document.getElementById('nen1').style.display='none';
            document.getElementById('nen4').style.display='none';
            document.getElementById('nen5').style.display='none';
            document.getElementById('nen6').style.display='none';
            break;
        case 'nen4':
            document.getElementById('nen2').style.display='none';
            document.getElementById('nen3').style.display='none';
            document.getElementById('nen1').style.display='none';
            document.getElementById('nen5').style.display='none';
            document.getElementById('nen6').style.display='none';
            break;
        case 'nen5':
            document.getElementById('nen2').style.display='none';
            document.getElementById('nen3').style.display='none';
            document.getElementById('nen4').style.display='none';
            document.getElementById('nen1').style.display='none';
            document.getElementById('nen6').style.display='none';
            break;
        case 'nen6':
            document.getElementById('nen2').style.display='none';
            document.getElementById('nen3').style.display='none';
            document.getElementById('nen4').style.display='none';
            document.getElementById('nen5').style.display='none';
            document.getElementById('nen1').style.display='none';
            break;
        default:
            break;
    }
}




function back(){
    let khungtinnhan = document.querySelectorAll(".khungtinnhan");
    console.log(khungtinnhan)
    for(let i=0;i<khungtinnhan.length;i++){
        khungtinnhan[i].style.display='none';
    }
    mess=document.querySelector(".mess_er");
    mess.style.display='block';
}
function UnCheckAll(){
    let list_checkbox = document.querySelectorAll('input[type="checkbox"]');
    console.log(list_checkbox);
    for(var i=0;i<list_checkbox.length;i++){
        list_checkbox[i].checked = false;
    }
}
function showNofi(curr_page)
{
    bell = document.querySelector('.js-bell')
    nofication = document.querySelector('#nofication')
    head = document.getElementById("header");
    if (!pc.matches ) { // If media query matches
        head.classList.remove("animate__slideInDown");
        head.classList.add("animate__animated", "animate__slideOutUp");
    }
    else{
        document.getElementById(curr_page).style.display='none';
    }
    
    nofication.classList.add('open');
    console.log("bell");

}
function hideNofi()
{
    nofication.classList.remove('open');
    head = document.getElementById("header");
    if (!pc.matches ) { // If media query matches
        head.classList.remove("animate__slideOutUp");
        head.classList.add("animate__slideInDown")
    }
}

var pc = window.matchMedia("(max-width: 1024px)")


$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    $('.form-submit').click(function(){
        window.open('home.html');
    });
});
