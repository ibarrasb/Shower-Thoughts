$(function () {

    //On Post Title and Post Description
    $(document).on("click",".comment", function (event) {
        
        event.preventDefault();
        console.log("WORKSSSSSSSSSSSS!!!!!!!!!")
        var viewPost = {
            
            post_id: event.target.dataset.id



        };  
        location.replace("/index/"+ viewPost.post_id);
    
            //after submit and create new post re-direct to index with all posts
          
        
    })
})