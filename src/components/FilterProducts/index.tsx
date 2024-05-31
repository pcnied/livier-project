import { ExpandMore } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllProducts } from '../../store/modules/products/productsSlice';

interface IFilterProps {
	code: string;
	name: string;
}

const FilterCheck = () => {
	const [colors, setColors] = useState<string[]>([]);
	const [selectedColors, setSelectedColors] = useState<string[]>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [prices, setPrices] = useState<string[]>([]);
	const [selectedPrice, setSelectedPrice] = useState<number>(0);

	const navigate = useNavigate();
	const location = useLocation();

	const products = useAppSelector(getAllProducts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		products.forEach((product) => {
			product.categories.forEach((c) => {
				const foundCategory = categories.find(
					(category) => category === c,
				);

				if (!foundCategory) {
					setCategories([...categories, c]);
				}
			});
		});
	}, [products, categories]);

	useEffect(() => {
		products.forEach((product) => {
			if (product.color) {
				const foundColor = colors.find(
					(color) => color === product.color,
				);

				if (!foundColor) {
					setColors([...colors, product.color]);
				}
			}
		});

		console.log(colors);
	}, [products, colors]);

	useEffect(() => {
		// Mudar lógica para utilizar faixas de preços
		products.forEach((product) => {
			const price = product.priceData.value.toString().replace('.', ',');

			if (price && price !== undefined && !prices.includes(price)) {
				setPrices([...prices, price]);
			}
		});
	}, [products, prices]);

	const handleCategoriesSelect = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const categoryCode = event.target.name;

		if (event.target.checked) {
			selectedCategories.forEach((category) => {
				if (category === categoryCode) {
					return;
				}
			});

			setSelectedCategories([...selectedCategories, categoryCode]);
		} else {
			setSelectedCategories(
				selectedCategories.filter(
					(category) => category !== categoryCode,
				),
			);
		}
	};

	const handleColorsSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const colorCode = event.target.name;

		if (event.target.checked) {
			selectedColors.forEach((color) => {
				if (color === colorCode) {
					return;
				}
			});

			setSelectedColors([...selectedColors, colorCode]);
		} else {
			setSelectedColors(
				selectedColors.filter((color) => color !== colorCode),
			);
		}
	};

	// useEffect(() => {
	// 	dispatch(
	// 		findAllProducts({
	// 			categories: selectedCategories,
	// 			color: selectedColors,
	// 		}),
	// 	);
	// }, [selectedCategories, selectedColors]);

	// useEffect(() => {
	// 	if (selectedCategories.length > 0) {
	// 		const categoryParam = selectedCategories.join(',');

	// 		const searchParams = new URLSearchParams(location.search);
	// 		searchParams.set('categories', categoryParam);

	// 		navigate({ search: searchParams.toString() });
	// 	}
	// }, [selectedCategories, navigate, location.search]);

	// useEffect(() => {
	// 	const queryParams = new URLSearchParams(location.search);
	// 	const categoriesParam = queryParams.get('categories');
	// 	console.log(categoriesParam);

	// 	if (categoriesParam) {
	// 		setSelectedCategories(categoriesParam.split(','));
	// 	}
	// }, [location.search]);

	return (
		<>
			<Grid container flexDirection={'column'}>
				<Grid item display={'flex'} justifyContent={'center'}>
					<Typography variant="h6">Filtros</Typography>
				</Grid>
				<Grid item xs={12}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant="subtitle1" fontWeight={'500'}>
								Cores
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								{colors.map((color) => (
									<FormControlLabel
										key={color}
										control={
											<Checkbox
												sx={{
													color: 'black',
													'&.Mui-checked': {
														color: 'black',
													},
												}}
												onChange={(e) =>
													handleColorsSelect(e)
												}
												name={color}
											/>
										}
										sx={{
											'.css-1680lyg-MuiTypography-root': {
												fontSize: '14px',
												textTransform: 'capitalize',
											},
										}}
										label={color}
									/>
								))}
							</FormGroup>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant="subtitle1" fontWeight={'500'}>
								Categorias
							</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ margin: '0px' }}>
							<FormGroup>
								{categories.map((category) => (
									<FormControlLabel
										key={category}
										control={
											<Checkbox
												sx={{
													color: 'black',
													'&.Mui-checked': {
														color: 'black',
													},
												}}
												onChange={(e) =>
													handleCategoriesSelect(e)
												}
												name={category}
											/>
										}
										sx={{
											'.css-1680lyg-MuiTypography-root': {
												fontSize: '14px',
												textTransform: 'capitalize',
											},
										}}
										label={category}
									/>
								))}
							</FormGroup>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary expandIcon={<ExpandMore />}>
							<Typography variant="subtitle1" fontWeight={'500'}>
								Preços
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormGroup>
								{prices.map((price) => (
									<FormControlLabel
										key={price}
										control={
											<Checkbox
												sx={{
													color: 'black',
													'&.Mui-checked': {
														color: 'black',
													},
												}}
											/>
										}
										sx={{
											'.css-1680lyg-MuiTypography-root': {
												fontSize: '14px',
												textTransform: 'capitalize',
											},
										}}
										label={`R$ ${price}`}
									/>
								))}
							</FormGroup>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
		</>
	);
};

export default FilterCheck;
