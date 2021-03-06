$(document).ready(function(){
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });
});





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
		event.target.nm.value     ="Student's Name";
		event.target.fname.value  ="Father's Name";
		event.target.mname.value  ="Mother's name";
		event.target.date.value   ="Date of Birth";
		event.target.add.value    ="Address";
		event.target.phn.value    ="Phone No.";
		event.target.email.value  ="Email Id";
		event.target.pass.value  ="Password";
    }
});

Template.student.helpers({
    'department':function(){
       	return Departments.find().fetch();
     }
});
