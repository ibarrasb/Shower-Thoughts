$(function () {

    //On Post Title and Post Description
    $("#createbtn").on("click", function (event) {
        event.preventDefault();
        var newPost = {
            post_title: $("#post_title").val().trim(),
            post_desc: $("#post_desc").val().trim(),
            user_id: $("#user_id").val().trim(),
            // cat_id: $("#cat_id")
            
        };
        console.log(newPost)
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