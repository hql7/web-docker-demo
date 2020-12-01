FROM nginx
COPY dist/ /usr/local/future/guanwang/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf