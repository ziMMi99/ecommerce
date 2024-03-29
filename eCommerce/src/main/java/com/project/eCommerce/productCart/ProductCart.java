package com.project.eCommerce.productCart;

import com.project.eCommerce.product.Product;
import jakarta.persistence.*;

import java.util.List;

//This code tells JPA that the class is an entity.
@Entity
public class ProductCart {

    //This code tells JPA that the id field is the primary key.
    //The @GeneratedValue annotation tells JPA to generate the primary key value automatically.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private double id;

    //This code tells JPA that there is a one-to-many relationship between ProductCart and Product.
    @OneToMany
    private List<Product> products;
}
