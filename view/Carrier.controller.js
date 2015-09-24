sap.ui.controller("sap.training.exc17.fullscreen.view.Carrier", {

	onInit: function() {
		var oRouter = this.getRouter();
		oRouter.getRoute("carrier").attachMatched(this._onObjectMatched, this);
	},

	getRouter: function() {
		return sap.ui.core.UIComponent.getRouterFor(this);
	},

	_onObjectMatched: function(oEvent) {
		var oArgs, oView;
		oArgs = oEvent.getParameter("arguments");
		this._sCarrierId = oArgs.carrierId;
		oView = this.getView();

		oView.bindElement({
			path: "travel>/CarrierSet('" + this._sCarrierId + "')",
			events: {
				change: this._onBindingChange.bind(this),
				dataRequested: function() {
					oView.setBusy(true);
				},
				dataReceived: function() {
					oView.setBusy(false);
				}
			}
		});
	},

	_onBindingChange: function() {
		var oElementBinding;

		oElementBinding = this.getView().getElementBinding("travel");

		// No data for the binding
		if (oElementBinding && !oElementBinding.getBoundContext()) {
			this.getRouter().getTargets().display("notFound");
		}
	},

	onNavBack: function() {
		var oHistory, sPreviousHash, oRouter;

		oHistory = sap.ui.core.routing.History.getInstance();
		sPreviousHash = oHistory.getPreviousHash();

		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			oRouter = this.getRouter();
			oRouter.navTo("overview", true /*no history*/ );
		}
	}

});