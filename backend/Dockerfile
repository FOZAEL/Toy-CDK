FROM python:3

ADD . /code
WORKDIR /code

RUN pip install -r requirements.txt
EXPOSE 5000

ENTRYPOINT ["python", "app.py"]