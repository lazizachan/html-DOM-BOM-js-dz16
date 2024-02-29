// let card1 = document.querySelector(".card1");
// let aClass = document.querySelector(".aClass");
// let oreo = document.querySelector(".oreo");
// let shiratama = document.querySelector(".shiratama");
// let pain = document.querySelector(".pain");
// let card2 = document.querySelector(".card2");
// let bClass = document.querySelector("#bClass");
// let choco = document.querySelector("#choco");
// let strawberry = document.querySelector("#strawberry");
// let caramel = document.querySelector("#caramel");
// let card3 = document.querySelector(".card3");
// let peach = document.querySelector(".peach");
// let yogurt = document.querySelector(".yogurt");
// let chocolate = document.querySelector(".chocolate");
// let button1 = document.querySelector("#get1");
// let button2 = document.querySelector("#get2");
// let button3 = document.querySelector("#get3");
// let buttonevery = document.querySelector(".all");
// let img_block = document.querySelector("#oreo");
// let img = document.createElement("img");
// img_block.append(img);
// function buyCoctailAclass() {
//   card1.style.backgroundColor = "aquamarine";
//   button1.style.backgroundColor = "red";
//   oreo.style.color = "green";
//   img.src = "./image/maccha.webp";

//   img.style.width = "50px";
//   img.style.height = "50px";
// }
// function buyCoctailBclass() {
//   card2.style.textTransform = "upperCase";
//   bClass.style.color = "violet";
//   button2.style.color = "violet";
// }

// function buyCoctailCclass() {
//   card3.style.backgroundColor = "red";
//   peach.style.color = "blue";
//   chocolate.style.borderBottom = "dotted 5px red";
// }
// function buyEvery() {
//   card1.style.backgroundColor = "chartreuse";
//   card2.style.backgroundColor = "chartreuse";
//   card3.style.backgroundColor = "chartreuse";
// }

let img_create = document.querySelector(".img_create");
let i = 0;
let imagesBg = [
  "./image/maccha.webp",
  "./image/strawberry.webp",
  "./image/caramel.webp",
];
function predpic() {
  i -= 1;

  if (i >= imagesBg.length) {
    i = 0;
  }
  img_create.src = imagesBg[1];
}
function sledpic() {
  i += 1;
  if (i >= imagesBg.length) {
    i = 0;
  }
  img_create.src = imagesBg[2];
}
