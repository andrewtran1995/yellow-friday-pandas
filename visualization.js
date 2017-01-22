// Create mixin as common interface for visualizations
// var visualizationMixin = Base => class extends Base {
// 	onRender() { }
// 	onPlay() { }
// 	onPause() { }
// 	onStop() { }
// }

// const BAR_VIS = 'BAR_VIS';
// var VISUALIZATIONS = new Map
// 	BAR_VIS => BarVisualization
// }

BarVisualization = {

	onRender: function() {
		createCanvas(720, 200);
		background(255,0,0);
	},
	onPlay: function() {
		background(0, 255, 0);
		while(1)
			this.draw();
	},
	onPause: function() {
		background(255, 255, 0);
	},
	onStop: function() {
		background(255, 0, 0);
	}
}
