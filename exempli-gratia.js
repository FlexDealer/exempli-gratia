/* ---- Exempli Gratia (e.g.) ---- */
/*     for the sake of example     */

/*     Nolan Neustaeter | 2014     */

/*
mimics text being entered into the placeholder of an input box
to give users examples of what can be entered in this box
*/


(function ($) {

	$.fn.eg = function(options) {

		var settings = $.extend({
			// defaults
			delay:      100,  // delay between characters being added
			variance:   100,  // randomness to simulate human typing
			blinkDelay: 500,  // delay for the caret animation
			blinks:       5,  // number of times that the caret blinks after each example
			examples: [
				'Waffles are delicious',
				'Sometimes I forget how to type',
				'The third Matrix movie was ok, I guess'
			]
		}, options),
			queue = [],
			placeholder = this.attr('placeholder'),
			blinked = 0;

		// clears the default placeholder
		this.attr('placeholder', '');

		// writes the next letter in the current example or moves on to the next example
		function advance() {

			if (queue.length === 0) {
				populateQueue();
				setTimeout($.proxy(wait, this), settings.blinkDelay);
			} else if (queue[0].length === 0) {
				queue.shift();
				setTimeout($.proxy(wait, this), settings.blinkDelay);
			} else {
				this.attr('placeholder', this.attr('placeholder') + queue[0].shift());
				setTimeout($.proxy(advance, this), settings.delay + Math.floor((Math.random() * settings.variance - (settings.variance / 2))));
			}

			
		}

		// blinks the cursor after the current example has finished being written
		function wait() {
			if (blinked === settings.blinks) {
				this.attr('placeholder', '');
				blinked = 0;
				advance.call(this);
			} else {
				if (this.attr('placeholder').substr(-1) === '|') {
					this.attr('placeholder', this.attr('placeholder').substr(0, this.attr('placeholder').length - 1));
				} else {
					this.attr('placeholder', this.attr('placeholder') + '|');
				}
				blinked++;
				setTimeout($.proxy(wait, this), settings.blinkDelay);
			}
		}

		// prepares examples for showing
		function populateQueue() {
			$.each(settings.examples, function(index, example) {
				queue[index] = example.split('');
			});
		}

		// get the party started and allow method chaining
		return this.each($.proxy(advance, this));
	};
 
}(jQuery));