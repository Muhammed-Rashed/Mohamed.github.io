document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalStatus = document.getElementById("modalStatus");
    const modalCategory = document.getElementById("modalCategory");
    const modalTech = document.getElementById("modalTech");
    const modalLinks = document.getElementById("modalLinks");
    const closeBtn = document.querySelector(".modal .close");

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.querySelector("h3").textContent;
            modalDescription.textContent = card.querySelector(".author").textContent;
            modalStatus.textContent = card.dataset.status;
            modalCategory.textContent = card.dataset.category;
            modalTech.textContent = card.dataset.tech;

            // Add links (if GitHub or download available)
            modalLinks.innerHTML = "";
            const githubLink = card.querySelector(".fa-github")?.closest("a");
            const downloadLink = card.querySelector(".fa-download")?.closest("a");

            if (githubLink) {
                modalLinks.innerHTML += `<a href="${githubLink.href}" target="_blank">View on GitHub</a><br>`;
            }
            if (downloadLink) {
                modalLinks.innerHTML += `<a href="${downloadLink.href}" download>Download</a>`;
            }

            modal.style.display = "block";
        });
    });

    // Close when clicking the "x"
    closeBtn.addEventListener("click", () => modal.style.display = "none");

    // Close when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
