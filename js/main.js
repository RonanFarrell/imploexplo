var running		= false,
	game		= new Game(),
	playingAs,
	gameOver = false;

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function( callback ){
			window.setTimeout(callback, 1000 / 60);
};
})();

var stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms

// Align top-left
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';

document.body.appendChild( stats.domElement );

function run()
{
	stats.begin();
    running = true;
    game.update();
    game.draw();
  stats.end();

    if (!gameOver) {
		window.requestAnimFrame(run);
	}
}

jQuery(function($)
{
	$(this).keydown(function (e) {
		switch (e.which) {
			case 37:
				$('#tutLeft').fadeOut();
				break;
			case 39:
				$('#tutRight').fadeOut();
				break;
			case 65:
				$('#tutA').fadeOut();
				break;
			case 68:
				$('#tutD').fadeOut();
				break;
		}
	});
});