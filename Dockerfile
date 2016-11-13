FROM node:boron

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

USER app
WORKDIR $HOME/buslz
