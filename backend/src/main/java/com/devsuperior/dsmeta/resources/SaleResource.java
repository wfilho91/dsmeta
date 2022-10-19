package com.devsuperior.dsmeta.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;

@RestController
@RequestMapping(value="/sales")
public class SaleResource {
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<List<Sale>>findAllSales(){
		List<Sale> sales = service.findAllSales();
		return ResponseEntity.ok().body(sales);
	}
}
