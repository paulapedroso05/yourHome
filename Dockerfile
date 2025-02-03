# Estagio 1 - Responsável por gerar o build da nossa aplicação
FROM node:20 as node
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
#RUN npm run build --prod
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "-poll", "1"]


# Estagio 2 - Responsável por expor nossa aplicação
#FROM nginx
#COPY --from=node /app/dist/your-home /usr/share/nginx/html

#EXPOSE 80