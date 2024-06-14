import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../store/hooks';
import { loginUser } from '../../store/modules/users/usersSlice';
import { UserLogged } from '../../types/user';
import ModalOpen from '../ModalRegister';
import { SnackBarComponent } from '../SnackBar';

const FormLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [openModal, setOpenModal] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (Cookies.get('auth')) {
			navigate('/');
		}
	});

	const handleClickOpen = () => {
		setOpenModal(true);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const user: UserLogged = {
			email,
			password,
		};

		dispatch(loginUser(user));

		setTimeout(() => {
			if (Cookies.get('auth')) {
				navigate('/');
			}
		}, 1000);
	};

	return (
		<>
			<Box
				component="main"
				sx={{
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '10px',
				}}
			>
				<Grid
					container
					sx={{
						paddingTop: { xs: '50px', sm: '0px' },
						borderRadius: '10px',
						width: { xs: '100%' },
					}}
					justifyContent={'center'}
					alignItems={'center'}
					flexDirection={'row'}
					spacing={3}
				>
					<Grid item xs={12} md={6}>
						<Typography variant="h3" textAlign={'center'}>
							Experientes da Terra
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid
							container
							component={'form'}
							justifyContent={'center'}
							alignItems={'center'}
							flexDirection={'column'}
							spacing={2}
							padding={{ xs: 2, sm: 8 }}
							onSubmit={(event: React.FormEvent) =>
								handleSubmit(event)
							}
						>
							<Typography
								variant={'h5'}
								sx={{ marginBottom: '10px' }}
							>
								Realize seu Login!
							</Typography>
							<Grid item sx={{ width: '100%' }}>
								<TextField
									variant="outlined"
									label="E-mail"
									fullWidth
									sx={{
										borderRadius: '12px',
									}}
									onChange={(event) => {
										setEmail(event.currentTarget.value);
									}}
									value={email}
								/>
							</Grid>
							<Grid item sx={{ width: '100%' }}>
								<TextField
									label="Senha"
									variant="outlined"
									fullWidth
									sx={{
										borderRadius: '12px',
									}}
									onChange={(event) => {
										setPassword(event.currentTarget.value);
									}}
									value={password}
									type="password"
								/>
							</Grid>
							<Grid item sx={{ width: '100%' }}>
								<Button
									type="submit"
									variant="contained"
									fullWidth
									sx={{
										borderRadius: '12px',
										bgcolor: '#000',
										color: '#fff',
										':hover': {
											bgcolor: '#3a3a3a',
										},
									}}
								>
									Entrar
								</Button>

								<Grid
									item
									xs={12}
									textAlign={'center'}
									marginY={1}
								>
									<Typography
										variant="caption"
										fontSize={'16px'}
										textAlign={'center'}
									>
										Ainda não tem conta?{' '}
										<Link
											component={'button'}
											type="button"
											fontSize={'16px'}
											sx={{
												textDecoration: 'none',
												color: 'black',
											}}
											onClick={handleClickOpen}
										>
											Criar conta.
										</Link>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<SnackBarComponent />
			<ModalOpen open={openModal} changeState={setOpenModal} />
		</>
	);
};

export default FormLogin;
