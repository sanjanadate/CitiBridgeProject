package com.pojo;


import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public class DisplayStock {
	
	@Value(value = "stock1")
	String Stock_Symbol;
	
	@Value(value = "0.0")
	double StockPrice;
	
	@Value(value = "0.0")
	double Perc_ChangeIn_Price;
	
	public DisplayStock(String stock_Symbol, double stockPrice, double perc_ChangeIn_Price) {
		super();
		Stock_Symbol = stock_Symbol;
		StockPrice = stockPrice;
		Perc_ChangeIn_Price = perc_ChangeIn_Price;
	}
	public String getStock_Symbol() {
		return Stock_Symbol;
	}
	public void setStock_Symbol(String stock_Symbol) {
		Stock_Symbol = stock_Symbol;
	}
	public double getStockPrice() {
		return StockPrice;
	}
	public void setStockPrice(double stockPrice) {
		StockPrice = stockPrice;
	}
	public double getPerc_ChangeIn_Price() {
		return Perc_ChangeIn_Price;
	}
	public void setPerc_ChangeIn_Price(double perc_ChangeIn_Price) {
		Perc_ChangeIn_Price = perc_ChangeIn_Price;
	}

	
	public String toString() {
		return "Display_Stocks [Stock_Symbol=" + Stock_Symbol + ", StockPrice=" + StockPrice + ", Perc_ChangeIn_Price="
				+ Perc_ChangeIn_Price + "]";
	}
	 public int compareTo(DisplayStock  o)
	    {
	        if (this.Perc_ChangeIn_Price != o.Perc_ChangeIn_Price) {
	            return (int) (this.Perc_ChangeIn_Price - o.Perc_ChangeIn_Price);
	        }
			return 0;

	    }

}
