
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
 * Model ControlCargas
 * 
 */
export type ControlCargas = $Result.DefaultSelection<Prisma.$ControlCargasPayload>
/**
 * Model TarjetaCombustibleBaja
 * 
 */
export type TarjetaCombustibleBaja = $Result.DefaultSelection<Prisma.$TarjetaCombustibleBajaPayload>
/**
 * Model ChoferesDespedidos
 * 
 */
export type ChoferesDespedidos = $Result.DefaultSelection<Prisma.$ChoferesDespedidosPayload>
/**
 * Model VehiculosMantenimiento
 * 
 */
export type VehiculosMantenimiento = $Result.DefaultSelection<Prisma.$VehiculosMantenimientoPayload>
/**
 * Model VehiculosBaja
 * 
 */
export type VehiculosBaja = $Result.DefaultSelection<Prisma.$VehiculosBajaPayload>
/**
 * Model ViajesVehiculos
 * 
 */
export type ViajesVehiculos = $Result.DefaultSelection<Prisma.$ViajesVehiculosPayload>

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


export const TipoCombustible: {
  Diesel: 'Diesel',
  Especial: 'Especial',
  B91: 'B91',
  B83: 'B83'
};

export type TipoCombustible = (typeof TipoCombustible)[keyof typeof TipoCombustible]


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

export type TipoCombustible = $Enums.TipoCombustible

export const TipoCombustible: typeof $Enums.TipoCombustible

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

  /**
   * `prisma.controlCargas`: Exposes CRUD operations for the **ControlCargas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ControlCargases
    * const controlCargases = await prisma.controlCargas.findMany()
    * ```
    */
  get controlCargas(): Prisma.ControlCargasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarjetaCombustibleBaja`: Exposes CRUD operations for the **TarjetaCombustibleBaja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TarjetaCombustibleBajas
    * const tarjetaCombustibleBajas = await prisma.tarjetaCombustibleBaja.findMany()
    * ```
    */
  get tarjetaCombustibleBaja(): Prisma.TarjetaCombustibleBajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choferesDespedidos`: Exposes CRUD operations for the **ChoferesDespedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChoferesDespedidos
    * const choferesDespedidos = await prisma.choferesDespedidos.findMany()
    * ```
    */
  get choferesDespedidos(): Prisma.ChoferesDespedidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculosMantenimiento`: Exposes CRUD operations for the **VehiculosMantenimiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehiculosMantenimientos
    * const vehiculosMantenimientos = await prisma.vehiculosMantenimiento.findMany()
    * ```
    */
  get vehiculosMantenimiento(): Prisma.VehiculosMantenimientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculosBaja`: Exposes CRUD operations for the **VehiculosBaja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehiculosBajas
    * const vehiculosBajas = await prisma.vehiculosBaja.findMany()
    * ```
    */
  get vehiculosBaja(): Prisma.VehiculosBajaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viajesVehiculos`: Exposes CRUD operations for the **ViajesVehiculos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViajesVehiculos
    * const viajesVehiculos = await prisma.viajesVehiculos.findMany()
    * ```
    */
  get viajesVehiculos(): Prisma.ViajesVehiculosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Vehiculo: 'Vehiculo',
    ControlCargas: 'ControlCargas',
    TarjetaCombustibleBaja: 'TarjetaCombustibleBaja',
    ChoferesDespedidos: 'ChoferesDespedidos',
    VehiculosMantenimiento: 'VehiculosMantenimiento',
    VehiculosBaja: 'VehiculosBaja',
    ViajesVehiculos: 'ViajesVehiculos'
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
      modelProps: "user" | "chofer" | "areaTrabajo" | "tarjetaCombustible" | "vehiculo" | "controlCargas" | "tarjetaCombustibleBaja" | "choferesDespedidos" | "vehiculosMantenimiento" | "vehiculosBaja" | "viajesVehiculos"
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
      ControlCargas: {
        payload: Prisma.$ControlCargasPayload<ExtArgs>
        fields: Prisma.ControlCargasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ControlCargasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ControlCargasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          findFirst: {
            args: Prisma.ControlCargasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ControlCargasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          findMany: {
            args: Prisma.ControlCargasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>[]
          }
          create: {
            args: Prisma.ControlCargasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          createMany: {
            args: Prisma.ControlCargasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ControlCargasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          update: {
            args: Prisma.ControlCargasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          deleteMany: {
            args: Prisma.ControlCargasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ControlCargasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ControlCargasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ControlCargasPayload>
          }
          aggregate: {
            args: Prisma.ControlCargasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateControlCargas>
          }
          groupBy: {
            args: Prisma.ControlCargasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ControlCargasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ControlCargasCountArgs<ExtArgs>
            result: $Utils.Optional<ControlCargasCountAggregateOutputType> | number
          }
        }
      }
      TarjetaCombustibleBaja: {
        payload: Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>
        fields: Prisma.TarjetaCombustibleBajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarjetaCombustibleBajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarjetaCombustibleBajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          findFirst: {
            args: Prisma.TarjetaCombustibleBajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarjetaCombustibleBajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          findMany: {
            args: Prisma.TarjetaCombustibleBajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>[]
          }
          create: {
            args: Prisma.TarjetaCombustibleBajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          createMany: {
            args: Prisma.TarjetaCombustibleBajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TarjetaCombustibleBajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          update: {
            args: Prisma.TarjetaCombustibleBajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          deleteMany: {
            args: Prisma.TarjetaCombustibleBajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarjetaCombustibleBajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TarjetaCombustibleBajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarjetaCombustibleBajaPayload>
          }
          aggregate: {
            args: Prisma.TarjetaCombustibleBajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarjetaCombustibleBaja>
          }
          groupBy: {
            args: Prisma.TarjetaCombustibleBajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarjetaCombustibleBajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarjetaCombustibleBajaCountArgs<ExtArgs>
            result: $Utils.Optional<TarjetaCombustibleBajaCountAggregateOutputType> | number
          }
        }
      }
      ChoferesDespedidos: {
        payload: Prisma.$ChoferesDespedidosPayload<ExtArgs>
        fields: Prisma.ChoferesDespedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoferesDespedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoferesDespedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          findFirst: {
            args: Prisma.ChoferesDespedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoferesDespedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          findMany: {
            args: Prisma.ChoferesDespedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>[]
          }
          create: {
            args: Prisma.ChoferesDespedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          createMany: {
            args: Prisma.ChoferesDespedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChoferesDespedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          update: {
            args: Prisma.ChoferesDespedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          deleteMany: {
            args: Prisma.ChoferesDespedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoferesDespedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoferesDespedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoferesDespedidosPayload>
          }
          aggregate: {
            args: Prisma.ChoferesDespedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoferesDespedidos>
          }
          groupBy: {
            args: Prisma.ChoferesDespedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoferesDespedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoferesDespedidosCountArgs<ExtArgs>
            result: $Utils.Optional<ChoferesDespedidosCountAggregateOutputType> | number
          }
        }
      }
      VehiculosMantenimiento: {
        payload: Prisma.$VehiculosMantenimientoPayload<ExtArgs>
        fields: Prisma.VehiculosMantenimientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculosMantenimientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculosMantenimientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          findFirst: {
            args: Prisma.VehiculosMantenimientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculosMantenimientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          findMany: {
            args: Prisma.VehiculosMantenimientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>[]
          }
          create: {
            args: Prisma.VehiculosMantenimientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          createMany: {
            args: Prisma.VehiculosMantenimientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehiculosMantenimientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          update: {
            args: Prisma.VehiculosMantenimientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculosMantenimientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculosMantenimientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehiculosMantenimientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosMantenimientoPayload>
          }
          aggregate: {
            args: Prisma.VehiculosMantenimientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculosMantenimiento>
          }
          groupBy: {
            args: Prisma.VehiculosMantenimientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculosMantenimientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculosMantenimientoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculosMantenimientoCountAggregateOutputType> | number
          }
        }
      }
      VehiculosBaja: {
        payload: Prisma.$VehiculosBajaPayload<ExtArgs>
        fields: Prisma.VehiculosBajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculosBajaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculosBajaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          findFirst: {
            args: Prisma.VehiculosBajaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculosBajaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          findMany: {
            args: Prisma.VehiculosBajaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>[]
          }
          create: {
            args: Prisma.VehiculosBajaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          createMany: {
            args: Prisma.VehiculosBajaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehiculosBajaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          update: {
            args: Prisma.VehiculosBajaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          deleteMany: {
            args: Prisma.VehiculosBajaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculosBajaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehiculosBajaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculosBajaPayload>
          }
          aggregate: {
            args: Prisma.VehiculosBajaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculosBaja>
          }
          groupBy: {
            args: Prisma.VehiculosBajaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculosBajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculosBajaCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculosBajaCountAggregateOutputType> | number
          }
        }
      }
      ViajesVehiculos: {
        payload: Prisma.$ViajesVehiculosPayload<ExtArgs>
        fields: Prisma.ViajesVehiculosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajesVehiculosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajesVehiculosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          findFirst: {
            args: Prisma.ViajesVehiculosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajesVehiculosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          findMany: {
            args: Prisma.ViajesVehiculosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>[]
          }
          create: {
            args: Prisma.ViajesVehiculosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          createMany: {
            args: Prisma.ViajesVehiculosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViajesVehiculosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          update: {
            args: Prisma.ViajesVehiculosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          deleteMany: {
            args: Prisma.ViajesVehiculosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajesVehiculosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViajesVehiculosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajesVehiculosPayload>
          }
          aggregate: {
            args: Prisma.ViajesVehiculosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViajesVehiculos>
          }
          groupBy: {
            args: Prisma.ViajesVehiculosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajesVehiculosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajesVehiculosCountArgs<ExtArgs>
            result: $Utils.Optional<ViajesVehiculosCountAggregateOutputType> | number
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
    controlCargas?: ControlCargasOmit
    tarjetaCombustibleBaja?: TarjetaCombustibleBajaOmit
    choferesDespedidos?: ChoferesDespedidosOmit
    vehiculosMantenimiento?: VehiculosMantenimientoOmit
    vehiculosBaja?: VehiculosBajaOmit
    viajesVehiculos?: ViajesVehiculosOmit
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
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    cargas: number
    viajes: number
    mantenimientos: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargas?: boolean | VehiculoCountOutputTypeCountCargasArgs
    viajes?: boolean | VehiculoCountOutputTypeCountViajesArgs
    mantenimientos?: boolean | VehiculoCountOutputTypeCountMantenimientosArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountCargasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlCargasWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajesVehiculosWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountMantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculosMantenimientoWhereInput
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
    despido?: boolean | Chofer$despidoArgs<ExtArgs>
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
    despido?: boolean | Chofer$despidoArgs<ExtArgs>
    _count?: boolean | ChoferCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChoferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chofer"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
      despido: Prisma.$ChoferesDespedidosPayload<ExtArgs> | null
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
    despido<T extends Chofer$despidoArgs<ExtArgs> = {}>(args?: Subset<T, Chofer$despidoArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Chofer.despido
   */
  export type Chofer$despidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    where?: ChoferesDespedidosWhereInput
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
    saldo: number | null
  }

  export type TarjetaCombustibleSumAggregateOutputType = {
    saldo: number | null
  }

  export type TarjetaCombustibleMinAggregateOutputType = {
    numero: string | null
    pin: string | null
    estado: $Enums.State | null
    fecha_vencimiento: Date | null
    tipo: $Enums.TipoCombustible | null
    saldo: number | null
    isAvailable: boolean | null
  }

  export type TarjetaCombustibleMaxAggregateOutputType = {
    numero: string | null
    pin: string | null
    estado: $Enums.State | null
    fecha_vencimiento: Date | null
    tipo: $Enums.TipoCombustible | null
    saldo: number | null
    isAvailable: boolean | null
  }

  export type TarjetaCombustibleCountAggregateOutputType = {
    numero: number
    pin: number
    estado: number
    fecha_vencimiento: number
    tipo: number
    saldo: number
    isAvailable: number
    _all: number
  }


  export type TarjetaCombustibleAvgAggregateInputType = {
    saldo?: true
  }

  export type TarjetaCombustibleSumAggregateInputType = {
    saldo?: true
  }

  export type TarjetaCombustibleMinAggregateInputType = {
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    tipo?: true
    saldo?: true
    isAvailable?: true
  }

  export type TarjetaCombustibleMaxAggregateInputType = {
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    tipo?: true
    saldo?: true
    isAvailable?: true
  }

  export type TarjetaCombustibleCountAggregateInputType = {
    numero?: true
    pin?: true
    estado?: true
    fecha_vencimiento?: true
    tipo?: true
    saldo?: true
    isAvailable?: true
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
    numero: string
    pin: string
    estado: $Enums.State
    fecha_vencimiento: Date
    tipo: $Enums.TipoCombustible
    saldo: number
    isAvailable: boolean
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
    numero?: boolean
    pin?: boolean
    estado?: boolean
    fecha_vencimiento?: boolean
    tipo?: boolean
    saldo?: boolean
    isAvailable?: boolean
    baja?: boolean | TarjetaCombustible$bajaArgs<ExtArgs>
    vehiculo?: boolean | TarjetaCombustible$vehiculoArgs<ExtArgs>
  }, ExtArgs["result"]["tarjetaCombustible"]>



  export type TarjetaCombustibleSelectScalar = {
    numero?: boolean
    pin?: boolean
    estado?: boolean
    fecha_vencimiento?: boolean
    tipo?: boolean
    saldo?: boolean
    isAvailable?: boolean
  }

  export type TarjetaCombustibleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"numero" | "pin" | "estado" | "fecha_vencimiento" | "tipo" | "saldo" | "isAvailable", ExtArgs["result"]["tarjetaCombustible"]>
  export type TarjetaCombustibleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baja?: boolean | TarjetaCombustible$bajaArgs<ExtArgs>
    vehiculo?: boolean | TarjetaCombustible$vehiculoArgs<ExtArgs>
  }

  export type $TarjetaCombustiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TarjetaCombustible"
    objects: {
      baja: Prisma.$TarjetaCombustibleBajaPayload<ExtArgs> | null
      vehiculo: Prisma.$VehiculoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      numero: string
      pin: string
      estado: $Enums.State
      fecha_vencimiento: Date
      tipo: $Enums.TipoCombustible
      saldo: number
      isAvailable: boolean
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
     * // Only select the `numero`
     * const tarjetaCombustibleWithNumeroOnly = await prisma.tarjetaCombustible.findMany({ select: { numero: true } })
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
    baja<T extends TarjetaCombustible$bajaArgs<ExtArgs> = {}>(args?: Subset<T, TarjetaCombustible$bajaArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly numero: FieldRef<"TarjetaCombustible", 'String'>
    readonly pin: FieldRef<"TarjetaCombustible", 'String'>
    readonly estado: FieldRef<"TarjetaCombustible", 'State'>
    readonly fecha_vencimiento: FieldRef<"TarjetaCombustible", 'DateTime'>
    readonly tipo: FieldRef<"TarjetaCombustible", 'TipoCombustible'>
    readonly saldo: FieldRef<"TarjetaCombustible", 'Int'>
    readonly isAvailable: FieldRef<"TarjetaCombustible", 'Boolean'>
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
   * TarjetaCombustible.baja
   */
  export type TarjetaCombustible$bajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    where?: TarjetaCombustibleBajaWhereInput
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
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    consumo_km: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    consumo_km: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    chapa: string | null
    marca: string | null
    tipo: string | null
    isAvailable: boolean | null
    consumo_km: number | null
    areaTrabajoUuid: string | null
    choferCI: string | null
    tarjetaNumero: string | null
  }

  export type VehiculoMaxAggregateOutputType = {
    chapa: string | null
    marca: string | null
    tipo: string | null
    isAvailable: boolean | null
    consumo_km: number | null
    areaTrabajoUuid: string | null
    choferCI: string | null
    tarjetaNumero: string | null
  }

  export type VehiculoCountAggregateOutputType = {
    chapa: number
    marca: number
    tipo: number
    isAvailable: number
    consumo_km: number
    areaTrabajoUuid: number
    choferCI: number
    tarjetaNumero: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    consumo_km?: true
  }

  export type VehiculoSumAggregateInputType = {
    consumo_km?: true
  }

  export type VehiculoMinAggregateInputType = {
    chapa?: true
    marca?: true
    tipo?: true
    isAvailable?: true
    consumo_km?: true
    areaTrabajoUuid?: true
    choferCI?: true
    tarjetaNumero?: true
  }

  export type VehiculoMaxAggregateInputType = {
    chapa?: true
    marca?: true
    tipo?: true
    isAvailable?: true
    consumo_km?: true
    areaTrabajoUuid?: true
    choferCI?: true
    tarjetaNumero?: true
  }

  export type VehiculoCountAggregateInputType = {
    chapa?: true
    marca?: true
    tipo?: true
    isAvailable?: true
    consumo_km?: true
    areaTrabajoUuid?: true
    choferCI?: true
    tarjetaNumero?: true
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
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
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
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    chapa: string
    marca: string
    tipo: string
    isAvailable: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI: string | null
    tarjetaNumero: string | null
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
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
    chapa?: boolean
    marca?: boolean
    tipo?: boolean
    isAvailable?: boolean
    consumo_km?: boolean
    areaTrabajoUuid?: boolean
    choferCI?: boolean
    tarjetaNumero?: boolean
    cargas?: boolean | Vehiculo$cargasArgs<ExtArgs>
    viajes?: boolean | Vehiculo$viajesArgs<ExtArgs>
    mantenimientos?: boolean | Vehiculo$mantenimientosArgs<ExtArgs>
    baja?: boolean | Vehiculo$bajaArgs<ExtArgs>
    areaTrabajo?: boolean | AreaTrabajoDefaultArgs<ExtArgs>
    chofer?: boolean | Vehiculo$choferArgs<ExtArgs>
    tarjeta?: boolean | Vehiculo$tarjetaArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>



  export type VehiculoSelectScalar = {
    chapa?: boolean
    marca?: boolean
    tipo?: boolean
    isAvailable?: boolean
    consumo_km?: boolean
    areaTrabajoUuid?: boolean
    choferCI?: boolean
    tarjetaNumero?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chapa" | "marca" | "tipo" | "isAvailable" | "consumo_km" | "areaTrabajoUuid" | "choferCI" | "tarjetaNumero", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargas?: boolean | Vehiculo$cargasArgs<ExtArgs>
    viajes?: boolean | Vehiculo$viajesArgs<ExtArgs>
    mantenimientos?: boolean | Vehiculo$mantenimientosArgs<ExtArgs>
    baja?: boolean | Vehiculo$bajaArgs<ExtArgs>
    areaTrabajo?: boolean | AreaTrabajoDefaultArgs<ExtArgs>
    chofer?: boolean | Vehiculo$choferArgs<ExtArgs>
    tarjeta?: boolean | Vehiculo$tarjetaArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      cargas: Prisma.$ControlCargasPayload<ExtArgs>[]
      viajes: Prisma.$ViajesVehiculosPayload<ExtArgs>[]
      mantenimientos: Prisma.$VehiculosMantenimientoPayload<ExtArgs>[]
      baja: Prisma.$VehiculosBajaPayload<ExtArgs> | null
      areaTrabajo: Prisma.$AreaTrabajoPayload<ExtArgs>
      chofer: Prisma.$ChoferPayload<ExtArgs> | null
      tarjeta: Prisma.$TarjetaCombustiblePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      chapa: string
      marca: string
      tipo: string
      isAvailable: boolean
      consumo_km: number
      areaTrabajoUuid: string
      choferCI: string | null
      tarjetaNumero: string | null
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
     * // Only select the `chapa`
     * const vehiculoWithChapaOnly = await prisma.vehiculo.findMany({ select: { chapa: true } })
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
    cargas<T extends Vehiculo$cargasArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$cargasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viajes<T extends Vehiculo$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mantenimientos<T extends Vehiculo$mantenimientosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$mantenimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    baja<T extends Vehiculo$bajaArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$bajaArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly chapa: FieldRef<"Vehiculo", 'String'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly tipo: FieldRef<"Vehiculo", 'String'>
    readonly isAvailable: FieldRef<"Vehiculo", 'Boolean'>
    readonly consumo_km: FieldRef<"Vehiculo", 'Int'>
    readonly areaTrabajoUuid: FieldRef<"Vehiculo", 'String'>
    readonly choferCI: FieldRef<"Vehiculo", 'String'>
    readonly tarjetaNumero: FieldRef<"Vehiculo", 'String'>
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
   * Vehiculo.cargas
   */
  export type Vehiculo$cargasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    where?: ControlCargasWhereInput
    orderBy?: ControlCargasOrderByWithRelationInput | ControlCargasOrderByWithRelationInput[]
    cursor?: ControlCargasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ControlCargasScalarFieldEnum | ControlCargasScalarFieldEnum[]
  }

  /**
   * Vehiculo.viajes
   */
  export type Vehiculo$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    where?: ViajesVehiculosWhereInput
    orderBy?: ViajesVehiculosOrderByWithRelationInput | ViajesVehiculosOrderByWithRelationInput[]
    cursor?: ViajesVehiculosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajesVehiculosScalarFieldEnum | ViajesVehiculosScalarFieldEnum[]
  }

  /**
   * Vehiculo.mantenimientos
   */
  export type Vehiculo$mantenimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    where?: VehiculosMantenimientoWhereInput
    orderBy?: VehiculosMantenimientoOrderByWithRelationInput | VehiculosMantenimientoOrderByWithRelationInput[]
    cursor?: VehiculosMantenimientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculosMantenimientoScalarFieldEnum | VehiculosMantenimientoScalarFieldEnum[]
  }

  /**
   * Vehiculo.baja
   */
  export type Vehiculo$bajaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    where?: VehiculosBajaWhereInput
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
   * Model ControlCargas
   */

  export type AggregateControlCargas = {
    _count: ControlCargasCountAggregateOutputType | null
    _avg: ControlCargasAvgAggregateOutputType | null
    _sum: ControlCargasSumAggregateOutputType | null
    _min: ControlCargasMinAggregateOutputType | null
    _max: ControlCargasMaxAggregateOutputType | null
  }

  export type ControlCargasAvgAggregateOutputType = {
    existencia: number | null
    importe: number | null
    consumo_dinero: number | null
  }

  export type ControlCargasSumAggregateOutputType = {
    existencia: number | null
    importe: number | null
    consumo_dinero: number | null
  }

  export type ControlCargasMinAggregateOutputType = {
    uuid: string | null
    folio: string | null
    comprobante: string | null
    fecha: Date | null
    existencia: number | null
    importe: number | null
    consumo_dinero: number | null
    vehiculoChapa: string | null
  }

  export type ControlCargasMaxAggregateOutputType = {
    uuid: string | null
    folio: string | null
    comprobante: string | null
    fecha: Date | null
    existencia: number | null
    importe: number | null
    consumo_dinero: number | null
    vehiculoChapa: string | null
  }

  export type ControlCargasCountAggregateOutputType = {
    uuid: number
    folio: number
    comprobante: number
    fecha: number
    existencia: number
    importe: number
    consumo_dinero: number
    vehiculoChapa: number
    _all: number
  }


  export type ControlCargasAvgAggregateInputType = {
    existencia?: true
    importe?: true
    consumo_dinero?: true
  }

  export type ControlCargasSumAggregateInputType = {
    existencia?: true
    importe?: true
    consumo_dinero?: true
  }

  export type ControlCargasMinAggregateInputType = {
    uuid?: true
    folio?: true
    comprobante?: true
    fecha?: true
    existencia?: true
    importe?: true
    consumo_dinero?: true
    vehiculoChapa?: true
  }

  export type ControlCargasMaxAggregateInputType = {
    uuid?: true
    folio?: true
    comprobante?: true
    fecha?: true
    existencia?: true
    importe?: true
    consumo_dinero?: true
    vehiculoChapa?: true
  }

  export type ControlCargasCountAggregateInputType = {
    uuid?: true
    folio?: true
    comprobante?: true
    fecha?: true
    existencia?: true
    importe?: true
    consumo_dinero?: true
    vehiculoChapa?: true
    _all?: true
  }

  export type ControlCargasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlCargas to aggregate.
     */
    where?: ControlCargasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlCargases to fetch.
     */
    orderBy?: ControlCargasOrderByWithRelationInput | ControlCargasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ControlCargasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlCargases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlCargases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ControlCargases
    **/
    _count?: true | ControlCargasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ControlCargasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ControlCargasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ControlCargasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ControlCargasMaxAggregateInputType
  }

  export type GetControlCargasAggregateType<T extends ControlCargasAggregateArgs> = {
        [P in keyof T & keyof AggregateControlCargas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControlCargas[P]>
      : GetScalarType<T[P], AggregateControlCargas[P]>
  }




  export type ControlCargasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ControlCargasWhereInput
    orderBy?: ControlCargasOrderByWithAggregationInput | ControlCargasOrderByWithAggregationInput[]
    by: ControlCargasScalarFieldEnum[] | ControlCargasScalarFieldEnum
    having?: ControlCargasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ControlCargasCountAggregateInputType | true
    _avg?: ControlCargasAvgAggregateInputType
    _sum?: ControlCargasSumAggregateInputType
    _min?: ControlCargasMinAggregateInputType
    _max?: ControlCargasMaxAggregateInputType
  }

  export type ControlCargasGroupByOutputType = {
    uuid: string
    folio: string
    comprobante: string
    fecha: Date
    existencia: number
    importe: number
    consumo_dinero: number
    vehiculoChapa: string
    _count: ControlCargasCountAggregateOutputType | null
    _avg: ControlCargasAvgAggregateOutputType | null
    _sum: ControlCargasSumAggregateOutputType | null
    _min: ControlCargasMinAggregateOutputType | null
    _max: ControlCargasMaxAggregateOutputType | null
  }

  type GetControlCargasGroupByPayload<T extends ControlCargasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ControlCargasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ControlCargasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ControlCargasGroupByOutputType[P]>
            : GetScalarType<T[P], ControlCargasGroupByOutputType[P]>
        }
      >
    >


  export type ControlCargasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    folio?: boolean
    comprobante?: boolean
    fecha?: boolean
    existencia?: boolean
    importe?: boolean
    consumo_dinero?: boolean
    vehiculoChapa?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controlCargas"]>



  export type ControlCargasSelectScalar = {
    uuid?: boolean
    folio?: boolean
    comprobante?: boolean
    fecha?: boolean
    existencia?: boolean
    importe?: boolean
    consumo_dinero?: boolean
    vehiculoChapa?: boolean
  }

  export type ControlCargasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "folio" | "comprobante" | "fecha" | "existencia" | "importe" | "consumo_dinero" | "vehiculoChapa", ExtArgs["result"]["controlCargas"]>
  export type ControlCargasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $ControlCargasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ControlCargas"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      folio: string
      comprobante: string
      fecha: Date
      existencia: number
      importe: number
      consumo_dinero: number
      vehiculoChapa: string
    }, ExtArgs["result"]["controlCargas"]>
    composites: {}
  }

  type ControlCargasGetPayload<S extends boolean | null | undefined | ControlCargasDefaultArgs> = $Result.GetResult<Prisma.$ControlCargasPayload, S>

  type ControlCargasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ControlCargasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ControlCargasCountAggregateInputType | true
    }

  export interface ControlCargasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ControlCargas'], meta: { name: 'ControlCargas' } }
    /**
     * Find zero or one ControlCargas that matches the filter.
     * @param {ControlCargasFindUniqueArgs} args - Arguments to find a ControlCargas
     * @example
     * // Get one ControlCargas
     * const controlCargas = await prisma.controlCargas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ControlCargasFindUniqueArgs>(args: SelectSubset<T, ControlCargasFindUniqueArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ControlCargas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ControlCargasFindUniqueOrThrowArgs} args - Arguments to find a ControlCargas
     * @example
     * // Get one ControlCargas
     * const controlCargas = await prisma.controlCargas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ControlCargasFindUniqueOrThrowArgs>(args: SelectSubset<T, ControlCargasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ControlCargas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasFindFirstArgs} args - Arguments to find a ControlCargas
     * @example
     * // Get one ControlCargas
     * const controlCargas = await prisma.controlCargas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ControlCargasFindFirstArgs>(args?: SelectSubset<T, ControlCargasFindFirstArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ControlCargas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasFindFirstOrThrowArgs} args - Arguments to find a ControlCargas
     * @example
     * // Get one ControlCargas
     * const controlCargas = await prisma.controlCargas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ControlCargasFindFirstOrThrowArgs>(args?: SelectSubset<T, ControlCargasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ControlCargases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ControlCargases
     * const controlCargases = await prisma.controlCargas.findMany()
     * 
     * // Get first 10 ControlCargases
     * const controlCargases = await prisma.controlCargas.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const controlCargasWithUuidOnly = await prisma.controlCargas.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends ControlCargasFindManyArgs>(args?: SelectSubset<T, ControlCargasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ControlCargas.
     * @param {ControlCargasCreateArgs} args - Arguments to create a ControlCargas.
     * @example
     * // Create one ControlCargas
     * const ControlCargas = await prisma.controlCargas.create({
     *   data: {
     *     // ... data to create a ControlCargas
     *   }
     * })
     * 
     */
    create<T extends ControlCargasCreateArgs>(args: SelectSubset<T, ControlCargasCreateArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ControlCargases.
     * @param {ControlCargasCreateManyArgs} args - Arguments to create many ControlCargases.
     * @example
     * // Create many ControlCargases
     * const controlCargas = await prisma.controlCargas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ControlCargasCreateManyArgs>(args?: SelectSubset<T, ControlCargasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ControlCargas.
     * @param {ControlCargasDeleteArgs} args - Arguments to delete one ControlCargas.
     * @example
     * // Delete one ControlCargas
     * const ControlCargas = await prisma.controlCargas.delete({
     *   where: {
     *     // ... filter to delete one ControlCargas
     *   }
     * })
     * 
     */
    delete<T extends ControlCargasDeleteArgs>(args: SelectSubset<T, ControlCargasDeleteArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ControlCargas.
     * @param {ControlCargasUpdateArgs} args - Arguments to update one ControlCargas.
     * @example
     * // Update one ControlCargas
     * const controlCargas = await prisma.controlCargas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ControlCargasUpdateArgs>(args: SelectSubset<T, ControlCargasUpdateArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ControlCargases.
     * @param {ControlCargasDeleteManyArgs} args - Arguments to filter ControlCargases to delete.
     * @example
     * // Delete a few ControlCargases
     * const { count } = await prisma.controlCargas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ControlCargasDeleteManyArgs>(args?: SelectSubset<T, ControlCargasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ControlCargases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ControlCargases
     * const controlCargas = await prisma.controlCargas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ControlCargasUpdateManyArgs>(args: SelectSubset<T, ControlCargasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ControlCargas.
     * @param {ControlCargasUpsertArgs} args - Arguments to update or create a ControlCargas.
     * @example
     * // Update or create a ControlCargas
     * const controlCargas = await prisma.controlCargas.upsert({
     *   create: {
     *     // ... data to create a ControlCargas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ControlCargas we want to update
     *   }
     * })
     */
    upsert<T extends ControlCargasUpsertArgs>(args: SelectSubset<T, ControlCargasUpsertArgs<ExtArgs>>): Prisma__ControlCargasClient<$Result.GetResult<Prisma.$ControlCargasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ControlCargases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasCountArgs} args - Arguments to filter ControlCargases to count.
     * @example
     * // Count the number of ControlCargases
     * const count = await prisma.controlCargas.count({
     *   where: {
     *     // ... the filter for the ControlCargases we want to count
     *   }
     * })
    **/
    count<T extends ControlCargasCountArgs>(
      args?: Subset<T, ControlCargasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ControlCargasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ControlCargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ControlCargasAggregateArgs>(args: Subset<T, ControlCargasAggregateArgs>): Prisma.PrismaPromise<GetControlCargasAggregateType<T>>

    /**
     * Group by ControlCargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ControlCargasGroupByArgs} args - Group by arguments.
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
      T extends ControlCargasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ControlCargasGroupByArgs['orderBy'] }
        : { orderBy?: ControlCargasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ControlCargasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControlCargasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ControlCargas model
   */
  readonly fields: ControlCargasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ControlCargas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ControlCargasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ControlCargas model
   */
  interface ControlCargasFieldRefs {
    readonly uuid: FieldRef<"ControlCargas", 'String'>
    readonly folio: FieldRef<"ControlCargas", 'String'>
    readonly comprobante: FieldRef<"ControlCargas", 'String'>
    readonly fecha: FieldRef<"ControlCargas", 'DateTime'>
    readonly existencia: FieldRef<"ControlCargas", 'Int'>
    readonly importe: FieldRef<"ControlCargas", 'Int'>
    readonly consumo_dinero: FieldRef<"ControlCargas", 'Int'>
    readonly vehiculoChapa: FieldRef<"ControlCargas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ControlCargas findUnique
   */
  export type ControlCargasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter, which ControlCargas to fetch.
     */
    where: ControlCargasWhereUniqueInput
  }

  /**
   * ControlCargas findUniqueOrThrow
   */
  export type ControlCargasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter, which ControlCargas to fetch.
     */
    where: ControlCargasWhereUniqueInput
  }

  /**
   * ControlCargas findFirst
   */
  export type ControlCargasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter, which ControlCargas to fetch.
     */
    where?: ControlCargasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlCargases to fetch.
     */
    orderBy?: ControlCargasOrderByWithRelationInput | ControlCargasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlCargases.
     */
    cursor?: ControlCargasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlCargases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlCargases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlCargases.
     */
    distinct?: ControlCargasScalarFieldEnum | ControlCargasScalarFieldEnum[]
  }

  /**
   * ControlCargas findFirstOrThrow
   */
  export type ControlCargasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter, which ControlCargas to fetch.
     */
    where?: ControlCargasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlCargases to fetch.
     */
    orderBy?: ControlCargasOrderByWithRelationInput | ControlCargasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ControlCargases.
     */
    cursor?: ControlCargasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlCargases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlCargases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ControlCargases.
     */
    distinct?: ControlCargasScalarFieldEnum | ControlCargasScalarFieldEnum[]
  }

  /**
   * ControlCargas findMany
   */
  export type ControlCargasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter, which ControlCargases to fetch.
     */
    where?: ControlCargasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ControlCargases to fetch.
     */
    orderBy?: ControlCargasOrderByWithRelationInput | ControlCargasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ControlCargases.
     */
    cursor?: ControlCargasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ControlCargases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ControlCargases.
     */
    skip?: number
    distinct?: ControlCargasScalarFieldEnum | ControlCargasScalarFieldEnum[]
  }

  /**
   * ControlCargas create
   */
  export type ControlCargasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * The data needed to create a ControlCargas.
     */
    data: XOR<ControlCargasCreateInput, ControlCargasUncheckedCreateInput>
  }

  /**
   * ControlCargas createMany
   */
  export type ControlCargasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ControlCargases.
     */
    data: ControlCargasCreateManyInput | ControlCargasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ControlCargas update
   */
  export type ControlCargasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * The data needed to update a ControlCargas.
     */
    data: XOR<ControlCargasUpdateInput, ControlCargasUncheckedUpdateInput>
    /**
     * Choose, which ControlCargas to update.
     */
    where: ControlCargasWhereUniqueInput
  }

  /**
   * ControlCargas updateMany
   */
  export type ControlCargasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ControlCargases.
     */
    data: XOR<ControlCargasUpdateManyMutationInput, ControlCargasUncheckedUpdateManyInput>
    /**
     * Filter which ControlCargases to update
     */
    where?: ControlCargasWhereInput
    /**
     * Limit how many ControlCargases to update.
     */
    limit?: number
  }

  /**
   * ControlCargas upsert
   */
  export type ControlCargasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * The filter to search for the ControlCargas to update in case it exists.
     */
    where: ControlCargasWhereUniqueInput
    /**
     * In case the ControlCargas found by the `where` argument doesn't exist, create a new ControlCargas with this data.
     */
    create: XOR<ControlCargasCreateInput, ControlCargasUncheckedCreateInput>
    /**
     * In case the ControlCargas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ControlCargasUpdateInput, ControlCargasUncheckedUpdateInput>
  }

  /**
   * ControlCargas delete
   */
  export type ControlCargasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
    /**
     * Filter which ControlCargas to delete.
     */
    where: ControlCargasWhereUniqueInput
  }

  /**
   * ControlCargas deleteMany
   */
  export type ControlCargasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ControlCargases to delete
     */
    where?: ControlCargasWhereInput
    /**
     * Limit how many ControlCargases to delete.
     */
    limit?: number
  }

  /**
   * ControlCargas without action
   */
  export type ControlCargasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ControlCargas
     */
    select?: ControlCargasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ControlCargas
     */
    omit?: ControlCargasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ControlCargasInclude<ExtArgs> | null
  }


  /**
   * Model TarjetaCombustibleBaja
   */

  export type AggregateTarjetaCombustibleBaja = {
    _count: TarjetaCombustibleBajaCountAggregateOutputType | null
    _min: TarjetaCombustibleBajaMinAggregateOutputType | null
    _max: TarjetaCombustibleBajaMaxAggregateOutputType | null
  }

  export type TarjetaCombustibleBajaMinAggregateOutputType = {
    tarjetaNumero: string | null
  }

  export type TarjetaCombustibleBajaMaxAggregateOutputType = {
    tarjetaNumero: string | null
  }

  export type TarjetaCombustibleBajaCountAggregateOutputType = {
    tarjetaNumero: number
    _all: number
  }


  export type TarjetaCombustibleBajaMinAggregateInputType = {
    tarjetaNumero?: true
  }

  export type TarjetaCombustibleBajaMaxAggregateInputType = {
    tarjetaNumero?: true
  }

  export type TarjetaCombustibleBajaCountAggregateInputType = {
    tarjetaNumero?: true
    _all?: true
  }

  export type TarjetaCombustibleBajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarjetaCombustibleBaja to aggregate.
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibleBajas to fetch.
     */
    orderBy?: TarjetaCombustibleBajaOrderByWithRelationInput | TarjetaCombustibleBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarjetaCombustibleBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibleBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibleBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TarjetaCombustibleBajas
    **/
    _count?: true | TarjetaCombustibleBajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarjetaCombustibleBajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarjetaCombustibleBajaMaxAggregateInputType
  }

  export type GetTarjetaCombustibleBajaAggregateType<T extends TarjetaCombustibleBajaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarjetaCombustibleBaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarjetaCombustibleBaja[P]>
      : GetScalarType<T[P], AggregateTarjetaCombustibleBaja[P]>
  }




  export type TarjetaCombustibleBajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarjetaCombustibleBajaWhereInput
    orderBy?: TarjetaCombustibleBajaOrderByWithAggregationInput | TarjetaCombustibleBajaOrderByWithAggregationInput[]
    by: TarjetaCombustibleBajaScalarFieldEnum[] | TarjetaCombustibleBajaScalarFieldEnum
    having?: TarjetaCombustibleBajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarjetaCombustibleBajaCountAggregateInputType | true
    _min?: TarjetaCombustibleBajaMinAggregateInputType
    _max?: TarjetaCombustibleBajaMaxAggregateInputType
  }

  export type TarjetaCombustibleBajaGroupByOutputType = {
    tarjetaNumero: string
    _count: TarjetaCombustibleBajaCountAggregateOutputType | null
    _min: TarjetaCombustibleBajaMinAggregateOutputType | null
    _max: TarjetaCombustibleBajaMaxAggregateOutputType | null
  }

  type GetTarjetaCombustibleBajaGroupByPayload<T extends TarjetaCombustibleBajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarjetaCombustibleBajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarjetaCombustibleBajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarjetaCombustibleBajaGroupByOutputType[P]>
            : GetScalarType<T[P], TarjetaCombustibleBajaGroupByOutputType[P]>
        }
      >
    >


  export type TarjetaCombustibleBajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tarjetaNumero?: boolean
    tarjeta?: boolean | TarjetaCombustibleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarjetaCombustibleBaja"]>



  export type TarjetaCombustibleBajaSelectScalar = {
    tarjetaNumero?: boolean
  }

  export type TarjetaCombustibleBajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tarjetaNumero", ExtArgs["result"]["tarjetaCombustibleBaja"]>
  export type TarjetaCombustibleBajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarjeta?: boolean | TarjetaCombustibleDefaultArgs<ExtArgs>
  }

  export type $TarjetaCombustibleBajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TarjetaCombustibleBaja"
    objects: {
      tarjeta: Prisma.$TarjetaCombustiblePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tarjetaNumero: string
    }, ExtArgs["result"]["tarjetaCombustibleBaja"]>
    composites: {}
  }

  type TarjetaCombustibleBajaGetPayload<S extends boolean | null | undefined | TarjetaCombustibleBajaDefaultArgs> = $Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload, S>

  type TarjetaCombustibleBajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarjetaCombustibleBajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarjetaCombustibleBajaCountAggregateInputType | true
    }

  export interface TarjetaCombustibleBajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TarjetaCombustibleBaja'], meta: { name: 'TarjetaCombustibleBaja' } }
    /**
     * Find zero or one TarjetaCombustibleBaja that matches the filter.
     * @param {TarjetaCombustibleBajaFindUniqueArgs} args - Arguments to find a TarjetaCombustibleBaja
     * @example
     * // Get one TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarjetaCombustibleBajaFindUniqueArgs>(args: SelectSubset<T, TarjetaCombustibleBajaFindUniqueArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TarjetaCombustibleBaja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarjetaCombustibleBajaFindUniqueOrThrowArgs} args - Arguments to find a TarjetaCombustibleBaja
     * @example
     * // Get one TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarjetaCombustibleBajaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarjetaCombustibleBajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarjetaCombustibleBaja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaFindFirstArgs} args - Arguments to find a TarjetaCombustibleBaja
     * @example
     * // Get one TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarjetaCombustibleBajaFindFirstArgs>(args?: SelectSubset<T, TarjetaCombustibleBajaFindFirstArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TarjetaCombustibleBaja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaFindFirstOrThrowArgs} args - Arguments to find a TarjetaCombustibleBaja
     * @example
     * // Get one TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarjetaCombustibleBajaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarjetaCombustibleBajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TarjetaCombustibleBajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TarjetaCombustibleBajas
     * const tarjetaCombustibleBajas = await prisma.tarjetaCombustibleBaja.findMany()
     * 
     * // Get first 10 TarjetaCombustibleBajas
     * const tarjetaCombustibleBajas = await prisma.tarjetaCombustibleBaja.findMany({ take: 10 })
     * 
     * // Only select the `tarjetaNumero`
     * const tarjetaCombustibleBajaWithTarjetaNumeroOnly = await prisma.tarjetaCombustibleBaja.findMany({ select: { tarjetaNumero: true } })
     * 
     */
    findMany<T extends TarjetaCombustibleBajaFindManyArgs>(args?: SelectSubset<T, TarjetaCombustibleBajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TarjetaCombustibleBaja.
     * @param {TarjetaCombustibleBajaCreateArgs} args - Arguments to create a TarjetaCombustibleBaja.
     * @example
     * // Create one TarjetaCombustibleBaja
     * const TarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.create({
     *   data: {
     *     // ... data to create a TarjetaCombustibleBaja
     *   }
     * })
     * 
     */
    create<T extends TarjetaCombustibleBajaCreateArgs>(args: SelectSubset<T, TarjetaCombustibleBajaCreateArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TarjetaCombustibleBajas.
     * @param {TarjetaCombustibleBajaCreateManyArgs} args - Arguments to create many TarjetaCombustibleBajas.
     * @example
     * // Create many TarjetaCombustibleBajas
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarjetaCombustibleBajaCreateManyArgs>(args?: SelectSubset<T, TarjetaCombustibleBajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TarjetaCombustibleBaja.
     * @param {TarjetaCombustibleBajaDeleteArgs} args - Arguments to delete one TarjetaCombustibleBaja.
     * @example
     * // Delete one TarjetaCombustibleBaja
     * const TarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.delete({
     *   where: {
     *     // ... filter to delete one TarjetaCombustibleBaja
     *   }
     * })
     * 
     */
    delete<T extends TarjetaCombustibleBajaDeleteArgs>(args: SelectSubset<T, TarjetaCombustibleBajaDeleteArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TarjetaCombustibleBaja.
     * @param {TarjetaCombustibleBajaUpdateArgs} args - Arguments to update one TarjetaCombustibleBaja.
     * @example
     * // Update one TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarjetaCombustibleBajaUpdateArgs>(args: SelectSubset<T, TarjetaCombustibleBajaUpdateArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TarjetaCombustibleBajas.
     * @param {TarjetaCombustibleBajaDeleteManyArgs} args - Arguments to filter TarjetaCombustibleBajas to delete.
     * @example
     * // Delete a few TarjetaCombustibleBajas
     * const { count } = await prisma.tarjetaCombustibleBaja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarjetaCombustibleBajaDeleteManyArgs>(args?: SelectSubset<T, TarjetaCombustibleBajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TarjetaCombustibleBajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TarjetaCombustibleBajas
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarjetaCombustibleBajaUpdateManyArgs>(args: SelectSubset<T, TarjetaCombustibleBajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TarjetaCombustibleBaja.
     * @param {TarjetaCombustibleBajaUpsertArgs} args - Arguments to update or create a TarjetaCombustibleBaja.
     * @example
     * // Update or create a TarjetaCombustibleBaja
     * const tarjetaCombustibleBaja = await prisma.tarjetaCombustibleBaja.upsert({
     *   create: {
     *     // ... data to create a TarjetaCombustibleBaja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TarjetaCombustibleBaja we want to update
     *   }
     * })
     */
    upsert<T extends TarjetaCombustibleBajaUpsertArgs>(args: SelectSubset<T, TarjetaCombustibleBajaUpsertArgs<ExtArgs>>): Prisma__TarjetaCombustibleBajaClient<$Result.GetResult<Prisma.$TarjetaCombustibleBajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TarjetaCombustibleBajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaCountArgs} args - Arguments to filter TarjetaCombustibleBajas to count.
     * @example
     * // Count the number of TarjetaCombustibleBajas
     * const count = await prisma.tarjetaCombustibleBaja.count({
     *   where: {
     *     // ... the filter for the TarjetaCombustibleBajas we want to count
     *   }
     * })
    **/
    count<T extends TarjetaCombustibleBajaCountArgs>(
      args?: Subset<T, TarjetaCombustibleBajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarjetaCombustibleBajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TarjetaCombustibleBaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarjetaCombustibleBajaAggregateArgs>(args: Subset<T, TarjetaCombustibleBajaAggregateArgs>): Prisma.PrismaPromise<GetTarjetaCombustibleBajaAggregateType<T>>

    /**
     * Group by TarjetaCombustibleBaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarjetaCombustibleBajaGroupByArgs} args - Group by arguments.
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
      T extends TarjetaCombustibleBajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarjetaCombustibleBajaGroupByArgs['orderBy'] }
        : { orderBy?: TarjetaCombustibleBajaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarjetaCombustibleBajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarjetaCombustibleBajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TarjetaCombustibleBaja model
   */
  readonly fields: TarjetaCombustibleBajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TarjetaCombustibleBaja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarjetaCombustibleBajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tarjeta<T extends TarjetaCombustibleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TarjetaCombustibleDefaultArgs<ExtArgs>>): Prisma__TarjetaCombustibleClient<$Result.GetResult<Prisma.$TarjetaCombustiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TarjetaCombustibleBaja model
   */
  interface TarjetaCombustibleBajaFieldRefs {
    readonly tarjetaNumero: FieldRef<"TarjetaCombustibleBaja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TarjetaCombustibleBaja findUnique
   */
  export type TarjetaCombustibleBajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibleBaja to fetch.
     */
    where: TarjetaCombustibleBajaWhereUniqueInput
  }

  /**
   * TarjetaCombustibleBaja findUniqueOrThrow
   */
  export type TarjetaCombustibleBajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibleBaja to fetch.
     */
    where: TarjetaCombustibleBajaWhereUniqueInput
  }

  /**
   * TarjetaCombustibleBaja findFirst
   */
  export type TarjetaCombustibleBajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibleBaja to fetch.
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibleBajas to fetch.
     */
    orderBy?: TarjetaCombustibleBajaOrderByWithRelationInput | TarjetaCombustibleBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarjetaCombustibleBajas.
     */
    cursor?: TarjetaCombustibleBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibleBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibleBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarjetaCombustibleBajas.
     */
    distinct?: TarjetaCombustibleBajaScalarFieldEnum | TarjetaCombustibleBajaScalarFieldEnum[]
  }

  /**
   * TarjetaCombustibleBaja findFirstOrThrow
   */
  export type TarjetaCombustibleBajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibleBaja to fetch.
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibleBajas to fetch.
     */
    orderBy?: TarjetaCombustibleBajaOrderByWithRelationInput | TarjetaCombustibleBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TarjetaCombustibleBajas.
     */
    cursor?: TarjetaCombustibleBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibleBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibleBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TarjetaCombustibleBajas.
     */
    distinct?: TarjetaCombustibleBajaScalarFieldEnum | TarjetaCombustibleBajaScalarFieldEnum[]
  }

  /**
   * TarjetaCombustibleBaja findMany
   */
  export type TarjetaCombustibleBajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter, which TarjetaCombustibleBajas to fetch.
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TarjetaCombustibleBajas to fetch.
     */
    orderBy?: TarjetaCombustibleBajaOrderByWithRelationInput | TarjetaCombustibleBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TarjetaCombustibleBajas.
     */
    cursor?: TarjetaCombustibleBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TarjetaCombustibleBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TarjetaCombustibleBajas.
     */
    skip?: number
    distinct?: TarjetaCombustibleBajaScalarFieldEnum | TarjetaCombustibleBajaScalarFieldEnum[]
  }

  /**
   * TarjetaCombustibleBaja create
   */
  export type TarjetaCombustibleBajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * The data needed to create a TarjetaCombustibleBaja.
     */
    data: XOR<TarjetaCombustibleBajaCreateInput, TarjetaCombustibleBajaUncheckedCreateInput>
  }

  /**
   * TarjetaCombustibleBaja createMany
   */
  export type TarjetaCombustibleBajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TarjetaCombustibleBajas.
     */
    data: TarjetaCombustibleBajaCreateManyInput | TarjetaCombustibleBajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TarjetaCombustibleBaja update
   */
  export type TarjetaCombustibleBajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * The data needed to update a TarjetaCombustibleBaja.
     */
    data: XOR<TarjetaCombustibleBajaUpdateInput, TarjetaCombustibleBajaUncheckedUpdateInput>
    /**
     * Choose, which TarjetaCombustibleBaja to update.
     */
    where: TarjetaCombustibleBajaWhereUniqueInput
  }

  /**
   * TarjetaCombustibleBaja updateMany
   */
  export type TarjetaCombustibleBajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TarjetaCombustibleBajas.
     */
    data: XOR<TarjetaCombustibleBajaUpdateManyMutationInput, TarjetaCombustibleBajaUncheckedUpdateManyInput>
    /**
     * Filter which TarjetaCombustibleBajas to update
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * Limit how many TarjetaCombustibleBajas to update.
     */
    limit?: number
  }

  /**
   * TarjetaCombustibleBaja upsert
   */
  export type TarjetaCombustibleBajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * The filter to search for the TarjetaCombustibleBaja to update in case it exists.
     */
    where: TarjetaCombustibleBajaWhereUniqueInput
    /**
     * In case the TarjetaCombustibleBaja found by the `where` argument doesn't exist, create a new TarjetaCombustibleBaja with this data.
     */
    create: XOR<TarjetaCombustibleBajaCreateInput, TarjetaCombustibleBajaUncheckedCreateInput>
    /**
     * In case the TarjetaCombustibleBaja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarjetaCombustibleBajaUpdateInput, TarjetaCombustibleBajaUncheckedUpdateInput>
  }

  /**
   * TarjetaCombustibleBaja delete
   */
  export type TarjetaCombustibleBajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
    /**
     * Filter which TarjetaCombustibleBaja to delete.
     */
    where: TarjetaCombustibleBajaWhereUniqueInput
  }

  /**
   * TarjetaCombustibleBaja deleteMany
   */
  export type TarjetaCombustibleBajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TarjetaCombustibleBajas to delete
     */
    where?: TarjetaCombustibleBajaWhereInput
    /**
     * Limit how many TarjetaCombustibleBajas to delete.
     */
    limit?: number
  }

  /**
   * TarjetaCombustibleBaja without action
   */
  export type TarjetaCombustibleBajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TarjetaCombustibleBaja
     */
    select?: TarjetaCombustibleBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TarjetaCombustibleBaja
     */
    omit?: TarjetaCombustibleBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarjetaCombustibleBajaInclude<ExtArgs> | null
  }


  /**
   * Model ChoferesDespedidos
   */

  export type AggregateChoferesDespedidos = {
    _count: ChoferesDespedidosCountAggregateOutputType | null
    _min: ChoferesDespedidosMinAggregateOutputType | null
    _max: ChoferesDespedidosMaxAggregateOutputType | null
  }

  export type ChoferesDespedidosMinAggregateOutputType = {
    choferCI: string | null
  }

  export type ChoferesDespedidosMaxAggregateOutputType = {
    choferCI: string | null
  }

  export type ChoferesDespedidosCountAggregateOutputType = {
    choferCI: number
    _all: number
  }


  export type ChoferesDespedidosMinAggregateInputType = {
    choferCI?: true
  }

  export type ChoferesDespedidosMaxAggregateInputType = {
    choferCI?: true
  }

  export type ChoferesDespedidosCountAggregateInputType = {
    choferCI?: true
    _all?: true
  }

  export type ChoferesDespedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoferesDespedidos to aggregate.
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoferesDespedidos to fetch.
     */
    orderBy?: ChoferesDespedidosOrderByWithRelationInput | ChoferesDespedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoferesDespedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoferesDespedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoferesDespedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChoferesDespedidos
    **/
    _count?: true | ChoferesDespedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoferesDespedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoferesDespedidosMaxAggregateInputType
  }

  export type GetChoferesDespedidosAggregateType<T extends ChoferesDespedidosAggregateArgs> = {
        [P in keyof T & keyof AggregateChoferesDespedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoferesDespedidos[P]>
      : GetScalarType<T[P], AggregateChoferesDespedidos[P]>
  }




  export type ChoferesDespedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoferesDespedidosWhereInput
    orderBy?: ChoferesDespedidosOrderByWithAggregationInput | ChoferesDespedidosOrderByWithAggregationInput[]
    by: ChoferesDespedidosScalarFieldEnum[] | ChoferesDespedidosScalarFieldEnum
    having?: ChoferesDespedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoferesDespedidosCountAggregateInputType | true
    _min?: ChoferesDespedidosMinAggregateInputType
    _max?: ChoferesDespedidosMaxAggregateInputType
  }

  export type ChoferesDespedidosGroupByOutputType = {
    choferCI: string
    _count: ChoferesDespedidosCountAggregateOutputType | null
    _min: ChoferesDespedidosMinAggregateOutputType | null
    _max: ChoferesDespedidosMaxAggregateOutputType | null
  }

  type GetChoferesDespedidosGroupByPayload<T extends ChoferesDespedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoferesDespedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoferesDespedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoferesDespedidosGroupByOutputType[P]>
            : GetScalarType<T[P], ChoferesDespedidosGroupByOutputType[P]>
        }
      >
    >


  export type ChoferesDespedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    choferCI?: boolean
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choferesDespedidos"]>



  export type ChoferesDespedidosSelectScalar = {
    choferCI?: boolean
  }

  export type ChoferesDespedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"choferCI", ExtArgs["result"]["choferesDespedidos"]>
  export type ChoferesDespedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chofer?: boolean | ChoferDefaultArgs<ExtArgs>
  }

  export type $ChoferesDespedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChoferesDespedidos"
    objects: {
      chofer: Prisma.$ChoferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      choferCI: string
    }, ExtArgs["result"]["choferesDespedidos"]>
    composites: {}
  }

  type ChoferesDespedidosGetPayload<S extends boolean | null | undefined | ChoferesDespedidosDefaultArgs> = $Result.GetResult<Prisma.$ChoferesDespedidosPayload, S>

  type ChoferesDespedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoferesDespedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoferesDespedidosCountAggregateInputType | true
    }

  export interface ChoferesDespedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChoferesDespedidos'], meta: { name: 'ChoferesDespedidos' } }
    /**
     * Find zero or one ChoferesDespedidos that matches the filter.
     * @param {ChoferesDespedidosFindUniqueArgs} args - Arguments to find a ChoferesDespedidos
     * @example
     * // Get one ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoferesDespedidosFindUniqueArgs>(args: SelectSubset<T, ChoferesDespedidosFindUniqueArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChoferesDespedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoferesDespedidosFindUniqueOrThrowArgs} args - Arguments to find a ChoferesDespedidos
     * @example
     * // Get one ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoferesDespedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoferesDespedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoferesDespedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosFindFirstArgs} args - Arguments to find a ChoferesDespedidos
     * @example
     * // Get one ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoferesDespedidosFindFirstArgs>(args?: SelectSubset<T, ChoferesDespedidosFindFirstArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoferesDespedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosFindFirstOrThrowArgs} args - Arguments to find a ChoferesDespedidos
     * @example
     * // Get one ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoferesDespedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoferesDespedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChoferesDespedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findMany()
     * 
     * // Get first 10 ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.findMany({ take: 10 })
     * 
     * // Only select the `choferCI`
     * const choferesDespedidosWithChoferCIOnly = await prisma.choferesDespedidos.findMany({ select: { choferCI: true } })
     * 
     */
    findMany<T extends ChoferesDespedidosFindManyArgs>(args?: SelectSubset<T, ChoferesDespedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChoferesDespedidos.
     * @param {ChoferesDespedidosCreateArgs} args - Arguments to create a ChoferesDespedidos.
     * @example
     * // Create one ChoferesDespedidos
     * const ChoferesDespedidos = await prisma.choferesDespedidos.create({
     *   data: {
     *     // ... data to create a ChoferesDespedidos
     *   }
     * })
     * 
     */
    create<T extends ChoferesDespedidosCreateArgs>(args: SelectSubset<T, ChoferesDespedidosCreateArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChoferesDespedidos.
     * @param {ChoferesDespedidosCreateManyArgs} args - Arguments to create many ChoferesDespedidos.
     * @example
     * // Create many ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoferesDespedidosCreateManyArgs>(args?: SelectSubset<T, ChoferesDespedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChoferesDespedidos.
     * @param {ChoferesDespedidosDeleteArgs} args - Arguments to delete one ChoferesDespedidos.
     * @example
     * // Delete one ChoferesDespedidos
     * const ChoferesDespedidos = await prisma.choferesDespedidos.delete({
     *   where: {
     *     // ... filter to delete one ChoferesDespedidos
     *   }
     * })
     * 
     */
    delete<T extends ChoferesDespedidosDeleteArgs>(args: SelectSubset<T, ChoferesDespedidosDeleteArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChoferesDespedidos.
     * @param {ChoferesDespedidosUpdateArgs} args - Arguments to update one ChoferesDespedidos.
     * @example
     * // Update one ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoferesDespedidosUpdateArgs>(args: SelectSubset<T, ChoferesDespedidosUpdateArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChoferesDespedidos.
     * @param {ChoferesDespedidosDeleteManyArgs} args - Arguments to filter ChoferesDespedidos to delete.
     * @example
     * // Delete a few ChoferesDespedidos
     * const { count } = await prisma.choferesDespedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoferesDespedidosDeleteManyArgs>(args?: SelectSubset<T, ChoferesDespedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoferesDespedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoferesDespedidosUpdateManyArgs>(args: SelectSubset<T, ChoferesDespedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChoferesDespedidos.
     * @param {ChoferesDespedidosUpsertArgs} args - Arguments to update or create a ChoferesDespedidos.
     * @example
     * // Update or create a ChoferesDespedidos
     * const choferesDespedidos = await prisma.choferesDespedidos.upsert({
     *   create: {
     *     // ... data to create a ChoferesDespedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChoferesDespedidos we want to update
     *   }
     * })
     */
    upsert<T extends ChoferesDespedidosUpsertArgs>(args: SelectSubset<T, ChoferesDespedidosUpsertArgs<ExtArgs>>): Prisma__ChoferesDespedidosClient<$Result.GetResult<Prisma.$ChoferesDespedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChoferesDespedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosCountArgs} args - Arguments to filter ChoferesDespedidos to count.
     * @example
     * // Count the number of ChoferesDespedidos
     * const count = await prisma.choferesDespedidos.count({
     *   where: {
     *     // ... the filter for the ChoferesDespedidos we want to count
     *   }
     * })
    **/
    count<T extends ChoferesDespedidosCountArgs>(
      args?: Subset<T, ChoferesDespedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoferesDespedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChoferesDespedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoferesDespedidosAggregateArgs>(args: Subset<T, ChoferesDespedidosAggregateArgs>): Prisma.PrismaPromise<GetChoferesDespedidosAggregateType<T>>

    /**
     * Group by ChoferesDespedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoferesDespedidosGroupByArgs} args - Group by arguments.
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
      T extends ChoferesDespedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoferesDespedidosGroupByArgs['orderBy'] }
        : { orderBy?: ChoferesDespedidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoferesDespedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoferesDespedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChoferesDespedidos model
   */
  readonly fields: ChoferesDespedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChoferesDespedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoferesDespedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chofer<T extends ChoferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoferDefaultArgs<ExtArgs>>): Prisma__ChoferClient<$Result.GetResult<Prisma.$ChoferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChoferesDespedidos model
   */
  interface ChoferesDespedidosFieldRefs {
    readonly choferCI: FieldRef<"ChoferesDespedidos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChoferesDespedidos findUnique
   */
  export type ChoferesDespedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter, which ChoferesDespedidos to fetch.
     */
    where: ChoferesDespedidosWhereUniqueInput
  }

  /**
   * ChoferesDespedidos findUniqueOrThrow
   */
  export type ChoferesDespedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter, which ChoferesDespedidos to fetch.
     */
    where: ChoferesDespedidosWhereUniqueInput
  }

  /**
   * ChoferesDespedidos findFirst
   */
  export type ChoferesDespedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter, which ChoferesDespedidos to fetch.
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoferesDespedidos to fetch.
     */
    orderBy?: ChoferesDespedidosOrderByWithRelationInput | ChoferesDespedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoferesDespedidos.
     */
    cursor?: ChoferesDespedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoferesDespedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoferesDespedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoferesDespedidos.
     */
    distinct?: ChoferesDespedidosScalarFieldEnum | ChoferesDespedidosScalarFieldEnum[]
  }

  /**
   * ChoferesDespedidos findFirstOrThrow
   */
  export type ChoferesDespedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter, which ChoferesDespedidos to fetch.
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoferesDespedidos to fetch.
     */
    orderBy?: ChoferesDespedidosOrderByWithRelationInput | ChoferesDespedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoferesDespedidos.
     */
    cursor?: ChoferesDespedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoferesDespedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoferesDespedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoferesDespedidos.
     */
    distinct?: ChoferesDespedidosScalarFieldEnum | ChoferesDespedidosScalarFieldEnum[]
  }

  /**
   * ChoferesDespedidos findMany
   */
  export type ChoferesDespedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter, which ChoferesDespedidos to fetch.
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoferesDespedidos to fetch.
     */
    orderBy?: ChoferesDespedidosOrderByWithRelationInput | ChoferesDespedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChoferesDespedidos.
     */
    cursor?: ChoferesDespedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoferesDespedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoferesDespedidos.
     */
    skip?: number
    distinct?: ChoferesDespedidosScalarFieldEnum | ChoferesDespedidosScalarFieldEnum[]
  }

  /**
   * ChoferesDespedidos create
   */
  export type ChoferesDespedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a ChoferesDespedidos.
     */
    data: XOR<ChoferesDespedidosCreateInput, ChoferesDespedidosUncheckedCreateInput>
  }

  /**
   * ChoferesDespedidos createMany
   */
  export type ChoferesDespedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChoferesDespedidos.
     */
    data: ChoferesDespedidosCreateManyInput | ChoferesDespedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChoferesDespedidos update
   */
  export type ChoferesDespedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a ChoferesDespedidos.
     */
    data: XOR<ChoferesDespedidosUpdateInput, ChoferesDespedidosUncheckedUpdateInput>
    /**
     * Choose, which ChoferesDespedidos to update.
     */
    where: ChoferesDespedidosWhereUniqueInput
  }

  /**
   * ChoferesDespedidos updateMany
   */
  export type ChoferesDespedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChoferesDespedidos.
     */
    data: XOR<ChoferesDespedidosUpdateManyMutationInput, ChoferesDespedidosUncheckedUpdateManyInput>
    /**
     * Filter which ChoferesDespedidos to update
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * Limit how many ChoferesDespedidos to update.
     */
    limit?: number
  }

  /**
   * ChoferesDespedidos upsert
   */
  export type ChoferesDespedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the ChoferesDespedidos to update in case it exists.
     */
    where: ChoferesDespedidosWhereUniqueInput
    /**
     * In case the ChoferesDespedidos found by the `where` argument doesn't exist, create a new ChoferesDespedidos with this data.
     */
    create: XOR<ChoferesDespedidosCreateInput, ChoferesDespedidosUncheckedCreateInput>
    /**
     * In case the ChoferesDespedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoferesDespedidosUpdateInput, ChoferesDespedidosUncheckedUpdateInput>
  }

  /**
   * ChoferesDespedidos delete
   */
  export type ChoferesDespedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
    /**
     * Filter which ChoferesDespedidos to delete.
     */
    where: ChoferesDespedidosWhereUniqueInput
  }

  /**
   * ChoferesDespedidos deleteMany
   */
  export type ChoferesDespedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoferesDespedidos to delete
     */
    where?: ChoferesDespedidosWhereInput
    /**
     * Limit how many ChoferesDespedidos to delete.
     */
    limit?: number
  }

  /**
   * ChoferesDespedidos without action
   */
  export type ChoferesDespedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoferesDespedidos
     */
    select?: ChoferesDespedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoferesDespedidos
     */
    omit?: ChoferesDespedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoferesDespedidosInclude<ExtArgs> | null
  }


  /**
   * Model VehiculosMantenimiento
   */

  export type AggregateVehiculosMantenimiento = {
    _count: VehiculosMantenimientoCountAggregateOutputType | null
    _min: VehiculosMantenimientoMinAggregateOutputType | null
    _max: VehiculosMantenimientoMaxAggregateOutputType | null
  }

  export type VehiculosMantenimientoMinAggregateOutputType = {
    uuid: string | null
    descripcion: string | null
    inicio: Date | null
    fin: Date | null
    vehiculoChapa: string | null
  }

  export type VehiculosMantenimientoMaxAggregateOutputType = {
    uuid: string | null
    descripcion: string | null
    inicio: Date | null
    fin: Date | null
    vehiculoChapa: string | null
  }

  export type VehiculosMantenimientoCountAggregateOutputType = {
    uuid: number
    descripcion: number
    inicio: number
    fin: number
    vehiculoChapa: number
    _all: number
  }


  export type VehiculosMantenimientoMinAggregateInputType = {
    uuid?: true
    descripcion?: true
    inicio?: true
    fin?: true
    vehiculoChapa?: true
  }

  export type VehiculosMantenimientoMaxAggregateInputType = {
    uuid?: true
    descripcion?: true
    inicio?: true
    fin?: true
    vehiculoChapa?: true
  }

  export type VehiculosMantenimientoCountAggregateInputType = {
    uuid?: true
    descripcion?: true
    inicio?: true
    fin?: true
    vehiculoChapa?: true
    _all?: true
  }

  export type VehiculosMantenimientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiculosMantenimiento to aggregate.
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosMantenimientos to fetch.
     */
    orderBy?: VehiculosMantenimientoOrderByWithRelationInput | VehiculosMantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculosMantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosMantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosMantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehiculosMantenimientos
    **/
    _count?: true | VehiculosMantenimientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculosMantenimientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculosMantenimientoMaxAggregateInputType
  }

  export type GetVehiculosMantenimientoAggregateType<T extends VehiculosMantenimientoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculosMantenimiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculosMantenimiento[P]>
      : GetScalarType<T[P], AggregateVehiculosMantenimiento[P]>
  }




  export type VehiculosMantenimientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculosMantenimientoWhereInput
    orderBy?: VehiculosMantenimientoOrderByWithAggregationInput | VehiculosMantenimientoOrderByWithAggregationInput[]
    by: VehiculosMantenimientoScalarFieldEnum[] | VehiculosMantenimientoScalarFieldEnum
    having?: VehiculosMantenimientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculosMantenimientoCountAggregateInputType | true
    _min?: VehiculosMantenimientoMinAggregateInputType
    _max?: VehiculosMantenimientoMaxAggregateInputType
  }

  export type VehiculosMantenimientoGroupByOutputType = {
    uuid: string
    descripcion: string
    inicio: Date
    fin: Date | null
    vehiculoChapa: string
    _count: VehiculosMantenimientoCountAggregateOutputType | null
    _min: VehiculosMantenimientoMinAggregateOutputType | null
    _max: VehiculosMantenimientoMaxAggregateOutputType | null
  }

  type GetVehiculosMantenimientoGroupByPayload<T extends VehiculosMantenimientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculosMantenimientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculosMantenimientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculosMantenimientoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculosMantenimientoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculosMantenimientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    descripcion?: boolean
    inicio?: boolean
    fin?: boolean
    vehiculoChapa?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculosMantenimiento"]>



  export type VehiculosMantenimientoSelectScalar = {
    uuid?: boolean
    descripcion?: boolean
    inicio?: boolean
    fin?: boolean
    vehiculoChapa?: boolean
  }

  export type VehiculosMantenimientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "descripcion" | "inicio" | "fin" | "vehiculoChapa", ExtArgs["result"]["vehiculosMantenimiento"]>
  export type VehiculosMantenimientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $VehiculosMantenimientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehiculosMantenimiento"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      descripcion: string
      inicio: Date
      fin: Date | null
      vehiculoChapa: string
    }, ExtArgs["result"]["vehiculosMantenimiento"]>
    composites: {}
  }

  type VehiculosMantenimientoGetPayload<S extends boolean | null | undefined | VehiculosMantenimientoDefaultArgs> = $Result.GetResult<Prisma.$VehiculosMantenimientoPayload, S>

  type VehiculosMantenimientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculosMantenimientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculosMantenimientoCountAggregateInputType | true
    }

  export interface VehiculosMantenimientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehiculosMantenimiento'], meta: { name: 'VehiculosMantenimiento' } }
    /**
     * Find zero or one VehiculosMantenimiento that matches the filter.
     * @param {VehiculosMantenimientoFindUniqueArgs} args - Arguments to find a VehiculosMantenimiento
     * @example
     * // Get one VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculosMantenimientoFindUniqueArgs>(args: SelectSubset<T, VehiculosMantenimientoFindUniqueArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehiculosMantenimiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculosMantenimientoFindUniqueOrThrowArgs} args - Arguments to find a VehiculosMantenimiento
     * @example
     * // Get one VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculosMantenimientoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculosMantenimientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiculosMantenimiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoFindFirstArgs} args - Arguments to find a VehiculosMantenimiento
     * @example
     * // Get one VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculosMantenimientoFindFirstArgs>(args?: SelectSubset<T, VehiculosMantenimientoFindFirstArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiculosMantenimiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoFindFirstOrThrowArgs} args - Arguments to find a VehiculosMantenimiento
     * @example
     * // Get one VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculosMantenimientoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculosMantenimientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehiculosMantenimientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehiculosMantenimientos
     * const vehiculosMantenimientos = await prisma.vehiculosMantenimiento.findMany()
     * 
     * // Get first 10 VehiculosMantenimientos
     * const vehiculosMantenimientos = await prisma.vehiculosMantenimiento.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const vehiculosMantenimientoWithUuidOnly = await prisma.vehiculosMantenimiento.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends VehiculosMantenimientoFindManyArgs>(args?: SelectSubset<T, VehiculosMantenimientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehiculosMantenimiento.
     * @param {VehiculosMantenimientoCreateArgs} args - Arguments to create a VehiculosMantenimiento.
     * @example
     * // Create one VehiculosMantenimiento
     * const VehiculosMantenimiento = await prisma.vehiculosMantenimiento.create({
     *   data: {
     *     // ... data to create a VehiculosMantenimiento
     *   }
     * })
     * 
     */
    create<T extends VehiculosMantenimientoCreateArgs>(args: SelectSubset<T, VehiculosMantenimientoCreateArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehiculosMantenimientos.
     * @param {VehiculosMantenimientoCreateManyArgs} args - Arguments to create many VehiculosMantenimientos.
     * @example
     * // Create many VehiculosMantenimientos
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculosMantenimientoCreateManyArgs>(args?: SelectSubset<T, VehiculosMantenimientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehiculosMantenimiento.
     * @param {VehiculosMantenimientoDeleteArgs} args - Arguments to delete one VehiculosMantenimiento.
     * @example
     * // Delete one VehiculosMantenimiento
     * const VehiculosMantenimiento = await prisma.vehiculosMantenimiento.delete({
     *   where: {
     *     // ... filter to delete one VehiculosMantenimiento
     *   }
     * })
     * 
     */
    delete<T extends VehiculosMantenimientoDeleteArgs>(args: SelectSubset<T, VehiculosMantenimientoDeleteArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehiculosMantenimiento.
     * @param {VehiculosMantenimientoUpdateArgs} args - Arguments to update one VehiculosMantenimiento.
     * @example
     * // Update one VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculosMantenimientoUpdateArgs>(args: SelectSubset<T, VehiculosMantenimientoUpdateArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehiculosMantenimientos.
     * @param {VehiculosMantenimientoDeleteManyArgs} args - Arguments to filter VehiculosMantenimientos to delete.
     * @example
     * // Delete a few VehiculosMantenimientos
     * const { count } = await prisma.vehiculosMantenimiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculosMantenimientoDeleteManyArgs>(args?: SelectSubset<T, VehiculosMantenimientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehiculosMantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehiculosMantenimientos
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculosMantenimientoUpdateManyArgs>(args: SelectSubset<T, VehiculosMantenimientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehiculosMantenimiento.
     * @param {VehiculosMantenimientoUpsertArgs} args - Arguments to update or create a VehiculosMantenimiento.
     * @example
     * // Update or create a VehiculosMantenimiento
     * const vehiculosMantenimiento = await prisma.vehiculosMantenimiento.upsert({
     *   create: {
     *     // ... data to create a VehiculosMantenimiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehiculosMantenimiento we want to update
     *   }
     * })
     */
    upsert<T extends VehiculosMantenimientoUpsertArgs>(args: SelectSubset<T, VehiculosMantenimientoUpsertArgs<ExtArgs>>): Prisma__VehiculosMantenimientoClient<$Result.GetResult<Prisma.$VehiculosMantenimientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehiculosMantenimientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoCountArgs} args - Arguments to filter VehiculosMantenimientos to count.
     * @example
     * // Count the number of VehiculosMantenimientos
     * const count = await prisma.vehiculosMantenimiento.count({
     *   where: {
     *     // ... the filter for the VehiculosMantenimientos we want to count
     *   }
     * })
    **/
    count<T extends VehiculosMantenimientoCountArgs>(
      args?: Subset<T, VehiculosMantenimientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculosMantenimientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehiculosMantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculosMantenimientoAggregateArgs>(args: Subset<T, VehiculosMantenimientoAggregateArgs>): Prisma.PrismaPromise<GetVehiculosMantenimientoAggregateType<T>>

    /**
     * Group by VehiculosMantenimiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosMantenimientoGroupByArgs} args - Group by arguments.
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
      T extends VehiculosMantenimientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculosMantenimientoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculosMantenimientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculosMantenimientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculosMantenimientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehiculosMantenimiento model
   */
  readonly fields: VehiculosMantenimientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehiculosMantenimiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculosMantenimientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehiculosMantenimiento model
   */
  interface VehiculosMantenimientoFieldRefs {
    readonly uuid: FieldRef<"VehiculosMantenimiento", 'String'>
    readonly descripcion: FieldRef<"VehiculosMantenimiento", 'String'>
    readonly inicio: FieldRef<"VehiculosMantenimiento", 'DateTime'>
    readonly fin: FieldRef<"VehiculosMantenimiento", 'DateTime'>
    readonly vehiculoChapa: FieldRef<"VehiculosMantenimiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VehiculosMantenimiento findUnique
   */
  export type VehiculosMantenimientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosMantenimiento to fetch.
     */
    where: VehiculosMantenimientoWhereUniqueInput
  }

  /**
   * VehiculosMantenimiento findUniqueOrThrow
   */
  export type VehiculosMantenimientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosMantenimiento to fetch.
     */
    where: VehiculosMantenimientoWhereUniqueInput
  }

  /**
   * VehiculosMantenimiento findFirst
   */
  export type VehiculosMantenimientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosMantenimiento to fetch.
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosMantenimientos to fetch.
     */
    orderBy?: VehiculosMantenimientoOrderByWithRelationInput | VehiculosMantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiculosMantenimientos.
     */
    cursor?: VehiculosMantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosMantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosMantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiculosMantenimientos.
     */
    distinct?: VehiculosMantenimientoScalarFieldEnum | VehiculosMantenimientoScalarFieldEnum[]
  }

  /**
   * VehiculosMantenimiento findFirstOrThrow
   */
  export type VehiculosMantenimientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosMantenimiento to fetch.
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosMantenimientos to fetch.
     */
    orderBy?: VehiculosMantenimientoOrderByWithRelationInput | VehiculosMantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiculosMantenimientos.
     */
    cursor?: VehiculosMantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosMantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosMantenimientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiculosMantenimientos.
     */
    distinct?: VehiculosMantenimientoScalarFieldEnum | VehiculosMantenimientoScalarFieldEnum[]
  }

  /**
   * VehiculosMantenimiento findMany
   */
  export type VehiculosMantenimientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosMantenimientos to fetch.
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosMantenimientos to fetch.
     */
    orderBy?: VehiculosMantenimientoOrderByWithRelationInput | VehiculosMantenimientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehiculosMantenimientos.
     */
    cursor?: VehiculosMantenimientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosMantenimientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosMantenimientos.
     */
    skip?: number
    distinct?: VehiculosMantenimientoScalarFieldEnum | VehiculosMantenimientoScalarFieldEnum[]
  }

  /**
   * VehiculosMantenimiento create
   */
  export type VehiculosMantenimientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to create a VehiculosMantenimiento.
     */
    data: XOR<VehiculosMantenimientoCreateInput, VehiculosMantenimientoUncheckedCreateInput>
  }

  /**
   * VehiculosMantenimiento createMany
   */
  export type VehiculosMantenimientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehiculosMantenimientos.
     */
    data: VehiculosMantenimientoCreateManyInput | VehiculosMantenimientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehiculosMantenimiento update
   */
  export type VehiculosMantenimientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * The data needed to update a VehiculosMantenimiento.
     */
    data: XOR<VehiculosMantenimientoUpdateInput, VehiculosMantenimientoUncheckedUpdateInput>
    /**
     * Choose, which VehiculosMantenimiento to update.
     */
    where: VehiculosMantenimientoWhereUniqueInput
  }

  /**
   * VehiculosMantenimiento updateMany
   */
  export type VehiculosMantenimientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehiculosMantenimientos.
     */
    data: XOR<VehiculosMantenimientoUpdateManyMutationInput, VehiculosMantenimientoUncheckedUpdateManyInput>
    /**
     * Filter which VehiculosMantenimientos to update
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * Limit how many VehiculosMantenimientos to update.
     */
    limit?: number
  }

  /**
   * VehiculosMantenimiento upsert
   */
  export type VehiculosMantenimientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * The filter to search for the VehiculosMantenimiento to update in case it exists.
     */
    where: VehiculosMantenimientoWhereUniqueInput
    /**
     * In case the VehiculosMantenimiento found by the `where` argument doesn't exist, create a new VehiculosMantenimiento with this data.
     */
    create: XOR<VehiculosMantenimientoCreateInput, VehiculosMantenimientoUncheckedCreateInput>
    /**
     * In case the VehiculosMantenimiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculosMantenimientoUpdateInput, VehiculosMantenimientoUncheckedUpdateInput>
  }

  /**
   * VehiculosMantenimiento delete
   */
  export type VehiculosMantenimientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
    /**
     * Filter which VehiculosMantenimiento to delete.
     */
    where: VehiculosMantenimientoWhereUniqueInput
  }

  /**
   * VehiculosMantenimiento deleteMany
   */
  export type VehiculosMantenimientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiculosMantenimientos to delete
     */
    where?: VehiculosMantenimientoWhereInput
    /**
     * Limit how many VehiculosMantenimientos to delete.
     */
    limit?: number
  }

  /**
   * VehiculosMantenimiento without action
   */
  export type VehiculosMantenimientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosMantenimiento
     */
    select?: VehiculosMantenimientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosMantenimiento
     */
    omit?: VehiculosMantenimientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosMantenimientoInclude<ExtArgs> | null
  }


  /**
   * Model VehiculosBaja
   */

  export type AggregateVehiculosBaja = {
    _count: VehiculosBajaCountAggregateOutputType | null
    _min: VehiculosBajaMinAggregateOutputType | null
    _max: VehiculosBajaMaxAggregateOutputType | null
  }

  export type VehiculosBajaMinAggregateOutputType = {
    vehiculoChapa: string | null
  }

  export type VehiculosBajaMaxAggregateOutputType = {
    vehiculoChapa: string | null
  }

  export type VehiculosBajaCountAggregateOutputType = {
    vehiculoChapa: number
    _all: number
  }


  export type VehiculosBajaMinAggregateInputType = {
    vehiculoChapa?: true
  }

  export type VehiculosBajaMaxAggregateInputType = {
    vehiculoChapa?: true
  }

  export type VehiculosBajaCountAggregateInputType = {
    vehiculoChapa?: true
    _all?: true
  }

  export type VehiculosBajaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiculosBaja to aggregate.
     */
    where?: VehiculosBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosBajas to fetch.
     */
    orderBy?: VehiculosBajaOrderByWithRelationInput | VehiculosBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculosBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehiculosBajas
    **/
    _count?: true | VehiculosBajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculosBajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculosBajaMaxAggregateInputType
  }

  export type GetVehiculosBajaAggregateType<T extends VehiculosBajaAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculosBaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculosBaja[P]>
      : GetScalarType<T[P], AggregateVehiculosBaja[P]>
  }




  export type VehiculosBajaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculosBajaWhereInput
    orderBy?: VehiculosBajaOrderByWithAggregationInput | VehiculosBajaOrderByWithAggregationInput[]
    by: VehiculosBajaScalarFieldEnum[] | VehiculosBajaScalarFieldEnum
    having?: VehiculosBajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculosBajaCountAggregateInputType | true
    _min?: VehiculosBajaMinAggregateInputType
    _max?: VehiculosBajaMaxAggregateInputType
  }

  export type VehiculosBajaGroupByOutputType = {
    vehiculoChapa: string
    _count: VehiculosBajaCountAggregateOutputType | null
    _min: VehiculosBajaMinAggregateOutputType | null
    _max: VehiculosBajaMaxAggregateOutputType | null
  }

  type GetVehiculosBajaGroupByPayload<T extends VehiculosBajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculosBajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculosBajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculosBajaGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculosBajaGroupByOutputType[P]>
        }
      >
    >


  export type VehiculosBajaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vehiculoChapa?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculosBaja"]>



  export type VehiculosBajaSelectScalar = {
    vehiculoChapa?: boolean
  }

  export type VehiculosBajaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vehiculoChapa", ExtArgs["result"]["vehiculosBaja"]>
  export type VehiculosBajaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $VehiculosBajaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehiculosBaja"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vehiculoChapa: string
    }, ExtArgs["result"]["vehiculosBaja"]>
    composites: {}
  }

  type VehiculosBajaGetPayload<S extends boolean | null | undefined | VehiculosBajaDefaultArgs> = $Result.GetResult<Prisma.$VehiculosBajaPayload, S>

  type VehiculosBajaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculosBajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculosBajaCountAggregateInputType | true
    }

  export interface VehiculosBajaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehiculosBaja'], meta: { name: 'VehiculosBaja' } }
    /**
     * Find zero or one VehiculosBaja that matches the filter.
     * @param {VehiculosBajaFindUniqueArgs} args - Arguments to find a VehiculosBaja
     * @example
     * // Get one VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculosBajaFindUniqueArgs>(args: SelectSubset<T, VehiculosBajaFindUniqueArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehiculosBaja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculosBajaFindUniqueOrThrowArgs} args - Arguments to find a VehiculosBaja
     * @example
     * // Get one VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculosBajaFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculosBajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiculosBaja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaFindFirstArgs} args - Arguments to find a VehiculosBaja
     * @example
     * // Get one VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculosBajaFindFirstArgs>(args?: SelectSubset<T, VehiculosBajaFindFirstArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiculosBaja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaFindFirstOrThrowArgs} args - Arguments to find a VehiculosBaja
     * @example
     * // Get one VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculosBajaFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculosBajaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehiculosBajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehiculosBajas
     * const vehiculosBajas = await prisma.vehiculosBaja.findMany()
     * 
     * // Get first 10 VehiculosBajas
     * const vehiculosBajas = await prisma.vehiculosBaja.findMany({ take: 10 })
     * 
     * // Only select the `vehiculoChapa`
     * const vehiculosBajaWithVehiculoChapaOnly = await prisma.vehiculosBaja.findMany({ select: { vehiculoChapa: true } })
     * 
     */
    findMany<T extends VehiculosBajaFindManyArgs>(args?: SelectSubset<T, VehiculosBajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehiculosBaja.
     * @param {VehiculosBajaCreateArgs} args - Arguments to create a VehiculosBaja.
     * @example
     * // Create one VehiculosBaja
     * const VehiculosBaja = await prisma.vehiculosBaja.create({
     *   data: {
     *     // ... data to create a VehiculosBaja
     *   }
     * })
     * 
     */
    create<T extends VehiculosBajaCreateArgs>(args: SelectSubset<T, VehiculosBajaCreateArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehiculosBajas.
     * @param {VehiculosBajaCreateManyArgs} args - Arguments to create many VehiculosBajas.
     * @example
     * // Create many VehiculosBajas
     * const vehiculosBaja = await prisma.vehiculosBaja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculosBajaCreateManyArgs>(args?: SelectSubset<T, VehiculosBajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehiculosBaja.
     * @param {VehiculosBajaDeleteArgs} args - Arguments to delete one VehiculosBaja.
     * @example
     * // Delete one VehiculosBaja
     * const VehiculosBaja = await prisma.vehiculosBaja.delete({
     *   where: {
     *     // ... filter to delete one VehiculosBaja
     *   }
     * })
     * 
     */
    delete<T extends VehiculosBajaDeleteArgs>(args: SelectSubset<T, VehiculosBajaDeleteArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehiculosBaja.
     * @param {VehiculosBajaUpdateArgs} args - Arguments to update one VehiculosBaja.
     * @example
     * // Update one VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculosBajaUpdateArgs>(args: SelectSubset<T, VehiculosBajaUpdateArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehiculosBajas.
     * @param {VehiculosBajaDeleteManyArgs} args - Arguments to filter VehiculosBajas to delete.
     * @example
     * // Delete a few VehiculosBajas
     * const { count } = await prisma.vehiculosBaja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculosBajaDeleteManyArgs>(args?: SelectSubset<T, VehiculosBajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehiculosBajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehiculosBajas
     * const vehiculosBaja = await prisma.vehiculosBaja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculosBajaUpdateManyArgs>(args: SelectSubset<T, VehiculosBajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehiculosBaja.
     * @param {VehiculosBajaUpsertArgs} args - Arguments to update or create a VehiculosBaja.
     * @example
     * // Update or create a VehiculosBaja
     * const vehiculosBaja = await prisma.vehiculosBaja.upsert({
     *   create: {
     *     // ... data to create a VehiculosBaja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehiculosBaja we want to update
     *   }
     * })
     */
    upsert<T extends VehiculosBajaUpsertArgs>(args: SelectSubset<T, VehiculosBajaUpsertArgs<ExtArgs>>): Prisma__VehiculosBajaClient<$Result.GetResult<Prisma.$VehiculosBajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehiculosBajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaCountArgs} args - Arguments to filter VehiculosBajas to count.
     * @example
     * // Count the number of VehiculosBajas
     * const count = await prisma.vehiculosBaja.count({
     *   where: {
     *     // ... the filter for the VehiculosBajas we want to count
     *   }
     * })
    **/
    count<T extends VehiculosBajaCountArgs>(
      args?: Subset<T, VehiculosBajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculosBajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehiculosBaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculosBajaAggregateArgs>(args: Subset<T, VehiculosBajaAggregateArgs>): Prisma.PrismaPromise<GetVehiculosBajaAggregateType<T>>

    /**
     * Group by VehiculosBaja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculosBajaGroupByArgs} args - Group by arguments.
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
      T extends VehiculosBajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculosBajaGroupByArgs['orderBy'] }
        : { orderBy?: VehiculosBajaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculosBajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculosBajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehiculosBaja model
   */
  readonly fields: VehiculosBajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehiculosBaja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculosBajaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehiculosBaja model
   */
  interface VehiculosBajaFieldRefs {
    readonly vehiculoChapa: FieldRef<"VehiculosBaja", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VehiculosBaja findUnique
   */
  export type VehiculosBajaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosBaja to fetch.
     */
    where: VehiculosBajaWhereUniqueInput
  }

  /**
   * VehiculosBaja findUniqueOrThrow
   */
  export type VehiculosBajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosBaja to fetch.
     */
    where: VehiculosBajaWhereUniqueInput
  }

  /**
   * VehiculosBaja findFirst
   */
  export type VehiculosBajaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosBaja to fetch.
     */
    where?: VehiculosBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosBajas to fetch.
     */
    orderBy?: VehiculosBajaOrderByWithRelationInput | VehiculosBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiculosBajas.
     */
    cursor?: VehiculosBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiculosBajas.
     */
    distinct?: VehiculosBajaScalarFieldEnum | VehiculosBajaScalarFieldEnum[]
  }

  /**
   * VehiculosBaja findFirstOrThrow
   */
  export type VehiculosBajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosBaja to fetch.
     */
    where?: VehiculosBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosBajas to fetch.
     */
    orderBy?: VehiculosBajaOrderByWithRelationInput | VehiculosBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiculosBajas.
     */
    cursor?: VehiculosBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosBajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiculosBajas.
     */
    distinct?: VehiculosBajaScalarFieldEnum | VehiculosBajaScalarFieldEnum[]
  }

  /**
   * VehiculosBaja findMany
   */
  export type VehiculosBajaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter, which VehiculosBajas to fetch.
     */
    where?: VehiculosBajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiculosBajas to fetch.
     */
    orderBy?: VehiculosBajaOrderByWithRelationInput | VehiculosBajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehiculosBajas.
     */
    cursor?: VehiculosBajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiculosBajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiculosBajas.
     */
    skip?: number
    distinct?: VehiculosBajaScalarFieldEnum | VehiculosBajaScalarFieldEnum[]
  }

  /**
   * VehiculosBaja create
   */
  export type VehiculosBajaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * The data needed to create a VehiculosBaja.
     */
    data: XOR<VehiculosBajaCreateInput, VehiculosBajaUncheckedCreateInput>
  }

  /**
   * VehiculosBaja createMany
   */
  export type VehiculosBajaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehiculosBajas.
     */
    data: VehiculosBajaCreateManyInput | VehiculosBajaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehiculosBaja update
   */
  export type VehiculosBajaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * The data needed to update a VehiculosBaja.
     */
    data: XOR<VehiculosBajaUpdateInput, VehiculosBajaUncheckedUpdateInput>
    /**
     * Choose, which VehiculosBaja to update.
     */
    where: VehiculosBajaWhereUniqueInput
  }

  /**
   * VehiculosBaja updateMany
   */
  export type VehiculosBajaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehiculosBajas.
     */
    data: XOR<VehiculosBajaUpdateManyMutationInput, VehiculosBajaUncheckedUpdateManyInput>
    /**
     * Filter which VehiculosBajas to update
     */
    where?: VehiculosBajaWhereInput
    /**
     * Limit how many VehiculosBajas to update.
     */
    limit?: number
  }

  /**
   * VehiculosBaja upsert
   */
  export type VehiculosBajaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * The filter to search for the VehiculosBaja to update in case it exists.
     */
    where: VehiculosBajaWhereUniqueInput
    /**
     * In case the VehiculosBaja found by the `where` argument doesn't exist, create a new VehiculosBaja with this data.
     */
    create: XOR<VehiculosBajaCreateInput, VehiculosBajaUncheckedCreateInput>
    /**
     * In case the VehiculosBaja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculosBajaUpdateInput, VehiculosBajaUncheckedUpdateInput>
  }

  /**
   * VehiculosBaja delete
   */
  export type VehiculosBajaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
    /**
     * Filter which VehiculosBaja to delete.
     */
    where: VehiculosBajaWhereUniqueInput
  }

  /**
   * VehiculosBaja deleteMany
   */
  export type VehiculosBajaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiculosBajas to delete
     */
    where?: VehiculosBajaWhereInput
    /**
     * Limit how many VehiculosBajas to delete.
     */
    limit?: number
  }

  /**
   * VehiculosBaja without action
   */
  export type VehiculosBajaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculosBaja
     */
    select?: VehiculosBajaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiculosBaja
     */
    omit?: VehiculosBajaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculosBajaInclude<ExtArgs> | null
  }


  /**
   * Model ViajesVehiculos
   */

  export type AggregateViajesVehiculos = {
    _count: ViajesVehiculosCountAggregateOutputType | null
    _avg: ViajesVehiculosAvgAggregateOutputType | null
    _sum: ViajesVehiculosSumAggregateOutputType | null
    _min: ViajesVehiculosMinAggregateOutputType | null
    _max: ViajesVehiculosMaxAggregateOutputType | null
  }

  export type ViajesVehiculosAvgAggregateOutputType = {
    combustibleConsumido: number | null
  }

  export type ViajesVehiculosSumAggregateOutputType = {
    combustibleConsumido: number | null
  }

  export type ViajesVehiculosMinAggregateOutputType = {
    uuid: string | null
    fechaSalida: Date | null
    fechaLlegada: Date | null
    lugarDestino: string | null
    combustibleConsumido: number | null
    vehiculoChapa: string | null
  }

  export type ViajesVehiculosMaxAggregateOutputType = {
    uuid: string | null
    fechaSalida: Date | null
    fechaLlegada: Date | null
    lugarDestino: string | null
    combustibleConsumido: number | null
    vehiculoChapa: string | null
  }

  export type ViajesVehiculosCountAggregateOutputType = {
    uuid: number
    fechaSalida: number
    fechaLlegada: number
    lugarDestino: number
    combustibleConsumido: number
    vehiculoChapa: number
    _all: number
  }


  export type ViajesVehiculosAvgAggregateInputType = {
    combustibleConsumido?: true
  }

  export type ViajesVehiculosSumAggregateInputType = {
    combustibleConsumido?: true
  }

  export type ViajesVehiculosMinAggregateInputType = {
    uuid?: true
    fechaSalida?: true
    fechaLlegada?: true
    lugarDestino?: true
    combustibleConsumido?: true
    vehiculoChapa?: true
  }

  export type ViajesVehiculosMaxAggregateInputType = {
    uuid?: true
    fechaSalida?: true
    fechaLlegada?: true
    lugarDestino?: true
    combustibleConsumido?: true
    vehiculoChapa?: true
  }

  export type ViajesVehiculosCountAggregateInputType = {
    uuid?: true
    fechaSalida?: true
    fechaLlegada?: true
    lugarDestino?: true
    combustibleConsumido?: true
    vehiculoChapa?: true
    _all?: true
  }

  export type ViajesVehiculosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViajesVehiculos to aggregate.
     */
    where?: ViajesVehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViajesVehiculos to fetch.
     */
    orderBy?: ViajesVehiculosOrderByWithRelationInput | ViajesVehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajesVehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViajesVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViajesVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViajesVehiculos
    **/
    _count?: true | ViajesVehiculosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajesVehiculosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajesVehiculosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajesVehiculosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajesVehiculosMaxAggregateInputType
  }

  export type GetViajesVehiculosAggregateType<T extends ViajesVehiculosAggregateArgs> = {
        [P in keyof T & keyof AggregateViajesVehiculos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViajesVehiculos[P]>
      : GetScalarType<T[P], AggregateViajesVehiculos[P]>
  }




  export type ViajesVehiculosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajesVehiculosWhereInput
    orderBy?: ViajesVehiculosOrderByWithAggregationInput | ViajesVehiculosOrderByWithAggregationInput[]
    by: ViajesVehiculosScalarFieldEnum[] | ViajesVehiculosScalarFieldEnum
    having?: ViajesVehiculosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajesVehiculosCountAggregateInputType | true
    _avg?: ViajesVehiculosAvgAggregateInputType
    _sum?: ViajesVehiculosSumAggregateInputType
    _min?: ViajesVehiculosMinAggregateInputType
    _max?: ViajesVehiculosMaxAggregateInputType
  }

  export type ViajesVehiculosGroupByOutputType = {
    uuid: string
    fechaSalida: Date
    fechaLlegada: Date
    lugarDestino: string
    combustibleConsumido: number
    vehiculoChapa: string
    _count: ViajesVehiculosCountAggregateOutputType | null
    _avg: ViajesVehiculosAvgAggregateOutputType | null
    _sum: ViajesVehiculosSumAggregateOutputType | null
    _min: ViajesVehiculosMinAggregateOutputType | null
    _max: ViajesVehiculosMaxAggregateOutputType | null
  }

  type GetViajesVehiculosGroupByPayload<T extends ViajesVehiculosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajesVehiculosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajesVehiculosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajesVehiculosGroupByOutputType[P]>
            : GetScalarType<T[P], ViajesVehiculosGroupByOutputType[P]>
        }
      >
    >


  export type ViajesVehiculosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    fechaSalida?: boolean
    fechaLlegada?: boolean
    lugarDestino?: boolean
    combustibleConsumido?: boolean
    vehiculoChapa?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viajesVehiculos"]>



  export type ViajesVehiculosSelectScalar = {
    uuid?: boolean
    fechaSalida?: boolean
    fechaLlegada?: boolean
    lugarDestino?: boolean
    combustibleConsumido?: boolean
    vehiculoChapa?: boolean
  }

  export type ViajesVehiculosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "fechaSalida" | "fechaLlegada" | "lugarDestino" | "combustibleConsumido" | "vehiculoChapa", ExtArgs["result"]["viajesVehiculos"]>
  export type ViajesVehiculosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
  }

  export type $ViajesVehiculosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViajesVehiculos"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      fechaSalida: Date
      fechaLlegada: Date
      lugarDestino: string
      combustibleConsumido: number
      vehiculoChapa: string
    }, ExtArgs["result"]["viajesVehiculos"]>
    composites: {}
  }

  type ViajesVehiculosGetPayload<S extends boolean | null | undefined | ViajesVehiculosDefaultArgs> = $Result.GetResult<Prisma.$ViajesVehiculosPayload, S>

  type ViajesVehiculosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajesVehiculosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajesVehiculosCountAggregateInputType | true
    }

  export interface ViajesVehiculosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViajesVehiculos'], meta: { name: 'ViajesVehiculos' } }
    /**
     * Find zero or one ViajesVehiculos that matches the filter.
     * @param {ViajesVehiculosFindUniqueArgs} args - Arguments to find a ViajesVehiculos
     * @example
     * // Get one ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajesVehiculosFindUniqueArgs>(args: SelectSubset<T, ViajesVehiculosFindUniqueArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViajesVehiculos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajesVehiculosFindUniqueOrThrowArgs} args - Arguments to find a ViajesVehiculos
     * @example
     * // Get one ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajesVehiculosFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajesVehiculosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViajesVehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosFindFirstArgs} args - Arguments to find a ViajesVehiculos
     * @example
     * // Get one ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajesVehiculosFindFirstArgs>(args?: SelectSubset<T, ViajesVehiculosFindFirstArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViajesVehiculos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosFindFirstOrThrowArgs} args - Arguments to find a ViajesVehiculos
     * @example
     * // Get one ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajesVehiculosFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajesVehiculosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViajesVehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findMany()
     * 
     * // Get first 10 ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const viajesVehiculosWithUuidOnly = await prisma.viajesVehiculos.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends ViajesVehiculosFindManyArgs>(args?: SelectSubset<T, ViajesVehiculosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViajesVehiculos.
     * @param {ViajesVehiculosCreateArgs} args - Arguments to create a ViajesVehiculos.
     * @example
     * // Create one ViajesVehiculos
     * const ViajesVehiculos = await prisma.viajesVehiculos.create({
     *   data: {
     *     // ... data to create a ViajesVehiculos
     *   }
     * })
     * 
     */
    create<T extends ViajesVehiculosCreateArgs>(args: SelectSubset<T, ViajesVehiculosCreateArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViajesVehiculos.
     * @param {ViajesVehiculosCreateManyArgs} args - Arguments to create many ViajesVehiculos.
     * @example
     * // Create many ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajesVehiculosCreateManyArgs>(args?: SelectSubset<T, ViajesVehiculosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViajesVehiculos.
     * @param {ViajesVehiculosDeleteArgs} args - Arguments to delete one ViajesVehiculos.
     * @example
     * // Delete one ViajesVehiculos
     * const ViajesVehiculos = await prisma.viajesVehiculos.delete({
     *   where: {
     *     // ... filter to delete one ViajesVehiculos
     *   }
     * })
     * 
     */
    delete<T extends ViajesVehiculosDeleteArgs>(args: SelectSubset<T, ViajesVehiculosDeleteArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViajesVehiculos.
     * @param {ViajesVehiculosUpdateArgs} args - Arguments to update one ViajesVehiculos.
     * @example
     * // Update one ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajesVehiculosUpdateArgs>(args: SelectSubset<T, ViajesVehiculosUpdateArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViajesVehiculos.
     * @param {ViajesVehiculosDeleteManyArgs} args - Arguments to filter ViajesVehiculos to delete.
     * @example
     * // Delete a few ViajesVehiculos
     * const { count } = await prisma.viajesVehiculos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajesVehiculosDeleteManyArgs>(args?: SelectSubset<T, ViajesVehiculosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViajesVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajesVehiculosUpdateManyArgs>(args: SelectSubset<T, ViajesVehiculosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViajesVehiculos.
     * @param {ViajesVehiculosUpsertArgs} args - Arguments to update or create a ViajesVehiculos.
     * @example
     * // Update or create a ViajesVehiculos
     * const viajesVehiculos = await prisma.viajesVehiculos.upsert({
     *   create: {
     *     // ... data to create a ViajesVehiculos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViajesVehiculos we want to update
     *   }
     * })
     */
    upsert<T extends ViajesVehiculosUpsertArgs>(args: SelectSubset<T, ViajesVehiculosUpsertArgs<ExtArgs>>): Prisma__ViajesVehiculosClient<$Result.GetResult<Prisma.$ViajesVehiculosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViajesVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosCountArgs} args - Arguments to filter ViajesVehiculos to count.
     * @example
     * // Count the number of ViajesVehiculos
     * const count = await prisma.viajesVehiculos.count({
     *   where: {
     *     // ... the filter for the ViajesVehiculos we want to count
     *   }
     * })
    **/
    count<T extends ViajesVehiculosCountArgs>(
      args?: Subset<T, ViajesVehiculosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajesVehiculosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViajesVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViajesVehiculosAggregateArgs>(args: Subset<T, ViajesVehiculosAggregateArgs>): Prisma.PrismaPromise<GetViajesVehiculosAggregateType<T>>

    /**
     * Group by ViajesVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajesVehiculosGroupByArgs} args - Group by arguments.
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
      T extends ViajesVehiculosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajesVehiculosGroupByArgs['orderBy'] }
        : { orderBy?: ViajesVehiculosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViajesVehiculosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajesVehiculosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViajesVehiculos model
   */
  readonly fields: ViajesVehiculosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViajesVehiculos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajesVehiculosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ViajesVehiculos model
   */
  interface ViajesVehiculosFieldRefs {
    readonly uuid: FieldRef<"ViajesVehiculos", 'String'>
    readonly fechaSalida: FieldRef<"ViajesVehiculos", 'DateTime'>
    readonly fechaLlegada: FieldRef<"ViajesVehiculos", 'DateTime'>
    readonly lugarDestino: FieldRef<"ViajesVehiculos", 'String'>
    readonly combustibleConsumido: FieldRef<"ViajesVehiculos", 'Int'>
    readonly vehiculoChapa: FieldRef<"ViajesVehiculos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ViajesVehiculos findUnique
   */
  export type ViajesVehiculosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter, which ViajesVehiculos to fetch.
     */
    where: ViajesVehiculosWhereUniqueInput
  }

  /**
   * ViajesVehiculos findUniqueOrThrow
   */
  export type ViajesVehiculosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter, which ViajesVehiculos to fetch.
     */
    where: ViajesVehiculosWhereUniqueInput
  }

  /**
   * ViajesVehiculos findFirst
   */
  export type ViajesVehiculosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter, which ViajesVehiculos to fetch.
     */
    where?: ViajesVehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViajesVehiculos to fetch.
     */
    orderBy?: ViajesVehiculosOrderByWithRelationInput | ViajesVehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViajesVehiculos.
     */
    cursor?: ViajesVehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViajesVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViajesVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViajesVehiculos.
     */
    distinct?: ViajesVehiculosScalarFieldEnum | ViajesVehiculosScalarFieldEnum[]
  }

  /**
   * ViajesVehiculos findFirstOrThrow
   */
  export type ViajesVehiculosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter, which ViajesVehiculos to fetch.
     */
    where?: ViajesVehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViajesVehiculos to fetch.
     */
    orderBy?: ViajesVehiculosOrderByWithRelationInput | ViajesVehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViajesVehiculos.
     */
    cursor?: ViajesVehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViajesVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViajesVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViajesVehiculos.
     */
    distinct?: ViajesVehiculosScalarFieldEnum | ViajesVehiculosScalarFieldEnum[]
  }

  /**
   * ViajesVehiculos findMany
   */
  export type ViajesVehiculosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter, which ViajesVehiculos to fetch.
     */
    where?: ViajesVehiculosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViajesVehiculos to fetch.
     */
    orderBy?: ViajesVehiculosOrderByWithRelationInput | ViajesVehiculosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViajesVehiculos.
     */
    cursor?: ViajesVehiculosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViajesVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViajesVehiculos.
     */
    skip?: number
    distinct?: ViajesVehiculosScalarFieldEnum | ViajesVehiculosScalarFieldEnum[]
  }

  /**
   * ViajesVehiculos create
   */
  export type ViajesVehiculosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * The data needed to create a ViajesVehiculos.
     */
    data: XOR<ViajesVehiculosCreateInput, ViajesVehiculosUncheckedCreateInput>
  }

  /**
   * ViajesVehiculos createMany
   */
  export type ViajesVehiculosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViajesVehiculos.
     */
    data: ViajesVehiculosCreateManyInput | ViajesVehiculosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViajesVehiculos update
   */
  export type ViajesVehiculosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * The data needed to update a ViajesVehiculos.
     */
    data: XOR<ViajesVehiculosUpdateInput, ViajesVehiculosUncheckedUpdateInput>
    /**
     * Choose, which ViajesVehiculos to update.
     */
    where: ViajesVehiculosWhereUniqueInput
  }

  /**
   * ViajesVehiculos updateMany
   */
  export type ViajesVehiculosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViajesVehiculos.
     */
    data: XOR<ViajesVehiculosUpdateManyMutationInput, ViajesVehiculosUncheckedUpdateManyInput>
    /**
     * Filter which ViajesVehiculos to update
     */
    where?: ViajesVehiculosWhereInput
    /**
     * Limit how many ViajesVehiculos to update.
     */
    limit?: number
  }

  /**
   * ViajesVehiculos upsert
   */
  export type ViajesVehiculosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * The filter to search for the ViajesVehiculos to update in case it exists.
     */
    where: ViajesVehiculosWhereUniqueInput
    /**
     * In case the ViajesVehiculos found by the `where` argument doesn't exist, create a new ViajesVehiculos with this data.
     */
    create: XOR<ViajesVehiculosCreateInput, ViajesVehiculosUncheckedCreateInput>
    /**
     * In case the ViajesVehiculos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajesVehiculosUpdateInput, ViajesVehiculosUncheckedUpdateInput>
  }

  /**
   * ViajesVehiculos delete
   */
  export type ViajesVehiculosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
    /**
     * Filter which ViajesVehiculos to delete.
     */
    where: ViajesVehiculosWhereUniqueInput
  }

  /**
   * ViajesVehiculos deleteMany
   */
  export type ViajesVehiculosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViajesVehiculos to delete
     */
    where?: ViajesVehiculosWhereInput
    /**
     * Limit how many ViajesVehiculos to delete.
     */
    limit?: number
  }

  /**
   * ViajesVehiculos without action
   */
  export type ViajesVehiculosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajesVehiculos
     */
    select?: ViajesVehiculosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViajesVehiculos
     */
    omit?: ViajesVehiculosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajesVehiculosInclude<ExtArgs> | null
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
    numero: 'numero',
    pin: 'pin',
    estado: 'estado',
    fecha_vencimiento: 'fecha_vencimiento',
    tipo: 'tipo',
    saldo: 'saldo',
    isAvailable: 'isAvailable'
  };

  export type TarjetaCombustibleScalarFieldEnum = (typeof TarjetaCombustibleScalarFieldEnum)[keyof typeof TarjetaCombustibleScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    chapa: 'chapa',
    marca: 'marca',
    tipo: 'tipo',
    isAvailable: 'isAvailable',
    consumo_km: 'consumo_km',
    areaTrabajoUuid: 'areaTrabajoUuid',
    choferCI: 'choferCI',
    tarjetaNumero: 'tarjetaNumero'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const ControlCargasScalarFieldEnum: {
    uuid: 'uuid',
    folio: 'folio',
    comprobante: 'comprobante',
    fecha: 'fecha',
    existencia: 'existencia',
    importe: 'importe',
    consumo_dinero: 'consumo_dinero',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type ControlCargasScalarFieldEnum = (typeof ControlCargasScalarFieldEnum)[keyof typeof ControlCargasScalarFieldEnum]


  export const TarjetaCombustibleBajaScalarFieldEnum: {
    tarjetaNumero: 'tarjetaNumero'
  };

  export type TarjetaCombustibleBajaScalarFieldEnum = (typeof TarjetaCombustibleBajaScalarFieldEnum)[keyof typeof TarjetaCombustibleBajaScalarFieldEnum]


  export const ChoferesDespedidosScalarFieldEnum: {
    choferCI: 'choferCI'
  };

  export type ChoferesDespedidosScalarFieldEnum = (typeof ChoferesDespedidosScalarFieldEnum)[keyof typeof ChoferesDespedidosScalarFieldEnum]


  export const VehiculosMantenimientoScalarFieldEnum: {
    uuid: 'uuid',
    descripcion: 'descripcion',
    inicio: 'inicio',
    fin: 'fin',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type VehiculosMantenimientoScalarFieldEnum = (typeof VehiculosMantenimientoScalarFieldEnum)[keyof typeof VehiculosMantenimientoScalarFieldEnum]


  export const VehiculosBajaScalarFieldEnum: {
    vehiculoChapa: 'vehiculoChapa'
  };

  export type VehiculosBajaScalarFieldEnum = (typeof VehiculosBajaScalarFieldEnum)[keyof typeof VehiculosBajaScalarFieldEnum]


  export const ViajesVehiculosScalarFieldEnum: {
    uuid: 'uuid',
    fechaSalida: 'fechaSalida',
    fechaLlegada: 'fechaLlegada',
    lugarDestino: 'lugarDestino',
    combustibleConsumido: 'combustibleConsumido',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type ViajesVehiculosScalarFieldEnum = (typeof ViajesVehiculosScalarFieldEnum)[keyof typeof ViajesVehiculosScalarFieldEnum]


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


  export const TarjetaCombustibleOrderByRelevanceFieldEnum: {
    numero: 'numero',
    pin: 'pin'
  };

  export type TarjetaCombustibleOrderByRelevanceFieldEnum = (typeof TarjetaCombustibleOrderByRelevanceFieldEnum)[keyof typeof TarjetaCombustibleOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const VehiculoOrderByRelevanceFieldEnum: {
    chapa: 'chapa',
    marca: 'marca',
    tipo: 'tipo',
    areaTrabajoUuid: 'areaTrabajoUuid',
    choferCI: 'choferCI',
    tarjetaNumero: 'tarjetaNumero'
  };

  export type VehiculoOrderByRelevanceFieldEnum = (typeof VehiculoOrderByRelevanceFieldEnum)[keyof typeof VehiculoOrderByRelevanceFieldEnum]


  export const ControlCargasOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    folio: 'folio',
    comprobante: 'comprobante',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type ControlCargasOrderByRelevanceFieldEnum = (typeof ControlCargasOrderByRelevanceFieldEnum)[keyof typeof ControlCargasOrderByRelevanceFieldEnum]


  export const TarjetaCombustibleBajaOrderByRelevanceFieldEnum: {
    tarjetaNumero: 'tarjetaNumero'
  };

  export type TarjetaCombustibleBajaOrderByRelevanceFieldEnum = (typeof TarjetaCombustibleBajaOrderByRelevanceFieldEnum)[keyof typeof TarjetaCombustibleBajaOrderByRelevanceFieldEnum]


  export const ChoferesDespedidosOrderByRelevanceFieldEnum: {
    choferCI: 'choferCI'
  };

  export type ChoferesDespedidosOrderByRelevanceFieldEnum = (typeof ChoferesDespedidosOrderByRelevanceFieldEnum)[keyof typeof ChoferesDespedidosOrderByRelevanceFieldEnum]


  export const VehiculosMantenimientoOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    descripcion: 'descripcion',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type VehiculosMantenimientoOrderByRelevanceFieldEnum = (typeof VehiculosMantenimientoOrderByRelevanceFieldEnum)[keyof typeof VehiculosMantenimientoOrderByRelevanceFieldEnum]


  export const VehiculosBajaOrderByRelevanceFieldEnum: {
    vehiculoChapa: 'vehiculoChapa'
  };

  export type VehiculosBajaOrderByRelevanceFieldEnum = (typeof VehiculosBajaOrderByRelevanceFieldEnum)[keyof typeof VehiculosBajaOrderByRelevanceFieldEnum]


  export const ViajesVehiculosOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    lugarDestino: 'lugarDestino',
    vehiculoChapa: 'vehiculoChapa'
  };

  export type ViajesVehiculosOrderByRelevanceFieldEnum = (typeof ViajesVehiculosOrderByRelevanceFieldEnum)[keyof typeof ViajesVehiculosOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'TipoCombustible'
   */
  export type EnumTipoCombustibleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCombustible'>
    


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
    despido?: XOR<ChoferesDespedidosNullableScalarRelationFilter, ChoferesDespedidosWhereInput> | null
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
    despido?: ChoferesDespedidosOrderByWithRelationInput
    _relevance?: ChoferOrderByRelevanceInput
  }

  export type ChoferWhereUniqueInput = Prisma.AtLeast<{
    ci?: string
    licencia?: string
    AND?: ChoferWhereInput | ChoferWhereInput[]
    OR?: ChoferWhereInput[]
    NOT?: ChoferWhereInput | ChoferWhereInput[]
    nombre?: StringFilter<"Chofer"> | string
    edad?: IntFilter<"Chofer"> | number
    sexo?: StringFilter<"Chofer"> | string
    telefono?: StringFilter<"Chofer"> | string
    isAvailable?: BoolFilter<"Chofer"> | boolean
    vehiculos?: VehiculoListRelationFilter
    despido?: XOR<ChoferesDespedidosNullableScalarRelationFilter, ChoferesDespedidosWhereInput> | null
  }, "ci" | "licencia">

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
    numero?: StringFilter<"TarjetaCombustible"> | string
    pin?: StringFilter<"TarjetaCombustible"> | string
    estado?: EnumStateFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeFilter<"TarjetaCombustible"> | Date | string
    tipo?: EnumTipoCombustibleFilter<"TarjetaCombustible"> | $Enums.TipoCombustible
    saldo?: IntFilter<"TarjetaCombustible"> | number
    isAvailable?: BoolFilter<"TarjetaCombustible"> | boolean
    baja?: XOR<TarjetaCombustibleBajaNullableScalarRelationFilter, TarjetaCombustibleBajaWhereInput> | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }

  export type TarjetaCombustibleOrderByWithRelationInput = {
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    tipo?: SortOrder
    saldo?: SortOrder
    isAvailable?: SortOrder
    baja?: TarjetaCombustibleBajaOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: TarjetaCombustibleOrderByRelevanceInput
  }

  export type TarjetaCombustibleWhereUniqueInput = Prisma.AtLeast<{
    numero?: string
    AND?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    OR?: TarjetaCombustibleWhereInput[]
    NOT?: TarjetaCombustibleWhereInput | TarjetaCombustibleWhereInput[]
    pin?: StringFilter<"TarjetaCombustible"> | string
    estado?: EnumStateFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeFilter<"TarjetaCombustible"> | Date | string
    tipo?: EnumTipoCombustibleFilter<"TarjetaCombustible"> | $Enums.TipoCombustible
    saldo?: IntFilter<"TarjetaCombustible"> | number
    isAvailable?: BoolFilter<"TarjetaCombustible"> | boolean
    baja?: XOR<TarjetaCombustibleBajaNullableScalarRelationFilter, TarjetaCombustibleBajaWhereInput> | null
    vehiculo?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
  }, "numero">

  export type TarjetaCombustibleOrderByWithAggregationInput = {
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    tipo?: SortOrder
    saldo?: SortOrder
    isAvailable?: SortOrder
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
    numero?: StringWithAggregatesFilter<"TarjetaCombustible"> | string
    pin?: StringWithAggregatesFilter<"TarjetaCombustible"> | string
    estado?: EnumStateWithAggregatesFilter<"TarjetaCombustible"> | $Enums.State
    fecha_vencimiento?: DateTimeWithAggregatesFilter<"TarjetaCombustible"> | Date | string
    tipo?: EnumTipoCombustibleWithAggregatesFilter<"TarjetaCombustible"> | $Enums.TipoCombustible
    saldo?: IntWithAggregatesFilter<"TarjetaCombustible"> | number
    isAvailable?: BoolWithAggregatesFilter<"TarjetaCombustible"> | boolean
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    chapa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    consumo_km?: IntFilter<"Vehiculo"> | number
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
    tarjetaNumero?: StringNullableFilter<"Vehiculo"> | string | null
    cargas?: ControlCargasListRelationFilter
    viajes?: ViajesVehiculosListRelationFilter
    mantenimientos?: VehiculosMantenimientoListRelationFilter
    baja?: XOR<VehiculosBajaNullableScalarRelationFilter, VehiculosBajaWhereInput> | null
    areaTrabajo?: XOR<AreaTrabajoScalarRelationFilter, AreaTrabajoWhereInput>
    chofer?: XOR<ChoferNullableScalarRelationFilter, ChoferWhereInput> | null
    tarjeta?: XOR<TarjetaCombustibleNullableScalarRelationFilter, TarjetaCombustibleWhereInput> | null
  }

  export type VehiculoOrderByWithRelationInput = {
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    isAvailable?: SortOrder
    consumo_km?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrderInput | SortOrder
    tarjetaNumero?: SortOrderInput | SortOrder
    cargas?: ControlCargasOrderByRelationAggregateInput
    viajes?: ViajesVehiculosOrderByRelationAggregateInput
    mantenimientos?: VehiculosMantenimientoOrderByRelationAggregateInput
    baja?: VehiculosBajaOrderByWithRelationInput
    areaTrabajo?: AreaTrabajoOrderByWithRelationInput
    chofer?: ChoferOrderByWithRelationInput
    tarjeta?: TarjetaCombustibleOrderByWithRelationInput
    _relevance?: VehiculoOrderByRelevanceInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    chapa?: string
    tarjetaNumero?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    consumo_km?: IntFilter<"Vehiculo"> | number
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
    cargas?: ControlCargasListRelationFilter
    viajes?: ViajesVehiculosListRelationFilter
    mantenimientos?: VehiculosMantenimientoListRelationFilter
    baja?: XOR<VehiculosBajaNullableScalarRelationFilter, VehiculosBajaWhereInput> | null
    areaTrabajo?: XOR<AreaTrabajoScalarRelationFilter, AreaTrabajoWhereInput>
    chofer?: XOR<ChoferNullableScalarRelationFilter, ChoferWhereInput> | null
    tarjeta?: XOR<TarjetaCombustibleNullableScalarRelationFilter, TarjetaCombustibleWhereInput> | null
  }, "chapa" | "tarjetaNumero">

  export type VehiculoOrderByWithAggregationInput = {
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    isAvailable?: SortOrder
    consumo_km?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrderInput | SortOrder
    tarjetaNumero?: SortOrderInput | SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    chapa?: StringWithAggregatesFilter<"Vehiculo"> | string
    marca?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipo?: StringWithAggregatesFilter<"Vehiculo"> | string
    isAvailable?: BoolWithAggregatesFilter<"Vehiculo"> | boolean
    consumo_km?: IntWithAggregatesFilter<"Vehiculo"> | number
    areaTrabajoUuid?: StringWithAggregatesFilter<"Vehiculo"> | string
    choferCI?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    tarjetaNumero?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
  }

  export type ControlCargasWhereInput = {
    AND?: ControlCargasWhereInput | ControlCargasWhereInput[]
    OR?: ControlCargasWhereInput[]
    NOT?: ControlCargasWhereInput | ControlCargasWhereInput[]
    uuid?: StringFilter<"ControlCargas"> | string
    folio?: StringFilter<"ControlCargas"> | string
    comprobante?: StringFilter<"ControlCargas"> | string
    fecha?: DateTimeFilter<"ControlCargas"> | Date | string
    existencia?: IntFilter<"ControlCargas"> | number
    importe?: IntFilter<"ControlCargas"> | number
    consumo_dinero?: IntFilter<"ControlCargas"> | number
    vehiculoChapa?: StringFilter<"ControlCargas"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type ControlCargasOrderByWithRelationInput = {
    uuid?: SortOrder
    folio?: SortOrder
    comprobante?: SortOrder
    fecha?: SortOrder
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
    vehiculoChapa?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: ControlCargasOrderByRelevanceInput
  }

  export type ControlCargasWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    folio?: string
    comprobante?: string
    AND?: ControlCargasWhereInput | ControlCargasWhereInput[]
    OR?: ControlCargasWhereInput[]
    NOT?: ControlCargasWhereInput | ControlCargasWhereInput[]
    fecha?: DateTimeFilter<"ControlCargas"> | Date | string
    existencia?: IntFilter<"ControlCargas"> | number
    importe?: IntFilter<"ControlCargas"> | number
    consumo_dinero?: IntFilter<"ControlCargas"> | number
    vehiculoChapa?: StringFilter<"ControlCargas"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "uuid" | "folio" | "comprobante">

  export type ControlCargasOrderByWithAggregationInput = {
    uuid?: SortOrder
    folio?: SortOrder
    comprobante?: SortOrder
    fecha?: SortOrder
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
    vehiculoChapa?: SortOrder
    _count?: ControlCargasCountOrderByAggregateInput
    _avg?: ControlCargasAvgOrderByAggregateInput
    _max?: ControlCargasMaxOrderByAggregateInput
    _min?: ControlCargasMinOrderByAggregateInput
    _sum?: ControlCargasSumOrderByAggregateInput
  }

  export type ControlCargasScalarWhereWithAggregatesInput = {
    AND?: ControlCargasScalarWhereWithAggregatesInput | ControlCargasScalarWhereWithAggregatesInput[]
    OR?: ControlCargasScalarWhereWithAggregatesInput[]
    NOT?: ControlCargasScalarWhereWithAggregatesInput | ControlCargasScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"ControlCargas"> | string
    folio?: StringWithAggregatesFilter<"ControlCargas"> | string
    comprobante?: StringWithAggregatesFilter<"ControlCargas"> | string
    fecha?: DateTimeWithAggregatesFilter<"ControlCargas"> | Date | string
    existencia?: IntWithAggregatesFilter<"ControlCargas"> | number
    importe?: IntWithAggregatesFilter<"ControlCargas"> | number
    consumo_dinero?: IntWithAggregatesFilter<"ControlCargas"> | number
    vehiculoChapa?: StringWithAggregatesFilter<"ControlCargas"> | string
  }

  export type TarjetaCombustibleBajaWhereInput = {
    AND?: TarjetaCombustibleBajaWhereInput | TarjetaCombustibleBajaWhereInput[]
    OR?: TarjetaCombustibleBajaWhereInput[]
    NOT?: TarjetaCombustibleBajaWhereInput | TarjetaCombustibleBajaWhereInput[]
    tarjetaNumero?: StringFilter<"TarjetaCombustibleBaja"> | string
    tarjeta?: XOR<TarjetaCombustibleScalarRelationFilter, TarjetaCombustibleWhereInput>
  }

  export type TarjetaCombustibleBajaOrderByWithRelationInput = {
    tarjetaNumero?: SortOrder
    tarjeta?: TarjetaCombustibleOrderByWithRelationInput
    _relevance?: TarjetaCombustibleBajaOrderByRelevanceInput
  }

  export type TarjetaCombustibleBajaWhereUniqueInput = Prisma.AtLeast<{
    tarjetaNumero?: string
    AND?: TarjetaCombustibleBajaWhereInput | TarjetaCombustibleBajaWhereInput[]
    OR?: TarjetaCombustibleBajaWhereInput[]
    NOT?: TarjetaCombustibleBajaWhereInput | TarjetaCombustibleBajaWhereInput[]
    tarjeta?: XOR<TarjetaCombustibleScalarRelationFilter, TarjetaCombustibleWhereInput>
  }, "tarjetaNumero">

  export type TarjetaCombustibleBajaOrderByWithAggregationInput = {
    tarjetaNumero?: SortOrder
    _count?: TarjetaCombustibleBajaCountOrderByAggregateInput
    _max?: TarjetaCombustibleBajaMaxOrderByAggregateInput
    _min?: TarjetaCombustibleBajaMinOrderByAggregateInput
  }

  export type TarjetaCombustibleBajaScalarWhereWithAggregatesInput = {
    AND?: TarjetaCombustibleBajaScalarWhereWithAggregatesInput | TarjetaCombustibleBajaScalarWhereWithAggregatesInput[]
    OR?: TarjetaCombustibleBajaScalarWhereWithAggregatesInput[]
    NOT?: TarjetaCombustibleBajaScalarWhereWithAggregatesInput | TarjetaCombustibleBajaScalarWhereWithAggregatesInput[]
    tarjetaNumero?: StringWithAggregatesFilter<"TarjetaCombustibleBaja"> | string
  }

  export type ChoferesDespedidosWhereInput = {
    AND?: ChoferesDespedidosWhereInput | ChoferesDespedidosWhereInput[]
    OR?: ChoferesDespedidosWhereInput[]
    NOT?: ChoferesDespedidosWhereInput | ChoferesDespedidosWhereInput[]
    choferCI?: StringFilter<"ChoferesDespedidos"> | string
    chofer?: XOR<ChoferScalarRelationFilter, ChoferWhereInput>
  }

  export type ChoferesDespedidosOrderByWithRelationInput = {
    choferCI?: SortOrder
    chofer?: ChoferOrderByWithRelationInput
    _relevance?: ChoferesDespedidosOrderByRelevanceInput
  }

  export type ChoferesDespedidosWhereUniqueInput = Prisma.AtLeast<{
    choferCI?: string
    AND?: ChoferesDespedidosWhereInput | ChoferesDespedidosWhereInput[]
    OR?: ChoferesDespedidosWhereInput[]
    NOT?: ChoferesDespedidosWhereInput | ChoferesDespedidosWhereInput[]
    chofer?: XOR<ChoferScalarRelationFilter, ChoferWhereInput>
  }, "choferCI">

  export type ChoferesDespedidosOrderByWithAggregationInput = {
    choferCI?: SortOrder
    _count?: ChoferesDespedidosCountOrderByAggregateInput
    _max?: ChoferesDespedidosMaxOrderByAggregateInput
    _min?: ChoferesDespedidosMinOrderByAggregateInput
  }

  export type ChoferesDespedidosScalarWhereWithAggregatesInput = {
    AND?: ChoferesDespedidosScalarWhereWithAggregatesInput | ChoferesDespedidosScalarWhereWithAggregatesInput[]
    OR?: ChoferesDespedidosScalarWhereWithAggregatesInput[]
    NOT?: ChoferesDespedidosScalarWhereWithAggregatesInput | ChoferesDespedidosScalarWhereWithAggregatesInput[]
    choferCI?: StringWithAggregatesFilter<"ChoferesDespedidos"> | string
  }

  export type VehiculosMantenimientoWhereInput = {
    AND?: VehiculosMantenimientoWhereInput | VehiculosMantenimientoWhereInput[]
    OR?: VehiculosMantenimientoWhereInput[]
    NOT?: VehiculosMantenimientoWhereInput | VehiculosMantenimientoWhereInput[]
    uuid?: StringFilter<"VehiculosMantenimiento"> | string
    descripcion?: StringFilter<"VehiculosMantenimiento"> | string
    inicio?: DateTimeFilter<"VehiculosMantenimiento"> | Date | string
    fin?: DateTimeNullableFilter<"VehiculosMantenimiento"> | Date | string | null
    vehiculoChapa?: StringFilter<"VehiculosMantenimiento"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type VehiculosMantenimientoOrderByWithRelationInput = {
    uuid?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    vehiculoChapa?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: VehiculosMantenimientoOrderByRelevanceInput
  }

  export type VehiculosMantenimientoWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: VehiculosMantenimientoWhereInput | VehiculosMantenimientoWhereInput[]
    OR?: VehiculosMantenimientoWhereInput[]
    NOT?: VehiculosMantenimientoWhereInput | VehiculosMantenimientoWhereInput[]
    descripcion?: StringFilter<"VehiculosMantenimiento"> | string
    inicio?: DateTimeFilter<"VehiculosMantenimiento"> | Date | string
    fin?: DateTimeNullableFilter<"VehiculosMantenimiento"> | Date | string | null
    vehiculoChapa?: StringFilter<"VehiculosMantenimiento"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "uuid">

  export type VehiculosMantenimientoOrderByWithAggregationInput = {
    uuid?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fin?: SortOrderInput | SortOrder
    vehiculoChapa?: SortOrder
    _count?: VehiculosMantenimientoCountOrderByAggregateInput
    _max?: VehiculosMantenimientoMaxOrderByAggregateInput
    _min?: VehiculosMantenimientoMinOrderByAggregateInput
  }

  export type VehiculosMantenimientoScalarWhereWithAggregatesInput = {
    AND?: VehiculosMantenimientoScalarWhereWithAggregatesInput | VehiculosMantenimientoScalarWhereWithAggregatesInput[]
    OR?: VehiculosMantenimientoScalarWhereWithAggregatesInput[]
    NOT?: VehiculosMantenimientoScalarWhereWithAggregatesInput | VehiculosMantenimientoScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"VehiculosMantenimiento"> | string
    descripcion?: StringWithAggregatesFilter<"VehiculosMantenimiento"> | string
    inicio?: DateTimeWithAggregatesFilter<"VehiculosMantenimiento"> | Date | string
    fin?: DateTimeNullableWithAggregatesFilter<"VehiculosMantenimiento"> | Date | string | null
    vehiculoChapa?: StringWithAggregatesFilter<"VehiculosMantenimiento"> | string
  }

  export type VehiculosBajaWhereInput = {
    AND?: VehiculosBajaWhereInput | VehiculosBajaWhereInput[]
    OR?: VehiculosBajaWhereInput[]
    NOT?: VehiculosBajaWhereInput | VehiculosBajaWhereInput[]
    vehiculoChapa?: StringFilter<"VehiculosBaja"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type VehiculosBajaOrderByWithRelationInput = {
    vehiculoChapa?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: VehiculosBajaOrderByRelevanceInput
  }

  export type VehiculosBajaWhereUniqueInput = Prisma.AtLeast<{
    vehiculoChapa?: string
    AND?: VehiculosBajaWhereInput | VehiculosBajaWhereInput[]
    OR?: VehiculosBajaWhereInput[]
    NOT?: VehiculosBajaWhereInput | VehiculosBajaWhereInput[]
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "vehiculoChapa">

  export type VehiculosBajaOrderByWithAggregationInput = {
    vehiculoChapa?: SortOrder
    _count?: VehiculosBajaCountOrderByAggregateInput
    _max?: VehiculosBajaMaxOrderByAggregateInput
    _min?: VehiculosBajaMinOrderByAggregateInput
  }

  export type VehiculosBajaScalarWhereWithAggregatesInput = {
    AND?: VehiculosBajaScalarWhereWithAggregatesInput | VehiculosBajaScalarWhereWithAggregatesInput[]
    OR?: VehiculosBajaScalarWhereWithAggregatesInput[]
    NOT?: VehiculosBajaScalarWhereWithAggregatesInput | VehiculosBajaScalarWhereWithAggregatesInput[]
    vehiculoChapa?: StringWithAggregatesFilter<"VehiculosBaja"> | string
  }

  export type ViajesVehiculosWhereInput = {
    AND?: ViajesVehiculosWhereInput | ViajesVehiculosWhereInput[]
    OR?: ViajesVehiculosWhereInput[]
    NOT?: ViajesVehiculosWhereInput | ViajesVehiculosWhereInput[]
    uuid?: StringFilter<"ViajesVehiculos"> | string
    fechaSalida?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    fechaLlegada?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    lugarDestino?: StringFilter<"ViajesVehiculos"> | string
    combustibleConsumido?: IntFilter<"ViajesVehiculos"> | number
    vehiculoChapa?: StringFilter<"ViajesVehiculos"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }

  export type ViajesVehiculosOrderByWithRelationInput = {
    uuid?: SortOrder
    fechaSalida?: SortOrder
    fechaLlegada?: SortOrder
    lugarDestino?: SortOrder
    combustibleConsumido?: SortOrder
    vehiculoChapa?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    _relevance?: ViajesVehiculosOrderByRelevanceInput
  }

  export type ViajesVehiculosWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: ViajesVehiculosWhereInput | ViajesVehiculosWhereInput[]
    OR?: ViajesVehiculosWhereInput[]
    NOT?: ViajesVehiculosWhereInput | ViajesVehiculosWhereInput[]
    fechaSalida?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    fechaLlegada?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    lugarDestino?: StringFilter<"ViajesVehiculos"> | string
    combustibleConsumido?: IntFilter<"ViajesVehiculos"> | number
    vehiculoChapa?: StringFilter<"ViajesVehiculos"> | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
  }, "uuid">

  export type ViajesVehiculosOrderByWithAggregationInput = {
    uuid?: SortOrder
    fechaSalida?: SortOrder
    fechaLlegada?: SortOrder
    lugarDestino?: SortOrder
    combustibleConsumido?: SortOrder
    vehiculoChapa?: SortOrder
    _count?: ViajesVehiculosCountOrderByAggregateInput
    _avg?: ViajesVehiculosAvgOrderByAggregateInput
    _max?: ViajesVehiculosMaxOrderByAggregateInput
    _min?: ViajesVehiculosMinOrderByAggregateInput
    _sum?: ViajesVehiculosSumOrderByAggregateInput
  }

  export type ViajesVehiculosScalarWhereWithAggregatesInput = {
    AND?: ViajesVehiculosScalarWhereWithAggregatesInput | ViajesVehiculosScalarWhereWithAggregatesInput[]
    OR?: ViajesVehiculosScalarWhereWithAggregatesInput[]
    NOT?: ViajesVehiculosScalarWhereWithAggregatesInput | ViajesVehiculosScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"ViajesVehiculos"> | string
    fechaSalida?: DateTimeWithAggregatesFilter<"ViajesVehiculos"> | Date | string
    fechaLlegada?: DateTimeWithAggregatesFilter<"ViajesVehiculos"> | Date | string
    lugarDestino?: StringWithAggregatesFilter<"ViajesVehiculos"> | string
    combustibleConsumido?: IntWithAggregatesFilter<"ViajesVehiculos"> | number
    vehiculoChapa?: StringWithAggregatesFilter<"ViajesVehiculos"> | string
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
    despido?: ChoferesDespedidosCreateNestedOneWithoutChoferInput
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
    despido?: ChoferesDespedidosUncheckedCreateNestedOneWithoutChoferInput
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
    despido?: ChoferesDespedidosUpdateOneWithoutChoferNestedInput
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
    despido?: ChoferesDespedidosUncheckedUpdateOneWithoutChoferNestedInput
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
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    baja?: TarjetaCombustibleBajaCreateNestedOneWithoutTarjetaInput
    vehiculo?: VehiculoCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleUncheckedCreateInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    baja?: TarjetaCombustibleBajaUncheckedCreateNestedOneWithoutTarjetaInput
    vehiculo?: VehiculoUncheckedCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    baja?: TarjetaCombustibleBajaUpdateOneWithoutTarjetaNestedInput
    vehiculo?: VehiculoUpdateOneWithoutTarjetaNestedInput
  }

  export type TarjetaCombustibleUncheckedUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    baja?: TarjetaCombustibleBajaUncheckedUpdateOneWithoutTarjetaNestedInput
    vehiculo?: VehiculoUncheckedUpdateOneWithoutTarjetaNestedInput
  }

  export type TarjetaCombustibleCreateManyInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
  }

  export type TarjetaCombustibleUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TarjetaCombustibleUncheckedUpdateManyInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculoCreateInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
  }

  export type VehiculoUpdateManyMutationInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculoUncheckedUpdateManyInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ControlCargasCreateInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
    vehiculo: VehiculoCreateNestedOneWithoutCargasInput
  }

  export type ControlCargasUncheckedCreateInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
    vehiculoChapa: string
  }

  export type ControlCargasUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
    vehiculo?: VehiculoUpdateOneRequiredWithoutCargasNestedInput
  }

  export type ControlCargasUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type ControlCargasCreateManyInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
    vehiculoChapa: string
  }

  export type ControlCargasUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
  }

  export type ControlCargasUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type TarjetaCombustibleBajaCreateInput = {
    tarjeta: TarjetaCombustibleCreateNestedOneWithoutBajaInput
  }

  export type TarjetaCombustibleBajaUncheckedCreateInput = {
    tarjetaNumero: string
  }

  export type TarjetaCombustibleBajaUpdateInput = {
    tarjeta?: TarjetaCombustibleUpdateOneRequiredWithoutBajaNestedInput
  }

  export type TarjetaCombustibleBajaUncheckedUpdateInput = {
    tarjetaNumero?: StringFieldUpdateOperationsInput | string
  }

  export type TarjetaCombustibleBajaCreateManyInput = {
    tarjetaNumero: string
  }

  export type TarjetaCombustibleBajaUpdateManyMutationInput = {

  }

  export type TarjetaCombustibleBajaUncheckedUpdateManyInput = {
    tarjetaNumero?: StringFieldUpdateOperationsInput | string
  }

  export type ChoferesDespedidosCreateInput = {
    chofer: ChoferCreateNestedOneWithoutDespidoInput
  }

  export type ChoferesDespedidosUncheckedCreateInput = {
    choferCI: string
  }

  export type ChoferesDespedidosUpdateInput = {
    chofer?: ChoferUpdateOneRequiredWithoutDespidoNestedInput
  }

  export type ChoferesDespedidosUncheckedUpdateInput = {
    choferCI?: StringFieldUpdateOperationsInput | string
  }

  export type ChoferesDespedidosCreateManyInput = {
    choferCI: string
  }

  export type ChoferesDespedidosUpdateManyMutationInput = {

  }

  export type ChoferesDespedidosUncheckedUpdateManyInput = {
    choferCI?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculosMantenimientoCreateInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
    vehiculo: VehiculoCreateNestedOneWithoutMantenimientosInput
  }

  export type VehiculosMantenimientoUncheckedCreateInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
    vehiculoChapa: string
  }

  export type VehiculosMantenimientoUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculo?: VehiculoUpdateOneRequiredWithoutMantenimientosNestedInput
  }

  export type VehiculosMantenimientoUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculosMantenimientoCreateManyInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
    vehiculoChapa: string
  }

  export type VehiculosMantenimientoUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehiculosMantenimientoUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculosBajaCreateInput = {
    vehiculo: VehiculoCreateNestedOneWithoutBajaInput
  }

  export type VehiculosBajaUncheckedCreateInput = {
    vehiculoChapa: string
  }

  export type VehiculosBajaUpdateInput = {
    vehiculo?: VehiculoUpdateOneRequiredWithoutBajaNestedInput
  }

  export type VehiculosBajaUncheckedUpdateInput = {
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculosBajaCreateManyInput = {
    vehiculoChapa: string
  }

  export type VehiculosBajaUpdateManyMutationInput = {

  }

  export type VehiculosBajaUncheckedUpdateManyInput = {
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type ViajesVehiculosCreateInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
    vehiculo: VehiculoCreateNestedOneWithoutViajesInput
  }

  export type ViajesVehiculosUncheckedCreateInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
    vehiculoChapa: string
  }

  export type ViajesVehiculosUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
    vehiculo?: VehiculoUpdateOneRequiredWithoutViajesNestedInput
  }

  export type ViajesVehiculosUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
  }

  export type ViajesVehiculosCreateManyInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
    vehiculoChapa: string
  }

  export type ViajesVehiculosUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
  }

  export type ViajesVehiculosUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
    vehiculoChapa?: StringFieldUpdateOperationsInput | string
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

  export type ChoferesDespedidosNullableScalarRelationFilter = {
    is?: ChoferesDespedidosWhereInput | null
    isNot?: ChoferesDespedidosWhereInput | null
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

  export type EnumTipoCombustibleFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCombustible | EnumTipoCombustibleFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCombustible[]
    notIn?: $Enums.TipoCombustible[]
    not?: NestedEnumTipoCombustibleFilter<$PrismaModel> | $Enums.TipoCombustible
  }

  export type TarjetaCombustibleBajaNullableScalarRelationFilter = {
    is?: TarjetaCombustibleBajaWhereInput | null
    isNot?: TarjetaCombustibleBajaWhereInput | null
  }

  export type VehiculoNullableScalarRelationFilter = {
    is?: VehiculoWhereInput | null
    isNot?: VehiculoWhereInput | null
  }

  export type TarjetaCombustibleOrderByRelevanceInput = {
    fields: TarjetaCombustibleOrderByRelevanceFieldEnum | TarjetaCombustibleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TarjetaCombustibleCountOrderByAggregateInput = {
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    tipo?: SortOrder
    saldo?: SortOrder
    isAvailable?: SortOrder
  }

  export type TarjetaCombustibleAvgOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type TarjetaCombustibleMaxOrderByAggregateInput = {
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    tipo?: SortOrder
    saldo?: SortOrder
    isAvailable?: SortOrder
  }

  export type TarjetaCombustibleMinOrderByAggregateInput = {
    numero?: SortOrder
    pin?: SortOrder
    estado?: SortOrder
    fecha_vencimiento?: SortOrder
    tipo?: SortOrder
    saldo?: SortOrder
    isAvailable?: SortOrder
  }

  export type TarjetaCombustibleSumOrderByAggregateInput = {
    saldo?: SortOrder
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

  export type EnumTipoCombustibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCombustible | EnumTipoCombustibleFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCombustible[]
    notIn?: $Enums.TipoCombustible[]
    not?: NestedEnumTipoCombustibleWithAggregatesFilter<$PrismaModel> | $Enums.TipoCombustible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCombustibleFilter<$PrismaModel>
    _max?: NestedEnumTipoCombustibleFilter<$PrismaModel>
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

  export type ControlCargasListRelationFilter = {
    every?: ControlCargasWhereInput
    some?: ControlCargasWhereInput
    none?: ControlCargasWhereInput
  }

  export type ViajesVehiculosListRelationFilter = {
    every?: ViajesVehiculosWhereInput
    some?: ViajesVehiculosWhereInput
    none?: ViajesVehiculosWhereInput
  }

  export type VehiculosMantenimientoListRelationFilter = {
    every?: VehiculosMantenimientoWhereInput
    some?: VehiculosMantenimientoWhereInput
    none?: VehiculosMantenimientoWhereInput
  }

  export type VehiculosBajaNullableScalarRelationFilter = {
    is?: VehiculosBajaWhereInput | null
    isNot?: VehiculosBajaWhereInput | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ControlCargasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajesVehiculosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculosMantenimientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiculoOrderByRelevanceInput = {
    fields: VehiculoOrderByRelevanceFieldEnum | VehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculoCountOrderByAggregateInput = {
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    isAvailable?: SortOrder
    consumo_km?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
    tarjetaNumero?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    consumo_km?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    isAvailable?: SortOrder
    consumo_km?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
    tarjetaNumero?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    chapa?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    isAvailable?: SortOrder
    consumo_km?: SortOrder
    areaTrabajoUuid?: SortOrder
    choferCI?: SortOrder
    tarjetaNumero?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    consumo_km?: SortOrder
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

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type ControlCargasOrderByRelevanceInput = {
    fields: ControlCargasOrderByRelevanceFieldEnum | ControlCargasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ControlCargasCountOrderByAggregateInput = {
    uuid?: SortOrder
    folio?: SortOrder
    comprobante?: SortOrder
    fecha?: SortOrder
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ControlCargasAvgOrderByAggregateInput = {
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
  }

  export type ControlCargasMaxOrderByAggregateInput = {
    uuid?: SortOrder
    folio?: SortOrder
    comprobante?: SortOrder
    fecha?: SortOrder
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ControlCargasMinOrderByAggregateInput = {
    uuid?: SortOrder
    folio?: SortOrder
    comprobante?: SortOrder
    fecha?: SortOrder
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ControlCargasSumOrderByAggregateInput = {
    existencia?: SortOrder
    importe?: SortOrder
    consumo_dinero?: SortOrder
  }

  export type TarjetaCombustibleScalarRelationFilter = {
    is?: TarjetaCombustibleWhereInput
    isNot?: TarjetaCombustibleWhereInput
  }

  export type TarjetaCombustibleBajaOrderByRelevanceInput = {
    fields: TarjetaCombustibleBajaOrderByRelevanceFieldEnum | TarjetaCombustibleBajaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TarjetaCombustibleBajaCountOrderByAggregateInput = {
    tarjetaNumero?: SortOrder
  }

  export type TarjetaCombustibleBajaMaxOrderByAggregateInput = {
    tarjetaNumero?: SortOrder
  }

  export type TarjetaCombustibleBajaMinOrderByAggregateInput = {
    tarjetaNumero?: SortOrder
  }

  export type ChoferScalarRelationFilter = {
    is?: ChoferWhereInput
    isNot?: ChoferWhereInput
  }

  export type ChoferesDespedidosOrderByRelevanceInput = {
    fields: ChoferesDespedidosOrderByRelevanceFieldEnum | ChoferesDespedidosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChoferesDespedidosCountOrderByAggregateInput = {
    choferCI?: SortOrder
  }

  export type ChoferesDespedidosMaxOrderByAggregateInput = {
    choferCI?: SortOrder
  }

  export type ChoferesDespedidosMinOrderByAggregateInput = {
    choferCI?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VehiculosMantenimientoOrderByRelevanceInput = {
    fields: VehiculosMantenimientoOrderByRelevanceFieldEnum | VehiculosMantenimientoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculosMantenimientoCountOrderByAggregateInput = {
    uuid?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type VehiculosMantenimientoMaxOrderByAggregateInput = {
    uuid?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type VehiculosMantenimientoMinOrderByAggregateInput = {
    uuid?: SortOrder
    descripcion?: SortOrder
    inicio?: SortOrder
    fin?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VehiculosBajaOrderByRelevanceInput = {
    fields: VehiculosBajaOrderByRelevanceFieldEnum | VehiculosBajaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculosBajaCountOrderByAggregateInput = {
    vehiculoChapa?: SortOrder
  }

  export type VehiculosBajaMaxOrderByAggregateInput = {
    vehiculoChapa?: SortOrder
  }

  export type VehiculosBajaMinOrderByAggregateInput = {
    vehiculoChapa?: SortOrder
  }

  export type ViajesVehiculosOrderByRelevanceInput = {
    fields: ViajesVehiculosOrderByRelevanceFieldEnum | ViajesVehiculosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ViajesVehiculosCountOrderByAggregateInput = {
    uuid?: SortOrder
    fechaSalida?: SortOrder
    fechaLlegada?: SortOrder
    lugarDestino?: SortOrder
    combustibleConsumido?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ViajesVehiculosAvgOrderByAggregateInput = {
    combustibleConsumido?: SortOrder
  }

  export type ViajesVehiculosMaxOrderByAggregateInput = {
    uuid?: SortOrder
    fechaSalida?: SortOrder
    fechaLlegada?: SortOrder
    lugarDestino?: SortOrder
    combustibleConsumido?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ViajesVehiculosMinOrderByAggregateInput = {
    uuid?: SortOrder
    fechaSalida?: SortOrder
    fechaLlegada?: SortOrder
    lugarDestino?: SortOrder
    combustibleConsumido?: SortOrder
    vehiculoChapa?: SortOrder
  }

  export type ViajesVehiculosSumOrderByAggregateInput = {
    combustibleConsumido?: SortOrder
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

  export type ChoferesDespedidosCreateNestedOneWithoutChoferInput = {
    create?: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
    connectOrCreate?: ChoferesDespedidosCreateOrConnectWithoutChoferInput
    connect?: ChoferesDespedidosWhereUniqueInput
  }

  export type VehiculoUncheckedCreateNestedManyWithoutChoferInput = {
    create?: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput> | VehiculoCreateWithoutChoferInput[] | VehiculoUncheckedCreateWithoutChoferInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutChoferInput | VehiculoCreateOrConnectWithoutChoferInput[]
    createMany?: VehiculoCreateManyChoferInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type ChoferesDespedidosUncheckedCreateNestedOneWithoutChoferInput = {
    create?: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
    connectOrCreate?: ChoferesDespedidosCreateOrConnectWithoutChoferInput
    connect?: ChoferesDespedidosWhereUniqueInput
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

  export type ChoferesDespedidosUpdateOneWithoutChoferNestedInput = {
    create?: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
    connectOrCreate?: ChoferesDespedidosCreateOrConnectWithoutChoferInput
    upsert?: ChoferesDespedidosUpsertWithoutChoferInput
    disconnect?: ChoferesDespedidosWhereInput | boolean
    delete?: ChoferesDespedidosWhereInput | boolean
    connect?: ChoferesDespedidosWhereUniqueInput
    update?: XOR<XOR<ChoferesDespedidosUpdateToOneWithWhereWithoutChoferInput, ChoferesDespedidosUpdateWithoutChoferInput>, ChoferesDespedidosUncheckedUpdateWithoutChoferInput>
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

  export type ChoferesDespedidosUncheckedUpdateOneWithoutChoferNestedInput = {
    create?: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
    connectOrCreate?: ChoferesDespedidosCreateOrConnectWithoutChoferInput
    upsert?: ChoferesDespedidosUpsertWithoutChoferInput
    disconnect?: ChoferesDespedidosWhereInput | boolean
    delete?: ChoferesDespedidosWhereInput | boolean
    connect?: ChoferesDespedidosWhereUniqueInput
    update?: XOR<XOR<ChoferesDespedidosUpdateToOneWithWhereWithoutChoferInput, ChoferesDespedidosUpdateWithoutChoferInput>, ChoferesDespedidosUncheckedUpdateWithoutChoferInput>
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

  export type TarjetaCombustibleBajaCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: TarjetaCombustibleBajaCreateOrConnectWithoutTarjetaInput
    connect?: TarjetaCombustibleBajaWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutTarjetaInput
    connect?: VehiculoWhereUniqueInput
  }

  export type TarjetaCombustibleBajaUncheckedCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: TarjetaCombustibleBajaCreateOrConnectWithoutTarjetaInput
    connect?: TarjetaCombustibleBajaWhereUniqueInput
  }

  export type VehiculoUncheckedCreateNestedOneWithoutTarjetaInput = {
    create?: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutTarjetaInput
    connect?: VehiculoWhereUniqueInput
  }

  export type EnumStateFieldUpdateOperationsInput = {
    set?: $Enums.State
  }

  export type EnumTipoCombustibleFieldUpdateOperationsInput = {
    set?: $Enums.TipoCombustible
  }

  export type TarjetaCombustibleBajaUpdateOneWithoutTarjetaNestedInput = {
    create?: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: TarjetaCombustibleBajaCreateOrConnectWithoutTarjetaInput
    upsert?: TarjetaCombustibleBajaUpsertWithoutTarjetaInput
    disconnect?: TarjetaCombustibleBajaWhereInput | boolean
    delete?: TarjetaCombustibleBajaWhereInput | boolean
    connect?: TarjetaCombustibleBajaWhereUniqueInput
    update?: XOR<XOR<TarjetaCombustibleBajaUpdateToOneWithWhereWithoutTarjetaInput, TarjetaCombustibleBajaUpdateWithoutTarjetaInput>, TarjetaCombustibleBajaUncheckedUpdateWithoutTarjetaInput>
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

  export type TarjetaCombustibleBajaUncheckedUpdateOneWithoutTarjetaNestedInput = {
    create?: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: TarjetaCombustibleBajaCreateOrConnectWithoutTarjetaInput
    upsert?: TarjetaCombustibleBajaUpsertWithoutTarjetaInput
    disconnect?: TarjetaCombustibleBajaWhereInput | boolean
    delete?: TarjetaCombustibleBajaWhereInput | boolean
    connect?: TarjetaCombustibleBajaWhereUniqueInput
    update?: XOR<XOR<TarjetaCombustibleBajaUpdateToOneWithWhereWithoutTarjetaInput, TarjetaCombustibleBajaUpdateWithoutTarjetaInput>, TarjetaCombustibleBajaUncheckedUpdateWithoutTarjetaInput>
  }

  export type VehiculoUncheckedUpdateOneWithoutTarjetaNestedInput = {
    create?: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutTarjetaInput
    upsert?: VehiculoUpsertWithoutTarjetaInput
    disconnect?: VehiculoWhereInput | boolean
    delete?: VehiculoWhereInput | boolean
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutTarjetaInput, VehiculoUpdateWithoutTarjetaInput>, VehiculoUncheckedUpdateWithoutTarjetaInput>
  }

  export type ControlCargasCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput> | ControlCargasCreateWithoutVehiculoInput[] | ControlCargasUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ControlCargasCreateOrConnectWithoutVehiculoInput | ControlCargasCreateOrConnectWithoutVehiculoInput[]
    createMany?: ControlCargasCreateManyVehiculoInputEnvelope
    connect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
  }

  export type ViajesVehiculosCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput> | ViajesVehiculosCreateWithoutVehiculoInput[] | ViajesVehiculosUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajesVehiculosCreateOrConnectWithoutVehiculoInput | ViajesVehiculosCreateOrConnectWithoutVehiculoInput[]
    createMany?: ViajesVehiculosCreateManyVehiculoInputEnvelope
    connect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
  }

  export type VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput> | VehiculosMantenimientoCreateWithoutVehiculoInput[] | VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput | VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput[]
    createMany?: VehiculosMantenimientoCreateManyVehiculoInputEnvelope
    connect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
  }

  export type VehiculosBajaCreateNestedOneWithoutVehiculoInput = {
    create?: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: VehiculosBajaCreateOrConnectWithoutVehiculoInput
    connect?: VehiculosBajaWhereUniqueInput
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

  export type ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput> | ControlCargasCreateWithoutVehiculoInput[] | ControlCargasUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ControlCargasCreateOrConnectWithoutVehiculoInput | ControlCargasCreateOrConnectWithoutVehiculoInput[]
    createMany?: ControlCargasCreateManyVehiculoInputEnvelope
    connect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
  }

  export type ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput> | ViajesVehiculosCreateWithoutVehiculoInput[] | ViajesVehiculosUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajesVehiculosCreateOrConnectWithoutVehiculoInput | ViajesVehiculosCreateOrConnectWithoutVehiculoInput[]
    createMany?: ViajesVehiculosCreateManyVehiculoInputEnvelope
    connect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
  }

  export type VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput> | VehiculosMantenimientoCreateWithoutVehiculoInput[] | VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput | VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput[]
    createMany?: VehiculosMantenimientoCreateManyVehiculoInputEnvelope
    connect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
  }

  export type VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput = {
    create?: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: VehiculosBajaCreateOrConnectWithoutVehiculoInput
    connect?: VehiculosBajaWhereUniqueInput
  }

  export type ControlCargasUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput> | ControlCargasCreateWithoutVehiculoInput[] | ControlCargasUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ControlCargasCreateOrConnectWithoutVehiculoInput | ControlCargasCreateOrConnectWithoutVehiculoInput[]
    upsert?: ControlCargasUpsertWithWhereUniqueWithoutVehiculoInput | ControlCargasUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ControlCargasCreateManyVehiculoInputEnvelope
    set?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    disconnect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    delete?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    connect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    update?: ControlCargasUpdateWithWhereUniqueWithoutVehiculoInput | ControlCargasUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ControlCargasUpdateManyWithWhereWithoutVehiculoInput | ControlCargasUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ControlCargasScalarWhereInput | ControlCargasScalarWhereInput[]
  }

  export type ViajesVehiculosUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput> | ViajesVehiculosCreateWithoutVehiculoInput[] | ViajesVehiculosUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajesVehiculosCreateOrConnectWithoutVehiculoInput | ViajesVehiculosCreateOrConnectWithoutVehiculoInput[]
    upsert?: ViajesVehiculosUpsertWithWhereUniqueWithoutVehiculoInput | ViajesVehiculosUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ViajesVehiculosCreateManyVehiculoInputEnvelope
    set?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    disconnect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    delete?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    connect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    update?: ViajesVehiculosUpdateWithWhereUniqueWithoutVehiculoInput | ViajesVehiculosUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ViajesVehiculosUpdateManyWithWhereWithoutVehiculoInput | ViajesVehiculosUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ViajesVehiculosScalarWhereInput | ViajesVehiculosScalarWhereInput[]
  }

  export type VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput> | VehiculosMantenimientoCreateWithoutVehiculoInput[] | VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput | VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput[]
    upsert?: VehiculosMantenimientoUpsertWithWhereUniqueWithoutVehiculoInput | VehiculosMantenimientoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: VehiculosMantenimientoCreateManyVehiculoInputEnvelope
    set?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    disconnect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    delete?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    connect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    update?: VehiculosMantenimientoUpdateWithWhereUniqueWithoutVehiculoInput | VehiculosMantenimientoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: VehiculosMantenimientoUpdateManyWithWhereWithoutVehiculoInput | VehiculosMantenimientoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: VehiculosMantenimientoScalarWhereInput | VehiculosMantenimientoScalarWhereInput[]
  }

  export type VehiculosBajaUpdateOneWithoutVehiculoNestedInput = {
    create?: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: VehiculosBajaCreateOrConnectWithoutVehiculoInput
    upsert?: VehiculosBajaUpsertWithoutVehiculoInput
    disconnect?: VehiculosBajaWhereInput | boolean
    delete?: VehiculosBajaWhereInput | boolean
    connect?: VehiculosBajaWhereUniqueInput
    update?: XOR<XOR<VehiculosBajaUpdateToOneWithWhereWithoutVehiculoInput, VehiculosBajaUpdateWithoutVehiculoInput>, VehiculosBajaUncheckedUpdateWithoutVehiculoInput>
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput> | ControlCargasCreateWithoutVehiculoInput[] | ControlCargasUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ControlCargasCreateOrConnectWithoutVehiculoInput | ControlCargasCreateOrConnectWithoutVehiculoInput[]
    upsert?: ControlCargasUpsertWithWhereUniqueWithoutVehiculoInput | ControlCargasUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ControlCargasCreateManyVehiculoInputEnvelope
    set?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    disconnect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    delete?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    connect?: ControlCargasWhereUniqueInput | ControlCargasWhereUniqueInput[]
    update?: ControlCargasUpdateWithWhereUniqueWithoutVehiculoInput | ControlCargasUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ControlCargasUpdateManyWithWhereWithoutVehiculoInput | ControlCargasUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ControlCargasScalarWhereInput | ControlCargasScalarWhereInput[]
  }

  export type ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput> | ViajesVehiculosCreateWithoutVehiculoInput[] | ViajesVehiculosUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajesVehiculosCreateOrConnectWithoutVehiculoInput | ViajesVehiculosCreateOrConnectWithoutVehiculoInput[]
    upsert?: ViajesVehiculosUpsertWithWhereUniqueWithoutVehiculoInput | ViajesVehiculosUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ViajesVehiculosCreateManyVehiculoInputEnvelope
    set?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    disconnect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    delete?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    connect?: ViajesVehiculosWhereUniqueInput | ViajesVehiculosWhereUniqueInput[]
    update?: ViajesVehiculosUpdateWithWhereUniqueWithoutVehiculoInput | ViajesVehiculosUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ViajesVehiculosUpdateManyWithWhereWithoutVehiculoInput | ViajesVehiculosUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ViajesVehiculosScalarWhereInput | ViajesVehiculosScalarWhereInput[]
  }

  export type VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput> | VehiculosMantenimientoCreateWithoutVehiculoInput[] | VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput | VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput[]
    upsert?: VehiculosMantenimientoUpsertWithWhereUniqueWithoutVehiculoInput | VehiculosMantenimientoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: VehiculosMantenimientoCreateManyVehiculoInputEnvelope
    set?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    disconnect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    delete?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    connect?: VehiculosMantenimientoWhereUniqueInput | VehiculosMantenimientoWhereUniqueInput[]
    update?: VehiculosMantenimientoUpdateWithWhereUniqueWithoutVehiculoInput | VehiculosMantenimientoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: VehiculosMantenimientoUpdateManyWithWhereWithoutVehiculoInput | VehiculosMantenimientoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: VehiculosMantenimientoScalarWhereInput | VehiculosMantenimientoScalarWhereInput[]
  }

  export type VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput = {
    create?: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
    connectOrCreate?: VehiculosBajaCreateOrConnectWithoutVehiculoInput
    upsert?: VehiculosBajaUpsertWithoutVehiculoInput
    disconnect?: VehiculosBajaWhereInput | boolean
    delete?: VehiculosBajaWhereInput | boolean
    connect?: VehiculosBajaWhereUniqueInput
    update?: XOR<XOR<VehiculosBajaUpdateToOneWithWhereWithoutVehiculoInput, VehiculosBajaUpdateWithoutVehiculoInput>, VehiculosBajaUncheckedUpdateWithoutVehiculoInput>
  }

  export type VehiculoCreateNestedOneWithoutCargasInput = {
    create?: XOR<VehiculoCreateWithoutCargasInput, VehiculoUncheckedCreateWithoutCargasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutCargasInput
    connect?: VehiculoWhereUniqueInput
  }

  export type VehiculoUpdateOneRequiredWithoutCargasNestedInput = {
    create?: XOR<VehiculoCreateWithoutCargasInput, VehiculoUncheckedCreateWithoutCargasInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutCargasInput
    upsert?: VehiculoUpsertWithoutCargasInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutCargasInput, VehiculoUpdateWithoutCargasInput>, VehiculoUncheckedUpdateWithoutCargasInput>
  }

  export type TarjetaCombustibleCreateNestedOneWithoutBajaInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutBajaInput, TarjetaCombustibleUncheckedCreateWithoutBajaInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutBajaInput
    connect?: TarjetaCombustibleWhereUniqueInput
  }

  export type TarjetaCombustibleUpdateOneRequiredWithoutBajaNestedInput = {
    create?: XOR<TarjetaCombustibleCreateWithoutBajaInput, TarjetaCombustibleUncheckedCreateWithoutBajaInput>
    connectOrCreate?: TarjetaCombustibleCreateOrConnectWithoutBajaInput
    upsert?: TarjetaCombustibleUpsertWithoutBajaInput
    connect?: TarjetaCombustibleWhereUniqueInput
    update?: XOR<XOR<TarjetaCombustibleUpdateToOneWithWhereWithoutBajaInput, TarjetaCombustibleUpdateWithoutBajaInput>, TarjetaCombustibleUncheckedUpdateWithoutBajaInput>
  }

  export type ChoferCreateNestedOneWithoutDespidoInput = {
    create?: XOR<ChoferCreateWithoutDespidoInput, ChoferUncheckedCreateWithoutDespidoInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutDespidoInput
    connect?: ChoferWhereUniqueInput
  }

  export type ChoferUpdateOneRequiredWithoutDespidoNestedInput = {
    create?: XOR<ChoferCreateWithoutDespidoInput, ChoferUncheckedCreateWithoutDespidoInput>
    connectOrCreate?: ChoferCreateOrConnectWithoutDespidoInput
    upsert?: ChoferUpsertWithoutDespidoInput
    connect?: ChoferWhereUniqueInput
    update?: XOR<XOR<ChoferUpdateToOneWithWhereWithoutDespidoInput, ChoferUpdateWithoutDespidoInput>, ChoferUncheckedUpdateWithoutDespidoInput>
  }

  export type VehiculoCreateNestedOneWithoutMantenimientosInput = {
    create?: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutMantenimientosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehiculoUpdateOneRequiredWithoutMantenimientosNestedInput = {
    create?: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutMantenimientosInput
    upsert?: VehiculoUpsertWithoutMantenimientosInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutMantenimientosInput, VehiculoUpdateWithoutMantenimientosInput>, VehiculoUncheckedUpdateWithoutMantenimientosInput>
  }

  export type VehiculoCreateNestedOneWithoutBajaInput = {
    create?: XOR<VehiculoCreateWithoutBajaInput, VehiculoUncheckedCreateWithoutBajaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutBajaInput
    connect?: VehiculoWhereUniqueInput
  }

  export type VehiculoUpdateOneRequiredWithoutBajaNestedInput = {
    create?: XOR<VehiculoCreateWithoutBajaInput, VehiculoUncheckedCreateWithoutBajaInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutBajaInput
    upsert?: VehiculoUpsertWithoutBajaInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutBajaInput, VehiculoUpdateWithoutBajaInput>, VehiculoUncheckedUpdateWithoutBajaInput>
  }

  export type VehiculoCreateNestedOneWithoutViajesInput = {
    create?: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutViajesInput
    connect?: VehiculoWhereUniqueInput
  }

  export type VehiculoUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutViajesInput
    upsert?: VehiculoUpsertWithoutViajesInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutViajesInput, VehiculoUpdateWithoutViajesInput>, VehiculoUncheckedUpdateWithoutViajesInput>
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

  export type NestedEnumTipoCombustibleFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCombustible | EnumTipoCombustibleFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCombustible[]
    notIn?: $Enums.TipoCombustible[]
    not?: NestedEnumTipoCombustibleFilter<$PrismaModel> | $Enums.TipoCombustible
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

  export type NestedEnumTipoCombustibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCombustible | EnumTipoCombustibleFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCombustible[]
    notIn?: $Enums.TipoCombustible[]
    not?: NestedEnumTipoCombustibleWithAggregatesFilter<$PrismaModel> | $Enums.TipoCombustible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCombustibleFilter<$PrismaModel>
    _max?: NestedEnumTipoCombustibleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VehiculoCreateWithoutChoferInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutChoferInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutChoferInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutChoferInput, VehiculoUncheckedCreateWithoutChoferInput>
  }

  export type VehiculoCreateManyChoferInputEnvelope = {
    data: VehiculoCreateManyChoferInput | VehiculoCreateManyChoferInput[]
    skipDuplicates?: boolean
  }

  export type ChoferesDespedidosCreateWithoutChoferInput = {

  }

  export type ChoferesDespedidosUncheckedCreateWithoutChoferInput = {

  }

  export type ChoferesDespedidosCreateOrConnectWithoutChoferInput = {
    where: ChoferesDespedidosWhereUniqueInput
    create: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
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
    chapa?: StringFilter<"Vehiculo"> | string
    marca?: StringFilter<"Vehiculo"> | string
    tipo?: StringFilter<"Vehiculo"> | string
    isAvailable?: BoolFilter<"Vehiculo"> | boolean
    consumo_km?: IntFilter<"Vehiculo"> | number
    areaTrabajoUuid?: StringFilter<"Vehiculo"> | string
    choferCI?: StringNullableFilter<"Vehiculo"> | string | null
    tarjetaNumero?: StringNullableFilter<"Vehiculo"> | string | null
  }

  export type ChoferesDespedidosUpsertWithoutChoferInput = {
    update: XOR<ChoferesDespedidosUpdateWithoutChoferInput, ChoferesDespedidosUncheckedUpdateWithoutChoferInput>
    create: XOR<ChoferesDespedidosCreateWithoutChoferInput, ChoferesDespedidosUncheckedCreateWithoutChoferInput>
    where?: ChoferesDespedidosWhereInput
  }

  export type ChoferesDespedidosUpdateToOneWithWhereWithoutChoferInput = {
    where?: ChoferesDespedidosWhereInput
    data: XOR<ChoferesDespedidosUpdateWithoutChoferInput, ChoferesDespedidosUncheckedUpdateWithoutChoferInput>
  }

  export type ChoferesDespedidosUpdateWithoutChoferInput = {

  }

  export type ChoferesDespedidosUncheckedUpdateWithoutChoferInput = {

  }

  export type VehiculoCreateWithoutAreaTrabajoInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutAreaTrabajoInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    choferCI?: string | null
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
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

  export type TarjetaCombustibleBajaCreateWithoutTarjetaInput = {

  }

  export type TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput = {

  }

  export type TarjetaCombustibleBajaCreateOrConnectWithoutTarjetaInput = {
    where: TarjetaCombustibleBajaWhereUniqueInput
    create: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
  }

  export type VehiculoCreateWithoutTarjetaInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
  }

  export type VehiculoUncheckedCreateWithoutTarjetaInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutTarjetaInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutTarjetaInput, VehiculoUncheckedCreateWithoutTarjetaInput>
  }

  export type TarjetaCombustibleBajaUpsertWithoutTarjetaInput = {
    update: XOR<TarjetaCombustibleBajaUpdateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedUpdateWithoutTarjetaInput>
    create: XOR<TarjetaCombustibleBajaCreateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedCreateWithoutTarjetaInput>
    where?: TarjetaCombustibleBajaWhereInput
  }

  export type TarjetaCombustibleBajaUpdateToOneWithWhereWithoutTarjetaInput = {
    where?: TarjetaCombustibleBajaWhereInput
    data: XOR<TarjetaCombustibleBajaUpdateWithoutTarjetaInput, TarjetaCombustibleBajaUncheckedUpdateWithoutTarjetaInput>
  }

  export type TarjetaCombustibleBajaUpdateWithoutTarjetaInput = {

  }

  export type TarjetaCombustibleBajaUncheckedUpdateWithoutTarjetaInput = {

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
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutTarjetaInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type ControlCargasCreateWithoutVehiculoInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
  }

  export type ControlCargasUncheckedCreateWithoutVehiculoInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
  }

  export type ControlCargasCreateOrConnectWithoutVehiculoInput = {
    where: ControlCargasWhereUniqueInput
    create: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput>
  }

  export type ControlCargasCreateManyVehiculoInputEnvelope = {
    data: ControlCargasCreateManyVehiculoInput | ControlCargasCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type ViajesVehiculosCreateWithoutVehiculoInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
  }

  export type ViajesVehiculosUncheckedCreateWithoutVehiculoInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
  }

  export type ViajesVehiculosCreateOrConnectWithoutVehiculoInput = {
    where: ViajesVehiculosWhereUniqueInput
    create: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput>
  }

  export type ViajesVehiculosCreateManyVehiculoInputEnvelope = {
    data: ViajesVehiculosCreateManyVehiculoInput | ViajesVehiculosCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculosMantenimientoCreateWithoutVehiculoInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
  }

  export type VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
  }

  export type VehiculosMantenimientoCreateOrConnectWithoutVehiculoInput = {
    where: VehiculosMantenimientoWhereUniqueInput
    create: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput>
  }

  export type VehiculosMantenimientoCreateManyVehiculoInputEnvelope = {
    data: VehiculosMantenimientoCreateManyVehiculoInput | VehiculosMantenimientoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculosBajaCreateWithoutVehiculoInput = {

  }

  export type VehiculosBajaUncheckedCreateWithoutVehiculoInput = {

  }

  export type VehiculosBajaCreateOrConnectWithoutVehiculoInput = {
    where: VehiculosBajaWhereUniqueInput
    create: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
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
    despido?: ChoferesDespedidosCreateNestedOneWithoutChoferInput
  }

  export type ChoferUncheckedCreateWithoutVehiculosInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
    despido?: ChoferesDespedidosUncheckedCreateNestedOneWithoutChoferInput
  }

  export type ChoferCreateOrConnectWithoutVehiculosInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutVehiculosInput, ChoferUncheckedCreateWithoutVehiculosInput>
  }

  export type TarjetaCombustibleCreateWithoutVehiculoInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    baja?: TarjetaCombustibleBajaCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleUncheckedCreateWithoutVehiculoInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    baja?: TarjetaCombustibleBajaUncheckedCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleCreateOrConnectWithoutVehiculoInput = {
    where: TarjetaCombustibleWhereUniqueInput
    create: XOR<TarjetaCombustibleCreateWithoutVehiculoInput, TarjetaCombustibleUncheckedCreateWithoutVehiculoInput>
  }

  export type ControlCargasUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ControlCargasWhereUniqueInput
    update: XOR<ControlCargasUpdateWithoutVehiculoInput, ControlCargasUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ControlCargasCreateWithoutVehiculoInput, ControlCargasUncheckedCreateWithoutVehiculoInput>
  }

  export type ControlCargasUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ControlCargasWhereUniqueInput
    data: XOR<ControlCargasUpdateWithoutVehiculoInput, ControlCargasUncheckedUpdateWithoutVehiculoInput>
  }

  export type ControlCargasUpdateManyWithWhereWithoutVehiculoInput = {
    where: ControlCargasScalarWhereInput
    data: XOR<ControlCargasUpdateManyMutationInput, ControlCargasUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type ControlCargasScalarWhereInput = {
    AND?: ControlCargasScalarWhereInput | ControlCargasScalarWhereInput[]
    OR?: ControlCargasScalarWhereInput[]
    NOT?: ControlCargasScalarWhereInput | ControlCargasScalarWhereInput[]
    uuid?: StringFilter<"ControlCargas"> | string
    folio?: StringFilter<"ControlCargas"> | string
    comprobante?: StringFilter<"ControlCargas"> | string
    fecha?: DateTimeFilter<"ControlCargas"> | Date | string
    existencia?: IntFilter<"ControlCargas"> | number
    importe?: IntFilter<"ControlCargas"> | number
    consumo_dinero?: IntFilter<"ControlCargas"> | number
    vehiculoChapa?: StringFilter<"ControlCargas"> | string
  }

  export type ViajesVehiculosUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ViajesVehiculosWhereUniqueInput
    update: XOR<ViajesVehiculosUpdateWithoutVehiculoInput, ViajesVehiculosUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ViajesVehiculosCreateWithoutVehiculoInput, ViajesVehiculosUncheckedCreateWithoutVehiculoInput>
  }

  export type ViajesVehiculosUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ViajesVehiculosWhereUniqueInput
    data: XOR<ViajesVehiculosUpdateWithoutVehiculoInput, ViajesVehiculosUncheckedUpdateWithoutVehiculoInput>
  }

  export type ViajesVehiculosUpdateManyWithWhereWithoutVehiculoInput = {
    where: ViajesVehiculosScalarWhereInput
    data: XOR<ViajesVehiculosUpdateManyMutationInput, ViajesVehiculosUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type ViajesVehiculosScalarWhereInput = {
    AND?: ViajesVehiculosScalarWhereInput | ViajesVehiculosScalarWhereInput[]
    OR?: ViajesVehiculosScalarWhereInput[]
    NOT?: ViajesVehiculosScalarWhereInput | ViajesVehiculosScalarWhereInput[]
    uuid?: StringFilter<"ViajesVehiculos"> | string
    fechaSalida?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    fechaLlegada?: DateTimeFilter<"ViajesVehiculos"> | Date | string
    lugarDestino?: StringFilter<"ViajesVehiculos"> | string
    combustibleConsumido?: IntFilter<"ViajesVehiculos"> | number
    vehiculoChapa?: StringFilter<"ViajesVehiculos"> | string
  }

  export type VehiculosMantenimientoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: VehiculosMantenimientoWhereUniqueInput
    update: XOR<VehiculosMantenimientoUpdateWithoutVehiculoInput, VehiculosMantenimientoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<VehiculosMantenimientoCreateWithoutVehiculoInput, VehiculosMantenimientoUncheckedCreateWithoutVehiculoInput>
  }

  export type VehiculosMantenimientoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: VehiculosMantenimientoWhereUniqueInput
    data: XOR<VehiculosMantenimientoUpdateWithoutVehiculoInput, VehiculosMantenimientoUncheckedUpdateWithoutVehiculoInput>
  }

  export type VehiculosMantenimientoUpdateManyWithWhereWithoutVehiculoInput = {
    where: VehiculosMantenimientoScalarWhereInput
    data: XOR<VehiculosMantenimientoUpdateManyMutationInput, VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type VehiculosMantenimientoScalarWhereInput = {
    AND?: VehiculosMantenimientoScalarWhereInput | VehiculosMantenimientoScalarWhereInput[]
    OR?: VehiculosMantenimientoScalarWhereInput[]
    NOT?: VehiculosMantenimientoScalarWhereInput | VehiculosMantenimientoScalarWhereInput[]
    uuid?: StringFilter<"VehiculosMantenimiento"> | string
    descripcion?: StringFilter<"VehiculosMantenimiento"> | string
    inicio?: DateTimeFilter<"VehiculosMantenimiento"> | Date | string
    fin?: DateTimeNullableFilter<"VehiculosMantenimiento"> | Date | string | null
    vehiculoChapa?: StringFilter<"VehiculosMantenimiento"> | string
  }

  export type VehiculosBajaUpsertWithoutVehiculoInput = {
    update: XOR<VehiculosBajaUpdateWithoutVehiculoInput, VehiculosBajaUncheckedUpdateWithoutVehiculoInput>
    create: XOR<VehiculosBajaCreateWithoutVehiculoInput, VehiculosBajaUncheckedCreateWithoutVehiculoInput>
    where?: VehiculosBajaWhereInput
  }

  export type VehiculosBajaUpdateToOneWithWhereWithoutVehiculoInput = {
    where?: VehiculosBajaWhereInput
    data: XOR<VehiculosBajaUpdateWithoutVehiculoInput, VehiculosBajaUncheckedUpdateWithoutVehiculoInput>
  }

  export type VehiculosBajaUpdateWithoutVehiculoInput = {

  }

  export type VehiculosBajaUncheckedUpdateWithoutVehiculoInput = {

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
    despido?: ChoferesDespedidosUpdateOneWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    despido?: ChoferesDespedidosUncheckedUpdateOneWithoutChoferNestedInput
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
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    baja?: TarjetaCombustibleBajaUpdateOneWithoutTarjetaNestedInput
  }

  export type TarjetaCombustibleUncheckedUpdateWithoutVehiculoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    baja?: TarjetaCombustibleBajaUncheckedUpdateOneWithoutTarjetaNestedInput
  }

  export type VehiculoCreateWithoutCargasInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutCargasInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutCargasInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutCargasInput, VehiculoUncheckedCreateWithoutCargasInput>
  }

  export type VehiculoUpsertWithoutCargasInput = {
    update: XOR<VehiculoUpdateWithoutCargasInput, VehiculoUncheckedUpdateWithoutCargasInput>
    create: XOR<VehiculoCreateWithoutCargasInput, VehiculoUncheckedCreateWithoutCargasInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutCargasInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutCargasInput, VehiculoUncheckedUpdateWithoutCargasInput>
  }

  export type VehiculoUpdateWithoutCargasInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutCargasInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type TarjetaCombustibleCreateWithoutBajaInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    vehiculo?: VehiculoCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleUncheckedCreateWithoutBajaInput = {
    numero: string
    pin: string
    estado?: $Enums.State
    fecha_vencimiento: Date | string
    tipo: $Enums.TipoCombustible
    saldo?: number
    isAvailable?: boolean
    vehiculo?: VehiculoUncheckedCreateNestedOneWithoutTarjetaInput
  }

  export type TarjetaCombustibleCreateOrConnectWithoutBajaInput = {
    where: TarjetaCombustibleWhereUniqueInput
    create: XOR<TarjetaCombustibleCreateWithoutBajaInput, TarjetaCombustibleUncheckedCreateWithoutBajaInput>
  }

  export type TarjetaCombustibleUpsertWithoutBajaInput = {
    update: XOR<TarjetaCombustibleUpdateWithoutBajaInput, TarjetaCombustibleUncheckedUpdateWithoutBajaInput>
    create: XOR<TarjetaCombustibleCreateWithoutBajaInput, TarjetaCombustibleUncheckedCreateWithoutBajaInput>
    where?: TarjetaCombustibleWhereInput
  }

  export type TarjetaCombustibleUpdateToOneWithWhereWithoutBajaInput = {
    where?: TarjetaCombustibleWhereInput
    data: XOR<TarjetaCombustibleUpdateWithoutBajaInput, TarjetaCombustibleUncheckedUpdateWithoutBajaInput>
  }

  export type TarjetaCombustibleUpdateWithoutBajaInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculo?: VehiculoUpdateOneWithoutTarjetaNestedInput
  }

  export type TarjetaCombustibleUncheckedUpdateWithoutBajaInput = {
    numero?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    estado?: EnumStateFieldUpdateOperationsInput | $Enums.State
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo?: EnumTipoCombustibleFieldUpdateOperationsInput | $Enums.TipoCombustible
    saldo?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculo?: VehiculoUncheckedUpdateOneWithoutTarjetaNestedInput
  }

  export type ChoferCreateWithoutDespidoInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
    vehiculos?: VehiculoCreateNestedManyWithoutChoferInput
  }

  export type ChoferUncheckedCreateWithoutDespidoInput = {
    nombre: string
    edad: number
    sexo: string
    ci: string
    licencia: string
    telefono: string
    isAvailable?: boolean
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutChoferInput
  }

  export type ChoferCreateOrConnectWithoutDespidoInput = {
    where: ChoferWhereUniqueInput
    create: XOR<ChoferCreateWithoutDespidoInput, ChoferUncheckedCreateWithoutDespidoInput>
  }

  export type ChoferUpsertWithoutDespidoInput = {
    update: XOR<ChoferUpdateWithoutDespidoInput, ChoferUncheckedUpdateWithoutDespidoInput>
    create: XOR<ChoferCreateWithoutDespidoInput, ChoferUncheckedCreateWithoutDespidoInput>
    where?: ChoferWhereInput
  }

  export type ChoferUpdateToOneWithWhereWithoutDespidoInput = {
    where?: ChoferWhereInput
    data: XOR<ChoferUpdateWithoutDespidoInput, ChoferUncheckedUpdateWithoutDespidoInput>
  }

  export type ChoferUpdateWithoutDespidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUpdateManyWithoutChoferNestedInput
  }

  export type ChoferUncheckedUpdateWithoutDespidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    edad?: IntFieldUpdateOperationsInput | number
    sexo?: StringFieldUpdateOperationsInput | string
    ci?: StringFieldUpdateOperationsInput | string
    licencia?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    vehiculos?: VehiculoUncheckedUpdateManyWithoutChoferNestedInput
  }

  export type VehiculoCreateWithoutMantenimientosInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutMantenimientosInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutMantenimientosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
  }

  export type VehiculoUpsertWithoutMantenimientosInput = {
    update: XOR<VehiculoUpdateWithoutMantenimientosInput, VehiculoUncheckedUpdateWithoutMantenimientosInput>
    create: XOR<VehiculoCreateWithoutMantenimientosInput, VehiculoUncheckedCreateWithoutMantenimientosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutMantenimientosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutMantenimientosInput, VehiculoUncheckedUpdateWithoutMantenimientosInput>
  }

  export type VehiculoUpdateWithoutMantenimientosInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutMantenimientosInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoCreateWithoutBajaInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutBajaInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajesVehiculosUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutBajaInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutBajaInput, VehiculoUncheckedCreateWithoutBajaInput>
  }

  export type VehiculoUpsertWithoutBajaInput = {
    update: XOR<VehiculoUpdateWithoutBajaInput, VehiculoUncheckedUpdateWithoutBajaInput>
    create: XOR<VehiculoCreateWithoutBajaInput, VehiculoUncheckedCreateWithoutBajaInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutBajaInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutBajaInput, VehiculoUncheckedUpdateWithoutBajaInput>
  }

  export type VehiculoUpdateWithoutBajaInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutBajaInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateWithoutViajesInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    cargas?: ControlCargasCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaCreateNestedOneWithoutVehiculoInput
    areaTrabajo: AreaTrabajoCreateNestedOneWithoutVehiculosInput
    chofer?: ChoferCreateNestedOneWithoutVehiculosInput
    tarjeta?: TarjetaCombustibleCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutViajesInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    choferCI?: string | null
    tarjetaNumero?: string | null
    cargas?: ControlCargasUncheckedCreateNestedManyWithoutVehiculoInput
    mantenimientos?: VehiculosMantenimientoUncheckedCreateNestedManyWithoutVehiculoInput
    baja?: VehiculosBajaUncheckedCreateNestedOneWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutViajesInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
  }

  export type VehiculoUpsertWithoutViajesInput = {
    update: XOR<VehiculoUpdateWithoutViajesInput, VehiculoUncheckedUpdateWithoutViajesInput>
    create: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutViajesInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutViajesInput, VehiculoUncheckedUpdateWithoutViajesInput>
  }

  export type VehiculoUpdateWithoutViajesInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutViajesInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyChoferInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    areaTrabajoUuid: string
    tarjetaNumero?: string | null
  }

  export type VehiculoUpdateWithoutChoferInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    areaTrabajo?: AreaTrabajoUpdateOneRequiredWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutChoferInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutChoferInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    areaTrabajoUuid?: StringFieldUpdateOperationsInput | string
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiculoCreateManyAreaTrabajoInput = {
    chapa: string
    marca: string
    tipo: string
    isAvailable?: boolean
    consumo_km: number
    choferCI?: string | null
    tarjetaNumero?: string | null
  }

  export type VehiculoUpdateWithoutAreaTrabajoInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    cargas?: ControlCargasUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUpdateOneWithoutVehiculoNestedInput
    chofer?: ChoferUpdateOneWithoutVehiculosNestedInput
    tarjeta?: TarjetaCombustibleUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutAreaTrabajoInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
    cargas?: ControlCargasUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajesVehiculosUncheckedUpdateManyWithoutVehiculoNestedInput
    mantenimientos?: VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoNestedInput
    baja?: VehiculosBajaUncheckedUpdateOneWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutAreaTrabajoInput = {
    chapa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    consumo_km?: IntFieldUpdateOperationsInput | number
    choferCI?: NullableStringFieldUpdateOperationsInput | string | null
    tarjetaNumero?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ControlCargasCreateManyVehiculoInput = {
    uuid?: string
    folio: string
    comprobante: string
    fecha: Date | string
    existencia: number
    importe: number
    consumo_dinero: number
  }

  export type ViajesVehiculosCreateManyVehiculoInput = {
    uuid?: string
    fechaSalida: Date | string
    fechaLlegada: Date | string
    lugarDestino: string
    combustibleConsumido: number
  }

  export type VehiculosMantenimientoCreateManyVehiculoInput = {
    uuid?: string
    descripcion: string
    inicio: Date | string
    fin?: Date | string | null
  }

  export type ControlCargasUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
  }

  export type ControlCargasUncheckedUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
  }

  export type ControlCargasUncheckedUpdateManyWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    folio?: StringFieldUpdateOperationsInput | string
    comprobante?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    existencia?: IntFieldUpdateOperationsInput | number
    importe?: IntFieldUpdateOperationsInput | number
    consumo_dinero?: IntFieldUpdateOperationsInput | number
  }

  export type ViajesVehiculosUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
  }

  export type ViajesVehiculosUncheckedUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
  }

  export type ViajesVehiculosUncheckedUpdateManyWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaLlegada?: DateTimeFieldUpdateOperationsInput | Date | string
    lugarDestino?: StringFieldUpdateOperationsInput | string
    combustibleConsumido?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculosMantenimientoUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehiculosMantenimientoUncheckedUpdateWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehiculosMantenimientoUncheckedUpdateManyWithoutVehiculoInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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