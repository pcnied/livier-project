import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Style from './style.module.css'; // Importe o arquivo CSS para estilos

const CartIcon = () => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(true);
		// Adicione lógica para o que deve acontecer quando o ícone for clicado
		setTimeout(() => setIsClicked(false), 300); // Remove o efeito de clique após 300ms
	};

	return (
		<div
			className={`${Style.cartIcon} ${isClicked ? Style.clicked : ''}`}
			onClick={handleClick}
		>
			<FaShoppingCart />
		</div>
	);
};

export default CartIcon;
