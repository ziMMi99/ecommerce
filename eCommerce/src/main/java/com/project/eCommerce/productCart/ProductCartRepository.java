package com.project.eCommerce.productCart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//Repository annotation is used to indicate that the class provides the mechanism for
//storage, retrieval, search, update and delete operation on objects.
@Repository
public interface ProductCartRepository extends JpaRepository<ProductCart, Integer> {
    //JpaRepository is JPA specific extension of Repository. It contains the full API of CrudRepository and PagingAndSortingRepository.
    //JpaRepository<ProductCart, Integer> is used to define the type of entity and the type of primary key of that entity.
}
