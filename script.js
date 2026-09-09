document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student details
    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;

    // Get marks
    let html = Number(document.getElementById("html").value);
    let bootstrap = Number(document.getElementById("bootstrap").value);
    let javascript = Number(document.getElementById("javascript").value);

    // Validate marks
    if (
        html < 0 || html > 100 ||
        bootstrap < 0 || bootstrap > 100 ||
        javascript < 0 || javascript > 100
    ) {
        alert("Marks must be between 0 and 100.");
        return;
    }

    // Calculate total
    let total = html + bootstrap + javascript;

    // Calculate percentage
    let percentage = (total / 300) * 100;

    // Check subject-wise pass
    let passHTML = html >= 35;
    let passBootstrap = bootstrap >= 35;
    let passJS = javascript >= 35;

    // Final result
    let finalResult =
        passHTML && passBootstrap && passJS
            ? "PASS"
            : "FAIL";


    // Display student details
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRoll").textContent = roll;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayCourse").textContent = course;


    // Display marks
    document.getElementById("displayHTML").textContent = html;
    document.getElementById("displayBootstrap").textContent = bootstrap;
    document.getElementById("displayJS").textContent = javascript;


    // Display subject status
    document.getElementById("statusHTML").textContent =
        passHTML ? "PASS" : "FAIL";

    document.getElementById("statusBootstrap").textContent =
        passBootstrap ? "PASS" : "FAIL";

    document.getElementById("statusJS").textContent =
        passJS ? "PASS" : "FAIL";


    // Display total and percentage
    document.getElementById("totalMarks").textContent = total;

    document.getElementById("percentage").textContent =
        percentage.toFixed(2);


    // Display final result
    document.getElementById("finalResult").textContent = finalResult;


    // Show result section
    document.getElementById("resultSection").classList.remove("d-none");

    // Scroll to result
    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });

});