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
					<Typography variant="h5" fontWeight={'500'} marginTop={1}>
						POLÍTICA DE PRIVACIDADE
					</Typography>
					<Typography component={'p'} marginBottom={1}>
						A EDT (Experientes da Terra, inscrita no CNPJ XXXXXXXXX,
						com sede na Rua XXXXX, XXXXX, bairro XXXXX, XXXXX, CEP
						XXXXX), administradora do site, respeita a sua
						privacidade e os princípios de proteção de dados
						pessoais, conforme a Lei nº 13.709/2018 (Lei Geral de
						Proteção de Dados – LGPD). A presente Política de
						Privacidade (“Política”) visa que você, titular dos
						dados pessoais ("Titular"), tenha conhecimento de como a
						EDT trata seus dados pessoais coletados no site.
					</Typography>
					<Typography marginBottom={1}>
						A EDT poderá alterar, rever e atualizar a presente
						Política de Privacidade a qualquer momento.Recomendamos
						que consulte esta Política sempre que necessário para se
						manter informado sobre as formas como a EDT trata e
						protege seus Dados Pessoais.
					</Typography>
					<Typography marginBottom={1}>
						Essa Política foi atualizada pela última vez em
						04/07/2023.
					</Typography>
					<Typography variant="h5" marginTop={1} marginBottom={1}>
						1. Coleta e Uso de Dados
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Cliente: Se você é um cliente, potencial ou
								efetivo, da EDT, os seguintes dados sobre você
								poderão ser coletados, conforme o caso:
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Origem: Navegação no Site
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Dados de navegação - dados
								coletados por meio de cookies ou device IDs,
								incluindo IP, data e hora de acesso, localização
								geográfica, tipo de navegador, duração da
								visita, páginas visitadas. Dados sobre o
								dispositivo de acesso - modelo, fabricante,
								sistema operacional, operadora de telefonia,
								tipo de navegador, velocidade da conexão.
							</Typography>
							<Typography>
								Finalidade: Registro de acesso - temos o dever
								legal de armazenar algumas de suas informações
								(como o seu IP, data e hora de acesso) para
								eventualmente fornecê-las a autoridades. Cookies
								- ativar funcionalidades essenciais, gerar
								informações estatísticas para o aperfeiçoamento
								do Site e oferecer publicidade personalizada.
								Para mais informações, confira o item 2 desta
								Política.
							</Typography>
							<hr></hr>
							<Typography marginBottom={1}>
								Origem: Dados que você nos fornece em
								formulários nos Sites
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, e-mail, gênero.
							</Typography>
							<Typography marginBottom={1}>
								Finalidade: Cadastro no Site - quando você
								preencher o formulário de cadastro disponível em
								nosso Site, nós usaremos seus dados para
								cadastrar você no banco de dados da EDT.
								Comunicações e publicidade - usaremos tais dados
								também para envio de comunicações e publicidade.
								Tais comunicações poderão ser feitas por e-mail,
								telefone, WhatsApp, correspondência ou mala
								direta. Você pode se opor ao recebimento das
								mensagens publicitárias seguindo os
								procedimentos informados no item 5 desta
								Política e, no caso de e-mail marketing,
								clicando na opção correspondente ao final do
								e-mail enviado pela EDT a você.
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, e-mail,
								telefone, CEP (o telefone será utilizado apenas
								caso você prefira o contato por este meio e o
								CEP caso você queira verificar se alguma loja
								próxima tem o produto em estoque).
							</Typography>
							<Typography>
								Finalidade: Comunicação de disponibilidade -
								Quando um produto estiver indisponível no Site e
								você optar por ser avisado quando houver
								reposição do item em estoque, usaremos os dados
								indicados ao lado para comunicá-lo a esse
								respeito.
							</Typography>
							<hr></hr>
							<Typography marginBottom={1}>
								Origem: Pagamento da compra
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, e-mail,
								telefone, CPF e dados bancários (número do
								cartão, nome do Titular do cartão, data de
								expiração do cartão e CVV).
							</Typography>
							<Typography marginBottom={1}>
								Finalidade: Usaremos esses dados para efetuar o
								pagamento de sua compra em nossos Sites. Os
								números de cartões de crédito fornecidos serão
								registrados diretamente no banco de dados das
								administradoras de cartão, de modo que a
								Arezzo&Co não acessa essas informações. Caso
								opte por salvar o cartão para compras futuras,
								os dados fornecidos serão gravados em um gateway
								de pagamento, uma empresa parceira que apresenta
								padrões de segurança adequados.
							</Typography>
							<hr></hr>
							<Typography marginBottom={1}>
								Origem: Entrega dos produtos
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, telefone,
								endereço, CPF.
							</Typography>
							<Typography marginBottom={1}>
								Finalidade: Usaremos esses dados para enviar, no
								endereço cadastrado, o(s) produto(s)
								adquirido(s) no Site, quando você escolher essa
								opção de entrega.
							</Typography>
							<hr></hr>
							<Typography marginBottom={1}>
								Origem: Solicitação de troca ou devolução
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, e-mail,
								telefone, CPF, endereço, número do pedido.
							</Typography>
							<Typography marginBottom={1}>
								Finalidade: Se você solicitar a troca ou
								devolução de algum produto, usaremos esses dados
								para processar a sua troca ou devolução.
							</Typography>
							<hr></hr>
							<Typography marginBottom={1}>
								Origem: Atendimento (e-mail, telefone, WhatsApp,
								mídias sociais etc.)
							</Typography>
							<Typography marginBottom={1}>
								Dados Coletados: Nome completo, e-mail,
								telefone, CPF, endereço, data de nascimento,
								número do pedido.
							</Typography>
							<Typography marginBottom={1}>
								Finalidade: Se você entrar em contato conosco
								por meio do chat do Site, e-mail, telefone,
								mídias sociais da EDT ou sites como o Reclame
								Aqui, nós utilizaremos os dados indicados acima
								para atendê-lo.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Caso queira ser um de nossos Franqueados:
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Você pode manifestar seu interesse em ser um
								franqueado enviando alguns dados, como nome,
								e-mail, marca de interesse, faixas de capital,
								estado/cidade, idade, profissão, entre outros
								para que possamos avaliar seu perfil
								inicialmente e entrar em contato.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Caso queira ser um de nossos Revendedores:
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Caso você tenha uma loja multimarcas e queira
								revender nossos produtos, você pode manifestar
								seu interesse enviando dados como o nome da sua
								empresa, seu nome, e-mail e telefone para que
								possamos entrar em contato.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Typography marginTop={2} marginBottom={1}>
						A EDT não coleta, armazena ou trata, de outra forma,
						intencionalmente dados pessoais desnecessários ou
						excessivos para a prestação dos serviços. Em razão
						disso, pedimos que você se abstenha de compartilhar
						dados sensíveis conosco, como por exemplo, aqueles
						relativos à sua origem racial ou étnica, convicção
						religiosa, opinião política, filiação a sindicato ou à
						organização de caráter religioso, filosófico ou
						político, dado referente à saúde ou à vida sexual e dado
						genético.
					</Typography>

					<Typography variant="h5" marginTop={1} marginBottom={1}>
						2. Cookies
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								O que são Cookies?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Cookies são pequenos arquivos que são instalados
								e coletam informações sobre seu navegador ou
								dispositivo. Eles nos permitem saber como e
								quando o Site é visitado, bem como quantas
								pessoas o acessam. Eles podem ser úteis para,
								por exemplo, fazermos o Site encaixar na sua
								tela, entender melhor as suas preferências e lhe
								oferecer produtos por meio de campanhas
								segmentadas.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								A Experientes da Terra utiliza os cookies para
								algumas finalidades, conforme indicado abaixo:
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Cookies essenciais: são os cookies estritamente
								necessários para fornecer nossos produtos e
								serviços e para que o nosso Site funcione
								corretamente, garantindo a segurança da
								navegação, o correto dimensionamento do conteúdo
								no Site e o cumprimento de obrigações legais da
								Arezzo&Co.
							</Typography>
							<Typography marginBottom={1}>
								Cookies de publicidade: usados para
								direcionamento de conteúdos e publicidade
								conforme o seu perfil e preferências. Eles
								servem para que você veja anúncios mais
								relevantes e mais interessantes durante a sua
								navegação.
							</Typography>
							<Typography marginBottom={1}>
								Cookies estatísticos (analytics): fornecem
								informações sobre seu comportamento de navegação
								e como o Site está sendo usado. Os dados
								coletados são agregados, e nosso objetivo é
								entender melhor o nosso público, para que
								possamos oferecer conteúdo, serviços e produtos
								mais interessantes para quem acessa nosso Site.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Typography variant="h5" marginTop={2} marginBottom={1}>
						3. Compartilhamento de dados
					</Typography>
					<Typography marginBottom={1}>
						Para oferecermos nossos produtos e serviços da melhor
						forma possível, contamos com o apoio de outras empresas
						em nossas operações. Assim, em alguns casos, precisamos
						compartilhar dados com terceiros, como descrevemos
						abaixo:
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Experientes da Terra
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Suas informações podem ser compartilhadas entre
								as empresas pertencentes à Experientes da Terra,
								as quais estão de acordo com esta Política de
								Privacidade. Fazemos isso para, primordialmente,
								analisar dados e entender o seu perfil, de forma
								a lhe proporcionar experiências personalizadas e
								aderentes ao seu perfil, entre outros.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Fornecedores e parceiros
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Contamos com a ajuda de fornecedores e parceiros
								que podem tratar dados pessoais. As informações
								são compartilhadas apenas para as finalidades
								dos serviços prestados. Sempre buscamos avaliar
								nossos fornecedores e parceiros e firmar com
								eles obrigações contratuais de proteção de dados
								pessoais, com o objetivo de minimizar riscos
								para os Titulares. Entre esses fornecedores e
								parceiros, estão, por exemplo, agências de
								publicidade, empresas de logística, gateways de
								pagamento, bem como empresas que nos auxiliam
								com o cadastro e criação.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Autoridades Públicas
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Seus dados podem ser compartilhados com
								autoridades públicas para que cumpramos com a
								legislação vigente. Caso um juiz ou uma
								autoridade com competência legal exija que
								compartilhemos certos dados pessoais para, por
								exemplo, uma investigação, temos o dever de
								compartilhar. Somos contra qualquer abuso de
								autoridade e, caso entendamos que determinada
								ordem é abusiva, vamos sempre defender a
								privacidade dos Titulares.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Proteção de direitos
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Reservamo-nos o direito de compartilhar
								quaisquer dados pessoais que acreditarmos serem
								necessários para cumprir uma obrigação legal ou
								proteger os nossos direitos, dos nossos
								colaboradores e de terceiros.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Outros países
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								A Experientes da Terra poderá transferir seus
								dados para outros países como, por exemplo, para
								fins de armazenamento, no caso de servidores
								localizados no exterior. Firmamos com os
								terceiros que recebem esses dados obrigações
								contratuais robustas para proteger os dados
								pessoais e garantir a privacidade dos Titulares.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Typography variant="h5" marginTop={2} marginBottom={1}>
						4. Armazenamento de dados
					</Typography>
					<Typography marginBottom={1}>
						A Experientes da Terra observa regras internas próprias
						de retenção e descarte de dados pessoais e tem um
						documento que define as diretrizes para determinar o
						período de retenção adequado para cada tipo de dado
						pessoal coletado, considerando a sua natureza,
						necessidade de coleta e finalidade para a qual ele será
						tratado. Dados pessoais são armazenados somente pelo
						tempo que for necessário para cumprir com as finalidades
						para as quais foram coletados, salvo se houver qualquer
						outra razão para sua manutenção como, por exemplo,
						cumprimento de quaisquer obrigações legais,
						regulatórias, contratuais, entre outras. O Titular tem o
						direito de solicitar a exclusão dos seus dados (conforme
						disposto no item 6 desta Política), solicitação que será
						atendida quando não houver motivo para mantê-los.
					</Typography>
					<Typography variant="h5" marginTop={1} marginBottom={1}>
						5. Segurança de dados
					</Typography>
					<Typography marginBottom={1}>
						A Experientes da Terra respeita o sigilo e a segurança
						de suas informações. Por isso, conta com o certificado
						de segurança Secure Sockets Layer (“SSL”) Pro SGC
						emitido pela GMO GlobalSign, uma das maiores autoridades
						certificadoras do mundo. Por meio dele, todas as
						informações fornecidas pelo Titular em nosso Site são
						criptografadas e mantidas em sigilo em servidores
						seguros. Além disso, a Experientes da Terra adota
						práticas de segurança e governança adequadas para
						garantir a sua privacidade e a proteção dos seus dados.
					</Typography>
					<Typography marginBottom={1}>
						Ainda assim, você deve estar ciente de que as medidas de
						segurança relativas à internet não são infalíveis. Você
						pode nos ajudar a manter um ambiente seguro para todos
						adotando boas práticas de segurança em relação à sua
						conta e aos seus dados, como abaixo descrito.
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Cuidados do Titular
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Recomendamos que você sempre se mantenha atento
								para proteger as suas informações, de modo que
								não sejam utilizadas senhas fáceis e óbvias e
								que estas não sejam compartilhadas com
								terceiros. Ao utilizar o Site em dispositivos
								públicos, é sempre importante certificar-se de
								que a sua sessão foi encerrada. Além disso, é
								muito importante sempre utilizar softwares
								originais e mantê-los atualizados,
								principalmente, programas de antivírus – para
								evitar riscos de invasões nos dispositivos.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Quedas do sistema do Titular
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								A Experientes da Terra não se responsabiliza por
								compras que não forem efetuadas nos canais
								oficiais da Companhia ou por problemas
								ocasionados por queda em sua rede de navegação.
								A premissa para realizar uma compra pelo Site é
								ter uma conexão bem-sucedida com a internet.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Fraudes em boleto
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Existe a possibilidade de um Titular ser
								impactado por um vírus instalado em seu
								dispositivo, vírus este que pode alterar os
								dados do boleto. Portanto, a Experientes da
								Terra recomenda que o Titular sempre verifique
								os dados do boleto – especialmente, os valores e
								o código do banco. Caso fique com dúvidas, entre
								em contato conosco por meio de nossa Central de
								Atendimento, disponível no Site. A Experientes
								da Terra não se responsabiliza por situações de
								fraudes causadas por terceiros.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Typography variant="h5" marginTop={2} marginBottom={1}>
						6. Direito dos titulares
					</Typography>
					<Typography marginBottom={1}>
						Conforme dispõe a legislação você tem alguns direitos
						relativos aos dados que tratamos. Abaixo, trazemos uma
						lista contendo todos esses direitos, além de informações
						a respeito de como você pode exercê-los. Ao recebermos a
						sua solicitação, é possível que precisemos verificar sua
						identidade antes de atendermos a sua requisição. Esta
						verificação pode incluir a solicitação de dados
						adicionais para garantir sua correta identificação.
						Ainda, quando indicar algum terceiro para fazer
						solicitações em seu nome, tal terceiro deverá apresentar
						um documento indicando que pode agir em seu nome, como
						uma procuração assinada por você.
					</Typography>
					<Typography marginBottom={1}>
						Para exercer quaisquer desses direitos, você pode entrar
						em contato conosco pelo e-mail informado no item 7 desta
						Política.
					</Typography>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Confirmação e Acesso
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Permite que você possa verificar se tratamos
								dados pessoais seus e, em caso positivo,
								requisitar uma cópia dos dados pessoais que nós
								temos sobre você.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Correção
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Permite que você solicite a correção dos seus
								dados pessoais incompletos, inexatos ou
								desatualizados.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Anonimização, bloqueio ou eliminação
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Permite que você nos peça para (a) anonimizar
								seus dados, de forma que eles não possam mais
								ser relacionados a você e, portanto, deixem de
								ser dados pessoais; (b) bloquear seus dados,
								suspendendo temporariamente a possibilidade de
								os tratarmos; e (c) eliminar seus dados, caso em
								que apagaremos todos os seus dados sem
								possibilidade de reversão, salvo nos casos
								previstos em lei.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Portabilidade
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Você tem o direito de solicitar, mediante
								requisição expressa, que seja fornecido a você
								ou a terceiro que você escolher, os seus dados
								pessoais em formato estruturado e interoperável,
								para transferência a outro fornecedor, desde que
								não viole a propriedade intelectual ou segredos
								de negócio da Experientes da Terra.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Informação sobre a possibilidade de não
								consentir
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Permite que você tenha informações claras e
								completas sobre a possibilidade e as
								consequências de não fornecer o consentimento. O
								seu consentimento, quando necessário, deve ser
								livre e informado. Portanto, sempre que pedirmos
								seu consentimento, você será livre para negá-lo
								– ainda que, nesses casos, seja possível que
								tenhamos que limitar nossas entregas para você.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Revogação do consentimento
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								Você tem o direito de retirar o seu
								consentimento em relação às atividades de
								tratamento que se baseiam o consentimento. No
								entanto, isso não afetará a legalidade de
								qualquer tratamento realizado anteriormente. Se
								você retirar o seu consentimento, talvez não
								possamos fornecer determinadas comunicações ou
								serviços para você, mas iremos avisá-lo quando
								isso ocorrer.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary>
							<Typography variant="h6" component={'h3'}>
								Oposição
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography marginBottom={1}>
								A lei autoriza o tratamento de dados pessoais
								mesmo sem o seu consentimento. Caso você não
								concorde com esse tratamento, você poderá se
								opor a ele em alguns casos, solicitando a
								interrupção.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Typography variant="h5" marginTop={2} marginBottom={1}>
						7. Informações gerais
					</Typography>
					<Typography marginBottom={1}>
						Se você tiver qualquer dúvida, comentário ou solicitação
						em relação aos seus dados pessoais, por favor, entre em
						contato com o nosso Encarregado pelo tratamento de dados
						pessoais, abaixo identificado:
					</Typography>
					<Typography>Encarregado: XXXXXXX</Typography>
				</Grid>
			</Grid>
			<Footer />
		</React.Fragment>
	);
};

export default PrivacyPolicy;
