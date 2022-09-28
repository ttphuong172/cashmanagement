package com.example.cashmanagement.service;

import com.example.cashmanagement.model.CollectStudent;

import java.util.List;

public interface CollectStudentService {
    List<CollectStudent> findAll();
    void save(CollectStudent collectStudent);
    CollectStudent findById(int id);
    void delete (CollectStudent collectStudent);
}
