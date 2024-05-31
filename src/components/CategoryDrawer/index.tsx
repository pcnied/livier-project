import { CloseOutlined } from '@mui/icons-material';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	Typography,
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
	{
		name: 'Promoção',
		link: '/promocao',
		color: '#b41919',
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
		<div>
			<React.Fragment key={'left'}>
				<Drawer
					anchor={'left'}
					open={anchorCategoryDrawer['left']}
					sx={{
						'.MuiDrawer-paperAnchorLeft': {
							minWidth: { xs: '100%' },
						},
					}}
				>
					<Grid container padding={2}>
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
								display={'flex'}
								justifyContent={'center'}
							>
								<Link href={'/'} sx={{ height: '100px' }}>
									<Box
										component={'img'}
										src={logoLivier}
										sx={{ height: '100%' }}
									/>
								</Link>
							</Box>

							<Box marginTop={4}>
								<Typography
									variant="h6"
									fontWeight={500}
									textAlign={'center'}
								>
									CATEGORIAS
								</Typography>
								<Box
									display={'flex'}
									flexDirection={'column'}
									alignItems={'center'}
									justifyContent={'center'}
								>
									<List>
										{categoryList.map((category) => (
											<ListItem
												key={category.name}
												sx={{
													justifyContent: 'center',
												}}
											>
												<Link
													href={category.link}
													sx={{
														color: category.color,
													}}
												>
													<Typography
														fontSize={'16px'}
														fontWeight={400}
													>
														{category.name}
													</Typography>
												</Link>
											</ListItem>
										))}
									</List>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default CategoryDrawer;
