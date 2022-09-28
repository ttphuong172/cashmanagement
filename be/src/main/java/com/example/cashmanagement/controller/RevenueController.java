package com.example.cashmanagement.controller;

import com.example.cashmanagement.model.Revenue;
import com.example.cashmanagement.service.RevenueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/revenue")
@CrossOrigin
public class RevenueController {
    @Autowired
    private RevenueService revenueService;
    @GetMapping
    public ResponseEntity<List<Revenue>> findAll(){
        return new ResponseEntity<>(revenueService.findAll(), HttpStatus.OK);
    }
}
