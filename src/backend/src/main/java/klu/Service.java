package com.klu;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {
	@Autowired
	ProductRepo repo1;
	
	@Autowired
	UserRepo repo2;
	
	
	public String insertData(Product product) {
		repo1.save(product);
		return "Product Insertion Done Successfully";
	}
	
	public String updateData(Product product)
    {
		if(repo1.findById(product.getId())!=null)
			repo1.delete(product);
    	repo1.save(product);
    	return "Updated successfully";
    }
	public String deleteData(int id)
	{
		repo1.delete(repo1.findById(id).get());
		return "Deleted successfully";
	}
	public List<Product> retrieveData()
	{
		return repo1.findAll();
	}
	
	public String insertUser(User user) {
		repo2.save(user);
		return "success";
	}
	
	public String checkUser(User user) {
	    User userRetrieved = repo2.findByUn(user.getUn());
	    if (userRetrieved != null) {
	        if (userRetrieved.getPw().equals(user.getPw())) {
	            return userRetrieved.getRole();
	        } else {
	            return "0";
	        }
	    } else {
	        return "0";
	    }
	}

}