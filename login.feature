Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |


    
    Scenario: Successful Login with Valid Credentials
        Given user is on login page
        When user enters username and password
        When clicks on login button
        Then user is navigated to the home page
        
        Scenario: Successful Login with Valid Credentials
        Given I am on the login page
        When I enter valid credentials
        Then I show message of Successful login
    
    Scenario: Unsuccessful Login with Invalid Credentials
        Given I am on the login page
        When I enter invalid credentials
        Then I should see an error message indicating invalid login
    