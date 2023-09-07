## End of Lesson App Capabilities/Features

- Student is requesting to merge their pull request into `main` of their repository (not a Code the Dream repository)
- React app runs successfully
- A list successfully renders on the webpage
- `map()` is used to render the list elements
- Each list element has a unique key

```javascript
const MyComponent = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "This is not HTML...!"),
    React.createElement("p", null, "Wait...Is this JavaScript?"),
    React.createElement("p", null, "No, What the hell is this?"),
    React.createElement("p", null, "This is JSX.")
  );
};
```

```jsx
const MyComponent = () => {
  return (
    <div>
      <p>This is not HTML...!</p>
      <p>Wait...Is this JavaScript?</p>
      <p>No, What the hell is this?</p>
      <p>This is JSX.</p>
    </div>
  );
};
```
