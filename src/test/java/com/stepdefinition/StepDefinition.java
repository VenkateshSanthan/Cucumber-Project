package com.stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import com.baseclass.BaseClass;
import com.pojoclass.LoginPojo;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {

	LoginPojo lp;

	@Given("User Launch Adactin Web Application")
	public void user_Launch_Adactin_Web_Application() {
		launchChrome();
		urlLaunch(driver, "https://adactinhotelapp.com/");
	}

	@Then("User Verify The Login Page is Displayed")
	public void user_Verify_The_Login_Page_is_Displayed() {
		String login = driver.getCurrentUrl();
		System.out.println(login);
	}

	@When("User Enter Valid Username and Password")
	public void user_Enter_Valid_Username_and_Password() {
		lp = new LoginPojo();
		fill(lp.getUserName(), "venkitesh");
		fill(lp.getPassword(), "30206J");
	}

	@And("User Click The Login Button")
	public void user_Click_The_Login_Button() {
		lp = new LoginPojo();
		clickBtn(lp.getLoginBtn());
	}

	@SuppressWarnings("deprecation")
	@Then("User Verify the Search Hotel Page is Displayed")
	public void user_Verify_the_Search_Hotel_Page_is_Displayed() {
		lp = new LoginPojo();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		String txt = getTxt(lp.getGettxt());
		System.out.println(txt);

	}

	@SuppressWarnings("deprecation")
	@Then("User Select Location,Hotel,Room Type,Number of Rooms")
	public void user_Select_Location_Hotel_Room_Type_Number_of_Rooms() throws InterruptedException {
		lp = new LoginPojo();
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		Select s = new Select(driver.findElement(By.name("location")));
		s.selectByValue("Brisbane");
		Select s1 = new Select(lp.getHotel());
		s1.selectByValue("Hotel Sunshine");
		Select s2 = new Select(lp.getRoomType());
		s2.selectByValue("Deluxe");
		Select s3 = new Select(lp.getNumberOfRooms());
		s3.selectByValue("2");

	}

	@When("User Enter Check In-Date,Check Out-Date")
	public void user_Enter_Check_In_Date_Check_Out_Date() {
	}

	@When("User Select Adults per Room,Children Per Room")
	public void user_Select_Adults_per_Room_Children_Per_Room() {
		lp = new LoginPojo();
		Select s = new Select(lp.getAdultsRoom());
		s.selectByValue("1");
		Select s1 = new Select(lp.getChildrenRoom());
		s1.selectByValue("0");

	}

	@Then("User Click Search Buttton")
	public void user_Click_Search_Buttton() {
		lp = new LoginPojo();
		clickBtn(lp.getSearchBtn());

	}

	@Then("User Click Radio Buttton and Continue Button")
	public void user_Click_Radio_Buttton_and_Continue_Button() {
		lp = new LoginPojo();
		clickBtn(lp.getRadioBtn());
		clickBtn(lp.getCntuBtn());
	}

	@When("User Enter First Name,Last Name,Billing Address,Credit Card No")
	public void user_Enter_First_Name_Last_Name_Billing_Address_Credit_Card_No() {
		lp = new LoginPojo();
		fill(lp.getFirstName(), "Venkatesh");
		fill(lp.getLastName(), "Santhanam");
		fill(lp.getBillingAdd(), "Chennai");
		fill(lp.getCCnum(), "1425367485961425");
	}

	@Then("User Select Credit Card Type,Expiry Month,Expiry Year")
	public void user_Select_Credit_Card_Type_Expiry_Month_Expiry_Year() {
		lp = new LoginPojo();
		Select s = new Select(lp.getCcType());
		s.selectByValue("AMEX");
		Select s1 = new Select(lp.getExpMonth());
		s1.selectByValue("8");
		Select s2 = new Select(lp.getExpYear());
		s2.selectByValue("2017");
	}

	@And("User Enter CVV Number and Click Book Now Button")
	public void user_Enter_CVV_Number_and_Click_Book_Now_Button() {
		lp = new LoginPojo();
		fill(lp.getCvvNum(), "110");
		clickBtn(lp.getBookNowBtn());
	}

	@SuppressWarnings("deprecation")
	@Then("User Verify the Order No is Displayed")
	public void user_Verify_the_Order_No_is_Displayed() {
		lp = new LoginPojo();
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.MINUTES);
		String ordNo = driver.findElement(By.name("order_no")).getAttribute("value");
		System.out.println(ordNo);
	}

	@Then("User Quit The Browser")
	public void user_Quit_The_Browser() {
		driver.quit();
	}
	 
	@When("User Enter First Name{string},LastName{string},Add{string},ccNo{string}")
	 public void user_Enter_First_Name_LastName_Add_ccNo(String FirstName, String
	 LastName, String BillingAddress, String CreditCardNo) {
	 lp = new LoginPojo();
	 fill(lp.getFirstName(),FirstName);
	 fill(lp.getLastName(),LastName);
	 fill(lp.getBillingAdd(),BillingAddress);
	 fill(lp.getCCnum(),CreditCardNo);
	 }
	
	@And("User Enter cvvNo {string} and Click Book Now Button")
	public void user_Enter_cvvNo_and_Click_Book_Now_Button(String CVVNumber) {
	 lp = new LoginPojo();
	 fill(lp.getCvvNum(), CVVNumber);
	 clickBtn(lp.getBookNowBtn());
	 }

}
