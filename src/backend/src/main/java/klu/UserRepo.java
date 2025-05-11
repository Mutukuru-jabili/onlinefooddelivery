package com.klu;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, String>
{
  public User findByUn(String un);
}