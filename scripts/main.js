$(document).ready(function () {

    // jQuery methods go here...
    var contacts = {};

    //Captuing the form input
    $("#saveNewContact").click(function () {
        var newFormDetails = ($("form").serializeArray());
        console.log(newFormDetails);
        
        // var stringJSON = JSON.stringify(newFormDetails);
        // console.log(stringJSON);

        
        $.each(newFormDetails, function() {
            $.each(this, function(name, value){
                
                console.log(`${name} = ${value}`);
            });
        });

        console.log(contacts);
        

        // console.log($.isArray(newFormDetails));
        // var test = jQuery.parseJSON(newFormDetails);
        // console.log(test);
        // $.each(newFormDetails, function() {
        //     $.each(this, function(name, value){
        //         console.log(`${name} = ${value}`);
        //     });
        // });
        // $.each(newFormDetails, function(i, field) {
        //     console.log(field.value);
        // });

        // var firstnamevalue = $("#fname").val();
        // console.log(firstnamevalue);



    });

    //Clearing the modal after closing the form
    $(".modal").on("hidden.bs.modal", function () {
        $(this).find('form').trigger("reset");
    });

    //Preventing the modal from closing when clicked outside the modal or when pressed the "ESC" keyboard button

    $(".contact-card").click(function () {
        jQuery("<div/>", {
            class: "contact-card",
        }).appendTo(".cards-flex-container");

        jQuery("<div/>", {
            class: "profile-picture-container",
        }).appendTo(".contact-card:last");

        jQuery("<img/>", {
            class: "rounded-circle profile-picture",
            src: "images/profile-picture.png",
            alt: "profile picture",
        }).appendTo(".profile-picture-container:last");

        jQuery("<div/>", {
            class: "profile-details",
        }).appendTo(".contact-card:last");

        jQuery("<h4/>", {
            text: "Tushar Anand",
        }).appendTo(".profile-details:last");

        // Adding phone number
        // jQuery("<div/>", { 
        //     class : "card-phone-number",
        // }).appendTo(".profile-details:last");

        // jQuery("<span/>", {  
        //     text: "<b>Phone:</b>",  
        // }).appendTo("card-phone-number:last");

        // jQuery("<span/>", {  
        //     text: "+91 8789067614",  
        // }).appendTo("card-phone-number:last");

        var phoneTitle = $('<span />', {
            html: '<b>Phone: </b>'
        });

        var phoneValue = $('<span />', {
            html: '+91 8789067614'
        });

        jQuery("<div/>", {
            class: "card-phone-number",
            html: phoneTitle,
        }).appendTo(".profile-details:last");

        phoneValue.appendTo(".card-phone-number:last");

        // Adding Email
        var emailTitle = $('<span />', {
            html: '<b>Email: </b>',
        });

        var emailValue = $('<span />', {
            html: 'tushar@test.com',
        });

        jQuery("<div/>", {
            class: "card-email",
            html: emailTitle,
        }).appendTo(".profile-details:last");

        emailValue.appendTo(".card-email:last");

        // Adding Job Title
        var jobTitle = $('<span />', {
            html: '<b>Job Title: </b>',
        });

        var jobTitleValue = $('<span />', {
            html: 'Software Engineer',
        });

        jQuery("<div/>", {
            class: "card-job-title",
            html: jobTitle,
        }).appendTo(".profile-details:last");

        jobTitleValue.appendTo(".card-job-title:last");

        // Adding Company
        var companyTitle = $('<span />', {
            html: '<b>Company: </b>',
        });

        var companyValue = $('<span />', {
            html: 'Nowcom Global Services',
        });

        jQuery("<div/>", {
            class: "card-company",
            html: companyTitle,
        }).appendTo(".profile-details:last");

        companyValue.appendTo(".card-company:last");

        // Adding Address
        var addressTitle = $('<span />', {
            html: '<b>Address: </b>',
        });

        var addressValue = $('<span />', {
            html: 'Mountain View, California, United States',
        });

        jQuery("<div/>", {
            class: "card-address",
        }).appendTo(".profile-details:last");

        companyValue.appendTo(".card-address:last");

    });
});