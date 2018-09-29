/*
 *  @author aniraj_jadhav
 *  Connect NodeJs to Mysql
 *  Client request Handler using express,bodyParser,http modules.
 */
//'use strict';

var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const dom = new JSDOM(``,{url: "http:http://localhost:5280/bosh",
contentType: "text/html",
userAgent: "admin/5280",
includeNodeLocations: true});
var window = dom.defaultView;
var $ = require("jquery")(window);

var strophe = require("node-strophe").Strophe;
var Strophe = strophe.Strophe;

var mysql = require("mysql");

//var routes = require('./routes');
//var config = require('./utils/config');


var host = 'localhost';
var port = process.env.PORT || 5280;
var app = express();
//var stropheJs = Strophe.Connection(this.app);
var jid = 'admin/localhost:5280';
var password = 'password';
var status;
	
	/* Including app Routes starts */
	
		
		//new routes(this.app).routesConfig();

		// connection.rawlInput=console.log;
		// connection.rawOutput=console.log;
		/*app.get("Boshconnectionui", function (req,res,next) {
			//res.send(__dirname + '/views/index.html');
			res.render('Boshconnectionui', {title: 'Welcome'});
		});*/
		
		$('#jid').get(0).value = "admin@localhost";
		$('#password').get(0).value = "password";
		$('#connect').bind('click', function(){
			var BOSH_SERVICE = 'http://localhost:5280/bosh';
			var connection = new Strophe.Connection('BOSH_SERVICE');
			connection.rawlInput=console.log;
			connection.rawOutput=console.log;
			var button = $('#connect').get(0);

			if(button.value == 'connect') {
				button.value = 'disconnect';
				connection.connect($('#jid').get(0).value, $('#password').get(0).value, onConnect);
			} else {
				button.value == 'connect';
				connection.disconnect();
			}
		});
		function onConnect(status) {
		connection.connect(jid, password, function() {
			if (status === Strophe.Status.CONNECTING){
				console.log('Strophe is connecting.');
			} else if (status === Strophe.Status.CONNFAIL){
				console.log('Strophe failed to connect.');
			} else if (status === Strophe.Status.DISCONNECTING){
				console.log('Strophe is disconnection.');	
			} else if (status === Strophe.Status.DISCONNECTED){
				console.log('Strophe is disconnected.');
			} else if (status === Strophe.Status.CONNECTED){
				console.log('Strophe is connected.');
				connection.disconnect();
			}
		});
	}
//		app.post("/getSuggestion", function (request, response) {
//			//Storing the user entered string into variable
//			let suggestionString = request.body.suggestion;
//			
//	 		helper.getSuggestion(suggestString,(result)=>{
//				if (result.error) {
//					response.status(100).json({ "error": true,"message": "Error in connection database"});
//				}else if(result.rows.length === 0){
//					response.status(100).json({ "error": true,"message": "Error in connection database"});
//				}else{
//					response.status(200).json(result);
//				}
//			});
//		});
//	}
function sendMsg(to_jid)
{
          var uniqueID = connection.getUniqueId("my:code"); // Unique ID to tract the message.
	// XMPP message box similar to this:
	<message id='4092:MBM:Example:1'
	         to=''
	         from=''>
	         <body>Hello</body>
	</message>
	// $msg is a helper function. .c() sets the element name, .t() the content.
	// See documentation of Strophe for more info.
	var reqChannelsItems = $msg({"id":uniqueID, "to":to_JID})
							   .c("body").t(body);
	// And we send the created Message
	connection.send(reqChannelsItems.tree()); 
        //onMEssageRecieve() function will be  triggered


}

function onMsgReceive(stanza)
{ 
  console.log(stanza);
 

}
	/* Including app Routes ends */
	
		
		//this.appConfig();
		//this.includeRoutes(this.app);
		app.listen(port, host, function() {
			console.log('Listening on http://${this.host}:${this.port}');
		});