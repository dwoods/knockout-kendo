createBinding({
    name: "kendoDropDownList",
    events: {
        change: VALUE,
        open: {
            writeTo: ISOPEN,
            value: true
        },
        close: {
            writeTo: ISOPEN,
            value: false
        }
    },
    watch: {
        enabled: ENABLE,
        isOpen: [OPEN, CLOSE],
        data: function(value, options) {
            ko.kendo.setDataSource(this, value, options);
        },
        value: VALUE
    }
});