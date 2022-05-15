package com.pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.BaseClass;

public class LoginPojo extends BaseClass {
	public LoginPojo() {
	PageFactory.initElements(driver, this);
	}
	@FindBy (id="username")
	private WebElement userName; 
	@FindBy (id="password")
	private WebElement password; 
	@FindBy	(xpath="//*[@id=\"login\"]")
	private WebElement loginBtn; 
	@FindBy(xpath="//*[@id=\"search_form\"]/table/tbody/tr[1]/td")
	private WebElement gettxt;
	@FindBy (xpath="//*[@id=\"location\"]")
	private WebElement location; 
	@FindBy (id="hotels")
	private WebElement hotel; 
	@FindBy	(id="room_type")
	private WebElement roomType;
	@FindBy	(id="room_nos")
	private WebElement numberOfRooms;
	@FindBy	(id="adult_room")
	private WebElement adultsRoom;
	@FindBy	(id="child_room")
	private WebElement childrenRoom;
	@FindBy	(id="Submit")
	private WebElement searchBtn;
	@FindBy (id="radiobutton_0")
	private WebElement radioBtn;
	@FindBy (id="continue")
	private WebElement cntuBtn;
	@FindBy	(id="first_name")
	private WebElement firstName;
	@FindBy	(id="last_name")
	private WebElement lastName;
	@FindBy (id="address")
	private WebElement billingAdd;
	@FindBy	(name="cc_num")
	private WebElement CCnum;
	@FindBy (id="cc_type")
	private WebElement ccType;
	@FindBy	(id="cc_exp_month")
	private WebElement expMonth;
	@FindBy (id="cc_exp_year")
	private WebElement expYear;
	@FindBy	(id="cc_cvv")
	private WebElement CvvNum;
	@FindBy (id="book_now")
	private WebElement bookNowBtn;
	@FindBy (xpath="//*[@id=\"order_no\"]")
	private WebElement orderNum;
	public WebElement getUserName() {
		return userName;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLoginBtn() {
		return loginBtn;
	}
	public WebElement getGettxt() {
		return gettxt;
	}
	public WebElement getLocation() {
		return location;
	}
	public WebElement getHotel() {
		return hotel;
	}
	public WebElement getRoomType() {
		return roomType;
	}
	public WebElement getNumberOfRooms() {
		return numberOfRooms;
	}
	public WebElement getAdultsRoom() {
		return adultsRoom;
	}
	public WebElement getChildrenRoom() {
		return childrenRoom;
	}
	public WebElement getSearchBtn() {
		return searchBtn;
	}
	public WebElement getRadioBtn() {
		return radioBtn;
	}
	public WebElement getCntuBtn() {
		return cntuBtn;
	}
	public WebElement getFirstName() {
		return firstName;
	}
	public WebElement getLastName() {
		return lastName;
	}
	public WebElement getBillingAdd() {
		return billingAdd;
	}
	public WebElement getCCnum() {
		return CCnum;
	}
	public WebElement getCcType() {
		return ccType;
	}
	public WebElement getExpMonth() {
		return expMonth;
	}
	public WebElement getExpYear() {
		return expYear;
	}
	public WebElement getCvvNum() {
		return CvvNum;
	}
	public WebElement getBookNowBtn() {
		return bookNowBtn;
	}
	public WebElement getOrderNum() {
		return orderNum;
	}
	
	
}
