#! /bin/sh

if [ ${APP_ENV} = ${APP_ENV_DEVELOPMENT}]; then
    npm run dev
else
    npm run start
fi