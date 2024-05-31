import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const CardUtils = () => {
	return (
		<React.Fragment>
			<Grid
				container
				sx={{ margin: '0' }}
				flexDirection={'row'}
				padding={3}
				gap={4}
				justifyContent={'space-around'}
				alignItems={'center'}
			>
				<Grid item xs={12} display={'flex'} justifyContent={'center'}>
					<Button
						variant="outlined"
						sx={{
							height: '100px',
							width: '250px',
							color: 'black',
							border: '1px solid #ccc',
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
							borderRadius: '12px',
						}}
					>
						WhatsApp
					</Button>
				</Grid>
				<Grid item xs={12} display={'flex'} justifyContent={'center'}>
					<Typography variant="h6">Dúvidas frequentes</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="outlined"
						sx={{
							height: '100px',
							width: '200px',
							color: 'black',
							border: '1px solid #ccc',
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
							borderRadius: '12px',
						}}
					>
						Produtos
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant="outlined"
						sx={{
							height: '100px',
							width: '200px',
							color: 'black',
							border: '1px solid #ccc',
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
							borderRadius: '12px',
						}}
					>
						Entrega
					</Button>
				</Grid>
				<Grid item>
					<Button
						variant="outlined"
						sx={{
							height: '100px',
							width: '200px',
							color: 'black',
							border: '1px solid #ccc',
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 20px;',
							borderRadius: '12px',
						}}
					>
						Pagamento
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default CardUtils;
