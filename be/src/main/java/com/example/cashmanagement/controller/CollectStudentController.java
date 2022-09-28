package com.example.cashmanagement.controller;

import com.example.cashmanagement.model.CollectStudent;
import com.example.cashmanagement.service.CollectStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/collectstudent")
@CrossOrigin
public class CollectStudentController {
    @Autowired
    private CollectStudentService collectStudentService;
    @GetMapping("")
    public ResponseEntity<List<CollectStudent>> findAll(){
        return new ResponseEntity<>(collectStudentService.findAll(), HttpStatus.OK);
    }

    @PostMapping ResponseEntity <String> save(@RequestBody CollectStudent collectStudent){
        collectStudentService.save(collectStudent);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity <CollectStudent> findById(@PathVariable int id){
        CollectStudent collectStudent= collectStudentService.findById(id);
        return new ResponseEntity<>(collectStudent,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity <String> update (@PathVariable int id, @RequestBody CollectStudent collectStudent){
        CollectStudent collectStudentCurrent = collectStudentService.findById(id);
        if (collectStudent==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        collectStudentCurrent.setStudent(collectStudent.getStudent());
        collectStudentCurrent.setCollectDay(collectStudent.getCollectDay());
        collectStudentCurrent.setScholastic(collectStudent.getScholastic());
        collectStudentCurrent.setCollectList(collectStudent.getCollectList());
        collectStudentService.save(collectStudentCurrent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable int id){
        CollectStudent collectStudent=collectStudentService.findById(id);
        collectStudentService.delete(collectStudent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
