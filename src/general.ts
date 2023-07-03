export type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
export type PartialReadonlyRecord<K extends keyof any, T> = Readonly<Partial<Record<K, T>>>

export type Id = string
export type Timestamp = number

export type IdMap<T> = ReadonlyRecord<Id, T>
export type IdDictionary<T> = IdMap<T | undefined>
