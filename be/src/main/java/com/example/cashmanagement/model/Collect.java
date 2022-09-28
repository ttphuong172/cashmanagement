package com.example.cashmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Collect {
    @ManyToOne
    @JoinColumn
    private Revenue revenue;
    private int amount;
    private String currency;
}
