# rate-limit
API which limit the no of hits made by IP 
 <video
    id="my-player"
    class="video-js vjs-default-skin vjs-big-play-centered "
    controls
    
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
<button id="videojsplay" class="btn btn-block facebook"><i class="fafa-facebook"></i> play</button>
var myPlayer = videojs('my-player',{
			muted :true,
			controlBar: {
    			fullscreenToggle: false //to disable to fullscreen toggle
  			}
		});

        $('#videojsplay').click(function(evt){
			evt.preventDefault();
			myPlayer.play();
		});