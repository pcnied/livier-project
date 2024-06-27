import { Grid, Grow, Box } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';

interface ImagesCasesProps {
	images: string[];
}

const useVisibility = (offset = 1) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const top = ref.current.getBoundingClientRect().top;
				const windowHeight = window.innerHeight;
				if (top < windowHeight * offset) {
					setIsVisible(true);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [offset]);

	return { ref, isVisible };
};

const ImagesCases: React.FC<ImagesCasesProps> = ({ images }) => {
	const { ref, isVisible } = useVisibility();

	return (
		<Grow in={isVisible} timeout={1500}>
			<Grid
				ref={ref}
				container
				justifyContent="center"
				spacing={2}
				paddingX={3}
				mb={4}
			>
				{images.map((imageUrl, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						lg={3}
						key={index}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<Box
							component="img"
							src={imageUrl}
							alt={`Case Image ${index + 1}`}
							sx={{
								width: '100%',
								height: 'auto',
								borderRadius: 2,
								boxShadow: 3,
							}}
						/>
					</Grid>
				))}
			</Grid>
		</Grow>
	);
};

export default ImagesCases;
