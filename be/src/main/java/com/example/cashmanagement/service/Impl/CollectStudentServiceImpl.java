package com.example.cashmanagement.service.Impl;

import com.example.cashmanagement.model.CollectStudent;
import com.example.cashmanagement.repository.CollectStudentRepository;
import com.example.cashmanagement.service.CollectStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CollectStudentServiceImpl implements CollectStudentService {
    @Autowired
    private CollectStudentRepository collectStudentRepository;

    @Override
    public List<CollectStudent> findAll() {
        return collectStudentRepository.findAll();
    }

    @Override
    public void save(CollectStudent collectStudent) {
        collectStudentRepository.save(collectStudent);
    }

    @Override
    public CollectStudent findById(int id) {
        return collectStudentRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(CollectStudent collectStudent) {
        collectStudentRepository.delete(collectStudent);
    }
}
