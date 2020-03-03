FROM mysql:5.7

RUN chown -R mysql:mysql /var/lib/mysql

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_USER root
ENV MYSQL_PASSWORD root
ENV MYSQL_DATABASE avk

#COPY ./sql-scripts/CreateTable.sql /docker-entrypoint-initdb.d/