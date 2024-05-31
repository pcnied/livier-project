import { User } from './user';

interface Address {
	id: string;
	name: string;
	customer: User;
	street: string;
	neighborhood: string;
	number: string;
	complement: string | null;
	city: string;
	state: string;
	zipCode: string;
	recipient: string;
	recipientPhone: string;
	default: boolean;
}

export type IUpdateAddressRequestDTO = Partial<Address>;

export interface ICreateAddressRequestDTO {
	name: string;
	street: string;
	number: string;
	neighborhood: string;
	complement: string;
	city: string;
	state: string;
	zipCode: string;
	recipient: string;
	recipientPhone: string;
}

export default Address;
