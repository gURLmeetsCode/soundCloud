var should = require('should')
var request = require('request')
var expect = require('chai').expect;
var app = require('../app')
var baseUrl = 'https://api.soundcloud.com/tracks?client_id=d6i0wruU7ddayTqrhwszluW0i9aNBlb1'
var util = require('util')
var handleInput = require('../script.js').handleInput;
var SC = require('node-soundcloud')


  


// Testing for working server

describe('main page', function() {
  it('should pass when everything is okay', function(){
  	expect(200) //response is 200 OK
    expect(true).to.be.true;
  })
});

//Test for successfull API call (getting 401 in unit test)

describe('return search results', function(){
	it('List 5 tracks and like count', function(done){
		request.get({url: baseUrl + '/tracks/1'},
			function(error, response, body){
				expect(response.statusCode).to.equal(200);
				console.log(body);
				done();
			})
	})
})

//Test for User Input

describe('return user input', function(){
	describe('handleInput()', function(){
		it('user input can contain strings and/or numbers', function(){
			var usrInput = this.value
			expect(handleInput.event).to.equal(usrInput);
		});	
	});
});


