FROM docker/whalesay:latest
RUN apt-get -y update && apt-get install -y fortunes
ADD fortuneloop.sh /bin/fortuneloop.sh

# 使用exec形式的ENTRYPOINT，效率更高
ENTRYPOINT ["/bin/fortuneloop.sh"]
# 仅使用CMD提供默认参数，随后可以通过提供命令行参数进行覆盖
CMD ["10"]

