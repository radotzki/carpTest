'use strict';

angular.module('test')
.controller('TestController', ['$scope', 'Level', '$routeParams', '$location',
	function($scope, Level, $routeParams, $location) {
		
		var level = $routeParams.level;

		if(!level){
			level=1;
			Level.clearData();
			$scope.explainMsg = "עליך לדרג את ששת המשפטים בכל קבוצה מ- 6 עד 1 בהתאם להתאמתם לאישיותך, כאשר המשפט המשקף אותך ביותר יקבל ציון 6 (התאמה גבוהה). לעומת זאת, המשפט שהכי פחות משקף אותך יקבל ציון 1 (בהתאמה נמוכה). שאר המשפטים יקבלו דירוגי ביניים מ- 5 ל- 2. שים לב! בכל קבוצה אתה רשאי לתת כל אחד מהציונים (מ-6 עד 1) רק פעם אחת."
		}

		$scope.level = Level.get(Number(level));

		$scope.next = function(rank){
			$scope.errorMsg = null;
			if (checkVal()){
				Level.save($scope.rank);

				if(level == 6){
					$location.path('/finish')
				}
				else{
					var nextLevel = Number(level) + 1;
					$location.path('/test').search({level: nextLevel});
				}
			}
		}

		var checkVal = function(){
			var sum =0;
			var count = 0;
			for(var key in $scope.rank){
				sum += Number($scope.rank[key]);
				count++
			}
			if(count != 6){
				$scope.errorMsg = "אתה חייב לדרג את כל השאלות";
			}
			else if(sum != 21){
				$scope.errorMsg = "בכל קבוצה אתה רשאי לתת כל אחד מהציונים (מ- 6 עד 1) רק פעם אחת";	
			} else {
				return true;
			}
		}

	}])

.controller('FinishController', ['$scope', 'Level', '$routeParams', '$location',
	function($scope, Level, $routeParams, $location) {
		
		$scope.ranks = Level.getRanks();

	}])

