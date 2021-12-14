
Feature: Test example

    click navigation buttons

    @test
    Scenario: open homepage
        Given I have loaded config-data
        Then I navigate to "cypress_url"
        Then I see 4 navigation buttons at left side
        And I see 5 navigation buttons at right side

    