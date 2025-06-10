
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bookings
 * 
 */
export type bookings = $Result.DefaultSelection<Prisma.$bookingsPayload>
/**
 * Model conveniences
 * 
 */
export type conveniences = $Result.DefaultSelection<Prisma.$conveniencesPayload>
/**
 * Model reviews
 * 
 */
export type reviews = $Result.DefaultSelection<Prisma.$reviewsPayload>
/**
 * Model room_conveniences
 * 
 */
export type room_conveniences = $Result.DefaultSelection<Prisma.$room_conveniencesPayload>
/**
 * Model rooms
 * 
 */
export type rooms = $Result.DefaultSelection<Prisma.$roomsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model wishlist
 * 
 */
export type wishlist = $Result.DefaultSelection<Prisma.$wishlistPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bookings
 * const bookings = await prisma.bookings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bookings
   * const bookings = await prisma.bookings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bookings`: Exposes CRUD operations for the **bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.bookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conveniences`: Exposes CRUD operations for the **conveniences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conveniences
    * const conveniences = await prisma.conveniences.findMany()
    * ```
    */
  get conveniences(): Prisma.conveniencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room_conveniences`: Exposes CRUD operations for the **room_conveniences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Room_conveniences
    * const room_conveniences = await prisma.room_conveniences.findMany()
    * ```
    */
  get room_conveniences(): Prisma.room_conveniencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rooms`: Exposes CRUD operations for the **rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.rooms.findMany()
    * ```
    */
  get rooms(): Prisma.roomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wishlist`: Exposes CRUD operations for the **wishlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishlists
    * const wishlists = await prisma.wishlist.findMany()
    * ```
    */
  get wishlist(): Prisma.wishlistDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    bookings: 'bookings',
    conveniences: 'conveniences',
    reviews: 'reviews',
    room_conveniences: 'room_conveniences',
    rooms: 'rooms',
    users: 'users',
    wishlist: 'wishlist'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bookings" | "conveniences" | "reviews" | "room_conveniences" | "rooms" | "users" | "wishlist"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bookings: {
        payload: Prisma.$bookingsPayload<ExtArgs>
        fields: Prisma.bookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findFirst: {
            args: Prisma.bookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          findMany: {
            args: Prisma.bookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          create: {
            args: Prisma.bookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          createMany: {
            args: Prisma.bookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          delete: {
            args: Prisma.bookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          update: {
            args: Prisma.bookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          deleteMany: {
            args: Prisma.bookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>[]
          }
          upsert: {
            args: Prisma.bookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.bookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      conveniences: {
        payload: Prisma.$conveniencesPayload<ExtArgs>
        fields: Prisma.conveniencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.conveniencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.conveniencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          findFirst: {
            args: Prisma.conveniencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.conveniencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          findMany: {
            args: Prisma.conveniencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>[]
          }
          create: {
            args: Prisma.conveniencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          createMany: {
            args: Prisma.conveniencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.conveniencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>[]
          }
          delete: {
            args: Prisma.conveniencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          update: {
            args: Prisma.conveniencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          deleteMany: {
            args: Prisma.conveniencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.conveniencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.conveniencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>[]
          }
          upsert: {
            args: Prisma.conveniencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$conveniencesPayload>
          }
          aggregate: {
            args: Prisma.ConveniencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConveniences>
          }
          groupBy: {
            args: Prisma.conveniencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConveniencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.conveniencesCountArgs<ExtArgs>
            result: $Utils.Optional<ConveniencesCountAggregateOutputType> | number
          }
        }
      }
      reviews: {
        payload: Prisma.$reviewsPayload<ExtArgs>
        fields: Prisma.reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findFirst: {
            args: Prisma.reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          findMany: {
            args: Prisma.reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          create: {
            args: Prisma.reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          createMany: {
            args: Prisma.reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          delete: {
            args: Prisma.reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          update: {
            args: Prisma.reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          deleteMany: {
            args: Prisma.reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>[]
          }
          upsert: {
            args: Prisma.reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      room_conveniences: {
        payload: Prisma.$room_conveniencesPayload<ExtArgs>
        fields: Prisma.room_conveniencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.room_conveniencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.room_conveniencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          findFirst: {
            args: Prisma.room_conveniencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.room_conveniencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          findMany: {
            args: Prisma.room_conveniencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>[]
          }
          create: {
            args: Prisma.room_conveniencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          createMany: {
            args: Prisma.room_conveniencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.room_conveniencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>[]
          }
          delete: {
            args: Prisma.room_conveniencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          update: {
            args: Prisma.room_conveniencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          deleteMany: {
            args: Prisma.room_conveniencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.room_conveniencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.room_conveniencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>[]
          }
          upsert: {
            args: Prisma.room_conveniencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$room_conveniencesPayload>
          }
          aggregate: {
            args: Prisma.Room_conveniencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom_conveniences>
          }
          groupBy: {
            args: Prisma.room_conveniencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Room_conveniencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.room_conveniencesCountArgs<ExtArgs>
            result: $Utils.Optional<Room_conveniencesCountAggregateOutputType> | number
          }
        }
      }
      rooms: {
        payload: Prisma.$roomsPayload<ExtArgs>
        fields: Prisma.roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findFirst: {
            args: Prisma.roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          findMany: {
            args: Prisma.roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          create: {
            args: Prisma.roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          createMany: {
            args: Prisma.roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          delete: {
            args: Prisma.roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          update: {
            args: Prisma.roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          deleteMany: {
            args: Prisma.roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>[]
          }
          upsert: {
            args: Prisma.roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$roomsPayload>
          }
          aggregate: {
            args: Prisma.RoomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRooms>
          }
          groupBy: {
            args: Prisma.roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.roomsCountArgs<ExtArgs>
            result: $Utils.Optional<RoomsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      wishlist: {
        payload: Prisma.$wishlistPayload<ExtArgs>
        fields: Prisma.wishlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.wishlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.wishlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          findFirst: {
            args: Prisma.wishlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.wishlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          findMany: {
            args: Prisma.wishlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          create: {
            args: Prisma.wishlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          createMany: {
            args: Prisma.wishlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.wishlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          delete: {
            args: Prisma.wishlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          update: {
            args: Prisma.wishlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          deleteMany: {
            args: Prisma.wishlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.wishlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.wishlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>[]
          }
          upsert: {
            args: Prisma.wishlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$wishlistPayload>
          }
          aggregate: {
            args: Prisma.WishlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWishlist>
          }
          groupBy: {
            args: Prisma.wishlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.wishlistCountArgs<ExtArgs>
            result: $Utils.Optional<WishlistCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bookings?: bookingsOmit
    conveniences?: conveniencesOmit
    reviews?: reviewsOmit
    room_conveniences?: room_conveniencesOmit
    rooms?: roomsOmit
    users?: usersOmit
    wishlist?: wishlistOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ConveniencesCountOutputType
   */

  export type ConveniencesCountOutputType = {
    room_conveniences: number
  }

  export type ConveniencesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_conveniences?: boolean | ConveniencesCountOutputTypeCountRoom_conveniencesArgs
  }

  // Custom InputTypes
  /**
   * ConveniencesCountOutputType without action
   */
  export type ConveniencesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConveniencesCountOutputType
     */
    select?: ConveniencesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConveniencesCountOutputType without action
   */
  export type ConveniencesCountOutputTypeCountRoom_conveniencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_conveniencesWhereInput
  }


  /**
   * Count Type RoomsCountOutputType
   */

  export type RoomsCountOutputType = {
    bookings: number
    reviews: number
    room_conveniences: number
    wishlist: number
  }

  export type RoomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | RoomsCountOutputTypeCountBookingsArgs
    reviews?: boolean | RoomsCountOutputTypeCountReviewsArgs
    room_conveniences?: boolean | RoomsCountOutputTypeCountRoom_conveniencesArgs
    wishlist?: boolean | RoomsCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomsCountOutputType
     */
    select?: RoomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountRoom_conveniencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_conveniencesWhereInput
  }

  /**
   * RoomsCountOutputType without action
   */
  export type RoomsCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bookings: number
    reviews: number
    wishlist: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    wishlist?: boolean | UsersCountOutputTypeCountWishlistArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    room_id: number | null
    total_cost: Decimal | null
  }

  export type BookingsSumAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    room_id: number | null
    total_cost: Decimal | null
  }

  export type BookingsMinAggregateOutputType = {
    booking_id: number | null
    status: string | null
    check_in: Date | null
    check_out: Date | null
    created_at: Date | null
    user_id: number | null
    room_id: number | null
    total_cost: Decimal | null
  }

  export type BookingsMaxAggregateOutputType = {
    booking_id: number | null
    status: string | null
    check_in: Date | null
    check_out: Date | null
    created_at: Date | null
    user_id: number | null
    room_id: number | null
    total_cost: Decimal | null
  }

  export type BookingsCountAggregateOutputType = {
    booking_id: number
    status: number
    check_in: number
    check_out: number
    created_at: number
    user_id: number
    room_id: number
    total_cost: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    booking_id?: true
    user_id?: true
    room_id?: true
    total_cost?: true
  }

  export type BookingsSumAggregateInputType = {
    booking_id?: true
    user_id?: true
    room_id?: true
    total_cost?: true
  }

  export type BookingsMinAggregateInputType = {
    booking_id?: true
    status?: true
    check_in?: true
    check_out?: true
    created_at?: true
    user_id?: true
    room_id?: true
    total_cost?: true
  }

  export type BookingsMaxAggregateInputType = {
    booking_id?: true
    status?: true
    check_in?: true
    check_out?: true
    created_at?: true
    user_id?: true
    room_id?: true
    total_cost?: true
  }

  export type BookingsCountAggregateInputType = {
    booking_id?: true
    status?: true
    check_in?: true
    check_out?: true
    created_at?: true
    user_id?: true
    room_id?: true
    total_cost?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to aggregate.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type bookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithAggregationInput | bookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: bookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    booking_id: number
    status: string
    check_in: Date
    check_out: Date
    created_at: Date | null
    user_id: number | null
    room_id: number | null
    total_cost: Decimal | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type bookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    status?: boolean
    check_in?: boolean
    check_out?: boolean
    created_at?: boolean
    user_id?: boolean
    room_id?: boolean
    total_cost?: boolean
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    status?: boolean
    check_in?: boolean
    check_out?: boolean
    created_at?: boolean
    user_id?: boolean
    room_id?: boolean
    total_cost?: boolean
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    status?: boolean
    check_in?: boolean
    check_out?: boolean
    created_at?: boolean
    user_id?: boolean
    room_id?: boolean
    total_cost?: boolean
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>

  export type bookingsSelectScalar = {
    booking_id?: boolean
    status?: boolean
    check_in?: boolean
    check_out?: boolean
    created_at?: boolean
    user_id?: boolean
    room_id?: boolean
    total_cost?: boolean
  }

  export type bookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_id" | "status" | "check_in" | "check_out" | "created_at" | "user_id" | "room_id" | "total_cost", ExtArgs["result"]["bookings"]>
  export type bookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }
  export type bookingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }
  export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | bookings$roomsArgs<ExtArgs>
    users?: boolean | bookings$usersArgs<ExtArgs>
  }

  export type $bookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookings"
    objects: {
      rooms: Prisma.$roomsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_id: number
      status: string
      check_in: Date
      check_out: Date
      created_at: Date | null
      user_id: number | null
      room_id: number | null
      total_cost: Prisma.Decimal | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = $Result.GetResult<Prisma.$bookingsPayload, S>

  type bookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface bookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookings'], meta: { name: 'bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {bookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookingsFindUniqueArgs>(args: SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookingsFindFirstArgs>(args?: SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `booking_id`
     * const bookingsWithBooking_idOnly = await prisma.bookings.findMany({ select: { booking_id: true } })
     * 
     */
    findMany<T extends bookingsFindManyArgs>(args?: SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {bookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends bookingsCreateArgs>(args: SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {bookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookingsCreateManyArgs>(args?: SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {bookingsCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `booking_id`
     * const bookingsWithBooking_idOnly = await prisma.bookings.createManyAndReturn({
     *   select: { booking_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookings.
     * @param {bookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends bookingsDeleteArgs>(args: SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {bookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookingsUpdateArgs>(args: SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {bookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookingsDeleteManyArgs>(args?: SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookingsUpdateManyArgs>(args: SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {bookingsUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `booking_id`
     * const bookingsWithBooking_idOnly = await prisma.bookings.updateManyAndReturn({
     *   select: { booking_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookings.
     * @param {bookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends bookingsUpsertArgs>(args: SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma__bookingsClient<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends bookingsCountArgs>(
      args?: Subset<T, bookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookingsGroupByArgs['orderBy'] }
        : { orderBy?: bookingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookings model
   */
  readonly fields: bookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends bookings$roomsArgs<ExtArgs> = {}>(args?: Subset<T, bookings$roomsArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends bookings$usersArgs<ExtArgs> = {}>(args?: Subset<T, bookings$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bookings model
   */
  interface bookingsFieldRefs {
    readonly booking_id: FieldRef<"bookings", 'Int'>
    readonly status: FieldRef<"bookings", 'String'>
    readonly check_in: FieldRef<"bookings", 'DateTime'>
    readonly check_out: FieldRef<"bookings", 'DateTime'>
    readonly created_at: FieldRef<"bookings", 'DateTime'>
    readonly user_id: FieldRef<"bookings", 'Int'>
    readonly room_id: FieldRef<"bookings", 'Int'>
    readonly total_cost: FieldRef<"bookings", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * bookings findUnique
   */
  export type bookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findUniqueOrThrow
   */
  export type bookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings findFirst
   */
  export type bookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findFirstOrThrow
   */
  export type bookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings findMany
   */
  export type bookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter, which bookings to fetch.
     */
    where?: bookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookings to fetch.
     */
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookings.
     */
    cursor?: bookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * bookings create
   */
  export type bookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a bookings.
     */
    data: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
  }

  /**
   * bookings createMany
   */
  export type bookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bookings createManyAndReturn
   */
  export type bookingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to create many bookings.
     */
    data: bookingsCreateManyInput | bookingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings update
   */
  export type bookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a bookings.
     */
    data: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
    /**
     * Choose, which bookings to update.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings updateMany
   */
  export type bookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
  }

  /**
   * bookings updateManyAndReturn
   */
  export type bookingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * The data used to update bookings.
     */
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyInput>
    /**
     * Filter which bookings to update
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bookings upsert
   */
  export type bookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the bookings to update in case it exists.
     */
    where: bookingsWhereUniqueInput
    /**
     * In case the bookings found by the `where` argument doesn't exist, create a new bookings with this data.
     */
    create: XOR<bookingsCreateInput, bookingsUncheckedCreateInput>
    /**
     * In case the bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookingsUpdateInput, bookingsUncheckedUpdateInput>
  }

  /**
   * bookings delete
   */
  export type bookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    /**
     * Filter which bookings to delete.
     */
    where: bookingsWhereUniqueInput
  }

  /**
   * bookings deleteMany
   */
  export type bookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookings to delete
     */
    where?: bookingsWhereInput
    /**
     * Limit how many bookings to delete.
     */
    limit?: number
  }

  /**
   * bookings.rooms
   */
  export type bookings$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    where?: roomsWhereInput
  }

  /**
   * bookings.users
   */
  export type bookings$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * bookings without action
   */
  export type bookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
  }


  /**
   * Model conveniences
   */

  export type AggregateConveniences = {
    _count: ConveniencesCountAggregateOutputType | null
    _avg: ConveniencesAvgAggregateOutputType | null
    _sum: ConveniencesSumAggregateOutputType | null
    _min: ConveniencesMinAggregateOutputType | null
    _max: ConveniencesMaxAggregateOutputType | null
  }

  export type ConveniencesAvgAggregateOutputType = {
    convenience_id: number | null
  }

  export type ConveniencesSumAggregateOutputType = {
    convenience_id: number | null
  }

  export type ConveniencesMinAggregateOutputType = {
    convenience_id: number | null
    name: string | null
  }

  export type ConveniencesMaxAggregateOutputType = {
    convenience_id: number | null
    name: string | null
  }

  export type ConveniencesCountAggregateOutputType = {
    convenience_id: number
    name: number
    _all: number
  }


  export type ConveniencesAvgAggregateInputType = {
    convenience_id?: true
  }

  export type ConveniencesSumAggregateInputType = {
    convenience_id?: true
  }

  export type ConveniencesMinAggregateInputType = {
    convenience_id?: true
    name?: true
  }

  export type ConveniencesMaxAggregateInputType = {
    convenience_id?: true
    name?: true
  }

  export type ConveniencesCountAggregateInputType = {
    convenience_id?: true
    name?: true
    _all?: true
  }

  export type ConveniencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conveniences to aggregate.
     */
    where?: conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conveniences to fetch.
     */
    orderBy?: conveniencesOrderByWithRelationInput | conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned conveniences
    **/
    _count?: true | ConveniencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConveniencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConveniencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConveniencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConveniencesMaxAggregateInputType
  }

  export type GetConveniencesAggregateType<T extends ConveniencesAggregateArgs> = {
        [P in keyof T & keyof AggregateConveniences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConveniences[P]>
      : GetScalarType<T[P], AggregateConveniences[P]>
  }




  export type conveniencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conveniencesWhereInput
    orderBy?: conveniencesOrderByWithAggregationInput | conveniencesOrderByWithAggregationInput[]
    by: ConveniencesScalarFieldEnum[] | ConveniencesScalarFieldEnum
    having?: conveniencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConveniencesCountAggregateInputType | true
    _avg?: ConveniencesAvgAggregateInputType
    _sum?: ConveniencesSumAggregateInputType
    _min?: ConveniencesMinAggregateInputType
    _max?: ConveniencesMaxAggregateInputType
  }

  export type ConveniencesGroupByOutputType = {
    convenience_id: number
    name: string
    _count: ConveniencesCountAggregateOutputType | null
    _avg: ConveniencesAvgAggregateOutputType | null
    _sum: ConveniencesSumAggregateOutputType | null
    _min: ConveniencesMinAggregateOutputType | null
    _max: ConveniencesMaxAggregateOutputType | null
  }

  type GetConveniencesGroupByPayload<T extends conveniencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConveniencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConveniencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConveniencesGroupByOutputType[P]>
            : GetScalarType<T[P], ConveniencesGroupByOutputType[P]>
        }
      >
    >


  export type conveniencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    convenience_id?: boolean
    name?: boolean
    room_conveniences?: boolean | conveniences$room_conveniencesArgs<ExtArgs>
    _count?: boolean | ConveniencesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conveniences"]>

  export type conveniencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    convenience_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["conveniences"]>

  export type conveniencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    convenience_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["conveniences"]>

  export type conveniencesSelectScalar = {
    convenience_id?: boolean
    name?: boolean
  }

  export type conveniencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"convenience_id" | "name", ExtArgs["result"]["conveniences"]>
  export type conveniencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room_conveniences?: boolean | conveniences$room_conveniencesArgs<ExtArgs>
    _count?: boolean | ConveniencesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type conveniencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type conveniencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $conveniencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "conveniences"
    objects: {
      room_conveniences: Prisma.$room_conveniencesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      convenience_id: number
      name: string
    }, ExtArgs["result"]["conveniences"]>
    composites: {}
  }

  type conveniencesGetPayload<S extends boolean | null | undefined | conveniencesDefaultArgs> = $Result.GetResult<Prisma.$conveniencesPayload, S>

  type conveniencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<conveniencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConveniencesCountAggregateInputType | true
    }

  export interface conveniencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conveniences'], meta: { name: 'conveniences' } }
    /**
     * Find zero or one Conveniences that matches the filter.
     * @param {conveniencesFindUniqueArgs} args - Arguments to find a Conveniences
     * @example
     * // Get one Conveniences
     * const conveniences = await prisma.conveniences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends conveniencesFindUniqueArgs>(args: SelectSubset<T, conveniencesFindUniqueArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conveniences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {conveniencesFindUniqueOrThrowArgs} args - Arguments to find a Conveniences
     * @example
     * // Get one Conveniences
     * const conveniences = await prisma.conveniences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends conveniencesFindUniqueOrThrowArgs>(args: SelectSubset<T, conveniencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conveniences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesFindFirstArgs} args - Arguments to find a Conveniences
     * @example
     * // Get one Conveniences
     * const conveniences = await prisma.conveniences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends conveniencesFindFirstArgs>(args?: SelectSubset<T, conveniencesFindFirstArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conveniences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesFindFirstOrThrowArgs} args - Arguments to find a Conveniences
     * @example
     * // Get one Conveniences
     * const conveniences = await prisma.conveniences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends conveniencesFindFirstOrThrowArgs>(args?: SelectSubset<T, conveniencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conveniences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conveniences
     * const conveniences = await prisma.conveniences.findMany()
     * 
     * // Get first 10 Conveniences
     * const conveniences = await prisma.conveniences.findMany({ take: 10 })
     * 
     * // Only select the `convenience_id`
     * const conveniencesWithConvenience_idOnly = await prisma.conveniences.findMany({ select: { convenience_id: true } })
     * 
     */
    findMany<T extends conveniencesFindManyArgs>(args?: SelectSubset<T, conveniencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conveniences.
     * @param {conveniencesCreateArgs} args - Arguments to create a Conveniences.
     * @example
     * // Create one Conveniences
     * const Conveniences = await prisma.conveniences.create({
     *   data: {
     *     // ... data to create a Conveniences
     *   }
     * })
     * 
     */
    create<T extends conveniencesCreateArgs>(args: SelectSubset<T, conveniencesCreateArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conveniences.
     * @param {conveniencesCreateManyArgs} args - Arguments to create many Conveniences.
     * @example
     * // Create many Conveniences
     * const conveniences = await prisma.conveniences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends conveniencesCreateManyArgs>(args?: SelectSubset<T, conveniencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conveniences and returns the data saved in the database.
     * @param {conveniencesCreateManyAndReturnArgs} args - Arguments to create many Conveniences.
     * @example
     * // Create many Conveniences
     * const conveniences = await prisma.conveniences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conveniences and only return the `convenience_id`
     * const conveniencesWithConvenience_idOnly = await prisma.conveniences.createManyAndReturn({
     *   select: { convenience_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends conveniencesCreateManyAndReturnArgs>(args?: SelectSubset<T, conveniencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conveniences.
     * @param {conveniencesDeleteArgs} args - Arguments to delete one Conveniences.
     * @example
     * // Delete one Conveniences
     * const Conveniences = await prisma.conveniences.delete({
     *   where: {
     *     // ... filter to delete one Conveniences
     *   }
     * })
     * 
     */
    delete<T extends conveniencesDeleteArgs>(args: SelectSubset<T, conveniencesDeleteArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conveniences.
     * @param {conveniencesUpdateArgs} args - Arguments to update one Conveniences.
     * @example
     * // Update one Conveniences
     * const conveniences = await prisma.conveniences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends conveniencesUpdateArgs>(args: SelectSubset<T, conveniencesUpdateArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conveniences.
     * @param {conveniencesDeleteManyArgs} args - Arguments to filter Conveniences to delete.
     * @example
     * // Delete a few Conveniences
     * const { count } = await prisma.conveniences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends conveniencesDeleteManyArgs>(args?: SelectSubset<T, conveniencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conveniences
     * const conveniences = await prisma.conveniences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends conveniencesUpdateManyArgs>(args: SelectSubset<T, conveniencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conveniences and returns the data updated in the database.
     * @param {conveniencesUpdateManyAndReturnArgs} args - Arguments to update many Conveniences.
     * @example
     * // Update many Conveniences
     * const conveniences = await prisma.conveniences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conveniences and only return the `convenience_id`
     * const conveniencesWithConvenience_idOnly = await prisma.conveniences.updateManyAndReturn({
     *   select: { convenience_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends conveniencesUpdateManyAndReturnArgs>(args: SelectSubset<T, conveniencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conveniences.
     * @param {conveniencesUpsertArgs} args - Arguments to update or create a Conveniences.
     * @example
     * // Update or create a Conveniences
     * const conveniences = await prisma.conveniences.upsert({
     *   create: {
     *     // ... data to create a Conveniences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conveniences we want to update
     *   }
     * })
     */
    upsert<T extends conveniencesUpsertArgs>(args: SelectSubset<T, conveniencesUpsertArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesCountArgs} args - Arguments to filter Conveniences to count.
     * @example
     * // Count the number of Conveniences
     * const count = await prisma.conveniences.count({
     *   where: {
     *     // ... the filter for the Conveniences we want to count
     *   }
     * })
    **/
    count<T extends conveniencesCountArgs>(
      args?: Subset<T, conveniencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConveniencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConveniencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConveniencesAggregateArgs>(args: Subset<T, ConveniencesAggregateArgs>): Prisma.PrismaPromise<GetConveniencesAggregateType<T>>

    /**
     * Group by Conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conveniencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends conveniencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conveniencesGroupByArgs['orderBy'] }
        : { orderBy?: conveniencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, conveniencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConveniencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the conveniences model
   */
  readonly fields: conveniencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conveniences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conveniencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room_conveniences<T extends conveniences$room_conveniencesArgs<ExtArgs> = {}>(args?: Subset<T, conveniences$room_conveniencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the conveniences model
   */
  interface conveniencesFieldRefs {
    readonly convenience_id: FieldRef<"conveniences", 'Int'>
    readonly name: FieldRef<"conveniences", 'String'>
  }
    

  // Custom InputTypes
  /**
   * conveniences findUnique
   */
  export type conveniencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which conveniences to fetch.
     */
    where: conveniencesWhereUniqueInput
  }

  /**
   * conveniences findUniqueOrThrow
   */
  export type conveniencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which conveniences to fetch.
     */
    where: conveniencesWhereUniqueInput
  }

  /**
   * conveniences findFirst
   */
  export type conveniencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which conveniences to fetch.
     */
    where?: conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conveniences to fetch.
     */
    orderBy?: conveniencesOrderByWithRelationInput | conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conveniences.
     */
    cursor?: conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conveniences.
     */
    distinct?: ConveniencesScalarFieldEnum | ConveniencesScalarFieldEnum[]
  }

  /**
   * conveniences findFirstOrThrow
   */
  export type conveniencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which conveniences to fetch.
     */
    where?: conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conveniences to fetch.
     */
    orderBy?: conveniencesOrderByWithRelationInput | conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for conveniences.
     */
    cursor?: conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of conveniences.
     */
    distinct?: ConveniencesScalarFieldEnum | ConveniencesScalarFieldEnum[]
  }

  /**
   * conveniences findMany
   */
  export type conveniencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which conveniences to fetch.
     */
    where?: conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of conveniences to fetch.
     */
    orderBy?: conveniencesOrderByWithRelationInput | conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing conveniences.
     */
    cursor?: conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` conveniences.
     */
    skip?: number
    distinct?: ConveniencesScalarFieldEnum | ConveniencesScalarFieldEnum[]
  }

  /**
   * conveniences create
   */
  export type conveniencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * The data needed to create a conveniences.
     */
    data: XOR<conveniencesCreateInput, conveniencesUncheckedCreateInput>
  }

  /**
   * conveniences createMany
   */
  export type conveniencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conveniences.
     */
    data: conveniencesCreateManyInput | conveniencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conveniences createManyAndReturn
   */
  export type conveniencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * The data used to create many conveniences.
     */
    data: conveniencesCreateManyInput | conveniencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * conveniences update
   */
  export type conveniencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * The data needed to update a conveniences.
     */
    data: XOR<conveniencesUpdateInput, conveniencesUncheckedUpdateInput>
    /**
     * Choose, which conveniences to update.
     */
    where: conveniencesWhereUniqueInput
  }

  /**
   * conveniences updateMany
   */
  export type conveniencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conveniences.
     */
    data: XOR<conveniencesUpdateManyMutationInput, conveniencesUncheckedUpdateManyInput>
    /**
     * Filter which conveniences to update
     */
    where?: conveniencesWhereInput
    /**
     * Limit how many conveniences to update.
     */
    limit?: number
  }

  /**
   * conveniences updateManyAndReturn
   */
  export type conveniencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * The data used to update conveniences.
     */
    data: XOR<conveniencesUpdateManyMutationInput, conveniencesUncheckedUpdateManyInput>
    /**
     * Filter which conveniences to update
     */
    where?: conveniencesWhereInput
    /**
     * Limit how many conveniences to update.
     */
    limit?: number
  }

  /**
   * conveniences upsert
   */
  export type conveniencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * The filter to search for the conveniences to update in case it exists.
     */
    where: conveniencesWhereUniqueInput
    /**
     * In case the conveniences found by the `where` argument doesn't exist, create a new conveniences with this data.
     */
    create: XOR<conveniencesCreateInput, conveniencesUncheckedCreateInput>
    /**
     * In case the conveniences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conveniencesUpdateInput, conveniencesUncheckedUpdateInput>
  }

  /**
   * conveniences delete
   */
  export type conveniencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
    /**
     * Filter which conveniences to delete.
     */
    where: conveniencesWhereUniqueInput
  }

  /**
   * conveniences deleteMany
   */
  export type conveniencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conveniences to delete
     */
    where?: conveniencesWhereInput
    /**
     * Limit how many conveniences to delete.
     */
    limit?: number
  }

  /**
   * conveniences.room_conveniences
   */
  export type conveniences$room_conveniencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    where?: room_conveniencesWhereInput
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    cursor?: room_conveniencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_conveniencesScalarFieldEnum | Room_conveniencesScalarFieldEnum[]
  }

  /**
   * conveniences without action
   */
  export type conveniencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conveniences
     */
    select?: conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the conveniences
     */
    omit?: conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: conveniencesInclude<ExtArgs> | null
  }


  /**
   * Model reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    room_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    room_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    room_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    room_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    review_id: number
    user_id: number
    room_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    room_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    review_id?: true
    user_id?: true
    room_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    review_id?: true
    user_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewsCountAggregateInputType = {
    review_id?: true
    user_id?: true
    room_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to aggregate.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithAggregationInput | reviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    review_id: number
    user_id: number | null
    room_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type reviewsSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    room_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "room_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["reviews"]>
  export type reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }
  export type reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }
  export type reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | reviews$roomsArgs<ExtArgs>
    users?: boolean | reviews$usersArgs<ExtArgs>
  }

  export type $reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reviews"
    objects: {
      rooms: Prisma.$roomsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number | null
      room_id: number | null
      rating: number | null
      comment: string | null
      created_at: Date | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type reviewsGetPayload<S extends boolean | null | undefined | reviewsDefaultArgs> = $Result.GetResult<Prisma.$reviewsPayload, S>

  type reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reviews'], meta: { name: 'reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {reviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewsFindUniqueArgs>(args: SelectSubset<T, reviewsFindUniqueArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewsFindFirstArgs>(args?: SelectSubset<T, reviewsFindFirstArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewsFindManyArgs>(args?: SelectSubset<T, reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {reviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends reviewsCreateArgs>(args: SelectSubset<T, reviewsCreateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewsCreateManyArgs>(args?: SelectSubset<T, reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {reviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends reviewsDeleteArgs>(args: SelectSubset<T, reviewsDeleteArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {reviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewsUpdateArgs>(args: SelectSubset<T, reviewsUpdateArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewsDeleteManyArgs>(args?: SelectSubset<T, reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewsUpdateManyArgs>(args: SelectSubset<T, reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {reviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends reviewsUpsertArgs>(args: SelectSubset<T, reviewsUpsertArgs<ExtArgs>>): Prisma__reviewsClient<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewsCountArgs>(
      args?: Subset<T, reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewsGroupByArgs['orderBy'] }
        : { orderBy?: reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reviews model
   */
  readonly fields: reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends reviews$roomsArgs<ExtArgs> = {}>(args?: Subset<T, reviews$roomsArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends reviews$usersArgs<ExtArgs> = {}>(args?: Subset<T, reviews$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reviews model
   */
  interface reviewsFieldRefs {
    readonly review_id: FieldRef<"reviews", 'Int'>
    readonly user_id: FieldRef<"reviews", 'Int'>
    readonly room_id: FieldRef<"reviews", 'Int'>
    readonly rating: FieldRef<"reviews", 'Int'>
    readonly comment: FieldRef<"reviews", 'String'>
    readonly created_at: FieldRef<"reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reviews findUnique
   */
  export type reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findUniqueOrThrow
   */
  export type reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews findFirst
   */
  export type reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findFirstOrThrow
   */
  export type reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews findMany
   */
  export type reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * reviews create
   */
  export type reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a reviews.
     */
    data?: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
  }

  /**
   * reviews createMany
   */
  export type reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reviews createManyAndReturn
   */
  export type reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewsCreateManyInput | reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews update
   */
  export type reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a reviews.
     */
    data: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
    /**
     * Choose, which reviews to update.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews updateMany
   */
  export type reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * reviews updateManyAndReturn
   */
  export type reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reviews upsert
   */
  export type reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the reviews to update in case it exists.
     */
    where: reviewsWhereUniqueInput
    /**
     * In case the reviews found by the `where` argument doesn't exist, create a new reviews with this data.
     */
    create: XOR<reviewsCreateInput, reviewsUncheckedCreateInput>
    /**
     * In case the reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewsUpdateInput, reviewsUncheckedUpdateInput>
  }

  /**
   * reviews delete
   */
  export type reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    /**
     * Filter which reviews to delete.
     */
    where: reviewsWhereUniqueInput
  }

  /**
   * reviews deleteMany
   */
  export type reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewsWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * reviews.rooms
   */
  export type reviews$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    where?: roomsWhereInput
  }

  /**
   * reviews.users
   */
  export type reviews$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * reviews without action
   */
  export type reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
  }


  /**
   * Model room_conveniences
   */

  export type AggregateRoom_conveniences = {
    _count: Room_conveniencesCountAggregateOutputType | null
    _avg: Room_conveniencesAvgAggregateOutputType | null
    _sum: Room_conveniencesSumAggregateOutputType | null
    _min: Room_conveniencesMinAggregateOutputType | null
    _max: Room_conveniencesMaxAggregateOutputType | null
  }

  export type Room_conveniencesAvgAggregateOutputType = {
    room_id: number | null
    convenience_id: number | null
  }

  export type Room_conveniencesSumAggregateOutputType = {
    room_id: number | null
    convenience_id: number | null
  }

  export type Room_conveniencesMinAggregateOutputType = {
    room_id: number | null
    convenience_id: number | null
  }

  export type Room_conveniencesMaxAggregateOutputType = {
    room_id: number | null
    convenience_id: number | null
  }

  export type Room_conveniencesCountAggregateOutputType = {
    room_id: number
    convenience_id: number
    _all: number
  }


  export type Room_conveniencesAvgAggregateInputType = {
    room_id?: true
    convenience_id?: true
  }

  export type Room_conveniencesSumAggregateInputType = {
    room_id?: true
    convenience_id?: true
  }

  export type Room_conveniencesMinAggregateInputType = {
    room_id?: true
    convenience_id?: true
  }

  export type Room_conveniencesMaxAggregateInputType = {
    room_id?: true
    convenience_id?: true
  }

  export type Room_conveniencesCountAggregateInputType = {
    room_id?: true
    convenience_id?: true
    _all?: true
  }

  export type Room_conveniencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_conveniences to aggregate.
     */
    where?: room_conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_conveniences to fetch.
     */
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: room_conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned room_conveniences
    **/
    _count?: true | Room_conveniencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Room_conveniencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Room_conveniencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Room_conveniencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Room_conveniencesMaxAggregateInputType
  }

  export type GetRoom_conveniencesAggregateType<T extends Room_conveniencesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom_conveniences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom_conveniences[P]>
      : GetScalarType<T[P], AggregateRoom_conveniences[P]>
  }




  export type room_conveniencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: room_conveniencesWhereInput
    orderBy?: room_conveniencesOrderByWithAggregationInput | room_conveniencesOrderByWithAggregationInput[]
    by: Room_conveniencesScalarFieldEnum[] | Room_conveniencesScalarFieldEnum
    having?: room_conveniencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Room_conveniencesCountAggregateInputType | true
    _avg?: Room_conveniencesAvgAggregateInputType
    _sum?: Room_conveniencesSumAggregateInputType
    _min?: Room_conveniencesMinAggregateInputType
    _max?: Room_conveniencesMaxAggregateInputType
  }

  export type Room_conveniencesGroupByOutputType = {
    room_id: number
    convenience_id: number
    _count: Room_conveniencesCountAggregateOutputType | null
    _avg: Room_conveniencesAvgAggregateOutputType | null
    _sum: Room_conveniencesSumAggregateOutputType | null
    _min: Room_conveniencesMinAggregateOutputType | null
    _max: Room_conveniencesMaxAggregateOutputType | null
  }

  type GetRoom_conveniencesGroupByPayload<T extends room_conveniencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Room_conveniencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Room_conveniencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Room_conveniencesGroupByOutputType[P]>
            : GetScalarType<T[P], Room_conveniencesGroupByOutputType[P]>
        }
      >
    >


  export type room_conveniencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    convenience_id?: boolean
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_conveniences"]>

  export type room_conveniencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    convenience_id?: boolean
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_conveniences"]>

  export type room_conveniencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    convenience_id?: boolean
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room_conveniences"]>

  export type room_conveniencesSelectScalar = {
    room_id?: boolean
    convenience_id?: boolean
  }

  export type room_conveniencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"room_id" | "convenience_id", ExtArgs["result"]["room_conveniences"]>
  export type room_conveniencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }
  export type room_conveniencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }
  export type room_conveniencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conveniences?: boolean | conveniencesDefaultArgs<ExtArgs>
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
  }

  export type $room_conveniencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "room_conveniences"
    objects: {
      conveniences: Prisma.$conveniencesPayload<ExtArgs>
      rooms: Prisma.$roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      room_id: number
      convenience_id: number
    }, ExtArgs["result"]["room_conveniences"]>
    composites: {}
  }

  type room_conveniencesGetPayload<S extends boolean | null | undefined | room_conveniencesDefaultArgs> = $Result.GetResult<Prisma.$room_conveniencesPayload, S>

  type room_conveniencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<room_conveniencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Room_conveniencesCountAggregateInputType | true
    }

  export interface room_conveniencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['room_conveniences'], meta: { name: 'room_conveniences' } }
    /**
     * Find zero or one Room_conveniences that matches the filter.
     * @param {room_conveniencesFindUniqueArgs} args - Arguments to find a Room_conveniences
     * @example
     * // Get one Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends room_conveniencesFindUniqueArgs>(args: SelectSubset<T, room_conveniencesFindUniqueArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room_conveniences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {room_conveniencesFindUniqueOrThrowArgs} args - Arguments to find a Room_conveniences
     * @example
     * // Get one Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends room_conveniencesFindUniqueOrThrowArgs>(args: SelectSubset<T, room_conveniencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_conveniences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesFindFirstArgs} args - Arguments to find a Room_conveniences
     * @example
     * // Get one Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends room_conveniencesFindFirstArgs>(args?: SelectSubset<T, room_conveniencesFindFirstArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room_conveniences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesFindFirstOrThrowArgs} args - Arguments to find a Room_conveniences
     * @example
     * // Get one Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends room_conveniencesFindFirstOrThrowArgs>(args?: SelectSubset<T, room_conveniencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Room_conveniences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findMany()
     * 
     * // Get first 10 Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.findMany({ take: 10 })
     * 
     * // Only select the `room_id`
     * const room_conveniencesWithRoom_idOnly = await prisma.room_conveniences.findMany({ select: { room_id: true } })
     * 
     */
    findMany<T extends room_conveniencesFindManyArgs>(args?: SelectSubset<T, room_conveniencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room_conveniences.
     * @param {room_conveniencesCreateArgs} args - Arguments to create a Room_conveniences.
     * @example
     * // Create one Room_conveniences
     * const Room_conveniences = await prisma.room_conveniences.create({
     *   data: {
     *     // ... data to create a Room_conveniences
     *   }
     * })
     * 
     */
    create<T extends room_conveniencesCreateArgs>(args: SelectSubset<T, room_conveniencesCreateArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Room_conveniences.
     * @param {room_conveniencesCreateManyArgs} args - Arguments to create many Room_conveniences.
     * @example
     * // Create many Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends room_conveniencesCreateManyArgs>(args?: SelectSubset<T, room_conveniencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Room_conveniences and returns the data saved in the database.
     * @param {room_conveniencesCreateManyAndReturnArgs} args - Arguments to create many Room_conveniences.
     * @example
     * // Create many Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Room_conveniences and only return the `room_id`
     * const room_conveniencesWithRoom_idOnly = await prisma.room_conveniences.createManyAndReturn({
     *   select: { room_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends room_conveniencesCreateManyAndReturnArgs>(args?: SelectSubset<T, room_conveniencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room_conveniences.
     * @param {room_conveniencesDeleteArgs} args - Arguments to delete one Room_conveniences.
     * @example
     * // Delete one Room_conveniences
     * const Room_conveniences = await prisma.room_conveniences.delete({
     *   where: {
     *     // ... filter to delete one Room_conveniences
     *   }
     * })
     * 
     */
    delete<T extends room_conveniencesDeleteArgs>(args: SelectSubset<T, room_conveniencesDeleteArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room_conveniences.
     * @param {room_conveniencesUpdateArgs} args - Arguments to update one Room_conveniences.
     * @example
     * // Update one Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends room_conveniencesUpdateArgs>(args: SelectSubset<T, room_conveniencesUpdateArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Room_conveniences.
     * @param {room_conveniencesDeleteManyArgs} args - Arguments to filter Room_conveniences to delete.
     * @example
     * // Delete a few Room_conveniences
     * const { count } = await prisma.room_conveniences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends room_conveniencesDeleteManyArgs>(args?: SelectSubset<T, room_conveniencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends room_conveniencesUpdateManyArgs>(args: SelectSubset<T, room_conveniencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Room_conveniences and returns the data updated in the database.
     * @param {room_conveniencesUpdateManyAndReturnArgs} args - Arguments to update many Room_conveniences.
     * @example
     * // Update many Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Room_conveniences and only return the `room_id`
     * const room_conveniencesWithRoom_idOnly = await prisma.room_conveniences.updateManyAndReturn({
     *   select: { room_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends room_conveniencesUpdateManyAndReturnArgs>(args: SelectSubset<T, room_conveniencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room_conveniences.
     * @param {room_conveniencesUpsertArgs} args - Arguments to update or create a Room_conveniences.
     * @example
     * // Update or create a Room_conveniences
     * const room_conveniences = await prisma.room_conveniences.upsert({
     *   create: {
     *     // ... data to create a Room_conveniences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room_conveniences we want to update
     *   }
     * })
     */
    upsert<T extends room_conveniencesUpsertArgs>(args: SelectSubset<T, room_conveniencesUpsertArgs<ExtArgs>>): Prisma__room_conveniencesClient<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Room_conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesCountArgs} args - Arguments to filter Room_conveniences to count.
     * @example
     * // Count the number of Room_conveniences
     * const count = await prisma.room_conveniences.count({
     *   where: {
     *     // ... the filter for the Room_conveniences we want to count
     *   }
     * })
    **/
    count<T extends room_conveniencesCountArgs>(
      args?: Subset<T, room_conveniencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Room_conveniencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room_conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Room_conveniencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Room_conveniencesAggregateArgs>(args: Subset<T, Room_conveniencesAggregateArgs>): Prisma.PrismaPromise<GetRoom_conveniencesAggregateType<T>>

    /**
     * Group by Room_conveniences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {room_conveniencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends room_conveniencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: room_conveniencesGroupByArgs['orderBy'] }
        : { orderBy?: room_conveniencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, room_conveniencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoom_conveniencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the room_conveniences model
   */
  readonly fields: room_conveniencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for room_conveniences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__room_conveniencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conveniences<T extends conveniencesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, conveniencesDefaultArgs<ExtArgs>>): Prisma__conveniencesClient<$Result.GetResult<Prisma.$conveniencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the room_conveniences model
   */
  interface room_conveniencesFieldRefs {
    readonly room_id: FieldRef<"room_conveniences", 'Int'>
    readonly convenience_id: FieldRef<"room_conveniences", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * room_conveniences findUnique
   */
  export type room_conveniencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which room_conveniences to fetch.
     */
    where: room_conveniencesWhereUniqueInput
  }

  /**
   * room_conveniences findUniqueOrThrow
   */
  export type room_conveniencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which room_conveniences to fetch.
     */
    where: room_conveniencesWhereUniqueInput
  }

  /**
   * room_conveniences findFirst
   */
  export type room_conveniencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which room_conveniences to fetch.
     */
    where?: room_conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_conveniences to fetch.
     */
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_conveniences.
     */
    cursor?: room_conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_conveniences.
     */
    distinct?: Room_conveniencesScalarFieldEnum | Room_conveniencesScalarFieldEnum[]
  }

  /**
   * room_conveniences findFirstOrThrow
   */
  export type room_conveniencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which room_conveniences to fetch.
     */
    where?: room_conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_conveniences to fetch.
     */
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for room_conveniences.
     */
    cursor?: room_conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_conveniences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of room_conveniences.
     */
    distinct?: Room_conveniencesScalarFieldEnum | Room_conveniencesScalarFieldEnum[]
  }

  /**
   * room_conveniences findMany
   */
  export type room_conveniencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter, which room_conveniences to fetch.
     */
    where?: room_conveniencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of room_conveniences to fetch.
     */
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing room_conveniences.
     */
    cursor?: room_conveniencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` room_conveniences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` room_conveniences.
     */
    skip?: number
    distinct?: Room_conveniencesScalarFieldEnum | Room_conveniencesScalarFieldEnum[]
  }

  /**
   * room_conveniences create
   */
  export type room_conveniencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * The data needed to create a room_conveniences.
     */
    data: XOR<room_conveniencesCreateInput, room_conveniencesUncheckedCreateInput>
  }

  /**
   * room_conveniences createMany
   */
  export type room_conveniencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many room_conveniences.
     */
    data: room_conveniencesCreateManyInput | room_conveniencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * room_conveniences createManyAndReturn
   */
  export type room_conveniencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * The data used to create many room_conveniences.
     */
    data: room_conveniencesCreateManyInput | room_conveniencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_conveniences update
   */
  export type room_conveniencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * The data needed to update a room_conveniences.
     */
    data: XOR<room_conveniencesUpdateInput, room_conveniencesUncheckedUpdateInput>
    /**
     * Choose, which room_conveniences to update.
     */
    where: room_conveniencesWhereUniqueInput
  }

  /**
   * room_conveniences updateMany
   */
  export type room_conveniencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update room_conveniences.
     */
    data: XOR<room_conveniencesUpdateManyMutationInput, room_conveniencesUncheckedUpdateManyInput>
    /**
     * Filter which room_conveniences to update
     */
    where?: room_conveniencesWhereInput
    /**
     * Limit how many room_conveniences to update.
     */
    limit?: number
  }

  /**
   * room_conveniences updateManyAndReturn
   */
  export type room_conveniencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * The data used to update room_conveniences.
     */
    data: XOR<room_conveniencesUpdateManyMutationInput, room_conveniencesUncheckedUpdateManyInput>
    /**
     * Filter which room_conveniences to update
     */
    where?: room_conveniencesWhereInput
    /**
     * Limit how many room_conveniences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * room_conveniences upsert
   */
  export type room_conveniencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * The filter to search for the room_conveniences to update in case it exists.
     */
    where: room_conveniencesWhereUniqueInput
    /**
     * In case the room_conveniences found by the `where` argument doesn't exist, create a new room_conveniences with this data.
     */
    create: XOR<room_conveniencesCreateInput, room_conveniencesUncheckedCreateInput>
    /**
     * In case the room_conveniences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<room_conveniencesUpdateInput, room_conveniencesUncheckedUpdateInput>
  }

  /**
   * room_conveniences delete
   */
  export type room_conveniencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    /**
     * Filter which room_conveniences to delete.
     */
    where: room_conveniencesWhereUniqueInput
  }

  /**
   * room_conveniences deleteMany
   */
  export type room_conveniencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which room_conveniences to delete
     */
    where?: room_conveniencesWhereInput
    /**
     * Limit how many room_conveniences to delete.
     */
    limit?: number
  }

  /**
   * room_conveniences without action
   */
  export type room_conveniencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
  }


  /**
   * Model rooms
   */

  export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  export type RoomsAvgAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    price_per_night: Decimal | null
    capacity: number | null
  }

  export type RoomsSumAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    price_per_night: Decimal | null
    capacity: number | null
  }

  export type RoomsMinAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    type: string | null
    price_per_night: Decimal | null
    capacity: number | null
    description: string | null
    image: string | null
    title: string | null
  }

  export type RoomsMaxAggregateOutputType = {
    room_id: number | null
    room_count: number | null
    type: string | null
    price_per_night: Decimal | null
    capacity: number | null
    description: string | null
    image: string | null
    title: string | null
  }

  export type RoomsCountAggregateOutputType = {
    room_id: number
    room_count: number
    type: number
    price_per_night: number
    capacity: number
    description: number
    image: number
    title: number
    _all: number
  }


  export type RoomsAvgAggregateInputType = {
    room_id?: true
    room_count?: true
    price_per_night?: true
    capacity?: true
  }

  export type RoomsSumAggregateInputType = {
    room_id?: true
    room_count?: true
    price_per_night?: true
    capacity?: true
  }

  export type RoomsMinAggregateInputType = {
    room_id?: true
    room_count?: true
    type?: true
    price_per_night?: true
    capacity?: true
    description?: true
    image?: true
    title?: true
  }

  export type RoomsMaxAggregateInputType = {
    room_id?: true
    room_count?: true
    type?: true
    price_per_night?: true
    capacity?: true
    description?: true
    image?: true
    title?: true
  }

  export type RoomsCountAggregateInputType = {
    room_id?: true
    room_count?: true
    type?: true
    price_per_night?: true
    capacity?: true
    description?: true
    image?: true
    title?: true
    _all?: true
  }

  export type RoomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to aggregate.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rooms
    **/
    _count?: true | RoomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomsMaxAggregateInputType
  }

  export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
        [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRooms[P]>
      : GetScalarType<T[P], AggregateRooms[P]>
  }




  export type roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roomsWhereInput
    orderBy?: roomsOrderByWithAggregationInput | roomsOrderByWithAggregationInput[]
    by: RoomsScalarFieldEnum[] | RoomsScalarFieldEnum
    having?: roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomsCountAggregateInputType | true
    _avg?: RoomsAvgAggregateInputType
    _sum?: RoomsSumAggregateInputType
    _min?: RoomsMinAggregateInputType
    _max?: RoomsMaxAggregateInputType
  }

  export type RoomsGroupByOutputType = {
    room_id: number
    room_count: number | null
    type: string | null
    price_per_night: Decimal
    capacity: number
    description: string | null
    image: string | null
    title: string | null
    _count: RoomsCountAggregateOutputType | null
    _avg: RoomsAvgAggregateOutputType | null
    _sum: RoomsSumAggregateOutputType | null
    _min: RoomsMinAggregateOutputType | null
    _max: RoomsMaxAggregateOutputType | null
  }

  type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomsGroupByOutputType[P]>
            : GetScalarType<T[P], RoomsGroupByOutputType[P]>
        }
      >
    >


  export type roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    room_count?: boolean
    type?: boolean
    price_per_night?: boolean
    capacity?: boolean
    description?: boolean
    image?: boolean
    title?: boolean
    bookings?: boolean | rooms$bookingsArgs<ExtArgs>
    reviews?: boolean | rooms$reviewsArgs<ExtArgs>
    room_conveniences?: boolean | rooms$room_conveniencesArgs<ExtArgs>
    wishlist?: boolean | rooms$wishlistArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    room_count?: boolean
    type?: boolean
    price_per_night?: boolean
    capacity?: boolean
    description?: boolean
    image?: boolean
    title?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    room_id?: boolean
    room_count?: boolean
    type?: boolean
    price_per_night?: boolean
    capacity?: boolean
    description?: boolean
    image?: boolean
    title?: boolean
  }, ExtArgs["result"]["rooms"]>

  export type roomsSelectScalar = {
    room_id?: boolean
    room_count?: boolean
    type?: boolean
    price_per_night?: boolean
    capacity?: boolean
    description?: boolean
    image?: boolean
    title?: boolean
  }

  export type roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"room_id" | "room_count" | "type" | "price_per_night" | "capacity" | "description" | "image" | "title", ExtArgs["result"]["rooms"]>
  export type roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | rooms$bookingsArgs<ExtArgs>
    reviews?: boolean | rooms$reviewsArgs<ExtArgs>
    room_conveniences?: boolean | rooms$room_conveniencesArgs<ExtArgs>
    wishlist?: boolean | rooms$wishlistArgs<ExtArgs>
    _count?: boolean | RoomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rooms"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      room_conveniences: Prisma.$room_conveniencesPayload<ExtArgs>[]
      wishlist: Prisma.$wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      room_id: number
      room_count: number | null
      type: string | null
      price_per_night: Prisma.Decimal
      capacity: number
      description: string | null
      image: string | null
      title: string | null
    }, ExtArgs["result"]["rooms"]>
    composites: {}
  }

  type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = $Result.GetResult<Prisma.$roomsPayload, S>

  type roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomsCountAggregateInputType | true
    }

  export interface roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rooms'], meta: { name: 'rooms' } }
    /**
     * Find zero or one Rooms that matches the filter.
     * @param {roomsFindUniqueArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roomsFindUniqueArgs>(args: SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roomsFindUniqueOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roomsFindFirstArgs>(args?: SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindFirstOrThrowArgs} args - Arguments to find a Rooms
     * @example
     * // Get one Rooms
     * const rooms = await prisma.rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.rooms.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.rooms.findMany({ take: 10 })
     * 
     * // Only select the `room_id`
     * const roomsWithRoom_idOnly = await prisma.rooms.findMany({ select: { room_id: true } })
     * 
     */
    findMany<T extends roomsFindManyArgs>(args?: SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rooms.
     * @param {roomsCreateArgs} args - Arguments to create a Rooms.
     * @example
     * // Create one Rooms
     * const Rooms = await prisma.rooms.create({
     *   data: {
     *     // ... data to create a Rooms
     *   }
     * })
     * 
     */
    create<T extends roomsCreateArgs>(args: SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {roomsCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roomsCreateManyArgs>(args?: SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {roomsCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const rooms = await prisma.rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `room_id`
     * const roomsWithRoom_idOnly = await prisma.rooms.createManyAndReturn({
     *   select: { room_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rooms.
     * @param {roomsDeleteArgs} args - Arguments to delete one Rooms.
     * @example
     * // Delete one Rooms
     * const Rooms = await prisma.rooms.delete({
     *   where: {
     *     // ... filter to delete one Rooms
     *   }
     * })
     * 
     */
    delete<T extends roomsDeleteArgs>(args: SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rooms.
     * @param {roomsUpdateArgs} args - Arguments to update one Rooms.
     * @example
     * // Update one Rooms
     * const rooms = await prisma.rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roomsUpdateArgs>(args: SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {roomsDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roomsDeleteManyArgs>(args?: SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roomsUpdateManyArgs>(args: SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {roomsUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const rooms = await prisma.rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `room_id`
     * const roomsWithRoom_idOnly = await prisma.rooms.updateManyAndReturn({
     *   select: { room_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rooms.
     * @param {roomsUpsertArgs} args - Arguments to update or create a Rooms.
     * @example
     * // Update or create a Rooms
     * const rooms = await prisma.rooms.upsert({
     *   create: {
     *     // ... data to create a Rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rooms we want to update
     *   }
     * })
     */
    upsert<T extends roomsUpsertArgs>(args: SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.rooms.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends roomsCountArgs>(
      args?: Subset<T, roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomsAggregateArgs>(args: Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>

    /**
     * Group by Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roomsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roomsGroupByArgs['orderBy'] }
        : { orderBy?: roomsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rooms model
   */
  readonly fields: roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends rooms$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, rooms$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends rooms$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, rooms$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    room_conveniences<T extends rooms$room_conveniencesArgs<ExtArgs> = {}>(args?: Subset<T, rooms$room_conveniencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$room_conveniencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends rooms$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, rooms$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rooms model
   */
  interface roomsFieldRefs {
    readonly room_id: FieldRef<"rooms", 'Int'>
    readonly room_count: FieldRef<"rooms", 'Int'>
    readonly type: FieldRef<"rooms", 'String'>
    readonly price_per_night: FieldRef<"rooms", 'Decimal'>
    readonly capacity: FieldRef<"rooms", 'Int'>
    readonly description: FieldRef<"rooms", 'String'>
    readonly image: FieldRef<"rooms", 'String'>
    readonly title: FieldRef<"rooms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rooms findUnique
   */
  export type roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findUniqueOrThrow
   */
  export type roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms findFirst
   */
  export type roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findFirstOrThrow
   */
  export type roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rooms.
     */
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms findMany
   */
  export type roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter, which rooms to fetch.
     */
    where?: roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rooms to fetch.
     */
    orderBy?: roomsOrderByWithRelationInput | roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rooms.
     */
    cursor?: roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rooms.
     */
    skip?: number
    distinct?: RoomsScalarFieldEnum | RoomsScalarFieldEnum[]
  }

  /**
   * rooms create
   */
  export type roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a rooms.
     */
    data: XOR<roomsCreateInput, roomsUncheckedCreateInput>
  }

  /**
   * rooms createMany
   */
  export type roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms createManyAndReturn
   */
  export type roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to create many rooms.
     */
    data: roomsCreateManyInput | roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rooms update
   */
  export type roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a rooms.
     */
    data: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
    /**
     * Choose, which rooms to update.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms updateMany
   */
  export type roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms updateManyAndReturn
   */
  export type roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * The data used to update rooms.
     */
    data: XOR<roomsUpdateManyMutationInput, roomsUncheckedUpdateManyInput>
    /**
     * Filter which rooms to update
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to update.
     */
    limit?: number
  }

  /**
   * rooms upsert
   */
  export type roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the rooms to update in case it exists.
     */
    where: roomsWhereUniqueInput
    /**
     * In case the rooms found by the `where` argument doesn't exist, create a new rooms with this data.
     */
    create: XOR<roomsCreateInput, roomsUncheckedCreateInput>
    /**
     * In case the rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roomsUpdateInput, roomsUncheckedUpdateInput>
  }

  /**
   * rooms delete
   */
  export type roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
    /**
     * Filter which rooms to delete.
     */
    where: roomsWhereUniqueInput
  }

  /**
   * rooms deleteMany
   */
  export type roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rooms to delete
     */
    where?: roomsWhereInput
    /**
     * Limit how many rooms to delete.
     */
    limit?: number
  }

  /**
   * rooms.bookings
   */
  export type rooms$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * rooms.reviews
   */
  export type rooms$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * rooms.room_conveniences
   */
  export type rooms$room_conveniencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the room_conveniences
     */
    select?: room_conveniencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the room_conveniences
     */
    omit?: room_conveniencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: room_conveniencesInclude<ExtArgs> | null
    where?: room_conveniencesWhereInput
    orderBy?: room_conveniencesOrderByWithRelationInput | room_conveniencesOrderByWithRelationInput[]
    cursor?: room_conveniencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Room_conveniencesScalarFieldEnum | Room_conveniencesScalarFieldEnum[]
  }

  /**
   * rooms.wishlist
   */
  export type rooms$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    cursor?: wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * rooms without action
   */
  export type roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rooms
     */
    select?: roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rooms
     */
    omit?: roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roomsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    created_at: Date | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    phone: string | null
    created_at: Date | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password_hash: number
    phone: number
    created_at: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    created_at?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    created_at?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password_hash?: true
    phone?: true
    created_at?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password_hash: string
    phone: string | null
    created_at: Date | null
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    created_at?: boolean
    role?: boolean
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    wishlist?: boolean | users$wishlistArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    phone?: boolean
    created_at?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password_hash" | "phone" | "created_at" | "role", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | users$bookingsArgs<ExtArgs>
    reviews?: boolean | users$reviewsArgs<ExtArgs>
    wishlist?: boolean | users$wishlistArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      bookings: Prisma.$bookingsPayload<ExtArgs>[]
      reviews: Prisma.$reviewsPayload<ExtArgs>[]
      wishlist: Prisma.$wishlistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password_hash: string
      phone: string | null
      created_at: Date | null
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends users$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishlist<T extends users$wishlistArgs<ExtArgs> = {}>(args?: Subset<T, users$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bookings
   */
  export type users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookings
     */
    select?: bookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bookings
     */
    omit?: bookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookingsInclude<ExtArgs> | null
    where?: bookingsWhereInput
    orderBy?: bookingsOrderByWithRelationInput | bookingsOrderByWithRelationInput[]
    cursor?: bookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * users.reviews
   */
  export type users$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reviews
     */
    select?: reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reviews
     */
    omit?: reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewsInclude<ExtArgs> | null
    where?: reviewsWhereInput
    orderBy?: reviewsOrderByWithRelationInput | reviewsOrderByWithRelationInput[]
    cursor?: reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * users.wishlist
   */
  export type users$wishlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    cursor?: wishlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model wishlist
   */

  export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  export type WishlistAvgAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    room_id: number | null
  }

  export type WishlistSumAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    room_id: number | null
  }

  export type WishlistMinAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    room_id: number | null
    created_at: Date | null
  }

  export type WishlistMaxAggregateOutputType = {
    wishlist_id: number | null
    user_id: number | null
    room_id: number | null
    created_at: Date | null
  }

  export type WishlistCountAggregateOutputType = {
    wishlist_id: number
    user_id: number
    room_id: number
    created_at: number
    _all: number
  }


  export type WishlistAvgAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    room_id?: true
  }

  export type WishlistSumAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    room_id?: true
  }

  export type WishlistMinAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    room_id?: true
    created_at?: true
  }

  export type WishlistMaxAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    room_id?: true
    created_at?: true
  }

  export type WishlistCountAggregateInputType = {
    wishlist_id?: true
    user_id?: true
    room_id?: true
    created_at?: true
    _all?: true
  }

  export type WishlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist to aggregate.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wishlists
    **/
    _count?: true | WishlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishlistMaxAggregateInputType
  }

  export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWishlist[P]>
      : GetScalarType<T[P], AggregateWishlist[P]>
  }




  export type wishlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: wishlistWhereInput
    orderBy?: wishlistOrderByWithAggregationInput | wishlistOrderByWithAggregationInput[]
    by: WishlistScalarFieldEnum[] | WishlistScalarFieldEnum
    having?: wishlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishlistCountAggregateInputType | true
    _avg?: WishlistAvgAggregateInputType
    _sum?: WishlistSumAggregateInputType
    _min?: WishlistMinAggregateInputType
    _max?: WishlistMaxAggregateInputType
  }

  export type WishlistGroupByOutputType = {
    wishlist_id: number
    user_id: number
    room_id: number
    created_at: Date | null
    _count: WishlistCountAggregateOutputType | null
    _avg: WishlistAvgAggregateOutputType | null
    _sum: WishlistSumAggregateOutputType | null
    _min: WishlistMinAggregateOutputType | null
    _max: WishlistMaxAggregateOutputType | null
  }

  type GetWishlistGroupByPayload<T extends wishlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishlistGroupByOutputType[P]>
            : GetScalarType<T[P], WishlistGroupByOutputType[P]>
        }
      >
    >


  export type wishlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    room_id?: boolean
    created_at?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    room_id?: boolean
    created_at?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wishlist_id?: boolean
    user_id?: boolean
    room_id?: boolean
    created_at?: boolean
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wishlist"]>

  export type wishlistSelectScalar = {
    wishlist_id?: boolean
    user_id?: boolean
    room_id?: boolean
    created_at?: boolean
  }

  export type wishlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wishlist_id" | "user_id" | "room_id" | "created_at", ExtArgs["result"]["wishlist"]>
  export type wishlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type wishlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type wishlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | roomsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $wishlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wishlist"
    objects: {
      rooms: Prisma.$roomsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      wishlist_id: number
      user_id: number
      room_id: number
      created_at: Date | null
    }, ExtArgs["result"]["wishlist"]>
    composites: {}
  }

  type wishlistGetPayload<S extends boolean | null | undefined | wishlistDefaultArgs> = $Result.GetResult<Prisma.$wishlistPayload, S>

  type wishlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<wishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishlistCountAggregateInputType | true
    }

  export interface wishlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wishlist'], meta: { name: 'wishlist' } }
    /**
     * Find zero or one Wishlist that matches the filter.
     * @param {wishlistFindUniqueArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlistFindUniqueArgs>(args: SelectSubset<T, wishlistFindUniqueArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wishlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlistFindUniqueOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlistFindUniqueOrThrowArgs>(args: SelectSubset<T, wishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlistFindFirstArgs>(args?: SelectSubset<T, wishlistFindFirstArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wishlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindFirstOrThrowArgs} args - Arguments to find a Wishlist
     * @example
     * // Get one Wishlist
     * const wishlist = await prisma.wishlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlistFindFirstOrThrowArgs>(args?: SelectSubset<T, wishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlist.findMany()
     * 
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlist.findMany({ take: 10 })
     * 
     * // Only select the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.findMany({ select: { wishlist_id: true } })
     * 
     */
    findMany<T extends wishlistFindManyArgs>(args?: SelectSubset<T, wishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wishlist.
     * @param {wishlistCreateArgs} args - Arguments to create a Wishlist.
     * @example
     * // Create one Wishlist
     * const Wishlist = await prisma.wishlist.create({
     *   data: {
     *     // ... data to create a Wishlist
     *   }
     * })
     * 
     */
    create<T extends wishlistCreateArgs>(args: SelectSubset<T, wishlistCreateArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishlists.
     * @param {wishlistCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends wishlistCreateManyArgs>(args?: SelectSubset<T, wishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {wishlistCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlist = await prisma.wishlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wishlists and only return the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.createManyAndReturn({
     *   select: { wishlist_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends wishlistCreateManyAndReturnArgs>(args?: SelectSubset<T, wishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wishlist.
     * @param {wishlistDeleteArgs} args - Arguments to delete one Wishlist.
     * @example
     * // Delete one Wishlist
     * const Wishlist = await prisma.wishlist.delete({
     *   where: {
     *     // ... filter to delete one Wishlist
     *   }
     * })
     * 
     */
    delete<T extends wishlistDeleteArgs>(args: SelectSubset<T, wishlistDeleteArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wishlist.
     * @param {wishlistUpdateArgs} args - Arguments to update one Wishlist.
     * @example
     * // Update one Wishlist
     * const wishlist = await prisma.wishlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends wishlistUpdateArgs>(args: SelectSubset<T, wishlistUpdateArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishlists.
     * @param {wishlistDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends wishlistDeleteManyArgs>(args?: SelectSubset<T, wishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends wishlistUpdateManyArgs>(args: SelectSubset<T, wishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {wishlistUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlist = await prisma.wishlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wishlists and only return the `wishlist_id`
     * const wishlistWithWishlist_idOnly = await prisma.wishlist.updateManyAndReturn({
     *   select: { wishlist_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends wishlistUpdateManyAndReturnArgs>(args: SelectSubset<T, wishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wishlist.
     * @param {wishlistUpsertArgs} args - Arguments to update or create a Wishlist.
     * @example
     * // Update or create a Wishlist
     * const wishlist = await prisma.wishlist.upsert({
     *   create: {
     *     // ... data to create a Wishlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist we want to update
     *   }
     * })
     */
    upsert<T extends wishlistUpsertArgs>(args: SelectSubset<T, wishlistUpsertArgs<ExtArgs>>): Prisma__wishlistClient<$Result.GetResult<Prisma.$wishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlist.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends wishlistCountArgs>(
      args?: Subset<T, wishlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WishlistAggregateArgs>(args: Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>

    /**
     * Group by Wishlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends wishlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: wishlistGroupByArgs['orderBy'] }
        : { orderBy?: wishlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, wishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wishlist model
   */
  readonly fields: wishlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wishlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__wishlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roomsDefaultArgs<ExtArgs>>): Prisma__roomsClient<$Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wishlist model
   */
  interface wishlistFieldRefs {
    readonly wishlist_id: FieldRef<"wishlist", 'Int'>
    readonly user_id: FieldRef<"wishlist", 'Int'>
    readonly room_id: FieldRef<"wishlist", 'Int'>
    readonly created_at: FieldRef<"wishlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wishlist findUnique
   */
  export type wishlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist findUniqueOrThrow
   */
  export type wishlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist findFirst
   */
  export type wishlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist findFirstOrThrow
   */
  export type wishlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlist to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wishlists.
     */
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist findMany
   */
  export type wishlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter, which wishlists to fetch.
     */
    where?: wishlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wishlists to fetch.
     */
    orderBy?: wishlistOrderByWithRelationInput | wishlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wishlists.
     */
    cursor?: wishlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wishlists.
     */
    skip?: number
    distinct?: WishlistScalarFieldEnum | WishlistScalarFieldEnum[]
  }

  /**
   * wishlist create
   */
  export type wishlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The data needed to create a wishlist.
     */
    data: XOR<wishlistCreateInput, wishlistUncheckedCreateInput>
  }

  /**
   * wishlist createMany
   */
  export type wishlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlists.
     */
    data: wishlistCreateManyInput | wishlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wishlist createManyAndReturn
   */
  export type wishlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * The data used to create many wishlists.
     */
    data: wishlistCreateManyInput | wishlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wishlist update
   */
  export type wishlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The data needed to update a wishlist.
     */
    data: XOR<wishlistUpdateInput, wishlistUncheckedUpdateInput>
    /**
     * Choose, which wishlist to update.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist updateMany
   */
  export type wishlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlists.
     */
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyInput>
    /**
     * Filter which wishlists to update
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to update.
     */
    limit?: number
  }

  /**
   * wishlist updateManyAndReturn
   */
  export type wishlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * The data used to update wishlists.
     */
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyInput>
    /**
     * Filter which wishlists to update
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wishlist upsert
   */
  export type wishlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * The filter to search for the wishlist to update in case it exists.
     */
    where: wishlistWhereUniqueInput
    /**
     * In case the wishlist found by the `where` argument doesn't exist, create a new wishlist with this data.
     */
    create: XOR<wishlistCreateInput, wishlistUncheckedCreateInput>
    /**
     * In case the wishlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<wishlistUpdateInput, wishlistUncheckedUpdateInput>
  }

  /**
   * wishlist delete
   */
  export type wishlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
    /**
     * Filter which wishlist to delete.
     */
    where: wishlistWhereUniqueInput
  }

  /**
   * wishlist deleteMany
   */
  export type wishlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wishlists to delete
     */
    where?: wishlistWhereInput
    /**
     * Limit how many wishlists to delete.
     */
    limit?: number
  }

  /**
   * wishlist without action
   */
  export type wishlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist
     */
    select?: wishlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wishlist
     */
    omit?: wishlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: wishlistInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BookingsScalarFieldEnum: {
    booking_id: 'booking_id',
    status: 'status',
    check_in: 'check_in',
    check_out: 'check_out',
    created_at: 'created_at',
    user_id: 'user_id',
    room_id: 'room_id',
    total_cost: 'total_cost'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const ConveniencesScalarFieldEnum: {
    convenience_id: 'convenience_id',
    name: 'name'
  };

  export type ConveniencesScalarFieldEnum = (typeof ConveniencesScalarFieldEnum)[keyof typeof ConveniencesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    room_id: 'room_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const Room_conveniencesScalarFieldEnum: {
    room_id: 'room_id',
    convenience_id: 'convenience_id'
  };

  export type Room_conveniencesScalarFieldEnum = (typeof Room_conveniencesScalarFieldEnum)[keyof typeof Room_conveniencesScalarFieldEnum]


  export const RoomsScalarFieldEnum: {
    room_id: 'room_id',
    room_count: 'room_count',
    type: 'type',
    price_per_night: 'price_per_night',
    capacity: 'capacity',
    description: 'description',
    image: 'image',
    title: 'title'
  };

  export type RoomsScalarFieldEnum = (typeof RoomsScalarFieldEnum)[keyof typeof RoomsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    phone: 'phone',
    created_at: 'created_at',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WishlistScalarFieldEnum: {
    wishlist_id: 'wishlist_id',
    user_id: 'user_id',
    room_id: 'room_id',
    created_at: 'created_at'
  };

  export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bookingsWhereInput = {
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    booking_id?: IntFilter<"bookings"> | number
    status?: StringFilter<"bookings"> | string
    check_in?: DateTimeFilter<"bookings"> | Date | string
    check_out?: DateTimeFilter<"bookings"> | Date | string
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    user_id?: IntNullableFilter<"bookings"> | number | null
    room_id?: IntNullableFilter<"bookings"> | number | null
    total_cost?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    rooms?: XOR<RoomsNullableScalarRelationFilter, roomsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type bookingsOrderByWithRelationInput = {
    booking_id?: SortOrder
    status?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    created_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    room_id?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    rooms?: roomsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    booking_id?: number
    AND?: bookingsWhereInput | bookingsWhereInput[]
    OR?: bookingsWhereInput[]
    NOT?: bookingsWhereInput | bookingsWhereInput[]
    status?: StringFilter<"bookings"> | string
    check_in?: DateTimeFilter<"bookings"> | Date | string
    check_out?: DateTimeFilter<"bookings"> | Date | string
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    user_id?: IntNullableFilter<"bookings"> | number | null
    room_id?: IntNullableFilter<"bookings"> | number | null
    total_cost?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
    rooms?: XOR<RoomsNullableScalarRelationFilter, roomsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "booking_id">

  export type bookingsOrderByWithAggregationInput = {
    booking_id?: SortOrder
    status?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    created_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    room_id?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    _count?: bookingsCountOrderByAggregateInput
    _avg?: bookingsAvgOrderByAggregateInput
    _max?: bookingsMaxOrderByAggregateInput
    _min?: bookingsMinOrderByAggregateInput
    _sum?: bookingsSumOrderByAggregateInput
  }

  export type bookingsScalarWhereWithAggregatesInput = {
    AND?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    OR?: bookingsScalarWhereWithAggregatesInput[]
    NOT?: bookingsScalarWhereWithAggregatesInput | bookingsScalarWhereWithAggregatesInput[]
    booking_id?: IntWithAggregatesFilter<"bookings"> | number
    status?: StringWithAggregatesFilter<"bookings"> | string
    check_in?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    check_out?: DateTimeWithAggregatesFilter<"bookings"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"bookings"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    room_id?: IntNullableWithAggregatesFilter<"bookings"> | number | null
    total_cost?: DecimalNullableWithAggregatesFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
  }

  export type conveniencesWhereInput = {
    AND?: conveniencesWhereInput | conveniencesWhereInput[]
    OR?: conveniencesWhereInput[]
    NOT?: conveniencesWhereInput | conveniencesWhereInput[]
    convenience_id?: IntFilter<"conveniences"> | number
    name?: StringFilter<"conveniences"> | string
    room_conveniences?: Room_conveniencesListRelationFilter
  }

  export type conveniencesOrderByWithRelationInput = {
    convenience_id?: SortOrder
    name?: SortOrder
    room_conveniences?: room_conveniencesOrderByRelationAggregateInput
  }

  export type conveniencesWhereUniqueInput = Prisma.AtLeast<{
    convenience_id?: number
    name?: string
    AND?: conveniencesWhereInput | conveniencesWhereInput[]
    OR?: conveniencesWhereInput[]
    NOT?: conveniencesWhereInput | conveniencesWhereInput[]
    room_conveniences?: Room_conveniencesListRelationFilter
  }, "convenience_id" | "name">

  export type conveniencesOrderByWithAggregationInput = {
    convenience_id?: SortOrder
    name?: SortOrder
    _count?: conveniencesCountOrderByAggregateInput
    _avg?: conveniencesAvgOrderByAggregateInput
    _max?: conveniencesMaxOrderByAggregateInput
    _min?: conveniencesMinOrderByAggregateInput
    _sum?: conveniencesSumOrderByAggregateInput
  }

  export type conveniencesScalarWhereWithAggregatesInput = {
    AND?: conveniencesScalarWhereWithAggregatesInput | conveniencesScalarWhereWithAggregatesInput[]
    OR?: conveniencesScalarWhereWithAggregatesInput[]
    NOT?: conveniencesScalarWhereWithAggregatesInput | conveniencesScalarWhereWithAggregatesInput[]
    convenience_id?: IntWithAggregatesFilter<"conveniences"> | number
    name?: StringWithAggregatesFilter<"conveniences"> | string
  }

  export type reviewsWhereInput = {
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    review_id?: IntFilter<"reviews"> | number
    user_id?: IntNullableFilter<"reviews"> | number | null
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    rooms?: XOR<RoomsNullableScalarRelationFilter, roomsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type reviewsOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    room_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    rooms?: roomsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type reviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewsWhereInput | reviewsWhereInput[]
    OR?: reviewsWhereInput[]
    NOT?: reviewsWhereInput | reviewsWhereInput[]
    user_id?: IntNullableFilter<"reviews"> | number | null
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
    rooms?: XOR<RoomsNullableScalarRelationFilter, roomsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "review_id">

  export type reviewsOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    room_id?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: reviewsCountOrderByAggregateInput
    _avg?: reviewsAvgOrderByAggregateInput
    _max?: reviewsMaxOrderByAggregateInput
    _min?: reviewsMinOrderByAggregateInput
    _sum?: reviewsSumOrderByAggregateInput
  }

  export type reviewsScalarWhereWithAggregatesInput = {
    AND?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    OR?: reviewsScalarWhereWithAggregatesInput[]
    NOT?: reviewsScalarWhereWithAggregatesInput | reviewsScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"reviews"> | number
    user_id?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    room_id?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    rating?: IntNullableWithAggregatesFilter<"reviews"> | number | null
    comment?: StringNullableWithAggregatesFilter<"reviews"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"reviews"> | Date | string | null
  }

  export type room_conveniencesWhereInput = {
    AND?: room_conveniencesWhereInput | room_conveniencesWhereInput[]
    OR?: room_conveniencesWhereInput[]
    NOT?: room_conveniencesWhereInput | room_conveniencesWhereInput[]
    room_id?: IntFilter<"room_conveniences"> | number
    convenience_id?: IntFilter<"room_conveniences"> | number
    conveniences?: XOR<ConveniencesScalarRelationFilter, conveniencesWhereInput>
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }

  export type room_conveniencesOrderByWithRelationInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
    conveniences?: conveniencesOrderByWithRelationInput
    rooms?: roomsOrderByWithRelationInput
  }

  export type room_conveniencesWhereUniqueInput = Prisma.AtLeast<{
    room_id_convenience_id?: room_conveniencesRoom_idConvenience_idCompoundUniqueInput
    AND?: room_conveniencesWhereInput | room_conveniencesWhereInput[]
    OR?: room_conveniencesWhereInput[]
    NOT?: room_conveniencesWhereInput | room_conveniencesWhereInput[]
    room_id?: IntFilter<"room_conveniences"> | number
    convenience_id?: IntFilter<"room_conveniences"> | number
    conveniences?: XOR<ConveniencesScalarRelationFilter, conveniencesWhereInput>
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
  }, "room_id_convenience_id">

  export type room_conveniencesOrderByWithAggregationInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
    _count?: room_conveniencesCountOrderByAggregateInput
    _avg?: room_conveniencesAvgOrderByAggregateInput
    _max?: room_conveniencesMaxOrderByAggregateInput
    _min?: room_conveniencesMinOrderByAggregateInput
    _sum?: room_conveniencesSumOrderByAggregateInput
  }

  export type room_conveniencesScalarWhereWithAggregatesInput = {
    AND?: room_conveniencesScalarWhereWithAggregatesInput | room_conveniencesScalarWhereWithAggregatesInput[]
    OR?: room_conveniencesScalarWhereWithAggregatesInput[]
    NOT?: room_conveniencesScalarWhereWithAggregatesInput | room_conveniencesScalarWhereWithAggregatesInput[]
    room_id?: IntWithAggregatesFilter<"room_conveniences"> | number
    convenience_id?: IntWithAggregatesFilter<"room_conveniences"> | number
  }

  export type roomsWhereInput = {
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    room_id?: IntFilter<"rooms"> | number
    room_count?: IntNullableFilter<"rooms"> | number | null
    type?: StringNullableFilter<"rooms"> | string | null
    price_per_night?: DecimalFilter<"rooms"> | Decimal | DecimalJsLike | number | string
    capacity?: IntFilter<"rooms"> | number
    description?: StringNullableFilter<"rooms"> | string | null
    image?: StringNullableFilter<"rooms"> | string | null
    title?: StringNullableFilter<"rooms"> | string | null
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    room_conveniences?: Room_conveniencesListRelationFilter
    wishlist?: WishlistListRelationFilter
  }

  export type roomsOrderByWithRelationInput = {
    room_id?: SortOrder
    room_count?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    room_conveniences?: room_conveniencesOrderByRelationAggregateInput
    wishlist?: wishlistOrderByRelationAggregateInput
  }

  export type roomsWhereUniqueInput = Prisma.AtLeast<{
    room_id?: number
    AND?: roomsWhereInput | roomsWhereInput[]
    OR?: roomsWhereInput[]
    NOT?: roomsWhereInput | roomsWhereInput[]
    room_count?: IntNullableFilter<"rooms"> | number | null
    type?: StringNullableFilter<"rooms"> | string | null
    price_per_night?: DecimalFilter<"rooms"> | Decimal | DecimalJsLike | number | string
    capacity?: IntFilter<"rooms"> | number
    description?: StringNullableFilter<"rooms"> | string | null
    image?: StringNullableFilter<"rooms"> | string | null
    title?: StringNullableFilter<"rooms"> | string | null
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    room_conveniences?: Room_conveniencesListRelationFilter
    wishlist?: WishlistListRelationFilter
  }, "room_id">

  export type roomsOrderByWithAggregationInput = {
    room_id?: SortOrder
    room_count?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: roomsCountOrderByAggregateInput
    _avg?: roomsAvgOrderByAggregateInput
    _max?: roomsMaxOrderByAggregateInput
    _min?: roomsMinOrderByAggregateInput
    _sum?: roomsSumOrderByAggregateInput
  }

  export type roomsScalarWhereWithAggregatesInput = {
    AND?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    OR?: roomsScalarWhereWithAggregatesInput[]
    NOT?: roomsScalarWhereWithAggregatesInput | roomsScalarWhereWithAggregatesInput[]
    room_id?: IntWithAggregatesFilter<"rooms"> | number
    room_count?: IntNullableWithAggregatesFilter<"rooms"> | number | null
    type?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    price_per_night?: DecimalWithAggregatesFilter<"rooms"> | Decimal | DecimalJsLike | number | string
    capacity?: IntWithAggregatesFilter<"rooms"> | number
    description?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    image?: StringNullableWithAggregatesFilter<"rooms"> | string | null
    title?: StringNullableWithAggregatesFilter<"rooms"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    role?: StringFilter<"users"> | string
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    wishlist?: WishlistListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    role?: SortOrder
    bookings?: bookingsOrderByRelationAggregateInput
    reviews?: reviewsOrderByRelationAggregateInput
    wishlist?: wishlistOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    role?: StringFilter<"users"> | string
    bookings?: BookingsListRelationFilter
    reviews?: ReviewsListRelationFilter
    wishlist?: WishlistListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type wishlistWhereInput = {
    AND?: wishlistWhereInput | wishlistWhereInput[]
    OR?: wishlistWhereInput[]
    NOT?: wishlistWhereInput | wishlistWhereInput[]
    wishlist_id?: IntFilter<"wishlist"> | number
    user_id?: IntFilter<"wishlist"> | number
    room_id?: IntFilter<"wishlist"> | number
    created_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type wishlistOrderByWithRelationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    rooms?: roomsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type wishlistWhereUniqueInput = Prisma.AtLeast<{
    wishlist_id?: number
    user_id_room_id?: wishlistUser_idRoom_idCompoundUniqueInput
    AND?: wishlistWhereInput | wishlistWhereInput[]
    OR?: wishlistWhereInput[]
    NOT?: wishlistWhereInput | wishlistWhereInput[]
    user_id?: IntFilter<"wishlist"> | number
    room_id?: IntFilter<"wishlist"> | number
    created_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
    rooms?: XOR<RoomsScalarRelationFilter, roomsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "wishlist_id" | "user_id_room_id">

  export type wishlistOrderByWithAggregationInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: wishlistCountOrderByAggregateInput
    _avg?: wishlistAvgOrderByAggregateInput
    _max?: wishlistMaxOrderByAggregateInput
    _min?: wishlistMinOrderByAggregateInput
    _sum?: wishlistSumOrderByAggregateInput
  }

  export type wishlistScalarWhereWithAggregatesInput = {
    AND?: wishlistScalarWhereWithAggregatesInput | wishlistScalarWhereWithAggregatesInput[]
    OR?: wishlistScalarWhereWithAggregatesInput[]
    NOT?: wishlistScalarWhereWithAggregatesInput | wishlistScalarWhereWithAggregatesInput[]
    wishlist_id?: IntWithAggregatesFilter<"wishlist"> | number
    user_id?: IntWithAggregatesFilter<"wishlist"> | number
    room_id?: IntWithAggregatesFilter<"wishlist"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"wishlist"> | Date | string | null
  }

  export type bookingsCreateInput = {
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    rooms?: roomsCreateNestedOneWithoutBookingsInput
    users?: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    user_id?: number | null
    room_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rooms?: roomsUpdateOneWithoutBookingsNestedInput
    users?: usersUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsCreateManyInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    user_id?: number | null
    room_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsUncheckedUpdateManyInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type conveniencesCreateInput = {
    name: string
    room_conveniences?: room_conveniencesCreateNestedManyWithoutConveniencesInput
  }

  export type conveniencesUncheckedCreateInput = {
    convenience_id?: number
    name: string
    room_conveniences?: room_conveniencesUncheckedCreateNestedManyWithoutConveniencesInput
  }

  export type conveniencesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    room_conveniences?: room_conveniencesUpdateManyWithoutConveniencesNestedInput
  }

  export type conveniencesUncheckedUpdateInput = {
    convenience_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    room_conveniences?: room_conveniencesUncheckedUpdateManyWithoutConveniencesNestedInput
  }

  export type conveniencesCreateManyInput = {
    convenience_id?: number
    name: string
  }

  export type conveniencesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conveniencesUncheckedUpdateManyInput = {
    convenience_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type reviewsCreateInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    rooms?: roomsCreateNestedOneWithoutReviewsInput
    users?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateInput = {
    review_id?: number
    user_id?: number | null
    room_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneWithoutReviewsNestedInput
    users?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsCreateManyInput = {
    review_id?: number
    user_id?: number | null
    room_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_conveniencesCreateInput = {
    conveniences: conveniencesCreateNestedOneWithoutRoom_conveniencesInput
    rooms: roomsCreateNestedOneWithoutRoom_conveniencesInput
  }

  export type room_conveniencesUncheckedCreateInput = {
    room_id: number
    convenience_id: number
  }

  export type room_conveniencesUpdateInput = {
    conveniences?: conveniencesUpdateOneRequiredWithoutRoom_conveniencesNestedInput
    rooms?: roomsUpdateOneRequiredWithoutRoom_conveniencesNestedInput
  }

  export type room_conveniencesUncheckedUpdateInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    convenience_id?: IntFieldUpdateOperationsInput | number
  }

  export type room_conveniencesCreateManyInput = {
    room_id: number
    convenience_id: number
  }

  export type room_conveniencesUpdateManyMutationInput = {

  }

  export type room_conveniencesUncheckedUpdateManyInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    convenience_id?: IntFieldUpdateOperationsInput | number
  }

  export type roomsCreateInput = {
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsCreateNestedManyWithoutRoomsInput
    reviews?: reviewsCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutRoomsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesUncheckedCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsUpdateInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUncheckedUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type roomsCreateManyInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
  }

  export type roomsUpdateManyMutationInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type roomsUncheckedUpdateManyInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    wishlist?: wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type wishlistCreateInput = {
    created_at?: Date | string | null
    rooms: roomsCreateNestedOneWithoutWishlistInput
    users: usersCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateInput = {
    wishlist_id?: number
    user_id: number
    room_id: number
    created_at?: Date | string | null
  }

  export type wishlistUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneRequiredWithoutWishlistNestedInput
    users?: usersUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistCreateManyInput = {
    wishlist_id?: number
    user_id: number
    room_id: number
    created_at?: Date | string | null
  }

  export type wishlistUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type RoomsNullableScalarRelationFilter = {
    is?: roomsWhereInput | null
    isNot?: roomsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookingsCountOrderByAggregateInput = {
    booking_id?: SortOrder
    status?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    total_cost?: SortOrder
  }

  export type bookingsAvgOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    total_cost?: SortOrder
  }

  export type bookingsMaxOrderByAggregateInput = {
    booking_id?: SortOrder
    status?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    total_cost?: SortOrder
  }

  export type bookingsMinOrderByAggregateInput = {
    booking_id?: SortOrder
    status?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    total_cost?: SortOrder
  }

  export type bookingsSumOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    total_cost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Room_conveniencesListRelationFilter = {
    every?: room_conveniencesWhereInput
    some?: room_conveniencesWhereInput
    none?: room_conveniencesWhereInput
  }

  export type room_conveniencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type conveniencesCountOrderByAggregateInput = {
    convenience_id?: SortOrder
    name?: SortOrder
  }

  export type conveniencesAvgOrderByAggregateInput = {
    convenience_id?: SortOrder
  }

  export type conveniencesMaxOrderByAggregateInput = {
    convenience_id?: SortOrder
    name?: SortOrder
  }

  export type conveniencesMinOrderByAggregateInput = {
    convenience_id?: SortOrder
    name?: SortOrder
  }

  export type conveniencesSumOrderByAggregateInput = {
    convenience_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type reviewsCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
  }

  export type reviewsMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type reviewsSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    rating?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ConveniencesScalarRelationFilter = {
    is?: conveniencesWhereInput
    isNot?: conveniencesWhereInput
  }

  export type RoomsScalarRelationFilter = {
    is?: roomsWhereInput
    isNot?: roomsWhereInput
  }

  export type room_conveniencesRoom_idConvenience_idCompoundUniqueInput = {
    room_id: number
    convenience_id: number
  }

  export type room_conveniencesCountOrderByAggregateInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
  }

  export type room_conveniencesAvgOrderByAggregateInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
  }

  export type room_conveniencesMaxOrderByAggregateInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
  }

  export type room_conveniencesMinOrderByAggregateInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
  }

  export type room_conveniencesSumOrderByAggregateInput = {
    room_id?: SortOrder
    convenience_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BookingsListRelationFilter = {
    every?: bookingsWhereInput
    some?: bookingsWhereInput
    none?: bookingsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: reviewsWhereInput
    some?: reviewsWhereInput
    none?: reviewsWhereInput
  }

  export type WishlistListRelationFilter = {
    every?: wishlistWhereInput
    some?: wishlistWhereInput
    none?: wishlistWhereInput
  }

  export type bookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type wishlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roomsCountOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    type?: SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    image?: SortOrder
    title?: SortOrder
  }

  export type roomsAvgOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
  }

  export type roomsMaxOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    type?: SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    image?: SortOrder
    title?: SortOrder
  }

  export type roomsMinOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    type?: SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    image?: SortOrder
    title?: SortOrder
  }

  export type roomsSumOrderByAggregateInput = {
    room_id?: SortOrder
    room_count?: SortOrder
    price_per_night?: SortOrder
    capacity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type wishlistUser_idRoom_idCompoundUniqueInput = {
    user_id: number
    room_id: number
  }

  export type wishlistCountOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type wishlistAvgOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
  }

  export type wishlistMaxOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type wishlistMinOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
    created_at?: SortOrder
  }

  export type wishlistSumOrderByAggregateInput = {
    wishlist_id?: SortOrder
    user_id?: SortOrder
    room_id?: SortOrder
  }

  export type roomsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<roomsCreateWithoutBookingsInput, roomsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutBookingsInput
    connect?: roomsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type roomsUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<roomsCreateWithoutBookingsInput, roomsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutBookingsInput
    upsert?: roomsUpsertWithoutBookingsInput
    disconnect?: roomsWhereInput | boolean
    delete?: roomsWhereInput | boolean
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutBookingsInput, roomsUpdateWithoutBookingsInput>, roomsUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBookingsInput
    upsert?: usersUpsertWithoutBookingsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBookingsInput, usersUpdateWithoutBookingsInput>, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type room_conveniencesCreateNestedManyWithoutConveniencesInput = {
    create?: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput> | room_conveniencesCreateWithoutConveniencesInput[] | room_conveniencesUncheckedCreateWithoutConveniencesInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutConveniencesInput | room_conveniencesCreateOrConnectWithoutConveniencesInput[]
    createMany?: room_conveniencesCreateManyConveniencesInputEnvelope
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
  }

  export type room_conveniencesUncheckedCreateNestedManyWithoutConveniencesInput = {
    create?: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput> | room_conveniencesCreateWithoutConveniencesInput[] | room_conveniencesUncheckedCreateWithoutConveniencesInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutConveniencesInput | room_conveniencesCreateOrConnectWithoutConveniencesInput[]
    createMany?: room_conveniencesCreateManyConveniencesInputEnvelope
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
  }

  export type room_conveniencesUpdateManyWithoutConveniencesNestedInput = {
    create?: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput> | room_conveniencesCreateWithoutConveniencesInput[] | room_conveniencesUncheckedCreateWithoutConveniencesInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutConveniencesInput | room_conveniencesCreateOrConnectWithoutConveniencesInput[]
    upsert?: room_conveniencesUpsertWithWhereUniqueWithoutConveniencesInput | room_conveniencesUpsertWithWhereUniqueWithoutConveniencesInput[]
    createMany?: room_conveniencesCreateManyConveniencesInputEnvelope
    set?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    disconnect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    delete?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    update?: room_conveniencesUpdateWithWhereUniqueWithoutConveniencesInput | room_conveniencesUpdateWithWhereUniqueWithoutConveniencesInput[]
    updateMany?: room_conveniencesUpdateManyWithWhereWithoutConveniencesInput | room_conveniencesUpdateManyWithWhereWithoutConveniencesInput[]
    deleteMany?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
  }

  export type room_conveniencesUncheckedUpdateManyWithoutConveniencesNestedInput = {
    create?: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput> | room_conveniencesCreateWithoutConveniencesInput[] | room_conveniencesUncheckedCreateWithoutConveniencesInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutConveniencesInput | room_conveniencesCreateOrConnectWithoutConveniencesInput[]
    upsert?: room_conveniencesUpsertWithWhereUniqueWithoutConveniencesInput | room_conveniencesUpsertWithWhereUniqueWithoutConveniencesInput[]
    createMany?: room_conveniencesCreateManyConveniencesInputEnvelope
    set?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    disconnect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    delete?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    update?: room_conveniencesUpdateWithWhereUniqueWithoutConveniencesInput | room_conveniencesUpdateWithWhereUniqueWithoutConveniencesInput[]
    updateMany?: room_conveniencesUpdateManyWithWhereWithoutConveniencesInput | room_conveniencesUpdateManyWithWhereWithoutConveniencesInput[]
    deleteMany?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
  }

  export type roomsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<roomsCreateWithoutReviewsInput, roomsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutReviewsInput
    connect?: roomsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type roomsUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<roomsCreateWithoutReviewsInput, roomsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: roomsCreateOrConnectWithoutReviewsInput
    upsert?: roomsUpsertWithoutReviewsInput
    disconnect?: roomsWhereInput | boolean
    delete?: roomsWhereInput | boolean
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutReviewsInput, roomsUpdateWithoutReviewsInput>, roomsUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewsInput
    upsert?: usersUpsertWithoutReviewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewsInput, usersUpdateWithoutReviewsInput>, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type conveniencesCreateNestedOneWithoutRoom_conveniencesInput = {
    create?: XOR<conveniencesCreateWithoutRoom_conveniencesInput, conveniencesUncheckedCreateWithoutRoom_conveniencesInput>
    connectOrCreate?: conveniencesCreateOrConnectWithoutRoom_conveniencesInput
    connect?: conveniencesWhereUniqueInput
  }

  export type roomsCreateNestedOneWithoutRoom_conveniencesInput = {
    create?: XOR<roomsCreateWithoutRoom_conveniencesInput, roomsUncheckedCreateWithoutRoom_conveniencesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutRoom_conveniencesInput
    connect?: roomsWhereUniqueInput
  }

  export type conveniencesUpdateOneRequiredWithoutRoom_conveniencesNestedInput = {
    create?: XOR<conveniencesCreateWithoutRoom_conveniencesInput, conveniencesUncheckedCreateWithoutRoom_conveniencesInput>
    connectOrCreate?: conveniencesCreateOrConnectWithoutRoom_conveniencesInput
    upsert?: conveniencesUpsertWithoutRoom_conveniencesInput
    connect?: conveniencesWhereUniqueInput
    update?: XOR<XOR<conveniencesUpdateToOneWithWhereWithoutRoom_conveniencesInput, conveniencesUpdateWithoutRoom_conveniencesInput>, conveniencesUncheckedUpdateWithoutRoom_conveniencesInput>
  }

  export type roomsUpdateOneRequiredWithoutRoom_conveniencesNestedInput = {
    create?: XOR<roomsCreateWithoutRoom_conveniencesInput, roomsUncheckedCreateWithoutRoom_conveniencesInput>
    connectOrCreate?: roomsCreateOrConnectWithoutRoom_conveniencesInput
    upsert?: roomsUpsertWithoutRoom_conveniencesInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutRoom_conveniencesInput, roomsUpdateWithoutRoom_conveniencesInput>, roomsUncheckedUpdateWithoutRoom_conveniencesInput>
  }

  export type bookingsCreateNestedManyWithoutRoomsInput = {
    create?: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput> | bookingsCreateWithoutRoomsInput[] | bookingsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutRoomsInput | bookingsCreateOrConnectWithoutRoomsInput[]
    createMany?: bookingsCreateManyRoomsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutRoomsInput = {
    create?: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput> | reviewsCreateWithoutRoomsInput[] | reviewsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutRoomsInput | reviewsCreateOrConnectWithoutRoomsInput[]
    createMany?: reviewsCreateManyRoomsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type room_conveniencesCreateNestedManyWithoutRoomsInput = {
    create?: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput> | room_conveniencesCreateWithoutRoomsInput[] | room_conveniencesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutRoomsInput | room_conveniencesCreateOrConnectWithoutRoomsInput[]
    createMany?: room_conveniencesCreateManyRoomsInputEnvelope
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
  }

  export type wishlistCreateNestedManyWithoutRoomsInput = {
    create?: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput> | wishlistCreateWithoutRoomsInput[] | wishlistUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutRoomsInput | wishlistCreateOrConnectWithoutRoomsInput[]
    createMany?: wishlistCreateManyRoomsInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput> | bookingsCreateWithoutRoomsInput[] | bookingsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutRoomsInput | bookingsCreateOrConnectWithoutRoomsInput[]
    createMany?: bookingsCreateManyRoomsInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput> | reviewsCreateWithoutRoomsInput[] | reviewsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutRoomsInput | reviewsCreateOrConnectWithoutRoomsInput[]
    createMany?: reviewsCreateManyRoomsInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type room_conveniencesUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput> | room_conveniencesCreateWithoutRoomsInput[] | room_conveniencesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutRoomsInput | room_conveniencesCreateOrConnectWithoutRoomsInput[]
    createMany?: room_conveniencesCreateManyRoomsInputEnvelope
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
  }

  export type wishlistUncheckedCreateNestedManyWithoutRoomsInput = {
    create?: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput> | wishlistCreateWithoutRoomsInput[] | wishlistUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutRoomsInput | wishlistCreateOrConnectWithoutRoomsInput[]
    createMany?: wishlistCreateManyRoomsInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type bookingsUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput> | bookingsCreateWithoutRoomsInput[] | bookingsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutRoomsInput | bookingsCreateOrConnectWithoutRoomsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutRoomsInput | bookingsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: bookingsCreateManyRoomsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutRoomsInput | bookingsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutRoomsInput | bookingsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput> | reviewsCreateWithoutRoomsInput[] | reviewsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutRoomsInput | reviewsCreateOrConnectWithoutRoomsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutRoomsInput | reviewsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: reviewsCreateManyRoomsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutRoomsInput | reviewsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutRoomsInput | reviewsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type room_conveniencesUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput> | room_conveniencesCreateWithoutRoomsInput[] | room_conveniencesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutRoomsInput | room_conveniencesCreateOrConnectWithoutRoomsInput[]
    upsert?: room_conveniencesUpsertWithWhereUniqueWithoutRoomsInput | room_conveniencesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: room_conveniencesCreateManyRoomsInputEnvelope
    set?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    disconnect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    delete?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    update?: room_conveniencesUpdateWithWhereUniqueWithoutRoomsInput | room_conveniencesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: room_conveniencesUpdateManyWithWhereWithoutRoomsInput | room_conveniencesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
  }

  export type wishlistUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput> | wishlistCreateWithoutRoomsInput[] | wishlistUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutRoomsInput | wishlistCreateOrConnectWithoutRoomsInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutRoomsInput | wishlistUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: wishlistCreateManyRoomsInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutRoomsInput | wishlistUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutRoomsInput | wishlistUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput> | bookingsCreateWithoutRoomsInput[] | bookingsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutRoomsInput | bookingsCreateOrConnectWithoutRoomsInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutRoomsInput | bookingsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: bookingsCreateManyRoomsInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutRoomsInput | bookingsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutRoomsInput | bookingsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput> | reviewsCreateWithoutRoomsInput[] | reviewsUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutRoomsInput | reviewsCreateOrConnectWithoutRoomsInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutRoomsInput | reviewsUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: reviewsCreateManyRoomsInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutRoomsInput | reviewsUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutRoomsInput | reviewsUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type room_conveniencesUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput> | room_conveniencesCreateWithoutRoomsInput[] | room_conveniencesUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: room_conveniencesCreateOrConnectWithoutRoomsInput | room_conveniencesCreateOrConnectWithoutRoomsInput[]
    upsert?: room_conveniencesUpsertWithWhereUniqueWithoutRoomsInput | room_conveniencesUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: room_conveniencesCreateManyRoomsInputEnvelope
    set?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    disconnect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    delete?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    connect?: room_conveniencesWhereUniqueInput | room_conveniencesWhereUniqueInput[]
    update?: room_conveniencesUpdateWithWhereUniqueWithoutRoomsInput | room_conveniencesUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: room_conveniencesUpdateManyWithWhereWithoutRoomsInput | room_conveniencesUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
  }

  export type wishlistUncheckedUpdateManyWithoutRoomsNestedInput = {
    create?: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput> | wishlistCreateWithoutRoomsInput[] | wishlistUncheckedCreateWithoutRoomsInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutRoomsInput | wishlistCreateOrConnectWithoutRoomsInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutRoomsInput | wishlistUpsertWithWhereUniqueWithoutRoomsInput[]
    createMany?: wishlistCreateManyRoomsInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutRoomsInput | wishlistUpdateWithWhereUniqueWithoutRoomsInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutRoomsInput | wishlistUpdateManyWithWhereWithoutRoomsInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type wishlistCreateNestedManyWithoutUsersInput = {
    create?: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput> | wishlistCreateWithoutUsersInput[] | wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUsersInput | wishlistCreateOrConnectWithoutUsersInput[]
    createMany?: wishlistCreateManyUsersInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
  }

  export type reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
  }

  export type wishlistUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput> | wishlistCreateWithoutUsersInput[] | wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUsersInput | wishlistCreateOrConnectWithoutUsersInput[]
    createMany?: wishlistCreateManyUsersInputEnvelope
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
  }

  export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type wishlistUpdateManyWithoutUsersNestedInput = {
    create?: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput> | wishlistCreateWithoutUsersInput[] | wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUsersInput | wishlistCreateOrConnectWithoutUsersInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutUsersInput | wishlistUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: wishlistCreateManyUsersInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutUsersInput | wishlistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutUsersInput | wishlistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput> | bookingsCreateWithoutUsersInput[] | bookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: bookingsCreateOrConnectWithoutUsersInput | bookingsCreateOrConnectWithoutUsersInput[]
    upsert?: bookingsUpsertWithWhereUniqueWithoutUsersInput | bookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: bookingsCreateManyUsersInputEnvelope
    set?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    disconnect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    delete?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    connect?: bookingsWhereUniqueInput | bookingsWhereUniqueInput[]
    update?: bookingsUpdateWithWhereUniqueWithoutUsersInput | bookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: bookingsUpdateManyWithWhereWithoutUsersInput | bookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
  }

  export type reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput> | reviewsCreateWithoutUsersInput[] | reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewsCreateOrConnectWithoutUsersInput | reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: reviewsUpsertWithWhereUniqueWithoutUsersInput | reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewsCreateManyUsersInputEnvelope
    set?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    disconnect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    delete?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    connect?: reviewsWhereUniqueInput | reviewsWhereUniqueInput[]
    update?: reviewsUpdateWithWhereUniqueWithoutUsersInput | reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewsUpdateManyWithWhereWithoutUsersInput | reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
  }

  export type wishlistUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput> | wishlistCreateWithoutUsersInput[] | wishlistUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: wishlistCreateOrConnectWithoutUsersInput | wishlistCreateOrConnectWithoutUsersInput[]
    upsert?: wishlistUpsertWithWhereUniqueWithoutUsersInput | wishlistUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: wishlistCreateManyUsersInputEnvelope
    set?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    disconnect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    delete?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    connect?: wishlistWhereUniqueInput | wishlistWhereUniqueInput[]
    update?: wishlistUpdateWithWhereUniqueWithoutUsersInput | wishlistUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: wishlistUpdateManyWithWhereWithoutUsersInput | wishlistUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
  }

  export type roomsCreateNestedOneWithoutWishlistInput = {
    create?: XOR<roomsCreateWithoutWishlistInput, roomsUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: roomsCreateOrConnectWithoutWishlistInput
    connect?: roomsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutWishlistInput = {
    create?: XOR<usersCreateWithoutWishlistInput, usersUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: usersCreateOrConnectWithoutWishlistInput
    connect?: usersWhereUniqueInput
  }

  export type roomsUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<roomsCreateWithoutWishlistInput, roomsUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: roomsCreateOrConnectWithoutWishlistInput
    upsert?: roomsUpsertWithoutWishlistInput
    connect?: roomsWhereUniqueInput
    update?: XOR<XOR<roomsUpdateToOneWithWhereWithoutWishlistInput, roomsUpdateWithoutWishlistInput>, roomsUncheckedUpdateWithoutWishlistInput>
  }

  export type usersUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: XOR<usersCreateWithoutWishlistInput, usersUncheckedCreateWithoutWishlistInput>
    connectOrCreate?: usersCreateOrConnectWithoutWishlistInput
    upsert?: usersUpsertWithoutWishlistInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWishlistInput, usersUpdateWithoutWishlistInput>, usersUncheckedUpdateWithoutWishlistInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type roomsCreateWithoutBookingsInput = {
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    reviews?: reviewsCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutBookingsInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    reviews?: reviewsUncheckedCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesUncheckedCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutBookingsInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutBookingsInput, roomsUncheckedCreateWithoutBookingsInput>
  }

  export type usersCreateWithoutBookingsInput = {
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    reviews?: reviewsCreateNestedManyWithoutUsersInput
    wishlist?: wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBookingsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutBookingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
  }

  export type roomsUpsertWithoutBookingsInput = {
    update: XOR<roomsUpdateWithoutBookingsInput, roomsUncheckedUpdateWithoutBookingsInput>
    create: XOR<roomsCreateWithoutBookingsInput, roomsUncheckedCreateWithoutBookingsInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutBookingsInput, roomsUncheckedUpdateWithoutBookingsInput>
  }

  export type roomsUpdateWithoutBookingsInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: reviewsUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutBookingsInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: reviewsUncheckedUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUncheckedUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type usersUpsertWithoutBookingsInput = {
    update: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
    create: XOR<usersCreateWithoutBookingsInput, usersUncheckedCreateWithoutBookingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBookingsInput, usersUncheckedUpdateWithoutBookingsInput>
  }

  export type usersUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBookingsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type room_conveniencesCreateWithoutConveniencesInput = {
    rooms: roomsCreateNestedOneWithoutRoom_conveniencesInput
  }

  export type room_conveniencesUncheckedCreateWithoutConveniencesInput = {
    room_id: number
  }

  export type room_conveniencesCreateOrConnectWithoutConveniencesInput = {
    where: room_conveniencesWhereUniqueInput
    create: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput>
  }

  export type room_conveniencesCreateManyConveniencesInputEnvelope = {
    data: room_conveniencesCreateManyConveniencesInput | room_conveniencesCreateManyConveniencesInput[]
    skipDuplicates?: boolean
  }

  export type room_conveniencesUpsertWithWhereUniqueWithoutConveniencesInput = {
    where: room_conveniencesWhereUniqueInput
    update: XOR<room_conveniencesUpdateWithoutConveniencesInput, room_conveniencesUncheckedUpdateWithoutConveniencesInput>
    create: XOR<room_conveniencesCreateWithoutConveniencesInput, room_conveniencesUncheckedCreateWithoutConveniencesInput>
  }

  export type room_conveniencesUpdateWithWhereUniqueWithoutConveniencesInput = {
    where: room_conveniencesWhereUniqueInput
    data: XOR<room_conveniencesUpdateWithoutConveniencesInput, room_conveniencesUncheckedUpdateWithoutConveniencesInput>
  }

  export type room_conveniencesUpdateManyWithWhereWithoutConveniencesInput = {
    where: room_conveniencesScalarWhereInput
    data: XOR<room_conveniencesUpdateManyMutationInput, room_conveniencesUncheckedUpdateManyWithoutConveniencesInput>
  }

  export type room_conveniencesScalarWhereInput = {
    AND?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
    OR?: room_conveniencesScalarWhereInput[]
    NOT?: room_conveniencesScalarWhereInput | room_conveniencesScalarWhereInput[]
    room_id?: IntFilter<"room_conveniences"> | number
    convenience_id?: IntFilter<"room_conveniences"> | number
  }

  export type roomsCreateWithoutReviewsInput = {
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutReviewsInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesUncheckedCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutReviewsInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutReviewsInput, roomsUncheckedCreateWithoutReviewsInput>
  }

  export type usersCreateWithoutReviewsInput = {
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    wishlist?: wishlistCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
  }

  export type roomsUpsertWithoutReviewsInput = {
    update: XOR<roomsUpdateWithoutReviewsInput, roomsUncheckedUpdateWithoutReviewsInput>
    create: XOR<roomsCreateWithoutReviewsInput, roomsUncheckedCreateWithoutReviewsInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutReviewsInput, roomsUncheckedUpdateWithoutReviewsInput>
  }

  export type roomsUpdateWithoutReviewsInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutReviewsInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUncheckedUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type usersUpsertWithoutReviewsInput = {
    update: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
    create: XOR<usersCreateWithoutReviewsInput, usersUncheckedCreateWithoutReviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewsInput, usersUncheckedUpdateWithoutReviewsInput>
  }

  export type usersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type conveniencesCreateWithoutRoom_conveniencesInput = {
    name: string
  }

  export type conveniencesUncheckedCreateWithoutRoom_conveniencesInput = {
    convenience_id?: number
    name: string
  }

  export type conveniencesCreateOrConnectWithoutRoom_conveniencesInput = {
    where: conveniencesWhereUniqueInput
    create: XOR<conveniencesCreateWithoutRoom_conveniencesInput, conveniencesUncheckedCreateWithoutRoom_conveniencesInput>
  }

  export type roomsCreateWithoutRoom_conveniencesInput = {
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsCreateNestedManyWithoutRoomsInput
    reviews?: reviewsCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutRoom_conveniencesInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutRoomsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutRoomsInput
    wishlist?: wishlistUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutRoom_conveniencesInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutRoom_conveniencesInput, roomsUncheckedCreateWithoutRoom_conveniencesInput>
  }

  export type conveniencesUpsertWithoutRoom_conveniencesInput = {
    update: XOR<conveniencesUpdateWithoutRoom_conveniencesInput, conveniencesUncheckedUpdateWithoutRoom_conveniencesInput>
    create: XOR<conveniencesCreateWithoutRoom_conveniencesInput, conveniencesUncheckedCreateWithoutRoom_conveniencesInput>
    where?: conveniencesWhereInput
  }

  export type conveniencesUpdateToOneWithWhereWithoutRoom_conveniencesInput = {
    where?: conveniencesWhereInput
    data: XOR<conveniencesUpdateWithoutRoom_conveniencesInput, conveniencesUncheckedUpdateWithoutRoom_conveniencesInput>
  }

  export type conveniencesUpdateWithoutRoom_conveniencesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type conveniencesUncheckedUpdateWithoutRoom_conveniencesInput = {
    convenience_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type roomsUpsertWithoutRoom_conveniencesInput = {
    update: XOR<roomsUpdateWithoutRoom_conveniencesInput, roomsUncheckedUpdateWithoutRoom_conveniencesInput>
    create: XOR<roomsCreateWithoutRoom_conveniencesInput, roomsUncheckedCreateWithoutRoom_conveniencesInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutRoom_conveniencesInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutRoom_conveniencesInput, roomsUncheckedUpdateWithoutRoom_conveniencesInput>
  }

  export type roomsUpdateWithoutRoom_conveniencesInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutRoom_conveniencesInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutRoomsNestedInput
    wishlist?: wishlistUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type bookingsCreateWithoutRoomsInput = {
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    users?: usersCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutRoomsInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    user_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsCreateOrConnectWithoutRoomsInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput>
  }

  export type bookingsCreateManyRoomsInputEnvelope = {
    data: bookingsCreateManyRoomsInput | bookingsCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutRoomsInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutRoomsInput = {
    review_id?: number
    user_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutRoomsInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput>
  }

  export type reviewsCreateManyRoomsInputEnvelope = {
    data: reviewsCreateManyRoomsInput | reviewsCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type room_conveniencesCreateWithoutRoomsInput = {
    conveniences: conveniencesCreateNestedOneWithoutRoom_conveniencesInput
  }

  export type room_conveniencesUncheckedCreateWithoutRoomsInput = {
    convenience_id: number
  }

  export type room_conveniencesCreateOrConnectWithoutRoomsInput = {
    where: room_conveniencesWhereUniqueInput
    create: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput>
  }

  export type room_conveniencesCreateManyRoomsInputEnvelope = {
    data: room_conveniencesCreateManyRoomsInput | room_conveniencesCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type wishlistCreateWithoutRoomsInput = {
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateWithoutRoomsInput = {
    wishlist_id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type wishlistCreateOrConnectWithoutRoomsInput = {
    where: wishlistWhereUniqueInput
    create: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput>
  }

  export type wishlistCreateManyRoomsInputEnvelope = {
    data: wishlistCreateManyRoomsInput | wishlistCreateManyRoomsInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutRoomsInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutRoomsInput, bookingsUncheckedUpdateWithoutRoomsInput>
    create: XOR<bookingsCreateWithoutRoomsInput, bookingsUncheckedCreateWithoutRoomsInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutRoomsInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutRoomsInput, bookingsUncheckedUpdateWithoutRoomsInput>
  }

  export type bookingsUpdateManyWithWhereWithoutRoomsInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutRoomsInput>
  }

  export type bookingsScalarWhereInput = {
    AND?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    OR?: bookingsScalarWhereInput[]
    NOT?: bookingsScalarWhereInput | bookingsScalarWhereInput[]
    booking_id?: IntFilter<"bookings"> | number
    status?: StringFilter<"bookings"> | string
    check_in?: DateTimeFilter<"bookings"> | Date | string
    check_out?: DateTimeFilter<"bookings"> | Date | string
    created_at?: DateTimeNullableFilter<"bookings"> | Date | string | null
    user_id?: IntNullableFilter<"bookings"> | number | null
    room_id?: IntNullableFilter<"bookings"> | number | null
    total_cost?: DecimalNullableFilter<"bookings"> | Decimal | DecimalJsLike | number | string | null
  }

  export type reviewsUpsertWithWhereUniqueWithoutRoomsInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutRoomsInput, reviewsUncheckedUpdateWithoutRoomsInput>
    create: XOR<reviewsCreateWithoutRoomsInput, reviewsUncheckedCreateWithoutRoomsInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutRoomsInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutRoomsInput, reviewsUncheckedUpdateWithoutRoomsInput>
  }

  export type reviewsUpdateManyWithWhereWithoutRoomsInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutRoomsInput>
  }

  export type reviewsScalarWhereInput = {
    AND?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    OR?: reviewsScalarWhereInput[]
    NOT?: reviewsScalarWhereInput | reviewsScalarWhereInput[]
    review_id?: IntFilter<"reviews"> | number
    user_id?: IntNullableFilter<"reviews"> | number | null
    room_id?: IntNullableFilter<"reviews"> | number | null
    rating?: IntNullableFilter<"reviews"> | number | null
    comment?: StringNullableFilter<"reviews"> | string | null
    created_at?: DateTimeNullableFilter<"reviews"> | Date | string | null
  }

  export type room_conveniencesUpsertWithWhereUniqueWithoutRoomsInput = {
    where: room_conveniencesWhereUniqueInput
    update: XOR<room_conveniencesUpdateWithoutRoomsInput, room_conveniencesUncheckedUpdateWithoutRoomsInput>
    create: XOR<room_conveniencesCreateWithoutRoomsInput, room_conveniencesUncheckedCreateWithoutRoomsInput>
  }

  export type room_conveniencesUpdateWithWhereUniqueWithoutRoomsInput = {
    where: room_conveniencesWhereUniqueInput
    data: XOR<room_conveniencesUpdateWithoutRoomsInput, room_conveniencesUncheckedUpdateWithoutRoomsInput>
  }

  export type room_conveniencesUpdateManyWithWhereWithoutRoomsInput = {
    where: room_conveniencesScalarWhereInput
    data: XOR<room_conveniencesUpdateManyMutationInput, room_conveniencesUncheckedUpdateManyWithoutRoomsInput>
  }

  export type wishlistUpsertWithWhereUniqueWithoutRoomsInput = {
    where: wishlistWhereUniqueInput
    update: XOR<wishlistUpdateWithoutRoomsInput, wishlistUncheckedUpdateWithoutRoomsInput>
    create: XOR<wishlistCreateWithoutRoomsInput, wishlistUncheckedCreateWithoutRoomsInput>
  }

  export type wishlistUpdateWithWhereUniqueWithoutRoomsInput = {
    where: wishlistWhereUniqueInput
    data: XOR<wishlistUpdateWithoutRoomsInput, wishlistUncheckedUpdateWithoutRoomsInput>
  }

  export type wishlistUpdateManyWithWhereWithoutRoomsInput = {
    where: wishlistScalarWhereInput
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyWithoutRoomsInput>
  }

  export type wishlistScalarWhereInput = {
    AND?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
    OR?: wishlistScalarWhereInput[]
    NOT?: wishlistScalarWhereInput | wishlistScalarWhereInput[]
    wishlist_id?: IntFilter<"wishlist"> | number
    user_id?: IntFilter<"wishlist"> | number
    room_id?: IntFilter<"wishlist"> | number
    created_at?: DateTimeNullableFilter<"wishlist"> | Date | string | null
  }

  export type bookingsCreateWithoutUsersInput = {
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    rooms?: roomsCreateNestedOneWithoutBookingsInput
  }

  export type bookingsUncheckedCreateWithoutUsersInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    room_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsCreateOrConnectWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsCreateManyUsersInputEnvelope = {
    data: bookingsCreateManyUsersInput | bookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewsCreateWithoutUsersInput = {
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
    rooms?: roomsCreateNestedOneWithoutReviewsInput
  }

  export type reviewsUncheckedCreateWithoutUsersInput = {
    review_id?: number
    room_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type reviewsCreateOrConnectWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsCreateManyUsersInputEnvelope = {
    data: reviewsCreateManyUsersInput | reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type wishlistCreateWithoutUsersInput = {
    created_at?: Date | string | null
    rooms: roomsCreateNestedOneWithoutWishlistInput
  }

  export type wishlistUncheckedCreateWithoutUsersInput = {
    wishlist_id?: number
    room_id: number
    created_at?: Date | string | null
  }

  export type wishlistCreateOrConnectWithoutUsersInput = {
    where: wishlistWhereUniqueInput
    create: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput>
  }

  export type wishlistCreateManyUsersInputEnvelope = {
    data: wishlistCreateManyUsersInput | wishlistCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    update: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<bookingsCreateWithoutUsersInput, bookingsUncheckedCreateWithoutUsersInput>
  }

  export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: bookingsWhereUniqueInput
    data: XOR<bookingsUpdateWithoutUsersInput, bookingsUncheckedUpdateWithoutUsersInput>
  }

  export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: bookingsScalarWhereInput
    data: XOR<bookingsUpdateManyMutationInput, bookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    update: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewsCreateWithoutUsersInput, reviewsUncheckedCreateWithoutUsersInput>
  }

  export type reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewsWhereUniqueInput
    data: XOR<reviewsUpdateWithoutUsersInput, reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: reviewsScalarWhereInput
    data: XOR<reviewsUpdateManyMutationInput, reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type wishlistUpsertWithWhereUniqueWithoutUsersInput = {
    where: wishlistWhereUniqueInput
    update: XOR<wishlistUpdateWithoutUsersInput, wishlistUncheckedUpdateWithoutUsersInput>
    create: XOR<wishlistCreateWithoutUsersInput, wishlistUncheckedCreateWithoutUsersInput>
  }

  export type wishlistUpdateWithWhereUniqueWithoutUsersInput = {
    where: wishlistWhereUniqueInput
    data: XOR<wishlistUpdateWithoutUsersInput, wishlistUncheckedUpdateWithoutUsersInput>
  }

  export type wishlistUpdateManyWithWhereWithoutUsersInput = {
    where: wishlistScalarWhereInput
    data: XOR<wishlistUpdateManyMutationInput, wishlistUncheckedUpdateManyWithoutUsersInput>
  }

  export type roomsCreateWithoutWishlistInput = {
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsCreateNestedManyWithoutRoomsInput
    reviews?: reviewsCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesCreateNestedManyWithoutRoomsInput
  }

  export type roomsUncheckedCreateWithoutWishlistInput = {
    room_id?: number
    room_count?: number | null
    type?: string | null
    price_per_night: Decimal | DecimalJsLike | number | string
    capacity: number
    description?: string | null
    image?: string | null
    title?: string | null
    bookings?: bookingsUncheckedCreateNestedManyWithoutRoomsInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutRoomsInput
    room_conveniences?: room_conveniencesUncheckedCreateNestedManyWithoutRoomsInput
  }

  export type roomsCreateOrConnectWithoutWishlistInput = {
    where: roomsWhereUniqueInput
    create: XOR<roomsCreateWithoutWishlistInput, roomsUncheckedCreateWithoutWishlistInput>
  }

  export type usersCreateWithoutWishlistInput = {
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsCreateNestedManyWithoutUsersInput
    reviews?: reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWishlistInput = {
    user_id?: number
    name: string
    email: string
    password_hash: string
    phone?: string | null
    created_at?: Date | string | null
    role?: string
    bookings?: bookingsUncheckedCreateNestedManyWithoutUsersInput
    reviews?: reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWishlistInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWishlistInput, usersUncheckedCreateWithoutWishlistInput>
  }

  export type roomsUpsertWithoutWishlistInput = {
    update: XOR<roomsUpdateWithoutWishlistInput, roomsUncheckedUpdateWithoutWishlistInput>
    create: XOR<roomsCreateWithoutWishlistInput, roomsUncheckedCreateWithoutWishlistInput>
    where?: roomsWhereInput
  }

  export type roomsUpdateToOneWithWhereWithoutWishlistInput = {
    where?: roomsWhereInput
    data: XOR<roomsUpdateWithoutWishlistInput, roomsUncheckedUpdateWithoutWishlistInput>
  }

  export type roomsUpdateWithoutWishlistInput = {
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUpdateManyWithoutRoomsNestedInput
  }

  export type roomsUncheckedUpdateWithoutWishlistInput = {
    room_id?: IntFieldUpdateOperationsInput | number
    room_count?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    price_per_night?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    bookings?: bookingsUncheckedUpdateManyWithoutRoomsNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutRoomsNestedInput
    room_conveniences?: room_conveniencesUncheckedUpdateManyWithoutRoomsNestedInput
  }

  export type usersUpsertWithoutWishlistInput = {
    update: XOR<usersUpdateWithoutWishlistInput, usersUncheckedUpdateWithoutWishlistInput>
    create: XOR<usersCreateWithoutWishlistInput, usersUncheckedCreateWithoutWishlistInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWishlistInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWishlistInput, usersUncheckedUpdateWithoutWishlistInput>
  }

  export type usersUpdateWithoutWishlistInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWishlistInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    bookings?: bookingsUncheckedUpdateManyWithoutUsersNestedInput
    reviews?: reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type room_conveniencesCreateManyConveniencesInput = {
    room_id: number
  }

  export type room_conveniencesUpdateWithoutConveniencesInput = {
    rooms?: roomsUpdateOneRequiredWithoutRoom_conveniencesNestedInput
  }

  export type room_conveniencesUncheckedUpdateWithoutConveniencesInput = {
    room_id?: IntFieldUpdateOperationsInput | number
  }

  export type room_conveniencesUncheckedUpdateManyWithoutConveniencesInput = {
    room_id?: IntFieldUpdateOperationsInput | number
  }

  export type bookingsCreateManyRoomsInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    user_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type reviewsCreateManyRoomsInput = {
    review_id?: number
    user_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type room_conveniencesCreateManyRoomsInput = {
    convenience_id: number
  }

  export type wishlistCreateManyRoomsInput = {
    wishlist_id?: number
    user_id: number
    created_at?: Date | string | null
  }

  export type bookingsUpdateWithoutRoomsInput = {
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    users?: usersUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutRoomsInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutRoomsInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type reviewsUpdateWithoutRoomsInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutRoomsInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutRoomsInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type room_conveniencesUpdateWithoutRoomsInput = {
    conveniences?: conveniencesUpdateOneRequiredWithoutRoom_conveniencesNestedInput
  }

  export type room_conveniencesUncheckedUpdateWithoutRoomsInput = {
    convenience_id?: IntFieldUpdateOperationsInput | number
  }

  export type room_conveniencesUncheckedUpdateManyWithoutRoomsInput = {
    convenience_id?: IntFieldUpdateOperationsInput | number
  }

  export type wishlistUpdateWithoutRoomsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateWithoutRoomsInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyWithoutRoomsInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bookingsCreateManyUsersInput = {
    booking_id?: number
    status?: string
    check_in: Date | string
    check_out: Date | string
    created_at?: Date | string | null
    room_id?: number | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
  }

  export type reviewsCreateManyUsersInput = {
    review_id?: number
    room_id?: number | null
    rating?: number | null
    comment?: string | null
    created_at?: Date | string | null
  }

  export type wishlistCreateManyUsersInput = {
    wishlist_id?: number
    room_id: number
    created_at?: Date | string | null
  }

  export type bookingsUpdateWithoutUsersInput = {
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rooms?: roomsUpdateOneWithoutBookingsNestedInput
  }

  export type bookingsUncheckedUpdateWithoutUsersInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type reviewsUpdateWithoutUsersInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneWithoutReviewsNestedInput
  }

  export type reviewsUncheckedUpdateWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    room_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rooms?: roomsUpdateOneRequiredWithoutWishlistNestedInput
  }

  export type wishlistUncheckedUpdateWithoutUsersInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type wishlistUncheckedUpdateManyWithoutUsersInput = {
    wishlist_id?: IntFieldUpdateOperationsInput | number
    room_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}