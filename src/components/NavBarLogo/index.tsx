import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';

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
	return (
		<React.Fragment>
			<Box>
				<AppBar position={positionAppBar} sx={{ bgcolor: '#e7f5ff' }}>
					<Toolbar>
						<Link
							href={'/'}
							sx={{
								height: '80px',
								width: '100%',
								display: { xs: 'flex', sm: 'auto' },
								justifyContent: 'center',
							}}
						>
							<Box component={'img'} sx={{ height: '100%' }} />
						</Link>
					</Toolbar>
				</AppBar>
			</Box>
		</React.Fragment>
	);
};

export default NavBarLogo;
