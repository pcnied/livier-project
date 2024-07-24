## Rotas de Cupons

### 1. Criar Novo Cupom

- **Descrição**: Cria um novo cupom na API.
- **Rota**: `POST /coupon`
- **Autenticação**: Requer autenticação de administrador.
- **Parâmetros de Requisição**:
  ```json
  {
    "code": "string",
    "discountPercent": "decimal (opcional)",
    "discountFixed": "decimal (opcional)",
    "reusable": "boolean (opcional)",
    "useLimit": "integer (opcional)",
    "usedCount": "integer (opcional)"
  }
Respostas:
201 Created: Retorna os detalhes do cupom criado.
400 Bad Request: Se houver erros de validação nos dados enviados.
500 Internal Server Error: Em caso de erro interno no servidor.

-----------------------------------------------------------------------------------

### 2. Obter Todos os Cupons

- **Descrição**: Obtém todos os cupons cadastrados na API.
- **Rota**: `GET /coupon`
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna a lista de todos os cupons.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------
### 3. Obter Cupom por ID

- **Descrição**: Obtém um cupom específico pelo seu ID.
- **Rota**: `GET /coupon/:id`
- **Parâmetros de Rota**:
  - id: ID do cupom.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna os detalhes do cupom encontrado.
  - **404 Not Found**: Se o cupom não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------

### 4. Atualizar Cupom

- **Descrição**: Atualiza um cupom existente na API.
- **Rota**: `PUT /coupon/:id`
- **Parâmetros de Rota**:
  - id: ID do cupom a ser atualizado.
- **Autenticação**: Requer autenticação de administrador.
- **Parâmetros de Requisição**:
  ```json
  {
    "code": "string",
    "discountPercent": "decimal (opcional)",
    "discountFixed": "decimal (opcional)",
    "reusable": "boolean (opcional)",
    "useLimit": "integer (opcional)",
    "usedCount": "integer (opcional)"
  }
- **Respostas**:
  - **200 OK**: Retorna os detalhes do cupom atualizado.
  - **400 Bad Request**: Se houver erros de validação nos dados enviados.
  - **404 Not Found**: Se o cupom não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------


### 5. Deletar Cupom

- **Descrição**: Deleta um cupom existente na API.
- **Rota**: `DELETE /coupon/:id`
- **Parâmetros de Rota**:
  - `id`: ID do cupom a ser deletado.
- **Autenticação**: Requer autenticação de administrador.
- **Respostas**:
  - **200 OK**: Retorna uma mensagem indicando que o cupom foi excluído com sucesso.
  - **404 Not Found**: Se o cupom não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.

-------------------------------------------------------------------------------------

### 6. Verificar Cupom por Código

- **Descrição**: Verifica se um cupom específico existe e pode ser aplicado.
- **Rota**: `GET /coupon/verify-coupon/:code`
- **Parâmetros de Rota**:
  - `code`: Código do cupom.
- **Autenticação**: Requer autenticação de usuário cliente.
- **Respostas**:
  - **200 OK**: Retorna os detalhes do cupom encontrado.
  - **404 Not Found**: Se o cupom não for encontrado.
  - **500 Internal Server Error**: Em caso de erro interno no servidor.
