package com.example.wenservice.controller;

import com.example.wenservice.model.Product;
import com.example.wenservice.service.ICategoryService;
import com.example.wenservice.service.IProductService;
import com.example.wenservice.service.impl.CategoryService;
import com.example.wenservice.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    private ResponseEntity<List<Product>> findAll() {
        return new ResponseEntity<>(productService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Product> create(@RequestBody Product product) {
        return new ResponseEntity<>(productService.save(product), HttpStatus.CREATED);
    }

    @PutMapping
    private ResponseEntity<Product> update(@RequestBody Product product) {
        Optional<Product> productOptional = productService.findById(product.getId());
        if (productOptional.isPresent()) {
            return new ResponseEntity<>(productService.save(product), HttpStatus.OK);

        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        productService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping("/{id}")
    private ResponseEntity<Product> detail(@PathVariable("id") Long id) {
        Optional<Product> productOptional = productService.findById(id);
        if (productOptional.isPresent()) {
            return new ResponseEntity<>(productOptional.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
