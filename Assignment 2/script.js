const imageArray=[
 {
  url:"./img/food/chicken ring.avif",
},
 {
  url:".//img/food/egg with bread.avif",
},
 {
  url:".//img/food/fish fry.avif",
},

{
 url:"./img/food/meat & nuggets.avif",
},
{
 url:"./img/food/momo.avif",
},
{
 url:"./img/food/noodles dishes with orange souces.avif",
},

];


console.log(imageArray);
 function handleShowMoreProduct(){
   const projectContainer=document.getElementById("items");


 for (const item of imageArray) {
  
     const projectDivImage=document.createElement("div");
     projectDivImage.classList.add("product");   
//      //check all project a extra project gulu thikvabe anar jonno
     projectDivImage.innerHTML=`
      <img src="${item.url}" alt="">
   
     `
    projectContainer.appendChild(projectDivImage);

    console.log(projectDivImage);

 }
 }