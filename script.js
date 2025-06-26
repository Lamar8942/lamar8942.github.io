/***********Function for link color-change**************
*/


const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior if needed

    // Remove 'active' class from all links
    links.forEach(l => l.classList.remove("active"));

    // Add 'active' class to the clicked link
    link.classList.add("active");
  });
})


/************Javascript for handling scroll*******
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});







/************Function for Project*****************/


const project = document.getElementById("pro-div");

function clickProj() {
  document.getElementById("pro-div").style.display = "grid";
  document.getElementById("exp-div").style.display = "none";
  document.getElementById("rev-div").style.display = "none";
  
  document.getElementById("pro").classList.add("active");
document.getElementById("exp").classList.remove("active");
document.getElementById("rev").classList.remove("active");
}



/*************Function for Experience*************/


const experience = document.getElementById("exp-div");

function clickExp() {
  document.getElementById("exp-div").style.display = "block";
  document.getElementById("pro-div").style.display = "none";
  document.getElementById("rev-div").style.display = "none";

 document.getElementById("pro").classList.remove("active");
document.getElementById("exp").classList.add("active");
document.getElementById("rev").classList.remove("active");
}

/*************Function for Reviews****************/



const review = document.getElementById("rev-div");

function clickRev() {
   document.getElementById("rev-div").style.display = "block";
   document.getElementById("pro-div").style.display = "none";
   document.getElementById("exp-div").style.display = "none";
 document.getElementById("pro").classList.remove("active");
document.getElementById("exp").classList.remove("active");
document.getElementById("rev").classList.add("active");
}


/*******************Alert message submitted********
*/

document.querySelector('form').addEventListener('submit', function(event) {
  const inputs = document.querySelectorAll('input');
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      isValid = false;
    }
  });

  if (!isValid) {
    event.preventDefault();
    alert("Please fill in all fields.");
  } else {
    alert("Message received. Thank you!");
  }
});
