import { Grid, TextField, Typography, Switch, Button } from '@mui/material';
import Address from '../../types/address';
import { useState } from 'react';
import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import {
	createAddress,
	deleteAddress,
	updateAddress,
} from '../../store/modules/address/addressSlice';

interface FormAddressProps {
	context: 'create' | 'update';
	address?: Address;
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const FormAddress: React.FC<FormAddressProps> = ({ address, context }) => {
	const [name, setName] = useState(address?.name || '');
	const [street, setStreet] = useState(address?.street || '');
	const [number, setNumber] = useState(address?.number || '');
	const [neighborhood, setNeighborhood] = useState(
		address?.neighborhood || '',
	);
	const [complement, setComplement] = useState(address?.complement || '');
	const [city, setCity] = useState(address?.city || '');
	const [state, setState] = useState(address?.state || '');
	const [zipCode, setZipCode] = useState(address?.zipCode || '');
	const [recipient, setRecipient] = useState(address?.customer.name || '');
	const [recipientPhone, setRecipientPhone] = useState(
		address?.customer.phone || '',
	);
	const [defaultChecked, setDefaultChecked] = useState<boolean>(
		address?.default || false,
	);

	const dispatch = useAppDispatch();

	const handleDeleteAddress = () => {
		if (address?.id) dispatch(deleteAddress(address.id));
	};

	const handleUpdateAddress = () => {
		dispatch(
			updateAddress({
				name,
				street,
				number,
				neighborhood,
				complement,
				city,
				state,
				zipCode,
				recipient,
				recipientPhone,
			}),
		);
	};

	const handleCreateAddress = () => {
		dispatch(
			createAddress({
				name,
				street,
				number,
				neighborhood,
				complement,
				city,
				state,
				zipCode,
				recipient,
				recipientPhone,
			}),
		);
	};

	return (
		<Grid
			container
			gap={2}
			padding={'20px'}
			bgcolor="white"
			margin="auto"
			borderRadius="10px"
		>
			<Grid item xs={8} sm={6}>
				<TextField
					variant="outlined"
					label="Identificação do endereço (Casa, Trabalho, etc.)"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setName(event.currentTarget.value)}
					value={name}
				/>
			</Grid>
			<Grid item xs={6} sm={4}>
				<TextField
					variant="outlined"
					label="CEP"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setZipCode(event.currentTarget.value)}
					value={zipCode}
				/>
			</Grid>
			<Grid item xs={8} sm={6}>
				<TextField
					variant="outlined"
					label="Rua"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setStreet(event.currentTarget.value)}
					value={street}
				/>
			</Grid>
			<Grid item xs={4} sm={4}>
				<TextField
					variant="outlined"
					label="Número"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setNumber(event.currentTarget.value)}
					value={number}
				/>
			</Grid>
			<Grid item xs={8} sm={6}>
				<TextField
					variant="outlined"
					label="Bairro"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) =>
						setNeighborhood(event.currentTarget.value)
					}
					value={neighborhood}
				/>
			</Grid>
			<Grid item xs={5} sm={4}>
				<TextField
					variant="outlined"
					label="Complemento"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) =>
						setComplement(event.currentTarget.value)
					}
					value={complement}
				/>
			</Grid>

			<Grid item xs={6} sm={6}>
				<TextField
					variant="outlined"
					label="Cidade"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setCity(event.currentTarget.value)}
					value={city}
				/>
			</Grid>
			<Grid item xs={6} sm={4}>
				<TextField
					variant="outlined"
					label="Estado"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) => setState(event.currentTarget.value)}
					value={state}
				/>
			</Grid>

			<Grid item xs={6} sm={5}>
				<TextField
					variant="outlined"
					label="Nome do destinatário"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) =>
						setRecipient(event.currentTarget.value)
					}
					value={recipient}
				/>
			</Grid>
			<Grid item xs={6} sm={5}>
				<TextField
					variant="outlined"
					label="Telefone do destinatário"
					fullWidth
					sx={{
						borderRadius: '12px',
					}}
					onChange={(event) =>
						setRecipientPhone(event.currentTarget.value)
					}
					value={recipientPhone}
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
				<Typography>Tornar endereço padrão</Typography>
				<Switch
					{...label}
					onChange={(event) =>
						setDefaultChecked(event.currentTarget.checked)
					}
					defaultChecked={defaultChecked}
				/>
			</Grid>

			<Grid
				item
				xs={12}
				sm={12}
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					gap: '1rem',
					alignItems: 'center',
				}}
			>
				<Button onClick={() => handleDeleteAddress()}>
					Excluir endereço
				</Button>
				{context == 'update' && (
					<Button
						onClick={() => handleUpdateAddress()}
						variant="outlined"
					>
						Salvar alterações
					</Button>
				)}

				{context == 'create' && (
					<Button
						onClick={() => handleCreateAddress()}
						variant="outlined"
					>
						Criar endereço
					</Button>
				)}
			</Grid>
		</Grid>
	);
};

export default FormAddress;
