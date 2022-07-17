FROM alpine:latest

ADD . /code
WORKDIR /code

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools


RUN pip3 install -r requirements.txt
EXPOSE 80 

ENTRYPOINT ["python3", "app.py"]