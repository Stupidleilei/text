var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
	console.log('链接成功');
	eventEmitter.emit('data_recived');
}

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_recived', function() {
	console.log('数据接收成功');
});
eventEmitter.emit('connection');
console.log('程序执行完毕');
