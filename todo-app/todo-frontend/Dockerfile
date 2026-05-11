FROM node:24 AS build-stage 

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

# Production stage
FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# 	TEST STAGE
FROM build-stage AS test

COPY --from=build-stage /usr/src/app/dist /usr/src/app

RUN npm run test