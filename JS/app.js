

//click me

$(document).ready(function(){
	$(".menu2").hide();
  		
	$(".button2").click(function(){
   		$(".menu2").slideToggle('slow');
  	});

  	// begin click to complete 

   $('.list-items').on('click','li', function(e) {
      $(this).toggleClass('done'); 
    });

// begin add new item

	$('.add-new-item').on('keyup', function(e){
		if(e.keyCode === 13){
			addItem();
		}
	})

    $('.add-item-btn').on('click', function(){
    	addItem();
    })


//Deleting Item Lists
	$('.list-items').on("click",".destroy", function(){
		$(this).closest("li").remove();
	})

});

// add new item variable function

var addItem = function(){
	var newItem = $('input.add-new-item').val();
    $('.list-items').prepend('<li>'+ newItem + '<button class="destroy">x</button>'+'</li>');
}


