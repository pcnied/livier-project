## Rotas de Pedidos

### 1. Criar Novo Pedido

- **Descrição**: Cria um novo pedido na API.
- **Rota**: `POST /order`
- **Autenticação**: Requer autenticação de usuário cliente.
- **Parâmetros de Requisição**:
  ```json
  {
    "name": "string",
    "quantity": "integer",
    "productId": "string",
    "clientUserId": "string"
  }
- **Respostas**:
  - **201 Created**: Retorna os detalhes do pedido criado.
  - **400 Bad Request**: Se houver erros de validação nos dados enviados.
  - **404 Not Found**: Se o usuário cliente não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------

### 2. Obter Todos os Pedidos

- **Descrição**: Obtém todos os pedidos cadastrados na API.
- **Rota**: `GET /order`
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna a lista de todos os pedidos.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------

### 3. Aceitar Pedido

- **Descrição**: Aceita um pedido existente na API.
- **Rota**: `PUT /order/:id`
- **Parâmetros de Rota**:
  - `id`: ID do pedido a ser aceito.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna uma mensagem indicando que o pedido foi aceito com sucesso.
  - **404 Not Found**: Se o pedido não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------

### 4. Finalizar Pedido

- **Descrição**: Finaliza (deleta) um pedido aceito na API.
- **Rota**: `DELETE /order/finalize/:id`
- **Parâmetros de Rota**:
  - `id`: ID do pedido a ser finalizado.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **204 No Content**: Não há corpo de resposta em caso de sucesso.
  - **404 Not Found**: Se o pedido não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.
