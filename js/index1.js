let $stackedCards = $('.stacked-cards');

function addCard(cardContent) {
	let $newCard = $(cardContent);
	$stackedCards.append($newCard);
	setTimeout(() => {
		requestAnimationFrame(() => {
			$newCard.addClass('card--added');
		});
	}, 10);
}

$().ready(() => {
	addCard('<div class="card"><h2 class="heading-beta">A Card!</h2></div>');
});

$('#js-add-card').on('click', () => {
	addCard('<div class="card"><h2 class="heading-beta">Another Card!</h2></div>');
});

$('#js-add-tall-card').on('click', () => {
	addCard('<div class="card"><h2 class="heading-beta">A<br />Tall<br />Card!</h2></div>');
});

$('#js-remove-card').on('click', () => {
	let $activeCard = $stackedCards.children().slice(-1);
	$activeCard.removeClass('card--added');
	setTimeout(() => {
		requestAnimationFrame(() => {
			$activeCard.remove();
		});
	}, 400); // Match CSS transition time
});