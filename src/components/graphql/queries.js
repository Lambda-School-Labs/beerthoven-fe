import gql from 'graphql-tag';

export const ALL_PERSONS = gql`
	query allpersons {
		persons {
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

export const ALL_EVENTS = gql`
	query allevents {
		events {
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
