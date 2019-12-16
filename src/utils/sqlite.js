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

// db.transaction(tx => {
//   tx.executeSql(`INSERT OR REPLACE INTO historyDay(day) VALUES(1)`, [], (tx, result) => {})
// })
// db.transaction(tx => {
//   tx.executeSql(`UPDATE historyDay set day=2`, [], (tx, result) => {})
// })
// db.transaction(tx => {
//   tx.executeSql(`DELETE FROM historyDay WHERE day = 1`, [], (tx, result) => {})
// })
// db.transaction(tx => {     // 建表
//   tx.executeSql(`CREATE TABLE IF NOT EXISTS historyDay (
//     day	INTEGER NOT NULL DEFAULT 7 UNIQUE
//   )`, [], () => console.log('createTable executeSql success'))
// })
// db.transaction(tx => {
//   tx.executeSql('SELECT * FROM historyDay;', [], (tx, result) => {
//     let arr = [];
//     for (let i = 0; i < result.rows.length; i++) {
//       arr.push(result.rows.item(i))
//     }
//   })
// })

// DROP TABLE ${tableName}  删表
// SELECT * FROM ${tableName} WHERE ${key} = ${value} 查询
// DELETE FROM ${tableName} WHERE ${key} = ${value} 删数据
// db.transaction(tx => {     // 建表
//   tx.executeSql(`CREATE TABLE IF NOT EXISTS historyDay (
//     day	INTEGER NOT NULL DEFAULT 7
//   )`, [], () => console.log('createTable executeSql success'))
// })
// INSERT OR REPLACE INTO historyDay(${key},) VALUES(${value},) 插入或替换数据
