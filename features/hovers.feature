@hovers
Feature: Hovers

    Test hover functionality

    Background:
        Given User is on the "hovers" page

    Scenario Outline: User can see info when hover on an avatar <user>
        When User hovers on an avatar <user>
        Then User can see a name and a link under the avatar <user>

        Examples:
            | user |
            | 1    |
            | 2    |
            | 3    |

    Scenario Outline: User cannot see info when hover off an avatar <user>
        When User hovers on an avatar <user>
        * User hovers on a page title
        Then User cannot see a name and a link under the avatar <user>

        Examples:
            | user |
            | 1    |
            | 2    |
            | 3    |

    Scenario Outline: User can go to a user <user> page
        When User hovers on an avatar <user>
        * User clicks on a link under the avatar <user>
        Then User sees a page of a <user>

        Examples:
            | user |
            | 1    |
            | 2    |
            | 3    |


