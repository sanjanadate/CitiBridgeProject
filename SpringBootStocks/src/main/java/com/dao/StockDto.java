package com.dao;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.connections.DBConnection;
import com.pojo.DisplayStock;
import com.pojo.User;

@Repository(value = "dao2")
public class StockDto {

	
	@Autowired
	JdbcTemplate template;
	
	public List getStocksForMarketCap(int Start_Amt, int Final_Amt) {
		/*try
		{
			String SELECT_STOCK_FOR_MARKETCAP_QUERY = "SELECT * FROM  Nifty50  WHERE MARKETCAP BETWEEN ? AND ?";
			
			List<String> stockList = template.query(SELECT_STOCK_FOR_MARKETCAP_QUERY, new RowMapper<String>() {

				@Override
				public String mapRow(ResultSet set, int arg1) throws SQLException {
					// TODO Auto-generated method stub
					return set.getString(1);
				}

			});
			return stockList;
		}
		catch(EmptyResultDataAccessException e) {
			return null;
		}*/
		String SELECT_STOCK_FOR_MARKETCAP_QUERY = "SELECT * FROM  Nifty50  WHERE MARKETCAP BETWEEN ? AND ?";
		String STOCK_SYMBOL = "Symbol";
		List stockList = new ArrayList();
		try {
			Connection con = DBConnection.CreateConnection();
			PreparedStatement pst = con.prepareStatement(SELECT_STOCK_FOR_MARKETCAP_QUERY);
			pst.setInt(1, Start_Amt);
			pst.setInt(2,Final_Amt);
			ResultSet rs = pst.executeQuery();

			if (null != rs) {
				while (rs.next()) {
					String stockSymbol = rs.getString(STOCK_SYMBOL);
					stockList.add(stockSymbol);
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return stockList;
	}

	public List<DisplayStock> getSavedStocks(int userId) {
		JSONArray stockList = new JSONArray();
		JSONObject stockData = null;
		JSONObject stockListObject = new JSONObject();
		List<DisplayStock> stock_list = new ArrayList<>();
		try {
			Connection con = DBConnection.CreateConnection();
			PreparedStatement pst = con.prepareStatement("SELECT * FROM  user_saved_stock where user_id = ? ");
			pst.setInt(1, userId);
			ResultSet rs = pst.executeQuery();

			if (null != rs) {
				while (rs.next()) {
					/*String stockSymbol = rs.getString("Symbol");
					//LOGGER.info("stocksymbol:" + stockSymbol);
					String stockPrice = rs.getString("stockprice");
					//LOGGER.info("stockprice:" + stockPrice);
					String stockQuantity = rs.getString("stockquantity");
					//LOGGER.info("stockquantity:" + stockQuantity);

					stockData = new JSONObject();
					stockData.put("Symbol", stockSymbol);
					stockData.put("stockprice", stockPrice);
					stockData.put("stockquantity", stockQuantity);
					stockList.add(stockData);
					stockListObject.put("Stocks", stockList);*/
					stock_list.add(new DisplayStock(rs.getString(2), rs.getDouble(3), rs.getInt(4)));
				}
			}
			//LOGGER.info("stockListObject in the DAO:" + stockListObject);
		} catch (Exception e) {
			e.printStackTrace();
			//LOGGER.info("Error occured while getting the user selected stocks : " + e.getMessage());
		}
		JSONObject[] values =new JSONObject[stockList.size()];
		for(int i=0;i<stockList.size();i++) {
			values[i]=(JSONObject) stockList.get(i);
			System.out.println((i+1) + ": Symbol : "+ values[i].get("Symbol"));
			System.out.println("Market Price : "+ values[i].get("stockprice"));
			System.out.println("stockquantity : "+values[i].get("stockquantity"));
			System.out.println("==================================================================");
			System.out.println();
		}
		//return stockListObject;
		return stock_list;
	}

	public boolean saveStock(int user_id,JSONArray selectedStockArray,int quantity)
	{
		for(int i=0;i<selectedStockArray.size();i++) {
			try {
				JSONObject stock=(JSONObject) selectedStockArray.get(i);
				String symbol=(String) stock.get("symbol");
				Double stockPrice=(Double) stock.get("regularMarketPrice");
				template.update("insert into user_saved_stock values(?,?,?,?)", user_id,symbol,stockPrice,quantity);
			}
			catch(EmptyResultDataAccessException e) {
				e.printStackTrace();
				return false;			
			}
			
			/*JSONObject stock=(JSONObject) selectedStockArray.get(i);
			String symbol=(String) stock.get("symbol");
			Double stockPrice=(Double) stock.get("regularMarketPrice");
			try {
				Connection con = DBConnection.CreateConnection();
				PreparedStatement ps=con.prepareStatement("insert into user_saved_stock values(?,?,?,?)");
				ps.setInt(1,user_id);
				ps.setString(2,symbol);
				ps.setDouble(3,stockPrice);
				ps.setInt(4,quantity);
				ps.executeUpdate();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;

			}*/
		}
		return true;
	}
/*
	public static void main(String args[]) {
		StockDto dto = new StockDto();
		dto.getSavedStocks(1001);

	}
*/

}
