//.join(" ") spcae in " " , space between every word 

function rev(name) {
  let namee = name.split("").reverse("").join(" ");
  return namee;
}
document.write(rev(` sardar`)); //print on page instead of console
