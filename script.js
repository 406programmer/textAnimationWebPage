const splitText = () => {
const heading = document.querySelector('h2 span');
const headText = heading.textContent;
const splitText = headText.split('');
const splitLength = splitText.length;
let cluster="";
splitText.forEach((char,index)=>{
    if(index<splitLength/2){
        cluster+=`<span class="first">${char}</span>`
    }else{
        cluster+=`<span class="second">${char}</span>`
    }
})
heading.innerHTML = cluster;
}

splitText();


gsap.from('h2 .first',{
    opacity:0,
    y:50,
    stagger:0.2,
    duration:0.5,
    delay:1
})
gsap.from('h2 .second',{
    opacity:0,
    y:50,
    stagger:-0.2,
    duration:0.5,
    delay:1
})