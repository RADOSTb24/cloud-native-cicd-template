FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev

COPY server.js ./

ENV PORT=8080
ENV METRICS_PORT=8081

EXPOSE 8080
EXPOSE 8081

CMD ["npm", "start"]