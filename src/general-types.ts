export type Primitive = string | number | boolean | bigint | symbol | undefined | null
export type Builtin = Primitive | Function | Date | Error | RegExp // eslint-disable-line @typescript-eslint/ban-types

export type Writable<T> = { -readonly [K in keyof T]: T[K] }
export type DeepWritable<T> = T extends Builtin
  ? T
  : T extends Promise<infer U>
  ? Promise<DeepWritable<U>>
  : T extends {}
  ? { -readonly [K in keyof T]: DeepWritable<T[K]> }
  : T

export type ReadonlyRecord<K extends keyof any, T> = Readonly<Record<K, T>>
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
export type PartialReadonlyRecord<K extends keyof any, T> = Readonly<Partial<Record<K, T>>>

export type Id = string
export type Timestamp = number

export type IdMap<T> = ReadonlyRecord<Id, T>
export type IdDictionary<T> = IdMap<T | undefined>
