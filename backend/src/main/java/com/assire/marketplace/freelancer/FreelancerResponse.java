package com.assire.marketplace.freelancer;

import java.util.List;

public record FreelancerResponse(
        Long id,
        String name,
        String title,
        String location,
        List<String> skills,
        int hourlyRate,
        String availability) {}
