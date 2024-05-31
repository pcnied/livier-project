import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import {
	Box,
	Button,
	Divider,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

import CardProduct from '../../components/CardProduct';
import CardProductPageCart from '../../components/CardProductPageCart';
import Footer from '../../components/Footer';
import NavBarLogo from '../../components/NavBarLogo';
import { SnackBarComponent } from '../../components/SnackBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllcarts } from '../../store/modules/carts/cartsSlice';
import {
	findAllProducts,
	getAllProducts,
} from '../../store/modules/products/productsSlice';
import { validateZipCode } from '../../utils/validators/inputs/regexZipCode';

const Cart = () => {
	const [zipCode, setZipCode] = useState('');
	const [locale, setLocale] = useState('');
	const [error, setError] = useState('');
	const [errorZipCode, setErrorZipCode] = useState('');

	const carts = useAppSelector(getAllcarts);
	const products = useAppSelector(getAllProducts);

	const dispatch = useAppDispatch();

	/**
	 *
	 * @returns return if the zip code is valid, calling the API of VIACEP
	 */
	const handleConsultZipCode = async () => {
		try {
			if (zipCode.length !== 8) {
				return;
			}

			const response = await axios.get(
				`https://viacep.com.br/ws/${zipCode}/json`,
			);

			if (response.data.erro) {
				setErrorZipCode('CEP não encontrado. Tente novamente!');
				return;
			}

			setLocale(response.data.localidade);
			setErrorZipCode('');
		} catch (error) {
			setLocale('');
			setErrorZipCode('CEP não encontrado. Tente novamente!');
		}
	};

	const validateZipCodeInput = (value: string) => {
		if (!validateZipCode(value)) {
			setError('Digite um CEP válido.');
			return;
		}

		setError('');
	};

	const showErrorZipCode = useMemo(() => {
		if (errorZipCode) {
			setTimeout(() => {
				setErrorZipCode('');
			}, 5000);

			return (
				<Box
					sx={{
						bgcolor: '#e04c4c',
						color: 'white',
						padding: 1,
						width: '100%',
						textAlign: 'center',
						borderRadius: '6px',
					}}
				>
					<Typography variant="body2">{errorZipCode}</Typography>
				</Box>
			);
		}

		return <></>;
	}, [errorZipCode]);

	useEffect(() => {
		if (carts.length === 0) {
			dispatch(
				findAllProducts({
					pageSize: 24,
					page: 1,
					currentPage: 1,
					category: '',
				}),
			);
		}
	}, [carts]);

	return (
		<>
			<NavBarLogo positionAppBar="static" />
			{carts.length > 0 && (
				<Grid
					container
					justifyContent={'center'}
					gap={2}
					minHeight={'100vh'}
				>
					<Grid
						item
						xs={10}
						md={6}
						marginY={4}
						height={'fit-content'}
					>
						<Typography variant={'h6'}>Meu carrinho:</Typography>
						<Grid
							container
							sx={{
								borderRadius: '10px',
							}}
						>
							{carts.map((cart) => (
								<Grid key={cart.code} item xs={12}>
									<CardProductPageCart
										product={cart.product}
										quantity={cart.quantity}
										totalPrice={cart.totalPrice.value}
									/>
								</Grid>
							))}
						</Grid>
					</Grid>

					<Grid
						item
						xs={10}
						md={4}
						marginY={4}
						height={'fit-content'}
					>
						<Typography variant={'h6'}>
							Resumo do pedido:
						</Typography>
						<Grid
							container
							gap={1}
							padding={2}
							sx={{
								borderRadius: '10px',
								boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0px 10px;',
							}}
						>
							<Grid
								item
								xs={12}
								display={'flex'}
								flexDirection={'column'}
								alignItems={'center'}
								gap={1}
								marginBottom={2}
							>
								<TextField
									fullWidth
									variant="outlined"
									error={!!error}
									helperText={error}
									label="Digite seu CEP"
									type="text"
									name="zipCode"
									value={zipCode}
									onChange={(e) => {
										setZipCode(e.target.value);
										validateZipCodeInput(e.target.value);
									}}
								/>
								{showErrorZipCode}
								<Button
									variant="contained"
									fullWidth
									sx={{
										':hover': {
											bgcolor: '#292929f2',
										},
									}}
									disabled={!!error}
									onClick={handleConsultZipCode}
								>
									Consultar
								</Button>

								<Link
									href="https://buscacepinter.correios.com.br/app/endereco/index.php"
									target="_blank"
								>
									Não sei meu CEP
								</Link>
								<SnackBarComponent />
								{locale && (
									<Grid
										container
										mt={2}
										justifyContent={'space-between'}
									>
										<Grid
											item
											xs={8}
											display={'flex'}
											alignItems={'center'}
											justifyContent={'flex-start'}
											gap={1}
										>
											<LocalShippingIcon color="primary" />
											<Typography ml={1}>
												{' '}
												SEDEX
												<Typography variant="body2">
													Receba em até 30 dias úteis
												</Typography>
											</Typography>
										</Grid>
										<Grid
											item
											xs={4}
											display={'flex'}
											justifyContent={'flex-end'}
											alignItems={'center'}
										>
											<Typography>R$ 10,00</Typography>
										</Grid>
									</Grid>
								)}
							</Grid>

							<Divider sx={{ width: '100%', marginLeft: 0 }} />
							<Grid
								item
								xs={12}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}
							>
								<Typography variant="subtitle1" color={'grey'}>
									Subtotal
								</Typography>
								<Typography variant="subtitle1" color={'grey'}>
									R${' '}
									{carts
										.reduce(
											(total, cart) =>
												total + cart.totalPrice.value,
											0,
										)
										.toFixed(2)
										.toString()
										.replace('.', ',')}
								</Typography>
							</Grid>
							<Divider sx={{ width: '100%', marginLeft: 0 }} />
							<Grid
								item
								xs={12}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}
							>
								<Typography variant="subtitle1">
									Total
								</Typography>
								<Typography variant="subtitle1">
									R${' '}
									{carts
										.reduce(
											(total, cart) => total + cart.total,
											0,
										)
										.toFixed(2)
										.toString()
										.replace('.', ',')}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										marginTop: '10px',
										flexDirection: 'column',
									}}
								>
									<Button
										variant="contained"
										sx={{
											width: '100%',
											padding: '12px',
											marginY: '10px',
											color: '#fff',
											bgcolor: '#067742',
											':hover': { bgcolor: '#068d4e' },
										}}
									>
										Finalizar compra
									</Button>
									<Link href="/products">
										Adicionar mais itens
									</Link>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}

			{carts.length === 0 && (
				<Grid container justifyContent={'center'}>
					<Grid
						item
						xs={12}
						height={'fit-content'}
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						m={10}
					>
						<Typography
							fontFamily={'Prata'}
							variant={'h4'}
							textAlign={'center'}
						>
							Seu carrinho está vazio
						</Typography>
						<Button
							variant="contained"
							href="/c/novidades"
							sx={{
								width: { xs: '100%', md: '50%' },
								padding: '10px',
								marginTop: '10px',
								borderRadius: '18px',
								':hover': {
									bgcolor: '#292929f0',
								},
							}}
						>
							Adicionar itens
						</Button>
					</Grid>

					<Grid item xs={10} mb={2}>
						<Typography
							fontFamily={'Prata'}
							variant={'h5'}
							textAlign={'center'}
						>
							Conheça os <br />
							<span style={{ fontSize: '40px' }}>
								produtos recomendados!
							</span>
						</Typography>
					</Grid>

					<Grid
						item
						xs={10}
						display={'flex'}
						justifyContent={'center'}
					>
						<Grid
							container
							flexDirection={'row'}
							justifyContent={'center'}
							alignItems={'center'}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						>
							{products
								.filter((product, index) => index < 4)
								.map((product) => (
									<Grid
										item
										key={product.code}
										mb={6}
										xs={6}
										md={3}
									>
										<CardProduct product={product} />
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			)}

			<Footer />
		</>
	);
};

export default Cart;
