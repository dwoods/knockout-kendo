createBinding({
	name: "kendoGrid",
	defaultOption: DATA,
	watch: {
		data: function (value) {
			ko.kendo.setDataSource(this, value);
		}
	},
	templates: [
		"rowTemplate",
		"cellTemplate",
		{ "columns": ["template", "groupHeaderTemplate", "groupFooterTemplate"] }
	]
});
