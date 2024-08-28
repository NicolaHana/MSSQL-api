import sql from "mssql";

export const getUser = async () => {
    try {
        const request = new sql.Request();
        const result = await request.query("SELECT * FROM users");
        return result.recordset; // Return the recordset directly
    } catch (err) {
        console.log("Error executing query", err);
        return []; // Return an empty array or handle the error as needed
    }
};
