import { Box } from '@mui/material';
import React from 'react';

interface ImageStyledProps {
	src: string;
}

const ImageStyled: React.FC<ImageStyledProps> = ({ src }) => {
	return (
		<Box
			component={'img'}
			src={src}
			sx={{
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				width: '100%',
			}}
		/>
	);
};

export default ImageStyled;
