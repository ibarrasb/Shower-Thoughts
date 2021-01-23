$(function () {

    //On Post Title and Post Description
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newPost = {
            post_title: $("#post_title").val().trim(),
            post_desc: $("#post_desc").val().trim(),
            // cat_id: $("#cat_id")
            
        };
        $.ajax("/api/create",{
            type: "POST",
            data: newPost
        }).then (function(){
            console.log("New Post: " + newPost);
            //after submit and create new post re-direct to index with all posts
            location.replace("/api/index");
        })

    })
})