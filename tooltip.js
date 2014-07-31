var toolTip = {
	init: function() {
		var links = document.getElementsByTagName('a');
		for(var i = 0; i < links.length; i++) {
			links[i].addEventListener('focus', this.showTipListener, false);
			links[i].addEventListener('mouseover', this.showTipListener, false);
			links[i].addEventListener('blur', this.hideTipListener, false);
			links[i].addEventListener('mouseout', this.hideTipListener, false);
		}
	},

	showTipListener: function(event) {
		toolTip.showTip(this);
	},

	hideTipListener: function(event) {
		toolTip.hideTip(this);
	},

	showTip: function(link) {
		if(!link.title || link.title < 1) return false;

		this.hideTip(link);
		var span = document.createElement('span');
		span.className = 'tip';
		var text = document.createTextNode(link.title);
		span.appendChild(text);
		link.appendChild(span);
		this._toolTip = span;
		link.title = '';
	},

	hideTip: function(link) {
		if(this._toolTip){
			link.removeChild(this._toolTip);
			link.title = this._toolTip.textContent;
			this._toolTip = null;
		}
	}

};

toolTip.init();