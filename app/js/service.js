'use strict';

angular.module('test')

.factory("Level", ["$q", function($q){
	var factory = {};

	factory.clearData = function(){
		sessionStorage.removeItem("ranks");
	}

	factory.getRanks = function(){
		return JSON.parse(sessionStorage["ranks"]);
	}

	factory.save = function(rank){
		var ranks = sessionStorage["ranks"] ? JSON.parse(sessionStorage["ranks"]) : 
		[
		{ type: 'ביצועי', count: 0 },
		{ type: 'חקרני', count: 0 },
		{ type: 'אמנותי', count: 0 },
		{ type: 'חברתי', count: 0 },
		{ type: 'יוזמתי', count: 0 },
		{ type: 'מנהלי', count: 0 }
		];
		
		for(var key in rank){
			ranks[key].count += Number(rank[key]);
		}

		sessionStorage["ranks"] = JSON.stringify(ranks);
	}

	factory.get = function (level) {
		switch(level) {
			case 1:
			return {
				q: "יש לי..",
				a: ["יכולת טכנית מעשית", "חשיבה לוגית מדעית", "דמיון מפותח", "כושר מילולי מפותח", "יכולת לנצח בוויכוחים", "יכולת לדייק בפרטים קטנים"]
			}
			break;
			case 2:
			return {
				q: "חשוב לי..",
				a: ["לראות את התוצאות בעיניים", "לחקור ולהבין תופעות ומאורעות", "לבטא רעיונות מקוריים", "להיות בקשר עם אנשים רוב הזמן", "להצליח בעולם העסקים", "להקפיד על מילוי נהלי עבודה"]
			}
			break;
			case 3:
			return {
				q: "אני..",
				a: ["״בעל ידיים טובות״", "בעל יכולת אינטלקטואלית מפותחת", "בעל חוש אסתטי מפותח", "בעל תקשורת בין אישית מעולה", "בעל יכולת להנהיג קבוצה", "בעל כושר ארגוני מפותח"]
			}
			break;
			case 4:
			return {
				q: "אני אוהב",
				a: ["לתקן דברים מקולקלים", "לגלות עובדות חדשות", "להביע רגשות באמצעים יצירתיים", "לעזור לאנשים במצוקה", "ליזום פרויקטים חדשים", "לשמור על סביבת עבודתי מסודרת"]
			}
			break;
			case 5:
			return {
				q: "אני מוסגל..",
				a: ["לעסוק בעבודות הדורשות פעילות פיזית", "להבין נוסחאות מדעיות", "לעסוק בתחומים הדורשים רמה גבוהה של יצירתיות", "לבטא חום כלפי אחרים", "לקחת סיכונים בתחום הכלכלי", "להתמודד עם שיגרה וסדר יום קבוע"]
			}
			break;
			case 6:
			return {
				q: "אני נהנה / אני עסוי להינות מ- ..",
				a: ["שימוש במכונות או כלי עבודה", "להעמיק בנושאים מדעיים", "מוסיקה, ציור או תיאטרון", "הוראה, הדרכה או טיפול באנשים", "שיווק או מכירות", "לתעד תהליכי עבודה בארגון"]
			}
			break;

		}


		
	};

	return factory;
	
}])





