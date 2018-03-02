const button = document.getElementById('boton'),
	navbar = document.getElementById('movie'),
	angle = document.getElementById('angle'),
	menu = document.getElementById('menu'),
	peliculas = document.getElementById('peliculas');
boton.addEventListener('click', nav)
angle.addEventListener('click', men)
function nav() {
	navbar.classList.toggle('active');
}
function men() {
	menu.classList.toggle('active');
	peliculas.classList.toggle('active');
	angle.classList.toggle('active');
	console.log("hola")
}