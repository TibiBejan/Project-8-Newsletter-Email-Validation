const submitForm = document.querySelector('.newsletter-form');
const emailInput = document.getElementById('email');
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitForm.addEventListener('submit', (e) => {
	if (emailInput.value === '') {
		alert('Please Enter Your Email');
	}
	e.preventDefault();
});
emailInput.addEventListener('keydown', validation);

function validation() {
	if (emailInput.value.match(mailFormat)) {
		emailInput.classList.add('valid');
		emailInput.classList.remove('invalid');
	} else {
		emailInput.classList.add('invalid');
		emailInput.classList.remove('valid');
	}
}
