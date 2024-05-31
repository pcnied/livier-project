import { Button, Divider, Grid, TextField, Typography } from '@mui/material';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import ProfileComponent from '../../components/ProfileComponent';

const Data = () => {
	return (
		<>
			<NavBar positionAppBar="static" />
			<ProfileComponent>
				<Grid container gap={2} padding={'10px'}>
					<Grid item xs={6} sm={6}>
						<TextField
							variant="outlined"
							label="Nome Completo"
							fullWidth
							sx={{
								borderRadius: '12px',
							}}
						/>
					</Grid>
					<Grid item xs={6} sm={6}>
						<TextField
							variant="outlined"
							label="Celular"
							fullWidth
							type="number"
							sx={{
								borderRadius: '12px',
							}}
						/>
					</Grid>
					<Grid item xs={6} sm={6}>
						<TextField
							variant="outlined"
							label="Anivesário"
							fullWidth
							type="date"
							sx={{
								borderRadius: '12px',
							}}
						/>
					</Grid>
					<Grid item xs={6} sm={6}>
						<TextField
							variant="outlined"
							label="CPF"
							fullWidth
							sx={{
								borderRadius: '12px',
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
						}}
					>
						<Button variant="outlined">Salvar</Button>
					</Grid>
				</Grid>

				<Divider></Divider>
				<Grid item xs={6} sm={6} spacing={2} padding={'10px'}>
					<Typography variant="h6" sx={{ marginTop: '10px' }}>
						Alterar Senha
					</Typography>
				</Grid>

				<Grid item xs={6} sm={6} spacing={2} padding={'10px'}>
					<TextField
						variant="outlined"
						label="Senha"
						fullWidth
						sx={{
							borderRadius: '12px',
						}}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					gap={2}
					padding={'10px'}
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<Button variant="outlined">Salvar</Button>
				</Grid>
			</ProfileComponent>
			<Footer />
		</>
	);
};

export default Data;
