package com.srdr.todo.todo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.srdr.todo.member.Member;

import lombok.Getter;
import lombok.Setter;

/**
 * Todo
 */
@Entity
@Table(name = "todos")
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Getter
  @Setter
  Long id;

  @Column(name = "title", columnDefinition = "VARCHAR(255)", nullable = false)
  @Getter
  @Setter
  String title;

  @Column(name = "body", columnDefinition = "VARCHAR(255)", nullable = false)
  @Getter
  @Setter
  String body;

  @Getter
  @Setter
  @ManyToOne(targetEntity=Member.class)  
  @JoinColumn(referencedColumnName="id", name="member_id")
  Member member;
}