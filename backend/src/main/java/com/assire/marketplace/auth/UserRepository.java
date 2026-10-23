package com.assire.marketplace.auth;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<MarketplaceUser, Long> {
    Optional<MarketplaceUser> findByEmail(String email);
    boolean existsByEmail(String email);
}
