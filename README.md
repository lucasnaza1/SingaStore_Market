# Singastore - Projeto Reformulado

Este projeto foi reformulado para uma arquitetura Full Stack utilizando React no frontend, Express no backend e MySQL como banco de dados, todos orquestrados via Docker.

## Estrutura do Projeto

- `frontend/`: Aplicação React (antigo root do projeto).
- `backend/`: API Express com conexão MySQL.
- `docker-compose.yml`: Configuração para rodar todos os serviços.

## Como Rodar

### Pré-requisitos
- Docker e Docker Compose instalados.

### Passo a Passo

1. **Subir os containers:**
   ```bash
   docker-compose up --build
   ```

2. **Acessar as aplicações:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:3001](http://localhost:3001)
   - MySQL: `localhost:3306`

## Plano de Migração Detalhado

O plano de migração seguiu os seguintes passos:

1. **Reorganização de Pastas:** Mover o código React existente para uma pasta `frontend/`.
2. **Criação do Backend:** Inicializar um servidor Express básico em `backend/`.
3. **Containerização:** Criação de `Dockerfiles` específicos para frontend e backend.
4. **Orquestração:** Criação do `docker-compose.yml` para gerenciar o banco de dados MySQL e os dois serviços.
5. **Integração:** (Próximo passo) Atualizar os serviços no frontend para apontarem para a nova API do backend.

## Próximos Passos

- [ ] Criar scripts de migração do banco de dados (tabelas de itens, favoritos, etc).
- [ ] Atualizar as chamadas de API no frontend em `frontend/src/services/`.
- [ ] Implementar autenticação (se necessário).
