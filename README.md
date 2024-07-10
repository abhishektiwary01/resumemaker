# AlmaBetter Frontend Capstone Project

## Resume-Builder

Introducing Resume Builder: a cutting-edge React application designed to empower you in creating compelling resumes effortlessly. With its intuitive interface, Resume Builder allows you to seamlessly customize every aspect of your resume, showcasing your distinctive skills and professional experience with clarity and style.

Elevate yourself and leave a lasting impact with Resume Builder—a tool crafted to help you secure your dream job. Begin shaping your future today with a tool designed to set you apart from the crowd.

**Pick your template - Fill in the details and boom! Your resume is ready to preview and download.**

## Installation

Clone this repository in your local machine and install the needed dependencies

Type **npm start** in terminal to start the application after installing the dependencies using **npm install <package_name>**

## Technologies and Libraries used

- React
- React-router-dom
- React-hook-form
- Redux
- jspdf
- Material UI and Icons
- Tailwing-css

## Application Folder Structure

```
├── public/
│	├── index.html
│    	├──images/
│		├── template1.png
│		├── template2.png
│		├── template3.png
│		├── template4.png	
├──src/
│	├──App.js
│	├──App.css
│	├──App.test.js
│	├──index.css
│	├──index.js
│	├──setupTests.js
│	├──Components/
│		├──images/
│			├──LOGO.png
│			├──Right.png
│			├──aboutus.png
│			├──download.png
│			├──nodata.png
│   	├── Education.jsx
│		├──GettingStarted.jsx
│		├──Keyskills.jsx
│		├──Myresume.jsx
│		├──PersonalInformation.jsx
│		├──Workexperience.jsx
│	├──Data/
│		├──data.js
│	├──Pages/
│		├──About US/
│			├──Aboutus.jsx
│		├──Details Filing/
│			├──Detailfilling.jsx
│			├──sidebar.css 
│		├──Home/
│			├──TempleteCard.jsx
│			├──Templetes.jsx
│		├──Preview/
│			├──Preview,jsx
│	├──Redux/
│		├──actions/
│			├──actions.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──constants/
│			├──typeCodes.js
│		├──reducers/
│			├──initialState.js
│			├──rootReducer.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──store
│			├──store.js
│	├──Templetes/
│		├──Resume1.css
│		├──Resume1.jsx
│		├──Resume2.jsx
│		├──Resume3.css
│		├──Resume3.jsx
│		├──Resume4.css
│		├──Resume4.jsx
├──index.js   
├──package-lock.json
├──package.json
└──tailwind.config.js
```

## Components and Pages of Application:

**Template Selection** - From this component user can choose their favourite template.

![template selection](https://github.com/abhishektiwary01/resumemaker/assets/109284617/9f212160-6944-4136-a41d-3f57c3351964)


**Details Filling Page** - From this component user can add their details of personal info, education, experience and skills.

![perosnal](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/b4142cb3-d785-40ce-841e-396f200c8764)

**Preview Page** - The user will see their resume in its final form in this component, and once everything is finished, they can use the save button to downlaod it in PDF format.

![preview](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/7c69597f-c7ce-46bc-b5b1-5803a954012c)

**My Resume Page** - This component shows the resume that user saved.

![myresume page](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/b68d563d-87a6-41a4-ba02-63c94b971026)

**Abouts Us** 

![About Us](https://github.com/nikhil-jangde/Resume-Builder-Almabetter/assets/112394456/ca33b437-4bda-49f7-b899-ca5a3722f8e4)

## Links for the project

Deployment Link : 

## Developed By-
- Abhishek Tiwari
