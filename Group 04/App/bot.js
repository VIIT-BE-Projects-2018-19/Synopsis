keyword_extractor = require("keyword-extractor");
newsapi = require('./newsapi_connect');
console.log('The twitter bot is starting');

var Twit = require('twit');	//Import the twit package
var config = require('./config')	//Import the config file for Oauth

var T = new Twit(config);	//Create object of Twit

var params_search = { 
	q: '#news', 	//Search query keyword
	count: 100 	//Count for number of tweeets to be fetched
}
var params_trends = { 
	id: 2295412,	//WOEID for Pune 
	count: 10 		//Count for number of tweeets to be fetched
}

console.log('Searching for : ',params_search.q,'\n');
T.get('search/tweets', params_search, displaySearchTweets);
//T.get('trends/place', params_trends, displayTrendTweets);


function displaySearchTweets(err,data,response)
{
	//console.log(data);
	var tweets = data.statuses;
	for(var i=0;i<tweets.length;i++)
	{
		console.log('\n<<Tweet>>\n')
		console.log(tweets[i].user.name+" : "+tweets[i].text+"\n");
		extraction_res = keyword_extractor.extract(tweets[i].text,
		{
			language:'english',
			remove_digits:true,
			remove_duplicates:false
		});
		
		extraction_res_updated = [];
		
		for(i=0;i<extraction_res.length;i++)
		{
			cur_keyword = extraction_res[i];
			if(!cur_keyword.includes("RT") && !cur_keyword.includes("#") && !cur_keyword.includes("@") && !cur_keyword.includes("https"))
			{
				extraction_res_updated.push(cur_keyword);
			}
		}
		console.log(extraction_res_updated)
		senctence = extraction_res_updated.join(' AND ');
//		console.log(senctence,extraction_res_updated.length);
//		console.log(extraction_res_updated.slice(2))
		fetched_promise = newsapi.fetch(extraction_res_updated.slice(2,5).join(' AND '));
		fetched_promise.then(response=>{
			console.log('\n<<Articles>>\n')
			for(i=0;i<response.articles.length;i++)
			{
				cur = response.articles[i];
				console.log(cur.title+"\n");
			}
		});
		break;
	}

}
	
function displayTrendTweets(err,data,response)
{
	trends_list = [];	//Store the treding tweets 
	console.log('\nDsiplaying Trends\n');
	for(var i=0;i<data.length;i++)
	{	
		tweet_trends = data[i].trends;
		for(var j=0;j<tweet_trends.length;j++)
		{
			//if(trends_list.length == 0 || trends_list.indexOf(tweet_trends[i].name) <= -1)
			{
				trends_list.push(tweet_trends[i].name);
				console.log(tweet_trends[i].name+"\n");
			}
		}
	}
	console.log('\nEnd of trend results\n');
}