Template.error_item.helpers({

})

Template.error_item.created = function(){
	var error_id = this.data._id;
    
    Meteor.setTimeout(function(){
        Errors.update(error_id, {$set: {
            seen: true
        }});
    }, 100);

    Meteor.setTimeout(function(){
        if (Errors.find().count() > 1) {
            Errors.remove(error_id);
        }
    }, 3000);
}