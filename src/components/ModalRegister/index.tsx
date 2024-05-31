import { Close } from '@mui/icons-material';
import { Box, Divider, Grid, IconButton, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { createUser } from '../../store/modules/users/usersSlice';
import { User } from '../../types/user';
import { ValidsDatas } from '../../types/validateData';
import { emailRegex } from '../../utils/validators/regexDatas';
import { SnackBarComponent } from '../SnackBar';

interface ModalOpenProps {
	open: boolean;
	changeState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOpen: React.FC<ModalOpenProps> = ({ open, changeState }) => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [errorEmail, setErrorEmail] = useState<ValidsDatas>({
		helperText: '',
		isValid: true,
	});
	const [errorSenha, setErrorSenha] = useState<ValidsDatas>({
		helperText: '',
		isValid: true,
	});

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (email.length && !emailRegex.test(email)) {
			setErrorEmail({
				helperText: 'Informe um e-mail válido.',
				isValid: false,
			});
		} else {
			setErrorEmail({
				helperText: 'Utilize seu e-mail para criar uma conta.',
				isValid: true,
			});
		}
	}, [email]);

	useEffect(() => {
		if (password.length && password.length < 6) {
			setErrorSenha({
				helperText: 'Cadastre uma senha com no mínimo 6 caracteres.',
				isValid: false,
			});
		} else {
			setErrorSenha({
				helperText:
					'Utilize uma senha fácil de lembrar e anote para não esquecer.',
				isValid: true,
			});
		}
	}, [password]);

	const handleClose = () => {
		changeState(false);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		changeState(false);

		const user: User = {
			name,
			email,
			password,
		};

		dispatch(createUser(user));
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{'Crie sua conta'}
				<IconButton
					aria-label="close"
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<Close />
				</IconButton>
			</DialogTitle>
			<Divider />
			<Box
				component={'form'}
				sx={{ maxWidth: '100%' }}
				onSubmit={(event: React.FormEvent) => handleSubmit(event)}
			>
				<DialogContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								label="Digite seu nome"
								type="name"
								fullWidth
								onChange={(event) => {
									setName(event.currentTarget.value);
								}}
								value={name}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Digite seu e-mail"
								type="email"
								fullWidth
								error={!errorEmail.isValid}
								helperText={errorEmail.helperText}
								onChange={(event) => {
									setEmail(event.currentTarget.value);
								}}
								value={email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								label="Crie sua senha"
								type="password"
								fullWidth
								inputProps={{ minLenght: 6 }}
								error={!errorSenha.isValid}
								helperText={errorSenha.helperText}
								onChange={(event) => {
									setPassword(event.currentTarget.value);
								}}
								value={password}
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<Divider />
				<DialogActions sx={{ paddingY: '20px' }}>
					<Button
						type="button"
						variant="contained"
						onClick={handleClose}
					>
						Cancelar
					</Button>
					<Button type="submit" variant="contained" autoFocus>
						Criar
					</Button>
				</DialogActions>
			</Box>
			<SnackBarComponent />
		</Dialog>
	);
};

export default ModalOpen;
