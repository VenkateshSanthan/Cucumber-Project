Feature: Validation of Adactin Hotel Page

  Scenario: TC01_Validation Of Valid Username,Password and Booking Functionality
    Given User Launch Adactin Web Application
    Then User Verify The Login Page is Displayed
    When User Enter Valid Username and Password
    And User Click The Login Button
    Then User Verify the Search Hotel Page is Displayed
    Then User Select Location,Hotel,Room Type,Number of Rooms
    When User Enter Check In-Date,Check Out-Date
    And User Select Adults per Room,Children Per Room
    Then User Click Search Buttton
    And User Click Radio Buttton and Continue Button
    When User Enter First Name,Last Name,Billing Address,Credit Card No
    Then User Select Credit Card Type,Expiry Month,Expiry Year
    And User Enter CVV Number and Click Book Now Button
    Then User Verify the Order No is Displayed
    Then User Quit The Browser
    
  Scenario Outline: TC02_Validation Of Valid Username,Password and Multiple Credentials
    Given User Launch Adactin Web Application
    Then User Verify The Login Page is Displayed
    When User Enter Valid Username and Password
    And User Click The Login Button
    Then User Verify the Search Hotel Page is Displayed
    Then User Select Location,Hotel,Room Type,Number of Rooms
    When User Enter Check In-Date,Check Out-Date
    And User Select Adults per Room,Children Per Room
    Then User Click Search Buttton
    And User Click Radio Buttton and Continue Button
    When User Enter First Name"<FirstName>",LastName"<LastName>",Add"<BillingAddress>",ccNo"<CreditCardNo>"
    Then User Select Credit Card Type,Expiry Month,Expiry Year
    And User Enter cvvNo "<CVVNumber>" and Click Book Now Button
    Then User Verify the Order No is Displayed
    Then User Quit The Browser

    Examples: 
      | FirstName | LastName  | BillingAddress | CreditCardNo     | CVVNumber |
      | Venkatesh | Santhanam | Chennai        | 1425361020307485 |       202 |
      | Ramesh    | Santa     | Madurai        | 1425361025586947 |       582 |