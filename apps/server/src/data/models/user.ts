import type { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely"

export interface UserTable {
  id: Generated<string>
  username: string
  email: string
  first_name: string
  last_name: string
  created_at: ColumnType<Date, string | undefined, never>
}

export type DbUser = Selectable<UserTable>
export type NewDbUser = Insertable<UserTable>
export type UpdateDbUser = Updateable<UserTable>