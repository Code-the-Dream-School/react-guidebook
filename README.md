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

## Concepts covered

- Lifting state
- Controlled components
- Props handling

### Lifting state

- Establishes state management in a parent component, where more persistent state is usually managed.
- an update handler is passed down to the child component where it is used to pass data changes back up to the parent.

#### Controlled components

- Allows React to be fully aware of data in form fields at all times.
- Turns each input into a piece of managed state (useState)
  - Couples input value to a value then uses an update function tied to events on the specific field (usually onChange)
- Instead of having to grab all values from the form on a submit event, it can grab from the state which is a much easier, cleaner process.
- I call this sort of data "ephemeral"- it's important for user interaction while the component is present but i isn't until data is submitted or confirmed as complete in some other way, it does not have an impact on the larger app.
  - This way the larger picture of state management isn't muddied.
  - Also keeps temporary data out of other state management systems like redux

#### Props handling

- props is an object full of properties (thus the name) passed from a parent to child component.
- destructuring in the child function's arguments allows the developer to grab at the values directly instead of having to reference it through dot notation.
  - serves as a reminder of what values are available
  - increases readability as there's less code to deal with

### Potential concept demo ideas

- Individual controlled fields vs entire form controlled via single handler
- multi-layered object destructuring (see road to react p72)
- grabbing additional properties using rest operator (see road to react p73)
- how to import and use ULID or UUID for keys instead of Date.now()

### :thinking: Questions 

Use this time to answer students questions from the lesson materials and assignments. Remember to incorporate teaching strategies:

  - Think aloud: Narrate your thinking to show students how developers approach problems. For example, “When I saw this problem, I decided to approach it by…”
  - Use positive narration. For example, “I appreciate that Raheem has his camera on today” or “That was an excellent question."
  - Warm call on students or practice popcorn calling (students can ask another student for help) if participation is low.

### :nerd_face: Mentor Session Report Form 

Please remember to fill out the [Mentor Session Report Form](https://airtable.com/shrp0jjRtoMyTXRzh) at the end of the session.

## Common Issues 

TBD

:crown: Thanks to Roy Mosby, who assembled the teaching notes for this lesson, and Raquel Román-Rodriguez, who assembled the lesson rubric. 
