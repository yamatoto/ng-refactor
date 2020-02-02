# ItemRefactor

このプロジェクトはAngularでリファクタリングの練習をする為のものです。
バックエンドサーバー側のREST APIも備えています。
npm start でサーバー側が起動します。

## DB連携用ファイル

適宜設定してください。
gitignoreに設定して、pushしないように注意してください。

server/config/config.json
```
{
    "development": {
        "username": "your_username",
        "password": "your_password",
        "database": "your_database",
        "host": "127.0.0.1:3306",
        "dialect": "mysql"
    },
    "test": {
        "username": "your_username",
        "password": "your_password",
        "database": "your_database",
        "host": "127.0.0.1:3306",
        "dialect": "mysql"
    },
    "production": {
        "username": "user_username",
        "password": "user_password",
        "database": "your_database",
        "host": "127.0.0.1:3306",
        "dialect": "mysql"
    }
}
```
