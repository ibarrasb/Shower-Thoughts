$(function () {

    //On Post Title and Post Description
    $(document).on("click","#reply", function (event) {
        console.log(event)
        event.preventDefault();
        var newReply = {
            usernme: $("#user_name_" + event.target.dataset.id).val().trim(),
            rep_desc: $("#rep_desc_" + event.target.dataset.id).val().trim(),
            post_id: event.target.dataset.id



        };
        console.log("NEW REPLY!" + newReply)
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