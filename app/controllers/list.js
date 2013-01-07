
$.load = function() {
	for (var i = 0, l = 50; i < l; i++) {
	    var listItem = Alloy.createController('listItem', {
	        done:false
	    }).getView();
	    
	    $.todos.add(listItem);
	}
};

$.init = function() {
	$.load();
	
	var m = Ti.UI.create2DMatrix({
        rotate:90 
    }),
    a = Ti.UI.createAnimation();

	a.transform = m;
	a.duration = 1;
	$.scroller.animate(a);
};
