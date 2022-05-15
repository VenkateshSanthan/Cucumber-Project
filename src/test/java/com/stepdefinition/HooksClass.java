package com.stepdefinition;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.baseclass.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class HooksClass extends BaseClass {
	@Before
	private void beforeExecution() {
		launchChrome();
		urlLaunch(driver, "https://adactinhotelapp.com/");
	}
	@After
	private void afterExecution() throws IOException {
		TakesScreenshot sh = ((TakesScreenshot)driver);
		File scrShot = sh.getScreenshotAs(OutputType.FILE);
		File f = new File("C:\\Users\\Venkat\\eclipse-workspace\\CucumberSample\\src\\test\\resources\\Reports");
		 FileUtils.copyFile(scrShot, f);
		 
		 driver.quit();
	}
	
	
	
	
	
}
