@checkboxes
Feature: Checkboxes

    Test checkboxes functionality

    Background: 
        Given User is on the "checkboxes" page

    Scenario Outline: User can check <box> box
        When User selects box <box>
        Then User sees selected checkbox <box>

        Examples:
            | box |
            | 1   |
            | 2   |
    
    Scenario Outline: User can uncheck <box> box
        When User unchecks box <box>
        Then User sees unselected checkbox <box>

        Examples:
            | box |
            | 1   |
            | 2   |

    Scenario: User can check all boxes
        When User selects all boxes
        Then User sees all selected checkboxes 

    Scenario: User can uncheck all boxes
        When User unchecks all boxes
        Then User sees no selected checkboxes 

