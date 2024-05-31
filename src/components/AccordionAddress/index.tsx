import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

import Address from '../../types/address';
import FormAddress from '../FormAddress';

interface AccordionAddressProps {
	address?: Address;
}

const AccordionAddress: React.FC<AccordionAddressProps> = ({ address }) => {
	return (
		<Grid
			key={address?.id}
			item
			sx={{
				paddingBottom: '20px',
			}}
		>
			<Accordion>
				<AccordionSummary sx={{ paddingY: 4 }}>
					{address?.name}
				</AccordionSummary>
				<AccordionDetails>
					<FormAddress address={address} context={'update'} />
				</AccordionDetails>
			</Accordion>
		</Grid>
	);
};

export default AccordionAddress;
