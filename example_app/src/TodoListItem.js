import React from 'react'


export default function ToDoListItem({todo}){
  const {title} = todo
  return (
    <li>{title}</li>
  )
}