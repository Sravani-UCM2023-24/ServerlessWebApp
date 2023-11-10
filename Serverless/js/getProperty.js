const resource_url =
  "https://vkkm38khe4.execute-api.us-east-1.amazonaws.com/dev/property";
const form = document.getElementById("create-property-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const fetchOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plainFormData),
    };
  
    // Example condition: Get data only if a specific checkbox is checked
    const shouldGetData = document.getElementById("getDataCheckbox").checked;
    
    if (shouldGetData) {
      fetchOptions.method = "GET";
      fetch(resource_url, fetchOptions)
        .then((response) => response.json())
        .then((data) => {
          // Handle the retrieved data here
          console.log(data);
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