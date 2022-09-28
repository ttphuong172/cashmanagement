package com.example.cashmanagement.model;

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
public class CollectStudent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn
    private Student student;

    private LocalDate collectDay;

    @ManyToOne
    @JoinColumn
    private Scholastic scholastic;

    @ElementCollection
    @CollectionTable(name="collect", joinColumns = @JoinColumn(name="collectId"))
    private List<Collect> collectList;

}
