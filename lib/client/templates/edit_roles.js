Meteor.startup(function () {

  Template[getTemplate('editRoles')].events({
	  "submit .add-role": function (event) {

	    var role = event.target.role.value;

	    Meteor.call("updateRoles", Meteor.user()._id, role);

	    // Clear form
	    event.target.text.value = "";

	    // Prevent default form submit
	    return false;
	  }

	});

	Template[getTemplate('editRoles')].helpers({
		roles: function() {
			return Meteor.user().roles
		}
	})  

});
