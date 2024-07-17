## Rotas de Produtos

### 1. Criar Novo Produto

- **Descrição**: Cria um novo produto na API.
- **Rota**: `POST /product`
- **Autenticação**: Requer autenticação de administrador.
- **Parâmetros de Requisição**:
  ```json
  {
    "name": "string",
    "category": "string",
    "type": "string",
    "price": "decimal",
    "stock": "integer",
    "description": "string"
  }
***Respostas:***
- **201 Created**: Retorna os detalhes do produto criado.
- **400 Bad Request**: Se houver erros de validação nos dados enviados.
- **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 2. Obter Todos os Produtos

- **Descrição**: Obtém todos os produtos cadastrados na API.
- **Rota**: `GET /product`
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna a lista de todos os produtos.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 3. Obter Produto por ID

- **Descrição**: Obtém um produto específico pelo seu ID.
- **Rota**: `GET /product/:id`
- **Parâmetros de Rota**:
  - `id`: ID do produto.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna os detalhes do produto encontrado.
  - **404 Not Found**: Se o produto não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 4. Atualizar Produto

- **Descrição**: Atualiza um produto existente na API.
- **Rota**: `PUT /product/:id`
- **Parâmetros de Rota**:
  - `id`: ID do produto a ser atualizado.
- **Autenticação**: Requer autenticação de administrador.
- **Parâmetros de Requisição**:
  ```json
  {
    "name": "string",
    "category": "string",
    "type": "string",
    "price": "decimal",
    "stock": "integer",
    "description": "string"
  }
- **Respostas**:
  - **200 OK**: Retorna os detalhes do produto atualizado.
  - **400 Bad Request**: Se houver erros de validação nos dados enviados.
  - **404 Not Found**: Se o produto não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 5. Deletar Produto

- **Descrição**: Deleta um produto existente na API.
- **Rota**: `DELETE /product/:id`
- **Parâmetros de Rota**:
  - `id`: ID do produto a ser deletado.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **204 No Content**: Não há corpo de resposta em caso de sucesso.
  - **404 Not Found**: Se o produto não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 6. Alternar Disponibilidade do Produto para Venda

- **Descrição**: Alterna a disponibilidade de venda de um produto na API.
- **Rota**: `PUT /product/forsale/:id`
- **Parâmetros de Rota**:
  - `id`: ID do produto a ter a disponibilidade alterada.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna os detalhes do produto com a disponibilidade alterada.
  - **404 Not Found**: Se o produto não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.


-------------------------------------------------------------------------------------

### 7. Obter Produtos à Venda

- **Descrição**: Obtém todos os produtos disponíveis para venda na API, opcionalmente filtrados por categoria.
- **Rota**: `GET /product/forsale`
- **Parâmetros de Requisição Opcionais**:
  ```json
  {
    "category": "string"
  }
***Respostas:***
    -**200 OK: Retorna a lista de produtos disponíveis para venda.**
    -**400 Bad Request: Se a categoria fornecida não for válida.**
    -**500 Internal Server Error: Em caso de erro interno no servidor.**