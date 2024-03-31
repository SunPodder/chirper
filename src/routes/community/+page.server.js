export async function load({locals}){
    let communities = (await locals.db.query(`SELECT * FROM community LIMIT 10`))[0];

    return {
        communities
    }
}