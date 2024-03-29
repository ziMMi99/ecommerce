package com.project.eCommerce.product;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public String add(Product product) {
        productService.saveProduct(product);
        return "Product added successfully";
    }

    @GetMapping("/getAll")
    public List<Product> getAll() {
        return productService.getAllProducts();
    }
}

