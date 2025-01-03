FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN pnpm install

COPY . .
RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm", "run", "dev" ]