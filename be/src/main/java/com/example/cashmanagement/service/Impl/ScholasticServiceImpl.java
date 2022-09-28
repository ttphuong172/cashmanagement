package com.example.cashmanagement.service.Impl;

import com.example.cashmanagement.model.Scholastic;
import com.example.cashmanagement.repository.ScholasticRepository;
import com.example.cashmanagement.service.ScholasticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ScholasticServiceImpl implements ScholasticService {
    @Autowired
    private ScholasticRepository scholasticRepository;
    @Override
    public List<Scholastic> findAll() {
        return scholasticRepository.findAll();
    }
}
