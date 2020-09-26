let currentNewsPage = 1;

const getAllNews = (page = 1) => {
  loader.style.display = "block";
  pagination.style.display = "none";
  fetch(baseUrl + `/news?page=${page}&limit=10`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      window.scrollTo(0, 0);
      loader.style.display = "none";
      pagination.style.display = "block";
      console.log(response);
      createNewsCard(response);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

const getSingleNews = () => {
  addEventListenerToCommentForm();
  loader.style.display = "block";
  let newsId = window.location.search.split("=");
  console.log(newsId);
  newsId = Number(newsId[1]);
  getSingleNewsComments(newsId);
  getSingleNewsImages(newsId);
  fetch(baseUrl + `/news/${newsId}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      handleSingleNewsDetails(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSingleNewsComments = (id) => {
  fetch(baseUrl + `/news/${id}/comments`)
    .then((response) => {
      console.log("comments");
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      handleSingleNewsComments(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

getSingleNewsImages = (id) => {
  fetch(baseUrl + `/news/${id}/images`)
    .then((response) => {
      console.log("images");
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      handleSingleNewsImages(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const submitNewsForm = (formData) => {
  showLoader();
  fetch(baseUrl + "/news", {
    method: "post",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      hideLoader();
      console.log(response);
      alert(`${response.author}, your post has been submitted!`);
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error);
    });
};

const deleteNews = () => {
  alert("News will be deleted!");
  showLoader();
  fetch(baseUrl + `/news/${newsId}`, {
    method: "delete",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      hideLoader();
      window.history.back();
      console.log(response);
      alert("News successfull deleted");
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

const submitEditedNews = (formData) => {
  fetch(baseUrl + `/news/${newsId}`, {
    method: "put",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      alert("News post successfully updated");
      handleSingleNewsDetails(response);
      let newsImageContainer = document.getElementById("news__img-container");
      newsImageContainer.style.display = "block";
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};
