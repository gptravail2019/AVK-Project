FROM mysql:5.7

RUN chmod 777 /var/lib/mysql

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE avk
ENV MYSQL_USER=avk
ENV MYSQL_PASSWORD=avk2019

COPY ./sql-scripts/CreateTable.sql /docker-entrypoint-initdb.d/