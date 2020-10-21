$(document).ready(function () {

    // jQuery methods go here...
    var contacts = [];
    var id = 0;

    //Clearing the modal after closing the form
    $(".modal").on("hidden.bs.modal", function () {
        $(this).find('form').trigger("reset");
    });

    //Captuing the form input
    $("#saveNewContact").on("click", function () {

        var newFormDetails = {};
        newFormDetails["id"] = id;
        $.each($("#create-new-contact").serializeArray(), function (i, field) {
            
            newFormDetails[field.name] = field.value;
            console.log(newFormDetails);
        });
        contacts[id] = newFormDetails;
        id++;

        // Display no records found
        if (contacts.length != 0) {
            $("#noRecords").css("display", "none");
        }

        var mouseHoverEnter = function(){
            $(".actionButtons").css("background-color", "red");
        };
    
        var mouseHoverExit = function(){
            $(".actionButtons").toggle(false);
        };
    
        $(function() {
            $(".contact-card").hover(mouseHoverEnter, mouseHoverExit);
        });
    


        // After completion of every feature, edit the HTML card to be hidden without any text present. Then for every new creation of the card, clone the html and provide value to it.
        //https://www.w3schools.com/jquery/jquery_dom_add.asp
        

        // Adding a new card
        $("<div/>", {
            class: "contact-card",
            id: newFormDetails["id"],
        }).appendTo(".cards-flex-container").hover(mouseHoverExit, mouseHoverEnter);

        $("<div/>", {
            class: "profile-picture-container",
        }).appendTo(".contact-card:last");

        //Adding card image
        $("<img/>", {
            class: "rounded-circle profile-picture",
            src: "images/profile-picture.png",
            alt: "profile picture",
        }).appendTo(".profile-picture-container:last");

        //Adding card details from here
        $("<div/>", {
            class: "profile-details",
        }).appendTo(".contact-card:last");


        //Adding card title
        $("<div/>", {
            class: "card-title",
        }).appendTo(".profile-details:last");

        //Adding user name
        $("<h4/>", {
            text: newFormDetails["firstname"] + " " + newFormDetails["lastname"],
        }).appendTo(".card-title:last");

        //Adding action buttons
        $('<div />', {
            class: "actionButtons",
            html: '<i class="fa fa-eye"></i><i class="fa fa-pencil"></i><i class="fa fa-trash"></i>',
        }).appendTo(".card-title:last");

        // $("</>", {
        //     class: "actionButtons",
        //     html: actionIcons,
        // }).appendTo(".card-title:last");

        //Adding the <HR> tag
        $("<hr>").appendTo(".profile-details:last");

        // Adding Phone number
        var phoneTitle = $('<span />', {
            html: '<b>Phone: </b>',
        });

        var phoneValue = $('<span />', {
            html: newFormDetails["phone"],
        });

        $("<div/>", {
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

        $("<div/>", {
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

        $("<div/>", {
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

        $("<div/>", {
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

        $("<div/>", {
            class: "card-address",
            html: addressTitle,
        }).appendTo(".profile-details:last");

        addressValue.appendTo(".card-address:last");
    });

    // Display card details on click
    // $(".contact-card").hover(function () {
    //     $(this).css("background-color", "yellow");
    // }, function () {
    //     $(this).css("background-color", "pink");
    // });

    // $(".contact-card").on({
    //     mouseenter: function () {
    //         $(this).css("background-color", "yellow");
    //     },

    //     mouseleave: function () {
    //         $(this).css("background-color", "white");
    //     },
    //     click: function () {
    //         $(this).css("background-color", "green");
    //     },
    // });





    $(".cards-flex-container div").on("mouseenter", ".cotact-card", function(){
        $(this).css("background-color", "yellow");

    });

    // Search Box
    $("#searchbox").on("keyup", function () {
        var a = $(this).val().toLowerCase();
        $(".contact-card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(a) > -1)
        });
    });
});