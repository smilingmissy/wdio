Feature:  Test Login Functionality
    
    
    Scenario: Successful Login with Valid Credentials
        Given user is on login page
        When user enters username and password
        When clicks on login button
        Then user is navigated to the home page
        