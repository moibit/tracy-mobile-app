import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "tracy.db";


export const CreateDB =
    async () => {
        try {
            let dbVal = await SQLite.openDatabase({ name: database_name });
            await CreateTables(dbVal);
        }
        catch (err) {
            throw new Error(err);
        }

    }

export const CreateTables = async (DB) => {
    try {
        let result = await DB.executeSql("CREATE TABLE IF NOT EXISTS User( " +
            "mobile TEXT," +
            "status TEXT" +
            ");");
        return result;
    }
    catch (err) {
        throw new Error(err);
    }
}

export const InsertData = async (mobile, status) => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        let x = await DB_Open.executeSql(
            'INSERT INTO User (mobile, status) VALUES (?,?)',
            [mobile, status])
        return x;
    }

    catch (Err) {
        throw new Error(Err);
    }
}

export const GetDBData = async () => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        let x = await DB_Open.executeSql("SELECT * FROM User");
        return x[0].rows.item(0);
    }

    catch (Err) {
        throw new Error(Err);
    }
}



export const dropTable = async () => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        await DB_Open.executeSql('DROP TABLE IF EXISTS User', []);
    }
    catch (err) {
        throw new Error(err);
    }
}