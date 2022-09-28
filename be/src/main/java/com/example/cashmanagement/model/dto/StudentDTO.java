package com.example.cashmanagement.model.dto;

import com.example.cashmanagement.model.Campus;
import com.example.cashmanagement.model.CollectStudent;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class StudentDTO {
    private String id;
    private String fullName;
    private LocalDate dateOfBirth;
    private String gender;
    private Campus campus;
    List<CollectStudent> collectStudentList;
}
