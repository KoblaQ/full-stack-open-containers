FROM node:24 AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=/api

RUN npm run build

# 	TEST STAGE
FROM build-stage AS test

COPY --from=build-stage /usr/src/app/dist /usr/src/app

RUN npm run test

# Production stage
FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

