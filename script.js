
document.addEventListener('DOMContentLoaded', function () {
  const sign_in = document.getElementById('sign_in');

  if (sign_in) {
    sign_in.addEventListener('click', function () {
      window.location.href = 'signup.html'; 
    });
  }
});
