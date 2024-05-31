import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const DetailProduct = () => {
	const { productId } = useParams();

	useEffect(() => {
		console.log(productId);
	});

	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />
			<Typography margin={10}>{productId}</Typography>
			<Footer />
		</React.Fragment>
	);
};

export default DetailProduct;
