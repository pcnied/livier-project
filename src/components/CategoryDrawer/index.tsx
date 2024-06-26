import { CloseOutlined, WhatsApp, Instagram } from '@mui/icons-material';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	Typography,
	Divider,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import logoLivier from '../../../public/assets/logo-livier.png';

const categoryList = [
	{
		name: 'Home',
		link: '/',
		color: '#000',
	},
	{
		name: 'Cases Livier',
		link: '/cases',
		color: '#000',
	},
	{
		name: 'Contrate a Livier',
		link: '/hire',
		color: '#000',
	},
	{
		name: 'Sobre Nós',
		link: '/about-us',
		color: '#000',
	},
];

type AnchorCategoryDrawer = {
	left: boolean;
};

interface CategoryDrawerProps {
	anchorCategoryDrawer: AnchorCategoryDrawer;
	setAnchorCategoryDrawer: React.Dispatch<
		React.SetStateAction<AnchorCategoryDrawer>
	>;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({
	anchorCategoryDrawer,
	setAnchorCategoryDrawer,
}) => {
	const handleLinkClick = () => {
		setAnchorCategoryDrawer({ left: false });
	};

	return (
		<Drawer
			anchor="left"
			open={anchorCategoryDrawer.left}
			onClose={() => setAnchorCategoryDrawer({ left: false })}
			sx={{
				'.MuiDrawer-paperAnchorLeft': {
					minWidth: '100%',
				},
			}}
		>
			<Grid container direction="column" spacing={2} padding={2}>
				<Grid item container justifyContent="flex-end">
					<IconButton onClick={handleLinkClick}>
						<CloseOutlined />
					</IconButton>
				</Grid>
				<Grid item>
					<Box display="flex" justifyContent="center">
						<RouterLink to="/" onClick={handleLinkClick}>
							<img
								src={logoLivier}
								alt="Logo Livier"
								style={{ height: '100px' }}
							/>
						</RouterLink>
					</Box>
				</Grid>
				<Grid item>
					<List>
						{categoryList.map((category) => (
							<ListItem key={category.name}>
								<RouterLink
									to={category.link}
									style={{
										color: category.color,
										textDecoration: 'none',
									}}
									onClick={handleLinkClick}
								>
									<Typography variant="overline">
										{category.name}
									</Typography>
								</RouterLink>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						<ListItem>
							<a
								href="https://wa.me/5583991429201"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									color: '#000',
								}}
							>
								<WhatsApp style={{ marginRight: '8px' }} />
								<Typography>WhatsApp</Typography>
							</a>
						</ListItem>
						<ListItem>
							<a
								href="https://www.instagram.com/liviermkt/"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									color: '#000',
								}}
							>
								<Instagram style={{ marginRight: '8px' }} />
								<Typography>Instagram</Typography>
							</a>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Drawer>
	);
};

export default CategoryDrawer;
