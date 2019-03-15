package com.srdr.todo.member;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.srdr.todo.todo.Todo;

import lombok.Data;

/**
 * Member
 */
@Entity
@Table(name="members")
@Data
public class Member {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  Long id;

  @Column(name="mname", columnDefinition="VARCHAR(100)", nullable=false)
  String name;

  @Column(name="email", columnDefinition="VARCHAR(255)", nullable=false)
  String email;

  @Column(name="password", columnDefinition="VARCHAR(255)", nullable=false)
  String password;

  @OneToMany(mappedBy="member", targetEntity=Todo.class)
  List<Todo> todos;

  public Member() {
    todos = new ArrayList<>();
  }
}