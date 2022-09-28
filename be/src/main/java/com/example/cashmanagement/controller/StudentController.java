package com.example.cashmanagement.controller;

import com.example.cashmanagement.model.CollectStudent;
import com.example.cashmanagement.model.Student;
import com.example.cashmanagement.model.dto.StudentDTO;
import com.example.cashmanagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("")
    public ResponseEntity<List<Student>> findAll(){
        return new ResponseEntity<>(studentService.findAll(),HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<String> save(@RequestBody Student student){
        studentService.save(student);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Student> findById(@PathVariable String id){
        Student student=studentService.findById(id);
        if (student == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    @GetMapping("/dto/{id}")
    public ResponseEntity<StudentDTO> findDTOById(@PathVariable String id){
        Student student=studentService.findById(id);
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setId(student.getId());
        studentDTO.setFullName(student.getFullName());
        studentDTO.setDateOfBirth(student.getDateOfBirth());
        studentDTO.setGender(student.getGender());
        studentDTO.setCampus(student.getCampus());
        studentDTO.setCollectStudentList(student.getCollectStudentList());

        return new ResponseEntity<>(studentDTO,HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<String> update(@PathVariable String id, @RequestBody Student student){
        Student studentCurrent = studentService.findById(id);
        if (studentCurrent==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        studentCurrent.setFullName(student.getFullName());
        studentCurrent.setDateOfBirth(student.getDateOfBirth());
        studentCurrent.setGender(student.getGender());
        studentService.save(studentCurrent);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
