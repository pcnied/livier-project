import { CloseOutlined, WhatsApp, Instagram } from '@mui/icons-material';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	Typography,
	Divider,
} from '@mui/material';
import React from 'react';

import logoLivier from '../../../public/assets/logoLivier.png';

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
		link: '/aboutUs',
		color: '#000',
	},
];

type AnchorCategoryDrawer = {
	left: boolean;
};

interface CategoryDrawerProps {
	anchorCategoryDrawer: AnchorCategoryDrawer;
	setAnchorCategoryDrawer: React.Dispatch<
		React.SetStateAction<{
			left: boolean;
		}>
	>;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({
	anchorCategoryDrawer,
	setAnchorCategoryDrawer,
}) => {
	return (
		<Drawer
			anchor={'left'}
			open={anchorCategoryDrawer['left']}
			onClose={() => setAnchorCategoryDrawer({ left: false })}
			sx={{
				'.MuiDrawer-paperAnchorLeft': {
					minWidth: { xs: '100%' },
				},
			}}
		>
			<Grid container direction="column" spacing={2} padding={2}>
				<Grid item container justifyContent="flex-end">
					<IconButton
						onClick={() => setAnchorCategoryDrawer({ left: false })}
					>
						<CloseOutlined />
					</IconButton>
				</Grid>
				<Grid item>
					<Box display="flex" justifyContent="center">
						<Link href={'/'} sx={{ height: '100px' }}>
							<Box
								component={'img'}
								src={logoLivier}
								sx={{ height: '100%' }}
								alt="Logo Livier"
							/>
						</Link>
					</Box>
				</Grid>
				<Grid item>
					<List>
						{categoryList.map((category) => (
							<ListItem key={category.name}>
								<Link
									href={category.link}
									sx={{
										color: category.color,
										textDecoration: 'none',
										'&:hover': {
											textDecoration: 'underline',
										},
									}}
								>
									<Typography
										fontSize={'16px'}
										fontWeight={400}
										variant="overline"
									>
										{category.name}
									</Typography>
								</Link>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						<ListItem>
							<Link
								href="https://wa.me/1234567890"
								target="_blank"
								rel="noopener"
								sx={{
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									color: '#000',
								}}
							>
								<WhatsApp sx={{ marginRight: '8px' }} />
								<Typography>WhatsApp</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link
								href="https://www.instagram.com/yourprofile"
								target="_blank"
								rel="noopener"
								sx={{
									textDecoration: 'none',
									display: 'flex',
									alignItems: 'center',
									color: '#000',
								}}
							>
								<Instagram sx={{ marginRight: '8px' }} />
								<Typography>Instagram</Typography>
							</Link>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		</Drawer>
	);
};

export default CategoryDrawer;