DEFINE TABLE user SCHEMAFULL
	PERMISSIONS
        FOR select, update FULL
        FOR delete WHERE $auth.id == id;


DEFINE FIELD username ON user TYPE string VALUE string::lowercase($value) ASSERT string::is::alphanum($value)
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD password ON user TYPE string
    PERMISSIONS FOR select, update WHERE $auth.id == id;


DEFINE FIELD name ON user TYPE string DEFAULT ''
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD first_name ON user FLEXIBLE TYPE string
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD last_name ON user FLEXIBLE TYPE string
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD avatar ON user TYPE string DEFAULT ''
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD cover ON user TYPE string DEFAULT ''
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD bio ON user TYPE option<string>
    PERMISSIONS FOR update WHERE $auth.id == id;
DEFINE FIELD address ON user FLEXIBLE TYPE object DEFAULT {}
    PERMISSIONS FOR update WHERE $auth.id == id;

DEFINE FIELD followers ON user TYPE array<record<user>> DEFAULT [];
DEFINE FIELD following ON user TYPE array<record<user>> DEFAULT [];
DEFINE FIELD created_on ON user VALUE time::now() READONLY;

DEFINE INDEX username ON user FIELDS username UNIQUE;


DEFINE SCOPE user SESSION 1d
	SIGNIN (
		SELECT * FROM user WHERE email = $email AND crypto::argon2::compare(password, $password)
	)
	SIGNUP (
		CREATE user CONTENT {
			username: $username,
			password: crypto::argon2::generate($password),
            name: string::concat($first_name, ' ', $last_name),
            first_name: $first_name,
            last_name: $last_name,
            avatar: string::concat('https://api.dicebear.com/7.x/lorelei/jpg?seed=', $username),
            cover: string::concat('https://picsum.photos/seed/', $username,'/800/300'),
            bio: $bio,
            followers: [],
            following: [],
            address: $address
		}
	);


DEFINE TABLE chirp SCHEMAFULL
    PERMISSIONS
        FOR create WHERE $auth.id != NULL
        FOR select WHERE public = true
        FOR update FULL
        FOR delete WHERE author.id = $auth.id;

DEFINE FIELD content ON chirp TYPE string
    PERMISSIONS FOR update WHERE $auth.id == author.id;
DEFINE FIELD public ON chirp TYPE bool DEFAULT true
    PERMISSIONS FOR update WHERE $auth.id == author.id;
DEFINE FIELD created_on ON chirp VALUE time::now() READONLY;
DEFINE FIELD author ON chirp TYPE record<user> VALUE $auth.id DEFAULT $auth.id READONLY;
DEFINE FIELD likes ON chirp TYPE array<record<user>> DEFAULT [];
DEFINE FIELD comments ON chirp FLEXIBLE TYPE array<object> DEFAULT [];



DEFINE TABLE community SCHEMAFULL
    PERMISSIONS
        FOR create WHERE $auth.id != NULL
        FOR select, update, delete FULL;


DEFINE FIELD creator ON community TYPE record<user> DEFAULT $auth.id READONLY;
DEFINE FIELD name ON community TYPE string;
DEFINE FIELD description ON community TYPE string;
DEFINE FIELD members ON community TYPE array<record<user>>;
DEFINE FIELD created_on ON community VALUE time::now() READONLY;
DEFINE FIELD cover ON community TYPE string DEFAULT 'https://picsum.photos/seed/community/800/300';
DEFINE FIELD chirps ON community TYPE array<record<chirp>> DEFAULT [];

DEFINE INDEX name ON community FIELDS name UNIQUE;

