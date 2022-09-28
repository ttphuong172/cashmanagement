package com.example.cashmanagement.controller;

import com.example.cashmanagement.model.Campus;
import com.example.cashmanagement.service.CampusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/campus")
@CrossOrigin
public class CampusController {
    @Autowired CampusService campusService;
    @GetMapping("")
    public ResponseEntity<List<Campus>> findAll(){
        return new ResponseEntity<>(campusService.findAll(), HttpStatus.OK);
    }

}
