(function () {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        root.setAttribute("data-theme", "dark");
    }

    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("theme-toggle");
        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                const isDark = root.getAttribute("data-theme") === "dark";
                if (isDark) {
                    root.removeAttribute("data-theme");
                    localStorage.setItem("theme", "light");
                } else {
                    root.setAttribute("data-theme", "dark");
                    localStorage.setItem("theme", "dark");
                }
            });
        }

        const filterButtons = document.querySelectorAll(".filter-btn");
        const cards = document.querySelectorAll(".card");

        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.dataset.filter;

                filterButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

                cards.forEach((card) => {
                    const match = filter === "all" || card.dataset.category === filter;
                    card.classList.toggle("hidden", !match);
                });
            });
        });
    });
})();
