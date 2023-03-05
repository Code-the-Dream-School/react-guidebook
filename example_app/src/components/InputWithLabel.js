import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
        style={marginRight()}
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

InputWithLabel.propTyps = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.children,
};
