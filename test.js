'use strict';

dragula([$('div-1'), $('div-2')], {
	copy: function(el, source) {
		return source === $('div-1');
	},
	accepts: function(el, target) {
		return target !== $('div-1');
	}
});

function $(id) {
	return document.getElementById(id);
}