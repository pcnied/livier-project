import { CloseOutlined } from '@mui/icons-material';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	Typography,
	Link,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import logoLivier from '../../../public/assets/logo_livier_tech.png';

const categoryList = [
	{ name: 'Home', link: '/' },
	{ name: 'Cases Livier', link: '/cases' },
	{ name: 'Contrate a Livier', link: '/hire' },
	{ name: 'Sobre Nós', link: '/about-us' },
];

type AnchorCategoryDrawer = {
	left: boolean;
};

interface CategoryDrawerProps {
	anchorCategoryDrawer: AnchorCategoryDrawer;
	setAnchorCategoryDrawer: (drawerState: AnchorCategoryDrawer) => void;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({
	anchorCategoryDrawer,
	setAnchorCategoryDrawer,
}) => {
	const navigate = useNavigate();

	const handleLinkClick = (link: string) => {
		setAnchorCategoryDrawer({ left: false });
		setTimeout(() => navigate(link), 300);
	};

	return (
		<Drawer
			anchor={'left'}
			open={anchorCategoryDrawer.left}
			sx={{
				'.MuiDrawer-paperAnchorLeft': {
					minWidth: '100%',
				},
			}}
		>
			<Grid container spacing={2} padding={2}>
				<Grid item xs={12}>
					<IconButton
						onClick={() => setAnchorCategoryDrawer({ left: false })}
					>
						<CloseOutlined />
					</IconButton>
				</Grid>
				<Grid item xs={12}>
					<Box
						width={'100%'}
						display="flex"
						justifyContent="flex-start"
					>
						<Link
							component={RouterLink}
							to={'/'}
							sx={{ height: '100px' }}
							onClick={() => handleLinkClick('/')}
						>
							<Box
								component={'img'}
								src={logoLivier}
								style={{ height: '100px' }}
							/>
						</Link>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box
						display={'flex'}
						flexDirection={'column'}
						alignItems={'flex-start'}
					>
						<List>
							{categoryList.map((category) => (
								<ListItem key={category.name}>
									<Link
										component={RouterLink}
										to={category.link}
										sx={{
											textDecoration: 'none',
											width: '100%',
										}}
										onClick={() =>
											handleLinkClick(category.link)
										}
									>
										<Typography variant="overline">
											{category.name}
										</Typography>
									</Link>
								</ListItem>
							))}
						</List>
					</Box>
				</Grid>
			</Grid>
		</Drawer>
	);
};

export default CategoryDrawer;
