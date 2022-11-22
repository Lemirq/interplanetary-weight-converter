const planets = [
	{ name: 'Mercury', gravity: 0.378, image: 'Mercury.png' },
	{ name: 'Venus', gravity: 0.907, image: 'Venus.png' },
	{ name: 'Earth', gravity: 1, image: 'Earth.png' },
	{ name: 'Mars', gravity: 0.377, image: 'Mars.png' },
	{ name: 'Jupiter', gravity: 2.36, image: 'Jupiter.png' },
	{ name: 'Saturn', gravity: 0.916, image: 'Saturn.png' },
	{ name: 'Uranus', gravity: 0.889, image: 'Uranus.png' },
	{ name: 'Neptune', gravity: 1.12, image: 'Neptune.png' },
];

document.addEventListener('click', (e) => {
	if (e.target.id !== 'weight') {
		document.querySelector('#weight').blur();
	}
});

document.getElementById('weight').addEventListener('input', calc);
for (let i = 0; i < planets.length; i++) {
	const element = planets[i];
	console.log(planets[i].name);

	html = `
  <div class="card">
                  <div class="planet-info">
                      <img class="planet-img" src="./images/planets/${planets[i].image}" alt="${planets[i].name}">
                      <h3 class="planet">${planets[i].name}</h3>
                  </div>
                  <div class="divider"></div>
                  <h4 class="weight">weight</h4>
                  <div class="dynamic">
                      <h3 id="${planets[i].name}" class="value">0</h3>
                  </div>
              </div>
              `;
	document.querySelector('.card-container').insertAdjacentHTML('beforeend', html);
}

function calc(e) {
	if (!e.data.match(/[0-9]/g)) {
		document.querySelector('#weight').value = '';
	} else {
		if (weight.value > 9999999) {
			weight.value = '';
			for (let i = 0; i < planets.length; i++) {
				document.getElementById(planets[i].name).innerHTML = 0;
			}
			alert('Max Amount Of Numbers is 9999999');
		} else {
			for (let i = 0; i < planets.length; i++) {
				let val = weight.value;
				document.getElementById(planets[i].name).innerHTML = Math.round(val * planets[i].gravity);
			}
		}
	}
}

// const url = 'https://source.unsplash.com/random/1920x1080?space,stars,galaxy,universe';
// const img = document.querySelector('body');
// img.style.backgroundImage = `url(${url})`;
