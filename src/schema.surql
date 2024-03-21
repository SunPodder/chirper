// User Schema

DEFINE TABLE IF NOT EXISTS user SCHEMAFULL
	PERMISSIONS
        FOR update, delete WHERE id = $auth.id;

// auth fields
DEFINE FIELD IF NOT EXISTS email ON user TYPE string VALUE string::lowercase($value) ASSERT string::is::email($value)
    PERMISSIONS FOR select WHERE id = $auth.id;
DEFINE FIELD IF NOT EXISTS password ON user TYPE string
    PERMISSIONS FOR select WHERE id = $auth.id;
DEFINE FIELD IF NOT EXISTS created_on ON user VALUE time::now() READONLY
    PERMISSIONS FOR select WHERE id = $auth.id;

// info
DEFINE FIELD IF NOT EXISTS username ON user TYPE string VALUE string::lowercase($value) ASSERT string::is::alphanumeric($value);
DEFINE FIELD IF NOT EXISTS name ON user FLEXIBLE TYPE object;
DEFINE FIELD IF NOT EXISTS avatar ON user TYPE string;
DEFINE FIELD IF NOT EXISTS cover ON user TYPE string;

// misc fields
DEFINE FIELD IF NOT EXISTS bio ON user TYPE option<string>;
DEFINE FIELD IF NOT EXISTS followers ON user TYPE array<record<string>>;
DEFINE FIELD IF NOT EXISTS following ON user TYPE array<record<string>>;
DEFINE FIELD IF NOT EXISTS address ON user FLEXIBLE TYPE object;

DEFINE INDEX IF NOT EXISTS username ON user FIELDS username UNIQUE;



// User auth

DEFINE SCOPE IF NOT EXISTS user SESSION 1d
	SIGNIN (
		SELECT * FROM user WHERE email = $email AND crypto::argon2::compare(password, $password)
	)
	SIGNUP (
		CREATE user CONTENT {
			username: $username,
			email: $email,
			password: crypto::argon2::generate($password)
            name: $name,
            avatar: $avatar,
            cover: $cover,
            bio: $bio,
            followers: $followers,
            following: $following,
            address: $address
		}
	);



// Chirp Schema
DEFINE TABLE chirp SCHEMAFULL
    PERMISSIONS
        FOR select WHERE public = true
        FOR update, delete WHERE id = $auth.id;

DEFINE FIELD content ON chirp TYPE string;
DEFINE FIELD public ON chirp TYPE boolean VALUE true;
DEFINE FIELD created_on ON chirp TYPE time VALUE time::now() READONLY;
DEFINE FIELD author ON chirp TYPE record<string> VALUE $auth.id;
DEFINE FIELD likes ON chirp TYPE array<record<string>>;
DEFINE FIELD comments ON chirp FLEXIBLE TYPE array<object<string>>;
