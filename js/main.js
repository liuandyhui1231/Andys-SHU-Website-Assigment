document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const body = document.body;

    // Toggle navigation menu and blur effect
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        body.classList.toggle("blurred");
    });

    // Close menu when clicking outside
    window.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && event.target !== navToggle) {
            navMenu.classList.remove("active");
            body.classList.remove("blurred");
        }
    });

    // Fetch JSON data from the `data` folder and populate tables
    fetch("data/course.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Course data fetched successfully:", data); // Debugging log
            populateTable(data);
        })
        .catch(error => console.error("Error loading course data:", error));

    // Function to dynamically populate tables based on JSON data
    function populateTable(courseData) {
        const tables = document.querySelectorAll(".table-container table");

        // Clear existing rows except headers in all tables
        tables.forEach(table => {
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }
        });

        // Append rows to the respective subject tables
        courseData.forEach(course => {
            // Find the correct table by matching the course subject
            const table = Array.from(tables).find(tbl =>
                tbl.previousElementSibling.textContent.trim() === course.CourseSubject
            );

            if (table) {
                const row = table.insertRow();

                // Determine content for the "Status" column
                const statusContent = course.NoLongerRecruiting === "true"
                    ? `<span class='status-full'>Full</span>`
                    : `<button class='style-button' type='button' onclick='alert("You have applied, Testing")'>Apply Now</button>`;

                // Insert data into the new row
                row.innerHTML = `
                    <td>${course.CourseTitle}</td>
                    <td>${course.CourseType}</td>
                    <td>${course.CourseSummary}</td>
                    <td>${course.CourseAwardName}</td>
                    <td>${course.UcasCode || "N/A"}</td>
                    <td>${course.UcasPoints || "N/A"}</td>
                    <td>${course.YearOfEntry}</td>
                    <td>${course.ModeOfAttendance}</td>
                    <td>${course.StudyLength}</td>
                    <td>${course.HasFoundationYear === "true" ? "Yes" : "No"}</td>
                    <td>${statusContent}</td>
                `;
            }
        });
    }

    // Homepage Headline Animation (if applicable)
    window.addEventListener("load", () => {
        const headerElements = document.querySelectorAll(".header-animated");
        headerElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 500);
        });
    });
});

