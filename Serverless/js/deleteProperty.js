const resource_url =
  "https://vkkm38khe4.execute-api.us-east-1.amazonaws.com/dev/property";
const form = document.getElementById("create-property-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const fetchOptions = {
      method: "DELETE",  // Use DELETE method for deleting data
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plainFormData),
    };
  
    // Example condition: Delete data only if the checkbox is checked
    const shouldDeleteData = document.getElementById("deleteDataCheckbox").checked;
  
    if (shouldDeleteData) {
      fetch(resource_url, fetchOptions)
        .then((response) => {
          if (response.ok) {
            // Data successfully deleted
            console.log("Data deleted successfully");
          } else {
            // Handle errors if the deletion was not successful
            console.error("Failed to delete data");
          }
        })
        .catch((error) => {
          // Handle any errors that occur during the fetch request
          console.error(error);
        });
    } else {
      // Perform other actions if the condition is not met
    }
  
    form.reset();
  });