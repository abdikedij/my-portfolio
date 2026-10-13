//Sowing  a welcome message in the browser console
console.log("Welcome to my portfolio");

//Find the main heading
const heading = document.querySelector("#home h1");

//Change the heading when clicked
if(heading){
heading.addEventListener("click", function () {
    heading.textContent = "Thanks for visiting my portfolio!";
})
};

 //Show today's date in the browser
 const dateElement = document.querySelector("#current-date");
 if(dateElement) {
    dateElement.textContent = new Date().toDateString();
 }

 //Show a message when the user clicks the contact section
 const contact = document.querySelector("#contact");
 if(contact) {
    contact.addEventListener("click", function(){
        console.log("Thank you for checking my contact section!")
    })
 };
