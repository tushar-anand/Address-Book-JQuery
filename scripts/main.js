$(document).ready(function () {

    // jQuery methods go here...
    var contacts = [];
    var id = 0;

    //Captuing the form input
    $("#saveNewContact").click(function () {

        var newFormDetails = {};
        newFormDetails["id"] = id;
        id++;
        $.each($("#create-new-contact").serializeArray(), function (i, field) {
            newFormDetails[field.name] = field.value;
        });

        console.log(newFormDetails["firstname"]);

        jQuery("<div/>", {
            class: "contact-card",
            id: newFormDetails["id"],
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
            text: newFormDetails["firstname"] + " " + newFormDetails["lastname"],
        }).appendTo(".profile-details:last");

        var phoneTitle = $('<span />', {
            html: '<b>Phone: </b>',
        });

        var phoneValue = $('<span />', {
            html: newFormDetails["phone"],
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
            html: newFormDetails["email"],
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
            html: newFormDetails["jobtitle"],
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
            html: newFormDetails["companyname"],
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
            html: newFormDetails["addressLineOne"] + " " + newFormDetails["addressLineTwo"],
        });

        jQuery("<div/>", {
            class: "card-address",
            html: addressTitle,
        }).appendTo(".profile-details:last");

        addressValue.appendTo(".card-address:last");
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