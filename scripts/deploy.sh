#!/bin/bash
aws --endpoint-url=https://storage.yandexcloud.net \
    s3 cp --recursive dist s3://40in.spb.ru/
