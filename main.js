const cards = document.querySelectorAll('.card');

const backgrounds = ['bg-green', 'bg-red', 'bg-blue'];
const textColors = ['text-green','text-red', 'text-blue']


function toggle (element, classNameIn, classNameOut) {
	element.classList.add(classNameIn);
	element.classList.remove(classNameOut);
}

cards.forEach( (card, index) => {
	card.addEventListener('mouseenter', () => {
	toggle(card.children[0], 'movein', 'moveout');
	card.classList.add(backgrounds[index]);

	toggle(card.children[2], 'moveup', 'movedown');
	
	card.children[2].classList.add(textColors[index]);

	toggle(card.children[1], 'scaledown', 'scaleup');
})
	card.addEventListener('mouseleave', () => {
	toggle(card.children[0], 'moveout', 'movein');	
	card.classList.remove(backgrounds[index]);

	toggle(card.children[2], 'movedown', 'moveup');

	card.children[2].classList.remove(textColors[index]);

	toggle(card.children[1], 'scaleup', 'scaledown');
})
} )

