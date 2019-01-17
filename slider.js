$(document ).ready(function() {
	var slider = document.getElementById("myRange");
	var amount = document.getElementById("price");
	var points = document.getElementById("reward");
	points.innerHTML = 2500;
	amount.innerHTML = 250;
	slider.oninput = function() {
	    var num = points.innerHTML = this.value;
	    amount.innerHTML = 500 - num / 10;
	}
});