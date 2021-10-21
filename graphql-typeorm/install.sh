#! /bin/sh

if [ ${APP_ENV} = ${APP_ENV_DEVELOPMENT}]; then
    npm install --production=false
else
    npm install --production=true
fi