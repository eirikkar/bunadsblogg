$(document).ready(function(){
    $('#delete-post').on('click', function(e){
    var $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type:'DELETE',
            url: '/post/'+id,
            success: function(response){
                alert('Sletter inlegg...');
                window.location.href='/';
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});


CKEDITOR.replace('textarea', {
    uploadcare: {
      publicKey: '56df5efda70c13aa1cd3', // set your public API key here
      multiple: true, // allow multi-file uploads
      crop: '1:1', // set crop options when handling images
      /* feel free to add more “object key” options here */
    },
  })


