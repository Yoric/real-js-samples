jQuery(document).ready(function() {
    // get url
    var actionURL = document.getElementById('formAction').innerHTML.replace(/\s|(<p>)|(<\/p>)/g, '');

    MktoForms2.whenReady(function(form) {
        //Add an onSuccess handler
        form.onSuccess(function(values, followUpUrl) {
            // Take the lead to a different page on successful submit, ignoring the form's configured followUpUrl
            location.href = actionURL;
            // Return false to prevent the submission handler continuing with its own processing
            return false;
        });


    });
});