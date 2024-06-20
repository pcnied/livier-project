import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import CardCategories from '../../components/CardCategories';
import CardHomeCompact from '../../components/CardHomeCompact';
import CarouselHome from '../../components/CarouselHome';

const Home = () => {
	document.title = 'Home | Livier';

	return (
		<React.Fragment>
			<Box sx={{ width: '100%', marginTop: 6 }}>
				<CarouselHome />
				<Box marginTop={2}>
					<Grid
						item
						xs={12}
						padding={2}
						style={{ textAlign: 'center' }}
					>
						<Typography
							fontSize="24px"
							variant="overline"
							fontWeight={300}
							color={'black'}
						>
							Fornecemos os seguintes suportes para sua empresa
						</Typography>
					</Grid>
				</Box>

				<Grid container justifyContent="center">
					<Box padding={2} marginBottom={4}>
						<CardHomeCompact />
					</Box>
					<Divider
						sx={{
							width: '80%',
							borderBottomWidth: '1px',
						}}
					></Divider>

					<Grid
						item
						xs={10}
						padding={2}
						style={{ textAlign: 'center' }}
					>
						<Typography
							fontSize="24px"
							variant="overline"
							fontWeight={300}
							color={'black'}
						>
							Também podemos te ajudar com
						</Typography>
						<CardCategories />
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Home;
