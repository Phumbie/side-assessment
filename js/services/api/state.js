const baseUrl = "http://5f6ca1ee34d1ef0016d58592.mockapi.io/api/v2";
const loader = document.getElementById("loader");
const pagination = document.getElementById("pagination");
// const editCommentBtn = document.getElementById("editComment");

// editCommentBtn.style.display = "none";
// const submitCommentBtn = document.getElementById("submitComment");

let newsId = window.location.search.split("=");
console.log(newsId);
if (newsId[1]) {
  newsId = Number(newsId[1]);
}
