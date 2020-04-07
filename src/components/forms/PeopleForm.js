import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Form, Input, Button, Select, Row, Col } from 'antd';

const PeopleForm = ({ onSubmit }) => {
	const { control, handleSubmit, errors } = useForm();

	const fieldProps = {
		colon : false,
	};

	return (
		<Form layout="vertical" onFinish={onSubmit}>
			<h1>Add New Profile</h1>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='First Name'
						name="first_name"
						{...fieldProps}
						rules={[{ required: true }]}
					>
						<Input placeholder="Enter first name" />
					</Form.Item>
					<Form.Item
						label='Email'
						name="email"
						{...fieldProps}
						rules={[{ required: true }]}
					>
						<Input type="email" placeholder="Enter email address" />
					</Form.Item>
				</Col>

				<Col span={12}>
					<Form.Item
						label='Last Name'
						name="last_name"
						{...fieldProps}
						rules={[{ required: true }]}
					>
						<Input placeholder="Enter last name" />
					</Form.Item>

					<Form.Item
						label='Phone number'
						name="phone"
						{...fieldProps}
					>
						<Input type="number" placeholder="Enter phone number" />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col>
					<Form.Item
						label='Address'
						name="address"
						{...fieldProps}
					>
						<Input placeholder="Enter street address" />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='Address line 2 (optional)'
						name="address2"
						{...fieldProps}
					>
						<Input placeholder='Enter apartment, suite, etc' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label='City'
						name="city"
						{...fieldProps}
					>
						<Input placeholder='Enter city' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={6}>
					<Form.Item
						label='State'
						name="state"
						{...fieldProps}
					>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						label='Zip code'
						name="zip"
						{...fieldProps}
						rules={[{ required: true }]}
					>
						<Input placeholder='Enter zip code' />
					</Form.Item>
				</Col>
				<Col span={12} />
			</Row>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PeopleForm;
