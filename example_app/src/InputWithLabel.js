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
  return (
    <>
      <label htmlFor="title">{children}</label>
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
