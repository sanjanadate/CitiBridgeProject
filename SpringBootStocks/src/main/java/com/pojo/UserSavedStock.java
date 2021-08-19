package com.pojo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class UserSavedStock {
	@Value(value = "0")
	private int userID;
	
	@Value(value = "ABC")
	private String symbol;
	
	@Value(value = "0.0")
	private Double stockPrice;
	
	@Value(value = "0")
	private int quantity;
	public UserSavedStock(int userID, String symbol, Double stockPrice, int quantity) {
		super();
		this.userID = userID;
		this.symbol = symbol;
		this.stockPrice = stockPrice;
		this.quantity = quantity;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getSymbol() {
		return symbol;
	}
	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	public Double getStockPrice() {
		return stockPrice;
	}
	public void setStockPrice(Double stockPrice) {
		this.stockPrice = stockPrice;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Override
	public String toString() {
		return "UserSavedStock [userID=" + userID + ", symbol=" + symbol + ", stockPrice=" + stockPrice + ", quantity="
				+ quantity + "]";
	}
	
}
