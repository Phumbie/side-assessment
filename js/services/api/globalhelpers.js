const createNewsCard = (data) => {
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";
  data.forEach((newsItem) => {
    blogList.innerHTML += `<div class="blog-list__item">
    <a href="news.html?id=${newsItem.id}">
          <div class="blog-list__item__img">
            <img
              src="${newsItem.avatar}"
              alt="News avatar"
            />
          </div>
          <div class="blog-list__item__text">
            <p>${newsItem.title}</p>
          </div>
          </a>
        </div>`;
  });
};

const getNextNewsPage = () => {
  if (currentNewsPage > 5) {
    return;
  } else {
    currentNewsPage += 1;
    getAllNews(currentNewsPage);
  }
};

const getPreviousNewsPage = () => {
  if (currentNewsPage < 2) {
    return;
  } else {
    currentNewsPage -= 1;
    getAllNews(currentNewsPage);
  }
};
