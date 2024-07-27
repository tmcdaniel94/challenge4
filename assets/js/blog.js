// const allPosts = document.getElementById('#all-posts');
// const blogPostArray = JSON.parse('strBlogPost');

// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let listOfPosts = document.querySelector('#all-posts');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

const allBlogPosts = localStorage.getItem("Blog Post");
console.log(allBlogPosts);



const javascriptBlogPosts = JSON.parse(allBlogPosts);
// listOfPosts.innerHTML += "";
// listOfPosts.innerHTML += javascriptBlogPosts[0].author;
// listOfPosts.innerHTML += javascriptBlogPosts[0].title;
// listOfPosts.innerHTML += javascriptBlogPosts[0].content;

// for (singleBlogPost of javascriptBlogPosts) {
//   listOfPosts.innerHTML += singleBlogPost.author;
//   listOfPosts.innerHTML += singleBlogPost.title;
//   listOfPosts.innerHTML += singleBlogPost.content;
// }

// listOfPosts.innerHTML += "";

for (singleBlogPost of javascriptBlogPosts) {
  console.log(singleBlogPost);
  const postElement = document.createElement('div');
  postElement.classList.add('post-style');
  postElement.innerHTML = `
  <h3>${singleBlogPost.title}</h3>
  <p><strong>Author:</strong> ${singleBlogPost.author}</p>
  <p>${singleBlogPost.content}</p>
`;

  // postElement.style.border = '1px solid black'; // Add border
  // postElement.style.padding = '10px'; // Add padding
  // postElement.style.display = 'flex';
  // postElement.style.position = 'inline-block';

  listOfPosts.appendChild(postElement);
};

// const singleBlogPosts = document.querySelectorAll(singleBlogPost);
// singleBlogPosts.forEach(post => {
//   post.classList.add('post-style');
// });

// singleBlogPost[0].setAttribute('style', 'border: 1px solid black;');

// // document.singleBlogPost.style.backgroundColor = "red";