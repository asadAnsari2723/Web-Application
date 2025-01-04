# Web-Application
Given task by Placement Cell

Event Management Web Application
This project is a simple web application that allows users to manage events through an HTML form. The application fetches event data from a data.json file, displays it in a table, and allows users to add, edit, and delete events. 

Features
Display events: Load and display events from a data.json file in a tabular format.
Add new events: Add new events using a form.
Edit events: Edit existing events using a form.
Delete events: Delete events from the list.

Requirements
Browser: Modern browser (Google Chrome, Mozilla Firefox, etc.).
Server: To load local files via HTTP (for fetch to work), you'll need to serve the project using a local web server.


Folder Structure
project-folder/
|-- index.html          # Main HTML file for the app
|-- script.js           # JavaScript code to handle data loading, editing, etc.
|-- data.json           # JSON file containing event data
|-- README.md           # This README file

Setup Instructions

Using Python (for quick testing)
If you have Python installed, you can use its built-in HTTP server. In the terminal, navigate to the project folder and run:

python -m http.server 8000

Then, open a browser and visit 

http://localhost:8000 

to view the app.



