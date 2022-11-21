# Lesson 1.4 Teaching Notes 

| **Topic** | **Week** | **Class Website** |
| :---: | :---: | :---: |
| Lifting State and Props Handling | 1.4 | [Link](https://learn.codethedream.org/) |

## Outline 
- Overview
- Sample Mentor Session
- Common Issues

## Overview 

**Learning Objective:** Students will be able to move the hard-coded to-do list variable into state, add new to-do items to the list, and destructure props.

## Sample Mentor Session 

### :wave: Check-In

#### Check-In Open-Ended Questions 

- Start with an icebreaker from this [icebreaker list](https://docs.google.com/document/d/1WbwKn8B5GfRueq7Zbw0zx_k15aqyIqIs23i_WHI-pPI/edit?usp=sharing). 
- What is something that you are excited to learn more about this week? 

#### Check-In Progress Poll 

- What is your progress on **this week's** materials?

  - [ ] Done
  - [ ] Almost Done
  - [ ] Halfway
  - [ ] Just started
  - [ ] Haven't started

While students are responding to the check-in questions, take attendance. 

### :mag: Content Overview 

Let's review some key terms and concepts from this week's lesson materials: 
 
 - Callback handler
 - Controlled components 
 - Unidirectional data flow
 - Component lifecycle 
 - Nested destructuring 
 
 
### :notebook: Assignment Overview

Let's take a look at the directions for this week's assignment: 

Move Todo List into State
  - [x] Open `/src/App.js`
  - [x] Create new state variable named `todoList` with setter `setTodoList` and default value of an empty Array
  - [x] Pass `todoList` state as a prop named `todoList` to the `TodoList` component
  - [x] Open `/src/TodoList.js`
  - [x] Add `props` as a parameter to the `TodoList` functional component
  - [x] Change `todoList` to reference props instead of the hard-coded variable
  - [x] Delete the hard-coded `todoList` variable
  - [x] Run your application and view in browser
    - [x] Verify that your Todo List is now empty (no list items)

- Control "Add Todo" Input
  - [x] Open `/src/AddTodoForm.js`
  - [x] Create new state variable named `todoTitle` with setter `setTodoTitle`
  - [x] Modify the `<input>` element to be a controlled input
    - [x] Add `value` prop equal to `todoTitle` from component props
    - [x] Add `onChange` prop equal to `handleTitleChange` function reference (we will declare this function in the next step)
  - [x] Above the `handleAddTodo` function, declare a new function named `handleTitleChange` that takes `event` as a parameter
    - [x] First, retrieve the input value from the `event` object and store in variable named `newTodoTitle`
    - [x] Then, call the state setter `setTodoTitle` and pass `newTodoTitle`
  - [x] In the `handleAddTodo` function, remove the `todoTitle` variable and update `onAddTodo` callback handler to pass our `todoTitle` state variable instead
  - [x] Run your application and view in browser
    - [x] Enter a new todo in "Add Todo" form, submit, and verify that the title appears below

- Add New Todo to List
  - [x] Open `/src/App.js`
  - [x] Remove the `newTodo` state variable and the corresponding JSX that displays it
  - [x] Declare a new function named `addTodo` that takes `newTodo` as a parameter
    - [x] Call the `setTodoList` state setter and use the spread operator to pass the existing Objects in the `todoList` Array along with the `newTodo` Object
  - [x] Change the value of the `onAddTodo` prop for `AddTodoForm` to `addTodo`
  - [x] Open `/src/AddTodoForm.js`
  - [x] Inside `handleAddTodo`, update the `onAddTodo` callback prop to pass an Object instead of a String; Object should have the following properties:
    - [x] `title`: equal to `todoTitle`
    - [x] `id`: unique identifier (hint: use `Date.now()` to generate a unique number)
      - _Disclaimer: we are suggesting `Date.now()` for now as a placeholder for unique number generation, but in the future you should not use this_
  - [x] Inside `handleAddTodo`, remove the `reset()` method and replace it with logic to reset the `todoTitle` state to an empty String
  - [x] Run your application and view in browser
    - [x] Enter a todo in "Add Todo" form, submit, and verify item is visible in todo list
    - [x] Enter another todo, submit, and verify that two items are visible in todo list
- Destructure Props
  - [x] Open `/src/TodoList.js` and update `props` to use destructuring
  - [x] Open `/src/TodoListItem.js` and update `props` to use destructuring
  - [x] Open `/src/AddTodoForm.js` and update `props` to use destructuring

### :thinking: Questions 

Use this time to answer students questions from the lesson materials and assignments. Remember to incorporate teaching strategies:

  - Think aloud: Narrate your thinking to show students how developers approach problems. For example, “When I saw this problem, I decided to approach it by…”
  - Use positive narration. For example, “I appreciate that Raheem has his camera on today” or “That was an excellent question."
  - Warm call on students or practice popcorn calling (students can ask another student for help) if participation is low.

### :nerd_face: Mentor Session Report Form 

Please remember to fill out the [Mentor Session Report Form](https://airtable.com/shrp0jjRtoMyTXRzh) at the end of the session.

## Common Issues 

TBD

:crown: Thanks to Raquel Román-Rodriguez, who assembled the rubric for this lesson. 
