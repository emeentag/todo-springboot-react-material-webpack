package com.srdr.todo.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * TodoService
 */
@Service
public class TodoService {

  @Autowired
  TodoRepository todoRepository;

  List<Todo> getTodos() {
    List<Todo> todos = todoRepository.findAll();
    return todos;
  }

  public Optional<Todo> getTodo(Long id) {
    Optional<Todo> todo = todoRepository.findById(id);

    return todo;
  }

  public void addTodo(Todo todo) {
    todoRepository.save(todo);
  }
}