const updatebtn = document.getElementById('update');
const email = document.getElementById('usrnm');
const resetbtn = document.getElementById('reset');

window.addEventListener('load', (e) => {
  alert(' enter admin@teamwork.com to enter as admin or blank as employee');
});

updatebtn.addEventListener('click', (e) => {
  if (email.value != 'admin@teamwork.com') {
    window.location.href = './pages/home.html';
  } else {
    window.location.href = './pages/admin.html';
  }
});

resetbtn.addEventListener('click', (e) => {
  window.location.href = './pages/change-password-form.html';
});
