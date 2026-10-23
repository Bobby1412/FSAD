package com.assire.marketplace.auth;

public record AccountResponse(Long id, String name, String email) {
    static AccountResponse from(MarketplaceUser user) {
        return new AccountResponse(user.getId(), user.getName(), user.getEmail());
    }
}
