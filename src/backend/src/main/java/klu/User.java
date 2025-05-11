package com.klu;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
  @Id
  String un;
  String pw;
  String role;
  public String getUn() {
    return un;
  }
  public void setUn(String un) {
    this.un = un;
  }
  public String getPw() {
    return pw;
  }
  public void setPw(String pw) {
    this.pw = pw;
  }
  public String getRole() {
    return role;
  }
  public void setRole(String role) {
    this.role = role;
  }
  @Override
  public String toString() {
    return "User [un=" + un + ", pw=" + pw + ", role=" + role + "]";
  }

}