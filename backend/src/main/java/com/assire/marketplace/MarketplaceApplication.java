package com.assire.marketplace;

import com.assire.marketplace.job.Job;
import com.assire.marketplace.job.JobRepository;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MarketplaceApplication {
    public static void main(String[] args) {
        SpringApplication.run(MarketplaceApplication.class, args);
    }

    @Bean
    CommandLineRunner seedJobs(JobRepository jobs) {
        return args -> {
            if (jobs.count() == 0) {
                jobs.save(new Job("Design a welcoming brand identity", "We’re opening a neighborhood coffee shop and need a warm visual identity, including a logo and a small set of launch assets.", "Design", new BigDecimal("1800"), LocalDate.now().plusDays(30), "Maya Chen"));
                jobs.save(new Job("Build a simple booking website", "Create a responsive website for a small wellness studio. We need service listings, a clear booking flow, and a polished mobile experience.", "Development", new BigDecimal("4200"), LocalDate.now().plusDays(45), "Jordan Lee"));
            }
        };
    }
}
