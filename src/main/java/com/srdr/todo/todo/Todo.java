package com.srdr.todo.todo;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.srdr.todo.member.Member;

import lombok.Data;

/**
 * Todo
 */
@Entity
@Table(name = "todos")
@Data
public class Todo {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  Long id;

  @Column(name = "title", columnDefinition = "VARCHAR(255)", nullable = false)
  String title;

  @Column(name = "body", columnDefinition = "VARCHAR(255)", nullable = false)
  String body;

  @ManyToOne(targetEntity = Member.class, cascade = CascadeType.ALL)
  @JoinColumn(referencedColumnName = "id", name = "member_id", nullable = false)
  Member member;
}