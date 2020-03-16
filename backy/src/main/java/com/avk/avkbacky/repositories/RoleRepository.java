package com.avk.avkbacky.repositories;

import com.avk.avkbacky.models.ERole;
import com.avk.avkbacky.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName (ERole name);
}
