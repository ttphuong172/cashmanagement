package com.example.cashmanagement.controller;

import com.example.cashmanagement.model.Scholastic;
import com.example.cashmanagement.service.ScholasticService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/scholastic")
@CrossOrigin
public class ScholasticController {
    @Autowired
    private ScholasticService scholasticService;
    @GetMapping
    public ResponseEntity<List<Scholastic>> findAll(){
        return new ResponseEntity<>(scholasticService.findAll(), HttpStatus.OK);
    }
}
