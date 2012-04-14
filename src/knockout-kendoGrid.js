createBinding({
	name: "kendoGrid",
    defaultOption: DATA,
    watch: {
        data: function(value, options) {
            ko.kendo.setDataSource(this, value, options);
        }
    },
	templates: [
		"rowTemplate",
		"cellTemplate",
		{ "columns": ["template", "groupHeaderTemplate", "groupFooterTemplate"] }
	]
});
