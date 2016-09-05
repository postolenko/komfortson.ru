$(document).ready(function() {


    $(window).on('load', function () {

        setTimeout(function() {

            $(".preload-bg").fadeOut(700);

        }, 800);
  

    });


    var indexDropdownCheckboxes;
    var dropdownCheckboxesHeight;


    var countColKartBox = $(".slider-good-box .col").length - 1;
    var countColKartBoxFor = 0;
    var colHeightArr = [];


    $(window).resize(function() {


        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


        getPopupPosition();

        getCartColumnsHeight();

    });


    $(".wrapper").css({"min-height" : $(window).height() + "px"});

    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});


    getPopupPosition();

    getCartColumnsHeight();



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

        $(".main-nav li a").removeClass("active");

    });


    // -------------------------------------------------

    function getPopupPosition() {

        $(".popup-box").css({"top" : ( $(window).height() - $(".popup-box").outerHeight(true) ) / 2 + "px" });

    }


    $(".popup-bg, .popup-box button").click(function() {

        $(".popup-section").fadeOut(300);

    });


    // ------------------------------------------------------


    // var countColKartBox = $(".slider-good-box .col").length - 1;
    // var countColKartBoxFor = 0;
    // var colHeightArr = [];

    function getCartColumnsHeight() {

        setTimeout(function() {

            for (countColKartBoxFor = 0; countColKartBoxFor <= countColKartBox; countColKartBoxFor++) {

                colHeightArr.push($(".slider-good-box .col:eq("+ countColKartBoxFor +")").height());

            }

            $(".slider-good-box .col").outerHeight(Math.max.apply(null, colHeightArr));

        }, 700);        

    }


    // ---------------------------------------------------------


    var countItemsTabMenuFor;
    var countItemsTabMenu = $(".card_tab_link").length - 1;

    var dataAttrTab;

    for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

            if( $(".card_tab_link:eq("+ countItemsTabMenuFor +")").hasClass("active") ) {

                dataAttrTab = $(".card_tab_link:eq("+ countItemsTabMenuFor +")").attr("for");

                for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                    console.log(countItemsTabMenuFor);

                    if ( $(".card_tab:eq("+ countItemsTabMenuFor +")").attr("id") == dataAttrTab ) {

                        $(".card_tab:eq("+ countItemsTabMenuFor +")").addClass("active");

                    }

                }

            }

    }


    $(".card_tab_link").click(function() {

        if( !$(this).hasClass("active") ) {

            $(".card_tab").removeClass("active");

            $(".card_tab_link").not($(this)).removeClass("active");                             

            $(this).toggleClass("active");

        }

    }); 
		

});