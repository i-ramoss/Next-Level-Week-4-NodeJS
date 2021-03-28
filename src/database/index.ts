import { Connection, createConnection, getConnectionOptions } from "typeorm"

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return createConnection(
    Object.assign(defaultOptions, {
      host: "database",
      database: process.env.NODE_ENV === "test" 
        ? "nps_test" 
        : defaultOptions.database
    })
  )
}