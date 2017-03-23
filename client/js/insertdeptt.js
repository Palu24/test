
Template.departmentInformation.events({
    'submit .deptt': function(event){
		event.preventDefault();
		var deptt = event.target.deptt.value;
		var hod   = event.target.hod.value;
		Departments.insert({ name: deptt, 
					      hod: hod
					   });
		console.log("department inserted");
		event.target.deptt.value =" ";
		event.target.hod.value   =" ";
    }
});
