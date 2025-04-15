function checkSignal() {
	var input = parseInt(document.getElementById('light').value);
	var output = document.getElementById('traffic');

	switch (input) {
		case 1:
			output.innerHTML = "🔴 <strong>Red</strong> - Stop!";
			break;
		case 2:
			output.innerHTML = "🟡 <strong>Yellow</strong> - Slow Down!";
			break;
		case 3:
			output.innerHTML = "🟢 <strong>Green</strong> - Go!";
			break;
		default:
			output.innerHTML = "🚫 <strong>Invalid Entry</strong>. Unknown color";
	}
}
