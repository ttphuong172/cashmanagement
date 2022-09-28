package com.example.cashmanagement.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    private String id;
    private String fullName;
    private LocalDate dateOfBirth;
    private String gender;

    @ManyToOne
    @JoinColumn
    private Campus campus;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    List<CollectStudent> collectStudentList;

}
