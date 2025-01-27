const btn=document.querySelector(".randomColorGeneratorBtn");
 const ColorBox=document.querySelector(".ColorBox");
const colorCode=document.querySelector(".colorCode");

function randomColorGenerate(){
   const randomColorCodeInHexa=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, "0")}`;

   return randomColorCodeInHexa;
}




function ApplyRandomColor(){
  
  ColorBox.style.backgroundColor = randomColorGenerate();
  colorCode.textContent=randomColorGenerate();
//   colorCode.innerHTML=randomColorGenerate();

} 




btn.addEventListener("click",ApplyRandomColor);