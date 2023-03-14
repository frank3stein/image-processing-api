# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

You can clone this repo to run the project locally, or navigate to the workspace in the Udacity course.

## Project Instructions

To complete this project, you will need to:

* Set up node environment
* Create a new endpoint in the server.js file
* Deploying your system

## Testing

Successful URL responses should have a 200 code. Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.

## License

[License](LICENSE.txt)


Test URL:
![Test Image](./Screenshot%202023-03-14%20at%2016.38.45.png)

http://image-filter-env.eba-j2tesjbh.eu-central-1.elasticbeanstalk.com/filteredimage?image_url=https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg