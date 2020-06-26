# README

## users テーブル

| Column    | Type   | Options                              |
| --------- | ------ | ------------------------------------ |
| user_name | string | null: false, add_index(unique: true) |
| email     | string | null: false, add_index(unique: true) |
| password  | string | null: false                          |

### Association

- has_many :tweets
- has_many :groups_users
- has_many :groups, through: groups_users

## groups テーブル

| Column     | Type   | Options                              |
| ---------- | ------ | ------------------------------------ |
| group_name | string | null: false, add_index(unique: true) |

### Association

- has_many : group_users
- has_many : users, through: groups_users
- has_many : tweets

## groups_users テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| user_id  | references | null: false, foreign_key: true |
| group_id | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group

## tweets テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| body     | text       | null: false                    |
| image    | string     |
| user_id  | references | null: false, foreign_key: true |
| group_id | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :group
