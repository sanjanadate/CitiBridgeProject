package com.java.stocks.yahoo_stock_api;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class Display_Stocks {
	private String Stock_Symbol;
	private BigDecimal StockPrice;
	private BigDecimal Perc_ChangeIn_Price;
	
	public Display_Stocks(String name, BigDecimal price, BigDecimal change) {
		// TODO Auto-generated constructor stub
		Stock_Symbol=name;
		StockPrice=price;
		Perc_ChangeIn_Price=change;
		
	}
	public String getStock_Symbol() {
		return Stock_Symbol;
	}
	public void setStock_Symbol(String stock_Symbol) {
		Stock_Symbol = stock_Symbol;
	}
	public BigDecimal getStockPrice() {
		return StockPrice;
	}
	public void setStockPrice(BigDecimal stockPrice) {
		StockPrice = stockPrice;
	}
	public BigDecimal getPerc_ChangeIn_Price() {
		return Perc_ChangeIn_Price;
	}
	public void setPerc_ChangeIn_Price(BigDecimal perc_ChangeIn_Price) {
		Perc_ChangeIn_Price = perc_ChangeIn_Price;
	}
	@Override
	public String toString() {
		return "Display_Stocks [Stock_Symbol=" + Stock_Symbol + ", StockPrice=" + StockPrice + ", Perc_ChangeIn_Price="
				+ Perc_ChangeIn_Price + "]";
	}

}
