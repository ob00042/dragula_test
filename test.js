'use strict';

dragula([$('div-1'), $('div-2')], {
	copy: function(el, source) {
		return source === $('div-1');
	},
	accepts: function(el, target) {
		return target !== $('div-1');
	}
});

dragula([$('table-1'), $('table-2')], {
	copy: function(el, source) {
		return source === $('table-1');
	},
	accepts: function(el, target) {
		return target !== $('table-1');
	}
});

dragula([$('media-table'), $('playlist-list')], {
	copy: function(el, source) {
		return source === $('media-table');
	},
	accepts: function(el, target) {
		return target !== $('media-table');
	}
})
	.on('drop', function(el, target, source) {
		var text = '';
		var li = document.createElement('li');
		for (var i = 0; i < el.children.length; i ++) {
			(text == '') ? 
				(text = text + el.children[i].innerHTML)
				: (text = text + ', ' + el.children[i].innerHTML);
		}
		li.insertAdjacentHTML('beforeend', text);
		el.parentNode.replaceChild(li, el);
	});

function $(id) {
	return document.getElementById(id);
}