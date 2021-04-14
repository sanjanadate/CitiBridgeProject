package com.java.stocks.yahoo_stock_api;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.Map.Entry;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
import yahoofinance.histquotes.Interval;

public class StockRecommandation {

	public Map<String,Stock> getStock(String[] stockname) throws IOException 
	{
		
		Map<String,Stock> stock = YahooFinance.get(stockname);
		return stock;
	}

	public List GetStocks(int start_amt, int final_Amt) {
		StockDto stockDAO = new StockDto();
		List stocksForSelectedCAP = stockDAO.getStocksForMarketCap(start_amt,final_Amt);
		return stocksForSelectedCAP; 
	}

	//returns percent change of a stock
	public BigDecimal getHistroy(String StockName) throws IOException
	{
	/*	Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		from.add(Calendar.DATE, -14); 

		
		List<HistoricalQuote> history = stock.getHistory(from, to, Interval.WEEKLY);
			for(HistoricalQuote quote:history) {
			System.out.println("-----------------------------------------------------");
			System.out.println("symbol : "+quote.getSymbol());
			System.out.println("Date : "+convertDate(quote.getDate())); 
			System.out.println("Closed Price :"+quote.getClose());
			System.out.println();

		}*/
		//	System.out.println(stock.getQuote().getChangeFromAvg50()+" "+stock.getSymbol());
		Stock stock = YahooFinance.get(StockName);
		return stock.getQuote().getChangeInPercent();

	}
	//For getting Historical data

/*	private String convertDate(Calendar cal) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
		String formatDate= format.format(cal.getTime());

		return formatDate;*/

	//}

	// Function to sort map by Key
	public static TreeMap Get_Top_Stocks(Map map)
	{
		// TreeMap to store values of HashMap
		TreeMap<BigDecimal, String> Stock_map = new TreeMap<BigDecimal, String>(Collections.reverseOrder());

		// Copy all data from hashMap into TreeMap
		Stock_map.putAll(map);

		// Display the TreeMap which is naturally sorted
		return Stock_map;        
	}


	public static void main( String[] args ) throws IOException
	{
		Map<BigDecimal, String> map = new HashMap<BigDecimal, String>();
		StockRecommandation stock = new StockRecommandation();
		List Stock_List= stock.GetStocks(100000, 500000);
		for(int i=0;i<Stock_List.size();i++)
		{
			BigDecimal d = stock.getHistroy(Stock_List.get(i).toString());
			map.put(d,Stock_List.get(i).toString());
		}
		TreeMap<BigDecimal, String> Stock_map=Get_Top_Stocks(map);
		int no_of_stocks=5;
			for (Entry<BigDecimal, String> entry : Stock_map.entrySet()) {
				if(no_of_stocks!=0) {
					Display_Stocks DTO = null;
					Stock top_stock= YahooFinance.get(entry.getValue());
					DTO=new Display_Stocks(top_stock.getName(), top_stock.getQuote().getPrice(), top_stock.getQuote().getChange());
					System.out.println(DTO.toString());
				    no_of_stocks --;
				}
				else {
					break;
				}
			
		}
		
			
		
	}

}
