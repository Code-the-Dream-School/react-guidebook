### Lesson 1.6

- [x] Inside `/src` directory, create a new file called `InputWithLabel.js`
- [x] Open `/src/InputWithLabel.js`
- [x] Declare and export a new functional React component named `InputWithLabel`
- [x] Move label and input JSX from `AddTodoForm.js` to `InputWithLabel.js` (see below)
  - [x] Open `/src/AddTodoForm.js`
  - [x] Cut (copy and remove) the label and input elements
  - [x] Open `/src/InputWithLabel.js`
  - [x] Inside the multi-line return, paste the elements you copied (hint: use a Fragment)
  - [x] Add `props` as a parameter in the `InputWithLabel` function
  - [x] Update `todoTitle` and `handleTitleChange` references to come from `props`
- [x] Refactor `AddTodoForm.js` to use new `InputWithLabel` component and pass the necessary props
- [x] Run your application and view in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

Great, now we have a reusable component! But what if we wanted to reuse this "Input with Label" in a different form? The "Label" is hard-coded as "Title" which isn't very reusable. Let's fix that:

- [x] Open `/src/InputWithLabel.js`
- [x] Replace the text inside the label element with a new `props` variable named `label`
- [x] Open `/src/AddTodoForm.js`
- [x] Pass a `label` prop to the `InputWithLabel` component with value `"Title"`
- [x] View your application in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

![To-Do Application with Reusable Component](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/reusable-component.png)

- Refactor Input with Label to use Component Composition
- [x] Open `/src/InputWithLabel.js`
- [x] Replace `label` prop with `children` so that any child node(s) are used as the label text
- [x] Open `/src/AddTodoForm.js`
- [x] Refactor the `InputWithLabel` component
  - [x] Remove the `label` prop
  - [x] Change the component to have an open/close tag instead of being self-closing
  - [x] Pass the text `Title` inside the component tags
- [x] View your application in browser
  - [x] Verify that your "Add Todo Form" still appears correctly

- Add Auto-Focus to Input
- [x] Open `/src/InputWithLabel.js`
- [x] Add `autoFocus` prop to input element
- [x] View your application in browser
  - [x] Verify that input element is focused on page load

![To-Do Application with Focused Input](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/imperative-focus.png)

Now the input is focused automatically, but what happens when you submit the "Add Todo" form? Focus is lost! Let's update our code so the input element is focused on every render:

- [x] Open `/src/InputWithLabel.js`
- [x] Use the `useRef` React hook to create an imperative ref named `inputRef`
- [x] Define a `useEffect` React hook with an empty dependency list
- [x] Inside the side-effect handler function, call the `focus()` method on the current `inputRef`
- [x] Remove the `autoFocus` prop on the input element
- [x] Add a `ref` prop with value `inputRef` on the input element
- [x] View your application in browser
  - [x] Verify that input element is focused on page load
  - [x] Enter a new todo in "Add Todo" form and submit
  - [x] Verify that input element is re-focused automatically

- Add "Remove" Button to List Items
- [x] Open `/src/TodoListItem.js`
- [x] Add a button element, type "button", inside the list item with text "Remove"
- [x] Open `/src/App.js`
- [x] Define a new handler function named `removeTodo` with parameter `id`
  - [x] Inside this function, remove the item with the given `id` from `todoList`
    - hint: `filter` or `splice` methods
  - [x] Call the `setTodoList` state setter and pass the new or modified Array
- [x] Pass `removeTodo` as a callback handler prop named `onRemoveTodo` to the `TodoList` component
- [x] Open `/src/TodoList.js`
- [ ] Pass `onRemoveTodo` prop as a callback handler prop named `onRemoveTodo` to the `TodoListItem` component
- [x] Open `/src/TodoListItem.js`
- [x] Add an `onClick` prop to the button element and pass a function that calls `onRemoveTodo` from props with the current item id as an argument
- [x] View your application in browser
  - [x] Click the "Remove" button next to any list item
  - [x] Verify that the corresponding item is removed from the list
  - [x] Refresh the page and verify that the item is still removed

![To-Do Application with Remove Buttons](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/remove-handler.png)
