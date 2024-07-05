import { Typography, Box, Grow, Link } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';

const useVisibility = (offset = 0.7) => {
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

interface PresentationProps {
	title?: string;
	siteUrl?: string;
	imageUrl: string;
}

const Presentation: React.FC<PresentationProps> = ({
	title,
	imageUrl,
	siteUrl,
}) => {
	const { ref, isVisible } = useVisibility();

	return (
		<Box textAlign="center" marginY={2}>
			<Grow in={isVisible} timeout={1400}>
				<Box ref={ref}>
					{title && (
						<Typography variant="h4" component="h2" gutterBottom>
							{title}
						</Typography>
					)}
					{siteUrl && (
						<Typography variant="h6" component="p" gutterBottom>
							<Link
								href={siteUrl}
								target="_blank"
								rel="noopener noreferrer"
								sx={{ textDecoration: 'none' }}
							>
								{siteUrl}
							</Link>
						</Typography>
					)}
					<Box
						component="img"
						src={imageUrl}
						alt={title || 'Presentation Image'}
						sx={{
							maxWidth: '100%',
							height: 'auto',
							borderRadius: '8px',
							boxShadow: 3,
						}}
					/>
				</Box>
			</Grow>
		</Box>
	);
};

export default Presentation;
