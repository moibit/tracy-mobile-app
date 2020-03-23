import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "tracy.db";


export const CreateDB =
    async () => {
        try {
            let dbVal = await SQLite.openDatabase({ name: database_name });
            let createAll = await CreateTables(dbVal);
            return dbVal;

        }
        catch (err) {
            // console.log(err);
        }

    }

export const CreateTables = async (DB) => {
    try {
        let result = await DB.executeSql("CREATE TABLE IF NOT EXISTS User( " +
            "mobile TEXT," +
            "status TEXT" +
            ");");
        //  console.log(result)
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

export const InsertData = async (mobile, status) => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        let x = await DB_Open.executeSql(
            'INSERT INTO User (mobile, status) VALUES (?,?)',
            [mobile, status])
        // let x = await DB_Open.executeSql("SELECT * FROM User;");
        // console.log("vl", x);
        return x;
    }

    catch (Err) {

    }
}

export const GetDBData = async (mobile, status) => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        let x = await DB_Open.executeSql("SELECT * FROM User");
        console.log(x[0].rows.item(0));
        return x[0].rows.item(0);
    }

    catch (Err) {
        console.log(Err)
    }
}



export const dropTable = async () => {
    try {
        const DB_Open = await SQLite.openDatabase({ name: database_name });
        await DB_Open.executeSql('DROP TABLE IF EXISTS User', []);
    }
    catch (err) {

    }
}