#  https://medium.com/@cybourgeoisie/docker-env-methods-for-passing-variables-through-docker-compose-801e6fdb4a75
 
if [ -f .env ]
then
    export $(cat .env | xargs)
fi

docker-compose build --build-arg APP_ENV=${APP_ENV}