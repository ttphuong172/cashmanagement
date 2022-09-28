package com.example.cashmanagement.service.Impl;

import com.example.cashmanagement.model.Revenue;
import com.example.cashmanagement.repository.RevenueRepository;
import com.example.cashmanagement.service.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RevenueServiceImpl implements RevenueService {
    @Autowired
    private RevenueRepository revenueRepository;
    @Override
    public List<Revenue> findAll() {
        return revenueRepository.findAll();
    }
}
