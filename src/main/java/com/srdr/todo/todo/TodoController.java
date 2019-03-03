package com.srdr.todo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * TodoController
 */
@RestController
public class TodoController {

  @Autowired
  TodoService todoService;
  @GetMapping(value="/todos")
  public ResponseEntity<List<Todo>> getTodos() {
    return ResponseEntity.ok(todoService.getTodos());
  }
}