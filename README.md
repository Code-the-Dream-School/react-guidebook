# Lesson 1.6 Teaching Notes 

| **Topic** | **Week** | **Class Website** |
| :---: | :---: | :---: |
| Reusable Components, Imperative React | 1.6 | [Link](https://learn.codethedream.org/) |

## Outline 
- Overview
- Sample Mentor Session
- Common Issues

## Overview 

**Learning Objective:** Students will be ablet to create a reusable input with label component, add a “remove” button to list items.

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

#### Concepts covered

- Reusable Components
- Component Composition
- Imperative React
- Inline Handler

#### Re-usable components

- allows for re-use of structural elements
  - List items
  - Cards
  - Articles
- easiest if items are structurally same and display same types of data
- re-usable components can be generalized enough to handle similar types of structural elements and be configured through props to handle specific implementation
  - text input field, password field, number input - each has a label, a value property, and probably an onChange prop. Types (password, text, date, etc) can be passed in as props to configure.

#### Component composition

- wrapped much the same way as html- by placing the dom element/ component between the opening and closing tag of a component.
- `children` props provides a place in the component to outlet the elements placed between component tags.
- Very common pattern - used to fine-tune the structure of an app and also 3rd-party libraries to "wrap" components with their own functionality.

#### Imperative React

- coding "how to do a thing" vs React mentality of "describing what you want" then allowing React to deal with how to get there.
- sometimes done to implement features from a 3rd-party library

#### Inline handler

- Technique to bind a function prop to the scope of the functional component. This provides access to variables found within that functional component.
- avoids having to create a function in the component whose sole purpose is to invoke a callback from props.
  - `onClick={onRemoveItem(item)}` *`item` would be 'undefined'
  - `onClick={onRemoveItem.bind(null, item)}`
  - `onClick={()=> onRemoveItem(item)}` *more popular*

#### Potential concept demo ideas

- Re-usable components
  - Identical items
  - abstracted items (various inputs, header + footer nav)
- Imperative 3rd party usage
- Mis-coded inline handler (looking for that undefined)

#### Todo list instructions call-outs

- useRef needs more explanation

## End of lesson app capabilities/features

- field auto focuses on every new todo
- a button can remove individual todos
- input field can be used elsewhere if needed

### :thinking: Questions 

Use this time to answer students questions from the lesson materials and assignments. Remember to incorporate teaching strategies:

  - Think aloud: Narrate your thinking to show students how developers approach problems. For example, “When I saw this problem, I decided to approach it by…”
  - Use positive narration. For example, “I appreciate that Raheem has his camera on today” or “That was an excellent question."
  - Warm call on students or practice popcorn calling (students can ask another student for help) if participation is low.

### :nerd_face: Mentor Session Report Form 

Please remember to fill out the [Mentor Session Report Form](https://airtable.com/shrp0jjRtoMyTXRzh) at the end of the session.

## Common Issues 

TBD

:crown: Thanks to Roy Mosby, who created the teaching notes for this lesson, and to Raquel Román-Rodriguez, who created the lesson rubric. 
