package com.srdr.todo.member;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.srdr.todo.todo.Todo;

import lombok.Getter;
import lombok.Setter;

/**
 * Member
 */
@Entity
@Table(name="members")
public class Member {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Getter
  @Setter
  Long id;

  @Column(name="mname", columnDefinition="VARCHAR(100)", nullable=false)
  @Getter
  @Setter
  String name;

  @Column(name="email", columnDefinition="VARCHAR(255)", nullable=false)
  @Getter
  @Setter
  String email;

  @Column(name="password", columnDefinition="VARCHAR(255)", nullable=false)
  @Getter
  @Setter
  String password;

  @OneToMany(mappedBy="member", targetEntity=Todo.class)
  @Getter
  @Setter
  List<Todo> todos;

  public Member() {
    todos = new ArrayList<>();
  }
}