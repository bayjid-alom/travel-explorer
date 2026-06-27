const blogBtn = document.getElementById("blog-btn");
blogBtn.addEventListener("click", function () {
    const destinationSection = document.getElementById("destinations");
    destinationSection.scrollIntoView({
        behavior: "smooth"
    })
})




const readMoreBtn = document.getElementById("read-more-btn");
readMoreBtn.style.transition = 0.3;

readMoreBtn.addEventListener("mouseenter", function () {
    readMoreBtn.style.backgroundColor = "#E64A00"
})

readMoreBtn.addEventListener("mouseout", function () {
    readMoreBtn.style.backgroundColor = "#FF5400"
})