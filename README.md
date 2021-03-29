# Next level week 04 - Nodejs

## How to run

**clone this repo to your machine**

```bash
git clone https://github.com/i-ramoss/Next-Level-Week-4-NodeJS
cd Next-Level-Week-4-NodeJS
```

**setup the docker containers**

```bash
# create a new app
sudo docker-compose up

## run existent app
sudo docker-compose start

## stop existent app
sudo docker-compose stop

## delete existent app
sudo docker-compose down
```

**running tests**

```bash
sudo docker-compose run app npm run test <...args>
```