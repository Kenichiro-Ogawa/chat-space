# README

## users テーブル

| Column   | Type   | Options                  |
| -------- | ------ | ------------------------ |
| name     | string | null: false, index: true |
| email    | string | null: false, index: true |
| password | string | null: false              |

### Association

- has_many :tweets
- has_many :groups_users
- has_many :groups, through: :groups_users

## groups テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

### Association

- has_many : groups_users
- has_many : users, through: :groups_users
- has_many : tweets

## groups_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| group  | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

## tweets テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| body   | text       |
| image  | string     |
| user   | references | null: false, foreign_key: true |
| group  | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group
