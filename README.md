# ReactJs-Code-Standard-Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



### `Structure`

### API
This folder contain APIs boilerplate which is reusable for entire project for example
const apiRes = await ApiService(`${apiList.API_NAME}`, 'GET')

### Assets
In this we keeping images, logos and css,scss

### Components
This folder contain reusable component we follow DRY code structure

### Helper
This folder include helper functions for common things 

### Pages
We managing view in this folder by using components

### Services
We keep here third party services code like google auth

### Redux
For managing data we use redux that make easy to manage data , state


.gitignore - This file used whenever we want to ignore any folder of file to get in git commit. We can add those details into this files.

index.js - It's a main app file.

package.json - This is the entry level file of the  app and which contains all the basic and dependency version related information.

https://github.com/MoonTechnolabs/IOS-Swift-Code-Standard-Demo/blob/main/readmeAssets/file.png 