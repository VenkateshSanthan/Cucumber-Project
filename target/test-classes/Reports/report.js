$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Adactin.feature");
formatter.feature({
  "name": "Validation of Adactin Hotel Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC01_Validation Of Valid Username,Password and Booking Functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify The Login Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_The_Login_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Valid_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Location,Hotel,Room Type,Number of Rooms",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Location_Hotel_Room_Type_Number_of_Rooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Check In-Date,Check Out-Date",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Check_In_Date_Check_Out_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Adults per Room,Children Per Room",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Select_Adults_per_Room_Children_Per_Room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Search Buttton",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_Search_Buttton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Buttton and Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_Radio_Buttton_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter First Name,Last Name,Billing Address,Credit Card No",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_First_Name_Last_Name_Billing_Address_Credit_Card_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Credit Card Type,Expiry Month,Expiry Year",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Credit_Card_Type_Expiry_Month_Expiry_Year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter CVV Number and Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Enter_CVV_Number_and_Click_Book_Now_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Order No is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Order_No_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Quit The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Quit_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "TC02_Validation Of Valid Username,Password and Multiple Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User Verify The Login Page is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter Valid Username and Password",
  "keyword": "When "
});
formatter.step({
  "name": "User Click The Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify the Search Hotel Page is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User Select Location,Hotel,Room Type,Number of Rooms",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter Check In-Date,Check Out-Date",
  "keyword": "When "
});
formatter.step({
  "name": "User Select Adults per Room,Children Per Room",
  "keyword": "And "
});
formatter.step({
  "name": "User Click Search Buttton",
  "keyword": "Then "
});
formatter.step({
  "name": "User Click Radio Buttton and Continue Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Enter First Name\"\u003cFirstName\u003e\",LastName\"\u003cLastName\u003e\",Add\"\u003cBillingAddress\u003e\",ccNo\"\u003cCreditCardNo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Select Credit Card Type,Expiry Month,Expiry Year",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter cvvNo \"\u003cCVVNumber\u003e\" and Click Book Now Button",
  "keyword": "And "
});
formatter.step({
  "name": "User Verify the Order No is Displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User Quit The Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "BillingAddress",
        "CreditCardNo",
        "CVVNumber"
      ]
    },
    {
      "cells": [
        "Venkatesh",
        "Santhanam",
        "Chennai",
        "1425361020307485",
        "202"
      ]
    },
    {
      "cells": [
        "Ramesh",
        "Santa",
        "Madurai",
        "1425361025586947",
        "582"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC02_Validation Of Valid Username,Password and Multiple Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify The Login Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_The_Login_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Valid_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Location,Hotel,Room Type,Number of Rooms",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Location_Hotel_Room_Type_Number_of_Rooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Check In-Date,Check Out-Date",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Check_In_Date_Check_Out_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Adults per Room,Children Per Room",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Select_Adults_per_Room_Children_Per_Room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Search Buttton",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_Search_Buttton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Buttton and Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_Radio_Buttton_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter First Name\"Venkatesh\",LastName\"Santhanam\",Add\"Chennai\",ccNo\"1425361020307485\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_First_Name_LastName_Add_ccNo(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Credit Card Type,Expiry Month,Expiry Year",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Credit_Card_Type_Expiry_Month_Expiry_Year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter cvvNo \"202\" and Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Enter_cvvNo_and_Click_Book_Now_Button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Order No is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Order_No_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Quit The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Quit_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_Validation Of Valid Username,Password and Multiple Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_Launch_Adactin_Web_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify The Login Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_The_Login_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Valid Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Valid_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click The Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Search Hotel Page is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Search_Hotel_Page_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Location,Hotel,Room Type,Number of Rooms",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Location_Hotel_Room_Type_Number_of_Rooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter Check In-Date,Check Out-Date",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_Check_In_Date_Check_Out_Date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Adults per Room,Children Per Room",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Select_Adults_per_Room_Children_Per_Room()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Search Buttton",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_Search_Buttton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click Radio Buttton and Continue Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Click_Radio_Buttton_and_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter First Name\"Ramesh\",LastName\"Santa\",Add\"Madurai\",ccNo\"1425361025586947\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Enter_First_Name_LastName_Add_ccNo(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Credit Card Type,Expiry Month,Expiry Year",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Credit_Card_Type_Expiry_Month_Expiry_Year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter cvvNo \"582\" and Click Book Now Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_Enter_cvvNo_and_Click_Book_Now_Button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Verify the Order No is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Verify_the_Order_No_is_Displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Quit The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Quit_The_Browser()"
});
formatter.result({
  "status": "passed"
});
});