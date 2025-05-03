let slideIntervals = {};

function startSlideshowForSection(sectionId) {
    const section = document.getElementById(sectionId);
    const slides = section.querySelectorAll('.slide');
    const container = section.querySelector('.photo-slide');   

    if (!slides.length || !container) return;

    let index = 0;

    function showSlideGroup(i) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === i);
        });
    }

    showSlideGroup(index); 

    if (slideIntervals[sectionId]) clearInterval(slideIntervals[sectionId]);

    slideIntervals[sectionId] = setInterval(() => {
        index = (index + 1) % slides.length;
        showSlideGroup(index);
    }, 3000);

    container.addEventListener('mouseenter', () => {
        clearInterval(slideIntervals[sectionId]);
        slideIntervals[sectionId] = null;
    });

    container.addEventListener('mouseleave', () => {
        if (!slideIntervals[sectionId]) {
            slideIntervals[sectionId] = setInterval(() => {
                index = (index + 1) % slides.length;
                showSlideGroup(index);
            }, 3000);
        }
    });
}

function showForm() {
    const modal = document.getElementById('form-modal');
    modal.style.display = 'block'; 
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach((page) => {
        page.classList.remove('active');
        page.style.display = "none";
    });

    let selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('active');
    selectedPage.style.display = "grid";

    startSlideshowForSection(pageId);
}

window.onload = () => {
    document.querySelectorAll('.page').forEach((page) => {
        if (page.id !== 'home-page') {
            page.classList.remove('active');
            page.style.display = "none";
        }
    });

    const activeSection = document.querySelector('.page.active');
    if (activeSection) {
        startSlideshowForSection(activeSection.id);
    }
};

document.getElementById('contact-me-button').onclick = function() {
    showForm();
};

function closeForm() {
    const modal = document.getElementById('form-modal');
    modal.style.display = 'none'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('form-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

