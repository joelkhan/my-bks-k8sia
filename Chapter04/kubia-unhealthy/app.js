const http = require('http');
const os = require('os');

console.log("Kubia server starting...");

var requestCount = 0;

var handler = function(request, response) {
  // 当使用kubectl logs -f kubia-liveness观察重启过程时，
  // 会发现实际输出了8条日志，这是因为默认情况下#failure=3（连续3次失败后重启容器）
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  if (requestCount > 5) {  // 服务器响应超过5次后将返回500错误
    response.writeHead(500);
    response.end("I'm not well. Please restart me!");
    return;
  }
  response.writeHead(200);
  // 这个效果需要在curl的响应中查看，而不是kubectl logs中，那里是控制台
  // 快速映射pod服务的方法是使用如下命令：
  // kubectl port-forward target_pod_name your_node_port:target_pod_port
  response.end("You've hit " + os.hostname() + ", " 
	+ requestCount + " times.\n");
};

var www = http.createServer(handler);
www.listen(8080);

