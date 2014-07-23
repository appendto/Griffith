Template['afCheckbox_custom'].atts = function() {
    var atts = {
        name: this.label,
        value: this.value
    };
    if (this.checked) {
        atts.checked = '';
    }
    return atts;
};