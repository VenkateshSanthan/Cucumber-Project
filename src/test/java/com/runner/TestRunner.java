package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.TakesScreenshot;

import com.baseclass.CucumberjvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features",glue="com.stepdefinition",dryRun=false,monochrome=true,
							plugin= {"pretty","json:C:\\Users\\Venkat\\eclipse-workspace\\CucumberSample\\src\\test\\resources\\Reports\\rep.json"})
public class TestRunner {

	@AfterClass
	public static void reportjvm() {
		CucumberjvmReport.generateReport("C:\\Users\\Venkat\\eclipse-workspace\\CucumberSample\\src\\test\\resources\\Reports\\rep.json");

		
}
}