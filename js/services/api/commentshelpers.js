// contains helpers functions for comments
const editCommentBtn = document.getElementById("editComment");
const submitCommentBtn = document.getElementById("submitComment");

editCommentBtn.style.display = "none";

const addEventListenerToCommentForm = () => {
  // const commentForm = document.getElementById("commentForm");
  // const submitBtn = document.getElementById("submitComment");

  // Submits form to backend
  submitCommentBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    // const userAvatar = document.getElementById("userAvatar");
    if (!name.length || !comment.length) {
      alert("Please complete all form fields");
    } else {
      const formData = new FormData();
      // formData.append("avatar", userAvatar.files[0]);
      formData.append("name", name);
      formData.append("comment", comment);
      formData.append("newsId", newsId);
      submitComment(formData);
    }
  });
};
