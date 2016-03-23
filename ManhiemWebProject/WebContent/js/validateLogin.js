$(function()
		{
	// Validation for login form
	$("#sky-form").validate(
			{					
				// Rules for form validation
				rules:
				{
					username:
					{
						required: true
					},
					password:
					{
						required: true,
						minlength: 3,
						maxlength: 20
					}
				},

				// Messages for form validation
				messages:
				{
					username:
					{
						required: 'Please enter your username'
					},
					password:
					{
						required: 'Please enter your password'
					}
				},					

				// Do not change code below
				errorPlacement: function(error, element)
				{
					error.insertAfter(element.parent());
				}
			});


});			
