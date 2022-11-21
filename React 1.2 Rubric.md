## End of Lesson App Capabilities/Features

- Todo list renders same as previously, still static
- added form containing a label, input and button
- form does not do anything but can field can be typed in
- when button pressed, page will refresh (this is undesired but will be fixed) which will clear out the input

## Directions 

- [x] Open the src/App.js file
- [x] Remove the existing JSX from the component
- [x] Create a level-one heading that says "Todo List"
- [x] Create an unordered list (`<ul>`)
- [x] Above the `App()` function, create an empty Array and store it in a variable named `todoList`
- [x] Inside the Array, create at least 3 Objects with the following properties:
  - [x] id: unique identifier (ex. 1, 2, 3)
  - [x] title: summary of the todo item (ex. "Complete assignment")
- [x] Inside your unordered list, insert a JavaScript expression
  - hint: {}
- [x] Inside the JavaScript expression, map over your `todoList` array
- [x] For each Object in the Array, return a list item (`<li>`) with the following:
  - [x] key attribute with value of id property
  - [x] inner text content with value of title property
