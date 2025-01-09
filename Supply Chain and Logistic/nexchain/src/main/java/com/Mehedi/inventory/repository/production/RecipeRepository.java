package com.Mehedi.inventory.repository.production;


import com.Mehedi.inventory.model.production.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe,Long> {

   Recipe findByProductProductName(String productName);


//    @EntityGraph(attributePaths = {"ingredients", "ingredients.stock"})
//    Optional<Recipe> findByProductProductName(String productName);

}
