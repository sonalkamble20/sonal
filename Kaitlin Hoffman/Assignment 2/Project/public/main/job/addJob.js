document.addEventListener("DOMContentLoaded", function () {
    // Fetch and display existing jobs for the logged-in user
    const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage
    
    if (!userId) {
        alert("User not logged in. Please log in first.");
        window.location.href = "../login/login.html";
    }
  
    // Display existing jobs when the page loads
    fetch(`http://localhost:3000/job/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data && Array.isArray(data)) {
                displayJobs(data);  // Call the function to display jobs
            }
        })
        .catch(error => {
            console.error("Error loading jobs:", error);
            alert("Failed to load jobs.");
        });
  
    // Handle posting a new job
    document.getElementById("post").addEventListener("submit", function (event) {
        event.preventDefault();
  
        const jobname = document.getElementById("jobname").value.trim();
        const description = document.getElementById("description").value.trim();
  
        if (!jobname) {
            alert("Please enter a job name.");
            return;
        }
  
        const job = {
            jobname,  // Ensure to send the job name in lowercase 'jobname'
            description,
            userId
        };
  
        fetch("http://localhost:3000/job", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(job)
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.JobID) {
                alert("Job posted successfully!");
                // Instead of re-displaying all jobs, append the new one
                appendJobToTable(data);  // Directly append the new job
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to post job.");
        });
    });
  
    // Function to display all jobs in a table-like format
    function displayJobs(jobs) {
        const jobsContainer = document.querySelector("#jobList");  // Corrected to match your table's ID
        jobsContainer.innerHTML = "";  // Clear existing jobs
  
        jobs.forEach(job => {
            const jobRow = document.createElement("tr");
            jobRow.classList.add("job-row");
  
            const jobIdCell = document.createElement("td");
            jobIdCell.classList.add("job-cell");
            jobIdCell.textContent = job.JobID;
  
            const jobNameCell = document.createElement("td");
            jobNameCell.classList.add("job-cell");
            jobNameCell.textContent = job.Jobname;  // Ensure you're accessing job.jobname, not job.JobName
  
            const jobDescCell = document.createElement("td");
            jobDescCell.classList.add("job-cell");
            jobDescCell.textContent = job.Description;
  
            jobRow.appendChild(jobIdCell);
            jobRow.appendChild(jobNameCell);
            jobRow.appendChild(jobDescCell);
  
            jobsContainer.appendChild(jobRow);
        });
    }
  
    // Function to append a new job to the table
    function appendJobToTable(job) {
        const jobsContainer = document.querySelector("#jobList");
  
        const jobRow = document.createElement("tr");
        jobRow.classList.add("job-row");
  
        const jobIdCell = document.createElement("td");
        jobIdCell.classList.add("job-cell");
        jobIdCell.textContent = job.JobID;
  
        const jobNameCell = document.createElement("td");
        jobNameCell.classList.add("job-cell");
        jobNameCell.textContent = job.Jobname;
  
        const jobDescCell = document.createElement("td");
        jobDescCell.classList.add("job-cell");
        jobDescCell.textContent = job.Description;
  
        jobRow.appendChild(jobIdCell);
        jobRow.appendChild(jobNameCell);
        jobRow.appendChild(jobDescCell);
  
        jobsContainer.appendChild(jobRow);  // Append the new job to the table
    }
  });
  