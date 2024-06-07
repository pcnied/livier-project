import React, { useEffect, useState, useRef } from 'react';
import { Grid, Grow } from '@mui/material';

interface ImagesRowProps {
	images: string[];
}

const ImagesRow: React.FC<ImagesRowProps> = ({ images }) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const top = ref.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				setIsVisible(top < windowHeight * 1);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Para verificar a visibilidade inicialmente

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<Grow in={isVisible} timeout={1500}>
			<Grid ref={ref} container spacing={2} paddingX={3} mb={4}>
				{images.map((imageUrl, index) => (
					<Grid item xs={12} sm={4} key={index}>
						<img
							src={imageUrl}
							alt={`Image ${index + 1}`}
							style={{ width: '100%', height: 'auto' }}
						/>
					</Grid>
				))}
			</Grid>
		</Grow>
	);
};

export default ImagesRow;
