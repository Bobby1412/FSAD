package com.assire.marketplace.freelancer;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/freelancers")
public class FreelancerController {
    @GetMapping
    public List<FreelancerResponse> listFreelancers() {
        return List.of(
                new FreelancerResponse(1L, "Avery Morgan", "Brand & Visual Designer", "Portland, OR", List.of("Branding", "Illustration", "Figma"), 75, "Available"),
                new FreelancerResponse(2L, "Samira Patel", "Full-stack Developer", "Toronto, CA", List.of("React", "Spring Boot", "APIs"), 95, "Available"),
                new FreelancerResponse(3L, "Leo Williams", "Content Strategist", "Austin, TX", List.of("Writing", "SEO", "Research"), 65, "Taking projects"),
                new FreelancerResponse(4L, "Nora Kim", "Product Designer", "Brooklyn, NY", List.of("Product design", "Prototyping", "UX"), 90, "Available"),
                new FreelancerResponse(5L, "Mateo Rivera", "Digital Marketer", "Denver, CO", List.of("Campaigns", "Analytics", "Social"), 70, "Taking projects"),
                new FreelancerResponse(6L, "Priya Shah", "Frontend Developer", "London, UK", List.of("React", "Accessibility", "CSS"), 85, "Available"));
    }
}
