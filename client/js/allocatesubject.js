Template.allocateSubject.events({
    'change #semester': function(event){
         	  event.preventDefault();
            var deptt = Session.get("deptinfo");
		        var sem   = event.target.value;
		        var found = Teachers.find({ department: deptt }).fetch();
		        console.log("teacher found");
		        Session.set('checkt',found);
		        var data= Subjects.find({ department:deptt,
						                            semester:sem}).fetch();
		        console.log("subject found");
		        Session.set('checks',data);
            document.getElementById("display-button").style.display = "initial";
	        },
    'change #deptt':function(event){
	          event.preventDefault();
            var deptt = event.target.value;
            console.log(deptt);
            Session.set('deptinfo',deptt);
          },
    'submit .sub': function(event){
         	  event.preventDefault();
		        $('.subcheck').each(function()
            {
                if (this.checked)
                {
                    subject = this.value;
                    teacher = $(this).parent().attr('id');
                    Subteacher.insert
                    ({
			                    subject:subject,
			                    teacher:teacher
                    });
			          }
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
