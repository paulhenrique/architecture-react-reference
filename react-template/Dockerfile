FROM container-registry.cpqd.com.br/dockerhub/nginx:1.19

WORKDIR /usr/share/nginx/html
COPY ./build .

CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]
