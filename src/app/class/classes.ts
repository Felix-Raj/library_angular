export class Result<T> {
	count: number;
	next: string;
	previous: string;
	results: Array<T>;
}

export class Tag {
	tag: string;
}

export class Book {
	id: number;
	title: string;
	author: string;
	copies: number;
	booktag_set: Array<Tag>;
}

export class User {
	id: string;
	uid: string;
	name: string;
}

export class Lent {
	lib_user: User;
	book: Book;
	lent_on: Date;
	due_on?: Date;
	duration?: string;

	static default_lent_period = 14;
}