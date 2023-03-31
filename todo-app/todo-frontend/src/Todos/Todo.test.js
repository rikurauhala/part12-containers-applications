import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  test('renders the component when the todo is not done', () => {
    const mockOnClickComplete = jest.fn();
    const mockOnClickDelete = jest.fn();
    const todo = { text: 'My todo', done: false };
    
    render(
      <Todo
        onClickComplete={mockOnClickComplete}
        onClickDelete={mockOnClickDelete}
        todo={todo}
      />
    );

    const todoText = screen.getByText('My todo');
    const deleteButton = screen.getByText('Delete');
    const setAsDoneButton = screen.getByText('Set as done');

    expect(todoText).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(setAsDoneButton).toBeInTheDocument();
  });
});
