Template.allocateSubject.events({
    'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var sem   = event.target.sem.value;
		var found= Teachers.find({ department: deptt }).fetch();
		console.log("teacher found");
		Session.set('checkt',found);
		var data= Subjects.find({ department:deptt,
						     semester:sem}).fetch();
		console.log("subject found"); 
		Session.set('checks',data); 			
	        },
    'click .su': function(event){
         	event.preventDefault();
		$('.subcheck').each(function() {
                if (this.checked) {
                subject = this.value;
                teacher = $(this).parent().attr('id');
                console.log(subject,teacher);}
        });  
    	}			   
});


Template.allocateSubject.helpers({
    'department': function(){
        return Departments.find().fetch();
    },
    'teacher':function(){
	 var foundt= Session.get("checkt");
	 return foundt;
    },
    'subject':function(){
	 var founds= Session.get("checks");
	 return founds;
    }
});
