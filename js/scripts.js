$(document).ready(function() {

    //   preload
    $(window).on('load', function () {

        setTimeout(function() {

            $(".preload-bg").fadeOut(500);

        }, 700);
  

    });


    var indexDropdownCheckboxes;
    var dropdownCheckboxesHeight;


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});



    });


    $(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});



    $(".circle-content").height($(".circle-content h3").outerHeight(true) + $(".circle-content p").outerHeight(true) + 20);


    $(".show-hide-checkboxes").click(function() {

        indexDropdownCheckboxes = $(".show-hide-checkboxes").index(this);

        $(".show-hide-checkboxes:eq("+ indexDropdownCheckboxes +")").toggleClass("active");

        dropdownCheckboxesHeight = $(".dropdown-checkboxes .checkboxes:eq("+ indexDropdownCheckboxes +")").height();

        if( $(".dropdown-checkboxes:eq("+ indexDropdownCheckboxes +")").height() > 0 ) {

            $(".dropdown-checkboxes:eq("+ indexDropdownCheckboxes +")").animate({"height" : 0 + "px"}, 300);



        } else {

            $(".dropdown-checkboxes:eq("+ indexDropdownCheckboxes +")").animate({"height" : dropdownCheckboxesHeight + "px"}, 300);

        }


    });


    // ----------------------------------------------------------------------

    var indexMenuItem;
    var dataAttr;
    var countItemsMenuFor = 0;
    var countItemsMenu = $(".item-nav-content").length - 1;

    $(".main-nav li a")
    .mouseover(function() {

        $(".item-nav-content").css({"display":"none"});

        indexMenuItem = $(".main-nav li a").index(this);

        dataAttr = $(".main-nav li a:eq("+ indexMenuItem +")").attr("data-item");

        $(".main-nav li a:eq("+ indexMenuItem +")").addClass("active");

        for (countItemsMenuFor = 0; countItemsMenuFor <= countItemsMenu; countItemsMenuFor++) {

            console.log(countItemsMenuFor);

            if ( $(".item-nav-content:eq("+ countItemsMenuFor +")").attr("data-item") == dataAttr ) {

                $(".item-nav-content:eq("+ countItemsMenuFor +")").addClass("active");

                $(".item-nav-content:eq("+ countItemsMenuFor +")").css({"display":"block"});

            }

        }
  

    })
    .mouseout(function() {

        $(".item-nav-content").css({"display":"none"});

        $(".item-nav-content").removeClass("active");

        $(".main-nav li a").removeClass("active");

    });



    $(".item-nav-content")
    .mouseover(function() {

        $(this).css({"display":"block"});

        $(this).attr("data-item");

        for (countItemsMenuFor = 0; countItemsMenuFor <= countItemsMenu; countItemsMenuFor++) {

            console.log(countItemsMenuFor);

            if ( $(".main-nav li a:eq("+ countItemsMenuFor +")").attr("data-item") == dataAttr ) {

                $(".main-nav li a:eq("+ countItemsMenuFor +")").addClass("active");

            }

        }

    }).mouseout(function() {

        $(this).css({"display":"none"});

        $(".main-nav li a:eq("+ countItemsMenuFor +")").removeClass("active");

    });




		

});