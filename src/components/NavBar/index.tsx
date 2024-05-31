import {
	Instagram,
	FavoriteBorderTwoTone,
	Menu as MenuIcon,
	MoreVert as MoreIcon,
	ShoppingCartTwoTone as ShoppingCartTwoToneIcon,
	WhatsApp,
} from '@mui/icons-material';
import { Button, Divider, Grid, LinearProgress, Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoLivier from '../../../public/assets/logoLivier.png';
import CategoryDrawer from '../CategoryDrawer';

// import StaticComponents from '../../../configs/staticComponents';
// import CookiesServices from '../../../services/cookieService';
// import { useAppDispatch, useAppSelector } from '../../../store/hooks';
// import { cartsSelector } from '../../../store/modules/carts/cartsSlice';
// import { findCarts } from '../../../store/modules/carts/services/find/findCarts.service';
// import { previewSearchedProductsSelector } from '../../../store/modules/previewSearchedProducts/previewSearchedProductsSlice';
// import AutoCompleteProduct from '../../generics/AutoCompleteProduct';
// import CategoryDrawer from '../../generics/CategoryDrawer';
// import DrawerCart from '../../generics/DrawerCart';
// import Search from '../../generics/Search';

interface NavBarProps {
	positionAppBar:
		| 'fixed'
		| 'absolute'
		| 'relative'
		| 'static'
		| 'sticky'
		| undefined;
}

const navLinks = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Cases Livier',
		path: '/cases',
	},
	{
		name: 'Contrate a Livier',
		path: '/hire',
	},
	{
		name: 'Sobre Nós',
		path: '/aboutUs',
	},
];

const NavBar: React.FC<NavBarProps> = ({ positionAppBar }) => {
	const navigate = useNavigate();
	// const [authentication, setAuthentication] = React.useState(
	// 	CookiesServices.getAuthenticationToken(),
	// );
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const [anchorCart, setAnchorCart] = React.useState({ right: false });
	const [anchorCategoryDrawer, setAnchorCategoryDrawer] = React.useState({
		left: false,
	});

	// const [text, setText] = React.useState('');

	// const carts = useAppSelector(cartsSelector);
	// // const products = useAppSelector(previewSearchedProductsSelector);
	// // const loading = useAppSelector(
	// // 	(state) => state.previewSearchedProducts.loading,
	// // );

	// const dispatch = useAppDispatch();

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	// const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
	// 	if (authentication) {
	// 		setAnchorEl(event.currentTarget);
	// 		return;
	// 	}

	// 	navigate('/login');
	// };

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	// const menuId = 'primary-search-account-menu';
	// const renderMenu = (
	// 	<Menu
	// 		anchorEl={anchorEl}
	// 		anchorOrigin={{
	// 			vertical: 'top',
	// 			horizontal: 'right',
	// 		}}
	// 		id={menuId}
	// 		keepMounted
	// 		transformOrigin={{
	// 			vertical: 'top',
	// 			horizontal: 'right',
	// 		}}
	// 		sx={{
	// 			right: 0,
	// 			top: 0,
	// 		}}
	// 		open={isMenuOpen}
	// 		onClose={handleMenuClose}
	// 	>
	// 		{!authentication && (
	// 			<MenuItem
	// 				onClick={() => {
	// 					handleMenuClose;
	// 					navigate('/login');
	// 				}}
	// 			>
	// 				Login
	// 			</MenuItem>
	// 		)}
	// 		{authentication && (
	// 			<div>
	// 				<MenuItem
	// 					onClick={() => {
	// 						handleMenuClose;
	// 						navigate('/profile');
	// 					}}
	// 				>
	// 					Minha conta
	// 				</MenuItem>
	// 				<MenuItem
	// 					onClick={() => {
	// 						handleMenuClose;
	// 						navigate('/orders');
	// 					}}
	// 				>
	// 					Meus pedidos
	// 				</MenuItem>
	// 			</div>
	// 		)}
	// 	</Menu>
	// );

	// const mobileMenuId = 'primary-search-account-menu-mobile';
	// const renderMobileMenu = (
	// 	<Menu
	// 		anchorEl={mobileMoreAnchorEl}
	// 		anchorOrigin={{
	// 			vertical: 'top',
	// 			horizontal: 'right',
	// 		}}
	// 		id={mobileMenuId}
	// 		keepMounted
	// 		transformOrigin={{
	// 			vertical: 'top',
	// 			horizontal: 'right',
	// 		}}
	// 		open={anchorCart.right ? false : isMobileMenuOpen}
	// 		onClose={handleMobileMenuClose}
	// 	>
	// 		<MenuItem onClick={() => setAnchorCart({ right: true })}>
	// 			<IconButton size="large" color="inherit">
	// 				<Badge badgeContent={carts.length} color="success">
	// 					<ShoppingCartTwoToneIcon fontSize="small" />
	// 				</Badge>
	// 			</IconButton>
	// 			<p style={{ fontSize: '14px' }}> Carrinho</p>
	// 		</MenuItem>
	// 		{!authentication && (
	// 			<MenuItem>
	// 				<Link
	// 					href="/login"
	// 					color={'#000'}
	// 					sx={{ textDecoration: 'none', fontSize: '14px' }}
	// 				>
	// 					<IconButton
	// 						size="large"
	// 						aria-controls="primary-search-account-menu"
	// 						aria-haspopup="true"
	// 						color="inherit"
	// 					>
	// 						<AccountCircle fontSize="small" />
	// 					</IconButton>
	// 					Login
	// 				</Link>
	// 			</MenuItem>
	// 		)}
	// 		{authentication && (
	// 			<Box>
	// 				<MenuItem onClick={() => navigate('/profile')}>
	// 					<IconButton
	// 						size="large"
	// 						aria-controls="primary-search-account-menu"
	// 						aria-haspopup="true"
	// 						color="inherit"
	// 					>
	// 						<AccountCircle fontSize="small" />
	// 					</IconButton>
	// 					<p style={{ fontSize: '14px' }}>Perfil</p>
	// 				</MenuItem>
	// 				<MenuItem onClick={() => navigate('/wishlist')}>
	// 					<IconButton
	// 						size="large"
	// 						aria-controls="primary-search-account-menu"
	// 						aria-haspopup="true"
	// 						color="inherit"
	// 					>
	// 						<FavoriteBorderTwoTone fontSize="small" />
	// 					</IconButton>
	// 					<p style={{ fontSize: '14px' }}>Favoritos</p>
	// 				</MenuItem>
	// 			</Box>
	// 		)}
	// 	</Menu>
	// );

	// useEffect(() => {
	// 	const authentication = CookiesServices.getAuthenticationToken();

	// 	if (!authentication) {
	// 		return;
	// 	}

	// 	setAuthentication(authentication);
	// 	dispatch(findCarts());
	// }, [authentication, dispatch]);

	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar
					position={positionAppBar}
					sx={{ bgcolor: '#fff', boxShadow: 'none' }}
				>
					<Toolbar sx={{ padding: '3px 15px' }}>
						<IconButton
							size="large"
							edge="start"
							color="primary"
							aria-label="open drawer"
							sx={{
								display: { md: 'none' },
							}}
							onClick={() =>
								setAnchorCategoryDrawer({ left: true })
							}
						>
							<MenuIcon />
						</IconButton>

						<Link
							href={'/'}
							sx={{
								height: '100px',
								width: { xs: '100%', sm: 'auto' },
								display: { xs: 'flex', sm: 'auto' },
								justifyContent: 'center',
							}}
						>
							<Box
								component={'img'}
								src={logoLivier}
								sx={{ height: '100%' }}
							/>
						</Link>

						<Box
							sx={{
								marginX: '50px',
								display: { xs: 'none', md: 'flex' },
								height: '100%',
							}}
							display={'flex'}
						>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.path}
									sx={{
										textDecoration: 'none',
										color: 'primary',
										marginLeft: '20px',
										transition: 'all 0.2s',
										colorScheme: '#dd0000d4',
										':hover': {
											color: '#3b3b3bd2',
										},
									}}
								>
									<Typography
										component={'h4'}
										variant="overline"
										fontSize={'16px'}
										noWrap
									>
										{link.name}
									</Typography>
								</Link>
							))}
						</Box>

						<Box sx={{ flexGrow: 1 }} />
						{/* <Box
							sx={{
								display: { xs: 'none', sm: 'contents' },
								color: '#333333',
							}}
						>
							<Search text={text} setText={setText} />
						</Box>  */}
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<IconButton size="large" color="primary">
								<WhatsApp />
							</IconButton>
							<IconButton
								size="large"
								edge="end"
								aria-haspopup="true"
								color="primary"
							>
								<Instagram />
							</IconButton>
						</Box>
						<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="show more"
								aria-haspopup="true"
								onClick={handleMobileMenuOpen}
								color="primary"
							>
								<MoreIcon />
							</IconButton>
						</Box>
					</Toolbar>
					{/* <Box
						sx={{
							display: { xs: 'block', sm: 'none' },
							margin: '15px',
						}}
					>
						<Search text={text} setText={setText} />
					</Box> */}
				</AppBar>
				{/* {renderMobileMenu}
				{renderMenu} */}
			</Box>

			{/* {text.length > 3 && (
				<Box
					sx={{
						position: 'absolute',
						bgcolor: '#fff',
						zIndex: 10,
						width: '100%',
						boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.3)',
						padding: { xs: '10px', sm: '10px 36px' },
					}}
				>
					{!loading && products.length > 0 && (
						<>
							<Typography
								component={'h3'}
								variant="subtitle1"
								fontWeight={'500'}
								mt={2}
							>
								Sugestões da sua busca
							</Typography>
							<Divider sx={{ marginY: 2 }} />
							<Grid
								container
								component={'ul'}
								width={'100%'}
								sx={{
									listStyle: 'none',
									padding: 0,
								}}
							>
								{products.map((product) => (
									<Grid
										item
										xs={6}
										sm={4}
										md={2}
										key={product.code}
										component={'li'}
									>
										<AutoCompleteProduct product={product} />
									</Grid>
								))}
							</Grid>

							<Divider sx={{ marginY: 2 }} />
							<Box
								sx={{ width: '100%' }}
								display={'flex'}
								justifyContent={'center'}
								marginY={1}
							>
								<Button
									variant="contained"
									href={`/search/${text}`}
									sx={{
										px: 6,
										py: 1,
										fontSize: '12px',
										fontWeight: '400',
										boxShadow: 'none',
										borderRadius: '50px',
										border: '1px solid #181D23',
										':hover': {
											boxShadow: 'none',
										},
									}}
								>
									Visualizar todos os resultados
								</Button>
							</Box>
						</>
					)}

					{loading && <LinearProgress />}
				</Box>
			)}

			<DrawerCart
				anchorCart={anchorCart}
				setAnchorCart={setAnchorCart}
				authToken={authentication}
			/>
			*/}
			<CategoryDrawer
				anchorCategoryDrawer={anchorCategoryDrawer}
				setAnchorCategoryDrawer={setAnchorCategoryDrawer}
			/>
		</React.Fragment>
	);
};

export default NavBar;
