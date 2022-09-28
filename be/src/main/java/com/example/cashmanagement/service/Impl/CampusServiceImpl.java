package com.example.cashmanagement.service.Impl;

import com.example.cashmanagement.model.Campus;
import com.example.cashmanagement.repository.CampusRepository;
import com.example.cashmanagement.service.CampusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CampusServiceImpl implements CampusService {
    @Autowired
    private CampusRepository campusRepository;
    @Override
    public List<Campus> findAll() {
        return campusRepository.findAll();
    }
}
