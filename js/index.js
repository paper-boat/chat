var test = angular.module('weixin',['ngAnimate','ngRoute','ngTouch']);

test.factory('$x',[function(){
  var chatList = [
    {
      img:'../image/12.jpg',
      name:'张三',
      desc:'你好！！',
      tip:'12.30',
      liaotianjilu:[
        {info:'你好啊？？',isMe:false},
        {info:'你好',isMe:true},
        {info:'我不好',isMe:false},
        {info:'哦',isMe:true},
      ]
    },
    {
      img:'image/02.jpg',
      name:'李四',
      desc:'你好啊',
      tip:'6.11',
      liaotianjilu:[
        {info:'你好',isMe:false},
        {info:'你好',isMe:true},
        {info:'你好',isMe:false},
        {info:'不好',isMe:true},
      ]
    },
    {
      img:'image/03.jpg',
      name:'好大一个家',
      desc:'端午节',
      tip:'6.11',
      liaotianjilu:[
        {info:'端午回不回家',isMe:true},
        {info:'看情况',isMe:false},
        {info:'哦',isMe:true},
        {info:'恩',isMe:false},
      ]
    },
    {
      img:'image/4.jpg',
      name:'王五',
      desc:'我通过了你的好友验证',
      tip:'6.11',
      liaotianjilu:[
        {info:'你好',isMe:false},
        {info:'好',isMe:false},
        {info:'你哪里的',isMe:true},
        {info:'山西',isMe:false}
      ]
    }
  ]
  var x = {
    getAllChat:function(){
      return chatList;
    }
  }
  return x;
}])



test.controller('indexCtrl',['$scope',function($scope){
    $scope.title="微信";
  }])

test.controller('chatCtrl',['$scope','$x',function($scope,$x){
  $scope.chatList = $x.getAllChat();
  $scope.delete = function(id){
  $scope.chatList = this.chatList.filter(function(v,i){
        return i != id;
    })
  }
}])

test.factory('$y',[function(){
  var list = [
    {
      key:'A',
      people:[
        {img:'../image/01.jpg',name:'啊史',weixinhao:'xxxxx'},
        {img:'../image/2.jpg',name:'啊史',weixinhao:'xxxxx'},
        {img:'../image/6.jpg',name:'啊史',weixinhao:'xxxxx'},
        {img:'../image/04.jpg',name:'啊史',weixinhao:'xxxxx'},
      ]
    },
    {
      key:'B',
      people:[
        {img:'../image/05.jpg',name:'笨笨',weixinhao:'xxxxx'},
        {img:'../image/3.jpg',name:'不擦',weixinhao:'xxxxx'},
        {img:'../image/06.jpg',name:'博鳌',weixinhao:'xxxxx'},
        {img:'../image/8.jpg',name:'奔跑',weixinhao:'xxxxx'},
      ]
    }
  ];
  return y = {
    getAllChat:function(){
      return list;
    }
  }
  return y;
}])



test.controller('contactsCtrl',['$scope','$y',function($scope,$y){
  $scope.lists= $y.getAllChat();
}])
test.controller('chatContentCtrl',['$scope','$routeParams','$x',function($scope,$routeParams,$x){
  var id = $routeParams.aaa;
  var chatList = $x.getAllChat();
  $scope.duifang = chatList[id].img;
  $scope.List = chatList[id].liaotianjilu;
}])


test.controller('findCtrl',['$scope',function($scope){

}])
test.controller('meCtrl',['$scope',function($scope){

}])

test.directive('uqTitle',[function(){
    return {
      replace:true,
      restrict:'EAC',
      templateUrl:'views/header.html',
      link:function($scope,elem){
        $('.xiala').addClass('ng-hide');
        $('.icon-jiahao').on('click',function(){
          $('.xaila').toggleClass('ng-hide');
          return false;
        })
        $(document).on('click',function(){
          $('.xiala').addClass('ng-hide');
        })
      }
    }
  }])

  test.directive('uqTabBar',function(){
    return {
      replace:true,
      restrict:'EAC',
      templateUrl:'views/footer.html',
    }
  })


  test.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      controller:'chatCtrl',
      templateUrl:'views/chat.html'
    }).when('/chat',{
      controller:'chatCtrl',
      templateUrl:'views/chat.html'
    }).when('/chat-content/:aaa',{
      controller:'chatContentCtrl',
      templateUrl:'views/chat-content.html'
    }).when('/contacts',{
      controller:'contactsCtrl',
      templateUrl:'views/contacts.html'
    }).when('/find',{
      controller:'findCtrl',
      templateUrl:'views/find.html'
    }).when('/me',{
      controller:'meCtrl',
      templateUrl:'views/me.html'
    }).otherwise({
      redirectTo:'/'
    });
  }])
