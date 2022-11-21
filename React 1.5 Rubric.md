### Lesson 1.5

- [x] Open `/src/App.js`
- [x] Define a `useEffect` React hook with `todoList` as a dependency
- [ ] Inside the side-effect handler function, save the `todoList` inside `localStorage` with the key `"savedTodoList"`
    - Hint: `localStorage.setItem` method
- [x] Run your application and view in browser
    - [x] Enter a new todo in "Add Todo" form and submit
    - [x] Open your Local Storage panel in the DevTools
        - In Chrome: DevTools > Application > Local Storage > localhost
    - [x] Verify that your `"savedTodoList"` item exists
    - [x] Notice that the value, however, is not readable (see below)

![local storage object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-object.png)

- [x] Open `/src/App.js`
- [x] Update your side-effect function to convert `todoList` to a string before saving in `localStorage`
    - Hint: `JSON.stringify` method
- [x] View your application in browser
    - [x] Clear your Local Storage
        - In Chrome: DevTools > Application > Storage > Click "Clear site data"
    - [x] Repeat the same steps from above
    - [x] Notice that the value is completely readable as a string (see below)

![Local Storage with List saved as Object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-string.png)

Now your list is saved in Local Storage, but when you refresh the page? It still disappears!

This is because we wrote the list data to Local Storage but we aren't reading it when the application is rendered. Let's fix that:

- [x] Open `/src/App.js`
- [x] Update the default state for `todoList` to read your `"savedTodoList"` item from `localStorage`
    - Hint: `localStorage.getItem` method
- [x] View your application in browser
    - [x] Notice that there is an error, `todoList` is not an Array

How could our list not be an Array? Right! We turned it into a string before saving in Local Storage. So now that we're ready to use the value, we need to turn it back into an Array.

- [x] Open `/src/App.js`
- [x] Update your default state to parse the value of the `"savedTodoList"` item
    - Hint: `JSON.parse` method
- [x] View your application in browser
    - [x] Notice that your previous todo item(s) are still visible after refreshing the page

- Create Custom Hook
  - [x] Open `/src/App.js`
  - [x] Above the `App` functional component, create a new function named `useSemiPersistentState` which will be a custom hook
  - [x] Cut (copy/remove) the `useState` and `useEffect` hooks from `App` into `useSemiPersistentState`
  - [x] Add a `return` statement in `useSemiPersistentState` that returns the `todoList` state variable and setter in an Array (just like how it's returned from the `useState` hook)
  - [x] Update `App` to use the new custom hook
      - Hint: Copy the `useState` hook from before, but change `useState` to the custom hook `useSemiPersistentState` (no arguments)
  - [x] View your application in browser
      - [x] Verify that your Todo List still appears correctly

- Fragments
  - [x] Open `/src/App.js` and update the JSX to use a Fragment
