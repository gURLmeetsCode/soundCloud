var SC = require('node-soundcloud');

    SC.init({
      client_id: "d6i0wruU7ddayTqrhwszluW0i9aNBlb1",
      redirect_uri:'http://localhost:8888/callback',

    });


        document.addEventListener('DOMContentLoaded', function(event) {
        document.querySelector('#searchInput').addEventListener('keyup', handleInput);
        document.querySelector("#search").addEventListener("submit", searchTracks);
        document.querySelector('#searchInput').addEventListener('focusout', clearInput)
        document.querySelector('#signIn').addEventListener('click', signIn);
          event.preventDefault()
          console.log("content loaded")
       });



      // Search Bar Logic //

       function handleInput (event){
        usrInput = this.value;
        console.log(usrInput)
       }

        function searchTracks(event) {
              event.preventDefault()
               console.log(event)
                  SC.get('/tracks',{
                      q: usrInput ,
                      limit: 5
                      }).then(function(response){
                      console.log(response);
                      tracks = response;
                      var trackList = tracks
              for (var i = 0; i < trackList.length; i++) {
            $("#track").append("<div>" + trackList[i].title + "</div>");
            $("#target").append("<div>" + trackList[i].likes_count + "</div>");
              };
          });
        }

      function clearInput(event){
        if (this.value == usrInput){
          this.value = ""
        }
      }

    // initiate auth popup
        function signIn(event){
              event.preventDefault()
            SC.connect().then(function() {
              return SC.get('/me');
              }).then(function(me) {
            alert('Hello, ' + me.username);
            });
               }
      // Connect user to authorize application 
          var initOAuth = function(req, res) {
            var url = SC.getConnectUrl();
           
            res.writeHead(301, { location: url });
            res.end();
          };

      module.exports.handleInput = handleInput;
      
