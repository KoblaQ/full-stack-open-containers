import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { vi, expect, test, beforeEach, describe } from 'vitest'

describe('<Todo /> component', () => {
  let completeTodo = vi.fn()
  let deleteTodo = vi.fn()

  beforeEach(() => {
    const todo = {
      text: 'Todo testing text',
      done: false,
    }

    render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />,
    )
  })

  test('renders the todo text and status', () => {
    const todoText = screen.getByText('Todo testing text')

    expect(todoText).toBeVisible()
  })
})
