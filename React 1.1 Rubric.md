```javascript
const MyComponent = () => { 
  return React.createElement("div", null, React.createElement("p", null, "This is not HTML...!"), React.createElement("p", null, "Wait...Is this JavaScript?"), React.createElement("p", null, "No, What the hell is this?"), React.createElement("p", null, "This is JSX.")); 
};
```

```jsx
const MyComponent = () => { 
  return <div> 
    <p>This is not HTML...!</p> 
    <p>Wait...Is this JavaScript?</p> 
    <p>No, What the hell is this?</p> 
    <p>This is JSX.</p> 
  </div> 
}
```