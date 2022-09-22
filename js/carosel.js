const text = "hello world";
console.log(text);

const images = [
  "img/img-1.png",
  "img/img-2.png",
  "img/img-3.png",
  "img/img-4.png",
  "img/img-5.png",
  "img/img-6.png",
  "img/img-7.png",
  "img/img-8.png",
  "img/img-9.png",
  "img/img-10.png",
  "img/img-11.png",
  "img/img-12.png",
  "img/img-13.png",
  "img/img-14.png",
  "img/img-15.png",
  "img/img-16.png",
  "img/img-17.png",
];

let imgIndex = 0;
const img = document.getElementById("carosul-img");
setInterval(() => {
  if (imgIndex === 17) {
    imgIndex = 0;
  }
  const image = images[imgIndex];
  console.log(images[imgIndex]);
  img.setAttribute("src", image);
  imgIndex++;
}, 1000);
