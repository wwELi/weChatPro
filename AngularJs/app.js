var app=angular.module('app',['ngTouch']);

app.controller('myctrl',["$scope",mycontroller]);
app.directive('myDire',['$swipe',mydirective]);

function mycontroller($scope){
	
	$scope.data='Leaning angularJs.....'
}

function mydirective($swipe){
	return{
		restrict: 'EA',
		link:function(scope,ele,attr){
			var startX, pointX;
            $swipe.bind(ele, {
             'start': function(coords) {
				 console.log('---->start')
             startX = coords.x;
             pointX = coords.y;
			 console.log(startX+'---'+pointX)
			 ele.css({
				 top:pointX+'px'
			 })
             },
             'move': function(coords) {
				  console.log('----> move')
             var delta = coords.x - pointX;
			 console.log('---'+coords.x)
                 // ...
				// ele.css({
				 //  'left':coords.x+'px'
				
			  // });
			    ele.css({
				 top:coords.y+'px'
			 })
               },
			   
             'end': function(coords) {
				 console.log('----->end'+coords)
              // ...
                },
             'cancel': function(coords) {
				 console.log('------>cancel'+coords)
// ...
             }
           });
		}
	}
	
} 