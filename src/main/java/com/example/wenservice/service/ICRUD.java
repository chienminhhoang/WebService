package com.example.wenservice.service;

import java.util.List;
import java.util.Optional;

public interface ICRUD<E> {
E save(E e);
void delete(Long id);
Optional<E> findById(Long id);
List<E> findAll();

}
