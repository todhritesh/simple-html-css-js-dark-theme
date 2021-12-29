let dark = document.querySelector('#dark');
console.log(dark);

dark.addEventListener('click',function(){
    console.log(dark.src.match('sun'))
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme'))
        dark.src = './images/sun.png'
    else
        dark.src = './images/moon.png'
})