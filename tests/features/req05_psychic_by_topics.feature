@psychics-by-topic @acceptance
Feature: Select a Topic
	In order to find a psychic by topics
	As a user
	I want to be able to see all corresponding profiles into the topic

	@topic-results
	Scenario Outline: Select a topic with its matching psychics
		Given that Oranum website is open
		When I choose a "<topic>"
		Then the "<profileMatch>" match the current topic

		Examples:
			| topic      | profileMatch |
			| Love       | Lov          |
			| Tarot      | Myst         |
			| Dreams     | Angel        |
			| Astrology  | Moon         |
			| Guides     | Light        |
			| Family     | Advisor      |
			| Numerology | Predict      |
