FROM php:8.2-fpm

ARG user
ARG uid

RUN apt update && apt install -y git zip unzip && apt clean
RUN docker-php-ext-install pdo_mysql
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && chown -R $user:$user /home/$user
WORKDIR /var/www
USER $user

COPY --chown=$user:$user . /var/www
RUN composer install
