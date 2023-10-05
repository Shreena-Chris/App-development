package com.astrasquad.shreenachristop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.astrasquad.shreenachristop.model.User;


public interface UserRepository  extends JpaRepository<User,Integer> {
	Optional<User> findByUsername(String email);

}
