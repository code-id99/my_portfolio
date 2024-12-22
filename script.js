function showInfo(section){
  const sections = document.querySelectorAll(".info-content");
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(section);
  if (activeSection){
    activeSection.classList.add('active');
  }
}

const cartDivs = document.querySelectorAll('.cart');

cartDivs.forEach(div => {
  div.addEventListener('mouseover', () => {
    cartDivs.forEach(otherDiv => {
      if (otherDiv !== div){
        otherDiv.classList.add('small-and-back');
      }
    });
  });
  div.addEventListener('mouseout', () => {
    cartDivs.forEach(otherDiv => {
      otherDiv.classList.remove('small-and-back');
    });
  });
});