module.exports = {
	client: 'postgresql',
	connection: process.env.DATABASE_URL || {
		database: 'tasks',
		user: 'postgres',
		password: 'senha123'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: './migrations',
		tableName: 'knex_migrations'
	}
};
