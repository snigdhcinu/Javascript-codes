$(function(){
	$('#add').click(function(){
		var node=$('input').val();
		if(node!==" "){
			var element=$('<li></li>').text(node);
			$(element).append('<button id="remove"><i class="fas fa-times"></i></button>');  // Adding remove button to the list element
			$('#mylist').append(element);  // Appending the new element to our ordered list container.
			$('input').val(" "); // To clear the input area once we are done with input.
		}
	});
	$('#remove').on('click',function(){
		$(this).parent().remove(); // this => button, whose parent is the list entry.
	});
});