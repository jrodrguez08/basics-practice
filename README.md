# NodeJS - ReactJS beginners project

Working NodeJS and ReactJS example to show usual features on a web app such as login, CRUD operations.

Steps to run the project:
* Create account in [MongoDB Atlas](https://cloud.mongodb.com) and create a cluster for the project
* Create a **credentials.js** file in project root and export an object with the user and password for your cluster in
[MongoDB Atlas](https://cloud.mongodb.com)
```javascript
module.exports = {
  dbUser: <user>,
  dbPassword: <password>
};
```
* Run npm install
* Run npm start