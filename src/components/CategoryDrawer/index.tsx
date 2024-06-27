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
	Link,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();

	const handleLinkClick = (link: string) => {
		setAnchorCategoryDrawer({ left: false });
		setTimeout(() => navigate(link), 300);
	};

	return (
		<div>
			<React.Fragment key={'left'}>
				<Drawer
					anchor={'left'}
					open={anchorCategoryDrawer['left']}
					sx={{
						'.MuiDrawer-paperAnchorLeft': {
							minWidth: '100%',
						},
					}}
				>
					<Grid container spacing={2} padding={2}>
						<Grid item xs={12}>
							<IconButton
								onClick={() =>
									setAnchorCategoryDrawer({ left: false })
								}
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
								justifyContent={'flex-start'}
							>
								<List>
									{categoryList.map((category) => (
										<ListItem key={category.name}>
											<Link
												component={RouterLink}
												to={category.link}
												sx={{
													color: category.color,
													textDecoration: 'none',
													width: '100%',
												}}
												onClick={() =>
													handleLinkClick(
														category.link,
													)
												}
											>
												<Typography variant="overline">
													{category.name}
												</Typography>
											</Link>
										</ListItem>
									))}
								</List>
								<Divider
									sx={{
										marginTop: 'auto',
										width: '100%',
										backgroundColor: 'rgba(0, 0, 0, 0.12)',
									}}
								/>
								<List>
									<ListItem>
										<Link
											href="https://wa.me/5583991429201"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: 'none',
												display: 'flex',
												alignItems: 'center',
												color: '#000',
												width: '100%',
											}}
										>
											<WhatsApp
												style={{ marginRight: '8px' }}
											/>
											<Typography>WhatsApp</Typography>
										</Link>
									</ListItem>
									<ListItem>
										<Link
											href="https://www.instagram.com/liviermkt/"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: 'none',
												display: 'flex',
												alignItems: 'center',
												color: '#000',
												width: '100%',
											}}
										>
											<Instagram
												style={{ marginRight: '8px' }}
											/>
											<Typography>Instagram</Typography>
										</Link>
									</ListItem>
								</List>
							</Box>
						</Grid>
					</Grid>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default CategoryDrawer;
