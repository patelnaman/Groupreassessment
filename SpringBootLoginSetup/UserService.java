package com.example.demo.security.service;


import com.example.demo.security.dto.SignUpRequest;

public interface UserService {

    void save(final SignUpRequest request);
}
