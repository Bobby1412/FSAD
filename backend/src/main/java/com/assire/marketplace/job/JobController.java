package com.assire.marketplace.job;

import com.assire.marketplace.auth.UserRepository;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/jobs")
public class JobController {
    private final JobRepository jobs;
    private final UserRepository users;

    public JobController(JobRepository jobs, UserRepository users) {
        this.jobs = jobs;
        this.users = users;
    }

    @GetMapping
    public List<Job> listJobs() {
        return jobs.findAllByOrderByCreatedAtDesc();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Job createJob(@Valid @RequestBody JobRequest request, @AuthenticationPrincipal UserDetails currentUser) {
        String clientName = users.findByEmail(currentUser.getUsername())
                .map(account -> account.getName())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Please log in to post a project."));
        return jobs.save(new Job(
                request.title().trim(),
                request.description().trim(),
                request.category().trim(),
                request.budget(),
                request.deadline(),
                clientName));
    }
}
