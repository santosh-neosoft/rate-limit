# rate-limit
API which limit the no of hits made by IP 

  for accessing rate limit API hit http://localhost:3000/limit on browser. 
# Videojs Demo app  
for default skin use in class `vjs-default-skin`
## Getting Started
Video.js is a web video player built from the ground up for an HTML5 world. It supports HTML5 and Flash video, as well as YouTube and Vimeo (through [plugins][plugins]).
## Quick Start

Thanks to the awesome folks over at [Fastly][fastly], there's a free, CDN hosted version of Video.js that anyone can use. Add these tags to your document's `<head>`:

```html
<link href="//vjs.zencdn.net/5.19/video-js.min.css" rel="stylesheet">
<script src="//vjs.zencdn.net/5.19/video.min.js"></script>
```

> For the latest version of video.js and URLs to use, check out the [Getting Started][getting-started] page on our website.

Next, using Video.js is as simple as creating a `<video>` element, but with an additional `data-setup` attribute. At a minimum, this attribute must have a value of `'{}'`, but it can include any Video.js [options][options] - just make sure it contains valid JSON!

```html
<video
    id="my-player"
    class="video-js"
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
```
```js
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
```
When the page loads, Video.js will find this element and automatically setup a player in its place.

If you don't want to use automatic setup, you can leave off the `data-setup` attribute and initialize a `<video>` element manually using the `videojs` function:

### Installing

```
npm install --save-dev video.js
```
```
bower install video.js
```
```
npm install --save videojs-seek-buttons
```
```
npm install youtube-video-js --save-dev
```
```
npm install --save-dev videojs-skin-twitchy
```
 

