FROM python:alpine

COPY . /app

WORKDIR /app

RUN apk add --no-cache --virtual .build-deps gcc musl-dev \
    && pip install -r requirements.txt \
    && apk del .build-deps gcc musl-dev

RUN pip install -r requirements.txt


# RUN python manage.py collectstatic --no-input