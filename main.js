cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        // Handle the error, e.g., redirect to the home page
        window.location.href = 'https://ajaygaddam91.github.io/aws-cognito/';
    } else {
        console.log(data);

        // Initialize User Name and Email as empty strings
        UserName = '';
        UserEmail = '';

        // Iterate through user attributes
        for (var i = 0; i < data.UserAttributes.length; i++) {
            var attributeName = data.UserAttributes[i].Name;
            var attributeValue = data.UserAttributes[i].Value;

            if (attributeName === 'name') {
                UserName = attributeValue;
            } else if (attributeName === 'email') {
                UserEmail = attributeValue;
            }
        }

        // Check if the user's name and email were found
        if (UserName && UserEmail) {
            // Display the user's name and email
            document.getElementById('userName').innerHTML = UserName;
            document.getElementById('userEmail').innerHTML = UserEmail;

            // Set input field values if necessary
            document.getElementById('userNameInput').value = UserName;
            document.getElementById('userEmailInput').value = UserEmail;
        } else {
            // Handle the case where user attributes were not found
            console.log('Name and/or email not found in user attributes');
        }
    }
});
