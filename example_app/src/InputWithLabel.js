import { useEffect, useRef } from 'react';

export default function InputWithLabel({
  todoTitle,
  handleTitleChange,
  children,
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

    //inline css
  const marginRight = () => {
    return { marginRight: '.25rem' };
  };

  return (
    <>
      <label htmlFor="title" style={marginRight()}>
        {children}
      </label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
    </>
  );
}
