# Estagio 1 - Responsável por gerar o build da nossa aplicação
FROM node:20 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
COPY --from=node /app/dist/your-home /usr/share/nginx/html

EXPOSE 80