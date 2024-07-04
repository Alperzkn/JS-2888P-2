const urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams);
for (const param of urlParams) {
  //console.log(param);
  postId = param[1];
}

function checkUserId() {
  if (postId === "") {
    let enteredPostId = prompt("Enter Post ID");

    if (Number.isInteger(+enteredPostId)) {
      if (enteredPostId < 1 || enteredPostId > 10) {
        console.log("number is not in range");
        alert("UserId cannot be lower than 1 or higher than 10");
        checkUserId();
      } else {
        postId = enteredPostId;
        console.log("number entered correctly");
      }
    } else {
      console.log("not number entered");
      alert("You should enter number");
      checkUserId();
    }
  }
}
console.log(postId);
checkUserId();
//console.log(postId);

async function getPosts() {
  let postsRawData;
  try {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + postId
    );
    postsRawData = await data.json();
    //console.log(postsRawData);
  } catch (err) {
    console.log("Bir hata oluştu" + err);
  }
  //console.log(postsRawData);
  return postsRawData;
}

async function createPosts() {
  const postsPromise = getPosts();
  const posts = await postsPromise;
  const cardsDiv = document.getElementById("cardsDiv");

  if (postId > 100) {
    alert("This post not exist!");
  } else {
    for (i = 0; i < posts.length; i++) {
      //console.log(posts[i]);
      let postEmail = posts[i].email;
      let postOwnerId = posts[i].postId;
      let postName = posts[i].name;
      let postId = posts[i].id;
      let postBody = posts[i].body;

      const cardHTMLData = `
      
                    <div class="card my-3">
                        <div class="card-header d-flex justify-content-between">
                            ${postEmail}
                                <button type="button" class="btn btn-sm btn-outline-success disabled ">
                                    Post ID <span class="badge text-dark">#${postOwnerId}</span>
                                </button>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${postName}</h5>
                            <p class="card-text">${postBody}</p>
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn btn-sm btn-outline-success disabled">
                                    ID <span class="badge text-dark ">#${postId}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
      cardsDiv.innerHTML += cardHTMLData;
    }
  }
}

createPosts();
