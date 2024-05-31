import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import * as React from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '../../store/hooks';
import { getCarts } from '../../store/modules/carts/cartsSlice';

interface NavBarProps {
	positionAppBar:
		| 'fixed'
		| 'absolute'
		| 'relative'
		| 'static'
		| 'sticky'
		| undefined;
}

const NavBarLogo: React.FC<NavBarProps> = ({ positionAppBar }) => {
	const [cokkie, setCokkie] = React.useState(Cookies.get('auth'));

	const dispatch = useAppDispatch();

	useEffect(() => {
		setCokkie(Cookies.get('auth'));

		if (!cokkie) {
			return;
		}

		dispatch(getCarts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cokkie]);

	return (
		<React.Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position={positionAppBar} sx={{ bgcolor: '#fff' }}>
					<Toolbar>
						<Link
							href="/"
							sx={{
								width: '100%',
								textDecoration: 'none',
								color: 'primary',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{' '}
							<Typography
								component="div"
								fontWeight={500}
								noWrap
								sx={{
									display: { sm: 'block' },
									fontSize: '20px',
									marginX: '10px',
								}}
							>
								Experientes da Terra
							</Typography>
						</Link>
					</Toolbar>
				</AppBar>
			</Box>
		</React.Fragment>
	);
};

export default NavBarLogo;
