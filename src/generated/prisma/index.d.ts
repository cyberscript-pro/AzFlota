
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chofer
 * 
 */
export type Chofer = $Result.DefaultSelection<Prisma.$ChoferPayload>
/**
 * Model AreaTrabajo
 * 
 */
export type AreaTrabajo = $Result.DefaultSelection<Prisma.$AreaTrabajoPayload>
/**
 * Model TarjetaCombustible
 * 
 */
export type TarjetaCombustible = $Result.DefaultSelection<Prisma.$TarjetaCombustiblePayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const State: {
  Active: 'Active',
  Inactive: 'Inactive',
  Blocked: 'Blocked',
  Expired: 'Expired'
};

export type State = (typeof State)[keyof typeof State]


export const Role: {
  DIRECTOR: 'DIRECTOR',
  SUPERVISOR: 'SUPERVISOR',
  ECONOMICO: 'ECONOMICO',
  ENCARGADO: 'ENCARGADO'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type State = $Enums.State

export const State: typeof $Enums.State

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chofer`: Exposes CRUD operations for the **Chofer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chofers
    * const chofers = await prisma.chofer.findMany()
    * ```
    */
  get chofer(): Prisma.ChoferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.areaTrabajo`: Exposes CRUD operations for the **AreaTrabajo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AreaTrabajos
    * const areaTrabajos = await prisma.areaTrabajo.findMany()
    * ```
    */
  get areaTrabajo(): Prisma.AreaTrabajoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarjetaCombustible`: Exposes CRUD operations for the **TarjetaCombustible** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TarjetaCombustibles
    * const tarjetaCombustibles = await prisma.tarjetaCombustible.findMany()
    * ```
    */
  get tarjetaCombustible(): Prisma.TarjetaCombustibleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Chofer: 'Chofer',
    AreaTrabajo: 'AreaTrabajo',
    TarjetaCombustible: 'TarjetaCombustible',
    Vehiculo: 'Vehiculo'
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
      modelProps: "user" | "chofer" | "areaTrabajo" | "tarjetaCombustible" | "vehiculo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chofer: {
        payload: Prisma.$ChoferPayload<ExtArgs>
        fields: Prisma.ChoferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findFirst: {
            args: Prisma.ChoferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          findMany: {
            args: Prisma.ChoferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>[]
          }
          create: {
            args: Prisma.ChoferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          createMany: {
            args: Prisma.ChoferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChoferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          update: {
            args: Prisma.ChoferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          deleteMany: {
            args: Prisma.ChoferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferPayload>
          }
          aggregate: {
            args: Prisma.ChoferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChofer>
          }
          groupBy: {
            args: Prisma.ChoferGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoferGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoferCountArgs<ExtArgs>
            result: $Utils.Optional<ChoferCountAggregateOutputType> | number
          }
        }
      }
      AreaTrabajo: {
        payload: Prisma.$AreaTrabajoPayload<ExtArgs>
        fields: Prisma.AreaTrabajoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaTrabajoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaTrabajoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          findFirst: {
            args: Prisma.AreaTrabajoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaTrabajoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          findMany: {
            args: Prisma.AreaTrabajoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>[]
          }
          create: {
            args: Prisma.AreaTrabajoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          createMany: {
            args: Prisma.AreaTrabajoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaTrabajoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          update: {
            args: Prisma.AreaTrabajoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          deleteMany: {
            args: Prisma.AreaTrabajoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaTrabajoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaTrabajoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaTrabajoPayload>
          }
          aggregate: {
            args: Prisma.AreaTrabajoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAreaTrabajo>
          }
          groupBy: {
            args: Prisma.AreaTrabajoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaTrabajoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaTrabajoCountArgs<ExtArgs>
            result: $Utils.Optional<AreaTrabajoCountAggregateOutputType> | number
          }
        }
      }
      TarjetaCombustible: {
        payload: Prisma.$TarjetaCombustiblePayload<ExtArgs>
        fields: Prisma.TarjetaCombustibleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarjetaCombustibleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarjetaCombustibleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          findFirst: {
            args: Prisma.TarjetaCombustibleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarjetaCombustibleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          findMany: {
            args: Prisma.TarjetaCombustibleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>[]
          }
          create: {
            args: Prisma.TarjetaCombustibleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          createMany: {
            args: Prisma.TarjetaCombustibleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TarjetaCombustibleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          update: {
            args: Prisma.TarjetaCombustibleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          deleteMany: {
            args: Prisma.TarjetaCombustibleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarjetaCombustibleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TarjetaCombustibleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustiblePayload>
          }
          aggregate: {
            args: Prisma.TarjetaCombustibleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarjetaCombustible>
          }
          groupBy: {
            args: Prisma.TarjetaCombustibleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarjetaCombustibleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarjetaCombustibleCountArgs<ExtArgs>
            result: $Utils.Optional<TarjetaCombustibleCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
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
    user?: UserOmit
    chofer?: ChoferOmit
    areaTrabajo?: AreaTrabajoOmit
    tarjetaCombustible?: TarjetaCombustibleOmit
    vehiculo?: VehiculoOmit
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
   * Count Type ChoferCountOutputType
   */

  export type ChoferCountOutputType = {
    vehiculos: number
  }

  export type ChoferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | ChoferCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferCountOutputType
     */
    select?: ChoferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoferCountOutputType without action
   */
  export type ChoferCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
  }


  /**
   * Count Type AreaTrabajoCountOutputType
   */

  export type AreaTrabajoCountOutputType = {
    vehiculos: number
  }

  export type AreaTrabajoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | AreaTrabajoCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * AreaTrabajoCountOutputType without action
   */
  export type AreaTrabajoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajoCountOutputType
     */
    select?: AreaTrabajoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaTrabajoCountOutputType without action
   */
  export type AreaTrabajoCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    nickname: string | null
    nombre: string | null
    ci: string | null
    password: string | null
    role: $Enums.Role | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    nickname: string | null
    nombre: string | null
    ci: string | null
    password: string | null
    role: $Enums.Role | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    nickname: number
    nombre: number
    ci: number
    password: number
    role: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    nickname?: true
    nombre?: true
    ci?: true
    password?: true
    role?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    nickname?: true
    nombre?: true
    ci?: true
    password?: true
    role?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    nickname?: true
    nombre?: true
    ci?: true
    password?: true
    role?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    nickname: string
    nombre: string
    ci: string
    password: string
    role: $Enums.Role
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nickname?: boolean
    nombre?: boolean
    ci?: boolean
    password?: boolean
    role?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    nickname?: boolean
    nombre?: boolean
    ci?: boolean
    password?: boolean
    role?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nickname" | "nombre" | "ci" | "password" | "role" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      nickname: string
      nombre: string
      ci: string
      password: string
      role: $Enums.Role
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `nickname`
     * const userWithNicknameOnly = await prisma.user.findMany({ select: { nickname: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly nickname: FieldRef<"User", 'String'>
    readonly nombre: FieldRef<"User", 'String'>
    readonly ci: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isAvailable: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Chofer
   */

  export type AggregateChofer = {
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  export type ChoferAvgAggregateOutputType = {
    edad: number | null
  }

  export type ChoferSumAggregateOutputType = {
    edad: number | null
  }

  export type ChoferMinAggregateOutputType = {
    nombre: string | null
    edad: number | null
    sexo: string | null
    ci: string | null
    licencia: string | null
    telefono: string | null
    isAvailable: boolean | null
  }

  export type ChoferMaxAggregateOutputType = {
    nombre: string | null
    edad: number | null
    sexo: string | null
    ci: string | null
    licencia: string | null
    telefono: string | null
    isAvailable: boolean | null
  }

  export type ChoferCountAggregateOutputType = {
    nombre: number
    edad: number
    sexo: number
    ci: number
    licencia: number
    telefono: number
    isAvailable: number
    _all: number
  }


  export type ChoferAvgAggregateInputType = {
    edad?: true
  }

  export type ChoferSumAggregateInputType = {
    edad?: true
  }

  export type ChoferMinAggregateInputType = {
    nombre?: true
    edad?: true
    sexo?: true
    ci?: true
    licencia?: true
    telefono?: true
    isAvailable?: true
  }

  export type ChoferMaxAggregateInputType = {
    nombre?: true
    edad?: true
    sexo?: true
    ci?: true
    licencia?: true
    telefono?: true
    isAvailable?: true
  }

  export type ChoferCountAggregateInputType = {
    nombre?: true
    edad?: true
    sexo?: true
    ci?: true
    licencia?: true
    telefono?: true
    isAvailable?: true
    _all?: true
  }

  export type ChoferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofer to aggregate.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chofers
    **/
    _count?: true | ChoferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoferMaxAggregateInputType
  }

  export type GetChoferAggregateType<T extends ChoferAggregateArgs> = {
        [P in keyof T & keyof AggregateChofer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChofer[P]>
      : GetScalarType<T[P], AggregateChofer[P]>
  }




  export type ChoferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoferWhereInput
    orderBy?: ChoferOrderByWithAggregationInput | ChoferOrderByWithAggregationInput[]
    by: ChoferScalarFieldEnum[] | ChoferScalarFieldEnum
    having?: ChoferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoferCountAggregateInputType | true
    _avg?: ChoferAvgAggregateInputType
    _sum?: ChoferSumAggregateInputType
    _min?: ChoferMinAggregateInputType
    _max?: ChoferMaxAggregateInputType
  }

  export type ChoferGroupByOutputType = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable: boolean
    _count: ChoferCountAggregateOutputType | null
    _avg: ChoferAvgAggregateOutputType | null
    _sum: ChoferSumAggregateOutputType | null
    _min: ChoferMinAggregateOutputType | null
    _max: ChoferMaxAggregateOutputType | null
  }

  type GetChoferGroupByPayload<T extends ChoferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoferGroupByOutputType[P]>
            : GetScalarType<T[P], ChoferGroupByOutputType[P]>
        }
      >
    >


  export type ChoferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nombre?: boolean
    edad?: boolean
    sexo?: boolean
    ci?: boolean
    licencia?: boolean
    telefono?: boolean
    isAvailable?: boolean
    vehiculos?: boolean | Chofer$vehiculosArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chofer"]>



  export type ChoferSelectScalar = {
    nombre?: boolean
    edad?: boolean
    sexo?: boolean
    ci?: boolean
    licencia?: boolean
    telefono?: boolean
    isAvailable?: boolean
  }

  export type ChoferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nombre" | "edad" | "sexo" | "ci" | "licencia" | "telefono" | "isAvailable", ExtArgs["result"]["chofer"]>
  export type ChoferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | Chofer$vehiculosArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChoferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chofer"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nombre: string
      edad: number
      sexo: string
      ci: string
      licencia: string
      telefono: string
      isAvailable: boolean
    }, ExtArgs["result"]["chofer"]>
    composites: {}
  }

  type ChoferGetPayload<S extends boolean | null | undefined | ChoferDefaultArgs> = $Result.GetResult<Prisma.$ChoferPayload, S>

  type ChoferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoferCountAggregateInputType | true
    }

  export interface ChoferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chofer'], meta: { name: 'Chofer' } }
    /**
     * Find zero or one Chofer that matches the filter.
     * @param {ChoferFindUniqueArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoferFindUniqueArgs>(args: SelectSubset<T, ChoferFindUniqueArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chofer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoferFindUniqueOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoferFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoferFindFirstArgs>(args?: SelectSubset<T, ChoferFindFirstArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chofer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindFirstOrThrowArgs} args - Arguments to find a Chofer
     * @example
     * // Get one Chofer
     * const chofer = await prisma.chofer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoferFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoferFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chofers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chofers
     * const chofers = await prisma.chofer.findMany()
     * 
     * // Get first 10 Chofers
     * const chofers = await prisma.chofer.findMany({ take: 10 })
     * 
     * // Only select the `nombre`
     * const choferWithNombreOnly = await prisma.chofer.findMany({ select: { nombre: true } })
     * 
     */
    findMany<T extends ChoferFindManyArgs>(args?: SelectSubset<T, ChoferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chofer.
     * @param {ChoferCreateArgs} args - Arguments to create a Chofer.
     * @example
     * // Create one Chofer
     * const Chofer = await prisma.chofer.create({
     *   data: {
     *     // ... data to create a Chofer
     *   }
     * })
     * 
     */
    create<T extends ChoferCreateArgs>(args: SelectSubset<T, ChoferCreateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chofers.
     * @param {ChoferCreateManyArgs} args - Arguments to create many Chofers.
     * @example
     * // Create many Chofers
     * const chofer = await prisma.chofer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoferCreateManyArgs>(args?: SelectSubset<T, ChoferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chofer.
     * @param {ChoferDeleteArgs} args - Arguments to delete one Chofer.
     * @example
     * // Delete one Chofer
     * const Chofer = await prisma.chofer.delete({
     *   where: {
     *     // ... filter to delete one Chofer
     *   }
     * })
     * 
     */
    delete<T extends ChoferDeleteArgs>(args: SelectSubset<T, ChoferDeleteArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chofer.
     * @param {ChoferUpdateArgs} args - Arguments to update one Chofer.
     * @example
     * // Update one Chofer
     * const chofer = await prisma.chofer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoferUpdateArgs>(args: SelectSubset<T, ChoferUpdateArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chofers.
     * @param {ChoferDeleteManyArgs} args - Arguments to filter Chofers to delete.
     * @example
     * // Delete a few Chofers
     * const { count } = await prisma.chofer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoferDeleteManyArgs>(args?: SelectSubset<T, ChoferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chofers
     * const chofer = await prisma.chofer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoferUpdateManyArgs>(args: SelectSubset<T, ChoferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chofer.
     * @param {ChoferUpsertArgs} args - Arguments to update or create a Chofer.
     * @example
     * // Update or create a Chofer
     * const chofer = await prisma.chofer.upsert({
     *   create: {
     *     // ... data to create a Chofer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chofer we want to update
     *   }
     * })
     */
    upsert<T extends ChoferUpsertArgs>(args: SelectSubset<T, ChoferUpsertArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chofers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferCountArgs} args - Arguments to filter Chofers to count.
     * @example
     * // Count the number of Chofers
     * const count = await prisma.chofer.count({
     *   where: {
     *     // ... the filter for the Chofers we want to count
     *   }
     * })
    **/
    count<T extends ChoferCountArgs>(
      args?: Subset<T, ChoferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoferAggregateArgs>(args: Subset<T, ChoferAggregateArgs>): Prisma.PrismaPromise<GetChoferAggregateType<T>>

    /**
     * Group by Chofer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferGroupByArgs} args - Group by arguments.
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
      T extends ChoferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoferGroupByArgs['orderBy'] }
        : { orderBy?: ChoferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chofer model
   */
  readonly fields: ChoferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chofer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends Chofer$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, Chofer$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chofer model
   */
  interface ChoferFieldRefs {
    readonly nombre: FieldRef<"Chofer", 'String'>
    readonly edad: FieldRef<"Chofer", 'Int'>
    readonly sexo: FieldRef<"Chofer", 'String'>
    readonly ci: FieldRef<"Chofer", 'String'>
    readonly licencia: FieldRef<"Chofer", 'String'>
    readonly telefono: FieldRef<"Chofer", 'String'>
    readonly isAvailable: FieldRef<"Chofer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Chofer findUnique
   */
  export type ChoferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findUniqueOrThrow
   */
  export type ChoferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer findFirst
   */
  export type ChoferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findFirstOrThrow
   */
  export type ChoferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofer to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chofers.
     */
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer findMany
   */
  export type ChoferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter, which Chofers to fetch.
     */
    where?: ChoferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chofers to fetch.
     */
    orderBy?: ChoferOrderByWithRelationInput | ChoferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chofers.
     */
    cursor?: ChoferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chofers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chofers.
     */
    skip?: number
    distinct?: ChoferScalarFieldEnum | ChoferScalarFieldEnum[]
  }

  /**
   * Chofer create
   */
  export type ChoferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to create a Chofer.
     */
    data: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
  }

  /**
   * Chofer createMany
   */
  export type ChoferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chofers.
     */
    data: ChoferCreateManyInput | ChoferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chofer update
   */
  export type ChoferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The data needed to update a Chofer.
     */
    data: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
    /**
     * Choose, which Chofer to update.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer updateMany
   */
  export type ChoferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chofers.
     */
    data: XOR<ChoferUpdateManyMutationInput, ChoferUncheckedUpdateManyInput>
    /**
     * Filter which Chofers to update
     */
    where?: ChoferWhereInput
    /**
     * Limit how many Chofers to update.
     */
    limit?: number
  }

  /**
   * Chofer upsert
   */
  export type ChoferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * The filter to search for the Chofer to update in case it exists.
     */
    where: ChoferWhereUniqueInput
    /**
     * In case the Chofer found by the `where` argument doesn't exist, create a new Chofer with this data.
     */
    create: XOR<ChoferCreateInput, ChoferUncheckedCreateInput>
    /**
     * In case the Chofer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoferUpdateInput, ChoferUncheckedUpdateInput>
  }

  /**
   * Chofer delete
   */
  export type ChoferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    /**
     * Filter which Chofer to delete.
     */
    where: ChoferWhereUniqueInput
  }

  /**
   * Chofer deleteMany
   */
  export type ChoferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chofers to delete
     */
    where?: ChoferWhereInput
    /**
     * Limit how many Chofers to delete.
     */
    limit?: number
  }

  /**
   * Chofer.vehiculos
   */
  export type Chofer$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    cursor?: VehiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Chofer without action
   */
  export type ChoferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
  }


  /**
   * Model AreaTrabajo
   */

  export type AggregateAreaTrabajo = {
    _count: AreaTrabajoCountAggregateOutputType | null
    _min: AreaTrabajoMinAggregateOutputType | null
    _max: AreaTrabajoMaxAggregateOutputType | null
  }

  export type AreaTrabajoMinAggregateOutputType = {
    uuid: string | null
    nombre: string | null
    centro_costo: string | null
    jefe: string | null
    isAvailable: boolean | null
  }

  export type AreaTrabajoMaxAggregateOutputType = {
    uuid: string | null
    nombre: string | null
    centro_costo: string | null
    jefe: string | null
    isAvailable: boolean | null
  }

  export type AreaTrabajoCountAggregateOutputType = {
    uuid: number
    nombre: number
    centro_costo: number
    jefe: number
    isAvailable: number
    _all: number
  }


  export type AreaTrabajoMinAggregateInputType = {
    uuid?: true
    nombre?: true
    centro_costo?: true
    jefe?: true
    isAvailable?: true
  }

  export type AreaTrabajoMaxAggregateInputType = {
    uuid?: true
    nombre?: true
    centro_costo?: true
    jefe?: true
    isAvailable?: true
  }

  export type AreaTrabajoCountAggregateInputType = {
    uuid?: true
    nombre?: true
    centro_costo?: true
    jefe?: true
    isAvailable?: true
    _all?: true
  }

  export type AreaTrabajoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaTrabajo to aggregate.
     */
    where?: AreaTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTrabajos to fetch.
     */
    orderBy?: AreaTrabajoOrderByWithRelationInput | AreaTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AreaTrabajos
    **/
    _count?: true | AreaTrabajoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaTrabajoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaTrabajoMaxAggregateInputType
  }

  export type GetAreaTrabajoAggregateType<T extends AreaTrabajoAggregateArgs> = {
        [P in keyof T & keyof AggregateAreaTrabajo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAreaTrabajo[P]>
      : GetScalarType<T[P], AggregateAreaTrabajo[P]>
  }




  export type AreaTrabajoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaTrabajoWhereInput
    orderBy?: AreaTrabajoOrderByWithAggregationInput | AreaTrabajoOrderByWithAggregationInput[]
    by: AreaTrabajoScalarFieldEnum[] | AreaTrabajoScalarFieldEnum
    having?: AreaTrabajoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaTrabajoCountAggregateInputType | true
    _min?: AreaTrabajoMinAggregateInputType
    _max?: AreaTrabajoMaxAggregateInputType
  }

  export type AreaTrabajoGroupByOutputType = {
    uuid: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable: boolean
    _count: AreaTrabajoCountAggregateOutputType | null
    _min: AreaTrabajoMinAggregateOutputType | null
    _max: AreaTrabajoMaxAggregateOutputType | null
  }

  type GetAreaTrabajoGroupByPayload<T extends AreaTrabajoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaTrabajoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaTrabajoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaTrabajoGroupByOutputType[P]>
            : GetScalarType<T[P], AreaTrabajoGroupByOutputType[P]>
        }
      >
    >


  export type AreaTrabajoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    nombre?: boolean
    centro_costo?: boolean
    jefe?: boolean
    isAvailable?: boolean
    vehiculos?: boolean | AreaTrabajo$vehiculosArgs<ExtArgs>
    _count?: boolean | AreaTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["areaTrabajo"]>



  export type AreaTrabajoSelectScalar = {
    uuid?: boolean
    nombre?: boolean
    centro_costo?: boolean
    jefe?: boolean
    isAvailable?: boolean
  }

  export type AreaTrabajoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "nombre" | "centro_costo" | "jefe" | "isAvailable", ExtArgs["result"]["areaTrabajo"]>
  export type AreaTrabajoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | AreaTrabajo$vehiculosArgs<ExtArgs>
    _count?: boolean | AreaTrabajoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaTrabajoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AreaTrabajo"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      nombre: string
      centro_costo: string
      jefe: string
      isAvailable: boolean
    }, ExtArgs["result"]["areaTrabajo"]>
    composites: {}
  }

  type AreaTrabajoGetPayload<S extends boolean | null | undefined | AreaTrabajoDefaultArgs> = $Result.GetResult<Prisma.$AreaTrabajoPayload, S>

  type AreaTrabajoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaTrabajoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaTrabajoCountAggregateInputType | true
    }

  export interface AreaTrabajoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AreaTrabajo'], meta: { name: 'AreaTrabajo' } }
    /**
     * Find zero or one AreaTrabajo that matches the filter.
     * @param {AreaTrabajoFindUniqueArgs} args - Arguments to find a AreaTrabajo
     * @example
     * // Get one AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaTrabajoFindUniqueArgs>(args: SelectSubset<T, AreaTrabajoFindUniqueArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AreaTrabajo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaTrabajoFindUniqueOrThrowArgs} args - Arguments to find a AreaTrabajo
     * @example
     * // Get one AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaTrabajoFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaTrabajoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaTrabajo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoFindFirstArgs} args - Arguments to find a AreaTrabajo
     * @example
     * // Get one AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaTrabajoFindFirstArgs>(args?: SelectSubset<T, AreaTrabajoFindFirstArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AreaTrabajo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoFindFirstOrThrowArgs} args - Arguments to find a AreaTrabajo
     * @example
     * // Get one AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaTrabajoFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaTrabajoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AreaTrabajos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AreaTrabajos
     * const areaTrabajos = await prisma.areaTrabajo.findMany()
     * 
     * // Get first 10 AreaTrabajos
     * const areaTrabajos = await prisma.areaTrabajo.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const areaTrabajoWithUuidOnly = await prisma.areaTrabajo.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends AreaTrabajoFindManyArgs>(args?: SelectSubset<T, AreaTrabajoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AreaTrabajo.
     * @param {AreaTrabajoCreateArgs} args - Arguments to create a AreaTrabajo.
     * @example
     * // Create one AreaTrabajo
     * const AreaTrabajo = await prisma.areaTrabajo.create({
     *   data: {
     *     // ... data to create a AreaTrabajo
     *   }
     * })
     * 
     */
    create<T extends AreaTrabajoCreateArgs>(args: SelectSubset<T, AreaTrabajoCreateArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AreaTrabajos.
     * @param {AreaTrabajoCreateManyArgs} args - Arguments to create many AreaTrabajos.
     * @example
     * // Create many AreaTrabajos
     * const areaTrabajo = await prisma.areaTrabajo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaTrabajoCreateManyArgs>(args?: SelectSubset<T, AreaTrabajoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AreaTrabajo.
     * @param {AreaTrabajoDeleteArgs} args - Arguments to delete one AreaTrabajo.
     * @example
     * // Delete one AreaTrabajo
     * const AreaTrabajo = await prisma.areaTrabajo.delete({
     *   where: {
     *     // ... filter to delete one AreaTrabajo
     *   }
     * })
     * 
     */
    delete<T extends AreaTrabajoDeleteArgs>(args: SelectSubset<T, AreaTrabajoDeleteArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AreaTrabajo.
     * @param {AreaTrabajoUpdateArgs} args - Arguments to update one AreaTrabajo.
     * @example
     * // Update one AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaTrabajoUpdateArgs>(args: SelectSubset<T, AreaTrabajoUpdateArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AreaTrabajos.
     * @param {AreaTrabajoDeleteManyArgs} args - Arguments to filter AreaTrabajos to delete.
     * @example
     * // Delete a few AreaTrabajos
     * const { count } = await prisma.areaTrabajo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaTrabajoDeleteManyArgs>(args?: SelectSubset<T, AreaTrabajoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AreaTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AreaTrabajos
     * const areaTrabajo = await prisma.areaTrabajo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaTrabajoUpdateManyArgs>(args: SelectSubset<T, AreaTrabajoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AreaTrabajo.
     * @param {AreaTrabajoUpsertArgs} args - Arguments to update or create a AreaTrabajo.
     * @example
     * // Update or create a AreaTrabajo
     * const areaTrabajo = await prisma.areaTrabajo.upsert({
     *   create: {
     *     // ... data to create a AreaTrabajo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AreaTrabajo we want to update
     *   }
     * })
     */
    upsert<T extends AreaTrabajoUpsertArgs>(args: SelectSubset<T, AreaTrabajoUpsertArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AreaTrabajos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoCountArgs} args - Arguments to filter AreaTrabajos to count.
     * @example
     * // Count the number of AreaTrabajos
     * const count = await prisma.areaTrabajo.count({
     *   where: {
     *     // ... the filter for the AreaTrabajos we want to count
     *   }
     * })
    **/
    count<T extends AreaTrabajoCountArgs>(
      args?: Subset<T, AreaTrabajoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaTrabajoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AreaTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaTrabajoAggregateArgs>(args: Subset<T, AreaTrabajoAggregateArgs>): Prisma.PrismaPromise<GetAreaTrabajoAggregateType<T>>

    /**
     * Group by AreaTrabajo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaTrabajoGroupByArgs} args - Group by arguments.
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
      T extends AreaTrabajoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaTrabajoGroupByArgs['orderBy'] }
        : { orderBy?: AreaTrabajoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaTrabajoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaTrabajoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AreaTrabajo model
   */
  readonly fields: AreaTrabajoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AreaTrabajo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaTrabajoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends AreaTrabajo$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, AreaTrabajo$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AreaTrabajo model
   */
  interface AreaTrabajoFieldRefs {
    readonly uuid: FieldRef<"AreaTrabajo", 'String'>
    readonly nombre: FieldRef<"AreaTrabajo", 'String'>
    readonly centro_costo: FieldRef<"AreaTrabajo", 'String'>
    readonly jefe: FieldRef<"AreaTrabajo", 'String'>
    readonly isAvailable: FieldRef<"AreaTrabajo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AreaTrabajo findUnique
   */
  export type AreaTrabajoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which AreaTrabajo to fetch.
     */
    where: AreaTrabajoWhereUniqueInput
  }

  /**
   * AreaTrabajo findUniqueOrThrow
   */
  export type AreaTrabajoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which AreaTrabajo to fetch.
     */
    where: AreaTrabajoWhereUniqueInput
  }

  /**
   * AreaTrabajo findFirst
   */
  export type AreaTrabajoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which AreaTrabajo to fetch.
     */
    where?: AreaTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTrabajos to fetch.
     */
    orderBy?: AreaTrabajoOrderByWithRelationInput | AreaTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTrabajos.
     */
    cursor?: AreaTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTrabajos.
     */
    distinct?: AreaTrabajoScalarFieldEnum | AreaTrabajoScalarFieldEnum[]
  }

  /**
   * AreaTrabajo findFirstOrThrow
   */
  export type AreaTrabajoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which AreaTrabajo to fetch.
     */
    where?: AreaTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTrabajos to fetch.
     */
    orderBy?: AreaTrabajoOrderByWithRelationInput | AreaTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AreaTrabajos.
     */
    cursor?: AreaTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTrabajos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AreaTrabajos.
     */
    distinct?: AreaTrabajoScalarFieldEnum | AreaTrabajoScalarFieldEnum[]
  }

  /**
   * AreaTrabajo findMany
   */
  export type AreaTrabajoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter, which AreaTrabajos to fetch.
     */
    where?: AreaTrabajoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AreaTrabajos to fetch.
     */
    orderBy?: AreaTrabajoOrderByWithRelationInput | AreaTrabajoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AreaTrabajos.
     */
    cursor?: AreaTrabajoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AreaTrabajos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AreaTrabajos.
     */
    skip?: number
    distinct?: AreaTrabajoScalarFieldEnum | AreaTrabajoScalarFieldEnum[]
  }

  /**
   * AreaTrabajo create
   */
  export type AreaTrabajoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to create a AreaTrabajo.
     */
    data: XOR<AreaTrabajoCreateInput, AreaTrabajoUncheckedCreateInput>
  }

  /**
   * AreaTrabajo createMany
   */
  export type AreaTrabajoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AreaTrabajos.
     */
    data: AreaTrabajoCreateManyInput | AreaTrabajoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AreaTrabajo update
   */
  export type AreaTrabajoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * The data needed to update a AreaTrabajo.
     */
    data: XOR<AreaTrabajoUpdateInput, AreaTrabajoUncheckedUpdateInput>
    /**
     * Choose, which AreaTrabajo to update.
     */
    where: AreaTrabajoWhereUniqueInput
  }

  /**
   * AreaTrabajo updateMany
   */
  export type AreaTrabajoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AreaTrabajos.
     */
    data: XOR<AreaTrabajoUpdateManyMutationInput, AreaTrabajoUncheckedUpdateManyInput>
    /**
     * Filter which AreaTrabajos to update
     */
    where?: AreaTrabajoWhereInput
    /**
     * Limit how many AreaTrabajos to update.
     */
    limit?: number
  }

  /**
   * AreaTrabajo upsert
   */
  export type AreaTrabajoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * The filter to search for the AreaTrabajo to update in case it exists.
     */
    where: AreaTrabajoWhereUniqueInput
    /**
     * In case the AreaTrabajo found by the `where` argument doesn't exist, create a new AreaTrabajo with this data.
     */
    create: XOR<AreaTrabajoCreateInput, AreaTrabajoUncheckedCreateInput>
    /**
     * In case the AreaTrabajo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaTrabajoUpdateInput, AreaTrabajoUncheckedUpdateInput>
  }

  /**
   * AreaTrabajo delete
   */
  export type AreaTrabajoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
    /**
     * Filter which AreaTrabajo to delete.
     */
    where: AreaTrabajoWhereUniqueInput
  }

  /**
   * AreaTrabajo deleteMany
   */
  export type AreaTrabajoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AreaTrabajos to delete
     */
    where?: AreaTrabajoWhereInput
    /**
     * Limit how many AreaTrabajos to delete.
     */
    limit?: number
  }

  /**
   * AreaTrabajo.vehiculos
   */
  export type AreaTrabajo$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    cursor?: VehiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * AreaTrabajo without action
   */
  export type AreaTrabajoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaTrabajo
     */
    select?: AreaTrabajoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AreaTrabajo
     */
    omit?: AreaTrabajoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaTrabajoInclude<ExtArgs> | null
  }


  /**
   * Model TarjetaCombustible
   */

  export type AggregateTarjetaCombustible = {
    _count: TarjetaCombustibleCountAggregateOutputType | null
    _avg: TarjetaCombustibleAvgAggregateOutputType | null
    _sum: TarjetaCombustibleSumAggregateOutputType | null
    _min: TarjetaCombustibleMinAggregateOutputType | null
    _max: TarjetaCombustibleMaxAggregateOutputType | null
  }

  export type TarjetaCombustibleAvgAggregateOutputType = {
    pin: number | null
  }

  export type TarjetaCombustibleSumAggregateOutputType = {
    pin: number | null
  }

  export type TarjetaCombustibleMinAggregateOutputType = {
    uuid: string | null
    numero: string | null
    pin: number | null
    estado: $Enums.State | null
    fecha_vencimiento: Date | null
    isAvailable: boolean | null
    vehiculoUuid: string | null
  }

  export type TarjetaCombustibleMaxAggregateOutputType = {
    uuid: string | null
    numero: string | null
    pin: number | null
    estado: $Enums.State | null
    fecha_vencimiento: Date | null
    isAvailable: boolean | null
    vehiculoUuid: string | null
  }

  export type TarjetaCombustibleCountAggregateOutputType = {
    uuid: number
    numero: number
    pin: number
    estado: number
    fecha_vencimiento: number
    isAvailable: number
    vehiculoUuid: number
    _all: number
  }


  export type TarjetaCombustibleAvgAggregateInputType = {
    pin?: true
  }

  export type TarjetaCombustibleSumAggregateInputType = {
    pin?: true
  }

  export type TarjetaCombustibleMinAggregateInputType = {
    uuid?: true
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    isAvailable?: true
    vehiculoUuid?: true
  }

  export type TarjetaCombustibleMaxAggregateInputType = {
    uuid?: true
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    isAvailable?: true
    vehiculoUuid?: true
  }

  export type TarjetaCombustibleCountAggregateInputType = {
    uuid?: true
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    isAvailable?: true
    vehiculoUuid?: true
    _all?: true
  }

  export type TarjetaCombustibleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarjetaCombustible to aggregate.
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibles to fetch.
     */
    orderBy?: TarjetaCombustibleOrderByWithRelationInput | TarjetaCombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarjetaCombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TarjetaCombustibles
    **/
    _count?: true | TarjetaCombustibleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarjetaCombustibleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarjetaCombustibleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarjetaCombustibleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarjetaCombustibleMaxAggregateInputType
  }

  export type GetTarjetaCombustibleAggregateType<T extends TarjetaCombustibleAggregateArgs> = {
        [P in keyof T & keyof AggregateTarjetaCombustible]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarjetaCombustible[P]>
      : GetScalarType<T[P], AggregateTarjetaCombustible[P]>
  }




  export type TarjetaCombustibleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarjetaCombustibleWhereInput
    orderBy?: TarjetaCombustibleOrderByWithAggregationInput | TarjetaCombustibleOrderByWithAggregationInput[]
    by: TarjetaCombustibleScalarFieldEnum[] | TarjetaCombustibleScalarFieldEnum
    having?: TarjetaCombustibleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarjetaCombustibleCountAggregateInputType | true
    _avg?: TarjetaCombustibleAvgAggregateInputType
    _sum?: TarjetaCombustibleSumAggregateInputType
    _min?: TarjetaCombustibleMinAggregateInputType
    _max?: TarjetaCombustibleMaxAggregateInputType
  }

  export type TarjetaCombustibleGroupByOutputType = {
    uuid: string
    numero: string
    pin: number
    estado: $Enums.State
    fecha_vencimiento: Date
    isAvailable: boolean
    vehiculoUuid: string | null
    _count: TarjetaCombustibleCountAggregateOutputType | null
    _avg: TarjetaCombustibleAvgAggregateOutputType | null
    _sum: TarjetaCombustibleSumAggregateOutputType | null
    _min: TarjetaCombustibleMinAggregateOutputType | null
    _max: TarjetaCombustibleMaxAggregateOutputType | null
  }

  type GetTarjetaCombustibleGroupByPayload<T extends TarjetaCombustibleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarjetaCombustibleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarjetaCombustibleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarjetaCombustibleGroupByOutputType[P]>
            : GetScalarType<T[P], TarjetaCombustibleGroupByOutputType[P]>
        }
      >
    >


  export type TarjetaCombustibleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    numero?: boolean
    pin?: boolean
    estado?: boolean
    fecha_vencimiento?: boolean
    isAvailable?: boolean
    vehiculoUuid?: boolean
    vehiculo?: boolean | TarjetaCombustible$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["tarjetaCombustible"]>



  export type TarjetaCombustibleSelectScalar = {
    uuid?: boolean
    numero?: boolean
    pin?: boolean
    estado?: boolean
    fecha_vencimiento?: boolean
    isAvailable?: boolean
    vehiculoUuid?: boolean
  }

  export type TarjetaCombustibleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "numero" | "pin" | "estado" | "fecha_vencimiento" | "isAvailable" | "vehiculoUuid", ExtArgs["result"]["tarjetaCombustible"]>
  export type TarjetaCombustibleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | TarjetaCombustible$vehiculoArgs<ExtArgs>
  }

  export type $TarjetaCombustiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TarjetaCombustible"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      numero: string
      pin: number
      estado: $Enums.State
      fecha_vencimiento: Date
      isAvailable: boolean
      vehiculoUuid: string | null
    }, ExtArgs["result"]["tarjetaCombustible"]>
    composites: {}
  }

  type TarjetaCombustibleGetPayload<S extends boolean | null | undefined | TarjetaCombustibleDefaultArgs> = $Result.GetResult<Prisma.$TarjetaCombustiblePayload, S>

  type TarjetaCombustibleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarjetaCombustibleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarjetaCombustibleCountAggregateInputType | true
    }

  export interface TarjetaCombustibleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TarjetaCombustible'], meta: { name: 'TarjetaCombustible' } }
    /**
     * Find zero or one TarjetaCombustible that matches the filter.
     * @param {TarjetaCombustibleFindUniqueArgs} args - Arguments to find a TarjetaCombustible
     * @example
     * // Get one TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarjetaCombustibleFindUniqueArgs>(args: SelectSubset<T, TarjetaCombustibleFindUniqueArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TarjetaCombustible that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarjetaCombustibleFindUniqueOrThrowArgs} args - Arguments to find a TarjetaCombustible
     * @example
     * // Get one TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarjetaCombustibleFindUniqueOrThrowArgs>(args: SelectSubset<T, TarjetaCombustibleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarjetaCombustible that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleFindFirstArgs} args - Arguments to find a TarjetaCombustible
     * @example
     * // Get one TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarjetaCombustibleFindFirstArgs>(args?: SelectSubset<T, TarjetaCombustibleFindFirstArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarjetaCombustible that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleFindFirstOrThrowArgs} args - Arguments to find a TarjetaCombustible
     * @example
     * // Get one TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarjetaCombustibleFindFirstOrThrowArgs>(args?: SelectSubset<T, TarjetaCombustibleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TarjetaCombustibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TarjetaCombustibles
     * const tarjetaCombustibles = await prisma.tarjetaCombustible.findMany()
     * 
     * // Get first 10 TarjetaCombustibles
     * const tarjetaCombustibles = await prisma.tarjetaCombustible.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const tarjetaCombustibleWithUuidOnly = await prisma.tarjetaCombustible.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends TarjetaCombustibleFindManyArgs>(args?: SelectSubset<T, TarjetaCombustibleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TarjetaCombustible.
     * @param {TarjetaCombustibleCreateArgs} args - Arguments to create a TarjetaCombustible.
     * @example
     * // Create one TarjetaCombustible
     * const TarjetaCombustible = await prisma.tarjetaCombustible.create({
     *   data: {
     *     // ... data to create a TarjetaCombustible
     *   }
     * })
     * 
     */
    create<T extends TarjetaCombustibleCreateArgs>(args: SelectSubset<T, TarjetaCombustibleCreateArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TarjetaCombustibles.
     * @param {TarjetaCombustibleCreateManyArgs} args - Arguments to create many TarjetaCombustibles.
     * @example
     * // Create many TarjetaCombustibles
     * const tarjetaCombustible = await prisma.tarjetaCombustible.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarjetaCombustibleCreateManyArgs>(args?: SelectSubset<T, TarjetaCombustibleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TarjetaCombustible.
     * @param {TarjetaCombustibleDeleteArgs} args - Arguments to delete one TarjetaCombustible.
     * @example
     * // Delete one TarjetaCombustible
     * const TarjetaCombustible = await prisma.tarjetaCombustible.delete({
     *   where: {
     *     // ... filter to delete one TarjetaCombustible
     *   }
     * })
     * 
     */
    delete<T extends TarjetaCombustibleDeleteArgs>(args: SelectSubset<T, TarjetaCombustibleDeleteArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TarjetaCombustible.
     * @param {TarjetaCombustibleUpdateArgs} args - Arguments to update one TarjetaCombustible.
     * @example
     * // Update one TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarjetaCombustibleUpdateArgs>(args: SelectSubset<T, TarjetaCombustibleUpdateArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TarjetaCombustibles.
     * @param {TarjetaCombustibleDeleteManyArgs} args - Arguments to filter TarjetaCombustibles to delete.
     * @example
     * // Delete a few TarjetaCombustibles
     * const { count } = await prisma.tarjetaCombustible.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarjetaCombustibleDeleteManyArgs>(args?: SelectSubset<T, TarjetaCombustibleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TarjetaCombustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TarjetaCombustibles
     * const tarjetaCombustible = await prisma.tarjetaCombustible.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarjetaCombustibleUpdateManyArgs>(args: SelectSubset<T, TarjetaCombustibleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TarjetaCombustible.
     * @param {TarjetaCombustibleUpsertArgs} args - Arguments to update or create a TarjetaCombustible.
     * @example
     * // Update or create a TarjetaCombustible
     * const tarjetaCombustible = await prisma.tarjetaCombustible.upsert({
     *   create: {
     *     // ... data to create a TarjetaCombustible
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TarjetaCombustible we want to update
     *   }
     * })
     */
    upsert<T extends TarjetaCombustibleUpsertArgs>(args: SelectSubset<T, TarjetaCombustibleUpsertArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TarjetaCombustibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleCountArgs} args - Arguments to filter TarjetaCombustibles to count.
     * @example
     * // Count the number of TarjetaCombustibles
     * const count = await prisma.tarjetaCombustible.count({
     *   where: {
     *     // ... the filter for the TarjetaCombustibles we want to count
     *   }
     * })
    **/
    count<T extends TarjetaCombustibleCountArgs>(
      args?: Subset<T, TarjetaCombustibleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarjetaCombustibleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TarjetaCombustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarjetaCombustibleAggregateArgs>(args: Subset<T, TarjetaCombustibleAggregateArgs>): Prisma.PrismaPromise<GetTarjetaCombustibleAggregateType<T>>

    /**
     * Group by TarjetaCombustible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleGroupByArgs} args - Group by arguments.
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
      T extends TarjetaCombustibleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarjetaCombustibleGroupByArgs['orderBy'] }
        : { orderBy?: TarjetaCombustibleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarjetaCombustibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarjetaCombustibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TarjetaCombustible model
   */
  readonly fields: TarjetaCombustibleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TarjetaCombustible.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarjetaCombustibleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends TarjetaCombustible$vehiculoArgs<ExtArgs> = {}>(args?: Subset<T, TarjetaCombustible$vehiculoArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TarjetaCombustible model
   */
  interface TarjetaCombustibleFieldRefs {
    readonly uuid: FieldRef<"TarjetaCombustible", 'String'>
    readonly numero: FieldRef<"TarjetaCombustible", 'String'>
    readonly pin: FieldRef<"TarjetaCombustible", 'Int'>
    readonly estado: FieldRef<"TarjetaCombustible", 'State'>
    readonly fecha_vencimiento: FieldRef<"TarjetaCombustible", 'DateTime'>
    readonly isAvailable: FieldRef<"TarjetaCombustible", 'Boolean'>
    readonly vehiculoUuid: FieldRef<"TarjetaCombustible", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TarjetaCombustible findUnique
   */
  export type TarjetaCombustibleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustible to fetch.
     */
    where: TarjetaCombustibleWhereUniqueInput
  }

  /**
   * TarjetaCombustible findUniqueOrThrow
   */
  export type TarjetaCombustibleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustible to fetch.
     */
    where: TarjetaCombustibleWhereUniqueInput
  }

  /**
   * TarjetaCombustible findFirst
   */
  export type TarjetaCombustibleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustible to fetch.
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibles to fetch.
     */
    orderBy?: TarjetaCombustibleOrderByWithRelationInput | TarjetaCombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarjetaCombustibles.
     */
    cursor?: TarjetaCombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarjetaCombustibles.
     */
    distinct?: TarjetaCombustibleScalarFieldEnum | TarjetaCombustibleScalarFieldEnum[]
  }

  /**
   * TarjetaCombustible findFirstOrThrow
   */
  export type TarjetaCombustibleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustible to fetch.
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibles to fetch.
     */
    orderBy?: TarjetaCombustibleOrderByWithRelationInput | TarjetaCombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarjetaCombustibles.
     */
    cursor?: TarjetaCombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarjetaCombustibles.
     */
    distinct?: TarjetaCombustibleScalarFieldEnum | TarjetaCombustibleScalarFieldEnum[]
  }

  /**
   * TarjetaCombustible findMany
   */
  export type TarjetaCombustibleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibles to fetch.
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibles to fetch.
     */
    orderBy?: TarjetaCombustibleOrderByWithRelationInput | TarjetaCombustibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TarjetaCombustibles.
     */
    cursor?: TarjetaCombustibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibles.
     */
    skip?: number
    distinct?: TarjetaCombustibleScalarFieldEnum | TarjetaCombustibleScalarFieldEnum[]
  }

  /**
   * TarjetaCombustible create
   */
  export type TarjetaCombustibleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * The data needed to create a TarjetaCombustible.
     */
    data: XOR<TarjetaCombustibleCreateInput, TarjetaCombustibleUncheckedCreateInput>
  }

  /**
   * TarjetaCombustible createMany
   */
  export type TarjetaCombustibleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TarjetaCombustibles.
     */
    data: TarjetaCombustibleCreateManyInput | TarjetaCombustibleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TarjetaCombustible update
   */
  export type TarjetaCombustibleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * The data needed to update a TarjetaCombustible.
     */
    data: XOR<TarjetaCombustibleUpdateInput, TarjetaCombustibleUncheckedUpdateInput>
    /**
     * Choose, which TarjetaCombustible to update.
     */
    where: TarjetaCombustibleWhereUniqueInput
  }

  /**
   * TarjetaCombustible updateMany
   */
  export type TarjetaCombustibleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TarjetaCombustibles.
     */
    data: XOR<TarjetaCombustibleUpdateManyMutationInput, TarjetaCombustibleUncheckedUpdateManyInput>
    /**
     * Filter which TarjetaCombustibles to update
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * Limit how many TarjetaCombustibles to update.
     */
    limit?: number
  }

  /**
   * TarjetaCombustible upsert
   */
  export type TarjetaCombustibleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * The filter to search for the TarjetaCombustible to update in case it exists.
     */
    where: TarjetaCombustibleWhereUniqueInput
    /**
     * In case the TarjetaCombustible found by the `where` argument doesn't exist, create a new TarjetaCombustible with this data.
     */
    create: XOR<TarjetaCombustibleCreateInput, TarjetaCombustibleUncheckedCreateInput>
    /**
     * In case the TarjetaCombustible was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarjetaCombustibleUpdateInput, TarjetaCombustibleUncheckedUpdateInput>
  }

  /**
   * TarjetaCombustible delete
   */
  export type TarjetaCombustibleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    /**
     * Filter which TarjetaCombustible to delete.
     */
    where: TarjetaCombustibleWhereUniqueInput
  }

  /**
   * TarjetaCombustible deleteMany
   */
  export type TarjetaCombustibleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarjetaCombustibles to delete
     */
    where?: TarjetaCombustibleWhereInput
    /**
     * Limit how many TarjetaCombustibles to delete.
     */
    limit?: number
  }

  /**
   * TarjetaCombustible.vehiculo
   */
  export type TarjetaCombustible$vehiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
  }

  /**
   * TarjetaCombustible without action
   */
  export type TarjetaCombustibleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoMinAggregateOutputType = {
    uuid: string | null
    chapa: string | null
    marca: string | null
    tipo: string | null
    jefe: string | null
    isAvailable: boolean | null
    areaTrabajoUuid: string | null
    choferCI: string | null
  }

  export type VehiculoMaxAggregateOutputType = {
    uuid: string | null
    chapa: string | null
    marca: string | null
    tipo: string | null
    jefe: string | null
    isAvailable: boolean | null
    areaTrabajoUuid: string | null
    choferCI: string | null
  }

  export type VehiculoCountAggregateOutputType = {
    uuid: number
    chapa: number
    marca: number
    tipo: number
    jefe: number
    isAvailable: number
    areaTrabajoUuid: number
    choferCI: number
    _all: number
  }


  export type VehiculoMinAggregateInputType = {
    uuid?: true
    chapa?: true
    marca?: true
    tipo?: true
    jefe?: true
    isAvailable?: true
    areaTrabajoUuid?: true
    choferCI?: true
  }

  export type VehiculoMaxAggregateInputType = {
    uuid?: true
    chapa?: true
    marca?: true
    tipo?: true
    jefe?: true
    isAvailable?: true
    areaTrabajoUuid?: true
    choferCI?: true
  }

  export type VehiculoCountAggregateInputType = {
    uuid?: true
    chapa?: true
    marca?: true
    tipo?: true
    jefe?: true
    isAvailable?: true
    areaTrabajoUuid?: true
    choferCI?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    uuid: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable: boolean
    areaTrabajoUuid: string
    choferCI: string | null
    _count: VehiculoCountAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    chapa?: boolean
    marca?: boolean
    tipo?: boolean
    jefe?: boolean
    isAvailable?: boolean
    areaTrabajoUuid?: boolean
    choferCI?: boolean
    areaTrabajo?: boolean | AreaTrabajoDefaultArgs<ExtArgs>
    chofer?: boolean | Vehiculo$choferArgs<ExtArgs>
    tarjeta?: boolean | Vehiculo$tarjetaArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>



  export type VehiculoSelectScalar = {
    uuid?: boolean
    chapa?: boolean
    marca?: boolean
    tipo?: boolean
    jefe?: boolean
    isAvailable?: boolean
    areaTrabajoUuid?: boolean
    choferCI?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "chapa" | "marca" | "tipo" | "jefe" | "isAvailable" | "areaTrabajoUuid" | "choferCI", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areaTrabajo?: boolean | AreaTrabajoDefaultArgs<ExtArgs>
    chofer?: boolean | Vehiculo$choferArgs<ExtArgs>
    tarjeta?: boolean | Vehiculo$tarjetaArgs<ExtArgs>
  }

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      areaTrabajo: Prisma.$AreaTrabajoPayload<ExtArgs>
      chofer: Prisma.$ChoferPayload<ExtArgs> | null
      tarjeta: Prisma.$TarjetaCombustiblePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      chapa: string
      marca: string
      tipo: string
      jefe: string
      isAvailable: boolean
      areaTrabajoUuid: string
      choferCI: string | null
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const vehiculoWithUuidOnly = await prisma.vehiculo.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
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
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areaTrabajo<T extends AreaTrabajoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaTrabajoDefaultArgs<ExtArgs>>): Prisma__AreaTrabajoClient<$Result.GetResult<Prisma.$AreaTrabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chofer<T extends Vehiculo$choferArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$choferArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tarjeta<T extends Vehiculo$tarjetaArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$tarjetaArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly uuid: FieldRef<"Vehiculo", 'String'>
    readonly chapa: FieldRef<"Vehiculo", 'String'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly tipo: FieldRef<"Vehiculo", 'String'>
    readonly jefe: FieldRef<"Vehiculo", 'String'>
    readonly isAvailable: FieldRef<"Vehiculo", 'Boolean'>
    readonly areaTrabajoUuid: FieldRef<"Vehiculo", 'String'>
    readonly choferCI: FieldRef<"Vehiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.chofer
   */
  export type Vehiculo$choferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chofer
     */
    select?: ChoferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chofer
     */
    omit?: ChoferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferInclude<ExtArgs> | null
    where?: ChoferWhereInput
  }

  /**
   * Vehiculo.tarjeta
   */
  export type Vehiculo$tarjetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustible
     */
    select?: TarjetaCombustibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustible
     */
    omit?: TarjetaCombustibleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleInclude<ExtArgs> | null
    where?: TarjetaCombustibleWhereInput
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    nickname: 'nickname',
    nombre: 'nombre',
    ci: 'ci',
    password: 'password',
    role: 'role',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChoferScalarFieldEnum: {
    nombre: 'nombre',
    edad: 'edad',
    sexo: 'sexo',
    ci: 'ci',
    licencia: 'licencia',
    telefono: 'telefono',
    isAvailable: 'isAvailable'
  };

  export type ChoferScalarFieldEnum = (typeof ChoferScalarFieldEnum)[keyof typeof ChoferScalarFieldEnum]


  export const AreaTrabajoScalarFieldEnum: {
    uuid: 'uuid',
    nombre: 'nombre',
    centro_costo: 'centro_costo',
    jefe: 'jefe',
    isAvailable: 'isAvailable'
  };

  export type AreaTrabajoScalarFieldEnum = (typeof AreaTrabajoScalarFieldEnum)[keyof typeof AreaTrabajoScalarFieldEnum]


  export const TarjetaCombustibleScalarFieldEnum: {
    uuid: 'uuid',
    numero: 'numero',
    pin: 'pin',
    estado: 'estado',
    fecha_vencimiento: 'fecha_vencimiento',
    isAvailable: 'isAvailable',
    vehiculoUuid: 'vehiculoUuid'
  };

  export type TarjetaCombustibleScalarFieldEnum = (typeof TarjetaCombustibleScalarFieldEnum)[keyof typeof TarjetaCombustibleScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    uuid: 'uuid',
    chapa: 'chapa',
    marca: 'marca',
    tipo: 'tipo',
    jefe: 'jefe',
    isAvailable: 'isAvailable',
    areaTrabajoUuid: 'areaTrabajoUuid',
    choferCI: 'choferCI'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nickname: 'nickname',
    nombre: 'nombre',
    ci: 'ci',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ChoferOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    sexo: 'sexo',
    ci: 'ci',
    licencia: 'licencia',
    telefono: 'telefono'
  };

  export type ChoferOrderByRelevanceFieldEnum = (typeof ChoferOrderByRelevanceFieldEnum)[keyof typeof ChoferOrderByRelevanceFieldEnum]


  export const AreaTrabajoOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    nombre: 'nombre',
    centro_costo: 'centro_costo',
    jefe: 'jefe'
  };

  export type AreaTrabajoOrderByRelevanceFieldEnum = (typeof AreaTrabajoOrderByRelevanceFieldEnum)[keyof typeof AreaTrabajoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TarjetaCombustibleOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    numero: 'numero',
    vehiculoUuid: 'vehiculoUuid'
  };

  export type TarjetaCombustibleOrderByRelevanceFieldEnum = (typeof TarjetaCombustibleOrderByRelevanceFieldEnum)[keyof typeof TarjetaCombustibleOrderByRelevanceFieldEnum]


  export const VehiculoOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    chapa: 'chapa',
    marca: 'marca',
    tipo: 'tipo',
    jefe: 'jefe',
    areaTrabajoUuid: 'areaTrabajoUuid',
    choferCI: 'choferCI'
  };

  export type VehiculoOrderByRelevanceFieldEnum = (typeof VehiculoOrderByRelevanceFieldEnum)[keyof typeof VehiculoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'State'
   */
  export type EnumStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'State'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nickname?: StringFilter<"User"> | string
    nombre?: StringFilter<"User"> | string
    ci?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isAvailable?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    nickname?: SortOrder
    nombre?: SortOrder
    ci?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    nickname?: string
    ci?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nombre?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isAvailable?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "nickname" | "ci">

  export type UserOrderByWithAggregationInput = {
    nickname?: SortOrder
    nombre?: SortOrder
    ci?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    nickname?: StringWithAggregatesFilter<"User"> | string
    nombre?: StringWithAggregatesFilter<"User"> | string
    ci?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isAvailable?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChoferWhereInput = {
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    nombre?: StringFilter<"Chofer"> | string
    edad?: IntFilter<"Chofer"> | number
    sexo?: StringFilter<"Chofer"> | string
    ci?: StringFilter<"Chofer"> | string
    licencia?: StringFilter<"Chofer"> | string
    telefono?: StringFilter<"Chofer"> | string
    isAvailable?: BoolFilter<"Chofer"> | boolean
    vehiculos?: VehiculoListRelationFilter
  }

  export type ChoferOrderByWithRelationInput = {
    nombre?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    ci?: SortOrder
    licencia?: SortOrder
    telefono?: SortOrder
    isAvailable?: SortOrder
    vehiculos?: VehiculoOrderByRelationAggregateInput
    _relevance?: ChoferOrderByRelevanceInput
  }

  export type ChoferWhereUniqueInput = Prisma.AtLeast<{
    ci?: string
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    nombre?: StringFilter<"Chofer"> | string
    edad?: IntFilter<"Chofer"> | number
    sexo?: StringFilter<"Chofer"> | string
    licencia?: StringFilter<"Chofer"> | string
    telefono?: StringFilter<"Chofer"> | string
    isAvailable?: BoolFilter<"Chofer"> | boolean
    vehiculos?: VehiculoListRelationFilter
  }, "ci">

  export type ChoferOrderByWithAggregationInput = {
    nombre?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    ci?: SortOrder
    licencia?: SortOrder
    telefono?: SortOrder
    isAvailable?: SortOrder
    _count?: ChoferCountOrderByAggregateInput
    _avg?: ChoferAvgOrderByAggregateInput
    _max?: ChoferMaxOrderByAggregateInput
    _min?: ChoferMinOrderByAggregateInput
    _sum?: ChoferSumOrderByAggregateInput
  }

  export type ChoferScalarWhereWithAggregatesInput = {
    AND?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    OR?: ChoferScalarWhereWithAggregatesInput[]
    NOT?: ChoferScalarWhereWithAggregatesInput | ChoferScalarWhereWithAggregatesInput[]
    nombre?: StringWithAggregatesFilter<"Chofer"> | string
    edad?: IntWithAggregatesFilter<"Chofer"> | number
    sexo?: StringWithAggregatesFilter<"Chofer"> | string
    ci?: StringWithAggregatesFilter<"Chofer"> | string
    licencia?: StringWithAggregatesFilter<"Chofer"> | string
    telefono?: StringWithAggregatesFilter<"Chofer"> | string
    isAvailable?: BoolWithAggregatesFilter<"Chofer"> | boolean
  }

  export type AreaTrabajoWhereInput = {
    AND?: AreaTrabajoWhereInput | AreaTrabajoWhereInput[]
    OR?: AreaTrabajoWhereInput[]
    NOT?: AreaTrabajoWhereInput | AreaTrabajoWhereInput[]
    uuid?: StringFilter<"AreaTrabajo"> | string
    nombre?: StringFilter<"AreaTrabajo"> | string
    centro_costo?: StringFilter<"AreaTrabajo"> | string
    jefe?: StringFilter<"AreaTrabajo"> | string
    isAvailable?: BoolFilter<"AreaTrabajo"> | boolean
    vehiculos?: VehiculoListRelationFilter
  }

  export type AreaTrabajoOrderByWithRelationInput = {
    uuid?: SortOrder
    nombre?: SortOrder
    centro_costo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    vehiculos?: VehiculoOrderByRelationAggregateInput
    _relevance?: AreaTrabajoOrderByRelevanceInput
  }

  export type AreaTrabajoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: AreaTrabajoWhereInput | AreaTrabajoWhereInput[]
    OR?: AreaTrabajoWhereInput[]
    NOT?: AreaTrabajoWhereInput | AreaTrabajoWhereInput[]
    nombre?: StringFilter<"AreaTrabajo"> | string
    centro_costo?: StringFilter<"AreaTrabajo"> | string
    jefe?: StringFilter<"AreaTrabajo"> | string
    isAvailable?: BoolFilter<"AreaTrabajo"> | boolean
    vehiculos?: VehiculoListRelationFilter
  }, "uuid">

  export type AreaTrabajoOrderByWithAggregationInput = {
    uuid?: SortOrder
    nombre?: SortOrder
    centro_costo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    _count?: AreaTrabajoCountOrderByAggregateInput
    _max?: AreaTrabajoMaxOrderByAggregateInput
    _min?: AreaTrabajoMinOrderByAggregateInput
  }

  export type AreaTrabajoScalarWhereWithAggregatesInput = {
    AND?: AreaTrabajoScalarWhereWithAggregatesInput | AreaTrabajoScalarWhereWithAggregatesInput[]
    OR?: AreaTrabajoScalarWhereWithAggregatesInput[]
    NOT?: AreaTrabajoScalarWhereWithAggregatesInput | AreaTrabajoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"AreaTrabajo"> | string
    nombre?: StringWithAggregatesFilter<"AreaTrabajo"> | string
    centro_costo?: StringWithAggregatesFilter<"AreaTrabajo"> | string
    jefe?: StringWithAggregatesFilter<"AreaTrabajo"> | string
    isAvailable?: BoolWithAggregatesFilter<"AreaTrabajo"> | boolean
  }

  export type TarjetaCombustibleWhereInput = {
    AND?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    OR?: TarjetaCombustibleWhereInput[]
    NOT?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    uuid?: StringFilter<"TarjetaCombustible"> | string
    numero?: StringFilter<"TarjetaCombustible"> | string
    pin?: IntFilter<"TarjetaCombustible"> | number
    estado?: EnumStateFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeFilter<"TarjetaCombustible"> | Date | string
    isAvailable?: BoolFilter<"TarjetaCombustible"> | boolean
    vehiculoUuid?: StringNullableFilter<"TarjetaCombustible"> | string | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }

  export type TarjetaCombustibleOrderByWithRelationInput = {
    uuid?: SortOrder
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    isAvailable?: SortOrder
    vehiculoUuid?: SortOrderInput | SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: TarjetaCombustibleOrderByRelevanceInput
  }

  export type TarjetaCombustibleWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    vehiculoUuid?: string
    AND?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    OR?: TarjetaCombustibleWhereInput[]
    NOT?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    numero?: StringFilter<"TarjetaCombustible"> | string
    pin?: IntFilter<"TarjetaCombustible"> | number
    estado?: EnumStateFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeFilter<"TarjetaCombustible"> | Date | string
    isAvailable?: BoolFilter<"TarjetaCombustible"> | boolean
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }, "uuid" | "vehiculoUuid">

  export type TarjetaCombustibleOrderByWithAggregationInput = {
    uuid?: SortOrder
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    isAvailable?: SortOrder
    vehiculoUuid?: SortOrderInput | SortOrder
    _count?: TarjetaCombustibleCountOrderByAggregateInput
    _avg?: TarjetaCombustibleAvgOrderByAggregateInput
    _max?: TarjetaCombustibleMaxOrderByAggregateInput
    _min?: TarjetaCombustibleMinOrderByAggregateInput
    _sum?: TarjetaCombustibleSumOrderByAggregateInput
  }

  export type TarjetaCombustibleScalarWhereWithAggregatesInput = {
    AND?: TarjetaCombustibleScalarWhereWithAggregatesInput | TarjetaCombustibleScalarWhereWithAggregatesInput[]
    OR?: TarjetaCombustibleScalarWhereWithAggregatesInput[]
    NOT?: TarjetaCombustibleScalarWhereWithAggregatesInput | TarjetaCombustibleScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"TarjetaCombustible"> | string
    numero?: StringWithAggregatesFilter<"TarjetaCombustible"> | string
    pin?: IntWithAggregatesFilter<"TarjetaCombustible"> | number
    estado?: EnumStateWithAggregatesFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeWithAggregatesFilter<"TarjetaCombustible"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"TarjetaCombustible"> | boolean
    vehiculoUuid?: StringNullableWithAggregatesFilter<"TarjetaCombustible"> | string | null
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    uuid?: StringFilter<"Vehiculo"> | string
    chapa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    jefe?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
    areaTrabajo?: XOR<AreaTrabajoScalarRelationFilter, AreaTrabajoWhereInput>
    chofer?: XOR<ChoferNullableScalarRelationFilter, ChoferWhereInput> | null
    tarjeta?: XOR<TarjetaCombustibleNullableScalarRelationFilter, TarjetaCombustibleWhereInput> | null
  }

  export type VehiculoOrderByWithRelationInput = {
    uuid?: SortOrder
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrderInput | SortOrder
    areaTrabajo?: AreaTrabajoOrderByWithRelationInput
    chofer?: ChoferOrderByWithRelationInput
    tarjeta?: TarjetaCombustibleOrderByWithRelationInput
    _relevance?: VehiculoOrderByRelevanceInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    chapa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    jefe?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
    areaTrabajo?: XOR<AreaTrabajoScalarRelationFilter, AreaTrabajoWhereInput>
    chofer?: XOR<ChoferNullableScalarRelationFilter, ChoferWhereInput> | null
    tarjeta?: XOR<TarjetaCombustibleNullableScalarRelationFilter, TarjetaCombustibleWhereInput> | null
  }, "uuid">

  export type VehiculoOrderByWithAggregationInput = {
    uuid?: SortOrder
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrderInput | SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Vehiculo"> | string
    chapa?: StringWithAggregatesFilter<"Vehiculo"> | string
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipo?: StringWithAggregatesFilter<"Vehiculo"> | string
    jefe?: StringWithAggregatesFilter<"Vehiculo"> | string
    isAvailable?: BoolWithAggregatesFilter<"Vehiculo"> | boolean
    areaTrabajoUuid?: StringWithAggregatesFilter<"Vehiculo"> | string
    choferCI?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
  }

  export type UserCreateInput = {
    nickname: string
    nombre: string
    ci: string
    password: string
    role?: $Enums.Role
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    nickname: string
    nombre: string
    ci: string
    password: string
    role?: $Enums.Role
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    nickname: string
    nombre: string
    ci: string
    password: string
    role?: $Enums.Role
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoferCreateInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
    vehiculos?: VehiculoCreateNestedManyWithoutChoferInput
  }

  export type ChoferUncheckedCreateInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutChoferInput
  }

  export type ChoferUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type ChoferCreateManyInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
  }

  export type ChoferUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoferUncheckedUpdateManyInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaTrabajoCreateInput = {
    uuid?: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable?: boolean
    vehiculos?: VehiculoCreateNestedManyWithoutAreaTrabajoInput
  }

  export type AreaTrabajoUncheckedCreateInput = {
    uuid?: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable?: boolean
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutAreaTrabajoInput
  }

  export type AreaTrabajoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUpdateManyWithoutAreaTrabajoNestedInput
  }

  export type AreaTrabajoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUncheckedUpdateManyWithoutAreaTrabajoNestedInput
  }

  export type AreaTrabajoCreateManyInput = {
    uuid?: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable?: boolean
  }

  export type AreaTrabajoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaTrabajoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarjetaCombustibleCreateInput = {
    uuid?: string
    numero: string
    pin: number
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    isAvailable?: boolean
    vehiculo?: VehiculoCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleUncheckedCreateInput = {
    uuid?: string
    numero: string
    pin: number
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    isAvailable?: boolean
    vehiculoUuid?: string | null
  }

  export type TarjetaCombustibleUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculo?: VehiculoUpdateOneWithoutTarjetaNestedInput
  }

  export type TarjetaCombustibleUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculoUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarjetaCombustibleCreateManyInput = {
    uuid?: string
    numero: string
    pin: number
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    isAvailable?: boolean
    vehiculoUuid?: string | null
  }

  export type TarjetaCombustibleUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarjetaCombustibleUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculoUuid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoCreateInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjeta?: TarjetaCombustibleUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjeta?: TarjetaCombustibleUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajoUuid: string
    choferCI?: string | null
  }

  export type VehiculoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    nickname?: SortOrder
    nombre?: SortOrder
    ci?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    nickname?: SortOrder
    nombre?: SortOrder
    ci?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    nickname?: SortOrder
    nombre?: SortOrder
    ci?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VehiculoListRelationFilter = {
    every?: VehiculoWhereInput
    some?: VehiculoWhereInput
    none?: VehiculoWhereInput
  }

  export type VehiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoferOrderByRelevanceInput = {
    fields: ChoferOrderByRelevanceFieldEnum | ChoferOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChoferCountOrderByAggregateInput = {
    nombre?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    ci?: SortOrder
    licencia?: SortOrder
    telefono?: SortOrder
    isAvailable?: SortOrder
  }

  export type ChoferAvgOrderByAggregateInput = {
    edad?: SortOrder
  }

  export type ChoferMaxOrderByAggregateInput = {
    nombre?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    ci?: SortOrder
    licencia?: SortOrder
    telefono?: SortOrder
    isAvailable?: SortOrder
  }

  export type ChoferMinOrderByAggregateInput = {
    nombre?: SortOrder
    edad?: SortOrder
    sexo?: SortOrder
    ci?: SortOrder
    licencia?: SortOrder
    telefono?: SortOrder
    isAvailable?: SortOrder
  }

  export type ChoferSumOrderByAggregateInput = {
    edad?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type AreaTrabajoOrderByRelevanceInput = {
    fields: AreaTrabajoOrderByRelevanceFieldEnum | AreaTrabajoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AreaTrabajoCountOrderByAggregateInput = {
    uuid?: SortOrder
    nombre?: SortOrder
    centro_costo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
  }

  export type AreaTrabajoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    nombre?: SortOrder
    centro_costo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
  }

  export type AreaTrabajoMinOrderByAggregateInput = {
    uuid?: SortOrder
    nombre?: SortOrder
    centro_costo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
  }

  export type EnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VehiculoNullableScalarRelationFilter = {
    is?: VehiculoWhereInput | null
    isNot?: VehiculoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TarjetaCombustibleOrderByRelevanceInput = {
    fields: TarjetaCombustibleOrderByRelevanceFieldEnum | TarjetaCombustibleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TarjetaCombustibleCountOrderByAggregateInput = {
    uuid?: SortOrder
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    isAvailable?: SortOrder
    vehiculoUuid?: SortOrder
  }

  export type TarjetaCombustibleAvgOrderByAggregateInput = {
    pin?: SortOrder
  }

  export type TarjetaCombustibleMaxOrderByAggregateInput = {
    uuid?: SortOrder
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    isAvailable?: SortOrder
    vehiculoUuid?: SortOrder
  }

  export type TarjetaCombustibleMinOrderByAggregateInput = {
    uuid?: SortOrder
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    isAvailable?: SortOrder
    vehiculoUuid?: SortOrder
  }

  export type TarjetaCombustibleSumOrderByAggregateInput = {
    pin?: SortOrder
  }

  export type EnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AreaTrabajoScalarRelationFilter = {
    is?: AreaTrabajoWhereInput
    isNot?: AreaTrabajoWhereInput
  }

  export type ChoferNullableScalarRelationFilter = {
    is?: ChoferWhereInput | null
    isNot?: ChoferWhereInput | null
  }

  export type TarjetaCombustibleNullableScalarRelationFilter = {
    is?: TarjetaCombustibleWhereInput | null
    isNot?: TarjetaCombustibleWhereInput | null
  }

  export type VehiculoOrderByRelevanceInput = {
    fields: VehiculoOrderByRelevanceFieldEnum | VehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculoCountOrderByAggregateInput = {
    uuid?: SortOrder
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    uuid?: SortOrder
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    jefe?: SortOrder
    isAvailable?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehiculoCreateNestedManyWithoutChoferInput = {
    create?: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput> | VehiculoCreateWithoutChoferInput[] | VehiculoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutChoferInput | VehiculoCreateOrConnectWithoutChoferInput[]
    createMany?: VehiculoCreateManyChoferInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUncheckedCreateNestedManyWithoutChoferInput = {
    create?: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput> | VehiculoCreateWithoutChoferInput[] | VehiculoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutChoferInput | VehiculoCreateOrConnectWithoutChoferInput[]
    createMany?: VehiculoCreateManyChoferInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehiculoUpdateManyWithoutChoferNestedInput = {
    create?: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput> | VehiculoCreateWithoutChoferInput[] | VehiculoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutChoferInput | VehiculoCreateOrConnectWithoutChoferInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutChoferInput | VehiculoUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: VehiculoCreateManyChoferInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutChoferInput | VehiculoUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutChoferInput | VehiculoUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoUncheckedUpdateManyWithoutChoferNestedInput = {
    create?: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput> | VehiculoCreateWithoutChoferInput[] | VehiculoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutChoferInput | VehiculoCreateOrConnectWithoutChoferInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutChoferInput | VehiculoUpsertWithWhereUniqueWithoutChoferInput[]
    createMany?: VehiculoCreateManyChoferInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutChoferInput | VehiculoUpdateWithWhereUniqueWithoutChoferInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutChoferInput | VehiculoUpdateManyWithWhereWithoutChoferInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoCreateNestedManyWithoutAreaTrabajoInput = {
    create?: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput> | VehiculoCreateWithoutAreaTrabajoInput[] | VehiculoUncheckedCreateWithoutAreaTrabajoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutAreaTrabajoInput | VehiculoCreateOrConnectWithoutAreaTrabajoInput[]
    createMany?: VehiculoCreateManyAreaTrabajoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUncheckedCreateNestedManyWithoutAreaTrabajoInput = {
    create?: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput> | VehiculoCreateWithoutAreaTrabajoInput[] | VehiculoUncheckedCreateWithoutAreaTrabajoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutAreaTrabajoInput | VehiculoCreateOrConnectWithoutAreaTrabajoInput[]
    createMany?: VehiculoCreateManyAreaTrabajoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUpdateManyWithoutAreaTrabajoNestedInput = {
    create?: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput> | VehiculoCreateWithoutAreaTrabajoInput[] | VehiculoUncheckedCreateWithoutAreaTrabajoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutAreaTrabajoInput | VehiculoCreateOrConnectWithoutAreaTrabajoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutAreaTrabajoInput | VehiculoUpsertWithWhereUniqueWithoutAreaTrabajoInput[]
    createMany?: VehiculoCreateManyAreaTrabajoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutAreaTrabajoInput | VehiculoUpdateWithWhereUniqueWithoutAreaTrabajoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutAreaTrabajoInput | VehiculoUpdateManyWithWhereWithoutAreaTrabajoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoUncheckedUpdateManyWithoutAreaTrabajoNestedInput = {
    create?: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput> | VehiculoCreateWithoutAreaTrabajoInput[] | VehiculoUncheckedCreateWithoutAreaTrabajoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutAreaTrabajoInput | VehiculoCreateOrConnectWithoutAreaTrabajoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutAreaTrabajoInput | VehiculoUpsertWithWhereUniqueWithoutAreaTrabajoInput[]
    createMany?: VehiculoCreateManyAreaTrabajoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutAreaTrabajoInput | VehiculoUpdateWithWhereUniqueWithoutAreaTrabajoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutAreaTrabajoInput | VehiculoUpdateManyWithWhereWithoutAreaTrabajoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutTarjetaInput
    connect?: VehiculoWhereUniqueInput
  }

  export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State
  }

  export type VehiculoUpdateOneWithoutTarjetaNestedInput = {
    create?: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutTarjetaInput
    upsert?: VehiculoUpsertWithoutTarjetaInput
    disconnect?: VehiculoWhereInput | boolean
    delete?: VehiculoWhereInput | boolean
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutTarjetaInput, VehiculoUpdateWithoutTarjetaInput>, VehiculoUncheckedUpdateWithoutTarjetaInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AreaTrabajoCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<AreaTrabajoCreateWithoutVehiculosInput, AreaTrabajoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: AreaTrabajoCreateOrConnectWithoutVehiculosInput
    connect?: AreaTrabajoWhereUniqueInput
  }

  export type ChoferCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<ChoferCreateWithoutVehiculosInput, ChoferUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutVehiculosInput
    connect?: ChoferWhereUniqueInput
  }

  export type TarjetaCombustibleCreateNestedOneWithoutVehiculoInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutVehiculoInput
    connect?: TarjetaCombustibleWhereUniqueInput
  }

  export type TarjetaCombustibleUncheckedCreateNestedOneWithoutVehiculoInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutVehiculoInput
    connect?: TarjetaCombustibleWhereUniqueInput
  }

  export type AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput = {
    create?: XOR<AreaTrabajoCreateWithoutVehiculosInput, AreaTrabajoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: AreaTrabajoCreateOrConnectWithoutVehiculosInput
    upsert?: AreaTrabajoUpsertWithoutVehiculosInput
    connect?: AreaTrabajoWhereUniqueInput
    update?: XOR<XOR<AreaTrabajoUpdateToOneWithWhereWithoutVehiculosInput, AreaTrabajoUpdateWithoutVehiculosInput>, AreaTrabajoUncheckedUpdateWithoutVehiculosInput>
  }

  export type ChoferUpdateOneWithoutVehiculosNestedInput = {
    create?: XOR<ChoferCreateWithoutVehiculosInput, ChoferUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutVehiculosInput
    upsert?: ChoferUpsertWithoutVehiculosInput
    disconnect?: ChoferWhereInput | boolean
    delete?: ChoferWhereInput | boolean
    connect?: ChoferWhereUniqueInput
    update?: XOR<XOR<ChoferUpdateToOneWithWhereWithoutVehiculosInput, ChoferUpdateWithoutVehiculosInput>, ChoferUncheckedUpdateWithoutVehiculosInput>
  }

  export type TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutVehiculoInput
    upsert?: TarjetaCombustibleUpsertWithoutVehiculoInput
    disconnect?: TarjetaCombustibleWhereInput | boolean
    delete?: TarjetaCombustibleWhereInput | boolean
    connect?: TarjetaCombustibleWhereUniqueInput
    update?: XOR<XOR<TarjetaCombustibleUpdateToOneWithWhereWithoutVehiculoInput, TarjetaCombustibleUpdateWithoutVehiculoInput>, TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput>
  }

  export type TarjetaCombustibleUncheckedUpdateOneWithoutVehiculoNestedInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutVehiculoInput
    upsert?: TarjetaCombustibleUpsertWithoutVehiculoInput
    disconnect?: TarjetaCombustibleWhereInput | boolean
    delete?: TarjetaCombustibleWhereInput | boolean
    connect?: TarjetaCombustibleWhereUniqueInput
    update?: XOR<XOR<TarjetaCombustibleUpdateToOneWithWhereWithoutVehiculoInput, TarjetaCombustibleUpdateWithoutVehiculoInput>, TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStateFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateFilter<$PrismaModel> | $Enums.State
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.State | EnumStateFieldRefInput<$PrismaModel>
    in?: $Enums.State[]
    notIn?: $Enums.State[]
    not?: NestedEnumStateWithAggregatesFilter<$PrismaModel> | $Enums.State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStateFilter<$PrismaModel>
    _max?: NestedEnumStateFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VehiculoCreateWithoutChoferInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutChoferInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajoUuid: string
    tarjeta?: TarjetaCombustibleUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutChoferInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput>
  }

  export type VehiculoCreateManyChoferInputEnvelope = {
    data: VehiculoCreateManyChoferInput | VehiculoCreateManyChoferInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithWhereUniqueWithoutChoferInput = {
    where: VehiculoWhereUniqueInput
    update: XOR<VehiculoUpdateWithoutChoferInput, VehiculoUncheckedUpdateWithoutChoferInput>
    create: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput>
  }

  export type VehiculoUpdateWithWhereUniqueWithoutChoferInput = {
    where: VehiculoWhereUniqueInput
    data: XOR<VehiculoUpdateWithoutChoferInput, VehiculoUncheckedUpdateWithoutChoferInput>
  }

  export type VehiculoUpdateManyWithWhereWithoutChoferInput = {
    where: VehiculoScalarWhereInput
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyWithoutChoferInput>
  }

  export type VehiculoScalarWhereInput = {
    AND?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    OR?: VehiculoScalarWhereInput[]
    NOT?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    uuid?: StringFilter<"Vehiculo"> | string
    chapa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    jefe?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
  }

  export type VehiculoCreateWithoutAreaTrabajoInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutAreaTrabajoInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    choferCI?: string | null
    tarjeta?: TarjetaCombustibleUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutAreaTrabajoInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput>
  }

  export type VehiculoCreateManyAreaTrabajoInputEnvelope = {
    data: VehiculoCreateManyAreaTrabajoInput | VehiculoCreateManyAreaTrabajoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithWhereUniqueWithoutAreaTrabajoInput = {
    where: VehiculoWhereUniqueInput
    update: XOR<VehiculoUpdateWithoutAreaTrabajoInput, VehiculoUncheckedUpdateWithoutAreaTrabajoInput>
    create: XOR<VehiculoCreateWithoutAreaTrabajoInput, VehiculoUncheckedCreateWithoutAreaTrabajoInput>
  }

  export type VehiculoUpdateWithWhereUniqueWithoutAreaTrabajoInput = {
    where: VehiculoWhereUniqueInput
    data: XOR<VehiculoUpdateWithoutAreaTrabajoInput, VehiculoUncheckedUpdateWithoutAreaTrabajoInput>
  }

  export type VehiculoUpdateManyWithWhereWithoutAreaTrabajoInput = {
    where: VehiculoScalarWhereInput
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyWithoutAreaTrabajoInput>
  }

  export type VehiculoCreateWithoutTarjetaInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
  }

  export type VehiculoUncheckedCreateWithoutTarjetaInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajoUuid: string
    choferCI?: string | null
  }

  export type VehiculoCreateOrConnectWithoutTarjetaInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
  }

  export type VehiculoUpsertWithoutTarjetaInput = {
    update: XOR<VehiculoUpdateWithoutTarjetaInput, VehiculoUncheckedUpdateWithoutTarjetaInput>
    create: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutTarjetaInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutTarjetaInput, VehiculoUncheckedUpdateWithoutTarjetaInput>
  }

  export type VehiculoUpdateWithoutTarjetaInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutTarjetaInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaTrabajoCreateWithoutVehiculosInput = {
    uuid?: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable?: boolean
  }

  export type AreaTrabajoUncheckedCreateWithoutVehiculosInput = {
    uuid?: string
    nombre: string
    centro_costo: string
    jefe: string
    isAvailable?: boolean
  }

  export type AreaTrabajoCreateOrConnectWithoutVehiculosInput = {
    where: AreaTrabajoWhereUniqueInput
    create: XOR<AreaTrabajoCreateWithoutVehiculosInput, AreaTrabajoUncheckedCreateWithoutVehiculosInput>
  }

  export type ChoferCreateWithoutVehiculosInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
  }

  export type ChoferUncheckedCreateWithoutVehiculosInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
  }

  export type ChoferCreateOrConnectWithoutVehiculosInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutVehiculosInput, ChoferUncheckedCreateWithoutVehiculosInput>
  }

  export type TarjetaCombustibleCreateWithoutVehiculoInput = {
    uuid?: string
    numero: string
    pin: number
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    isAvailable?: boolean
  }

  export type TarjetaCombustibleUncheckedCreateWithoutVehiculoInput = {
    uuid?: string
    numero: string
    pin: number
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    isAvailable?: boolean
  }

  export type TarjetaCombustibleCreateOrConnectWithoutVehiculoInput = {
    where: TarjetaCombustibleWhereUniqueInput
    create: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
  }

  export type AreaTrabajoUpsertWithoutVehiculosInput = {
    update: XOR<AreaTrabajoUpdateWithoutVehiculosInput, AreaTrabajoUncheckedUpdateWithoutVehiculosInput>
    create: XOR<AreaTrabajoCreateWithoutVehiculosInput, AreaTrabajoUncheckedCreateWithoutVehiculosInput>
    where?: AreaTrabajoWhereInput
  }

  export type AreaTrabajoUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: AreaTrabajoWhereInput
    data: XOR<AreaTrabajoUpdateWithoutVehiculosInput, AreaTrabajoUncheckedUpdateWithoutVehiculosInput>
  }

  export type AreaTrabajoUpdateWithoutVehiculosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AreaTrabajoUncheckedUpdateWithoutVehiculosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    centro_costo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoferUpsertWithoutVehiculosInput = {
    update: XOR<ChoferUpdateWithoutVehiculosInput, ChoferUncheckedUpdateWithoutVehiculosInput>
    create: XOR<ChoferCreateWithoutVehiculosInput, ChoferUncheckedCreateWithoutVehiculosInput>
    where?: ChoferWhereInput
  }

  export type ChoferUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: ChoferWhereInput
    data: XOR<ChoferUpdateWithoutVehiculosInput, ChoferUncheckedUpdateWithoutVehiculosInput>
  }

  export type ChoferUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChoferUncheckedUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarjetaCombustibleUpsertWithoutVehiculoInput = {
    update: XOR<TarjetaCombustibleUpdateWithoutVehiculoInput, TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput>
    create: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
    where?: TarjetaCombustibleWhereInput
  }

  export type TarjetaCombustibleUpdateToOneWithWhereWithoutVehiculoInput = {
    where?: TarjetaCombustibleWhereInput
    data: XOR<TarjetaCombustibleUpdateWithoutVehiculoInput, TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput>
  }

  export type TarjetaCombustibleUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    pin?: IntFieldUpdateOperationsInput | number
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculoCreateManyChoferInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    areaTrabajoUuid: string
  }

  export type VehiculoUpdateWithoutChoferInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutChoferInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    tarjeta?: TarjetaCombustibleUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutChoferInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculoCreateManyAreaTrabajoInput = {
    uuid?: string
    chapa: string
    marca: string
    tipo: string
    jefe: string
    isAvailable?: boolean
    choferCI?: string | null
  }

  export type VehiculoUpdateWithoutAreaTrabajoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutAreaTrabajoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjeta?: TarjetaCombustibleUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutAreaTrabajoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    jefe?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
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