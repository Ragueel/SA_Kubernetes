FROM node:12.18.1
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
EXPOSE 5010
CMD [ "node", "index.js" ]