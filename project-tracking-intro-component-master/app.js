const desktopNAV = document.querySelector('.sidebarIMG');
const sideNav = document.querySelector('.wrapper')
const sideNavIcon = document.getElementById('navIcon')
const toggleMenu = () =>{
    const disPlay = getComputedStyle(sideNav)
    if(disPlay.display == "none"){
        sideNav.style.display = "flex";
        sideNavIcon.src= "./images/icon-close.svg";
    } else{
        sideNav.style.display = "none";
        sideNavIcon.src= "./images/icon-hamburger.svg";
    }
}
desktopNAV.addEventListener('click',toggleMenu)


