$(function () {

    //On Post Title and Post Description
    $(document).on("click","#reply", function (event) {
        console.log(event)
        event.preventDefault();
        var newReply = {
            usernme: $("#user_name").val().trim(),
            rep_desc: $("#rep_desc").val().trim(),
            // post_id: $("#post_desc").val().trim()

            // cat_id: $("#cat_id")

        };
        console.log(newReply)
        $.ajax("/api/reply", {
            type: "POST",
            data: newReply
        }).done(function () {
            console.log("New Post: " + newReply);
            //after submit and create new post re-direct to index with all posts
            location.replace("/index");
        })
    })
})