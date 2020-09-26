const addListenerToForm = () => {
  hideLoader();
  const newsForm = document.getElementById("form");
  // console.log(newsForm);

  newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const avatar = document.getElementById("avatar");
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    // const url = document.getElementById("url").value;
    console.log("submit called");
    if (!title.length || !author.length) {
      alert("Please complete all fields");
    } else {
      const formData = new FormData();
      // formData.append("avatar", avatar.files[0]);
      formData.append("title", title);
      formData.append("author", author);
      // formData.append("url", url);
      submitNewsForm(formData);
    }
  });
};
const newsForm = document.getElementById("form");

const handleSingleNewsDetails = (data) => {
  showLoader();
  const newsDetailsContainer = document.getElementById("news__text-container");
  const newsActions = document.getElementById("newsActions");
  newsActions.innerHTML = "";
  newsDetailsContainer.innerHTML = "";
  newsDetailsContainer.innerHTML = `
            <p class="news__text">
              ${data.title}
            </p>
            <p class="news__author">${data.author}</p>
          `;
  newsActions.innerHTML = `<div>
              <button id="editNewsBtn" class="actions__edit-btn">Edit Post</button>
              <button id="deleteNewsBtn" class="actions__delete-btn">Delete Post</button>
            </div>`;
  const editNewsButton = document.getElementById("editNewsBtn");
  const deleteNewsButton = document.getElementById("deleteNewsBtn");
  deleteNewsButton.addEventListener("click", (e) => {
    deleteNews();
  });
  editNewsButton.addEventListener("click", (e) => {
    editNews(data);
  });
  hideLoader();
};

const handleSingleNewsImages = (data) => {
  showLoader();
  let newsImageContainer = document.getElementById("news__img-container");
  data.forEach((image) => {
    newsImageContainer.innerHTML = `<img class="news__img" src="${image.image}" alt="News image" />`;
  });
  hideLoader();
};

let comments = [];

const handleSingleNewsComments = (data) => {
  showLoader();
  comments = data;
  let commentContainer = document.getElementById("comment-container");

  commentContainer.innerHTML = "";
  data.forEach((commentItem) => {
    commentContainer.innerHTML += `<div class="single-comment">
    <div class="single-comment__img-container">
              <img
                class="single-coment__img"
                src="${commentItem.avatar}"
                alt=""
              />
            </div>
            <div class="single-comment__details">
              <div>
                <p class="single-comment__details__author">${commentItem.name}</p>
              </div>
              <div>
                <p class="single-comment__details__comment">
                  ${commentItem.comment}
                </p>
              </div>
               <div id="comment-actions">
              <div>
                    <button class="edit-comment-btn" onclick="editComment(${commentItem.id})" id="edit-comment-btn">Edit</button>
                    <button id="delete-comment-btn" onclick="deleteComment(${commentItem.id})">Delete</button>
                  </div>
            </div>
            </div>
            </div>`;
  });
  hideLoader();
};

const editComment = (id) => {
  submitCommentBtn.style.display = "none";
  editCommentBtn.style.display = "block";
  let editedComment = comments.filter((comment) => {
    return comment.id == id;
  });
  editedComment = editedComment[0];
  console.log("edit works");
  const name = document.getElementById("name");
  const comment = document.getElementById("comment");
  name.value = editedComment.name;
  comment.value = editedComment.comment;
  window.location.hash = "";
  window.location.hash = "commentForm";

  editCommentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateComment(id);
  });
};

const editNews = (data) => {
  const newsDetailsContainer = document.getElementById("news__text-container");
  let newsImageContainer = document.getElementById("news__img-container");
  newsImageContainer.style.display = "none";
  newsDetailsContainer.innerHTML = " ";
  newsDetailsContainer.innerHTML = `<form id="editNewsForm">
        <label for="title">Title</label>
        <textarea id="title" class="form__input" placeholder="Title">${data.title}</textarea>
        <label for="url">URL</label>
        <input type="text" id="url" value="${data.url}" class="form__input" placeholder="URL" />
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          value="${data.author}"
          class="form__input"
          placeholder="Author"
        />
        <input type="submit" value="Submit" id="editNewsSubmitBtn" />
      </form>`;

  const newsActions = document.getElementById("newsActions");
  newsActions.style.display = "none";
  const editNewsBtn = document.getElementById("editNewsSubmitBtn");
  editNewsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const url = document.getElementById("url").value;
    console.log("submit called");
    if (!title.length || !author.length || !url.length) {
      alert("Please complete all fields");
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("url", url);
      submitEditedNews(formData);
    }
  });
};
