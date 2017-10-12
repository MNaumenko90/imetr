FROM node:8-alpine as build

COPY . /usr/src

WORKDIR /usr/src

RUN yarn install

RUN yarn run build

FROM busybox

WORKDIR /var/www/web

#nginx settings
COPY ./nginx.conf /etc/nginx/conf.d/web/

COPY --from=build /var/www/web /var/www/web


VOLUME ["/var/www/web", "/etc/nginx/conf.d/web"]

CMD ["/bin/true"]