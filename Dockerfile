FROM node:16.13.0-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm config set unsafe-perm true
RUN npm install --silent

COPY . .
# the following two lines are needed so that it won't go down with access error
# .node_modules/.caches is created by a user who doesn't have permission
RUN chown -R node /app/node_modules

USER node

CMD ["npm", "start"]