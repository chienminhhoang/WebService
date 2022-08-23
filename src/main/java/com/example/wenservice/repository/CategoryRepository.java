package com.example.wenservice.repository;

import com.example.wenservice.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  CategoryRepository extends JpaRepository<Category, Long> {
}
