const sidebarToggle = document.querySelector("#sidebar-toggle");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector(".overlay");

function handleSidebar() {
    if (window.innerWidth < 992) {
        sidebar.classList.add("collapsed");
        sidebar.classList.remove("sidebar-collapsed-desktop");
        overlay.classList.remove("active");
    } else {
        sidebar.classList.remove("collapsed");
    }
}

function closeDropdowns() {
    const dropdowns = document.querySelectorAll(".sidebar-dropdown.collapse.show");
    dropdowns.forEach(dropdown => {
        const bsCollapse = new bootstrap.Collapse(dropdown, {
            toggle: false
        });
        bsCollapse.hide();
    });
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".sidebar-link").forEach(link => {
        if (link.getAttribute("href") === currentPath || (currentPath === "/" && link.getAttribute("href") === "#")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

sidebarToggle.addEventListener("click", function () {
    if (window.innerWidth < 992) {
        sidebar.classList.toggle("collapsed");
        overlay.classList.toggle("active");
    } else {
        sidebar.classList.toggle("sidebar-collapsed-desktop");
        if (sidebar.classList.contains("sidebar-collapsed-desktop")) {
            closeDropdowns();
        }
    }
});

overlay.addEventListener("click", function () {
    sidebar.classList.add("collapsed");
    overlay.classList.remove("active");
});

window.addEventListener("resize", handleSidebar);

handleSidebar();
highlightActiveLink();