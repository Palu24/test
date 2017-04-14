
Template.insertSubject.events({
    'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var subf  = event.target.subjectfull.value;
		var subs  = event.target.subjectshort.value;
		var code  = event.target.code.value;
		var sem   = event.target.sem.value;
		Subjects.insert({     department: deptt,
						fullname: subf,
					        semester: sem,
						    code: code,
					       shortname: subs
				});
			console.log("subjects inserted");

		event.target.subjectfull.value   ="Subject's Full Name";
		event.target.subjectshort.value  ="Subject's Short Name";
		event.target.code.value          ="Subject's Code No.";
    }
});

Template.insertSubject.helpers({
    'department': function(){
        return Departments.find().fetch();
    }
});
