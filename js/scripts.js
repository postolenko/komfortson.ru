$(document).ready(function() {

    //   preload
    $(window).on('load', function () {

        setTimeout(function() {

            $(".preload-bg").fadeOut(500);

        }, 700);
  

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


var indexMenuTabItem;
var dataAttrTab;
var countItemsTabMenuFor
// var parentTab;
// var parentClass;
var countItemsTabMenu = $(".tab-item a").length - 1;


    $(".tab-content").css({"display" : "none"});


    for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

        if( $(".tab-item a:eq("+ countItemsTabMenuFor +")").hasClass("active") ) {

            dataAttrTab = $(".tab-item a:eq("+ countItemsTabMenuFor +")").attr("data-item");

            // parentTab = $(".tab-item a:eq("+ countItemsTabMenuFor +")").parent();

            // parentClass = parentTab.attr("class");

            for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                if ( $(".tab-content:eq("+ countItemsTabMenuFor +")").attr("data-item") == dataAttrTab ) {

                    $(".tab-content:eq("+ countItemsTabMenuFor +")").addClass("active");

                    $(".tab-content:eq("+ countItemsTabMenuFor +")").css({"display":"block"});

                }

            }

        }

    }



    $(".tab-item a").click(function(event) {

        event.preventDefault();

        $(".tab-content").css({"display":"none"});

        indexMenuTabItem = $(".tab-item a").index(this);

        dataAttrTab = $(".tab-item a:eq("+ indexMenuTabItem +")").attr("data-item");

        $(".tab-item a").removeClass("active");

        $(".tab-item a:eq("+ indexMenuTabItem +")").addClass("active");

        $(".tab-content").removeClass("active");

        $(".tab-content").css({"display" : "none"});

        for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

            if ( $(".tab-content:eq("+ countItemsTabMenuFor +")").attr("data-item") == dataAttrTab ) {

                $(".tab-content:eq("+ countItemsTabMenuFor +")").addClass("active");

                $(".tab-content:eq("+ countItemsTabMenuFor +")").css({"display":"block"});

            }

        }

    });
		

});