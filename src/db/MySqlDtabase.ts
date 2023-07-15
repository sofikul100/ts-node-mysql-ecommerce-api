
import mysql, { Connection, MysqlError } from "mysql";


class MySqlDatabase {

  private connection: Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: 'root',
      password: '',
      database: 'mysql-typescript',
    });
  }


  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.connect((error: MysqlError) => {
        if (error) {
          console.log('Mysql error is ', error)
          return reject(error)
        }

        console.log('Successfully Database Connect')
        resolve()
      });
    })
  };

  public query<T>(sql: string, params?: any[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error: MysqlError | null, results: T[]) => {
        if (error) {
          console.error('Error executing query:', error);
          return reject(error);
        }
        resolve(results);
      });
    });
  }


  public close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.end((error: any) => {
        if (error) {
          console.error('Error closing the database connection:', error);
          return reject(error);
        }
        console.log('Database connection closed.');
        resolve();
      });
    });
  }
}




export default MySqlDatabase;