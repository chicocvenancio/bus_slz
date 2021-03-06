FROM node:boron

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app https_proxy=http://192.168.10.26:3128

COPY package.json npm-shrinkwrap.json $HOME/buslz/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/buslz
RUN npm install

CMD ["node", "server.js"]
