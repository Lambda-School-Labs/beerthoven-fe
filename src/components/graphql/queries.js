import gql from 'graphql-tag';

export const ALL_PERSONS = gql`
		query allpersons {
			persons{
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
