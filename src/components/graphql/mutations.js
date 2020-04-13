import gql from 'graphql-tag';

export const CREATE_PERSON = gql`
	mutation createPerson($newPerson: PersonCreateInput!) {
		createPerson(data: $newPerson) {
			id
			first_name
			last_name
			email
			phone
			address
			address2
			city
			state
			zip
		}
	}
`;

export const CREATE_EVENT = gql`
	mutation createEvent($newEvent: EventCreateInput!) {
		createEvent(data: $newEvent) {
			id
			date_created
			eventbriteEventId
			event_name
			event_type
			address
			address2
			city
			state
			zip
			event_description
			max_capacity
			min_capacity
			min_income
			deposit_amount
			smoking_allowed
			under21_allowed
			under18_allowed
			tickets_sold
			wheelchair_accessible
			alcohol_beer_served
			alcohol_wine_served
			alcohol_spirits_served
			food_served
			setup_costs
			talent_costs
			opening_time
			closing_time
			event_date
			tabc_certified
			indoor_event
			outdoor_vent
			parking_lot_available
			parking_max_capacity
			sales_gross
			sales_net
		}
	}
`;
