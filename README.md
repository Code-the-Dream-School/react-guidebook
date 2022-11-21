# Lesson 1.3 Teaching Notes

| **Topic** | **Week** | **Lesson** |
| :---: | :---: | :---: |
| Props, State, and Handlers | 1.3 | [link](https://learn.codethedream.org/react-fundamentals-react-dom-and-components/) |

## Outline

- [:telescope: Overview](#telescope-overview)
- [:wave: Check-In](#wave-check-in)
  - [Vocabulary Review](#vocabulary-review)
  - [Knowledge Check-In](#knowledge-check-in)
- [:bulb: Main Concepts](#bulb-main-concepts)
-  [:question: Additional Questions](#question-additional-questions)

## :telescope: Overview

**Learning Objective**: Students will be able to Create a “To-do list item” component and move new list items into that component, 
enable form submission, store “new to-do” within React state.

## :wave: Check-In

#### Check-In Open Question

- Start with an icebreaker from this [icebreaker list](https://docs.google.com/document/d/1WbwKn8B5GfRueq7Zbw0zx_k15aqyIqIs23i_WHI-pPI/edit?usp=sharing). 
- What is something that you are excited to learn more about this week? 

#### Progress Poll 

- What is your progress on **this week's** materials?

  - [ ] Done
  - [ ] Almost Done
  - [ ] Halfway
  - [ ] Just started
  - [ ] Haven't started

## :mag: Review

Let's review some key terms and concepts from last week's lesson: [*React DOM and Components*](https://learn.codethedream.org/react-fundamentals-react-dom-and-components/).

### Vocabulary Review

- Instantiate
- DOM
- Declaration
- Arrow Function
- Callback Function
- Implicit Return

## :bulb: Main Concepts

### Props

- information from parent component for child component to use (how parent communicates with child)
- called "props" for properties. Potentially includes children elements if any are placed between opening and closing tags.

### State

- data that describes the values being used inside the app.

### Handler function in JSX

- HTML + JS uses event handlers: addEventListener(type, listener)
  - events eg: "click", "resize", "keyup"
  - listener is callback function that does something when event fires on target
- React uses synthetic events that closely mirror regular events but normalized across browsers to minimize behavioral variations
  - conventionally named with "on" prefix then camelCase
  - ? maybe something about bubble vs capture phases
- The "handler function" is the callback function that is called when the synthetic event is triggered
  - defined inline or outside of jsx then provided as a value for the event listener (differentiate between giving a function as a value vs a function's return value)
  - inline: `onClick={(evt) => console.log(evt.target.value)}`
  - as reference w/o args: `onClick={printHi}`
  - as reference w/args: `onClick=((evt) => printEvent(evt))`
  - don't invoke a function inside an event listener unless it returns a function

## :question: Additional Questions

Use this time to answer any additional questions from students. Remember to incorporate teaching strategies:

- Think aloud: Narrate your thinking to show students how developers approach problems. For example, “When I saw this problem, I decided to approach it by…”
- Use positive narration. For example, “I appreciate that Raheem has his camera on today” or “That was an excellent question."
- Warm call on students or practice popcorn calling (students can ask another student for help) if participation is low.

### End of lesson app capabilities/features

- loads todos from array
- submission no longer refreshes page
- submit button does:
  - fills input content into the paragraph tag
  - console.logs same input value
  - clears field value

## :nerd_face: Mentor Session Report Form 

Please remember to fill out the [Mentor Session Report Form](https://airtable.com/shrp0jjRtoMyTXRzh) at the end of the session.

## Common Issues 

TBD

:crown: Thanks Roy Mosby, who assembled the teaching notes for this lesson. Raquel Román-Rodriguez assembled the rubric. 
