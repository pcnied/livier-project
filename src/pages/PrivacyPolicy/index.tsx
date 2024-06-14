import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const PrivacyPolicy = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="static" />
			<Grid
				container
				sx={{
					height: 'min-length',
					justifyContent: 'center',
					padding: '20px',
				}}
			>
				<Grid
					item
					display={'flex'}
					flexDirection={'column'}
					alignItems={'initial'}
				>
					<Container maxWidth="md" sx={{ marginTop: '20px' }}>
						<Typography variant="h4" gutterBottom>
							Política de Privacidade
						</Typography>
						<Divider sx={{ marginBottom: '20px' }} />

						<Typography variant="h5" gutterBottom>
							Coleta e Uso de Informações
						</Typography>
						<Typography paragraph>
							Nós coletamos informações pessoais que você nos
							fornece voluntariamente, como nome, endereço de
							e-mail, etc. As informações pessoais que você
							fornece serão usadas apenas para os fins específicos
							para os quais você as forneceu. Não venderemos ou
							alugaremos suas informações pessoais para terceiros
							sem o seu consentimento.
						</Typography>

						<Typography variant="h5" gutterBottom>
							Uso de Cookies
						</Typography>
						<Typography paragraph>
							Este site utiliza cookies para melhorar a
							experiência do usuário. Ao utilizar o site, você
							concorda com a utilização de cookies.
						</Typography>

						<Typography variant="h5" gutterBottom>
							Links para Outros Sites
						</Typography>
						<Typography paragraph>
							Nosso site pode conter links para outros sites.
							Esteja ciente de que não somos responsáveis pelas
							práticas de privacidade desses outros sites.
							Encorajamos nossos usuários a estarem cientes quando
							saírem do nosso site e lerem as declarações de
							privacidade de cada site que coleta informações
							pessoalmente identificáveis.
						</Typography>

						<Typography variant="h5" gutterBottom>
							Alterações a Esta Política de Privacidade
						</Typography>
						<Typography paragraph>
							Reservamos o direito de atualizar ou alterar nossa
							Política de Privacidade a qualquer momento e você
							deve verificar esta Política de Privacidade
							periodicamente. Se fizermos alterações materiais a
							esta política, iremos notificá-lo aqui que foram
							atualizadas, para que você tenha ciência sobre quais
							informações coletamos, como as usamos e em que
							circunstâncias, se houver, usamos e/ou divulgamos.
						</Typography>

						<Typography variant="h5" gutterBottom>
							Entre em Contato Conosco
						</Typography>
						<Typography paragraph>
							Se você tiver alguma dúvida sobre esta Política de
							Privacidade, entre em contato conosco pelo e-mail:
							liviermkt@gmail.com.
						</Typography>
					</Container>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default PrivacyPolicy;
