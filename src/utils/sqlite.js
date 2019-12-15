import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'Weather.db',
    location: 'default',
    createFromLocation: '~www/Weather.db'
  },
  () => console.log('SQLite connection succeeded!'),
  err => console.log(err)
);

export const SQL = (sql) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(sql, [], (tx, result) => {
        console.log("Query completed");
        resolve(result)
      })
    })
  })
}
