import { ExpandMore } from '@mui/icons-material';
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

const Cases = () => {
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
						marginTop={1}
						marginBottom={1}
					>
						FORMAS DE ENTREGA
					</Typography>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Entregamos fora do Brasil?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Não realizamos entregas fora do Brasil. No
								entanto, estamos presentes no Paraguai e
								futuramente, em outros países.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Atraso na Entrega
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								O prazo de entrega do seu pedido é escolhido no
								checkout e passa a contar a partir da data de
								pagamento. Você pode checar na página do pedido,
								dentro do seu cadastro, a data limite para a
								entrega e também o link de rastreio, caso já
								tenha sido despachado.
								<br></br>
								<br></br>
								Essas são as situações em que o seu pedido pode
								não chegar dentro do prazo estabelecido:
								<br></br>
								<br></br>- Se houver três tentativas de entregas
								sem sucesso, a transportadora irá devolver o
								pedido ao nosso estoque, cabendo a você
								solicitar o reenvio ou ressarcimento em contato
								com nosso time. O produto ficará reservado por 5
								dias úteis.
								<br></br>
								<br></br>- O endereço de entrega do seu pedido
								será o endereço informado no momento da compra.
								Caso algum dado não esteja correto, orientamos
								que entre em contato com nosso suporte antes do
								faturamento do pedido, para verificar a
								possibilidade de alterar o endereço. Se o seu
								pedido já tiver sido faturado, não poderemos
								mais realizar a alteração de local de entrega e
								nem o cancelamento imediato da compra.
								<br></br>
								<br></br>- Orientamos que deixe o endereço de
								cadastro sempre atualizado.
								<br></br>
								<br></br>- Caso o endereço informado esteja
								incompleto, fale com um de nossos atendentes via
								e-mail ou chat, para verificar a possibilidade
								de completá-lo. - Outros fatores climáticos ou
								adversos também podem influenciar prazo de
								entrega do seu pedido: acidentes graves na
								região, furto à mercadoria, chuvas fortes.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Alteração do endereço de Entrega
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Depois de escolher o produto, passar pelo
								carrinho, e efetuar a identificação, você deverá
								confirmar o endereço de entrega dos produtos.
								<br></br>
								<br></br>A nossa loja permite que você cadastre
								mais de um endereço de entrega para seus
								pedidos. Se você já possui mais de um endereço
								de entrega cadastrado, basta clicar no endereço
								desejado da lista para que ele seja selecionado.
								<br></br>
								<br></br>
								Se algum endereço está com uma informação
								errada, você pode alterá-lo. Basta clicar no
								lápis, fazer as correções necessárias e clicar
								em “editar”.
								<br></br>
								<br></br>
								Para cadastrar um novo endereço, basta preencher
								o formulário de NOVO ENDEREÇO e clicar no botão
								“CONTINUAR”.
								<br></br>
								<br></br>
								Além disso, você também pode alterar seus
								endereços em “Minha Conta”.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Como ocorrem as Entregas?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Realizamos nossas entregas por transportadoras
								contratadas ou pelo Correios, dependendo do
								local e da forma de envio escolhida. As entregas
								são realizadas de segunda a sexta-feira, das
								8:00 às 18:00. Excepcionalmente, na modalidade
								de Frete Expresso, o horário de entrega poderá
								ser estendido até às 20:00.
								<br></br>
								<br></br>O recebimento da mercadoria pode ser
								realizado por terceiros, como porteiros de
								condomínios e familiares, desde que estejam em
								posse de documento com foto e assinem o
								comprovante de recebimento da mercadoria. As
								transportadoras realizam até três tentativas de
								entrega, em dias e horários diferentes.
								<br></br>
								<br></br>
								Ocorrendo três tentativas de entrega sem
								sucesso, o produto é devolvido ao nosso Centro
								de Distribuição. Para solicitar um reenvio, é
								necessário acionar nossa Central de Atendimento
								via e-mail ou WhatsApp.
								<br></br>
								<br></br>
								Ao receber o seu pedido, verifique se a caixa
								está em perfeito estado e se a nota fiscal está
								no seu nome. Caso a nota fiscal não esteja em
								seu nome, ou a caixa esteja com avarias, recuse
								a entrega no mesmo momento e faça contato com a
								equipe de Atendimento Vans.
								<br></br>
								<br></br>
								Algumas regiões possuem restrições de entrega
								domiciliar. Se sua região é uma dessas, seu
								pedido ficará aguardando retirada em uma agência
								a definir pelo Correios. O acompanhamento da
								entrega poderá ser feito pelo rastreamento
								disponível em nosso site, acessando a opção
								"Minha Conta".
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Prazos de Entrega
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								O prazo para entrega dos produtos varia de
								acordo com o local, a forma de pagamento
								escolhida e a disponibilidade do produto
								adquirido. Para calcular o prazo de entrega do
								produto, basta informar seu CEP no campo
								"Calcular Frete" e clicar no botão ao lado. O
								prazo e valor de sua entrega serão exibidos em
								seguida. Na compra de mais de um produto, a
								entrega poderá ocorrer separadamente, conforme o
								prazo de entrega de cada um.
								<br></br>
								<br></br>
								Obs: o prazo para entrega do pedido passa a ser
								considerado a partir de sua aprovação pela
								instituição financeira e por nossa loja, após a
								validação dos dados cadastrais.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Valores de Frete
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								O valor do frete varia de acordo com o endereço
								de entrega, a quantidade de itens no seu
								carrinho e a forma de entrega escolhida. Na
								página do carrinho de compras você pode calcular
								o valor do frete do seu pedido, basta informar
								seu CEP no campo "Calcular Frete".
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">
								Agendamentos de Entrega
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Atualmente as nossas transportadoras parceiras
								não possuem a opção de agendamento de entrega,
								cujo prazo é calculado de acordo com seu CEP e
								modalidade de entrega escolhida.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default Cases;
