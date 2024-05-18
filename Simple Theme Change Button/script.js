let btn= document.querySelector("button");
let body = document.querySelector("body");
let darkTheme = ()=> {
    body.style.backgroundColor="black";
    btn.removeEventListener("click", darkTheme);
    btn.onclick = lightTheme;
}
let lightTheme = ()=> {
    body.style.backgroundColor="white";
    btn.removeEventListener("click", lightTheme);
    btn.onclick = darkTheme;

}
btn.addEventListener("click", darkTheme);
btn.addEventListener("click", lightTheme);