package com.project.eCommerce.productCart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//RestController means this class will handle rest api requests
//Cross origin is used to handle the request from different origins
//Request mapping is used to map the request to the specific method
@RestController
@RequestMapping("/api/productCart")
@CrossOrigin
public class ProductCartController {
    //Autowired is used to inject the object dependency implicitly
    @Autowired
    private ProductCartService productCartService;


    //PostMapping is used to map the http post request
    //Post method to add the product to the cart
    @PostMapping("/add")
    public String add(ProductCart productCart) {
        productCartService.saveProductCart(productCart);
        return "Product added to cart successfully";
    }

    //Get method to get all the products
    @GetMapping("/getAll")
    public List<ProductCart> getAll() {
        return productCartService.getAllProductCarts();
    }

    //Get mapping is used to get the data from the server
    //PathVariable is used to get the data from the url
    //Get method to get the product by id
    @GetMapping("/get/{id}")
    public ProductCart get(@PathVariable int id) {
        return productCartService.getProductCartById(id);
    }
}
