package com.assire.marketplace.job;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;
    private BigDecimal budget;
    private LocalDate deadline;
    private String clientName;
    private LocalDateTime createdAt;

    @jakarta.persistence.Column(length = 4000)
    private String description;

    protected Job() {}

    public Job(String title, String description, String category, BigDecimal budget, LocalDate deadline, String clientName) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.budget = budget;
        this.deadline = deadline;
        this.clientName = clientName;
    }

    @PrePersist
    void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getCategory() { return category; }
    public BigDecimal getBudget() { return budget; }
    public LocalDate getDeadline() { return deadline; }
    public String getClientName() { return clientName; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
