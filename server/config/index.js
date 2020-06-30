const config = {
	port: process.env.PORT || 4000,
	jwtSecret: process.env.JWT_SECRET || 'mkT23j#u!45',
	mongoURI: process.env.MONGODB_URI || 'mongodb+srv://pfeticke:1234567890@cluster0-1kh9t.mongodb.net/<dbname>?retryWrites=true&w=majority'
};

export default config;
