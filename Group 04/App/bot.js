console.log('The twitter bot is starting');

var Twit = require('twit');	//Import the twit package
var config = require('./config')	//Import the config file for Oauth

var T = new Twit(config);	//Create object of Twit

var params_search = { 
	q: 'modi', 	//Search query keyword
	count: 2 	//Count for number of tweeets to be fetched
}
var params_trends = { 
	id: 2295412,	//WOEID for Pune 
	count: 100 		//Count for number of tweeets to be fetched
}

T.get('search/tweets', params_search, displaySearchTweets);
T.get('trends/place', params_trends, displayTrendTweets);


function displaySearchTweets(err,data,response)
{
	console.log('\nDisplaying Search results\n');
	var tweets = data.statuses;
	for(var i=0;i<tweets.length;i++)
	{
		console.log(tweets[i].user.name+" : "+tweets[i].text+"\n");
	}
	console.log('\nEnd of search results\n');
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
			if(trends_list.length == 0 || trends_list.indexOf(tweet_trends[i].name) <= -1)
			{
				trends_list.push(tweet_trends[i].name);
				console.log(tweet_trends[i].name+"\n");
			}
		}
	}
	console.log('\nEnd of trend results\n');
}