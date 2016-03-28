/**
 * Created by Rain on 2016/1/20.
 */
var pubsub = {};

(function (q) {

  var topics = {},//回调函数存放的数组
      subUid = -1;

  //发布的方法
  q.publish = function (topic, args) {
    if (!topics[topic]) {
      return false;
    }

    setTimeout(function () {
      var subscribers = topics[topic],
          len = subscribers ? subscribers.length : 0;

      while (len--) {
        subscribers[len].func(topic, args);
      }

    }, 0);

    return true;
  };

  //订阅方法
  q.subscribe = function (topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];

      var token = (++subUid).toString();
      topics[topic].push({
        token: token,
        func: func
      })
    }
  };

  //退订方法
  q.unsubscribe = function (token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token = token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
  }

})(pubsub);

pubsub.subscribe('example1', function (topics, data) {
  console.log(topics + ":" + data);
});

pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);