//variables
let favicon = document.querySelector('.favicon');
let body = document.body;
let icon = document.querySelector('i');
let title = document.querySelector('.title');
let text = document.querySelector('.text');
let button = document.querySelector('.more');
let planet = document.querySelector('.planetimg');
let paragraph = document.querySelectorAll('.paragraph');
let figure = document.querySelector('.figure');
let imageContainer = document.querySelector('.image-container');
let footer = document.querySelector('footer');


let changeTheme = () =>{
    //light case:
    if (body.classList.contains("dark-mode")) {
        //tolight
         body.classList.remove("dark-mode");
        //icon switch
        icon.classList.replace("fa-sun","fa-moon");
        icon.classList.replace("light","dark");
        //favicon
        favicon.href = './assets/image/sun.png';
        //title
        title.textContent = "THE SUN";
        title.classList.remove("title-dark");
        //text
        text.textContent = " The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation with 10% at ultraviolet energies. It is by far the most important source of energy for life on Earth. The Sun has been an object of veneration in many cultures. It has been a central subject for astronomical research since antiquity "


        //button
        button.classList.remove("more-dark");
        //planet image 
        planet.src = "./assets/image/sun.png";
        planet.classList.remove('resized');
        //paragraph
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].classList.remove("paragraph-dark");
            
        }
        // figure 
        figure.src = "./assets/image/aboutsun.png";
        //footer 
        footer.classList.remove("footer-dark");

    //dark case: 
    } else {
        //todark
        body.classList.add("dark-mode");
        //icon switch
        icon.classList.replace("fa-moon","fa-sun");
        icon.classList.replace("dark","light");
        //favicon
        favicon.href = './assets/image/moon.png';
        //title
        title.textContent = "THE MOON";
        title.classList.add("title-dark");
        //text
        text.textContent = "The Moon is Earth's only natural satellite. It orbits at an average distance of 384,400 km (238,900 mi), about 30 times the diameter of Earth. Tidal forces between Earth and the Moon have synchronized the Moon's orbital period (lunar month) with its rotation period (lunar day) at 29.5 Earth days, causing the same side of the Moon to always face Earth. The Moon's gravitational pull is the main driver of Earth's tides."

        
        //button
        button.classList.add("more-dark");
        //planet image 
        planet.src = "./assets/image/moon.png";
        planet.classList.add('resized');
        //paragraph
        for (let i = 0; i < paragraph.length; i++) {
            paragraph[i].classList.add("paragraph-dark");
            
        }
        //figure
        figure.src ="./assets/image/aboutmoon.png";
        //footer 
        footer.classList.add("footer-dark");
        console.log(footer)
    }
   
}


icon.addEventListener("click",changeTheme);

