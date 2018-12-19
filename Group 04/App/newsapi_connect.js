const NEWSAPI = require('newsapi');

class NEWS_CONNECT
{
	static connect()
	{
		this.newsapi = new NEWSAPI('');
		return this.newsapi;
	}
}

module.exports = class NEWS_FETCH
{
	static fetch(keywords)
	{
		//Connect to the newsapi using NEWS_CONNECT class
		this.newsapi = NEWS_CONNECT.connect();
		//Return the Promise to handle the asynchronous call
		return this.newsapi.v2.everything(
		{
			q:keywords,
			language:'en',
		})
	}
}

/*
articles = []
ob = NEWS_FETCH.fetch('Modi');
ob.then(response=>{
	for(i=0;i<response.articles.length;i++)
	{
		cur = response.articles[i];
		articles.push({
			source : cur.source,
			title : cur.title,
			content : cur.content
		});
		console.log(cur.content+"\n");
	}
});
*/