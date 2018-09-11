export class Result<T> {
	count: number;
	next: string;
	previous: string;
	results: Array<T>;
}

export class Tag {
	tag: string;
}

export class Avatar {
	filename: string;
	filetype: string;
	value: string|any;
}

export class Book {
	id: number;
	title: string;
	author: string;
	copies: number;
	price: number;
	booktag_set: Array<Tag>;
	book_id: string;
	locked?: boolean;
	copies_on_lent?: number;
	is_availabled?: boolean;
	category?: string;
	preview?: Avatar;
}
export const book_categories = ['magazine', 'comics', 'books'];

export class User {
	id: string;
	uid: string;
	name: string;
	date_of_birth?: string;
	avatar?: Avatar;
}

export class Lent {
	id?: string;
	lib_user: User;
	book: Book;
	lent_on: Date;
	due_on?: Date;
	duration?: string;

	static default_lent_period = 14;
}

export class Note{
	id: string;
	note: string;
}