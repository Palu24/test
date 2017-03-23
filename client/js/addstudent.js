
Template.student.events({
    'submit .btn1': function(event){
         	event.preventDefault();
		var naam    = event.target.nm.value;
		var fname   = event.target.fname.value;
		var mname   = event.target.mname.value;
		var date    = event.target.date.value;
		var deptt   = event.target.dept.value;
		var address = event.target.add.value;
		var year    = event.target.year.value;
		var phone   = event.target.phn.value;
		var email   = event.target.email.value;
		var password   = event.target.pass.value;
		Students.insert({      name: naam,
					 fathername: fname,
					 mothername: mname,
					 	dob: date,
					 department: deptt,
					       year: year,
					    address: address,
					      phone: phone,
					    emailId: email});
			console.log("data inserted of student");
		Accounts.createUser({
                            username: naam,
                            email : email,
                            password : password,
                            profile  : {
                                role:'student'
                            }
		});
		event.target.nm.value     =" ";
		event.target.fname.value  =" ";
		event.target.mname.value  =" ";
		event.target.date.value   =" ";
		event.target.add.value    =" ";
		event.target.phn.value    =" ";
		event.target.email.value  =" ";
		event.target.pass.value  =" ";
    }
});

Template.student.helpers({
    'department':function(){
       	return Departments.find().fetch();
     }
});
