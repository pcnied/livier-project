import React, { useState, useEffect } from 'react';
import {
	FaWhatsapp,
	FaInstagram,
	FaFacebook,
	FaLinkedin,
} from 'react-icons/fa';
import Style from './style.module.css'; // Importa o arquivo CSS para estilos

const SocialIcons = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [stopAutoRotate, setStopAutoRotate] = useState(false);
	const [order, setOrder] = useState([0, 1, 2, 3]); // Array com a ordem inicial dos ícones
	const [animationDirection, setAnimationDirection] = useState(''); // Direção da animação ('slideOutLeft' ou 'slideInRight')

	useEffect(() => {
		let interval;
		if (!stopAutoRotate) {
			interval = setInterval(() => {
				setAnimationDirection('slideOutLeft');

				setTimeout(() => {
					setOrder((prevOrder) => {
						const newOrder = [...prevOrder];
						const firstItem = newOrder.shift();
						newOrder.push(firstItem);
						setAnimationDirection('slideInRight');
						return newOrder;
					});
				}, 300); // Tempo para iniciar a animação de entrada após a de saída
			}, 3000); // Troca a cada 3 segundos
		}

		return () => clearInterval(interval);
	}, [stopAutoRotate]);

	const handleMouseEnter = () => {
		setIsHovered(true);
		setStopAutoRotate(true); // Para a troca automática ao passar o mouse sobre um ícone
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		setStopAutoRotate(false); // Reinicia a troca automática ao sair do ícone
	};

	return (
		<div
			className={Style.socialIcons}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{order.map((index, idx) => (
				<div
					key={index}
					className={`${Style.icon} ${getStyleClass(index)} ${
						isHovered ? Style.expanded : ''
					} ${
						animationDirection === 'slideOutLeft' && idx === 0
							? Style.exiting
							: ''
					} ${
						animationDirection === 'slideInRight' && idx === 0
							? Style.entering
							: ''
					}`}
					style={{ bottom: `${idx * 60}px` }} // Ajuste dinâmico da posição bottom
				>
					{renderIcon(index)}
				</div>
			))}
		</div>
	);
};

// Função auxiliar para renderizar o ícone com base no índice
const renderIcon = (index) => {
	switch (index) {
		case 0:
			return (
				<a
					href="https://wa.me/5583991429201"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaWhatsapp />
				</a>
			);
		case 1:
			return (
				<a
					href="https://www.instagram.com/liviermkt/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
			);
		case 2:
			return (
				<a
					href="https://www.facebook.com/people/Livier-Marketing/61554559621184/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</a>
			);
		case 3:
			return (
				<a
					href="https://www.linkedin.com/company/liviermarketing/posts/?feedView=all"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			);
		default:
			return null;
	}
};

// Função auxiliar para retornar a classe de estilo com base no índice
const getStyleClass = (index) => {
	switch (index) {
		case 0:
			return Style.whatsapp;
		case 1:
			return Style.instagram;
		case 2:
			return Style.facebook;
		case 3:
			return Style.linkedin;
		default:
			return '';
	}
};

export default SocialIcons;
