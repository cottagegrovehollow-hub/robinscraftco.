function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function claimFreebie() {
  const email = document.getElementById('freebieEmail').value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  openModal('freebie-modal');
}

function notifyDigital() {
  const email = document.getElementById('digitalEmail').value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  closeModal('digital-modal');
  alert('You\'re on the list! We\'ll email you when the digital shop goes live.');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    ['order-modal','digital-modal','freebie-modal'].forEach(closeModal);
  }
});
