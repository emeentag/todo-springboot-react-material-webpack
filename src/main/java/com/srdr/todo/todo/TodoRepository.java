package com.srdr.todo.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * TodoRepository
 */
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

  
}