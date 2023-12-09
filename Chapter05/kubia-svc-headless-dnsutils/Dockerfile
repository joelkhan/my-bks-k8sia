FROM docker/whalesay:latest
RUN apt-get -y update && apt-get install -y fortunes && apt-get install -y dnsutils
ENTRYPOINT while true; do date && echo 'System is OK'; sleep 3; done
