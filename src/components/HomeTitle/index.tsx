import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

interface HomeTitleProps {
	title: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({ title }) => {
	return (
		<Grid
			container
			justifyContent={'center'}
			alignItems={'center'}
			paddingX={'10px'}
			gap={2}
		>
			<Grid item xs={3} sm={4}>
				<Box
					component={'div'}
					sx={{
						alignItems: 'center',
						height: '1px',
						border: ' 1px solid black',
						width: '100%',
					}}
				/>
			</Grid>
			<Grid item xs={5} sm={3} display={'flex'} justifyContent={'center'}>
				<Typography variant="h4" textAlign={'center'}>
					{title}
				</Typography>
			</Grid>
			<Grid item xs={3} sm={4}>
				<Box
					component={'div'}
					sx={{
						height: '1px',
						border: ' 1px solid black',
						width: '100%',
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default HomeTitle;
