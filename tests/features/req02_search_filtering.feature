@search-filtering @acceptance
Feature: Psychics Searching Results
	In order to find psychics by a partial name
	As a user
	I want to be able to find only results that matches the searching filter

	@searching-results-dropdown
	Scenario Outline: Searching results match
		Given that Oranum website is open
		When I type "<name>" on search
		Then only names matching the "<partialResult>" are displayed

		Examples:
			| name | partialResult |
			| Matt | matt          |
			| Myst | myst          |
			| Ann  | ann           |
			| psy  | psy           |

