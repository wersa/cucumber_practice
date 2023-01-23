@addRemoveElement
Feature: Add and remove elements

    Test add and remove elements functionality

    Background: 
        Given User is on the "add_remove_elements/" page

    Scenario Outline: User can add <count> element(s)
        When I click on add element button <btnToAdd> time(s)
        Then I see <btnToAdd> "Delete" button(s)

        Examples: 
            | btnToAdd |
            | 1     |
            | 3     |
            | 10    |

    Scenario Outline: User can delete <btnToDelete> element(s)
        When I click on add element button <btnToAdd> time(s)
        * I click on last <btnToDelete> delete button(s)
        Then I see <btnOnPage> button(s)

        Examples: 
            | btnToAdd | btnToDelete | btnOnPage |
            | 1        | 1           | 0         |
            | 3        | 3           | 0         |
            | 3        | 2           | 1         |
            | 3        | 1           | 2         |
           

    