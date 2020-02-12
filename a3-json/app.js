
document.getElementById('getPosts').addEventListener
('click', getPosts);

document.getElementById('getComment').addEventListener
('click', getComment);

document.getElementById('getPhotos').addEventListener
('click', getPhotos);

document.getElementById('getUsers').addEventListener
('click', getUsers);


function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            return response.json(); 
        })
        .then(function(data){
            let output = '<h2>Posts</h2>';
            data.forEach(function(posts){
                output += 
                `
                <div class="getpost_wrap">
                    <h3> ID </h3> 
                    <p>${posts.id}</p>
                    <h3 class="green"> TITLE </h3> 
                    <p>${posts.title}</p>
                    <h3 class="blue"> POST </h3>
                    <p> ${posts.body}</p>
                </div>
                `
            });
            document.getElementById('output').innerHTML = output;
 
         })

     }

function getComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function(response){
            return response.json(); 
        })
        .then(function(data){
            let output = '<h2>comment</h2>';
            data.forEach(function(comment){
            output += `
                <div class="getcomment_wrap">
                    <h3 class="purple">Post ID</h3>
                    <p>${comment.postId} </p>
                    <h3 class="orange">ID</h3>
                    <p>${comment.id} </p>
                    <h3 class="yellow">NAME</h3>
                    <p>${comment.name} </p>
                    <h3 class="red">E-mail</h3>
                    <p>${comment.email} </p>
                    <h3 class="blue">comment</h3>
                    <p>${comment.body} </p>
                </div>
                           
                    `;
            });
            document.getElementById('output').innerHTML = output;
             })
         }


    function getPhotos(){
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(function(response){
                return response.json(); 
            })
            .then(function(data){
                let output = '<h2>photos</h2>';
                data.forEach(function(photos){
                output += 
                    `
                        <div class="getphoto_wrap">  
                            <img class="getphoto_item" src="${photos.thumbnailUrl}">  
                            <p class="getphoto_item">Album ID: ${photos.albumId}</p>   
                            <p class="getphoto_item">ID: ${photos.id}</p>  
                            <p class="getphoto_item">URL: ${photos.url}</p>  
                            <p class="getphoto_item">TITLE: ${photos.title}</p>    
                        </div>    
                          
                    `;
                });
                document.getElementById('output').innerHTML = output;
                })
             }
    

    // <ul>
    //     <li class="cards__item">
    //         <div class="card">
    //             <div class="card__image card__image--fence"></div>
    //             <div class="card__content">
    //                 <div class="card__title">Flex</div>
    //                 <p class="card__text">This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
    //                 <button class="btn btn--block card__btn">Button</button>
    //             </div>
    //         </div>
    //     </li>
    // </ul>






    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                return response.json(); 
            })
            .then(function(data){
                let output = '<h2>Users</h2>';
                data.forEach(function(users){
                output += 
                `
                    <div class="getuser_wrap">
                        <h3>ID</h3>
                        <div class="getuser_item">${users.phone} </div>
                        <h3>Name</h3>
                        <div class="getuser_item">${users.name} </div>
                        <h3>Email</h3>
                        <div class="getuser_item">${users.email} </div>                          
                    </div>                
                     `;
                 });
                document.getElementById('output').innerHTML = output;
                     })
            }


    


