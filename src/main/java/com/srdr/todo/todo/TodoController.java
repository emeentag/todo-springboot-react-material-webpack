package com.srdr.todo.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * TodoController
 */
@RestController
public class TodoController {

  @Autowired
  TodoService todoService;

  @GetMapping(value = "/todo/all")
  public ResponseEntity<List<Todo>> getTodos() {
    ResponseEntity<List<Todo>> response;
    List<Todo> todos = todoService.getTodos();
    if(!todos.isEmpty()) {
      response = ResponseEntity.ok(todoService.getTodos());
    } else {
      response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    return response;
  }

  @GetMapping(value = "/todo/{id}")
  public ResponseEntity<Todo> getTodo(@PathVariable("id") Long id) {
    ResponseEntity<Todo> responseEntity;
    Optional<Todo> todo = todoService.getTodo(id);
    if(todo.isPresent()) {
      responseEntity = ResponseEntity.ok(todo.get());
    } else {
      responseEntity = ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
    
    return responseEntity;
  }

  @PostMapping(value = "/todo/add")
  public ResponseEntity<String> addTodo(@RequestBody Todo todo) {
    ResponseEntity<String> response;
    Long todoId = todo.getId();

    if(todoId != null) {
      response = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("This entity is already exist.");
    } else {
      todoService.addTodo(todo);
      response = ResponseEntity.ok("Your todo is saved.");
    }

    return response;
  }

}