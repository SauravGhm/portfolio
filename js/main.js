document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = document.querySelector("#darkToggle i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });
  
  console.log("Portfolio page enhanced and loaded.");