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

const TermsOfUse = () => {
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
						TERMOS DE USO
					</Typography>

					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Introdução</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Este termo de uso e condições gerais aplica-se à
								utilização dos serviços do site Experientes da
								Terra. Qualquer pessoa física ou jurídica que
								atenda aos requisitos deste termo, que pretenda
								utilizar quaisquer dos serviços oferecidos no
								site Experientes da Terra ou adquirir qualquer
								produto por ele comercializado, deverá ler e
								manifestar aceitação deste termo, que é
								submetido à apreciação de todo novo usuário no
								momento de seu cadastro. Ao clicar em "de
								acordo", o usuário manifesta haver lido,
								compreendido e aceitado todas as cláusulas deste
								termo.
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
								Qualificação e Objetos
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								A EXPERIENTES DA TERRA (a "EDT"), inscrita no
								CNPJ XXXXXXXXXXXX, com sede na Rua XXXXXXXXXX,
								como empresa do Grupo Experientes da Terra
								(detentor do direito de distribuir produtos da
								marca Experientes da Terra no Brasil), é
								mantenedor do site, comercializando produtos ou
								prestando serviços diversos por meio da rede
								mundial de computadores (internet).
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Informações</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								A EDT envidará todos os esforços para manter as
								informações e materiais contidos neste site tão
								precisos, atualizados e completos quanto
								possível. No entanto, a EDT não se
								responsabilizará pela utilização, aplicação ou
								processamento que os internautas, clientes e/ou
								usuários possam dar à mencionada informação.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Definições</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Os termos abaixo descritos, quando empregados no
								presente termos e condições, terão os seguintes
								significados:
								<br></br>
								<br></br>• "visitante(s)": todos aqueles que de
								alguma forma acessam o site, clientes ou não.
								<br></br>• "cliente(s)": todas as pessoas que
								adquiriram os produtos oferecidos pela
								Experientes da Terra pagos ou não.
								<br></br>• "usuário(s)": todas as pessoas que se
								cadastram no site e recebem uma conta de acesso
								individual e exclusiva.
								<br></br>• "parceiros homologados": fornecedores
								ou prestadores de serviços previamente avaliados
								e aprovados pela detentora da marca EDT, que
								igualmente estão sujeitos a confidencialidade
								das informações.
								<br></br>• "sacola de compras": aplicação do
								site que permite ao cliente adicionar diversos
								itens desejados e ainda continuar navegando no
								site. Ao final da navegação o usuário pode
								retornar a sua sacola de compras e prosseguir
								com a compra dos itens selecionados.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Cadastro</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Para ser um usuário, preencha o formulário de
								cadastro disponível neste site. O usuário
								precisa ter capacidade legal para contratar,
								isto é, ser maior de 18 anos ou emancipado.
								Sendo menor de idade, o responsável legal terá
								de arcar com as consequências dos atos
								praticados em nome do usuário menor. Ainda, o
								usuário que se cadastrar no site utilizando
								dados de terceiros, poderá incorrer em prática
								de crimes, sem prejuízo de eventual
								responsabilização de acordo com a legislação.
								<br></br>
								<br></br>
								Para que o usuário possa concluir sua compra, é
								necessário realizar o cadastramento no site. O
								usuário deverá preencher todos os campos
								obrigatórios com informações exatas e
								verdadeiras, responsabilizando-se, inclusive, em
								atualizar as informações de cadastro sempre que
								ocorrer alguma alteração.
								<br></br>
								<br></br>O usuário responde legalmente perante a
								veracidade e autenticidade das informações
								prestadas no site, isentando a Experientes da
								Terra de qualquer responsabilidade neste
								sentido. Caso a Experientes da Terra constate
								qualquer inexatidão nas informações prestadas
								pelo usuário ou ilegalidade em sua conduta,
								poderá, a seu exclusivo critério, suspender ou
								cancelar a correspondente conta de acesso. Tal
								medida, contudo, não cessa nem diminui a
								responsabilidade do usuário quanto à exatidão e
								veracidade dos dados que fornecer.
								<br></br>
								<br></br>O usuário é responsável por instalar os
								aplicativos eventualmente necessários para a
								visualização dos conteúdos disponíveis no site.
								Ao efetivar o cadastro, o usuário concorda com o
								envio de material publicitário pela Experientes
								da Terra ou parceiros para os endereços de
								contato e e-mail. O descadastramento do
								recebimento de materiais publicitários poderá
								ser realizado junto ao rodapé dos e-mails
								enviados, no link de descadastro ou junto as
								configurações de sua conta, no site da
								Experientes da Terra.
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
								Garantias, responsabilidades e danos
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								A EDT não garante que o conteúdo, os
								instrumentos e os materiais contidos, utilizados
								e oferecidos neste site estejam precisamente
								atualizados ou completos, e não se
								responsabiliza por danos causados por eventuais
								falhas de equipamento.
								<br></br>
								<br></br>A EDT não se responsabiliza, expressa
								ou tacitamente, pelo uso indevido das
								informações, dos instrumentos, dos materiais
								disponibilizados e/ou dos equipamentos
								utilizados por este site, para quaisquer que
								sejam os fins, feito por qualquer internauta,
								cliente e/ou usuário.
								<br></br>
								<br></br>O adequado provimento de todos os
								recursos da internet, sem exceção, é de inteira
								responsabilidade dos internautas, clientes e/ou
								usuários do site.
								<br></br>
								<br></br>A EDT não se responsabiliza pelo
								conteúdo de outros websites cujos endereços
								estejam disponíveis nas páginas deste site, bem
								como não se responsabiliza caso o endereço deste
								site esteja disponível em outros websites. A
								Experientes da Terra não garante o ressarcimento
								de quaisquer danos causados por qualquer
								website.
								<br></br>
								<br></br>A EDT recomenda que o usuário utilize a
								publicação de comentários, quando disponível, de
								maneira ponderada e restrita à avaliação pessoal
								de produtos. O conteúdo de cada comentário é de
								única e exclusiva responsabilidade civil e penal
								do usuário. A EDT reserva-se no direito de
								reprovar, restringir ou eliminar comentários em
								desacordo com o propósito de avaliação de
								produtos, ou que ofendam a honra, imagem,
								reputação e/ou dignidade de terceiros.
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
								Má-fé na utilização do Site
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								A EDT se reserva o direito de coibir abusos de
								direitos cometidos por usuários de má-fé, ou
								tentativa de fraude, nos casos em que o usuário
								realizar sucessivos pedidos de compras sem a
								respectiva confirmação do pagamento, em
								quantidade superior a 90% dos pedidos
								realizados, dentro do prazo de 60 (sessenta)
								dias. Nesta hipótese, poderá a Experientes da
								Terra, em seu exercício regular de direito,
								bloquear estes usuários, impedindo que eles
								realizem novos pedidos de compras, a fim de
								garantir a regular oferta dos produtos e evitar
								que o estoque de produtos fique bloqueado,
								prejudicando os consumidores de boa-fé.
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
								Veracidade de informações
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								A EDT reserva-se o direito de conferir a
								veracidade das informações prestadas pelos
								consumidores, tais como: nome, CPF e outros
								dados cadastrais. Poderão ser realizadas
								consultas ao site da Receita Federal e sistemas
								de análise de risco de crédito. Caso seja
								verificada qualquer divergência entre as
								informações prestadas quando do cadastro no site
								da EDT e aquelas observadas nas consultas dos
								sistemas da Receita Federal, o pedido de compras
								do usuário/cliente poderá ser cancelado,
								mediante aviso pelo e-mail cadastrado, visando
								coibir tentativa de fraude ou abuso de direitos
								cometidos por consumidores de má-fé.
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
								Confidencialidade das Informações dos Usuários
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								A EDT reserva-se o direito de alterar as
								funcionalidades deste site em função da análise
								e da consolidação das informações e sugestões
								submetidas por usuários. Demais informações
								sobre o uso das informações coletadas neste
								site, consulte a nossa Política de Privacidade.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Compras</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Após login no site, as compras serão efetuadas
								através do "carrinho de compras". A inclusão de
								um produto no "carrinho de compras" não garante
								a sua compra. No caso de esgotar o produto no
								estoque entre a inclusão no "carrinho de
								compras" e a finalização do pedido, o produto
								esgotado será automaticamente retirado do pedido
								e a compra referente especificamente ao produto
								esgotado será impossibilitada.
								<br></br>
								<br></br>
								Em caso de compras simultâneas de algum produto
								com apenas 1 (uma) unidade em estoque, o
								primeiro pedido confirmado efetuará a reserva
								daquele produto no estoque. Assim, o segundo
								pedido será impossibilitado de ser concluído
								referente ao mesmo produto.
								<br></br>
								<br></br>O usuário deverá zelar pelos dados de
								seu login, tendo em vista que são pessoais e
								intransferíveis, nunca os revelando a terceiros
								e mantendo seu equipamento de informática
								protegido com softwares atualizados, municiados
								com antivírus atualizados e firewalls conforme o
								estado da arte. Tais medidas são indispensáveis
								para a realização de uma compra segura.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant="h6">Cor do Produto</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography component={'p'}>
								Pode haver pequenas variações na tonalidade do
								produto vista no site e a do produto ao vivo,
								devido a calibragem de brilho do monitor, das
								telas de computadores e celulares ou mesmo da
								diferença entre lotes de matéria prima
								utilizados para a produção do produto exposto no
								site e do produto efetivamente adquirido. Não
								nos responsabilizamos por essa alteração.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default TermsOfUse;
