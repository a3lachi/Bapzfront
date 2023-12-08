

<h1>Bapz</h1>

I built this e-commerce website out of liking Bape clothing, I used Django in the backend and React in the frontend.
https://bapzfront.vercel.app/
<br>

I added an Express JS backend with a Swagger.
<br>

Front End is unfinished and personally i would give it a 4/10, I learnt how React work, the unfinished work is labour work, I'd rather focus on learning than executing, here a list of ideas to add :
  - When loading products page, containers should envelope the component receiving the fetched data, this way a squelette is fixed and when fetching ends  it gets placed smoothly.
  
  - User data management architecture : I choosed to fetch for data when necesseray and store only the JWT in the browser. Redux handle the states        management of the application.
  
  - Mobile CSS : add responsive features to the app which is equal to building another design, although some components can be reused a mobile buit app is the go.
  
  - CSS : more design and enhanced user experience.
  
  - A reliable image storing solution, my backend deployment solution can't handle more than 50mb of generated static build files, the backend on localhost store the images in the public directory and the database contain the products name, I scrapped the images from the official site(you can find the scrapping script in python) and named each of by name of product, I added another layer of time cutting which is to define an object images={A:[ABape..png],B:[BapeShirt...png],C:[CamoMoon..png]...Z:[..]} that also can be more and more optimized, make it recursive enough to cut as much image fetching time request as possible, but, I couldn't deploy this solution and serve it as serveless function to the frontend with Express JS. To resolve this  I wen with imgbb which offers an API for storing images abd returns the url (you can find the API POST script) and then stored the url mapped with the prodcut name. The official website images urls use a redirect that couldn't resolve to image in my Front End.
  
<h1>Overview</h1>
Building a nice user experience or UI wasn't my goal. I focused on functionalities. 
<br>
<br>
<img width="1133" alt="Screenshot 2023-03-31 at 01 59 49" src="https://user-images.githubusercontent.com/55606953/228997919-a28bf2cc-f4ab-467d-b39b-51b73d8cc554.gif">

<br>
<h1>React Frontend</h1>
<img width="1133" alt="Screenshot 2023-03-31 at 01 59 49" src="https://user-images.githubusercontent.com/55606953/228990905-97b59dbb-09d0-42b2-94ae-fc5e3bf64df1.png">


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
