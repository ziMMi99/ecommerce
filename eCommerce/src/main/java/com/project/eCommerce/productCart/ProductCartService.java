package com.project.eCommerce.productCart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//Service means that this class will be used to perform business logic
@Service
public class ProductCartService {

    @Autowired
    private ProductCartRepository productCartRepository;

    public ProductCart saveProductCart(ProductCart productCart) {
        return productCartRepository.save(productCart);
    }

    public List<ProductCart> getAllProductCarts() {
        return productCartRepository.findAll();
    }

    public ProductCart getProductCartById(int id) {
        return productCartRepository.findById(id).orElse(null);
    }
}
