import React from 'react';
import { render } from '@testing-library/react';
import VenueList from './VenueList';

// test data
const list = [
	{
		id                       : 'ck91ki0iz50r808145gbzciww',
		date_created             : '2020-04-15T16:47:01.930Z',
		name                     : 'Lockman, Mohr and Walker',
		venue_type               : 'contextually-based',
		address                  : '181 Delbert Gateway',
		city                     : 'Leuschkeville',
		state                    : 'ME',
		zip                      : '18791',
		max_capacity             : 138,
		min_income               : 305551,
		deposit_amount           : 2605,
		smoking_allowed          : true,
		under21_allowed          : true,
		under18_allowed          : true,
		wheelchair_accessible    : false,
		alcohol_beer_provided    : false,
		alcohol_wine_provided    : false,
		alcohol_spirits_provided : false,
		food_served              : true,
		max_decibel              : 52,
		opening_time             : '7',
		closing_time             : '9',
		dance_floor_size         : '396',
		indoor_venue             : false,
		outdoor_venue            : true,
		parking_lot_available    : true,
		parking_max_capacity     : 48,
		tabc_certified           : false,
	},
	{
		id                       : 'ck91ki1iv50si081462zawr0i',
		date_created             : '2020-04-15T16:47:03.223Z',
		name                     : 'Schmidt LLC',
		venue_type               : 'grid-enabled',
		address                  : '0078 Destiney Shoals',
		city                     : 'West Jackson',
		state                    : 'TX',
		zip                      : '10512-8054',
		max_capacity             : 130,
		min_income               : 192472,
		deposit_amount           : 1063,
		smoking_allowed          : true,
		under21_allowed          : false,
		under18_allowed          : true,
		wheelchair_accessible    : true,
		alcohol_beer_provided    : true,
		alcohol_wine_provided    : true,
		alcohol_spirits_provided : true,
		food_served              : false,
		max_decibel              : 82,
		opening_time             : '6',
		closing_time             : '9',
		dance_floor_size         : '229',
		indoor_venue             : true,
		outdoor_venue            : true,
		parking_lot_available    : false,
		parking_max_capacity     : 74,
		tabc_certified           : false,
	},
	{
		id                       : 'ck91ki2mc50tr0814eaqzu46h',
		date_created             : '2020-04-15T16:47:04.643Z',
		name                     : 'Smitham, King and Bailey',
		venue_type               : 'real-time',
		address                  : '684 Mann Forks',
		city                     : 'Breanafurt',
		state                    : 'OR',
		zip                      : '41241',
		max_capacity             : 150,
		min_income               : 567162,
		deposit_amount           : 2060,
		smoking_allowed          : false,
		under21_allowed          : false,
		under18_allowed          : false,
		wheelchair_accessible    : false,
		alcohol_beer_provided    : true,
		alcohol_wine_provided    : false,
		alcohol_spirits_provided : true,
		food_served              : true,
		max_decibel              : 75,
		opening_time             : '5',
		closing_time             : '12',
		dance_floor_size         : '259',
		indoor_venue             : true,
		outdoor_venue            : false,
		parking_lot_available    : true,
		parking_max_capacity     : 105,
		tabc_certified           : false,
	},
];

test('renders an empty list', () => {
	const { getByText } = render(<VenueList list={[]} />);
	expect(getByText('No Data')).toBeInTheDocument();
});

test('renders a list with length', () => {
	const { getByText } = render(<VenueList list={list} />);

	// expect first array item to be in the document
	expect(getByText(list[0].name)).toBeInTheDocument();

	// expect last array item to be in the document
	expect(getByText(list[list.length - 1].name)).toBeInTheDocument();
});

test('edit button works', () => {
	const onEdit = jest.fn();
	const singleItemList = [
		list[0],
	];
	const { getByText } = render(<VenueList list={singleItemList} onEdit={onEdit} />);

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
	const { getByText } = render(<VenueList list={singleItemList} onDelete={onDelete} />);

	// get and click button
	const deleteBtn = getByText('Delete');
	deleteBtn.click();

	expect(onDelete).toHaveBeenCalledTimes(1);
	expect(onDelete).toHaveBeenCalledWith(singleItemList[0].id);
});
