@loginPage
Feature: The Internet Guinea Pig Website

      Scenario Outline: As a user, I can log into the secure area

        Given User is on the "login" page
        When I login with <username> and <password>
        Then I should see a flash message saying "<message>"

        Examples:
          | username | password             | message                        |
          | tomsmith | SuperSecretPassword! | You logged into a secure area! |
          | foobar   | barfoo               | Your username is invalid!      |

    # Background: 
    #     Given User is on the "login" page

    # Scenario: As a user, I can log into the secure area
    #     When I login with tomsmith and SuperSecretPassword!
    #     Then I should see a flash message saying "You logged into a secure area!"

    # Scenario: As a user, I cannot log into the secure area
    #     When I login with foobar and barfoo
    #     Then I should see a flash message saying "Your username is invalid!"
