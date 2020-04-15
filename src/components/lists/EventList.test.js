import React from 'react';
import { render } from '@testing-library/react';
import EventList from './EventList';

// test data
const list = [
	{
		id                     : 'ck91ki0eo50r20814s6g6eaus',
		date_created           : '2020-04-15T16:47:01.776Z',
		eventbriteEventId      : null,
		event_name             : 'Bogisich, Fisher and Emard',
		event_type             : 'Inc',
		address                : '78194 MacGyver Trace',
		address2               : null,
		city                   : 'Towneland',
		state                  : 'FL',
		zip                    : '63211-5144',
		event_description      : 'artificial intelligence',
		max_capacity           : 617,
		min_capacity           : 29,
		min_income             : 73397,
		deposit_amount         : 628,
		smoking_allowed        : false,
		under21_allowed        : false,
		under18_allowed        : false,
		tickets_sold           : 867,
		wheelchair_accessible  : false,
		alcohol_beer_served    : true,
		alcohol_wine_served    : false,
		alcohol_spirits_served : false,
		food_served            : true,
		setup_costs            : 1065,
		talent_costs           : 71922,
		opening_time           : '5',
		closing_time           : '9',
		event_date             : '2020-11-29T12:39:01.801Z',
		tabc_certified         : true,
		indoor_event           : true,
		outdoor_event          : false,
		parking_lot_available  : true,
		parking_max_capacity   : 31,
		sales_gross            : 7372,
		sales_net              : 2628,
	},
	{
		id                     : 'ck91ki1fc50sd0814bslyhzrm',
		date_created           : '2020-04-15T16:47:03.096Z',
		eventbriteEventId      : null,
		event_name             : 'Mills - Weissnat',
		event_type             : 'Inc',
		address                : '77421 Tatyana Plain',
		address2               : null,
		city                   : 'Turnerland',
		state                  : 'MD',
		zip                    : '79608',
		event_description      : 'process improvement',
		max_capacity           : 218,
		min_capacity           : 34,
		min_income             : 93742,
		deposit_amount         : 752,
		smoking_allowed        : false,
		under21_allowed        : true,
		under18_allowed        : false,
		tickets_sold           : 643,
		wheelchair_accessible  : false,
		alcohol_beer_served    : false,
		alcohol_wine_served    : true,
		alcohol_spirits_served : false,
		food_served            : false,
		setup_costs            : 512,
		talent_costs           : 94017,
		opening_time           : '7',
		closing_time           : '10',
		event_date             : '2020-07-29T14:05:22.385Z',
		tabc_certified         : false,
		indoor_event           : true,
		outdoor_event          : true,
		parking_lot_available  : false,
		parking_max_capacity   : 133,
		sales_gross            : 2940,
		sales_net              : 3089,
	},
	{
		id                     : 'ck91ki2iv50tm0814mi89gxpo',
		date_created           : '2020-04-15T16:47:04.519Z',
		eventbriteEventId      : null,
		event_name             : 'Daugherty Group',
		event_type             : 'Group',
		address                : '618 Felicia Squares',
		address2               : null,
		city                   : 'Lake Marcelle',
		state                  : 'GA',
		zip                    : '67251',
		event_description      : 'ability',
		max_capacity           : 587,
		min_capacity           : 20,
		min_income             : 97453,
		deposit_amount         : 626,
		smoking_allowed        : false,
		under21_allowed        : true,
		under18_allowed        : false,
		tickets_sold           : 246,
		wheelchair_accessible  : true,
		alcohol_beer_served    : true,
		alcohol_wine_served    : true,
		alcohol_spirits_served : true,
		food_served            : false,
		setup_costs            : 931,
		talent_costs           : 627,
		opening_time           : '5',
		closing_time           : '11',
		event_date             : '2021-02-09T09:17:47.255Z',
		tabc_certified         : true,
		indoor_event           : false,
		outdoor_event          : true,
		parking_lot_available  : true,
		parking_max_capacity   : 249,
		sales_gross            : 2450,
		sales_net              : 5892,
	},
];

test('renders an empty list', () => {
	const { getByText } = render(<EventList list={[]} />);
	expect(getByText('No Data')).toBeInTheDocument();
});

test('renders a list with length', () => {
	const { getByText } = render(<EventList list={list} />);

	// expect first array item to be in the document
	expect(getByText(list[0].event_name)).toBeInTheDocument();

	// expect last array item to be in the document
	expect(getByText(list[list.length - 1].event_name)).toBeInTheDocument();
});

test('edit button works', () => {
	const onEdit = jest.fn();
	const singleItemList = [
		list[0],
	];
	const { getByText } = render(<EventList list={singleItemList} onEdit={onEdit} />);

	// get and click button
	const editBtn = getByText('Edit');
	editBtn.click();

	expect(onEdit).toHaveBeenCalledTimes(1);
	expect(onEdit).toHaveBeenCalledWith(singleItemList[0].id);
});

test('delete button works', () => {
	const onDelete = jest.fn();
	const singleItemList = [
		list[0],
	];
	const { getByText } = render(<EventList list={singleItemList} onDelete={onDelete} />);

	// get and click button
	const deleteBtn = getByText('Delete');
	deleteBtn.click();

	expect(onDelete).toHaveBeenCalledTimes(1);
	expect(onDelete).toHaveBeenCalledWith(singleItemList[0].id);
});
