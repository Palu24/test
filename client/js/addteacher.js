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

Template.teacher.events({
    'submit .btn2': function(event){
		event.preventDefault();
		var naam          = event.target.nm.value;
		var qualification = event.target.qualification.value;
		var date          = event.target.date.value;
		var address       = event.target.add.value;
		var code          = event.target.code.value;
		var phone         = event.target.phn.value;
		var email         = event.target.email.value;
		var pass          = event.target.pass.value;
		var deptt         = event.target.dept.value;
		Teachers.insert({
                    name: naam,
					 qualification: qualification,
					 	         dob: date,
					          code: code,
					       address: address,
					         phone: phone,
					      password: pass,
					       emailId: email,
					    department:deptt});
			console.log("data inserted of teacher");
		 Accounts.createUser({
                            username: naam,
                            email : email,
                            password : pass,
                            profile  : {
                                role:'teacher'
                            }
		});
		event.target.nm.value    ="Teacher's Name";
		event.target.date.value  = "Date of Birth";
		event.target.add.value   = "Address";
		event.target.phn.value   = "Phone No.";
		event.target.email.value = "Email Id";
		event.target.pass.value  = "Password";
		event.target.code.value  = "Unique Code";
		event.target.dept.value  = "Departments";
    }
});

Template.teacher.helpers({
    'date': function(){
        var d = new Date();
	var dor= d.getDate();
	return dor;
    },
    'month': function(){
        var d = new Date();
	var mor= d.getMonth() + 1;
	return mor;
    },
    'year': function(){
        var d = new Date();
	var yor= d.getFullYear();
	return yor;
    },
    'department':function(){
	return Departments.find().fetch();
    }
});
