const connection = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results
};
const updateUser = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, id]
    )
}

const getUserByID = async (id) => {
    let [ results, fields ] = await connection.query('SELECT * FROM Users WHERE id = ?', [id]);
    let user = results && results.length > 0 ? results : {};
    return user
}

const deleteUserById = async (id) => {
    let [results, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [id]);
}
module.exports = { getAllUsers, updateUser, getUserByID, deleteUserById };

