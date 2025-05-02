
function handleSubmit(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const mascot = document.getElementById("mascot").value.trim();
    // Set the name and mascot above the header
    const nameMascotDisplay = document.getElementById("name-mascot-display");
    nameMascotDisplay.innerHTML = `<h1>${name || 'Nicholas Goff'} ~ ${mascot || 'Nimble Goldfish'}</h1>`;

    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value.trim();
    const personal = document.getElementById("personal").value.trim();
    const professional = document.getElementById("professional").value.trim();
    const academic = document.getElementById("academic").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const platform = document.getElementById("platform").value.trim();
    const interesting = document.getElementById("interesting").value.trim();
    const share = document.getElementById("share").value.trim();
    const agreement = document.getElementById("agreement");

    if (!agreement.checked) {
        alert("You must agree to the terms before submitting.");
        return;
    }

    const courseElements = document.querySelectorAll(".course");
    const courses = Array.from(courseElements).map((input) => input.value.trim());

    let outputDiv = document.getElementById("output");

    
    const imageSrc = image ? URL.createObjectURL(image) : "images/IMG_0073.JPG";

    
    let outputHTML = "";

    
    /*if (!name && !mascot) {
        outputHTML += `<h2>${"Nicholas Goff ~ Nimble Goldfish"}</h2>`;
    } else {
        outputHTML += `<h2>${name || 'Nicholas Goff'} ~ ${mascot || 'Nimble Goldfish'}</h2>`;
    }*/
        

    
    outputHTML += `
    <figure>
        <img src="${imageSrc}" alt="Uploaded Image" width="50%">
        <figcaption>${caption}</figcaption>
    </figure>
    `;

    
    outputHTML += `
    <ul>
        <li><span class="bold">Personal Background:</span> ${personal}</li>
        <li><span class="bold">Professional Background:</span> ${professional}</li>
        <li><span class="bold">Academic Background:</span> ${academic}</li>
        <li><span class="bold">Background in this Subject:</span> ${subject}</li>
        <li><span class="bold">Primary Computer Platform:</span> ${platform}</li>
        <li><span class="bold">Courses I'm Taking &amp; Why:</span>
            <ol>
                ${courses.map((course) => {
                    const courseParts = course.split(" - ");
                    return `<li><span class="bold">${courseParts[0]}</span> - ${courseParts.slice(1).join(" - ")}</li>`;
                }).join('')}
            </ol>
        </li>
        <li><span class="bold">Interesting Item to Remember me by:</span> ${interesting}</li>
        <li><span class="bold">I'd also like to share:</span> ${share}</li>
    </ul>
    `;

    
    outputDiv.innerHTML = outputHTML;
    outputDiv.style.display = "block";
    document.getElementById("intro-form").style.display = "none";
    document.getElementById("reset-form").style.display = "block";
}


function resetForm() {
    document.getElementById("intro-form").reset();
    document.getElementById("intro-form").style.display = "block";
    document.getElementById("output").style.display = "none";
    document.getElementById("reset-form").style.display = "none";
    document.getElementById("name-mascot-display").innerHTML = '';

}


function handleReset() {
    document.getElementById("reset-form").style.display = "none"; 
}


function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const newCourseWrapper = document.createElement("div");
    newCourseWrapper.classList.add("course-wrapper");
    newCourseWrapper.innerHTML = `
        <input type="text" class="course" placeholder="Course and why you chose it" required>
        <button type="button" class="remove-course">Remove</button><br>
    `;
    coursesDiv.appendChild(newCourseWrapper);

    
    const removeButton = newCourseWrapper.querySelector('.remove-course');
    removeButton.addEventListener('click', function() {
        newCourseWrapper.remove();
    });
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("intro-form").addEventListener("submit", handleSubmit);
    document.getElementById("intro-form").addEventListener("reset", handleReset);

    
    const removeButtons = document.querySelectorAll('.remove-course');
    removeButtons.forEach((button) => {
        button.addEventListener('click', function() {
            button.closest('.course-wrapper').remove();
        });
    });
});
