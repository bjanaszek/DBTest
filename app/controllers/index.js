$.list = Alloy.createController("list");

// Menu listeners:
function handleShowAll(e) {
	$.index.add($.list.getView());
	$.list.init();
}

$.index.open();
