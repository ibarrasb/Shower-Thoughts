$(function () {
    //On Post Title and Post Description
    $(document).on("click","#reply", function (event) {
        console.log("works")
        event.preventDefault();
        var newReply = {
           
            post_id: event.target.dataset.id
        };
       
        location.replace("/index/"+newReply.post_id);
    })
})