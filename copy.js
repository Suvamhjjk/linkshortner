let newurl=document.getElementById("sorturl");
let coptbutton=document.getElementById("copy");
coptbutton.onclick=()=>{
    newurl.Selected();
    window.navigator.clipboard.writeText(newurl.value);
}