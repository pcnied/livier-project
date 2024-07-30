import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#222831',
		},
		secondary: {
			main: green[500],
		},
	},
	typography: {
		fontFamily: ['"Poppins"', '-apple-system'].join(','),
	},
});

export default theme;
