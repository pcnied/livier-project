import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Loading: React.FC<{ message?: string }> = ({ message }) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			<CircularProgress />
			{message && (
				<Typography variant="h6" mt={2}>
					{message}
				</Typography>
			)}
		</Box>
	);
};

export default Loading;
