### Lesson 1.7

- [x] Open `src/App.js`
- [x] Delete the `useSemiPersistentState` function call from `App`
- [x] Copy the `useState` and `useEffect` hooks from `useSemiPersistentState` function back into `App`
- [x] Delete the `useSemiPersistentState` function
- [x] Run your application and view in browser
  - [x] Verify that your Todo List still appears correctly

Currently our list data is retrieved synchronously from the browser's storage, but in the next lesson we will be fetching it asynchronously from an API. Let's update our code to mimic asynchronous data fetching:

- [x] Below the `todoList` state, define a `useEffect` React hook with an empty dependency list
- [x] Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters `resolve` and `reject`
  - [x] hint: `Promise()` constructor
- [x] To mimic a loading delay, inside the callback function declare a timeout (hint: `setTimeout` method) with the following arguments:
  - [x] callback: function with no parameters
  - [x] delay time: 2000 milliseconds (2 seconds)
- [x] Inside the timeout callback function, call the parameter `resolve` which is a callback function for when the Promise is successful and pass it an Object with property `data` as a nested empty Object
- [x] Inside the `data` object, add a property `todoList` and set it's value to the initial/default list state (copy from `useState` hook)
- [x] Update the default state for `todoList` to be an empty Array
- [x] View your application in the browser
  - [x] Notice that the Todo List is now empty and doesn't persist after refresh

So what's missing? We are retrieving our list from `localStorage` but we aren't updating our `todoList` state with the data so it remains empty. Let's fix that:

- [x] Chain a `then` method to your `Promise` constructor and pass it a function with parameter `result`
- [x] Inside the function, use your state setter to update the list and pass the `todoList` from your `result` object
- [x] View your application in the browser

You'll notice now that the list is being saved in `localStorage` but after refreshing the page it is reset to empty. This is because our other side-effect is overwriting the data before the asynchronous fetch is complete.

We need a way to know that the data is still loading before trying to update it in `localStorage`.

- [x] After the `todoList` state declaration, create a new state variable named `isLoading` with update function named `setIsLoading` with default value `true`
- [x] Inside the second `useEffect` hook (with `todoList` dependency), add an `if` statement to check that `isLoading` is false before setting `localStorage`

Now we just need to way to turn loading off once the data has been fetched.

- [x] Revisit the `then` callback in the first `useEffect` hook
- [x] After setting the `todoList` state, add another line to set `isLoading` state to `false`
- [x] View your application in the browser
  - [x] Enter a new todo in "Add Todo" form and submit
  - [x] Reload the page and wait 2 seconds
  - [x] Notice that the saved item now appears in the list

Great! Now our data is being saved properly again, but that delay in loading makes it seem like the list is empty at first. Let's add a loading indicator to prevent confusion.

- [x] Inside the `App` JSX, create a new paragraph element above `TodoList` with text "Loading..."
- [x] View your application in the browser
  - [x] Reload the page and notice that the loading message is visible
  - [x] Wait 2 seconds and notice that the Todo List appears but the loading message is still there

We don't want to always show the loading indicator, it should conditionally appear based on our `isLoading` state.

- [x] Using a ternary operator inside JSX, if `isLoading` is `true` render the loading message, otherwise render the `TodoList` component
- [x] View your application in the browser
  - [x] Reload the page and notice that the loading message is visible
  - [x] Wait 2 seconds and notice that the loading indicator disappears when the Todo List becomes visible