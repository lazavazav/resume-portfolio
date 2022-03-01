//get modal element for courses
const modal = document.getElementById('coursesModal');

//get modal button
const courseLink = document.getElementById('educ');

//get close button
const closeBtn = document.getElementById('closeBtn');

//listen for click event
courseLink.addEventListener('click', openModal);
//listen for click event
closeBtn.addEventListener('click', closeModal);

//function to open Modal
function openModal() {
  modal.style.display = 'block';
}

//function to close modal
function closeModal() {
  modal.style.display = 'none';
}

//to activate hamburger menu in nav bar
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  const options = {};
  var instances = M.Sidenav.init(elems, options);
  instances.open();
});
