sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {

	return UIComponent.extend("sap.training.exc17.fullscreen.Component", {
		
		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});