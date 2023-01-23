@keyPresses
Feature: Hovers

    Test hover functionality

    Background:
        Given User is on the "key_presses" page

    Scenario Outline: User can see a pressed key
        When User presses <key> 
        Then User sees You entered: <result>

        Examples:
            | key   | result |
            | 1 | 1 |
            | k | K |
            | Alt | ALT |
            | Backspace  | BACK_SPACE |



     Scenario Outline: User can see an empty input
        When User enters <keys> to an input
        * User presses Enter 
        Then User sees an empty string

        Examples:
            | keys    | 
            | k       |
            | train   |
            | Shift   |
            