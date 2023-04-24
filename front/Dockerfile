FROM node:16-alpine

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code

WORKDIR /app


COPY . .