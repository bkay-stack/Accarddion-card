// OPen Answers
const faqs  = document.querySelectorAll(".faq")

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });   
});
 
// console.log(faqs);


// const holder  = document.querySelectorAll(".hold")

// holder.forEach((hold) => {
//   hold.addEventListener("click", () => {
//     hold.classList.toggle("active");
//   });
// });

// declaring  a function

// function greet (name) {
//     console.log("Hello" + name + ":)");
// }


// let store = prompt ("Enter a name: ")

// greet(name);