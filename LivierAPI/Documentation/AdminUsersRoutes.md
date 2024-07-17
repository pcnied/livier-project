
# Rotas de Usuários Administrativos

## 1. Obter Dados do Usuário Baseado no Token

**Rota:** `GET /adm`

**Descrição:** Retorna os dados do usuário administrativo autenticado com base no token de acesso.

**Autenticação:** O endpoint requer autenticação de administrador.

**Resposta de Sucesso (200 OK):**

```json
{
  "id": "uuid",
  "name": "string",
  "username": "string",
  "mail": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
Resposta de Erro:

401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.
500 Internal Server Error: Em caso de erro interno no servidor.
2. Atualizar Dados do Usuário Administrativo
Rota: PUT /adm

Descrição: Atualiza os dados do usuário administrativo autenticado.

Autenticação: O endpoint requer autenticação de administrador.

Parâmetros de Requisição:

json
{
  "mail": "string",
  "password": "string",
  "name": "string",
  "photoString": "string (opcional)"
}
Resposta de Sucesso (200 OK):

json
{
  "id": "uuid",
  "name": "string",
  "username": "string",
  "mail": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
Resposta de Erro:

400 Bad Request: Se houver erro de validação nos dados enviados.
401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.
404 Not Found: Se o usuário administrativo não for encontrado.
500 Internal Server Error: Em caso de erro interno no servidor.
3. Deletar Usuário Administrativo
Rota: DELETE /adm

Descrição: Deleta o usuário administrativo autenticado.

Autenticação: O endpoint requer autenticação de administrador.

Resposta de Sucesso (204 No Content):

Não há corpo de resposta em caso de sucesso.
Resposta de Erro:

401 Unauthorized: Se o token de autenticação estiver ausente ou inválido.
404 Not Found: Se o usuário administrativo não for encontrado.
500 Internal Server Error: Em caso de erro interno no servidor.
Observações Importantes:
Todas as rotas /adm requerem autenticação de administrador.
Certifique-se de enviar o token de autenticação válido no cabeçalho da requisição para acessar essas rotas.
Para operações de atualização e deleção, verifique se o usuário autenticado é o mesmo que está tentando atualizar ou deletar.


