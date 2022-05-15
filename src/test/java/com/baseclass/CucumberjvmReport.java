package com.baseclass;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class CucumberjvmReport {

	public static void generateReport(String json) {
		File f = new File("C:\\Users\\Venkat\\eclipse-workspace\\CucumberSample\\src\\test\\resources\\Reports");
		Configuration config = new Configuration(f, "CucumberSample");
		config.addClassifications("Browser", "Chrome");
		config.addClassifications("Platfrom", "Windows");
		config.addClassifications("BuildPath", "1.5.58");

		List<String> li = new LinkedList<String>();
		li.add(json);
		
		ReportBuilder rb= new ReportBuilder(li, config);
		rb.generateReports();
		
	
	
	
	
	
	
	}
}