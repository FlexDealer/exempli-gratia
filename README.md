Exempli Gratia (e.g.)
=====================

Simple jQuery plugin that mimics text being entered into the placeholder of an input box to give users examples of what can be entered

[Live Example](http://noolan.github.io/exempli-gratia)

________________________________________________________________________________________

Usage
-----

```javascript
$('selector').eg({
	examples: [
		"you could type something like this",
		"or maybe this",
		"but never type anything like this"
	]	
});
```

________________________________________________________________________________________

Available Options
-----------------
|  Option  | Type |Default|                      Description                       |
|----------|------|------:|--------------------------------------------------------|
|delay     |number|    100|delay between characters being added                    |
|variance  |number|    100|randomness added to delay to simulate human typing      |
|blinkDelay|number|    500|delay for the caret animation                           |
|blinks    |number|      5|number of times that the caret blinks after each example|
|examples  |array |     []|phrases to cycle through in the placeholder             |