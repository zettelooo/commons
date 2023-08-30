export type Writable<T> = { -readonly [K in keyof T]: T[K] }

export type DeepWritable<T> = T extends BuiltIns
  ? T
  : T extends ReadonlyArray<infer U>
  ? Array<DeepWritable<U>>
  : T extends ReadonlyMap<infer K, infer V>
  ? Map<K, DeepWritable<V>>
  : T extends ReadonlySet<infer M>
  ? Set<DeepWritable<M>>
  : {
      -readonly [K in keyof T]: DeepWritable<T[K]>
    }

export type DeepPartial<T> = T extends BuiltIns
  ? T
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U> | undefined>
  : T extends Array<infer U>
  ? Array<DeepPartial<U> | undefined>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<K, DeepPartial<V> | undefined>
  : T extends Map<infer K, infer V>
  ? Map<K, DeepPartial<V> | undefined>
  : T extends ReadonlySet<infer M>
  ? ReadonlySet<DeepPartial<M>>
  : T extends Set<infer M>
  ? Set<DeepPartial<M>>
  : {
      [K in keyof T]?: DeepPartial<T[K]>
    }

// eslint-disable-next-line @typescript-eslint/ban-types
type BuiltIns = Primitive | Function | Date | RegExp

type Primitive = null | undefined | string | number | boolean | symbol | bigint
