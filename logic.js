let btn=document.getElementById("sorten");
btn.addEventListener('click',short);
async function short(){
    let longurl=document.getElementById("longurl").value;
    let sorturl=document.getElementById("sorturl");
    const result=await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);
    const data=await result.json();
    sorturl.value=data.result.short_link2;
}