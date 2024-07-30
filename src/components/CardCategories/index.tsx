import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import calendarioIcon from '../../../public/assets/calendario.png';
import cardCalendario from '../../../public/assets/card_calendario.png';
import cardConsultoria from '../../../public/assets/card_consultoria.png';
import cardPerfil from '../../../public/assets/card_perfil.png';
import cardSite from '../../../public/assets/card_site.png';
import consultorIcon from '../../../public/assets/consultor.png';
import perfilIcon from '../../../public/assets/perfil.png';
import wwwIcon from '../../../public/assets/www.png';
import styles from './style.module.css';

interface CardData {
	title: string;
	href: string;
	iconSrc: string;
	backgroundImageSrc: string;
}

const cardData: CardData[] = [
	{
		title: 'Análise de Perfil',
		href: '/hire',
		iconSrc: perfilIcon,
		backgroundImageSrc: cardPerfil,
	},
	{
		title: 'Calendário de Conteúdo',
		href: '/hire',
		iconSrc: calendarioIcon,
		backgroundImageSrc: cardCalendario,
	},
	{
		title: 'Consultoria',
		href: '/hire',
		iconSrc: consultorIcon,
		backgroundImageSrc: cardConsultoria,
	},
	{
		title: 'Site Institucional',
		href: '/hire',
		iconSrc: wwwIcon,
		backgroundImageSrc: cardSite,
	},
];

const CardCategories: React.FC = () => {
	return (
		<Box sx={{marginBottom: 2}} className={styles.cardContainer}>
			{cardData.map((card, index) => {
				const { ref, inView } = useInView({
					triggerOnce: true,
					threshold: 0.1,
				});

				return (
					<Card
						key={index}
						ref={ref}
						className={`${styles.card} ${
							inView ? styles.visible : ''
						}`}
					>
						<CardMedia
							className={styles.cardBox}
							image={card.backgroundImageSrc}
							title={card.title}
						>
							<CardContent className={styles.cardContent}>
								<img
									src={card.iconSrc}
									alt={card.title}
									className={styles.cardIcon}
								/>
								<Typography className={styles.cardTitle}>
									{card.title}
								</Typography>
							</CardContent>
						</CardMedia>
					</Card>
				);
			})}
		</Box>
	);
};

export default CardCategories;
