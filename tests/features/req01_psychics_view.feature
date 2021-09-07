@view-all-psychics @acceptance
Feature: View All Psychics 
	In order to view all psychics information
	As a user
	I want to be able to view all resulting profiles available

	Background: Open Oranum website
		Given that Oranum website is open

	@view-all-live
	Scenario: View all the psychics
		Given that I scroll until the View All Live Psychics
		When I access the View All Live Psychics
		Then all the psychics are displayed

	@no-duplicate-psychics
	Scenario: No duplicate psychics are displayed
		Given that all the live psychics are viewed
		When I verify all the psychic profile nicknames
		Then each profile is displayed without duplicates

	@psychic-pictures
	Scenario: Psychic pictures displayed
		Given that all the live psychics are viewed
		When I verify all the psychic profile nicknames
		Then all psychic pictures are displayed

	@psychic-status
	Scenario: Psychic status displayed
		Given that all the live psychics are viewed
		When I verify all the psychic profile nicknames
		Then psychics are showed with different status:
			| status  |
			| Live    |
			| Offline |
			| Busy    |


# REQ-1 IS OUTDATED (Steps not implemented) - Please read the overview ABOUT_THE_CHALLENGE.md
# @psychic-language-spoken
# Scenario: Psychic languages spoken displayed
# 	Given that all the live psychics are viewed
# 	When I verify all the psychic profile nicknames
# 	Then all psychics has its languages spoken displayed

# @psychic-rating
# Scenario: Psychic rating displayed
# 	Given that all the live psychics are viewed
# 	When I verify all the psychic profile nicknames
# 	Then all psychics has its rating displayed