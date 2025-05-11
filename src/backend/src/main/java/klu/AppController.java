package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class AppController {
  
  @Autowired
  
  Service s;
  
  @PostMapping("/Product")
  public String insertProduct(@RequestBody Product product)
  {
    return s.insertData(product);
  }
  
  //http://localhost:8112/product
  @PutMapping("/Product")
  public String updateProduct(@RequestBody Product product)
  {
    return s.updateData(product);
  }
  
  //http://localhost:8112/product/1
    @DeleteMapping("/Product/{id}")
    public String deleteProduct(@PathVariable("id") int id)
    {
      return s.deleteData(id);
    }
  
    
    //http://localhost:8112/product
        @GetMapping("/Product")
        public List<Product> retriveProduct()
        {
          return s.retrieveData();
        }
        
        //http://localhost:8112/user
          @PostMapping("/user")
          public String insertUser(@RequestBody User user) 
          {
            return s.insertUser(user);
          }
          
          //http://localhost:8112/check
          @PostMapping("/check")
          public String retrieveUser(@RequestBody User user) {
              return s.checkUser(user);
          }

        
        
}