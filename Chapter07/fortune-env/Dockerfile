FROM docker/whalesay:latest
RUN apt-get -y update && apt-get install -y fortunes
ADD fortuneloop.sh /bin/fortuneloop.sh

ENTRYPOINT ["/bin/fortuneloop.sh"]
