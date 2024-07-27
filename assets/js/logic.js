const blogForm = document.querySelector('#blog-form');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const authorEl = blogForm.querySelector('#blog-author').value;
    const titleEl = blogForm.querySelector('#blog-title').value;
    const contentEl = blogForm.querySelector('#blog-content').value;

    // before I save to the array, I want to check to see if the vars are empty
    if (!authorEl || !titleEl || !contentEl) {
        const errorEl = document.querySelector("#error-message");
        errorEl.textContent = "All fields are required.";
        return;
    };

    // declare the array
    const oneBlogPost = {
        author: authorEl,
        title: titleEl,
        content: contentEl
    };

    // retrieves from localStorage
    let oldBlogPosts = localStorage.getItem("Blog Post") || "[]";
    // reverts back to object
    let changedbacktojs = JSON.parse(oldBlogPosts);
    // push object into the array 
    changedbacktojs.push(oneBlogPost);
        // changes to a string so it can be put into localStorage
        const strBlogPost = JSON.stringify(changedbacktojs);

    // save to localStorage
    localStorage.setItem("Blog Post", strBlogPost);


 


    // redirect to the blog page
    window.location.href = "blog.html";
});

console.log(blogForm, "this is hte blog form");