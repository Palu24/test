
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
			
		event.target.subjectfull.value   ="";
		event.target.subjectshort.value  =" ";
		event.target.code.value          =" ";
    }
});

Template.insertSubject.helpers({
    'department': function(){
        return Departments.find().fetch();
    }
});
