package com.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	public static WebDriver driver;
	public static Select s;
	
	public WebDriver launchChrome() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		return driver;	
	}
	public WebDriver launchFirefox() {
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		return driver;
	}
	public void urlLaunch(WebDriver driver,String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}
	public String getTxt(WebElement element) {
		return element.getText();
	}
	public String getTitle(WebDriver driver) {
			return driver.getTitle();
	}
	
	
	public void fill(WebElement element,String data) {
		element.sendKeys(data);
	}
	public void clickBtn(WebElement element) {
		element.click();
	}
	public void browserClose(WebDriver driver) {
		driver.quit();
	}
	
//	public void Select(WebElement element,int num,String value,String text) {
//		 s = new Select(element);
//		 s.selectByIndex(num);
//		 s.selectByValue(value);
//		 s.selectByVisibleText(text);
	}
	
	
	
	

