const appInit = () => {
  const currentYear = new Date().getFullYear();
  const year = document.getElementById("year");
  year.setAttribute("datetime", currentYear);
  year.innerText = currentYear;
  console.log(year);
};

document.addEventListener("DOMContentLoaded", appInit);
