## Rotas de Usuários Clientes

### 1. Criar Novo Usuário Cliente

- **Descrição**: Cria um novo usuário cliente na API.
- **Rota**: `POST /client`
- **Parâmetros de Requisição**:
  ```json
  {
    "mail": "string",
    "password": "string",
    "name": "string",
    "photoString": "string (opcional)"
  }
Respostas:
    200 OK: Retorna os dados do usuário criado.
    400 Bad Request: Se houver erros de validação nos dados enviados.
    500 Internal Server Error: Em caso de erro interno no servidor.

---------------------------------------------------------------------------------------------------------

### 2. Obter Dados do Usuário Cliente
Descrição: Obtém os dados do usuário cliente autenticado com base no token de acesso.
Rota: GET /client
Autenticação: Requer autenticação de usuário cliente.
Respostas:
200 OK: Retorna os dados do usuário cliente.
401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.
500 Internal Server Error: Em caso de erro interno no servidor.

---------------------------------------------------------------------------------------------------------

### 3. Atualizar Dados do Usuário Cliente
Descrição: Atualiza os dados do usuário cliente autenticado.
Rota: PUT /client
Autenticação: Requer autenticação de usuário cliente.
Parâmetros de Requisição:
{
  "mail": "string",
  "password": "string",
  "name": "string",
  "photoString": "string (opcional)"
}
Respostas:
200 OK: Retorna os dados do usuário cliente atualizados.
400 Bad Request: Se houver erros de validação nos dados enviados.
401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.
500 Internal Server Error: Em caso de erro interno no servidor.

---------------------------------------------------------------------------------------------------------

### 4. Deletar Usuário Cliente
*Rota: DELETE /client*
    Descrição: Deleta o usuário cliente autenticado.
    Autenticação: Requer autenticação de usuário cliente.

Respostas:
**204 No Content: Não há corpo de resposta em caso de sucesso.**

**401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.**

**500 Internal Server Error: Em caso de erro interno no servidor.**

---------------------------------------------------------------------------------------------------------

### 5. Obter Todas as Ordens do Usuário Cliente
*Rota: GET /client/orders/:userId*
**Descrição**: Obtém todas as ordens (pedidos) associadas a um usuário cliente específico.

**Parâmetros de Rota**: userId: ID do usuário cliente.

**Respostas**:
***200 OK: Retorna a lista de ordens do usuário cliente.***

***401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.***

***404 Not Found: Se o usuário cliente não for encontrado.***

***500 Internal Server Error: Em caso de erro interno no servidor.***



**Observações**
Todas as rotas /client requerem autenticação de usuário cliente.
Certifique-se de enviar o token de autenticação válido no cabeçalho da requisição para acessar essas rotas.
Para operações de atualização e deleção, verifique se o usuário autenticado é o mesmo que está tentando atualizar ou deletar.

