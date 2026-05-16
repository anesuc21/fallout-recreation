

function alertMe(){
    alert("Me")
}

$(document).ready(function(){    
    alert("Loaded");

    function printThis(el){
        console.log($(this).text())
    }

    $('p').each(printThis);

    $('#main').find('p').addClass('HAH')

    $(document).on('contextmenu', function(){
        return false;
    })

    $(document).on('mousedown', function(event){
        event.stopPropagation();

       if(event.which == 3){

            $('.hidden').removeClass('shown'); 

            if($(event.target).is('img')){
                $('.saveimg, .newtab').addClass('shown');
            }else if($(event.target).is('a')){
                $('.newtab').addClass('shown');
            }

            console.log(event.pageY, event.pageX);

            $('#context').css({
                top: event.pageY,
                left: event.pageX

            })
              $('#context').fadeIn();
            return false;

       }

       $('#context').fadeOut();
        console.log(event.which);

    });

    $(document).on('click',function(event){
        $()
    });

    $('[href = "https://google.com"]').on('click', function(event){
        console.log("linking to google?");
        event.preventDefault();
    });

    $('#text').html("This is now my text");

    var el = document.getElementById('text');
    console.log("EL in Vanilla JS:", el);

    $('[data-trigger="dropdown"]').on('mouseenter',function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave', function(){
            submenu.fadeOut(300);
        });

    });

    $('#prepend, #append, #replace').on('click', function(e){
        e.preventDefault();
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if(action=="prepend"){
            console.log("Prepending ...", content)
            $('#main').prepend('<a href ="#">'+ content + '</a>');
        }else if(action == "append"){
            console.log("Appending...")
            $('#main').append(content)
        }else if(action == "replace"){
            console.log("Appending...")
            $('#main').html(content)
        }

        $('.text').val('');
    });
    
    $('p:contains("Lorem")').html("this has Lorem yea");

    if($(':contains("Lorem")').is("p")){
        console.log("Lorem is inside a paragraph");
    }

    $('textarea').focusin(function(){
        console.log("focused in on the text area");
    });

    $('textarea').focusout(function(){
        console.log("focused out on the text area");
    });

    $('input').focusout(function(){
        if($(this).val().indexOf('@')>-1 && $(this).val().indexOf('.')>-1){
            $('.status').html("Valid Email");
        }else{
            $('.status').html("Your email is invalid plz try again")
        }
    });   

    $('input').focusin(printThis);

    $('input').css({background: '#f00', padding: '10px', borderColor: '#000'});
});