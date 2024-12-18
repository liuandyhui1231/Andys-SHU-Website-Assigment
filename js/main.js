
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the course data from the JSON file
    fetch('data/course.json')  // Update with the correct path if needed
        .then(response => response.json())
        .then(courses => {
            // Filter the courses by subject
            const computingCourses = courses.filter(course => course.CourseSubject === 'Computing');
            const artDesignCourses = courses.filter(course => course.CourseSubject === 'Art and design');

            // Function to create table rows dynamically
            const createTableRows = (courses, tableId) => {
                return courses.map(course => {
                    const statusContent = course.NoLongerRecruiting === "true"
                        ? `<span class='status-full'>Full</span>`
                        : `<button class='style-button' type='button' onclick='alert("You have applied, Testing")'>Apply Now</button>`;

                    return `
                        <tr>
                            <td>${course.CourseTitle}</td>
                            <td>${course.CourseType}</td>
                            <td>${course.CourseSummary}</td>
                            <td>${course.CourseAwardName}</td>
                            <td>${course.UcasCode}</td>
                            <td>${course.UcasPoints}</td>
                            <td>${course.YearOfEntry}</td>
                            <td>${course.ModeOfAttendance}</td>
                            <td>${course.StudyLength}</td>
                            <td>${course.HasFoundationYear === 'true' ? 'Yes' : 'No'}</td>
                            <td>${statusContent}</td>
                        </tr>
                    `;
                }).join('');
            };

            // Populate the tables with the filtered data
            document.getElementById('computing-table').innerHTML += createTableRows(computingCourses, 'computing-table');
            document.getElementById('artDesign-table').innerHTML += createTableRows(artDesignCourses, 'artDesign-table');
        })
        .catch(error => {
            console.error("Error fetching the courses data:", error);
        });
});


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