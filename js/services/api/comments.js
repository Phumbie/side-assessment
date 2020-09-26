// Contains all functions that control comments on news pages

const submitComment = (formData) => {
  showLoader();
  fetch(baseUrl + `/news/${newsId}/comments`, {
    method: "post",
    body: formData,
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      hideLoader();
      console.log(response);
      alert(`Hello, your comment was successfully submited!`);
      location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

const updateComment = (id) => {
  showLoader();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  if (!name.length || !comment.length) {
    alert("Please complete all form fields");
  } else {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("comment", comment);
    formData.append("newsId", newsId);
    fetch(baseUrl + `/news/${newsId}/comments/${id}`, {
      method: "put",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        editCommentBtn.style.display = "none";
        submitCommentBtn.style.display = "block";
        hideLoader();
        console.log(response);
        alert(`${response.name}'s comment successfully updated!`);
        window.location.hash = "";
        location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }
};

const deleteComment = (id) => {
  showLoader();
  alert("Comment will be deleted!");
  fetch(baseUrl + `/news/${newsId}/comments/${id}`, {
    method: "delete",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      // alert(`${response.name}'s comment successfully deleted!`);
      hideLoader();
      getSingleNews();
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};
