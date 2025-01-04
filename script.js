let events = []; // Array to store event data
let editingIndex = null; // Track the index of the event being edited

// Load data from the JSON file and render the table
async function loadInitialData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Failed to load data.json");
    }
    const data = await response.json();
    events = data.events; // Add the loaded data to the events array
    renderTable(); // Render the table with the loaded data
  } catch (error) {
    console.error("Error loading initial data:", error);
  }
}

// Render table with event data
function renderTable() {
  const tbody = document.querySelector("#eventTable tbody");
  tbody.innerHTML = ""; // Clear existing rows
  events.forEach((event, index) => {
    const row = `
      <tr>
        <td>${event.eventName}</td>
        <td>${event.date}</td>
        <td>${event.time}</td>
        <td>${event.location.building}</td>
        <td>${event.location.room}</td>
        <td>${event.location.address.street}</td>
        <td>${event.location.address.city}</td>
        <td>${event.location.address.zip}</td>
        <td>${event.organizer.name}</td>
        <td>${event.organizer.email}</td>
        <td>${event.organizer.phone}</td>
        <td>
          <button onclick="editEvent(${index})">Edit</button>
          <button onclick="deleteEvent(${index})">Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Handle form submission
document.getElementById("eventForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form refresh

  // Get form values
  const event = {
    eventName: document.getElementById("eventName").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    location: {
      building: document.getElementById("building").value,
      room: document.getElementById("room").value,
      address: {
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value
      }
    },
    organizer: {
      name: document.getElementById("organizerName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
    }
  };

  if (editingIndex !== null) {
    // Update the existing event
    events[editingIndex] = event;
    editingIndex = null;
    document.querySelector("h2").textContent = "Add New Event";
  } else {
    // Add a new event
    events.push(event);
  }

  renderTable(); // Re-render the table
  document.getElementById("eventForm").reset(); // Reset the form
});

// Edit an event
function editEvent(index) {
  const event = events[index];
  editingIndex = index; // Store the index of the event being edited

  // Populate form fields with the event data
  document.getElementById("eventName").value = event.eventName;
  document.getElementById("date").value = event.date;
  document.getElementById("time").value = event.time;
  document.getElementById("building").value = event.location.building;
  document.getElementById("room").value = event.location.room;
  document.getElementById("street").value = event.location.address.street;
  document.getElementById("city").value = event.location.address.city;
  document.getElementById("zip").value = event.location.address.zip;
  document.getElementById("organizerName").value = event.organizer.name;
  document.getElementById("email").value = event.organizer.email;
  document.getElementById("phone").value = event.organizer.phone;

  // Update form header to indicate edit mode
  document.querySelector("h2").textContent = "Edit Event";
}

// Delete an event
function deleteEvent(index) {
  events.splice(index, 1); // Remove the event at the given index
  renderTable(); // Re-render the table
}

// Load data when the page loads
loadInitialData();

