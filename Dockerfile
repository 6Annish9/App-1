FROM nexus.is.comhem.com:18443/node:16.14.0-alpine as installer

WORKDIR /build
COPY . ./

RUN npm ci
RUN npm ci --prefix duco-client

RUN npm run build
RUN npm prune --production
RUN npm prune --production --prefix duco-client

FROM nexus.is.comhem.com:18443/node:16.14.0-alpine as runner

WORKDIR /app

COPY --from=installer /build ./

CMD npm run start
