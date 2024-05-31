import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const PaymentMethods = () => {
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
					<Typography
						variant="h5"
						fontWeight={'500'}
						component={'h3'}
						marginTop={1}
						marginBottom={1}
					>
						FORMAS DE PAGAMENTO
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6">
								Cartão de crédito
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Aceitamos os seguintes cartões no site: - Visa;
								- Mastercard; - Diners; - American Express -
								Elo.
							</Typography>
							<Typography marginBottom={1}>
								Para usar seu cartão de crédito nas compras,
								basta escolher essa opção na hora de finalizar o
								pedido. As compras em cartão poderão ser
								parceladas em até 10 vezes, dependendo da
								administradora de seu cartão de crédito e da
								parcela mínima de R$ 49,99. O processo de
								aprovação do cartão leva em consideração o valor
								total da compra e não somente o valor da
								parcela. Esse valor deve estar dentro do limite
								disponível do seu cartão de crédito.
							</Typography>
							<Typography>
								Os números de cartões de crédito fornecidos são
								registrados diretamente no banco de dados das
								administradoras de cartão, não permitindo ao
								lojista o acesso dessas informações. Ao informar
								os dados para a administradora, esta verifica a
								transação on-line e retorna apenas se a compra
								está liberada ou não. O prazo para confirmação
								de pagamento é de até 3 dias úteis. Para sua
								comodidade e segurança, após qualquer compra, as
								informações de seu cadastro estão sujeitas à
								confirmação. Caso haja qualquer divergência nos
								dados que possa acarretar atraso na entrega do
								pedido, você será informada por meio do e-mail
								ou telefone cadastrado.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6">
								Boleto bancário
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Você pode pagar o seu pedido por boleto
								bancário. Para isso, selecione esta opção na
								tela de pagamento e ao finalizar seu pedido,
								você terá acesso ao seu boleto. O boleto vence
								no dia seguinte a sua compra, perdendo sua
								validade a partir desta data. Caso você deseje
								finalizar a compra após o vencimento do boleto,
								é preciso fazer um novo pedido. A confirmação de
								pagamento é feita automaticamente pelos bancos
								em até 3 dias úteis após o pagamento. Não é
								preciso nos enviar qualquer notificação.
								IMPORTANTE: caso opte pelo pagamento por BOLETO
								BANCÁRIO, O PRAZO DE ENTREGA da compra passa a
								ser considerado após a confirmação de pagamento
								feita pelo banco.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6">PIX</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Uma das opções de pagamento para compras
								realizadas no site da VANS é através do PIX. Ao
								escolher essa opção no momento do pagamento, a
								tela apresentará o código QR Code para você
								escanear e realizar o pagamento através do
								aplicativo do seu banco. Ou então, caso não
								queira usar o QR Code, você pode copiar o código
								do PIX e colar ele para realizar o pagamento no
								aplicativo do banco de sua preferência. O prazo
								de confirmação de pagamento é de cerca de uma
								hora. Esse processo deve ocorrer em até 24h após
								fazer o pedido no site. Se o pagamento não for
								efetuado nesse período, a compra será cancelada
								automaticamente.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6">
								Pagamento com cartão internacional
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Nosso site não aceita pagamento com cartão de
								crédito emitido fora do Brasil.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default PaymentMethods;
