import React from 'react';
import currencyMask from '../../../core/helpers/masks/currencyMask';

import Button from '../Button/Button';

import './shelve.scss';

type Props = {
	book: {},
	cartActions: Object,
}

const Shelve = (props:Props) => {
	const { book } = props;
	return (
		<article className="shelf">
			<header className="title">
				{book.title}
			</header>
			<main>
				<div className="book">
					<div className="book__cover">
						<img
							className="book__cover__photo"
							src={book.photo}
							alt={book.title}
						/>
					</div>
					<p className="book__description">
						{book.description}
						<span className="book__description__price">
							{currencyMask.mount(book.value)}
						</span>
					</p>
				</div>
			</main>
			<footer>
				<Button
					onClick={() => props.cartActions.addBook(book)}
					className="add-button"
				>
					<span className="add-icon" />Adicionar ao Carrinho
				</Button>
			</footer>
		</article>
	);
};

export default Shelve;

