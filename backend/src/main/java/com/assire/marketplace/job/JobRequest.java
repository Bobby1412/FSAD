package com.assire.marketplace.job;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;
import java.time.LocalDate;

public record JobRequest(
        @NotBlank @Size(min = 4, max = 120) String title,
        @NotBlank @Size(min = 20, max = 4000) String description,
        @NotBlank @Size(max = 60) String category,
        @NotNull @DecimalMin("1.00") @Digits(integer = 8, fraction = 2) BigDecimal budget,
        @NotNull @FutureOrPresent LocalDate deadline) {}
