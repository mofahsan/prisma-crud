FROM node:16

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm install
RUN npx prisma generate
CMD [ "npm","start"]