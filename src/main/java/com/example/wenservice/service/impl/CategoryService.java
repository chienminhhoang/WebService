package com.example.wenservice.service.impl;

import com.example.wenservice.model.Category;
import com.example.wenservice.repository.CategoryRepository;
import com.example.wenservice.service.ICRUD;
import com.example.wenservice.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Optional<Category> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Category> findAll() {
        return null;
    }
}
