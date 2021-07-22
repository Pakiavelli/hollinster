# PROJECT CATWALK FRONTEND - Hollinster
# Index
<ol>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Prerequisites">Prerequisites</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Module-Description">Module Description</a></li>
    <li><a href="#Tests">Tests</a></li>
    <li><a href="#Author">Author</a></li>
    <li><a href="#Acknowledgements">Acknowledgements</a></li>
</ol>
## Summary
Project Catwalk is a client-facing retail web application, which consists of Product Overview, Related Items & Comparison, Questions & Answers, and Ratings & Reviews. This project was built out using React based on business requirements sent by client. 

## Prerequisites
```sh
Node v14.16.0
npm 7.16.0
```
## Usage
1. After forking the repo, open the CLI within the root directory of the project and run:
```sh
npm install
```
2. Acquire a github personal access token for access to the API and create a config.js file in the root directory with the following format:
```sh
module.exports = {
  token: '',
}
```
3. Compile your files by running:
```sh
npm run react:prod
```
4. Start Server:
```sh
npm start
```
5. The server runs on PORT 3000 on default. Navigate to http://localhost:3000.
## Module Description
The Related Products and Comparison module is the second-most module on the Product Details page. It's functionality can be divided in several pieces:
1. Related Products
   - A carousel that dynamically renders related product images based on the currently displayed product in overview
   - Combines data returned from RESTful API to render product name, category, price, and rating
   - Features left and right arrows to allow user to scroll through images
 
2. Your Outfit
   - Allows user to add or remove products to their 'Your Outfit' carousel list
   - Features left and right arrows to allow user to scroll through images
   - Persisted data client-side by utilizing localStorage
   
3. Comparison Modal 
   - Allows user to compare product features of currently selected product in overview and selected product card in Related Products
   
## Tests
To ensure server is running properly, run:
```sh
npm test
```
## Authors
- Product Overview - Claire Chen
- Related Items & Comparison - Chris Pak
- Ratings & Reviews - Hollin Wakefield
- Questions & Answers - John Yasis
## Acknowledgements
