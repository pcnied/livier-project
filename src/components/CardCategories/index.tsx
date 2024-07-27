import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './style.module.css';
import calendarioIcon from '../../../public/assets/calendario.png';
import consultorIcon from '../../../public/assets/consultor.png';
import perfilIcon from '../../../public/assets/perfil.png';
import wwwIcon from '../../../public/assets/www.png';
import cardCalendario from '../../../public/assets/card_calendario.png';
import cardConsultoria from '../../../public/assets/card_consultoria.png';
import cardPerfil from '../../../public/assets/card_perfil.png';
import cardSite from '../../../public/assets/card_site.png';

interface CardData {
	title: string;
	href: string;
	iconSrc: string;
	backgroundImageSrc: string; // Adicionando propriedade para a imagem de fundo
}

const cardData: CardData[] = [
	{
		title: 'Análise de Perfil',
		href: '/hire',
		iconSrc: perfilIcon, // Alterando para utilizar a nova imagem importada
		backgroundImageSrc: cardPerfil, // Definindo a imagem de fundo
	},
	{
		title: 'Calendário de Conteúdo',
		href: '/hire',
		iconSrc: calendarioIcon, // Alterando para utilizar a nova imagem importada
		backgroundImageSrc: cardCalendario, // Definindo a imagem de fundo
	},
	{
		title: 'Consultoria',
		href: '/hire',
		iconSrc: consultorIcon, // Alterando para utilizar a nova imagem importada
		backgroundImageSrc: cardConsultoria, // Definindo a imagem de fundo
	},
	{
		title: 'Site Institucional',
		href: '/hire',
		iconSrc: wwwIcon, // Alterando para utilizar a nova imagem importada
		backgroundImageSrc: cardSite, // Definindo a imagem de fundo
	},
];

const CardCategories: React.FC = () => {
	const [visibleCards, setVisibleCards] = useState<number[]>([]);

	const onChange = (isVisible: boolean, index: number) => {
		if (isVisible && !visibleCards.includes(index)) {
			setVisibleCards((prevVisibleCards) => [...prevVisibleCards, index]);
		}
	};

	return (
		<div className={styles.cardContainer}>
			{cardData.map((card, index) => (
				<VisibilitySensor
					key={index}
					onChange={(isVisible) => onChange(isVisible, index)}
				>
					<div
						className={`${styles.card} ${
							visibleCards.includes(index) ? styles.visible : ''
						}`}
					>
						<div
							className={styles.cardBox}
							style={{
								backgroundImage: `url(${card.backgroundImageSrc})`,
							}}
						>
							<div className={styles.cardContent}>
								<img
									src={card.iconSrc}
									alt={card.title}
									className={styles.cardIcon}
								/>
								<p className={styles.cardTitle}>{card.title}</p>
							</div>
						</div>
					</div>
				</VisibilitySensor>
			))}
		</div>
	);
};

export default CardCategories;
