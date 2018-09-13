# node v 8.11.3
FROM node:8.11.3

# global vars that control or config <key> <value>
ENV NPM_CONFIG_LOGLEVEL warn

# arg param give the env var an actual value
ARG app_env

ENV APP_ENV $app_env

# making a directory
RUN mkdir -p /my-app

# setting the working directory
WORKDIR /my-app

# copying the files from my-app folder to the working directory 
COPY ./my-app ./

RUN npm install

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi