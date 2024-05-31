import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material';
import { useEffect } from 'react';

import AccordionAddress from '../../components/AccordionAddress';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	getAddress,
	getAllAddress,
} from '../../store/modules/address/addressSlice';
import FormAddress from '../../components/FormAddress';
import ProfileComponent from '../../components/ProfileComponent';

const Address = () => {
	const dispatch = useAppDispatch();
	const address = useAppSelector(getAllAddress);

	useEffect(() => {
		dispatch(getAddress());
	}, []);

	return (
		<>
			<NavBar positionAppBar="static" />
			<ProfileComponent>
				{address.map((address) => (
					<AccordionAddress key={address.id} address={address} />
				))}
				<Grid item xs={12} sm={12}>
					<Accordion>
						<AccordionSummary>
							<Typography>Cadastrar novo endereço</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormAddress context="create" />
						</AccordionDetails>
					</Accordion>
				</Grid>
			</ProfileComponent>

			<Footer />
		</>
	);
};

export default Address;
