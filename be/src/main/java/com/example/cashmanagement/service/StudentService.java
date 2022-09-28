package com.example.cashmanagement.service;

import com.example.cashmanagement.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> findAll();
    Student findById(String id);
    void save(Student student);
}
