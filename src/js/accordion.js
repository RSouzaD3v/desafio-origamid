// accordion.js
const accordion = () => {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");

        title.addEventListener("click", function() {
            item.classList.toggle("active");
        });
    });
};

export default accordion;
