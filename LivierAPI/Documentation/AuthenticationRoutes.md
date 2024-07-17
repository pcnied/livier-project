# Documentação das Rotas de Autenticação

## 1. Rota: POST /auth/client

- **Descrição**: Realiza o login de um cliente na API.

- **Parâmetros de Requisição**:
  
  ```json
  {
    "usernameOrEmail": "string",
    "password": "string"
  }
Resposta de Sucesso (200 OK):

json
Copiar código
{
  "token": "JWT_token"
}
Respostas de Erro:

401 Unauthorized: Se o email ou usuário não estiver registrado, se a senha estiver incorreta ou se a conta estiver suspensa devido a muitas falhas no login.

500 Internal Server Error: Em caso de erro interno no servidor.

2. Rota: POST /auth/admin
Descrição: Realiza o login de um administrador na API.

Parâmetros de Requisição:

json
Copiar código
{
  "usernameOrEmail": "string",
  "password": "string"
}
Resposta de Sucesso (200 OK):

json
Copiar código
{
  "token": "JWT_token"
}
Respostas de Erro:

401 Unauthorized: Se o email ou usuário não estiver registrado, se a senha estiver incorreta.

500 Internal Server Error: Em caso de erro interno no servidor.

Observações:
Certifique-se de enviar os dados corretos no corpo da requisição para realizar o login.
Os tokens JWT gerados devem ser usados para autenticar outras rotas que requerem acesso autorizado.
Mantenha o token seguro e envie-o no cabeçalho Authorization para acessar rotas protegidas pela autenticação.