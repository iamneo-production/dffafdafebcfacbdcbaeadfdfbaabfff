package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Student;
import com.examly.springapp.service.Studentservice;

@RestController
public class ApiController {

    @Autowired
    private Studentservice service;

    @CrossOrigin(origins = {"https://8081-dffafdafebcfacbdcbaeadfdfbaabfff.premiumproject.examly.io", "http://localhost:9876"})
    // @CrossOrigin(origins = "http://localhost:9876") // Adjust the port as needed
    @PostMapping("/addStudent")
    public boolean addStudent(@RequestBody Student student)
    {
        return service.addStudent(student);
    }

    @CrossOrigin(origins = {"https://8081-dffafdafebcfacbdcbaeadfdfbaabfff.premiumproject.examly.io", "http://localhost:9876"})
    // @CrossOrigin(origins = "http://localhost:9876") // Adjust the port as needed
    @GetMapping("/getAllStudent")
    public List <Student> getAllStudents()
    {
        return service.getAllStudents();
    }

    @CrossOrigin(origins = {"https://8081-dffafdafebcfacbdcbaeadfdfbaabfff.premiumproject.examly.io", "http://localhost:9876"})
    // @CrossOrigin(origins = "http://localhost:9876") // Adjust the port as needed
    @GetMapping("/getById/{id}")
    
        public Optional<Student> getById(@PathVariable int id)
        {
            return service.getById(id);
        }

      
    
}
