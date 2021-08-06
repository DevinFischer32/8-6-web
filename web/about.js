console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
 handleSubmit = ''
function duckyP(evt){
	evt.preventDefault()
	alert('Nice mouse skills!')
}

let form = document.querySelector('form#contact');
let duckP = document.getElementById('ducky')
form.addEventListener('submit', handleSubmit);
duckP.addEventListener('mouseover',duckyP)


function contactUs (evt){
	evt.preventDefault()
	
}