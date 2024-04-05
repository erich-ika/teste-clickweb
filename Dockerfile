FROM php:8.3

RUN apt-get update -y && apt-get install -y openssl zip unzip git
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN docker-php-ext-install mysqli pdo pdo_mysql

WORKDIR /app

COPY . /app

RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

EXPOSE 8000