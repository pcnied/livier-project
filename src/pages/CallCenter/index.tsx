import { Grid, Typography } from '@mui/material';
import React from 'react';

import CardUtils from '../../components/CardUtils';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const CallCenter = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Grid
				container
				sx={{
					justifyContent: 'center',
					padding: '10px',
				}}
			>
				<Grid
					item
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					xs={12}
				>
					<Typography variant="h5" fontWeight={'500'}>
						CENTRAL DE ATENDIMENTO
					</Typography>

					<Typography variant="h6">
						Como você pode nos contatar?
					</Typography>
					<CardUtils />
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default CallCenter;
