
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
 * Model tipo_usuario
 * 
 */
export type tipo_usuario = $Result.DefaultSelection<Prisma.$tipo_usuarioPayload>
/**
 * Model estado
 * 
 */
export type estado = $Result.DefaultSelection<Prisma.$estadoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_creacion_proyecto
 * 
 */
export type usuario_creacion_proyecto = $Result.DefaultSelection<Prisma.$usuario_creacion_proyectoPayload>
/**
 * Model usuario_inversion_proyecto
 * 
 */
export type usuario_inversion_proyecto = $Result.DefaultSelection<Prisma.$usuario_inversion_proyectoPayload>
/**
 * Model proyecto
 * 
 */
export type proyecto = $Result.DefaultSelection<Prisma.$proyectoPayload>
/**
 * Model paso
 * 
 */
export type paso = $Result.DefaultSelection<Prisma.$pasoPayload>
/**
 * Model tecnologia
 * 
 */
export type tecnologia = $Result.DefaultSelection<Prisma.$tecnologiaPayload>
/**
 * Model tecnologia_proyecto
 * 
 */
export type tecnologia_proyecto = $Result.DefaultSelection<Prisma.$tecnologia_proyectoPayload>
/**
 * Model recurso
 * 
 */
export type recurso = $Result.DefaultSelection<Prisma.$recursoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tipo_usuarios
 * const tipo_usuarios = await prisma.tipo_usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Tipo_usuarios
   * const tipo_usuarios = await prisma.tipo_usuario.findMany()
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
   * `prisma.tipo_usuario`: Exposes CRUD operations for the **tipo_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipo_usuarios
    * const tipo_usuarios = await prisma.tipo_usuario.findMany()
    * ```
    */
  get tipo_usuario(): Prisma.tipo_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.estadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_creacion_proyecto`: Exposes CRUD operations for the **usuario_creacion_proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_creacion_proyectos
    * const usuario_creacion_proyectos = await prisma.usuario_creacion_proyecto.findMany()
    * ```
    */
  get usuario_creacion_proyecto(): Prisma.usuario_creacion_proyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_inversion_proyecto`: Exposes CRUD operations for the **usuario_inversion_proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_inversion_proyectos
    * const usuario_inversion_proyectos = await prisma.usuario_inversion_proyecto.findMany()
    * ```
    */
  get usuario_inversion_proyecto(): Prisma.usuario_inversion_proyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proyecto`: Exposes CRUD operations for the **proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proyectos
    * const proyectos = await prisma.proyecto.findMany()
    * ```
    */
  get proyecto(): Prisma.proyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paso`: Exposes CRUD operations for the **paso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasos
    * const pasos = await prisma.paso.findMany()
    * ```
    */
  get paso(): Prisma.pasoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tecnologia`: Exposes CRUD operations for the **tecnologia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnologias
    * const tecnologias = await prisma.tecnologia.findMany()
    * ```
    */
  get tecnologia(): Prisma.tecnologiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tecnologia_proyecto`: Exposes CRUD operations for the **tecnologia_proyecto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnologia_proyectos
    * const tecnologia_proyectos = await prisma.tecnologia_proyecto.findMany()
    * ```
    */
  get tecnologia_proyecto(): Prisma.tecnologia_proyectoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurso`: Exposes CRUD operations for the **recurso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recursos
    * const recursos = await prisma.recurso.findMany()
    * ```
    */
  get recurso(): Prisma.recursoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    tipo_usuario: 'tipo_usuario',
    estado: 'estado',
    usuario: 'usuario',
    usuario_creacion_proyecto: 'usuario_creacion_proyecto',
    usuario_inversion_proyecto: 'usuario_inversion_proyecto',
    proyecto: 'proyecto',
    paso: 'paso',
    tecnologia: 'tecnologia',
    tecnologia_proyecto: 'tecnologia_proyecto',
    recurso: 'recurso'
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
      modelProps: "tipo_usuario" | "estado" | "usuario" | "usuario_creacion_proyecto" | "usuario_inversion_proyecto" | "proyecto" | "paso" | "tecnologia" | "tecnologia_proyecto" | "recurso"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tipo_usuario: {
        payload: Prisma.$tipo_usuarioPayload<ExtArgs>
        fields: Prisma.tipo_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipo_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipo_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          findFirst: {
            args: Prisma.tipo_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipo_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          findMany: {
            args: Prisma.tipo_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>[]
          }
          create: {
            args: Prisma.tipo_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          createMany: {
            args: Prisma.tipo_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipo_usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>[]
          }
          delete: {
            args: Prisma.tipo_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          update: {
            args: Prisma.tipo_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.tipo_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipo_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipo_usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>[]
          }
          upsert: {
            args: Prisma.tipo_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipo_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Tipo_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo_usuario>
          }
          groupBy: {
            args: Prisma.tipo_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipo_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipo_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tipo_usuarioCountAggregateOutputType> | number
          }
        }
      }
      estado: {
        payload: Prisma.$estadoPayload<ExtArgs>
        fields: Prisma.estadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findFirst: {
            args: Prisma.estadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          findMany: {
            args: Prisma.estadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          create: {
            args: Prisma.estadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          createMany: {
            args: Prisma.estadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.estadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          delete: {
            args: Prisma.estadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          update: {
            args: Prisma.estadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          deleteMany: {
            args: Prisma.estadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.estadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>[]
          }
          upsert: {
            args: Prisma.estadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.estadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.estadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_creacion_proyecto: {
        payload: Prisma.$usuario_creacion_proyectoPayload<ExtArgs>
        fields: Prisma.usuario_creacion_proyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_creacion_proyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_creacion_proyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          findFirst: {
            args: Prisma.usuario_creacion_proyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_creacion_proyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          findMany: {
            args: Prisma.usuario_creacion_proyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>[]
          }
          create: {
            args: Prisma.usuario_creacion_proyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          createMany: {
            args: Prisma.usuario_creacion_proyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_creacion_proyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>[]
          }
          delete: {
            args: Prisma.usuario_creacion_proyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          update: {
            args: Prisma.usuario_creacion_proyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          deleteMany: {
            args: Prisma.usuario_creacion_proyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_creacion_proyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_creacion_proyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>[]
          }
          upsert: {
            args: Prisma.usuario_creacion_proyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_creacion_proyectoPayload>
          }
          aggregate: {
            args: Prisma.Usuario_creacion_proyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_creacion_proyecto>
          }
          groupBy: {
            args: Prisma.usuario_creacion_proyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_creacion_proyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_creacion_proyectoCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_creacion_proyectoCountAggregateOutputType> | number
          }
        }
      }
      usuario_inversion_proyecto: {
        payload: Prisma.$usuario_inversion_proyectoPayload<ExtArgs>
        fields: Prisma.usuario_inversion_proyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_inversion_proyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_inversion_proyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          findFirst: {
            args: Prisma.usuario_inversion_proyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_inversion_proyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          findMany: {
            args: Prisma.usuario_inversion_proyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>[]
          }
          create: {
            args: Prisma.usuario_inversion_proyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          createMany: {
            args: Prisma.usuario_inversion_proyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_inversion_proyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>[]
          }
          delete: {
            args: Prisma.usuario_inversion_proyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          update: {
            args: Prisma.usuario_inversion_proyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          deleteMany: {
            args: Prisma.usuario_inversion_proyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_inversion_proyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_inversion_proyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>[]
          }
          upsert: {
            args: Prisma.usuario_inversion_proyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_inversion_proyectoPayload>
          }
          aggregate: {
            args: Prisma.Usuario_inversion_proyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_inversion_proyecto>
          }
          groupBy: {
            args: Prisma.usuario_inversion_proyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_inversion_proyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_inversion_proyectoCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_inversion_proyectoCountAggregateOutputType> | number
          }
        }
      }
      proyecto: {
        payload: Prisma.$proyectoPayload<ExtArgs>
        fields: Prisma.proyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          findFirst: {
            args: Prisma.proyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          findMany: {
            args: Prisma.proyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          create: {
            args: Prisma.proyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          createMany: {
            args: Prisma.proyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.proyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          delete: {
            args: Prisma.proyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          update: {
            args: Prisma.proyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          deleteMany: {
            args: Prisma.proyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.proyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>[]
          }
          upsert: {
            args: Prisma.proyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proyectoPayload>
          }
          aggregate: {
            args: Prisma.ProyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProyecto>
          }
          groupBy: {
            args: Prisma.proyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.proyectoCountArgs<ExtArgs>
            result: $Utils.Optional<ProyectoCountAggregateOutputType> | number
          }
        }
      }
      paso: {
        payload: Prisma.$pasoPayload<ExtArgs>
        fields: Prisma.pasoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pasoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pasoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          findFirst: {
            args: Prisma.pasoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pasoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          findMany: {
            args: Prisma.pasoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>[]
          }
          create: {
            args: Prisma.pasoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          createMany: {
            args: Prisma.pasoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pasoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>[]
          }
          delete: {
            args: Prisma.pasoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          update: {
            args: Prisma.pasoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          deleteMany: {
            args: Prisma.pasoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pasoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pasoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>[]
          }
          upsert: {
            args: Prisma.pasoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pasoPayload>
          }
          aggregate: {
            args: Prisma.PasoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaso>
          }
          groupBy: {
            args: Prisma.pasoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pasoCountArgs<ExtArgs>
            result: $Utils.Optional<PasoCountAggregateOutputType> | number
          }
        }
      }
      tecnologia: {
        payload: Prisma.$tecnologiaPayload<ExtArgs>
        fields: Prisma.tecnologiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tecnologiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tecnologiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          findFirst: {
            args: Prisma.tecnologiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tecnologiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          findMany: {
            args: Prisma.tecnologiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>[]
          }
          create: {
            args: Prisma.tecnologiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          createMany: {
            args: Prisma.tecnologiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tecnologiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>[]
          }
          delete: {
            args: Prisma.tecnologiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          update: {
            args: Prisma.tecnologiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          deleteMany: {
            args: Prisma.tecnologiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tecnologiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tecnologiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>[]
          }
          upsert: {
            args: Prisma.tecnologiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologiaPayload>
          }
          aggregate: {
            args: Prisma.TecnologiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnologia>
          }
          groupBy: {
            args: Prisma.tecnologiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TecnologiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tecnologiaCountArgs<ExtArgs>
            result: $Utils.Optional<TecnologiaCountAggregateOutputType> | number
          }
        }
      }
      tecnologia_proyecto: {
        payload: Prisma.$tecnologia_proyectoPayload<ExtArgs>
        fields: Prisma.tecnologia_proyectoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tecnologia_proyectoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tecnologia_proyectoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          findFirst: {
            args: Prisma.tecnologia_proyectoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tecnologia_proyectoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          findMany: {
            args: Prisma.tecnologia_proyectoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>[]
          }
          create: {
            args: Prisma.tecnologia_proyectoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          createMany: {
            args: Prisma.tecnologia_proyectoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tecnologia_proyectoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>[]
          }
          delete: {
            args: Prisma.tecnologia_proyectoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          update: {
            args: Prisma.tecnologia_proyectoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          deleteMany: {
            args: Prisma.tecnologia_proyectoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tecnologia_proyectoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tecnologia_proyectoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>[]
          }
          upsert: {
            args: Prisma.tecnologia_proyectoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tecnologia_proyectoPayload>
          }
          aggregate: {
            args: Prisma.Tecnologia_proyectoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnologia_proyecto>
          }
          groupBy: {
            args: Prisma.tecnologia_proyectoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tecnologia_proyectoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tecnologia_proyectoCountArgs<ExtArgs>
            result: $Utils.Optional<Tecnologia_proyectoCountAggregateOutputType> | number
          }
        }
      }
      recurso: {
        payload: Prisma.$recursoPayload<ExtArgs>
        fields: Prisma.recursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          findFirst: {
            args: Prisma.recursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          findMany: {
            args: Prisma.recursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>[]
          }
          create: {
            args: Prisma.recursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          createMany: {
            args: Prisma.recursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>[]
          }
          delete: {
            args: Prisma.recursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          update: {
            args: Prisma.recursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          deleteMany: {
            args: Prisma.recursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recursoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>[]
          }
          upsert: {
            args: Prisma.recursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recursoPayload>
          }
          aggregate: {
            args: Prisma.RecursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurso>
          }
          groupBy: {
            args: Prisma.recursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.recursoCountArgs<ExtArgs>
            result: $Utils.Optional<RecursoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    tipo_usuario?: tipo_usuarioOmit
    estado?: estadoOmit
    usuario?: usuarioOmit
    usuario_creacion_proyecto?: usuario_creacion_proyectoOmit
    usuario_inversion_proyecto?: usuario_inversion_proyectoOmit
    proyecto?: proyectoOmit
    paso?: pasoOmit
    tecnologia?: tecnologiaOmit
    tecnologia_proyecto?: tecnologia_proyectoOmit
    recurso?: recursoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type Tipo_usuarioCountOutputType
   */

  export type Tipo_usuarioCountOutputType = {
    usuarios: number
  }

  export type Tipo_usuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Tipo_usuarioCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tipo_usuarioCountOutputType without action
   */
  export type Tipo_usuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo_usuarioCountOutputType
     */
    select?: Tipo_usuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipo_usuarioCountOutputType without action
   */
  export type Tipo_usuarioCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    usuarios: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | EstadoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    proyectos_creados: number
    proyectos_invertidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos_creados?: boolean | UsuarioCountOutputTypeCountProyectos_creadosArgs
    proyectos_invertidos?: boolean | UsuarioCountOutputTypeCountProyectos_invertidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProyectos_creadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_creacion_proyectoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProyectos_invertidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_inversion_proyectoWhereInput
  }


  /**
   * Count Type ProyectoCountOutputType
   */

  export type ProyectoCountOutputType = {
    pasos: number
    tecnologias: number
    recursos: number
    proyectos_usuario: number
    proyectos_inversion: number
  }

  export type ProyectoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasos?: boolean | ProyectoCountOutputTypeCountPasosArgs
    tecnologias?: boolean | ProyectoCountOutputTypeCountTecnologiasArgs
    recursos?: boolean | ProyectoCountOutputTypeCountRecursosArgs
    proyectos_usuario?: boolean | ProyectoCountOutputTypeCountProyectos_usuarioArgs
    proyectos_inversion?: boolean | ProyectoCountOutputTypeCountProyectos_inversionArgs
  }

  // Custom InputTypes
  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProyectoCountOutputType
     */
    select?: ProyectoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountPasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pasoWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountTecnologiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tecnologia_proyectoWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountRecursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recursoWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountProyectos_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_creacion_proyectoWhereInput
  }

  /**
   * ProyectoCountOutputType without action
   */
  export type ProyectoCountOutputTypeCountProyectos_inversionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_inversion_proyectoWhereInput
  }


  /**
   * Count Type TecnologiaCountOutputType
   */

  export type TecnologiaCountOutputType = {
    proyectos: number
  }

  export type TecnologiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | TecnologiaCountOutputTypeCountProyectosArgs
  }

  // Custom InputTypes
  /**
   * TecnologiaCountOutputType without action
   */
  export type TecnologiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TecnologiaCountOutputType
     */
    select?: TecnologiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TecnologiaCountOutputType without action
   */
  export type TecnologiaCountOutputTypeCountProyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tecnologia_proyectoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tipo_usuario
   */

  export type AggregateTipo_usuario = {
    _count: Tipo_usuarioCountAggregateOutputType | null
    _avg: Tipo_usuarioAvgAggregateOutputType | null
    _sum: Tipo_usuarioSumAggregateOutputType | null
    _min: Tipo_usuarioMinAggregateOutputType | null
    _max: Tipo_usuarioMaxAggregateOutputType | null
  }

  export type Tipo_usuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type Tipo_usuarioSumAggregateOutputType = {
    id: number | null
  }

  export type Tipo_usuarioMinAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tipo_usuarioMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
  }

  export type Tipo_usuarioCountAggregateOutputType = {
    id: number
    tipo: number
    _all: number
  }


  export type Tipo_usuarioAvgAggregateInputType = {
    id?: true
  }

  export type Tipo_usuarioSumAggregateInputType = {
    id?: true
  }

  export type Tipo_usuarioMinAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tipo_usuarioMaxAggregateInputType = {
    id?: true
    tipo?: true
  }

  export type Tipo_usuarioCountAggregateInputType = {
    id?: true
    tipo?: true
    _all?: true
  }

  export type Tipo_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_usuario to aggregate.
     */
    where?: tipo_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_usuarios to fetch.
     */
    orderBy?: tipo_usuarioOrderByWithRelationInput | tipo_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipo_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipo_usuarios
    **/
    _count?: true | Tipo_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipo_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipo_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipo_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipo_usuarioMaxAggregateInputType
  }

  export type GetTipo_usuarioAggregateType<T extends Tipo_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo_usuario[P]>
      : GetScalarType<T[P], AggregateTipo_usuario[P]>
  }




  export type tipo_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipo_usuarioWhereInput
    orderBy?: tipo_usuarioOrderByWithAggregationInput | tipo_usuarioOrderByWithAggregationInput[]
    by: Tipo_usuarioScalarFieldEnum[] | Tipo_usuarioScalarFieldEnum
    having?: tipo_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipo_usuarioCountAggregateInputType | true
    _avg?: Tipo_usuarioAvgAggregateInputType
    _sum?: Tipo_usuarioSumAggregateInputType
    _min?: Tipo_usuarioMinAggregateInputType
    _max?: Tipo_usuarioMaxAggregateInputType
  }

  export type Tipo_usuarioGroupByOutputType = {
    id: number
    tipo: string
    _count: Tipo_usuarioCountAggregateOutputType | null
    _avg: Tipo_usuarioAvgAggregateOutputType | null
    _sum: Tipo_usuarioSumAggregateOutputType | null
    _min: Tipo_usuarioMinAggregateOutputType | null
    _max: Tipo_usuarioMaxAggregateOutputType | null
  }

  type GetTipo_usuarioGroupByPayload<T extends tipo_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipo_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipo_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipo_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tipo_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type tipo_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    usuarios?: boolean | tipo_usuario$usuariosArgs<ExtArgs>
    _count?: boolean | Tipo_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo_usuario"]>

  export type tipo_usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipo_usuario"]>

  export type tipo_usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipo_usuario"]>

  export type tipo_usuarioSelectScalar = {
    id?: boolean
    tipo?: boolean
  }

  export type tipo_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo", ExtArgs["result"]["tipo_usuario"]>
  export type tipo_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tipo_usuario$usuariosArgs<ExtArgs>
    _count?: boolean | Tipo_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tipo_usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tipo_usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tipo_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipo_usuario"
    objects: {
      usuarios: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
    }, ExtArgs["result"]["tipo_usuario"]>
    composites: {}
  }

  type tipo_usuarioGetPayload<S extends boolean | null | undefined | tipo_usuarioDefaultArgs> = $Result.GetResult<Prisma.$tipo_usuarioPayload, S>

  type tipo_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipo_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipo_usuarioCountAggregateInputType | true
    }

  export interface tipo_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipo_usuario'], meta: { name: 'tipo_usuario' } }
    /**
     * Find zero or one Tipo_usuario that matches the filter.
     * @param {tipo_usuarioFindUniqueArgs} args - Arguments to find a Tipo_usuario
     * @example
     * // Get one Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipo_usuarioFindUniqueArgs>(args: SelectSubset<T, tipo_usuarioFindUniqueArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipo_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Tipo_usuario
     * @example
     * // Get one Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipo_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tipo_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioFindFirstArgs} args - Arguments to find a Tipo_usuario
     * @example
     * // Get one Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipo_usuarioFindFirstArgs>(args?: SelectSubset<T, tipo_usuarioFindFirstArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioFindFirstOrThrowArgs} args - Arguments to find a Tipo_usuario
     * @example
     * // Get one Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipo_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tipo_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipo_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipo_usuarios
     * const tipo_usuarios = await prisma.tipo_usuario.findMany()
     * 
     * // Get first 10 Tipo_usuarios
     * const tipo_usuarios = await prisma.tipo_usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipo_usuarioWithIdOnly = await prisma.tipo_usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipo_usuarioFindManyArgs>(args?: SelectSubset<T, tipo_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo_usuario.
     * @param {tipo_usuarioCreateArgs} args - Arguments to create a Tipo_usuario.
     * @example
     * // Create one Tipo_usuario
     * const Tipo_usuario = await prisma.tipo_usuario.create({
     *   data: {
     *     // ... data to create a Tipo_usuario
     *   }
     * })
     * 
     */
    create<T extends tipo_usuarioCreateArgs>(args: SelectSubset<T, tipo_usuarioCreateArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipo_usuarios.
     * @param {tipo_usuarioCreateManyArgs} args - Arguments to create many Tipo_usuarios.
     * @example
     * // Create many Tipo_usuarios
     * const tipo_usuario = await prisma.tipo_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipo_usuarioCreateManyArgs>(args?: SelectSubset<T, tipo_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipo_usuarios and returns the data saved in the database.
     * @param {tipo_usuarioCreateManyAndReturnArgs} args - Arguments to create many Tipo_usuarios.
     * @example
     * // Create many Tipo_usuarios
     * const tipo_usuario = await prisma.tipo_usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipo_usuarios and only return the `id`
     * const tipo_usuarioWithIdOnly = await prisma.tipo_usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipo_usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, tipo_usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo_usuario.
     * @param {tipo_usuarioDeleteArgs} args - Arguments to delete one Tipo_usuario.
     * @example
     * // Delete one Tipo_usuario
     * const Tipo_usuario = await prisma.tipo_usuario.delete({
     *   where: {
     *     // ... filter to delete one Tipo_usuario
     *   }
     * })
     * 
     */
    delete<T extends tipo_usuarioDeleteArgs>(args: SelectSubset<T, tipo_usuarioDeleteArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo_usuario.
     * @param {tipo_usuarioUpdateArgs} args - Arguments to update one Tipo_usuario.
     * @example
     * // Update one Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipo_usuarioUpdateArgs>(args: SelectSubset<T, tipo_usuarioUpdateArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipo_usuarios.
     * @param {tipo_usuarioDeleteManyArgs} args - Arguments to filter Tipo_usuarios to delete.
     * @example
     * // Delete a few Tipo_usuarios
     * const { count } = await prisma.tipo_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipo_usuarioDeleteManyArgs>(args?: SelectSubset<T, tipo_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipo_usuarios
     * const tipo_usuario = await prisma.tipo_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipo_usuarioUpdateManyArgs>(args: SelectSubset<T, tipo_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipo_usuarios and returns the data updated in the database.
     * @param {tipo_usuarioUpdateManyAndReturnArgs} args - Arguments to update many Tipo_usuarios.
     * @example
     * // Update many Tipo_usuarios
     * const tipo_usuario = await prisma.tipo_usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipo_usuarios and only return the `id`
     * const tipo_usuarioWithIdOnly = await prisma.tipo_usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tipo_usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, tipo_usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo_usuario.
     * @param {tipo_usuarioUpsertArgs} args - Arguments to update or create a Tipo_usuario.
     * @example
     * // Update or create a Tipo_usuario
     * const tipo_usuario = await prisma.tipo_usuario.upsert({
     *   create: {
     *     // ... data to create a Tipo_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo_usuario we want to update
     *   }
     * })
     */
    upsert<T extends tipo_usuarioUpsertArgs>(args: SelectSubset<T, tipo_usuarioUpsertArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipo_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioCountArgs} args - Arguments to filter Tipo_usuarios to count.
     * @example
     * // Count the number of Tipo_usuarios
     * const count = await prisma.tipo_usuario.count({
     *   where: {
     *     // ... the filter for the Tipo_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tipo_usuarioCountArgs>(
      args?: Subset<T, tipo_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipo_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipo_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tipo_usuarioAggregateArgs>(args: Subset<T, Tipo_usuarioAggregateArgs>): Prisma.PrismaPromise<GetTipo_usuarioAggregateType<T>>

    /**
     * Group by Tipo_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipo_usuarioGroupByArgs} args - Group by arguments.
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
      T extends tipo_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipo_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: tipo_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tipo_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipo_usuario model
   */
  readonly fields: tipo_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipo_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipo_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tipo_usuario$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tipo_usuario$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tipo_usuario model
   */
  interface tipo_usuarioFieldRefs {
    readonly id: FieldRef<"tipo_usuario", 'Int'>
    readonly tipo: FieldRef<"tipo_usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipo_usuario findUnique
   */
  export type tipo_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tipo_usuario to fetch.
     */
    where: tipo_usuarioWhereUniqueInput
  }

  /**
   * tipo_usuario findUniqueOrThrow
   */
  export type tipo_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tipo_usuario to fetch.
     */
    where: tipo_usuarioWhereUniqueInput
  }

  /**
   * tipo_usuario findFirst
   */
  export type tipo_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tipo_usuario to fetch.
     */
    where?: tipo_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_usuarios to fetch.
     */
    orderBy?: tipo_usuarioOrderByWithRelationInput | tipo_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_usuarios.
     */
    cursor?: tipo_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_usuarios.
     */
    distinct?: Tipo_usuarioScalarFieldEnum | Tipo_usuarioScalarFieldEnum[]
  }

  /**
   * tipo_usuario findFirstOrThrow
   */
  export type tipo_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tipo_usuario to fetch.
     */
    where?: tipo_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_usuarios to fetch.
     */
    orderBy?: tipo_usuarioOrderByWithRelationInput | tipo_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipo_usuarios.
     */
    cursor?: tipo_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipo_usuarios.
     */
    distinct?: Tipo_usuarioScalarFieldEnum | Tipo_usuarioScalarFieldEnum[]
  }

  /**
   * tipo_usuario findMany
   */
  export type tipo_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tipo_usuarios to fetch.
     */
    where?: tipo_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipo_usuarios to fetch.
     */
    orderBy?: tipo_usuarioOrderByWithRelationInput | tipo_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipo_usuarios.
     */
    cursor?: tipo_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipo_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipo_usuarios.
     */
    skip?: number
    distinct?: Tipo_usuarioScalarFieldEnum | Tipo_usuarioScalarFieldEnum[]
  }

  /**
   * tipo_usuario create
   */
  export type tipo_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tipo_usuario.
     */
    data: XOR<tipo_usuarioCreateInput, tipo_usuarioUncheckedCreateInput>
  }

  /**
   * tipo_usuario createMany
   */
  export type tipo_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipo_usuarios.
     */
    data: tipo_usuarioCreateManyInput | tipo_usuarioCreateManyInput[]
  }

  /**
   * tipo_usuario createManyAndReturn
   */
  export type tipo_usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many tipo_usuarios.
     */
    data: tipo_usuarioCreateManyInput | tipo_usuarioCreateManyInput[]
  }

  /**
   * tipo_usuario update
   */
  export type tipo_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tipo_usuario.
     */
    data: XOR<tipo_usuarioUpdateInput, tipo_usuarioUncheckedUpdateInput>
    /**
     * Choose, which tipo_usuario to update.
     */
    where: tipo_usuarioWhereUniqueInput
  }

  /**
   * tipo_usuario updateMany
   */
  export type tipo_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipo_usuarios.
     */
    data: XOR<tipo_usuarioUpdateManyMutationInput, tipo_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tipo_usuarios to update
     */
    where?: tipo_usuarioWhereInput
    /**
     * Limit how many tipo_usuarios to update.
     */
    limit?: number
  }

  /**
   * tipo_usuario updateManyAndReturn
   */
  export type tipo_usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * The data used to update tipo_usuarios.
     */
    data: XOR<tipo_usuarioUpdateManyMutationInput, tipo_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tipo_usuarios to update
     */
    where?: tipo_usuarioWhereInput
    /**
     * Limit how many tipo_usuarios to update.
     */
    limit?: number
  }

  /**
   * tipo_usuario upsert
   */
  export type tipo_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tipo_usuario to update in case it exists.
     */
    where: tipo_usuarioWhereUniqueInput
    /**
     * In case the tipo_usuario found by the `where` argument doesn't exist, create a new tipo_usuario with this data.
     */
    create: XOR<tipo_usuarioCreateInput, tipo_usuarioUncheckedCreateInput>
    /**
     * In case the tipo_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipo_usuarioUpdateInput, tipo_usuarioUncheckedUpdateInput>
  }

  /**
   * tipo_usuario delete
   */
  export type tipo_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
    /**
     * Filter which tipo_usuario to delete.
     */
    where: tipo_usuarioWhereUniqueInput
  }

  /**
   * tipo_usuario deleteMany
   */
  export type tipo_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipo_usuarios to delete
     */
    where?: tipo_usuarioWhereInput
    /**
     * Limit how many tipo_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tipo_usuario.usuarios
   */
  export type tipo_usuario$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * tipo_usuario without action
   */
  export type tipo_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipo_usuario
     */
    select?: tipo_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipo_usuario
     */
    omit?: tipo_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipo_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type EstadoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id?: true
  }

  export type EstadoSumAggregateInputType = {
    id?: true
  }

  export type EstadoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type EstadoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estado to aggregate.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type estadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estadoWhereInput
    orderBy?: estadoOrderByWithAggregationInput | estadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: estadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id: number
    nombre: string
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends estadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type estadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | estado$usuariosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["estado"]>

  export type estadoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type estadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["estado"]>
  export type estadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | estado$usuariosArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type estadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type estadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $estadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estado"
    objects: {
      usuarios: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type estadoGetPayload<S extends boolean | null | undefined | estadoDefaultArgs> = $Result.GetResult<Prisma.$estadoPayload, S>

  type estadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface estadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estado'], meta: { name: 'estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {estadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estadoFindUniqueArgs>(args: SelectSubset<T, estadoFindUniqueArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estadoFindUniqueOrThrowArgs>(args: SelectSubset<T, estadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estadoFindFirstArgs>(args?: SelectSubset<T, estadoFindFirstArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estadoFindFirstOrThrowArgs>(args?: SelectSubset<T, estadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoWithIdOnly = await prisma.estado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estadoFindManyArgs>(args?: SelectSubset<T, estadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {estadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends estadoCreateArgs>(args: SelectSubset<T, estadoCreateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {estadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estadoCreateManyArgs>(args?: SelectSubset<T, estadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {estadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends estadoCreateManyAndReturnArgs>(args?: SelectSubset<T, estadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {estadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends estadoDeleteArgs>(args: SelectSubset<T, estadoDeleteArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {estadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estadoUpdateArgs>(args: SelectSubset<T, estadoUpdateArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {estadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estadoDeleteManyArgs>(args?: SelectSubset<T, estadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estadoUpdateManyArgs>(args: SelectSubset<T, estadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {estadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends estadoUpdateManyAndReturnArgs>(args: SelectSubset<T, estadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {estadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends estadoUpsertArgs>(args: SelectSubset<T, estadoUpsertArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends estadoCountArgs>(
      args?: Subset<T, estadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estadoGroupByArgs} args - Group by arguments.
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
      T extends estadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estadoGroupByArgs['orderBy'] }
        : { orderBy?: estadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, estadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estado model
   */
  readonly fields: estadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends estado$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, estado$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the estado model
   */
  interface estadoFieldRefs {
    readonly id: FieldRef<"estado", 'Int'>
    readonly nombre: FieldRef<"estado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * estado findUnique
   */
  export type estadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findUniqueOrThrow
   */
  export type estadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado findFirst
   */
  export type estadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findFirstOrThrow
   */
  export type estadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estado to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado findMany
   */
  export type estadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter, which estados to fetch.
     */
    where?: estadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estados to fetch.
     */
    orderBy?: estadoOrderByWithRelationInput | estadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estados.
     */
    cursor?: estadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * estado create
   */
  export type estadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to create a estado.
     */
    data: XOR<estadoCreateInput, estadoUncheckedCreateInput>
  }

  /**
   * estado createMany
   */
  export type estadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
  }

  /**
   * estado createManyAndReturn
   */
  export type estadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to create many estados.
     */
    data: estadoCreateManyInput | estadoCreateManyInput[]
  }

  /**
   * estado update
   */
  export type estadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The data needed to update a estado.
     */
    data: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
    /**
     * Choose, which estado to update.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado updateMany
   */
  export type estadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado updateManyAndReturn
   */
  export type estadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * The data used to update estados.
     */
    data: XOR<estadoUpdateManyMutationInput, estadoUncheckedUpdateManyInput>
    /**
     * Filter which estados to update
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to update.
     */
    limit?: number
  }

  /**
   * estado upsert
   */
  export type estadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * The filter to search for the estado to update in case it exists.
     */
    where: estadoWhereUniqueInput
    /**
     * In case the estado found by the `where` argument doesn't exist, create a new estado with this data.
     */
    create: XOR<estadoCreateInput, estadoUncheckedCreateInput>
    /**
     * In case the estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estadoUpdateInput, estadoUncheckedUpdateInput>
  }

  /**
   * estado delete
   */
  export type estadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
    /**
     * Filter which estado to delete.
     */
    where: estadoWhereUniqueInput
  }

  /**
   * estado deleteMany
   */
  export type estadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estados to delete
     */
    where?: estadoWhereInput
    /**
     * Limit how many estados to delete.
     */
    limit?: number
  }

  /**
   * estado.usuarios
   */
  export type estado$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * estado without action
   */
  export type estadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estado
     */
    select?: estadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estado
     */
    omit?: estadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estadoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    estado_id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    tipo_id: number | null
    estado_id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    tipo_id: number | null
    token: string | null
    estado_id: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    tipo_id: number | null
    token: string | null
    estado_id: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    tipo_id: number
    token: number
    estado_id: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    tipo_id?: true
    estado_id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    tipo_id?: true
    estado_id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    tipo_id?: true
    token?: true
    estado_id?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    tipo_id?: true
    token?: true
    estado_id?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    tipo_id?: true
    token?: true
    estado_id?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    estado_id: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    tipo_id?: boolean
    token?: boolean
    estado_id?: boolean
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    proyectos_creados?: boolean | usuario$proyectos_creadosArgs<ExtArgs>
    proyectos_invertidos?: boolean | usuario$proyectos_invertidosArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    tipo_id?: boolean
    token?: boolean
    estado_id?: boolean
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    tipo_id?: boolean
    token?: boolean
    estado_id?: boolean
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    tipo_id?: boolean
    token?: boolean
    estado_id?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "tipo_id" | "token" | "estado_id", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    proyectos_creados?: boolean | usuario$proyectos_creadosArgs<ExtArgs>
    proyectos_invertidos?: boolean | usuario$proyectos_invertidosArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | tipo_usuarioDefaultArgs<ExtArgs>
    estado?: boolean | estadoDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      tipo: Prisma.$tipo_usuarioPayload<ExtArgs>
      proyectos_creados: Prisma.$usuario_creacion_proyectoPayload<ExtArgs>[]
      proyectos_invertidos: Prisma.$usuario_inversion_proyectoPayload<ExtArgs>[]
      estado: Prisma.$estadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      tipo_id: number
      token: string
      estado_id: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends tipo_usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipo_usuarioDefaultArgs<ExtArgs>>): Prisma__tipo_usuarioClient<$Result.GetResult<Prisma.$tipo_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyectos_creados<T extends usuario$proyectos_creadosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$proyectos_creadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proyectos_invertidos<T extends usuario$proyectos_invertidosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$proyectos_invertidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estado<T extends estadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, estadoDefaultArgs<ExtArgs>>): Prisma__estadoClient<$Result.GetResult<Prisma.$estadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly username: FieldRef<"usuario", 'String'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly tipo_id: FieldRef<"usuario", 'Int'>
    readonly token: FieldRef<"usuario", 'String'>
    readonly estado_id: FieldRef<"usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.proyectos_creados
   */
  export type usuario$proyectos_creadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    where?: usuario_creacion_proyectoWhereInput
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_creacion_proyectoScalarFieldEnum | Usuario_creacion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario.proyectos_invertidos
   */
  export type usuario$proyectos_invertidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    where?: usuario_inversion_proyectoWhereInput
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_inversion_proyectoScalarFieldEnum | Usuario_inversion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_creacion_proyecto
   */

  export type AggregateUsuario_creacion_proyecto = {
    _count: Usuario_creacion_proyectoCountAggregateOutputType | null
    _avg: Usuario_creacion_proyectoAvgAggregateOutputType | null
    _sum: Usuario_creacion_proyectoSumAggregateOutputType | null
    _min: Usuario_creacion_proyectoMinAggregateOutputType | null
    _max: Usuario_creacion_proyectoMaxAggregateOutputType | null
  }

  export type Usuario_creacion_proyectoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
  }

  export type Usuario_creacion_proyectoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
  }

  export type Usuario_creacion_proyectoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
  }

  export type Usuario_creacion_proyectoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
  }

  export type Usuario_creacion_proyectoCountAggregateOutputType = {
    id: number
    usuario_id: number
    proyecto_id: number
    _all: number
  }


  export type Usuario_creacion_proyectoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
  }

  export type Usuario_creacion_proyectoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
  }

  export type Usuario_creacion_proyectoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
  }

  export type Usuario_creacion_proyectoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
  }

  export type Usuario_creacion_proyectoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    _all?: true
  }

  export type Usuario_creacion_proyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_creacion_proyecto to aggregate.
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_creacion_proyectos to fetch.
     */
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_creacion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_creacion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_creacion_proyectos
    **/
    _count?: true | Usuario_creacion_proyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_creacion_proyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_creacion_proyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_creacion_proyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_creacion_proyectoMaxAggregateInputType
  }

  export type GetUsuario_creacion_proyectoAggregateType<T extends Usuario_creacion_proyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_creacion_proyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_creacion_proyecto[P]>
      : GetScalarType<T[P], AggregateUsuario_creacion_proyecto[P]>
  }




  export type usuario_creacion_proyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_creacion_proyectoWhereInput
    orderBy?: usuario_creacion_proyectoOrderByWithAggregationInput | usuario_creacion_proyectoOrderByWithAggregationInput[]
    by: Usuario_creacion_proyectoScalarFieldEnum[] | Usuario_creacion_proyectoScalarFieldEnum
    having?: usuario_creacion_proyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_creacion_proyectoCountAggregateInputType | true
    _avg?: Usuario_creacion_proyectoAvgAggregateInputType
    _sum?: Usuario_creacion_proyectoSumAggregateInputType
    _min?: Usuario_creacion_proyectoMinAggregateInputType
    _max?: Usuario_creacion_proyectoMaxAggregateInputType
  }

  export type Usuario_creacion_proyectoGroupByOutputType = {
    id: number
    usuario_id: number
    proyecto_id: number
    _count: Usuario_creacion_proyectoCountAggregateOutputType | null
    _avg: Usuario_creacion_proyectoAvgAggregateOutputType | null
    _sum: Usuario_creacion_proyectoSumAggregateOutputType | null
    _min: Usuario_creacion_proyectoMinAggregateOutputType | null
    _max: Usuario_creacion_proyectoMaxAggregateOutputType | null
  }

  type GetUsuario_creacion_proyectoGroupByPayload<T extends usuario_creacion_proyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_creacion_proyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_creacion_proyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_creacion_proyectoGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_creacion_proyectoGroupByOutputType[P]>
        }
      >
    >


  export type usuario_creacion_proyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_creacion_proyecto"]>

  export type usuario_creacion_proyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_creacion_proyecto"]>

  export type usuario_creacion_proyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_creacion_proyecto"]>

  export type usuario_creacion_proyectoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
  }

  export type usuario_creacion_proyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "proyecto_id", ExtArgs["result"]["usuario_creacion_proyecto"]>
  export type usuario_creacion_proyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type usuario_creacion_proyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type usuario_creacion_proyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_creador?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_creado?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $usuario_creacion_proyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_creacion_proyecto"
    objects: {
      usuario_creador: Prisma.$usuarioPayload<ExtArgs>
      proyecto_creado: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      proyecto_id: number
    }, ExtArgs["result"]["usuario_creacion_proyecto"]>
    composites: {}
  }

  type usuario_creacion_proyectoGetPayload<S extends boolean | null | undefined | usuario_creacion_proyectoDefaultArgs> = $Result.GetResult<Prisma.$usuario_creacion_proyectoPayload, S>

  type usuario_creacion_proyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_creacion_proyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_creacion_proyectoCountAggregateInputType | true
    }

  export interface usuario_creacion_proyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_creacion_proyecto'], meta: { name: 'usuario_creacion_proyecto' } }
    /**
     * Find zero or one Usuario_creacion_proyecto that matches the filter.
     * @param {usuario_creacion_proyectoFindUniqueArgs} args - Arguments to find a Usuario_creacion_proyecto
     * @example
     * // Get one Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_creacion_proyectoFindUniqueArgs>(args: SelectSubset<T, usuario_creacion_proyectoFindUniqueArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_creacion_proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_creacion_proyectoFindUniqueOrThrowArgs} args - Arguments to find a Usuario_creacion_proyecto
     * @example
     * // Get one Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_creacion_proyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_creacion_proyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_creacion_proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoFindFirstArgs} args - Arguments to find a Usuario_creacion_proyecto
     * @example
     * // Get one Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_creacion_proyectoFindFirstArgs>(args?: SelectSubset<T, usuario_creacion_proyectoFindFirstArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_creacion_proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoFindFirstOrThrowArgs} args - Arguments to find a Usuario_creacion_proyecto
     * @example
     * // Get one Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_creacion_proyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_creacion_proyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_creacion_proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_creacion_proyectos
     * const usuario_creacion_proyectos = await prisma.usuario_creacion_proyecto.findMany()
     * 
     * // Get first 10 Usuario_creacion_proyectos
     * const usuario_creacion_proyectos = await prisma.usuario_creacion_proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuario_creacion_proyectoWithIdOnly = await prisma.usuario_creacion_proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuario_creacion_proyectoFindManyArgs>(args?: SelectSubset<T, usuario_creacion_proyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_creacion_proyecto.
     * @param {usuario_creacion_proyectoCreateArgs} args - Arguments to create a Usuario_creacion_proyecto.
     * @example
     * // Create one Usuario_creacion_proyecto
     * const Usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.create({
     *   data: {
     *     // ... data to create a Usuario_creacion_proyecto
     *   }
     * })
     * 
     */
    create<T extends usuario_creacion_proyectoCreateArgs>(args: SelectSubset<T, usuario_creacion_proyectoCreateArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_creacion_proyectos.
     * @param {usuario_creacion_proyectoCreateManyArgs} args - Arguments to create many Usuario_creacion_proyectos.
     * @example
     * // Create many Usuario_creacion_proyectos
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_creacion_proyectoCreateManyArgs>(args?: SelectSubset<T, usuario_creacion_proyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_creacion_proyectos and returns the data saved in the database.
     * @param {usuario_creacion_proyectoCreateManyAndReturnArgs} args - Arguments to create many Usuario_creacion_proyectos.
     * @example
     * // Create many Usuario_creacion_proyectos
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_creacion_proyectos and only return the `id`
     * const usuario_creacion_proyectoWithIdOnly = await prisma.usuario_creacion_proyecto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_creacion_proyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_creacion_proyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_creacion_proyecto.
     * @param {usuario_creacion_proyectoDeleteArgs} args - Arguments to delete one Usuario_creacion_proyecto.
     * @example
     * // Delete one Usuario_creacion_proyecto
     * const Usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.delete({
     *   where: {
     *     // ... filter to delete one Usuario_creacion_proyecto
     *   }
     * })
     * 
     */
    delete<T extends usuario_creacion_proyectoDeleteArgs>(args: SelectSubset<T, usuario_creacion_proyectoDeleteArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_creacion_proyecto.
     * @param {usuario_creacion_proyectoUpdateArgs} args - Arguments to update one Usuario_creacion_proyecto.
     * @example
     * // Update one Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_creacion_proyectoUpdateArgs>(args: SelectSubset<T, usuario_creacion_proyectoUpdateArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_creacion_proyectos.
     * @param {usuario_creacion_proyectoDeleteManyArgs} args - Arguments to filter Usuario_creacion_proyectos to delete.
     * @example
     * // Delete a few Usuario_creacion_proyectos
     * const { count } = await prisma.usuario_creacion_proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_creacion_proyectoDeleteManyArgs>(args?: SelectSubset<T, usuario_creacion_proyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_creacion_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_creacion_proyectos
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_creacion_proyectoUpdateManyArgs>(args: SelectSubset<T, usuario_creacion_proyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_creacion_proyectos and returns the data updated in the database.
     * @param {usuario_creacion_proyectoUpdateManyAndReturnArgs} args - Arguments to update many Usuario_creacion_proyectos.
     * @example
     * // Update many Usuario_creacion_proyectos
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_creacion_proyectos and only return the `id`
     * const usuario_creacion_proyectoWithIdOnly = await prisma.usuario_creacion_proyecto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends usuario_creacion_proyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_creacion_proyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_creacion_proyecto.
     * @param {usuario_creacion_proyectoUpsertArgs} args - Arguments to update or create a Usuario_creacion_proyecto.
     * @example
     * // Update or create a Usuario_creacion_proyecto
     * const usuario_creacion_proyecto = await prisma.usuario_creacion_proyecto.upsert({
     *   create: {
     *     // ... data to create a Usuario_creacion_proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_creacion_proyecto we want to update
     *   }
     * })
     */
    upsert<T extends usuario_creacion_proyectoUpsertArgs>(args: SelectSubset<T, usuario_creacion_proyectoUpsertArgs<ExtArgs>>): Prisma__usuario_creacion_proyectoClient<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_creacion_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoCountArgs} args - Arguments to filter Usuario_creacion_proyectos to count.
     * @example
     * // Count the number of Usuario_creacion_proyectos
     * const count = await prisma.usuario_creacion_proyecto.count({
     *   where: {
     *     // ... the filter for the Usuario_creacion_proyectos we want to count
     *   }
     * })
    **/
    count<T extends usuario_creacion_proyectoCountArgs>(
      args?: Subset<T, usuario_creacion_proyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_creacion_proyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_creacion_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_creacion_proyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_creacion_proyectoAggregateArgs>(args: Subset<T, Usuario_creacion_proyectoAggregateArgs>): Prisma.PrismaPromise<GetUsuario_creacion_proyectoAggregateType<T>>

    /**
     * Group by Usuario_creacion_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_creacion_proyectoGroupByArgs} args - Group by arguments.
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
      T extends usuario_creacion_proyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_creacion_proyectoGroupByArgs['orderBy'] }
        : { orderBy?: usuario_creacion_proyectoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuario_creacion_proyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_creacion_proyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_creacion_proyecto model
   */
  readonly fields: usuario_creacion_proyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_creacion_proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_creacion_proyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario_creador<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto_creado<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario_creacion_proyecto model
   */
  interface usuario_creacion_proyectoFieldRefs {
    readonly id: FieldRef<"usuario_creacion_proyecto", 'Int'>
    readonly usuario_id: FieldRef<"usuario_creacion_proyecto", 'Int'>
    readonly proyecto_id: FieldRef<"usuario_creacion_proyecto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario_creacion_proyecto findUnique
   */
  export type usuario_creacion_proyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_creacion_proyecto to fetch.
     */
    where: usuario_creacion_proyectoWhereUniqueInput
  }

  /**
   * usuario_creacion_proyecto findUniqueOrThrow
   */
  export type usuario_creacion_proyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_creacion_proyecto to fetch.
     */
    where: usuario_creacion_proyectoWhereUniqueInput
  }

  /**
   * usuario_creacion_proyecto findFirst
   */
  export type usuario_creacion_proyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_creacion_proyecto to fetch.
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_creacion_proyectos to fetch.
     */
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_creacion_proyectos.
     */
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_creacion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_creacion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_creacion_proyectos.
     */
    distinct?: Usuario_creacion_proyectoScalarFieldEnum | Usuario_creacion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_creacion_proyecto findFirstOrThrow
   */
  export type usuario_creacion_proyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_creacion_proyecto to fetch.
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_creacion_proyectos to fetch.
     */
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_creacion_proyectos.
     */
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_creacion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_creacion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_creacion_proyectos.
     */
    distinct?: Usuario_creacion_proyectoScalarFieldEnum | Usuario_creacion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_creacion_proyecto findMany
   */
  export type usuario_creacion_proyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_creacion_proyectos to fetch.
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_creacion_proyectos to fetch.
     */
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_creacion_proyectos.
     */
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_creacion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_creacion_proyectos.
     */
    skip?: number
    distinct?: Usuario_creacion_proyectoScalarFieldEnum | Usuario_creacion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_creacion_proyecto create
   */
  export type usuario_creacion_proyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_creacion_proyecto.
     */
    data: XOR<usuario_creacion_proyectoCreateInput, usuario_creacion_proyectoUncheckedCreateInput>
  }

  /**
   * usuario_creacion_proyecto createMany
   */
  export type usuario_creacion_proyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_creacion_proyectos.
     */
    data: usuario_creacion_proyectoCreateManyInput | usuario_creacion_proyectoCreateManyInput[]
  }

  /**
   * usuario_creacion_proyecto createManyAndReturn
   */
  export type usuario_creacion_proyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_creacion_proyectos.
     */
    data: usuario_creacion_proyectoCreateManyInput | usuario_creacion_proyectoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_creacion_proyecto update
   */
  export type usuario_creacion_proyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_creacion_proyecto.
     */
    data: XOR<usuario_creacion_proyectoUpdateInput, usuario_creacion_proyectoUncheckedUpdateInput>
    /**
     * Choose, which usuario_creacion_proyecto to update.
     */
    where: usuario_creacion_proyectoWhereUniqueInput
  }

  /**
   * usuario_creacion_proyecto updateMany
   */
  export type usuario_creacion_proyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_creacion_proyectos.
     */
    data: XOR<usuario_creacion_proyectoUpdateManyMutationInput, usuario_creacion_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_creacion_proyectos to update
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * Limit how many usuario_creacion_proyectos to update.
     */
    limit?: number
  }

  /**
   * usuario_creacion_proyecto updateManyAndReturn
   */
  export type usuario_creacion_proyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * The data used to update usuario_creacion_proyectos.
     */
    data: XOR<usuario_creacion_proyectoUpdateManyMutationInput, usuario_creacion_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_creacion_proyectos to update
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * Limit how many usuario_creacion_proyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_creacion_proyecto upsert
   */
  export type usuario_creacion_proyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_creacion_proyecto to update in case it exists.
     */
    where: usuario_creacion_proyectoWhereUniqueInput
    /**
     * In case the usuario_creacion_proyecto found by the `where` argument doesn't exist, create a new usuario_creacion_proyecto with this data.
     */
    create: XOR<usuario_creacion_proyectoCreateInput, usuario_creacion_proyectoUncheckedCreateInput>
    /**
     * In case the usuario_creacion_proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_creacion_proyectoUpdateInput, usuario_creacion_proyectoUncheckedUpdateInput>
  }

  /**
   * usuario_creacion_proyecto delete
   */
  export type usuario_creacion_proyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    /**
     * Filter which usuario_creacion_proyecto to delete.
     */
    where: usuario_creacion_proyectoWhereUniqueInput
  }

  /**
   * usuario_creacion_proyecto deleteMany
   */
  export type usuario_creacion_proyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_creacion_proyectos to delete
     */
    where?: usuario_creacion_proyectoWhereInput
    /**
     * Limit how many usuario_creacion_proyectos to delete.
     */
    limit?: number
  }

  /**
   * usuario_creacion_proyecto without action
   */
  export type usuario_creacion_proyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
  }


  /**
   * Model usuario_inversion_proyecto
   */

  export type AggregateUsuario_inversion_proyecto = {
    _count: Usuario_inversion_proyectoCountAggregateOutputType | null
    _avg: Usuario_inversion_proyectoAvgAggregateOutputType | null
    _sum: Usuario_inversion_proyectoSumAggregateOutputType | null
    _min: Usuario_inversion_proyectoMinAggregateOutputType | null
    _max: Usuario_inversion_proyectoMaxAggregateOutputType | null
  }

  export type Usuario_inversion_proyectoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
    cantidad: Decimal | null
  }

  export type Usuario_inversion_proyectoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
    cantidad: Decimal | null
  }

  export type Usuario_inversion_proyectoMinAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
    cantidad: Decimal | null
  }

  export type Usuario_inversion_proyectoMaxAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    proyecto_id: number | null
    cantidad: Decimal | null
  }

  export type Usuario_inversion_proyectoCountAggregateOutputType = {
    id: number
    usuario_id: number
    proyecto_id: number
    cantidad: number
    _all: number
  }


  export type Usuario_inversion_proyectoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    cantidad?: true
  }

  export type Usuario_inversion_proyectoSumAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    cantidad?: true
  }

  export type Usuario_inversion_proyectoMinAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    cantidad?: true
  }

  export type Usuario_inversion_proyectoMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    cantidad?: true
  }

  export type Usuario_inversion_proyectoCountAggregateInputType = {
    id?: true
    usuario_id?: true
    proyecto_id?: true
    cantidad?: true
    _all?: true
  }

  export type Usuario_inversion_proyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_inversion_proyecto to aggregate.
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_inversion_proyectos to fetch.
     */
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_inversion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_inversion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_inversion_proyectos
    **/
    _count?: true | Usuario_inversion_proyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_inversion_proyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_inversion_proyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_inversion_proyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_inversion_proyectoMaxAggregateInputType
  }

  export type GetUsuario_inversion_proyectoAggregateType<T extends Usuario_inversion_proyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_inversion_proyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_inversion_proyecto[P]>
      : GetScalarType<T[P], AggregateUsuario_inversion_proyecto[P]>
  }




  export type usuario_inversion_proyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_inversion_proyectoWhereInput
    orderBy?: usuario_inversion_proyectoOrderByWithAggregationInput | usuario_inversion_proyectoOrderByWithAggregationInput[]
    by: Usuario_inversion_proyectoScalarFieldEnum[] | Usuario_inversion_proyectoScalarFieldEnum
    having?: usuario_inversion_proyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_inversion_proyectoCountAggregateInputType | true
    _avg?: Usuario_inversion_proyectoAvgAggregateInputType
    _sum?: Usuario_inversion_proyectoSumAggregateInputType
    _min?: Usuario_inversion_proyectoMinAggregateInputType
    _max?: Usuario_inversion_proyectoMaxAggregateInputType
  }

  export type Usuario_inversion_proyectoGroupByOutputType = {
    id: number
    usuario_id: number
    proyecto_id: number
    cantidad: Decimal
    _count: Usuario_inversion_proyectoCountAggregateOutputType | null
    _avg: Usuario_inversion_proyectoAvgAggregateOutputType | null
    _sum: Usuario_inversion_proyectoSumAggregateOutputType | null
    _min: Usuario_inversion_proyectoMinAggregateOutputType | null
    _max: Usuario_inversion_proyectoMaxAggregateOutputType | null
  }

  type GetUsuario_inversion_proyectoGroupByPayload<T extends usuario_inversion_proyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_inversion_proyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_inversion_proyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_inversion_proyectoGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_inversion_proyectoGroupByOutputType[P]>
        }
      >
    >


  export type usuario_inversion_proyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    cantidad?: boolean
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_inversion_proyecto"]>

  export type usuario_inversion_proyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    cantidad?: boolean
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_inversion_proyecto"]>

  export type usuario_inversion_proyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    cantidad?: boolean
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_inversion_proyecto"]>

  export type usuario_inversion_proyectoSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    proyecto_id?: boolean
    cantidad?: boolean
  }

  export type usuario_inversion_proyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "proyecto_id" | "cantidad", ExtArgs["result"]["usuario_inversion_proyecto"]>
  export type usuario_inversion_proyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type usuario_inversion_proyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type usuario_inversion_proyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_inversor?: boolean | usuarioDefaultArgs<ExtArgs>
    proyecto_invertido?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $usuario_inversion_proyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_inversion_proyecto"
    objects: {
      usuario_inversor: Prisma.$usuarioPayload<ExtArgs>
      proyecto_invertido: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuario_id: number
      proyecto_id: number
      cantidad: Prisma.Decimal
    }, ExtArgs["result"]["usuario_inversion_proyecto"]>
    composites: {}
  }

  type usuario_inversion_proyectoGetPayload<S extends boolean | null | undefined | usuario_inversion_proyectoDefaultArgs> = $Result.GetResult<Prisma.$usuario_inversion_proyectoPayload, S>

  type usuario_inversion_proyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_inversion_proyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_inversion_proyectoCountAggregateInputType | true
    }

  export interface usuario_inversion_proyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_inversion_proyecto'], meta: { name: 'usuario_inversion_proyecto' } }
    /**
     * Find zero or one Usuario_inversion_proyecto that matches the filter.
     * @param {usuario_inversion_proyectoFindUniqueArgs} args - Arguments to find a Usuario_inversion_proyecto
     * @example
     * // Get one Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_inversion_proyectoFindUniqueArgs>(args: SelectSubset<T, usuario_inversion_proyectoFindUniqueArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_inversion_proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_inversion_proyectoFindUniqueOrThrowArgs} args - Arguments to find a Usuario_inversion_proyecto
     * @example
     * // Get one Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_inversion_proyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_inversion_proyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_inversion_proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoFindFirstArgs} args - Arguments to find a Usuario_inversion_proyecto
     * @example
     * // Get one Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_inversion_proyectoFindFirstArgs>(args?: SelectSubset<T, usuario_inversion_proyectoFindFirstArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_inversion_proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoFindFirstOrThrowArgs} args - Arguments to find a Usuario_inversion_proyecto
     * @example
     * // Get one Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_inversion_proyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_inversion_proyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_inversion_proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_inversion_proyectos
     * const usuario_inversion_proyectos = await prisma.usuario_inversion_proyecto.findMany()
     * 
     * // Get first 10 Usuario_inversion_proyectos
     * const usuario_inversion_proyectos = await prisma.usuario_inversion_proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuario_inversion_proyectoWithIdOnly = await prisma.usuario_inversion_proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuario_inversion_proyectoFindManyArgs>(args?: SelectSubset<T, usuario_inversion_proyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_inversion_proyecto.
     * @param {usuario_inversion_proyectoCreateArgs} args - Arguments to create a Usuario_inversion_proyecto.
     * @example
     * // Create one Usuario_inversion_proyecto
     * const Usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.create({
     *   data: {
     *     // ... data to create a Usuario_inversion_proyecto
     *   }
     * })
     * 
     */
    create<T extends usuario_inversion_proyectoCreateArgs>(args: SelectSubset<T, usuario_inversion_proyectoCreateArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_inversion_proyectos.
     * @param {usuario_inversion_proyectoCreateManyArgs} args - Arguments to create many Usuario_inversion_proyectos.
     * @example
     * // Create many Usuario_inversion_proyectos
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_inversion_proyectoCreateManyArgs>(args?: SelectSubset<T, usuario_inversion_proyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_inversion_proyectos and returns the data saved in the database.
     * @param {usuario_inversion_proyectoCreateManyAndReturnArgs} args - Arguments to create many Usuario_inversion_proyectos.
     * @example
     * // Create many Usuario_inversion_proyectos
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_inversion_proyectos and only return the `id`
     * const usuario_inversion_proyectoWithIdOnly = await prisma.usuario_inversion_proyecto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_inversion_proyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_inversion_proyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_inversion_proyecto.
     * @param {usuario_inversion_proyectoDeleteArgs} args - Arguments to delete one Usuario_inversion_proyecto.
     * @example
     * // Delete one Usuario_inversion_proyecto
     * const Usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.delete({
     *   where: {
     *     // ... filter to delete one Usuario_inversion_proyecto
     *   }
     * })
     * 
     */
    delete<T extends usuario_inversion_proyectoDeleteArgs>(args: SelectSubset<T, usuario_inversion_proyectoDeleteArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_inversion_proyecto.
     * @param {usuario_inversion_proyectoUpdateArgs} args - Arguments to update one Usuario_inversion_proyecto.
     * @example
     * // Update one Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_inversion_proyectoUpdateArgs>(args: SelectSubset<T, usuario_inversion_proyectoUpdateArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_inversion_proyectos.
     * @param {usuario_inversion_proyectoDeleteManyArgs} args - Arguments to filter Usuario_inversion_proyectos to delete.
     * @example
     * // Delete a few Usuario_inversion_proyectos
     * const { count } = await prisma.usuario_inversion_proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_inversion_proyectoDeleteManyArgs>(args?: SelectSubset<T, usuario_inversion_proyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_inversion_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_inversion_proyectos
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_inversion_proyectoUpdateManyArgs>(args: SelectSubset<T, usuario_inversion_proyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_inversion_proyectos and returns the data updated in the database.
     * @param {usuario_inversion_proyectoUpdateManyAndReturnArgs} args - Arguments to update many Usuario_inversion_proyectos.
     * @example
     * // Update many Usuario_inversion_proyectos
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_inversion_proyectos and only return the `id`
     * const usuario_inversion_proyectoWithIdOnly = await prisma.usuario_inversion_proyecto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends usuario_inversion_proyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_inversion_proyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_inversion_proyecto.
     * @param {usuario_inversion_proyectoUpsertArgs} args - Arguments to update or create a Usuario_inversion_proyecto.
     * @example
     * // Update or create a Usuario_inversion_proyecto
     * const usuario_inversion_proyecto = await prisma.usuario_inversion_proyecto.upsert({
     *   create: {
     *     // ... data to create a Usuario_inversion_proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_inversion_proyecto we want to update
     *   }
     * })
     */
    upsert<T extends usuario_inversion_proyectoUpsertArgs>(args: SelectSubset<T, usuario_inversion_proyectoUpsertArgs<ExtArgs>>): Prisma__usuario_inversion_proyectoClient<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_inversion_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoCountArgs} args - Arguments to filter Usuario_inversion_proyectos to count.
     * @example
     * // Count the number of Usuario_inversion_proyectos
     * const count = await prisma.usuario_inversion_proyecto.count({
     *   where: {
     *     // ... the filter for the Usuario_inversion_proyectos we want to count
     *   }
     * })
    **/
    count<T extends usuario_inversion_proyectoCountArgs>(
      args?: Subset<T, usuario_inversion_proyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_inversion_proyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_inversion_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_inversion_proyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Usuario_inversion_proyectoAggregateArgs>(args: Subset<T, Usuario_inversion_proyectoAggregateArgs>): Prisma.PrismaPromise<GetUsuario_inversion_proyectoAggregateType<T>>

    /**
     * Group by Usuario_inversion_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_inversion_proyectoGroupByArgs} args - Group by arguments.
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
      T extends usuario_inversion_proyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_inversion_proyectoGroupByArgs['orderBy'] }
        : { orderBy?: usuario_inversion_proyectoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuario_inversion_proyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_inversion_proyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_inversion_proyecto model
   */
  readonly fields: usuario_inversion_proyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_inversion_proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_inversion_proyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario_inversor<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proyecto_invertido<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario_inversion_proyecto model
   */
  interface usuario_inversion_proyectoFieldRefs {
    readonly id: FieldRef<"usuario_inversion_proyecto", 'Int'>
    readonly usuario_id: FieldRef<"usuario_inversion_proyecto", 'Int'>
    readonly proyecto_id: FieldRef<"usuario_inversion_proyecto", 'Int'>
    readonly cantidad: FieldRef<"usuario_inversion_proyecto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * usuario_inversion_proyecto findUnique
   */
  export type usuario_inversion_proyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_inversion_proyecto to fetch.
     */
    where: usuario_inversion_proyectoWhereUniqueInput
  }

  /**
   * usuario_inversion_proyecto findUniqueOrThrow
   */
  export type usuario_inversion_proyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_inversion_proyecto to fetch.
     */
    where: usuario_inversion_proyectoWhereUniqueInput
  }

  /**
   * usuario_inversion_proyecto findFirst
   */
  export type usuario_inversion_proyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_inversion_proyecto to fetch.
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_inversion_proyectos to fetch.
     */
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_inversion_proyectos.
     */
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_inversion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_inversion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_inversion_proyectos.
     */
    distinct?: Usuario_inversion_proyectoScalarFieldEnum | Usuario_inversion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_inversion_proyecto findFirstOrThrow
   */
  export type usuario_inversion_proyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_inversion_proyecto to fetch.
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_inversion_proyectos to fetch.
     */
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_inversion_proyectos.
     */
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_inversion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_inversion_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_inversion_proyectos.
     */
    distinct?: Usuario_inversion_proyectoScalarFieldEnum | Usuario_inversion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_inversion_proyecto findMany
   */
  export type usuario_inversion_proyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which usuario_inversion_proyectos to fetch.
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_inversion_proyectos to fetch.
     */
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_inversion_proyectos.
     */
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_inversion_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_inversion_proyectos.
     */
    skip?: number
    distinct?: Usuario_inversion_proyectoScalarFieldEnum | Usuario_inversion_proyectoScalarFieldEnum[]
  }

  /**
   * usuario_inversion_proyecto create
   */
  export type usuario_inversion_proyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_inversion_proyecto.
     */
    data: XOR<usuario_inversion_proyectoCreateInput, usuario_inversion_proyectoUncheckedCreateInput>
  }

  /**
   * usuario_inversion_proyecto createMany
   */
  export type usuario_inversion_proyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_inversion_proyectos.
     */
    data: usuario_inversion_proyectoCreateManyInput | usuario_inversion_proyectoCreateManyInput[]
  }

  /**
   * usuario_inversion_proyecto createManyAndReturn
   */
  export type usuario_inversion_proyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_inversion_proyectos.
     */
    data: usuario_inversion_proyectoCreateManyInput | usuario_inversion_proyectoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_inversion_proyecto update
   */
  export type usuario_inversion_proyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_inversion_proyecto.
     */
    data: XOR<usuario_inversion_proyectoUpdateInput, usuario_inversion_proyectoUncheckedUpdateInput>
    /**
     * Choose, which usuario_inversion_proyecto to update.
     */
    where: usuario_inversion_proyectoWhereUniqueInput
  }

  /**
   * usuario_inversion_proyecto updateMany
   */
  export type usuario_inversion_proyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_inversion_proyectos.
     */
    data: XOR<usuario_inversion_proyectoUpdateManyMutationInput, usuario_inversion_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_inversion_proyectos to update
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * Limit how many usuario_inversion_proyectos to update.
     */
    limit?: number
  }

  /**
   * usuario_inversion_proyecto updateManyAndReturn
   */
  export type usuario_inversion_proyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * The data used to update usuario_inversion_proyectos.
     */
    data: XOR<usuario_inversion_proyectoUpdateManyMutationInput, usuario_inversion_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which usuario_inversion_proyectos to update
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * Limit how many usuario_inversion_proyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_inversion_proyecto upsert
   */
  export type usuario_inversion_proyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_inversion_proyecto to update in case it exists.
     */
    where: usuario_inversion_proyectoWhereUniqueInput
    /**
     * In case the usuario_inversion_proyecto found by the `where` argument doesn't exist, create a new usuario_inversion_proyecto with this data.
     */
    create: XOR<usuario_inversion_proyectoCreateInput, usuario_inversion_proyectoUncheckedCreateInput>
    /**
     * In case the usuario_inversion_proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_inversion_proyectoUpdateInput, usuario_inversion_proyectoUncheckedUpdateInput>
  }

  /**
   * usuario_inversion_proyecto delete
   */
  export type usuario_inversion_proyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    /**
     * Filter which usuario_inversion_proyecto to delete.
     */
    where: usuario_inversion_proyectoWhereUniqueInput
  }

  /**
   * usuario_inversion_proyecto deleteMany
   */
  export type usuario_inversion_proyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_inversion_proyectos to delete
     */
    where?: usuario_inversion_proyectoWhereInput
    /**
     * Limit how many usuario_inversion_proyectos to delete.
     */
    limit?: number
  }

  /**
   * usuario_inversion_proyecto without action
   */
  export type usuario_inversion_proyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
  }


  /**
   * Model proyecto
   */

  export type AggregateProyecto = {
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  export type ProyectoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProyectoSumAggregateOutputType = {
    id: number | null
  }

  export type ProyectoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_energia: string | null
    descripcion: string | null
  }

  export type ProyectoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo_energia: string | null
    descripcion: string | null
  }

  export type ProyectoCountAggregateOutputType = {
    id: number
    nombre: number
    tipo_energia: number
    descripcion: number
    _all: number
  }


  export type ProyectoAvgAggregateInputType = {
    id?: true
  }

  export type ProyectoSumAggregateInputType = {
    id?: true
  }

  export type ProyectoMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo_energia?: true
    descripcion?: true
  }

  export type ProyectoMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo_energia?: true
    descripcion?: true
  }

  export type ProyectoCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo_energia?: true
    descripcion?: true
    _all?: true
  }

  export type ProyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyecto to aggregate.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proyectos
    **/
    _count?: true | ProyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProyectoMaxAggregateInputType
  }

  export type GetProyectoAggregateType<T extends ProyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateProyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProyecto[P]>
      : GetScalarType<T[P], AggregateProyecto[P]>
  }




  export type proyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proyectoWhereInput
    orderBy?: proyectoOrderByWithAggregationInput | proyectoOrderByWithAggregationInput[]
    by: ProyectoScalarFieldEnum[] | ProyectoScalarFieldEnum
    having?: proyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProyectoCountAggregateInputType | true
    _avg?: ProyectoAvgAggregateInputType
    _sum?: ProyectoSumAggregateInputType
    _min?: ProyectoMinAggregateInputType
    _max?: ProyectoMaxAggregateInputType
  }

  export type ProyectoGroupByOutputType = {
    id: number
    nombre: string
    tipo_energia: string
    descripcion: string
    _count: ProyectoCountAggregateOutputType | null
    _avg: ProyectoAvgAggregateOutputType | null
    _sum: ProyectoSumAggregateOutputType | null
    _min: ProyectoMinAggregateOutputType | null
    _max: ProyectoMaxAggregateOutputType | null
  }

  type GetProyectoGroupByPayload<T extends proyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
            : GetScalarType<T[P], ProyectoGroupByOutputType[P]>
        }
      >
    >


  export type proyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_energia?: boolean
    descripcion?: boolean
    pasos?: boolean | proyecto$pasosArgs<ExtArgs>
    tecnologias?: boolean | proyecto$tecnologiasArgs<ExtArgs>
    recursos?: boolean | proyecto$recursosArgs<ExtArgs>
    proyectos_usuario?: boolean | proyecto$proyectos_usuarioArgs<ExtArgs>
    proyectos_inversion?: boolean | proyecto$proyectos_inversionArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_energia?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo_energia?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["proyecto"]>

  export type proyectoSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo_energia?: boolean
    descripcion?: boolean
  }

  export type proyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo_energia" | "descripcion", ExtArgs["result"]["proyecto"]>
  export type proyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasos?: boolean | proyecto$pasosArgs<ExtArgs>
    tecnologias?: boolean | proyecto$tecnologiasArgs<ExtArgs>
    recursos?: boolean | proyecto$recursosArgs<ExtArgs>
    proyectos_usuario?: boolean | proyecto$proyectos_usuarioArgs<ExtArgs>
    proyectos_inversion?: boolean | proyecto$proyectos_inversionArgs<ExtArgs>
    _count?: boolean | ProyectoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type proyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type proyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $proyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proyecto"
    objects: {
      pasos: Prisma.$pasoPayload<ExtArgs>[]
      tecnologias: Prisma.$tecnologia_proyectoPayload<ExtArgs>[]
      recursos: Prisma.$recursoPayload<ExtArgs>[]
      proyectos_usuario: Prisma.$usuario_creacion_proyectoPayload<ExtArgs>[]
      proyectos_inversion: Prisma.$usuario_inversion_proyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo_energia: string
      descripcion: string
    }, ExtArgs["result"]["proyecto"]>
    composites: {}
  }

  type proyectoGetPayload<S extends boolean | null | undefined | proyectoDefaultArgs> = $Result.GetResult<Prisma.$proyectoPayload, S>

  type proyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProyectoCountAggregateInputType | true
    }

  export interface proyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proyecto'], meta: { name: 'proyecto' } }
    /**
     * Find zero or one Proyecto that matches the filter.
     * @param {proyectoFindUniqueArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proyectoFindUniqueArgs>(args: SelectSubset<T, proyectoFindUniqueArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proyectoFindUniqueOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, proyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindFirstArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proyectoFindFirstArgs>(args?: SelectSubset<T, proyectoFindFirstArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindFirstOrThrowArgs} args - Arguments to find a Proyecto
     * @example
     * // Get one Proyecto
     * const proyecto = await prisma.proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, proyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proyectos
     * const proyectos = await prisma.proyecto.findMany()
     * 
     * // Get first 10 Proyectos
     * const proyectos = await prisma.proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends proyectoFindManyArgs>(args?: SelectSubset<T, proyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proyecto.
     * @param {proyectoCreateArgs} args - Arguments to create a Proyecto.
     * @example
     * // Create one Proyecto
     * const Proyecto = await prisma.proyecto.create({
     *   data: {
     *     // ... data to create a Proyecto
     *   }
     * })
     * 
     */
    create<T extends proyectoCreateArgs>(args: SelectSubset<T, proyectoCreateArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proyectos.
     * @param {proyectoCreateManyArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proyectoCreateManyArgs>(args?: SelectSubset<T, proyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proyectos and returns the data saved in the database.
     * @param {proyectoCreateManyAndReturnArgs} args - Arguments to create many Proyectos.
     * @example
     * // Create many Proyectos
     * const proyecto = await prisma.proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proyectos and only return the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends proyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, proyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proyecto.
     * @param {proyectoDeleteArgs} args - Arguments to delete one Proyecto.
     * @example
     * // Delete one Proyecto
     * const Proyecto = await prisma.proyecto.delete({
     *   where: {
     *     // ... filter to delete one Proyecto
     *   }
     * })
     * 
     */
    delete<T extends proyectoDeleteArgs>(args: SelectSubset<T, proyectoDeleteArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proyecto.
     * @param {proyectoUpdateArgs} args - Arguments to update one Proyecto.
     * @example
     * // Update one Proyecto
     * const proyecto = await prisma.proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proyectoUpdateArgs>(args: SelectSubset<T, proyectoUpdateArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proyectos.
     * @param {proyectoDeleteManyArgs} args - Arguments to filter Proyectos to delete.
     * @example
     * // Delete a few Proyectos
     * const { count } = await prisma.proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proyectoDeleteManyArgs>(args?: SelectSubset<T, proyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proyectoUpdateManyArgs>(args: SelectSubset<T, proyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proyectos and returns the data updated in the database.
     * @param {proyectoUpdateManyAndReturnArgs} args - Arguments to update many Proyectos.
     * @example
     * // Update many Proyectos
     * const proyecto = await prisma.proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proyectos and only return the `id`
     * const proyectoWithIdOnly = await prisma.proyecto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends proyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, proyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proyecto.
     * @param {proyectoUpsertArgs} args - Arguments to update or create a Proyecto.
     * @example
     * // Update or create a Proyecto
     * const proyecto = await prisma.proyecto.upsert({
     *   create: {
     *     // ... data to create a Proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proyecto we want to update
     *   }
     * })
     */
    upsert<T extends proyectoUpsertArgs>(args: SelectSubset<T, proyectoUpsertArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoCountArgs} args - Arguments to filter Proyectos to count.
     * @example
     * // Count the number of Proyectos
     * const count = await prisma.proyecto.count({
     *   where: {
     *     // ... the filter for the Proyectos we want to count
     *   }
     * })
    **/
    count<T extends proyectoCountArgs>(
      args?: Subset<T, proyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProyectoAggregateArgs>(args: Subset<T, ProyectoAggregateArgs>): Prisma.PrismaPromise<GetProyectoAggregateType<T>>

    /**
     * Group by Proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proyectoGroupByArgs} args - Group by arguments.
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
      T extends proyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proyectoGroupByArgs['orderBy'] }
        : { orderBy?: proyectoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proyecto model
   */
  readonly fields: proyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasos<T extends proyecto$pasosArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$pasosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tecnologias<T extends proyecto$tecnologiasArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$tecnologiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recursos<T extends proyecto$recursosArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$recursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proyectos_usuario<T extends proyecto$proyectos_usuarioArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$proyectos_usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_creacion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proyectos_inversion<T extends proyecto$proyectos_inversionArgs<ExtArgs> = {}>(args?: Subset<T, proyecto$proyectos_inversionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_inversion_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the proyecto model
   */
  interface proyectoFieldRefs {
    readonly id: FieldRef<"proyecto", 'Int'>
    readonly nombre: FieldRef<"proyecto", 'String'>
    readonly tipo_energia: FieldRef<"proyecto", 'String'>
    readonly descripcion: FieldRef<"proyecto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proyecto findUnique
   */
  export type proyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto findUniqueOrThrow
   */
  export type proyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto findFirst
   */
  export type proyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto findFirstOrThrow
   */
  export type proyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyecto to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proyectos.
     */
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto findMany
   */
  export type proyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter, which proyectos to fetch.
     */
    where?: proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proyectos to fetch.
     */
    orderBy?: proyectoOrderByWithRelationInput | proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proyectos.
     */
    cursor?: proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proyectos.
     */
    skip?: number
    distinct?: ProyectoScalarFieldEnum | ProyectoScalarFieldEnum[]
  }

  /**
   * proyecto create
   */
  export type proyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a proyecto.
     */
    data: XOR<proyectoCreateInput, proyectoUncheckedCreateInput>
  }

  /**
   * proyecto createMany
   */
  export type proyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proyectos.
     */
    data: proyectoCreateManyInput | proyectoCreateManyInput[]
  }

  /**
   * proyecto createManyAndReturn
   */
  export type proyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * The data used to create many proyectos.
     */
    data: proyectoCreateManyInput | proyectoCreateManyInput[]
  }

  /**
   * proyecto update
   */
  export type proyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a proyecto.
     */
    data: XOR<proyectoUpdateInput, proyectoUncheckedUpdateInput>
    /**
     * Choose, which proyecto to update.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto updateMany
   */
  export type proyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectoUpdateManyMutationInput, proyectoUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
  }

  /**
   * proyecto updateManyAndReturn
   */
  export type proyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * The data used to update proyectos.
     */
    data: XOR<proyectoUpdateManyMutationInput, proyectoUncheckedUpdateManyInput>
    /**
     * Filter which proyectos to update
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to update.
     */
    limit?: number
  }

  /**
   * proyecto upsert
   */
  export type proyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the proyecto to update in case it exists.
     */
    where: proyectoWhereUniqueInput
    /**
     * In case the proyecto found by the `where` argument doesn't exist, create a new proyecto with this data.
     */
    create: XOR<proyectoCreateInput, proyectoUncheckedCreateInput>
    /**
     * In case the proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proyectoUpdateInput, proyectoUncheckedUpdateInput>
  }

  /**
   * proyecto delete
   */
  export type proyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
    /**
     * Filter which proyecto to delete.
     */
    where: proyectoWhereUniqueInput
  }

  /**
   * proyecto deleteMany
   */
  export type proyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proyectos to delete
     */
    where?: proyectoWhereInput
    /**
     * Limit how many proyectos to delete.
     */
    limit?: number
  }

  /**
   * proyecto.pasos
   */
  export type proyecto$pasosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    where?: pasoWhereInput
    orderBy?: pasoOrderByWithRelationInput | pasoOrderByWithRelationInput[]
    cursor?: pasoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasoScalarFieldEnum | PasoScalarFieldEnum[]
  }

  /**
   * proyecto.tecnologias
   */
  export type proyecto$tecnologiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    where?: tecnologia_proyectoWhereInput
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    cursor?: tecnologia_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tecnologia_proyectoScalarFieldEnum | Tecnologia_proyectoScalarFieldEnum[]
  }

  /**
   * proyecto.recursos
   */
  export type proyecto$recursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    where?: recursoWhereInput
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    cursor?: recursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * proyecto.proyectos_usuario
   */
  export type proyecto$proyectos_usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_creacion_proyecto
     */
    select?: usuario_creacion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_creacion_proyecto
     */
    omit?: usuario_creacion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_creacion_proyectoInclude<ExtArgs> | null
    where?: usuario_creacion_proyectoWhereInput
    orderBy?: usuario_creacion_proyectoOrderByWithRelationInput | usuario_creacion_proyectoOrderByWithRelationInput[]
    cursor?: usuario_creacion_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_creacion_proyectoScalarFieldEnum | Usuario_creacion_proyectoScalarFieldEnum[]
  }

  /**
   * proyecto.proyectos_inversion
   */
  export type proyecto$proyectos_inversionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_inversion_proyecto
     */
    select?: usuario_inversion_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_inversion_proyecto
     */
    omit?: usuario_inversion_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_inversion_proyectoInclude<ExtArgs> | null
    where?: usuario_inversion_proyectoWhereInput
    orderBy?: usuario_inversion_proyectoOrderByWithRelationInput | usuario_inversion_proyectoOrderByWithRelationInput[]
    cursor?: usuario_inversion_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_inversion_proyectoScalarFieldEnum | Usuario_inversion_proyectoScalarFieldEnum[]
  }

  /**
   * proyecto without action
   */
  export type proyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proyecto
     */
    select?: proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proyecto
     */
    omit?: proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: proyectoInclude<ExtArgs> | null
  }


  /**
   * Model paso
   */

  export type AggregatePaso = {
    _count: PasoCountAggregateOutputType | null
    _avg: PasoAvgAggregateOutputType | null
    _sum: PasoSumAggregateOutputType | null
    _min: PasoMinAggregateOutputType | null
    _max: PasoMaxAggregateOutputType | null
  }

  export type PasoAvgAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
  }

  export type PasoSumAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
  }

  export type PasoMinAggregateOutputType = {
    id: number | null
    paso: string | null
    proyecto_id: number | null
  }

  export type PasoMaxAggregateOutputType = {
    id: number | null
    paso: string | null
    proyecto_id: number | null
  }

  export type PasoCountAggregateOutputType = {
    id: number
    paso: number
    proyecto_id: number
    _all: number
  }


  export type PasoAvgAggregateInputType = {
    id?: true
    proyecto_id?: true
  }

  export type PasoSumAggregateInputType = {
    id?: true
    proyecto_id?: true
  }

  export type PasoMinAggregateInputType = {
    id?: true
    paso?: true
    proyecto_id?: true
  }

  export type PasoMaxAggregateInputType = {
    id?: true
    paso?: true
    proyecto_id?: true
  }

  export type PasoCountAggregateInputType = {
    id?: true
    paso?: true
    proyecto_id?: true
    _all?: true
  }

  export type PasoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paso to aggregate.
     */
    where?: pasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pasos to fetch.
     */
    orderBy?: pasoOrderByWithRelationInput | pasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pasos
    **/
    _count?: true | PasoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasoMaxAggregateInputType
  }

  export type GetPasoAggregateType<T extends PasoAggregateArgs> = {
        [P in keyof T & keyof AggregatePaso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaso[P]>
      : GetScalarType<T[P], AggregatePaso[P]>
  }




  export type pasoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pasoWhereInput
    orderBy?: pasoOrderByWithAggregationInput | pasoOrderByWithAggregationInput[]
    by: PasoScalarFieldEnum[] | PasoScalarFieldEnum
    having?: pasoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasoCountAggregateInputType | true
    _avg?: PasoAvgAggregateInputType
    _sum?: PasoSumAggregateInputType
    _min?: PasoMinAggregateInputType
    _max?: PasoMaxAggregateInputType
  }

  export type PasoGroupByOutputType = {
    id: number
    paso: string
    proyecto_id: number
    _count: PasoCountAggregateOutputType | null
    _avg: PasoAvgAggregateOutputType | null
    _sum: PasoSumAggregateOutputType | null
    _min: PasoMinAggregateOutputType | null
    _max: PasoMaxAggregateOutputType | null
  }

  type GetPasoGroupByPayload<T extends pasoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasoGroupByOutputType[P]>
            : GetScalarType<T[P], PasoGroupByOutputType[P]>
        }
      >
    >


  export type pasoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paso?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paso"]>

  export type pasoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paso?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paso"]>

  export type pasoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paso?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paso"]>

  export type pasoSelectScalar = {
    id?: boolean
    paso?: boolean
    proyecto_id?: boolean
  }

  export type pasoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paso" | "proyecto_id", ExtArgs["result"]["paso"]>
  export type pasoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type pasoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type pasoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $pasoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paso"
    objects: {
      proyecto: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paso: string
      proyecto_id: number
    }, ExtArgs["result"]["paso"]>
    composites: {}
  }

  type pasoGetPayload<S extends boolean | null | undefined | pasoDefaultArgs> = $Result.GetResult<Prisma.$pasoPayload, S>

  type pasoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pasoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasoCountAggregateInputType | true
    }

  export interface pasoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paso'], meta: { name: 'paso' } }
    /**
     * Find zero or one Paso that matches the filter.
     * @param {pasoFindUniqueArgs} args - Arguments to find a Paso
     * @example
     * // Get one Paso
     * const paso = await prisma.paso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pasoFindUniqueArgs>(args: SelectSubset<T, pasoFindUniqueArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pasoFindUniqueOrThrowArgs} args - Arguments to find a Paso
     * @example
     * // Get one Paso
     * const paso = await prisma.paso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pasoFindUniqueOrThrowArgs>(args: SelectSubset<T, pasoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoFindFirstArgs} args - Arguments to find a Paso
     * @example
     * // Get one Paso
     * const paso = await prisma.paso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pasoFindFirstArgs>(args?: SelectSubset<T, pasoFindFirstArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoFindFirstOrThrowArgs} args - Arguments to find a Paso
     * @example
     * // Get one Paso
     * const paso = await prisma.paso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pasoFindFirstOrThrowArgs>(args?: SelectSubset<T, pasoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasos
     * const pasos = await prisma.paso.findMany()
     * 
     * // Get first 10 Pasos
     * const pasos = await prisma.paso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pasoWithIdOnly = await prisma.paso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pasoFindManyArgs>(args?: SelectSubset<T, pasoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paso.
     * @param {pasoCreateArgs} args - Arguments to create a Paso.
     * @example
     * // Create one Paso
     * const Paso = await prisma.paso.create({
     *   data: {
     *     // ... data to create a Paso
     *   }
     * })
     * 
     */
    create<T extends pasoCreateArgs>(args: SelectSubset<T, pasoCreateArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasos.
     * @param {pasoCreateManyArgs} args - Arguments to create many Pasos.
     * @example
     * // Create many Pasos
     * const paso = await prisma.paso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pasoCreateManyArgs>(args?: SelectSubset<T, pasoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasos and returns the data saved in the database.
     * @param {pasoCreateManyAndReturnArgs} args - Arguments to create many Pasos.
     * @example
     * // Create many Pasos
     * const paso = await prisma.paso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasos and only return the `id`
     * const pasoWithIdOnly = await prisma.paso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pasoCreateManyAndReturnArgs>(args?: SelectSubset<T, pasoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paso.
     * @param {pasoDeleteArgs} args - Arguments to delete one Paso.
     * @example
     * // Delete one Paso
     * const Paso = await prisma.paso.delete({
     *   where: {
     *     // ... filter to delete one Paso
     *   }
     * })
     * 
     */
    delete<T extends pasoDeleteArgs>(args: SelectSubset<T, pasoDeleteArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paso.
     * @param {pasoUpdateArgs} args - Arguments to update one Paso.
     * @example
     * // Update one Paso
     * const paso = await prisma.paso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pasoUpdateArgs>(args: SelectSubset<T, pasoUpdateArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasos.
     * @param {pasoDeleteManyArgs} args - Arguments to filter Pasos to delete.
     * @example
     * // Delete a few Pasos
     * const { count } = await prisma.paso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pasoDeleteManyArgs>(args?: SelectSubset<T, pasoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasos
     * const paso = await prisma.paso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pasoUpdateManyArgs>(args: SelectSubset<T, pasoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasos and returns the data updated in the database.
     * @param {pasoUpdateManyAndReturnArgs} args - Arguments to update many Pasos.
     * @example
     * // Update many Pasos
     * const paso = await prisma.paso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasos and only return the `id`
     * const pasoWithIdOnly = await prisma.paso.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends pasoUpdateManyAndReturnArgs>(args: SelectSubset<T, pasoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paso.
     * @param {pasoUpsertArgs} args - Arguments to update or create a Paso.
     * @example
     * // Update or create a Paso
     * const paso = await prisma.paso.upsert({
     *   create: {
     *     // ... data to create a Paso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paso we want to update
     *   }
     * })
     */
    upsert<T extends pasoUpsertArgs>(args: SelectSubset<T, pasoUpsertArgs<ExtArgs>>): Prisma__pasoClient<$Result.GetResult<Prisma.$pasoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoCountArgs} args - Arguments to filter Pasos to count.
     * @example
     * // Count the number of Pasos
     * const count = await prisma.paso.count({
     *   where: {
     *     // ... the filter for the Pasos we want to count
     *   }
     * })
    **/
    count<T extends pasoCountArgs>(
      args?: Subset<T, pasoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasoAggregateArgs>(args: Subset<T, PasoAggregateArgs>): Prisma.PrismaPromise<GetPasoAggregateType<T>>

    /**
     * Group by Paso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pasoGroupByArgs} args - Group by arguments.
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
      T extends pasoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pasoGroupByArgs['orderBy'] }
        : { orderBy?: pasoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pasoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paso model
   */
  readonly fields: pasoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pasoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the paso model
   */
  interface pasoFieldRefs {
    readonly id: FieldRef<"paso", 'Int'>
    readonly paso: FieldRef<"paso", 'String'>
    readonly proyecto_id: FieldRef<"paso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * paso findUnique
   */
  export type pasoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter, which paso to fetch.
     */
    where: pasoWhereUniqueInput
  }

  /**
   * paso findUniqueOrThrow
   */
  export type pasoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter, which paso to fetch.
     */
    where: pasoWhereUniqueInput
  }

  /**
   * paso findFirst
   */
  export type pasoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter, which paso to fetch.
     */
    where?: pasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pasos to fetch.
     */
    orderBy?: pasoOrderByWithRelationInput | pasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pasos.
     */
    cursor?: pasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pasos.
     */
    distinct?: PasoScalarFieldEnum | PasoScalarFieldEnum[]
  }

  /**
   * paso findFirstOrThrow
   */
  export type pasoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter, which paso to fetch.
     */
    where?: pasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pasos to fetch.
     */
    orderBy?: pasoOrderByWithRelationInput | pasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pasos.
     */
    cursor?: pasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pasos.
     */
    distinct?: PasoScalarFieldEnum | PasoScalarFieldEnum[]
  }

  /**
   * paso findMany
   */
  export type pasoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter, which pasos to fetch.
     */
    where?: pasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pasos to fetch.
     */
    orderBy?: pasoOrderByWithRelationInput | pasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pasos.
     */
    cursor?: pasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pasos.
     */
    skip?: number
    distinct?: PasoScalarFieldEnum | PasoScalarFieldEnum[]
  }

  /**
   * paso create
   */
  export type pasoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * The data needed to create a paso.
     */
    data: XOR<pasoCreateInput, pasoUncheckedCreateInput>
  }

  /**
   * paso createMany
   */
  export type pasoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pasos.
     */
    data: pasoCreateManyInput | pasoCreateManyInput[]
  }

  /**
   * paso createManyAndReturn
   */
  export type pasoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * The data used to create many pasos.
     */
    data: pasoCreateManyInput | pasoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * paso update
   */
  export type pasoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * The data needed to update a paso.
     */
    data: XOR<pasoUpdateInput, pasoUncheckedUpdateInput>
    /**
     * Choose, which paso to update.
     */
    where: pasoWhereUniqueInput
  }

  /**
   * paso updateMany
   */
  export type pasoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pasos.
     */
    data: XOR<pasoUpdateManyMutationInput, pasoUncheckedUpdateManyInput>
    /**
     * Filter which pasos to update
     */
    where?: pasoWhereInput
    /**
     * Limit how many pasos to update.
     */
    limit?: number
  }

  /**
   * paso updateManyAndReturn
   */
  export type pasoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * The data used to update pasos.
     */
    data: XOR<pasoUpdateManyMutationInput, pasoUncheckedUpdateManyInput>
    /**
     * Filter which pasos to update
     */
    where?: pasoWhereInput
    /**
     * Limit how many pasos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * paso upsert
   */
  export type pasoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * The filter to search for the paso to update in case it exists.
     */
    where: pasoWhereUniqueInput
    /**
     * In case the paso found by the `where` argument doesn't exist, create a new paso with this data.
     */
    create: XOR<pasoCreateInput, pasoUncheckedCreateInput>
    /**
     * In case the paso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pasoUpdateInput, pasoUncheckedUpdateInput>
  }

  /**
   * paso delete
   */
  export type pasoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
    /**
     * Filter which paso to delete.
     */
    where: pasoWhereUniqueInput
  }

  /**
   * paso deleteMany
   */
  export type pasoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pasos to delete
     */
    where?: pasoWhereInput
    /**
     * Limit how many pasos to delete.
     */
    limit?: number
  }

  /**
   * paso without action
   */
  export type pasoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paso
     */
    select?: pasoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paso
     */
    omit?: pasoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pasoInclude<ExtArgs> | null
  }


  /**
   * Model tecnologia
   */

  export type AggregateTecnologia = {
    _count: TecnologiaCountAggregateOutputType | null
    _avg: TecnologiaAvgAggregateOutputType | null
    _sum: TecnologiaSumAggregateOutputType | null
    _min: TecnologiaMinAggregateOutputType | null
    _max: TecnologiaMaxAggregateOutputType | null
  }

  export type TecnologiaAvgAggregateOutputType = {
    id: number | null
  }

  export type TecnologiaSumAggregateOutputType = {
    id: number | null
  }

  export type TecnologiaMinAggregateOutputType = {
    id: number | null
    tecnologia: string | null
    tipo: boolean | null
  }

  export type TecnologiaMaxAggregateOutputType = {
    id: number | null
    tecnologia: string | null
    tipo: boolean | null
  }

  export type TecnologiaCountAggregateOutputType = {
    id: number
    tecnologia: number
    tipo: number
    _all: number
  }


  export type TecnologiaAvgAggregateInputType = {
    id?: true
  }

  export type TecnologiaSumAggregateInputType = {
    id?: true
  }

  export type TecnologiaMinAggregateInputType = {
    id?: true
    tecnologia?: true
    tipo?: true
  }

  export type TecnologiaMaxAggregateInputType = {
    id?: true
    tecnologia?: true
    tipo?: true
  }

  export type TecnologiaCountAggregateInputType = {
    id?: true
    tecnologia?: true
    tipo?: true
    _all?: true
  }

  export type TecnologiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tecnologia to aggregate.
     */
    where?: tecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologias to fetch.
     */
    orderBy?: tecnologiaOrderByWithRelationInput | tecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tecnologias
    **/
    _count?: true | TecnologiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TecnologiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TecnologiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnologiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnologiaMaxAggregateInputType
  }

  export type GetTecnologiaAggregateType<T extends TecnologiaAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnologia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnologia[P]>
      : GetScalarType<T[P], AggregateTecnologia[P]>
  }




  export type tecnologiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tecnologiaWhereInput
    orderBy?: tecnologiaOrderByWithAggregationInput | tecnologiaOrderByWithAggregationInput[]
    by: TecnologiaScalarFieldEnum[] | TecnologiaScalarFieldEnum
    having?: tecnologiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnologiaCountAggregateInputType | true
    _avg?: TecnologiaAvgAggregateInputType
    _sum?: TecnologiaSumAggregateInputType
    _min?: TecnologiaMinAggregateInputType
    _max?: TecnologiaMaxAggregateInputType
  }

  export type TecnologiaGroupByOutputType = {
    id: number
    tecnologia: string
    tipo: boolean
    _count: TecnologiaCountAggregateOutputType | null
    _avg: TecnologiaAvgAggregateOutputType | null
    _sum: TecnologiaSumAggregateOutputType | null
    _min: TecnologiaMinAggregateOutputType | null
    _max: TecnologiaMaxAggregateOutputType | null
  }

  type GetTecnologiaGroupByPayload<T extends tecnologiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TecnologiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnologiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnologiaGroupByOutputType[P]>
            : GetScalarType<T[P], TecnologiaGroupByOutputType[P]>
        }
      >
    >


  export type tecnologiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnologia?: boolean
    tipo?: boolean
    proyectos?: boolean | tecnologia$proyectosArgs<ExtArgs>
    _count?: boolean | TecnologiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnologia"]>

  export type tecnologiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnologia?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tecnologia"]>

  export type tecnologiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnologia?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tecnologia"]>

  export type tecnologiaSelectScalar = {
    id?: boolean
    tecnologia?: boolean
    tipo?: boolean
  }

  export type tecnologiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tecnologia" | "tipo", ExtArgs["result"]["tecnologia"]>
  export type tecnologiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyectos?: boolean | tecnologia$proyectosArgs<ExtArgs>
    _count?: boolean | TecnologiaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tecnologiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tecnologiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tecnologiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tecnologia"
    objects: {
      proyectos: Prisma.$tecnologia_proyectoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tecnologia: string
      tipo: boolean
    }, ExtArgs["result"]["tecnologia"]>
    composites: {}
  }

  type tecnologiaGetPayload<S extends boolean | null | undefined | tecnologiaDefaultArgs> = $Result.GetResult<Prisma.$tecnologiaPayload, S>

  type tecnologiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tecnologiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TecnologiaCountAggregateInputType | true
    }

  export interface tecnologiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tecnologia'], meta: { name: 'tecnologia' } }
    /**
     * Find zero or one Tecnologia that matches the filter.
     * @param {tecnologiaFindUniqueArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tecnologiaFindUniqueArgs>(args: SelectSubset<T, tecnologiaFindUniqueArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnologia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tecnologiaFindUniqueOrThrowArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tecnologiaFindUniqueOrThrowArgs>(args: SelectSubset<T, tecnologiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaFindFirstArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tecnologiaFindFirstArgs>(args?: SelectSubset<T, tecnologiaFindFirstArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaFindFirstOrThrowArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tecnologiaFindFirstOrThrowArgs>(args?: SelectSubset<T, tecnologiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnologias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnologias
     * const tecnologias = await prisma.tecnologia.findMany()
     * 
     * // Get first 10 Tecnologias
     * const tecnologias = await prisma.tecnologia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tecnologiaFindManyArgs>(args?: SelectSubset<T, tecnologiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnologia.
     * @param {tecnologiaCreateArgs} args - Arguments to create a Tecnologia.
     * @example
     * // Create one Tecnologia
     * const Tecnologia = await prisma.tecnologia.create({
     *   data: {
     *     // ... data to create a Tecnologia
     *   }
     * })
     * 
     */
    create<T extends tecnologiaCreateArgs>(args: SelectSubset<T, tecnologiaCreateArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnologias.
     * @param {tecnologiaCreateManyArgs} args - Arguments to create many Tecnologias.
     * @example
     * // Create many Tecnologias
     * const tecnologia = await prisma.tecnologia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tecnologiaCreateManyArgs>(args?: SelectSubset<T, tecnologiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tecnologias and returns the data saved in the database.
     * @param {tecnologiaCreateManyAndReturnArgs} args - Arguments to create many Tecnologias.
     * @example
     * // Create many Tecnologias
     * const tecnologia = await prisma.tecnologia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tecnologias and only return the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tecnologiaCreateManyAndReturnArgs>(args?: SelectSubset<T, tecnologiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tecnologia.
     * @param {tecnologiaDeleteArgs} args - Arguments to delete one Tecnologia.
     * @example
     * // Delete one Tecnologia
     * const Tecnologia = await prisma.tecnologia.delete({
     *   where: {
     *     // ... filter to delete one Tecnologia
     *   }
     * })
     * 
     */
    delete<T extends tecnologiaDeleteArgs>(args: SelectSubset<T, tecnologiaDeleteArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnologia.
     * @param {tecnologiaUpdateArgs} args - Arguments to update one Tecnologia.
     * @example
     * // Update one Tecnologia
     * const tecnologia = await prisma.tecnologia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tecnologiaUpdateArgs>(args: SelectSubset<T, tecnologiaUpdateArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnologias.
     * @param {tecnologiaDeleteManyArgs} args - Arguments to filter Tecnologias to delete.
     * @example
     * // Delete a few Tecnologias
     * const { count } = await prisma.tecnologia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tecnologiaDeleteManyArgs>(args?: SelectSubset<T, tecnologiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnologias
     * const tecnologia = await prisma.tecnologia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tecnologiaUpdateManyArgs>(args: SelectSubset<T, tecnologiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologias and returns the data updated in the database.
     * @param {tecnologiaUpdateManyAndReturnArgs} args - Arguments to update many Tecnologias.
     * @example
     * // Update many Tecnologias
     * const tecnologia = await prisma.tecnologia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tecnologias and only return the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tecnologiaUpdateManyAndReturnArgs>(args: SelectSubset<T, tecnologiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tecnologia.
     * @param {tecnologiaUpsertArgs} args - Arguments to update or create a Tecnologia.
     * @example
     * // Update or create a Tecnologia
     * const tecnologia = await prisma.tecnologia.upsert({
     *   create: {
     *     // ... data to create a Tecnologia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnologia we want to update
     *   }
     * })
     */
    upsert<T extends tecnologiaUpsertArgs>(args: SelectSubset<T, tecnologiaUpsertArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnologias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaCountArgs} args - Arguments to filter Tecnologias to count.
     * @example
     * // Count the number of Tecnologias
     * const count = await prisma.tecnologia.count({
     *   where: {
     *     // ... the filter for the Tecnologias we want to count
     *   }
     * })
    **/
    count<T extends tecnologiaCountArgs>(
      args?: Subset<T, tecnologiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnologiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnologia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TecnologiaAggregateArgs>(args: Subset<T, TecnologiaAggregateArgs>): Prisma.PrismaPromise<GetTecnologiaAggregateType<T>>

    /**
     * Group by Tecnologia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologiaGroupByArgs} args - Group by arguments.
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
      T extends tecnologiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tecnologiaGroupByArgs['orderBy'] }
        : { orderBy?: tecnologiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tecnologiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnologiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tecnologia model
   */
  readonly fields: tecnologiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tecnologia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tecnologiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyectos<T extends tecnologia$proyectosArgs<ExtArgs> = {}>(args?: Subset<T, tecnologia$proyectosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tecnologia model
   */
  interface tecnologiaFieldRefs {
    readonly id: FieldRef<"tecnologia", 'Int'>
    readonly tecnologia: FieldRef<"tecnologia", 'String'>
    readonly tipo: FieldRef<"tecnologia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tecnologia findUnique
   */
  export type tecnologiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia to fetch.
     */
    where: tecnologiaWhereUniqueInput
  }

  /**
   * tecnologia findUniqueOrThrow
   */
  export type tecnologiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia to fetch.
     */
    where: tecnologiaWhereUniqueInput
  }

  /**
   * tecnologia findFirst
   */
  export type tecnologiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia to fetch.
     */
    where?: tecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologias to fetch.
     */
    orderBy?: tecnologiaOrderByWithRelationInput | tecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologias.
     */
    cursor?: tecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologias.
     */
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * tecnologia findFirstOrThrow
   */
  export type tecnologiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia to fetch.
     */
    where?: tecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologias to fetch.
     */
    orderBy?: tecnologiaOrderByWithRelationInput | tecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologias.
     */
    cursor?: tecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologias.
     */
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * tecnologia findMany
   */
  export type tecnologiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which tecnologias to fetch.
     */
    where?: tecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologias to fetch.
     */
    orderBy?: tecnologiaOrderByWithRelationInput | tecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tecnologias.
     */
    cursor?: tecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologias.
     */
    skip?: number
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * tecnologia create
   */
  export type tecnologiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * The data needed to create a tecnologia.
     */
    data: XOR<tecnologiaCreateInput, tecnologiaUncheckedCreateInput>
  }

  /**
   * tecnologia createMany
   */
  export type tecnologiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tecnologias.
     */
    data: tecnologiaCreateManyInput | tecnologiaCreateManyInput[]
  }

  /**
   * tecnologia createManyAndReturn
   */
  export type tecnologiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * The data used to create many tecnologias.
     */
    data: tecnologiaCreateManyInput | tecnologiaCreateManyInput[]
  }

  /**
   * tecnologia update
   */
  export type tecnologiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * The data needed to update a tecnologia.
     */
    data: XOR<tecnologiaUpdateInput, tecnologiaUncheckedUpdateInput>
    /**
     * Choose, which tecnologia to update.
     */
    where: tecnologiaWhereUniqueInput
  }

  /**
   * tecnologia updateMany
   */
  export type tecnologiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tecnologias.
     */
    data: XOR<tecnologiaUpdateManyMutationInput, tecnologiaUncheckedUpdateManyInput>
    /**
     * Filter which tecnologias to update
     */
    where?: tecnologiaWhereInput
    /**
     * Limit how many tecnologias to update.
     */
    limit?: number
  }

  /**
   * tecnologia updateManyAndReturn
   */
  export type tecnologiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * The data used to update tecnologias.
     */
    data: XOR<tecnologiaUpdateManyMutationInput, tecnologiaUncheckedUpdateManyInput>
    /**
     * Filter which tecnologias to update
     */
    where?: tecnologiaWhereInput
    /**
     * Limit how many tecnologias to update.
     */
    limit?: number
  }

  /**
   * tecnologia upsert
   */
  export type tecnologiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * The filter to search for the tecnologia to update in case it exists.
     */
    where: tecnologiaWhereUniqueInput
    /**
     * In case the tecnologia found by the `where` argument doesn't exist, create a new tecnologia with this data.
     */
    create: XOR<tecnologiaCreateInput, tecnologiaUncheckedCreateInput>
    /**
     * In case the tecnologia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tecnologiaUpdateInput, tecnologiaUncheckedUpdateInput>
  }

  /**
   * tecnologia delete
   */
  export type tecnologiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
    /**
     * Filter which tecnologia to delete.
     */
    where: tecnologiaWhereUniqueInput
  }

  /**
   * tecnologia deleteMany
   */
  export type tecnologiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tecnologias to delete
     */
    where?: tecnologiaWhereInput
    /**
     * Limit how many tecnologias to delete.
     */
    limit?: number
  }

  /**
   * tecnologia.proyectos
   */
  export type tecnologia$proyectosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    where?: tecnologia_proyectoWhereInput
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    cursor?: tecnologia_proyectoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tecnologia_proyectoScalarFieldEnum | Tecnologia_proyectoScalarFieldEnum[]
  }

  /**
   * tecnologia without action
   */
  export type tecnologiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia
     */
    select?: tecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia
     */
    omit?: tecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologiaInclude<ExtArgs> | null
  }


  /**
   * Model tecnologia_proyecto
   */

  export type AggregateTecnologia_proyecto = {
    _count: Tecnologia_proyectoCountAggregateOutputType | null
    _avg: Tecnologia_proyectoAvgAggregateOutputType | null
    _sum: Tecnologia_proyectoSumAggregateOutputType | null
    _min: Tecnologia_proyectoMinAggregateOutputType | null
    _max: Tecnologia_proyectoMaxAggregateOutputType | null
  }

  export type Tecnologia_proyectoAvgAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
    tecnologia_id: number | null
  }

  export type Tecnologia_proyectoSumAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
    tecnologia_id: number | null
  }

  export type Tecnologia_proyectoMinAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
    tecnologia_id: number | null
  }

  export type Tecnologia_proyectoMaxAggregateOutputType = {
    id: number | null
    proyecto_id: number | null
    tecnologia_id: number | null
  }

  export type Tecnologia_proyectoCountAggregateOutputType = {
    id: number
    proyecto_id: number
    tecnologia_id: number
    _all: number
  }


  export type Tecnologia_proyectoAvgAggregateInputType = {
    id?: true
    proyecto_id?: true
    tecnologia_id?: true
  }

  export type Tecnologia_proyectoSumAggregateInputType = {
    id?: true
    proyecto_id?: true
    tecnologia_id?: true
  }

  export type Tecnologia_proyectoMinAggregateInputType = {
    id?: true
    proyecto_id?: true
    tecnologia_id?: true
  }

  export type Tecnologia_proyectoMaxAggregateInputType = {
    id?: true
    proyecto_id?: true
    tecnologia_id?: true
  }

  export type Tecnologia_proyectoCountAggregateInputType = {
    id?: true
    proyecto_id?: true
    tecnologia_id?: true
    _all?: true
  }

  export type Tecnologia_proyectoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tecnologia_proyecto to aggregate.
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologia_proyectos to fetch.
     */
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tecnologia_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologia_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologia_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tecnologia_proyectos
    **/
    _count?: true | Tecnologia_proyectoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tecnologia_proyectoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tecnologia_proyectoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tecnologia_proyectoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tecnologia_proyectoMaxAggregateInputType
  }

  export type GetTecnologia_proyectoAggregateType<T extends Tecnologia_proyectoAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnologia_proyecto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnologia_proyecto[P]>
      : GetScalarType<T[P], AggregateTecnologia_proyecto[P]>
  }




  export type tecnologia_proyectoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tecnologia_proyectoWhereInput
    orderBy?: tecnologia_proyectoOrderByWithAggregationInput | tecnologia_proyectoOrderByWithAggregationInput[]
    by: Tecnologia_proyectoScalarFieldEnum[] | Tecnologia_proyectoScalarFieldEnum
    having?: tecnologia_proyectoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tecnologia_proyectoCountAggregateInputType | true
    _avg?: Tecnologia_proyectoAvgAggregateInputType
    _sum?: Tecnologia_proyectoSumAggregateInputType
    _min?: Tecnologia_proyectoMinAggregateInputType
    _max?: Tecnologia_proyectoMaxAggregateInputType
  }

  export type Tecnologia_proyectoGroupByOutputType = {
    id: number
    proyecto_id: number
    tecnologia_id: number
    _count: Tecnologia_proyectoCountAggregateOutputType | null
    _avg: Tecnologia_proyectoAvgAggregateOutputType | null
    _sum: Tecnologia_proyectoSumAggregateOutputType | null
    _min: Tecnologia_proyectoMinAggregateOutputType | null
    _max: Tecnologia_proyectoMaxAggregateOutputType | null
  }

  type GetTecnologia_proyectoGroupByPayload<T extends tecnologia_proyectoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tecnologia_proyectoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tecnologia_proyectoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tecnologia_proyectoGroupByOutputType[P]>
            : GetScalarType<T[P], Tecnologia_proyectoGroupByOutputType[P]>
        }
      >
    >


  export type tecnologia_proyectoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proyecto_id?: boolean
    tecnologia_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnologia_proyecto"]>

  export type tecnologia_proyectoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proyecto_id?: boolean
    tecnologia_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnologia_proyecto"]>

  export type tecnologia_proyectoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    proyecto_id?: boolean
    tecnologia_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnologia_proyecto"]>

  export type tecnologia_proyectoSelectScalar = {
    id?: boolean
    proyecto_id?: boolean
    tecnologia_id?: boolean
  }

  export type tecnologia_proyectoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "proyecto_id" | "tecnologia_id", ExtArgs["result"]["tecnologia_proyecto"]>
  export type tecnologia_proyectoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }
  export type tecnologia_proyectoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }
  export type tecnologia_proyectoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
    tecnologia?: boolean | tecnologiaDefaultArgs<ExtArgs>
  }

  export type $tecnologia_proyectoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tecnologia_proyecto"
    objects: {
      proyecto: Prisma.$proyectoPayload<ExtArgs>
      tecnologia: Prisma.$tecnologiaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      proyecto_id: number
      tecnologia_id: number
    }, ExtArgs["result"]["tecnologia_proyecto"]>
    composites: {}
  }

  type tecnologia_proyectoGetPayload<S extends boolean | null | undefined | tecnologia_proyectoDefaultArgs> = $Result.GetResult<Prisma.$tecnologia_proyectoPayload, S>

  type tecnologia_proyectoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tecnologia_proyectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tecnologia_proyectoCountAggregateInputType | true
    }

  export interface tecnologia_proyectoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tecnologia_proyecto'], meta: { name: 'tecnologia_proyecto' } }
    /**
     * Find zero or one Tecnologia_proyecto that matches the filter.
     * @param {tecnologia_proyectoFindUniqueArgs} args - Arguments to find a Tecnologia_proyecto
     * @example
     * // Get one Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tecnologia_proyectoFindUniqueArgs>(args: SelectSubset<T, tecnologia_proyectoFindUniqueArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnologia_proyecto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tecnologia_proyectoFindUniqueOrThrowArgs} args - Arguments to find a Tecnologia_proyecto
     * @example
     * // Get one Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tecnologia_proyectoFindUniqueOrThrowArgs>(args: SelectSubset<T, tecnologia_proyectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia_proyecto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoFindFirstArgs} args - Arguments to find a Tecnologia_proyecto
     * @example
     * // Get one Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tecnologia_proyectoFindFirstArgs>(args?: SelectSubset<T, tecnologia_proyectoFindFirstArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia_proyecto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoFindFirstOrThrowArgs} args - Arguments to find a Tecnologia_proyecto
     * @example
     * // Get one Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tecnologia_proyectoFindFirstOrThrowArgs>(args?: SelectSubset<T, tecnologia_proyectoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnologia_proyectos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnologia_proyectos
     * const tecnologia_proyectos = await prisma.tecnologia_proyecto.findMany()
     * 
     * // Get first 10 Tecnologia_proyectos
     * const tecnologia_proyectos = await prisma.tecnologia_proyecto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnologia_proyectoWithIdOnly = await prisma.tecnologia_proyecto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tecnologia_proyectoFindManyArgs>(args?: SelectSubset<T, tecnologia_proyectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnologia_proyecto.
     * @param {tecnologia_proyectoCreateArgs} args - Arguments to create a Tecnologia_proyecto.
     * @example
     * // Create one Tecnologia_proyecto
     * const Tecnologia_proyecto = await prisma.tecnologia_proyecto.create({
     *   data: {
     *     // ... data to create a Tecnologia_proyecto
     *   }
     * })
     * 
     */
    create<T extends tecnologia_proyectoCreateArgs>(args: SelectSubset<T, tecnologia_proyectoCreateArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnologia_proyectos.
     * @param {tecnologia_proyectoCreateManyArgs} args - Arguments to create many Tecnologia_proyectos.
     * @example
     * // Create many Tecnologia_proyectos
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tecnologia_proyectoCreateManyArgs>(args?: SelectSubset<T, tecnologia_proyectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tecnologia_proyectos and returns the data saved in the database.
     * @param {tecnologia_proyectoCreateManyAndReturnArgs} args - Arguments to create many Tecnologia_proyectos.
     * @example
     * // Create many Tecnologia_proyectos
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tecnologia_proyectos and only return the `id`
     * const tecnologia_proyectoWithIdOnly = await prisma.tecnologia_proyecto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tecnologia_proyectoCreateManyAndReturnArgs>(args?: SelectSubset<T, tecnologia_proyectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tecnologia_proyecto.
     * @param {tecnologia_proyectoDeleteArgs} args - Arguments to delete one Tecnologia_proyecto.
     * @example
     * // Delete one Tecnologia_proyecto
     * const Tecnologia_proyecto = await prisma.tecnologia_proyecto.delete({
     *   where: {
     *     // ... filter to delete one Tecnologia_proyecto
     *   }
     * })
     * 
     */
    delete<T extends tecnologia_proyectoDeleteArgs>(args: SelectSubset<T, tecnologia_proyectoDeleteArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnologia_proyecto.
     * @param {tecnologia_proyectoUpdateArgs} args - Arguments to update one Tecnologia_proyecto.
     * @example
     * // Update one Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tecnologia_proyectoUpdateArgs>(args: SelectSubset<T, tecnologia_proyectoUpdateArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnologia_proyectos.
     * @param {tecnologia_proyectoDeleteManyArgs} args - Arguments to filter Tecnologia_proyectos to delete.
     * @example
     * // Delete a few Tecnologia_proyectos
     * const { count } = await prisma.tecnologia_proyecto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tecnologia_proyectoDeleteManyArgs>(args?: SelectSubset<T, tecnologia_proyectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologia_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnologia_proyectos
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tecnologia_proyectoUpdateManyArgs>(args: SelectSubset<T, tecnologia_proyectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologia_proyectos and returns the data updated in the database.
     * @param {tecnologia_proyectoUpdateManyAndReturnArgs} args - Arguments to update many Tecnologia_proyectos.
     * @example
     * // Update many Tecnologia_proyectos
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tecnologia_proyectos and only return the `id`
     * const tecnologia_proyectoWithIdOnly = await prisma.tecnologia_proyecto.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends tecnologia_proyectoUpdateManyAndReturnArgs>(args: SelectSubset<T, tecnologia_proyectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tecnologia_proyecto.
     * @param {tecnologia_proyectoUpsertArgs} args - Arguments to update or create a Tecnologia_proyecto.
     * @example
     * // Update or create a Tecnologia_proyecto
     * const tecnologia_proyecto = await prisma.tecnologia_proyecto.upsert({
     *   create: {
     *     // ... data to create a Tecnologia_proyecto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnologia_proyecto we want to update
     *   }
     * })
     */
    upsert<T extends tecnologia_proyectoUpsertArgs>(args: SelectSubset<T, tecnologia_proyectoUpsertArgs<ExtArgs>>): Prisma__tecnologia_proyectoClient<$Result.GetResult<Prisma.$tecnologia_proyectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnologia_proyectos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoCountArgs} args - Arguments to filter Tecnologia_proyectos to count.
     * @example
     * // Count the number of Tecnologia_proyectos
     * const count = await prisma.tecnologia_proyecto.count({
     *   where: {
     *     // ... the filter for the Tecnologia_proyectos we want to count
     *   }
     * })
    **/
    count<T extends tecnologia_proyectoCountArgs>(
      args?: Subset<T, tecnologia_proyectoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tecnologia_proyectoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnologia_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tecnologia_proyectoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tecnologia_proyectoAggregateArgs>(args: Subset<T, Tecnologia_proyectoAggregateArgs>): Prisma.PrismaPromise<GetTecnologia_proyectoAggregateType<T>>

    /**
     * Group by Tecnologia_proyecto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tecnologia_proyectoGroupByArgs} args - Group by arguments.
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
      T extends tecnologia_proyectoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tecnologia_proyectoGroupByArgs['orderBy'] }
        : { orderBy?: tecnologia_proyectoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tecnologia_proyectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnologia_proyectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tecnologia_proyecto model
   */
  readonly fields: tecnologia_proyectoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tecnologia_proyecto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tecnologia_proyectoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tecnologia<T extends tecnologiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tecnologiaDefaultArgs<ExtArgs>>): Prisma__tecnologiaClient<$Result.GetResult<Prisma.$tecnologiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tecnologia_proyecto model
   */
  interface tecnologia_proyectoFieldRefs {
    readonly id: FieldRef<"tecnologia_proyecto", 'Int'>
    readonly proyecto_id: FieldRef<"tecnologia_proyecto", 'Int'>
    readonly tecnologia_id: FieldRef<"tecnologia_proyecto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tecnologia_proyecto findUnique
   */
  export type tecnologia_proyectoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia_proyecto to fetch.
     */
    where: tecnologia_proyectoWhereUniqueInput
  }

  /**
   * tecnologia_proyecto findUniqueOrThrow
   */
  export type tecnologia_proyectoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia_proyecto to fetch.
     */
    where: tecnologia_proyectoWhereUniqueInput
  }

  /**
   * tecnologia_proyecto findFirst
   */
  export type tecnologia_proyectoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia_proyecto to fetch.
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologia_proyectos to fetch.
     */
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologia_proyectos.
     */
    cursor?: tecnologia_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologia_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologia_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologia_proyectos.
     */
    distinct?: Tecnologia_proyectoScalarFieldEnum | Tecnologia_proyectoScalarFieldEnum[]
  }

  /**
   * tecnologia_proyecto findFirstOrThrow
   */
  export type tecnologia_proyectoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia_proyecto to fetch.
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologia_proyectos to fetch.
     */
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tecnologia_proyectos.
     */
    cursor?: tecnologia_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologia_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologia_proyectos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tecnologia_proyectos.
     */
    distinct?: Tecnologia_proyectoScalarFieldEnum | Tecnologia_proyectoScalarFieldEnum[]
  }

  /**
   * tecnologia_proyecto findMany
   */
  export type tecnologia_proyectoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter, which tecnologia_proyectos to fetch.
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tecnologia_proyectos to fetch.
     */
    orderBy?: tecnologia_proyectoOrderByWithRelationInput | tecnologia_proyectoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tecnologia_proyectos.
     */
    cursor?: tecnologia_proyectoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tecnologia_proyectos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tecnologia_proyectos.
     */
    skip?: number
    distinct?: Tecnologia_proyectoScalarFieldEnum | Tecnologia_proyectoScalarFieldEnum[]
  }

  /**
   * tecnologia_proyecto create
   */
  export type tecnologia_proyectoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to create a tecnologia_proyecto.
     */
    data: XOR<tecnologia_proyectoCreateInput, tecnologia_proyectoUncheckedCreateInput>
  }

  /**
   * tecnologia_proyecto createMany
   */
  export type tecnologia_proyectoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tecnologia_proyectos.
     */
    data: tecnologia_proyectoCreateManyInput | tecnologia_proyectoCreateManyInput[]
  }

  /**
   * tecnologia_proyecto createManyAndReturn
   */
  export type tecnologia_proyectoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * The data used to create many tecnologia_proyectos.
     */
    data: tecnologia_proyectoCreateManyInput | tecnologia_proyectoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tecnologia_proyecto update
   */
  export type tecnologia_proyectoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * The data needed to update a tecnologia_proyecto.
     */
    data: XOR<tecnologia_proyectoUpdateInput, tecnologia_proyectoUncheckedUpdateInput>
    /**
     * Choose, which tecnologia_proyecto to update.
     */
    where: tecnologia_proyectoWhereUniqueInput
  }

  /**
   * tecnologia_proyecto updateMany
   */
  export type tecnologia_proyectoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tecnologia_proyectos.
     */
    data: XOR<tecnologia_proyectoUpdateManyMutationInput, tecnologia_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which tecnologia_proyectos to update
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * Limit how many tecnologia_proyectos to update.
     */
    limit?: number
  }

  /**
   * tecnologia_proyecto updateManyAndReturn
   */
  export type tecnologia_proyectoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * The data used to update tecnologia_proyectos.
     */
    data: XOR<tecnologia_proyectoUpdateManyMutationInput, tecnologia_proyectoUncheckedUpdateManyInput>
    /**
     * Filter which tecnologia_proyectos to update
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * Limit how many tecnologia_proyectos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tecnologia_proyecto upsert
   */
  export type tecnologia_proyectoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * The filter to search for the tecnologia_proyecto to update in case it exists.
     */
    where: tecnologia_proyectoWhereUniqueInput
    /**
     * In case the tecnologia_proyecto found by the `where` argument doesn't exist, create a new tecnologia_proyecto with this data.
     */
    create: XOR<tecnologia_proyectoCreateInput, tecnologia_proyectoUncheckedCreateInput>
    /**
     * In case the tecnologia_proyecto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tecnologia_proyectoUpdateInput, tecnologia_proyectoUncheckedUpdateInput>
  }

  /**
   * tecnologia_proyecto delete
   */
  export type tecnologia_proyectoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
    /**
     * Filter which tecnologia_proyecto to delete.
     */
    where: tecnologia_proyectoWhereUniqueInput
  }

  /**
   * tecnologia_proyecto deleteMany
   */
  export type tecnologia_proyectoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tecnologia_proyectos to delete
     */
    where?: tecnologia_proyectoWhereInput
    /**
     * Limit how many tecnologia_proyectos to delete.
     */
    limit?: number
  }

  /**
   * tecnologia_proyecto without action
   */
  export type tecnologia_proyectoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tecnologia_proyecto
     */
    select?: tecnologia_proyectoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tecnologia_proyecto
     */
    omit?: tecnologia_proyectoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tecnologia_proyectoInclude<ExtArgs> | null
  }


  /**
   * Model recurso
   */

  export type AggregateRecurso = {
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  export type RecursoAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    cantidad: number | null
    proyecto_id: number | null
  }

  export type RecursoSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    cantidad: number | null
    proyecto_id: number | null
  }

  export type RecursoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    valor: Decimal | null
    cantidad: number | null
    proyecto_id: number | null
  }

  export type RecursoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    valor: Decimal | null
    cantidad: number | null
    proyecto_id: number | null
  }

  export type RecursoCountAggregateOutputType = {
    id: number
    nombre: number
    valor: number
    cantidad: number
    proyecto_id: number
    _all: number
  }


  export type RecursoAvgAggregateInputType = {
    id?: true
    valor?: true
    cantidad?: true
    proyecto_id?: true
  }

  export type RecursoSumAggregateInputType = {
    id?: true
    valor?: true
    cantidad?: true
    proyecto_id?: true
  }

  export type RecursoMinAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    cantidad?: true
    proyecto_id?: true
  }

  export type RecursoMaxAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    cantidad?: true
    proyecto_id?: true
  }

  export type RecursoCountAggregateInputType = {
    id?: true
    nombre?: true
    valor?: true
    cantidad?: true
    proyecto_id?: true
    _all?: true
  }

  export type RecursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurso to aggregate.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recursos
    **/
    _count?: true | RecursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecursoMaxAggregateInputType
  }

  export type GetRecursoAggregateType<T extends RecursoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurso[P]>
      : GetScalarType<T[P], AggregateRecurso[P]>
  }




  export type recursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recursoWhereInput
    orderBy?: recursoOrderByWithAggregationInput | recursoOrderByWithAggregationInput[]
    by: RecursoScalarFieldEnum[] | RecursoScalarFieldEnum
    having?: recursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecursoCountAggregateInputType | true
    _avg?: RecursoAvgAggregateInputType
    _sum?: RecursoSumAggregateInputType
    _min?: RecursoMinAggregateInputType
    _max?: RecursoMaxAggregateInputType
  }

  export type RecursoGroupByOutputType = {
    id: number
    nombre: string
    valor: Decimal
    cantidad: number
    proyecto_id: number
    _count: RecursoCountAggregateOutputType | null
    _avg: RecursoAvgAggregateOutputType | null
    _sum: RecursoSumAggregateOutputType | null
    _min: RecursoMinAggregateOutputType | null
    _max: RecursoMaxAggregateOutputType | null
  }

  type GetRecursoGroupByPayload<T extends recursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecursoGroupByOutputType[P]>
            : GetScalarType<T[P], RecursoGroupByOutputType[P]>
        }
      >
    >


  export type recursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    cantidad?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type recursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    cantidad?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type recursoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valor?: boolean
    cantidad?: boolean
    proyecto_id?: boolean
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurso"]>

  export type recursoSelectScalar = {
    id?: boolean
    nombre?: boolean
    valor?: boolean
    cantidad?: boolean
    proyecto_id?: boolean
  }

  export type recursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "valor" | "cantidad" | "proyecto_id", ExtArgs["result"]["recurso"]>
  export type recursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type recursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }
  export type recursoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proyecto?: boolean | proyectoDefaultArgs<ExtArgs>
  }

  export type $recursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recurso"
    objects: {
      proyecto: Prisma.$proyectoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      valor: Prisma.Decimal
      cantidad: number
      proyecto_id: number
    }, ExtArgs["result"]["recurso"]>
    composites: {}
  }

  type recursoGetPayload<S extends boolean | null | undefined | recursoDefaultArgs> = $Result.GetResult<Prisma.$recursoPayload, S>

  type recursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecursoCountAggregateInputType | true
    }

  export interface recursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recurso'], meta: { name: 'recurso' } }
    /**
     * Find zero or one Recurso that matches the filter.
     * @param {recursoFindUniqueArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recursoFindUniqueArgs>(args: SelectSubset<T, recursoFindUniqueArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recurso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recursoFindUniqueOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recursoFindUniqueOrThrowArgs>(args: SelectSubset<T, recursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindFirstArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recursoFindFirstArgs>(args?: SelectSubset<T, recursoFindFirstArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindFirstOrThrowArgs} args - Arguments to find a Recurso
     * @example
     * // Get one Recurso
     * const recurso = await prisma.recurso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recursoFindFirstOrThrowArgs>(args?: SelectSubset<T, recursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recursos
     * const recursos = await prisma.recurso.findMany()
     * 
     * // Get first 10 Recursos
     * const recursos = await prisma.recurso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recursoWithIdOnly = await prisma.recurso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recursoFindManyArgs>(args?: SelectSubset<T, recursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recurso.
     * @param {recursoCreateArgs} args - Arguments to create a Recurso.
     * @example
     * // Create one Recurso
     * const Recurso = await prisma.recurso.create({
     *   data: {
     *     // ... data to create a Recurso
     *   }
     * })
     * 
     */
    create<T extends recursoCreateArgs>(args: SelectSubset<T, recursoCreateArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recursos.
     * @param {recursoCreateManyArgs} args - Arguments to create many Recursos.
     * @example
     * // Create many Recursos
     * const recurso = await prisma.recurso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recursoCreateManyArgs>(args?: SelectSubset<T, recursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recursos and returns the data saved in the database.
     * @param {recursoCreateManyAndReturnArgs} args - Arguments to create many Recursos.
     * @example
     * // Create many Recursos
     * const recurso = await prisma.recurso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recursos and only return the `id`
     * const recursoWithIdOnly = await prisma.recurso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recursoCreateManyAndReturnArgs>(args?: SelectSubset<T, recursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recurso.
     * @param {recursoDeleteArgs} args - Arguments to delete one Recurso.
     * @example
     * // Delete one Recurso
     * const Recurso = await prisma.recurso.delete({
     *   where: {
     *     // ... filter to delete one Recurso
     *   }
     * })
     * 
     */
    delete<T extends recursoDeleteArgs>(args: SelectSubset<T, recursoDeleteArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recurso.
     * @param {recursoUpdateArgs} args - Arguments to update one Recurso.
     * @example
     * // Update one Recurso
     * const recurso = await prisma.recurso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recursoUpdateArgs>(args: SelectSubset<T, recursoUpdateArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recursos.
     * @param {recursoDeleteManyArgs} args - Arguments to filter Recursos to delete.
     * @example
     * // Delete a few Recursos
     * const { count } = await prisma.recurso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recursoDeleteManyArgs>(args?: SelectSubset<T, recursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recursos
     * const recurso = await prisma.recurso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recursoUpdateManyArgs>(args: SelectSubset<T, recursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recursos and returns the data updated in the database.
     * @param {recursoUpdateManyAndReturnArgs} args - Arguments to update many Recursos.
     * @example
     * // Update many Recursos
     * const recurso = await prisma.recurso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recursos and only return the `id`
     * const recursoWithIdOnly = await prisma.recurso.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends recursoUpdateManyAndReturnArgs>(args: SelectSubset<T, recursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recurso.
     * @param {recursoUpsertArgs} args - Arguments to update or create a Recurso.
     * @example
     * // Update or create a Recurso
     * const recurso = await prisma.recurso.upsert({
     *   create: {
     *     // ... data to create a Recurso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurso we want to update
     *   }
     * })
     */
    upsert<T extends recursoUpsertArgs>(args: SelectSubset<T, recursoUpsertArgs<ExtArgs>>): Prisma__recursoClient<$Result.GetResult<Prisma.$recursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoCountArgs} args - Arguments to filter Recursos to count.
     * @example
     * // Count the number of Recursos
     * const count = await prisma.recurso.count({
     *   where: {
     *     // ... the filter for the Recursos we want to count
     *   }
     * })
    **/
    count<T extends recursoCountArgs>(
      args?: Subset<T, recursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecursoAggregateArgs>(args: Subset<T, RecursoAggregateArgs>): Prisma.PrismaPromise<GetRecursoAggregateType<T>>

    /**
     * Group by Recurso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recursoGroupByArgs} args - Group by arguments.
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
      T extends recursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recursoGroupByArgs['orderBy'] }
        : { orderBy?: recursoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recurso model
   */
  readonly fields: recursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recurso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proyecto<T extends proyectoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, proyectoDefaultArgs<ExtArgs>>): Prisma__proyectoClient<$Result.GetResult<Prisma.$proyectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the recurso model
   */
  interface recursoFieldRefs {
    readonly id: FieldRef<"recurso", 'Int'>
    readonly nombre: FieldRef<"recurso", 'String'>
    readonly valor: FieldRef<"recurso", 'Decimal'>
    readonly cantidad: FieldRef<"recurso", 'Int'>
    readonly proyecto_id: FieldRef<"recurso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recurso findUnique
   */
  export type recursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso findUniqueOrThrow
   */
  export type recursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso findFirst
   */
  export type recursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso findFirstOrThrow
   */
  export type recursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recurso to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recursos.
     */
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso findMany
   */
  export type recursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter, which recursos to fetch.
     */
    where?: recursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recursos to fetch.
     */
    orderBy?: recursoOrderByWithRelationInput | recursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recursos.
     */
    cursor?: recursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recursos.
     */
    skip?: number
    distinct?: RecursoScalarFieldEnum | RecursoScalarFieldEnum[]
  }

  /**
   * recurso create
   */
  export type recursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The data needed to create a recurso.
     */
    data: XOR<recursoCreateInput, recursoUncheckedCreateInput>
  }

  /**
   * recurso createMany
   */
  export type recursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recursos.
     */
    data: recursoCreateManyInput | recursoCreateManyInput[]
  }

  /**
   * recurso createManyAndReturn
   */
  export type recursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * The data used to create many recursos.
     */
    data: recursoCreateManyInput | recursoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurso update
   */
  export type recursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The data needed to update a recurso.
     */
    data: XOR<recursoUpdateInput, recursoUncheckedUpdateInput>
    /**
     * Choose, which recurso to update.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso updateMany
   */
  export type recursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recursos.
     */
    data: XOR<recursoUpdateManyMutationInput, recursoUncheckedUpdateManyInput>
    /**
     * Filter which recursos to update
     */
    where?: recursoWhereInput
    /**
     * Limit how many recursos to update.
     */
    limit?: number
  }

  /**
   * recurso updateManyAndReturn
   */
  export type recursoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * The data used to update recursos.
     */
    data: XOR<recursoUpdateManyMutationInput, recursoUncheckedUpdateManyInput>
    /**
     * Filter which recursos to update
     */
    where?: recursoWhereInput
    /**
     * Limit how many recursos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurso upsert
   */
  export type recursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * The filter to search for the recurso to update in case it exists.
     */
    where: recursoWhereUniqueInput
    /**
     * In case the recurso found by the `where` argument doesn't exist, create a new recurso with this data.
     */
    create: XOR<recursoCreateInput, recursoUncheckedCreateInput>
    /**
     * In case the recurso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recursoUpdateInput, recursoUncheckedUpdateInput>
  }

  /**
   * recurso delete
   */
  export type recursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
    /**
     * Filter which recurso to delete.
     */
    where: recursoWhereUniqueInput
  }

  /**
   * recurso deleteMany
   */
  export type recursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recursos to delete
     */
    where?: recursoWhereInput
    /**
     * Limit how many recursos to delete.
     */
    limit?: number
  }

  /**
   * recurso without action
   */
  export type recursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurso
     */
    select?: recursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurso
     */
    omit?: recursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recursoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tipo_usuarioScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo'
  };

  export type Tipo_usuarioScalarFieldEnum = (typeof Tipo_usuarioScalarFieldEnum)[keyof typeof Tipo_usuarioScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    tipo_id: 'tipo_id',
    token: 'token',
    estado_id: 'estado_id'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_creacion_proyectoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    proyecto_id: 'proyecto_id'
  };

  export type Usuario_creacion_proyectoScalarFieldEnum = (typeof Usuario_creacion_proyectoScalarFieldEnum)[keyof typeof Usuario_creacion_proyectoScalarFieldEnum]


  export const Usuario_inversion_proyectoScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    proyecto_id: 'proyecto_id',
    cantidad: 'cantidad'
  };

  export type Usuario_inversion_proyectoScalarFieldEnum = (typeof Usuario_inversion_proyectoScalarFieldEnum)[keyof typeof Usuario_inversion_proyectoScalarFieldEnum]


  export const ProyectoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo_energia: 'tipo_energia',
    descripcion: 'descripcion'
  };

  export type ProyectoScalarFieldEnum = (typeof ProyectoScalarFieldEnum)[keyof typeof ProyectoScalarFieldEnum]


  export const PasoScalarFieldEnum: {
    id: 'id',
    paso: 'paso',
    proyecto_id: 'proyecto_id'
  };

  export type PasoScalarFieldEnum = (typeof PasoScalarFieldEnum)[keyof typeof PasoScalarFieldEnum]


  export const TecnologiaScalarFieldEnum: {
    id: 'id',
    tecnologia: 'tecnologia',
    tipo: 'tipo'
  };

  export type TecnologiaScalarFieldEnum = (typeof TecnologiaScalarFieldEnum)[keyof typeof TecnologiaScalarFieldEnum]


  export const Tecnologia_proyectoScalarFieldEnum: {
    id: 'id',
    proyecto_id: 'proyecto_id',
    tecnologia_id: 'tecnologia_id'
  };

  export type Tecnologia_proyectoScalarFieldEnum = (typeof Tecnologia_proyectoScalarFieldEnum)[keyof typeof Tecnologia_proyectoScalarFieldEnum]


  export const RecursoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    valor: 'valor',
    cantidad: 'cantidad',
    proyecto_id: 'proyecto_id'
  };

  export type RecursoScalarFieldEnum = (typeof RecursoScalarFieldEnum)[keyof typeof RecursoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tipo_usuarioWhereInput = {
    AND?: tipo_usuarioWhereInput | tipo_usuarioWhereInput[]
    OR?: tipo_usuarioWhereInput[]
    NOT?: tipo_usuarioWhereInput | tipo_usuarioWhereInput[]
    id?: IntFilter<"tipo_usuario"> | number
    tipo?: StringFilter<"tipo_usuario"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type tipo_usuarioOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    usuarios?: usuarioOrderByRelationAggregateInput
  }

  export type tipo_usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tipo_usuarioWhereInput | tipo_usuarioWhereInput[]
    OR?: tipo_usuarioWhereInput[]
    NOT?: tipo_usuarioWhereInput | tipo_usuarioWhereInput[]
    tipo?: StringFilter<"tipo_usuario"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type tipo_usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    _count?: tipo_usuarioCountOrderByAggregateInput
    _avg?: tipo_usuarioAvgOrderByAggregateInput
    _max?: tipo_usuarioMaxOrderByAggregateInput
    _min?: tipo_usuarioMinOrderByAggregateInput
    _sum?: tipo_usuarioSumOrderByAggregateInput
  }

  export type tipo_usuarioScalarWhereWithAggregatesInput = {
    AND?: tipo_usuarioScalarWhereWithAggregatesInput | tipo_usuarioScalarWhereWithAggregatesInput[]
    OR?: tipo_usuarioScalarWhereWithAggregatesInput[]
    NOT?: tipo_usuarioScalarWhereWithAggregatesInput | tipo_usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipo_usuario"> | number
    tipo?: StringWithAggregatesFilter<"tipo_usuario"> | string
  }

  export type estadoWhereInput = {
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    id?: IntFilter<"estado"> | number
    nombre?: StringFilter<"estado"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type estadoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: usuarioOrderByRelationAggregateInput
  }

  export type estadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estadoWhereInput | estadoWhereInput[]
    OR?: estadoWhereInput[]
    NOT?: estadoWhereInput | estadoWhereInput[]
    nombre?: StringFilter<"estado"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type estadoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: estadoCountOrderByAggregateInput
    _avg?: estadoAvgOrderByAggregateInput
    _max?: estadoMaxOrderByAggregateInput
    _min?: estadoMinOrderByAggregateInput
    _sum?: estadoSumOrderByAggregateInput
  }

  export type estadoScalarWhereWithAggregatesInput = {
    AND?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    OR?: estadoScalarWhereWithAggregatesInput[]
    NOT?: estadoScalarWhereWithAggregatesInput | estadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estado"> | number
    nombre?: StringWithAggregatesFilter<"estado"> | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    username?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    tipo_id?: IntFilter<"usuario"> | number
    token?: StringFilter<"usuario"> | string
    estado_id?: IntFilter<"usuario"> | number
    tipo?: XOR<Tipo_usuarioScalarRelationFilter, tipo_usuarioWhereInput>
    proyectos_creados?: Usuario_creacion_proyectoListRelationFilter
    proyectos_invertidos?: Usuario_inversion_proyectoListRelationFilter
    estado?: XOR<EstadoScalarRelationFilter, estadoWhereInput>
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    tipo_id?: SortOrder
    token?: SortOrder
    estado_id?: SortOrder
    tipo?: tipo_usuarioOrderByWithRelationInput
    proyectos_creados?: usuario_creacion_proyectoOrderByRelationAggregateInput
    proyectos_invertidos?: usuario_inversion_proyectoOrderByRelationAggregateInput
    estado?: estadoOrderByWithRelationInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    username?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    tipo_id?: IntFilter<"usuario"> | number
    token?: StringFilter<"usuario"> | string
    estado_id?: IntFilter<"usuario"> | number
    tipo?: XOR<Tipo_usuarioScalarRelationFilter, tipo_usuarioWhereInput>
    proyectos_creados?: Usuario_creacion_proyectoListRelationFilter
    proyectos_invertidos?: Usuario_inversion_proyectoListRelationFilter
    estado?: XOR<EstadoScalarRelationFilter, estadoWhereInput>
  }, "id">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    tipo_id?: SortOrder
    token?: SortOrder
    estado_id?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    username?: StringWithAggregatesFilter<"usuario"> | string
    password?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    tipo_id?: IntWithAggregatesFilter<"usuario"> | number
    token?: StringWithAggregatesFilter<"usuario"> | string
    estado_id?: IntWithAggregatesFilter<"usuario"> | number
  }

  export type usuario_creacion_proyectoWhereInput = {
    AND?: usuario_creacion_proyectoWhereInput | usuario_creacion_proyectoWhereInput[]
    OR?: usuario_creacion_proyectoWhereInput[]
    NOT?: usuario_creacion_proyectoWhereInput | usuario_creacion_proyectoWhereInput[]
    id?: IntFilter<"usuario_creacion_proyecto"> | number
    usuario_id?: IntFilter<"usuario_creacion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_creacion_proyecto"> | number
    usuario_creador?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    proyecto_creado?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type usuario_creacion_proyectoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    usuario_creador?: usuarioOrderByWithRelationInput
    proyecto_creado?: proyectoOrderByWithRelationInput
  }

  export type usuario_creacion_proyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuario_creacion_proyectoWhereInput | usuario_creacion_proyectoWhereInput[]
    OR?: usuario_creacion_proyectoWhereInput[]
    NOT?: usuario_creacion_proyectoWhereInput | usuario_creacion_proyectoWhereInput[]
    usuario_id?: IntFilter<"usuario_creacion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_creacion_proyecto"> | number
    usuario_creador?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    proyecto_creado?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type usuario_creacion_proyectoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    _count?: usuario_creacion_proyectoCountOrderByAggregateInput
    _avg?: usuario_creacion_proyectoAvgOrderByAggregateInput
    _max?: usuario_creacion_proyectoMaxOrderByAggregateInput
    _min?: usuario_creacion_proyectoMinOrderByAggregateInput
    _sum?: usuario_creacion_proyectoSumOrderByAggregateInput
  }

  export type usuario_creacion_proyectoScalarWhereWithAggregatesInput = {
    AND?: usuario_creacion_proyectoScalarWhereWithAggregatesInput | usuario_creacion_proyectoScalarWhereWithAggregatesInput[]
    OR?: usuario_creacion_proyectoScalarWhereWithAggregatesInput[]
    NOT?: usuario_creacion_proyectoScalarWhereWithAggregatesInput | usuario_creacion_proyectoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario_creacion_proyecto"> | number
    usuario_id?: IntWithAggregatesFilter<"usuario_creacion_proyecto"> | number
    proyecto_id?: IntWithAggregatesFilter<"usuario_creacion_proyecto"> | number
  }

  export type usuario_inversion_proyectoWhereInput = {
    AND?: usuario_inversion_proyectoWhereInput | usuario_inversion_proyectoWhereInput[]
    OR?: usuario_inversion_proyectoWhereInput[]
    NOT?: usuario_inversion_proyectoWhereInput | usuario_inversion_proyectoWhereInput[]
    id?: IntFilter<"usuario_inversion_proyecto"> | number
    usuario_id?: IntFilter<"usuario_inversion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_inversion_proyecto"> | number
    cantidad?: DecimalFilter<"usuario_inversion_proyecto"> | Decimal | DecimalJsLike | number | string
    usuario_inversor?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    proyecto_invertido?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type usuario_inversion_proyectoOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
    usuario_inversor?: usuarioOrderByWithRelationInput
    proyecto_invertido?: proyectoOrderByWithRelationInput
  }

  export type usuario_inversion_proyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuario_inversion_proyectoWhereInput | usuario_inversion_proyectoWhereInput[]
    OR?: usuario_inversion_proyectoWhereInput[]
    NOT?: usuario_inversion_proyectoWhereInput | usuario_inversion_proyectoWhereInput[]
    usuario_id?: IntFilter<"usuario_inversion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_inversion_proyecto"> | number
    cantidad?: DecimalFilter<"usuario_inversion_proyecto"> | Decimal | DecimalJsLike | number | string
    usuario_inversor?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    proyecto_invertido?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type usuario_inversion_proyectoOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
    _count?: usuario_inversion_proyectoCountOrderByAggregateInput
    _avg?: usuario_inversion_proyectoAvgOrderByAggregateInput
    _max?: usuario_inversion_proyectoMaxOrderByAggregateInput
    _min?: usuario_inversion_proyectoMinOrderByAggregateInput
    _sum?: usuario_inversion_proyectoSumOrderByAggregateInput
  }

  export type usuario_inversion_proyectoScalarWhereWithAggregatesInput = {
    AND?: usuario_inversion_proyectoScalarWhereWithAggregatesInput | usuario_inversion_proyectoScalarWhereWithAggregatesInput[]
    OR?: usuario_inversion_proyectoScalarWhereWithAggregatesInput[]
    NOT?: usuario_inversion_proyectoScalarWhereWithAggregatesInput | usuario_inversion_proyectoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario_inversion_proyecto"> | number
    usuario_id?: IntWithAggregatesFilter<"usuario_inversion_proyecto"> | number
    proyecto_id?: IntWithAggregatesFilter<"usuario_inversion_proyecto"> | number
    cantidad?: DecimalWithAggregatesFilter<"usuario_inversion_proyecto"> | Decimal | DecimalJsLike | number | string
  }

  export type proyectoWhereInput = {
    AND?: proyectoWhereInput | proyectoWhereInput[]
    OR?: proyectoWhereInput[]
    NOT?: proyectoWhereInput | proyectoWhereInput[]
    id?: IntFilter<"proyecto"> | number
    nombre?: StringFilter<"proyecto"> | string
    tipo_energia?: StringFilter<"proyecto"> | string
    descripcion?: StringFilter<"proyecto"> | string
    pasos?: PasoListRelationFilter
    tecnologias?: Tecnologia_proyectoListRelationFilter
    recursos?: RecursoListRelationFilter
    proyectos_usuario?: Usuario_creacion_proyectoListRelationFilter
    proyectos_inversion?: Usuario_inversion_proyectoListRelationFilter
  }

  export type proyectoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_energia?: SortOrder
    descripcion?: SortOrder
    pasos?: pasoOrderByRelationAggregateInput
    tecnologias?: tecnologia_proyectoOrderByRelationAggregateInput
    recursos?: recursoOrderByRelationAggregateInput
    proyectos_usuario?: usuario_creacion_proyectoOrderByRelationAggregateInput
    proyectos_inversion?: usuario_inversion_proyectoOrderByRelationAggregateInput
  }

  export type proyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: proyectoWhereInput | proyectoWhereInput[]
    OR?: proyectoWhereInput[]
    NOT?: proyectoWhereInput | proyectoWhereInput[]
    nombre?: StringFilter<"proyecto"> | string
    tipo_energia?: StringFilter<"proyecto"> | string
    descripcion?: StringFilter<"proyecto"> | string
    pasos?: PasoListRelationFilter
    tecnologias?: Tecnologia_proyectoListRelationFilter
    recursos?: RecursoListRelationFilter
    proyectos_usuario?: Usuario_creacion_proyectoListRelationFilter
    proyectos_inversion?: Usuario_inversion_proyectoListRelationFilter
  }, "id">

  export type proyectoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_energia?: SortOrder
    descripcion?: SortOrder
    _count?: proyectoCountOrderByAggregateInput
    _avg?: proyectoAvgOrderByAggregateInput
    _max?: proyectoMaxOrderByAggregateInput
    _min?: proyectoMinOrderByAggregateInput
    _sum?: proyectoSumOrderByAggregateInput
  }

  export type proyectoScalarWhereWithAggregatesInput = {
    AND?: proyectoScalarWhereWithAggregatesInput | proyectoScalarWhereWithAggregatesInput[]
    OR?: proyectoScalarWhereWithAggregatesInput[]
    NOT?: proyectoScalarWhereWithAggregatesInput | proyectoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"proyecto"> | number
    nombre?: StringWithAggregatesFilter<"proyecto"> | string
    tipo_energia?: StringWithAggregatesFilter<"proyecto"> | string
    descripcion?: StringWithAggregatesFilter<"proyecto"> | string
  }

  export type pasoWhereInput = {
    AND?: pasoWhereInput | pasoWhereInput[]
    OR?: pasoWhereInput[]
    NOT?: pasoWhereInput | pasoWhereInput[]
    id?: IntFilter<"paso"> | number
    paso?: StringFilter<"paso"> | string
    proyecto_id?: IntFilter<"paso"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type pasoOrderByWithRelationInput = {
    id?: SortOrder
    paso?: SortOrder
    proyecto_id?: SortOrder
    proyecto?: proyectoOrderByWithRelationInput
  }

  export type pasoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pasoWhereInput | pasoWhereInput[]
    OR?: pasoWhereInput[]
    NOT?: pasoWhereInput | pasoWhereInput[]
    paso?: StringFilter<"paso"> | string
    proyecto_id?: IntFilter<"paso"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type pasoOrderByWithAggregationInput = {
    id?: SortOrder
    paso?: SortOrder
    proyecto_id?: SortOrder
    _count?: pasoCountOrderByAggregateInput
    _avg?: pasoAvgOrderByAggregateInput
    _max?: pasoMaxOrderByAggregateInput
    _min?: pasoMinOrderByAggregateInput
    _sum?: pasoSumOrderByAggregateInput
  }

  export type pasoScalarWhereWithAggregatesInput = {
    AND?: pasoScalarWhereWithAggregatesInput | pasoScalarWhereWithAggregatesInput[]
    OR?: pasoScalarWhereWithAggregatesInput[]
    NOT?: pasoScalarWhereWithAggregatesInput | pasoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paso"> | number
    paso?: StringWithAggregatesFilter<"paso"> | string
    proyecto_id?: IntWithAggregatesFilter<"paso"> | number
  }

  export type tecnologiaWhereInput = {
    AND?: tecnologiaWhereInput | tecnologiaWhereInput[]
    OR?: tecnologiaWhereInput[]
    NOT?: tecnologiaWhereInput | tecnologiaWhereInput[]
    id?: IntFilter<"tecnologia"> | number
    tecnologia?: StringFilter<"tecnologia"> | string
    tipo?: BoolFilter<"tecnologia"> | boolean
    proyectos?: Tecnologia_proyectoListRelationFilter
  }

  export type tecnologiaOrderByWithRelationInput = {
    id?: SortOrder
    tecnologia?: SortOrder
    tipo?: SortOrder
    proyectos?: tecnologia_proyectoOrderByRelationAggregateInput
  }

  export type tecnologiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tecnologiaWhereInput | tecnologiaWhereInput[]
    OR?: tecnologiaWhereInput[]
    NOT?: tecnologiaWhereInput | tecnologiaWhereInput[]
    tecnologia?: StringFilter<"tecnologia"> | string
    tipo?: BoolFilter<"tecnologia"> | boolean
    proyectos?: Tecnologia_proyectoListRelationFilter
  }, "id">

  export type tecnologiaOrderByWithAggregationInput = {
    id?: SortOrder
    tecnologia?: SortOrder
    tipo?: SortOrder
    _count?: tecnologiaCountOrderByAggregateInput
    _avg?: tecnologiaAvgOrderByAggregateInput
    _max?: tecnologiaMaxOrderByAggregateInput
    _min?: tecnologiaMinOrderByAggregateInput
    _sum?: tecnologiaSumOrderByAggregateInput
  }

  export type tecnologiaScalarWhereWithAggregatesInput = {
    AND?: tecnologiaScalarWhereWithAggregatesInput | tecnologiaScalarWhereWithAggregatesInput[]
    OR?: tecnologiaScalarWhereWithAggregatesInput[]
    NOT?: tecnologiaScalarWhereWithAggregatesInput | tecnologiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tecnologia"> | number
    tecnologia?: StringWithAggregatesFilter<"tecnologia"> | string
    tipo?: BoolWithAggregatesFilter<"tecnologia"> | boolean
  }

  export type tecnologia_proyectoWhereInput = {
    AND?: tecnologia_proyectoWhereInput | tecnologia_proyectoWhereInput[]
    OR?: tecnologia_proyectoWhereInput[]
    NOT?: tecnologia_proyectoWhereInput | tecnologia_proyectoWhereInput[]
    id?: IntFilter<"tecnologia_proyecto"> | number
    proyecto_id?: IntFilter<"tecnologia_proyecto"> | number
    tecnologia_id?: IntFilter<"tecnologia_proyecto"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    tecnologia?: XOR<TecnologiaScalarRelationFilter, tecnologiaWhereInput>
  }

  export type tecnologia_proyectoOrderByWithRelationInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
    proyecto?: proyectoOrderByWithRelationInput
    tecnologia?: tecnologiaOrderByWithRelationInput
  }

  export type tecnologia_proyectoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tecnologia_proyectoWhereInput | tecnologia_proyectoWhereInput[]
    OR?: tecnologia_proyectoWhereInput[]
    NOT?: tecnologia_proyectoWhereInput | tecnologia_proyectoWhereInput[]
    proyecto_id?: IntFilter<"tecnologia_proyecto"> | number
    tecnologia_id?: IntFilter<"tecnologia_proyecto"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
    tecnologia?: XOR<TecnologiaScalarRelationFilter, tecnologiaWhereInput>
  }, "id">

  export type tecnologia_proyectoOrderByWithAggregationInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
    _count?: tecnologia_proyectoCountOrderByAggregateInput
    _avg?: tecnologia_proyectoAvgOrderByAggregateInput
    _max?: tecnologia_proyectoMaxOrderByAggregateInput
    _min?: tecnologia_proyectoMinOrderByAggregateInput
    _sum?: tecnologia_proyectoSumOrderByAggregateInput
  }

  export type tecnologia_proyectoScalarWhereWithAggregatesInput = {
    AND?: tecnologia_proyectoScalarWhereWithAggregatesInput | tecnologia_proyectoScalarWhereWithAggregatesInput[]
    OR?: tecnologia_proyectoScalarWhereWithAggregatesInput[]
    NOT?: tecnologia_proyectoScalarWhereWithAggregatesInput | tecnologia_proyectoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tecnologia_proyecto"> | number
    proyecto_id?: IntWithAggregatesFilter<"tecnologia_proyecto"> | number
    tecnologia_id?: IntWithAggregatesFilter<"tecnologia_proyecto"> | number
  }

  export type recursoWhereInput = {
    AND?: recursoWhereInput | recursoWhereInput[]
    OR?: recursoWhereInput[]
    NOT?: recursoWhereInput | recursoWhereInput[]
    id?: IntFilter<"recurso"> | number
    nombre?: StringFilter<"recurso"> | string
    valor?: DecimalFilter<"recurso"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"recurso"> | number
    proyecto_id?: IntFilter<"recurso"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }

  export type recursoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
    proyecto?: proyectoOrderByWithRelationInput
  }

  export type recursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: recursoWhereInput | recursoWhereInput[]
    OR?: recursoWhereInput[]
    NOT?: recursoWhereInput | recursoWhereInput[]
    nombre?: StringFilter<"recurso"> | string
    valor?: DecimalFilter<"recurso"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"recurso"> | number
    proyecto_id?: IntFilter<"recurso"> | number
    proyecto?: XOR<ProyectoScalarRelationFilter, proyectoWhereInput>
  }, "id">

  export type recursoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
    _count?: recursoCountOrderByAggregateInput
    _avg?: recursoAvgOrderByAggregateInput
    _max?: recursoMaxOrderByAggregateInput
    _min?: recursoMinOrderByAggregateInput
    _sum?: recursoSumOrderByAggregateInput
  }

  export type recursoScalarWhereWithAggregatesInput = {
    AND?: recursoScalarWhereWithAggregatesInput | recursoScalarWhereWithAggregatesInput[]
    OR?: recursoScalarWhereWithAggregatesInput[]
    NOT?: recursoScalarWhereWithAggregatesInput | recursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"recurso"> | number
    nombre?: StringWithAggregatesFilter<"recurso"> | string
    valor?: DecimalWithAggregatesFilter<"recurso"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntWithAggregatesFilter<"recurso"> | number
    proyecto_id?: IntWithAggregatesFilter<"recurso"> | number
  }

  export type tipo_usuarioCreateInput = {
    tipo: string
    usuarios?: usuarioCreateNestedManyWithoutTipoInput
  }

  export type tipo_usuarioUncheckedCreateInput = {
    id?: number
    tipo: string
    usuarios?: usuarioUncheckedCreateNestedManyWithoutTipoInput
  }

  export type tipo_usuarioUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUpdateManyWithoutTipoNestedInput
  }

  export type tipo_usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type tipo_usuarioCreateManyInput = {
    id?: number
    tipo: string
  }

  export type tipo_usuarioUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type estadoCreateInput = {
    nombre: string
    usuarios?: usuarioCreateNestedManyWithoutEstadoInput
  }

  export type estadoUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: usuarioUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type estadoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUpdateManyWithoutEstadoNestedInput
  }

  export type estadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type estadoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type estadoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type estadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateInput = {
    username: string
    password: string
    email: string
    token: string
    tipo: tipo_usuarioCreateNestedOneWithoutUsuariosInput
    proyectos_creados?: usuario_creacion_proyectoCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoCreateNestedManyWithoutUsuario_inversorInput
    estado?: estadoCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    estado_id?: number
    proyectos_creados?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutUsuario_inversorInput
  }

  export type usuarioUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: tipo_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    proyectos_creados?: usuario_creacion_proyectoUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUpdateManyWithoutUsuario_inversorNestedInput
    estado?: estadoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
    proyectos_creados?: usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    estado_id?: number
  }

  export type usuarioUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_creacion_proyectoCreateInput = {
    usuario_creador: usuarioCreateNestedOneWithoutProyectos_creadosInput
    proyecto_creado: proyectoCreateNestedOneWithoutProyectos_usuarioInput
  }

  export type usuario_creacion_proyectoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    proyecto_id: number
  }

  export type usuario_creacion_proyectoUpdateInput = {
    usuario_creador?: usuarioUpdateOneRequiredWithoutProyectos_creadosNestedInput
    proyecto_creado?: proyectoUpdateOneRequiredWithoutProyectos_usuarioNestedInput
  }

  export type usuario_creacion_proyectoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_creacion_proyectoCreateManyInput = {
    id?: number
    usuario_id: number
    proyecto_id: number
  }

  export type usuario_creacion_proyectoUpdateManyMutationInput = {

  }

  export type usuario_creacion_proyectoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_inversion_proyectoCreateInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    usuario_inversor: usuarioCreateNestedOneWithoutProyectos_invertidosInput
    proyecto_invertido: proyectoCreateNestedOneWithoutProyectos_inversionInput
  }

  export type usuario_inversion_proyectoUncheckedCreateInput = {
    id?: number
    usuario_id: number
    proyecto_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoUpdateInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario_inversor?: usuarioUpdateOneRequiredWithoutProyectos_invertidosNestedInput
    proyecto_invertido?: proyectoUpdateOneRequiredWithoutProyectos_inversionNestedInput
  }

  export type usuario_inversion_proyectoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoCreateManyInput = {
    id?: number
    usuario_id: number
    proyecto_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoUpdateManyMutationInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type proyectoCreateInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoCreateNestedManyWithoutProyectoInput
    recursos?: recursoCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoUncheckedCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput
    recursos?: recursoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUncheckedUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoCreateManyInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
  }

  export type proyectoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type proyectoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type pasoCreateInput = {
    paso: string
    proyecto: proyectoCreateNestedOneWithoutPasosInput
  }

  export type pasoUncheckedCreateInput = {
    id?: number
    paso: string
    proyecto_id: number
  }

  export type pasoUpdateInput = {
    paso?: StringFieldUpdateOperationsInput | string
    proyecto?: proyectoUpdateOneRequiredWithoutPasosNestedInput
  }

  export type pasoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paso?: StringFieldUpdateOperationsInput | string
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type pasoCreateManyInput = {
    id?: number
    paso: string
    proyecto_id: number
  }

  export type pasoUpdateManyMutationInput = {
    paso?: StringFieldUpdateOperationsInput | string
  }

  export type pasoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paso?: StringFieldUpdateOperationsInput | string
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type tecnologiaCreateInput = {
    tecnologia: string
    tipo: boolean
    proyectos?: tecnologia_proyectoCreateNestedManyWithoutTecnologiaInput
  }

  export type tecnologiaUncheckedCreateInput = {
    id?: number
    tecnologia: string
    tipo: boolean
    proyectos?: tecnologia_proyectoUncheckedCreateNestedManyWithoutTecnologiaInput
  }

  export type tecnologiaUpdateInput = {
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
    proyectos?: tecnologia_proyectoUpdateManyWithoutTecnologiaNestedInput
  }

  export type tecnologiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
    proyectos?: tecnologia_proyectoUncheckedUpdateManyWithoutTecnologiaNestedInput
  }

  export type tecnologiaCreateManyInput = {
    id?: number
    tecnologia: string
    tipo: boolean
  }

  export type tecnologiaUpdateManyMutationInput = {
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tecnologiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tecnologia_proyectoCreateInput = {
    proyecto: proyectoCreateNestedOneWithoutTecnologiasInput
    tecnologia: tecnologiaCreateNestedOneWithoutProyectosInput
  }

  export type tecnologia_proyectoUncheckedCreateInput = {
    id?: number
    proyecto_id: number
    tecnologia_id: number
  }

  export type tecnologia_proyectoUpdateInput = {
    proyecto?: proyectoUpdateOneRequiredWithoutTecnologiasNestedInput
    tecnologia?: tecnologiaUpdateOneRequiredWithoutProyectosNestedInput
  }

  export type tecnologia_proyectoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    tecnologia_id?: IntFieldUpdateOperationsInput | number
  }

  export type tecnologia_proyectoCreateManyInput = {
    id?: number
    proyecto_id: number
    tecnologia_id: number
  }

  export type tecnologia_proyectoUpdateManyMutationInput = {

  }

  export type tecnologia_proyectoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    tecnologia_id?: IntFieldUpdateOperationsInput | number
  }

  export type recursoCreateInput = {
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
    proyecto: proyectoCreateNestedOneWithoutRecursosInput
  }

  export type recursoUncheckedCreateInput = {
    id?: number
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
    proyecto_id: number
  }

  export type recursoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    proyecto?: proyectoUpdateOneRequiredWithoutRecursosNestedInput
  }

  export type recursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type recursoCreateManyInput = {
    id?: number
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
    proyecto_id: number
  }

  export type recursoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type recursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipo_usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipo_usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tipo_usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipo_usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
  }

  export type tipo_usuarioSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type estadoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type estadoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type estadoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type estadoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type estadoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Tipo_usuarioScalarRelationFilter = {
    is?: tipo_usuarioWhereInput
    isNot?: tipo_usuarioWhereInput
  }

  export type Usuario_creacion_proyectoListRelationFilter = {
    every?: usuario_creacion_proyectoWhereInput
    some?: usuario_creacion_proyectoWhereInput
    none?: usuario_creacion_proyectoWhereInput
  }

  export type Usuario_inversion_proyectoListRelationFilter = {
    every?: usuario_inversion_proyectoWhereInput
    some?: usuario_inversion_proyectoWhereInput
    none?: usuario_inversion_proyectoWhereInput
  }

  export type EstadoScalarRelationFilter = {
    is?: estadoWhereInput
    isNot?: estadoWhereInput
  }

  export type usuario_creacion_proyectoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuario_inversion_proyectoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    tipo_id?: SortOrder
    token?: SortOrder
    estado_id?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    estado_id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    tipo_id?: SortOrder
    token?: SortOrder
    estado_id?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    tipo_id?: SortOrder
    token?: SortOrder
    estado_id?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    tipo_id?: SortOrder
    estado_id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type ProyectoScalarRelationFilter = {
    is?: proyectoWhereInput
    isNot?: proyectoWhereInput
  }

  export type usuario_creacion_proyectoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type usuario_creacion_proyectoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type usuario_creacion_proyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type usuario_creacion_proyectoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type usuario_creacion_proyectoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type usuario_inversion_proyectoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type usuario_inversion_proyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type usuario_inversion_proyectoMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type usuario_inversion_proyectoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    proyecto_id?: SortOrder
    cantidad?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type PasoListRelationFilter = {
    every?: pasoWhereInput
    some?: pasoWhereInput
    none?: pasoWhereInput
  }

  export type Tecnologia_proyectoListRelationFilter = {
    every?: tecnologia_proyectoWhereInput
    some?: tecnologia_proyectoWhereInput
    none?: tecnologia_proyectoWhereInput
  }

  export type RecursoListRelationFilter = {
    every?: recursoWhereInput
    some?: recursoWhereInput
    none?: recursoWhereInput
  }

  export type pasoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tecnologia_proyectoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type proyectoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_energia?: SortOrder
    descripcion?: SortOrder
  }

  export type proyectoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type proyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_energia?: SortOrder
    descripcion?: SortOrder
  }

  export type proyectoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo_energia?: SortOrder
    descripcion?: SortOrder
  }

  export type proyectoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pasoCountOrderByAggregateInput = {
    id?: SortOrder
    paso?: SortOrder
    proyecto_id?: SortOrder
  }

  export type pasoAvgOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type pasoMaxOrderByAggregateInput = {
    id?: SortOrder
    paso?: SortOrder
    proyecto_id?: SortOrder
  }

  export type pasoMinOrderByAggregateInput = {
    id?: SortOrder
    paso?: SortOrder
    proyecto_id?: SortOrder
  }

  export type pasoSumOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type tecnologiaCountOrderByAggregateInput = {
    id?: SortOrder
    tecnologia?: SortOrder
    tipo?: SortOrder
  }

  export type tecnologiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tecnologiaMaxOrderByAggregateInput = {
    id?: SortOrder
    tecnologia?: SortOrder
    tipo?: SortOrder
  }

  export type tecnologiaMinOrderByAggregateInput = {
    id?: SortOrder
    tecnologia?: SortOrder
    tipo?: SortOrder
  }

  export type tecnologiaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TecnologiaScalarRelationFilter = {
    is?: tecnologiaWhereInput
    isNot?: tecnologiaWhereInput
  }

  export type tecnologia_proyectoCountOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
  }

  export type tecnologia_proyectoAvgOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
  }

  export type tecnologia_proyectoMaxOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
  }

  export type tecnologia_proyectoMinOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
  }

  export type tecnologia_proyectoSumOrderByAggregateInput = {
    id?: SortOrder
    proyecto_id?: SortOrder
    tecnologia_id?: SortOrder
  }

  export type recursoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
  }

  export type recursoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
  }

  export type recursoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
  }

  export type recursoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
  }

  export type recursoSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    cantidad?: SortOrder
    proyecto_id?: SortOrder
  }

  export type usuarioCreateNestedManyWithoutTipoInput = {
    create?: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput> | usuarioCreateWithoutTipoInput[] | usuarioUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutTipoInput | usuarioCreateOrConnectWithoutTipoInput[]
    createMany?: usuarioCreateManyTipoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput> | usuarioCreateWithoutTipoInput[] | usuarioUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutTipoInput | usuarioCreateOrConnectWithoutTipoInput[]
    createMany?: usuarioCreateManyTipoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usuarioUpdateManyWithoutTipoNestedInput = {
    create?: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput> | usuarioCreateWithoutTipoInput[] | usuarioUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutTipoInput | usuarioCreateOrConnectWithoutTipoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutTipoInput | usuarioUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: usuarioCreateManyTipoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutTipoInput | usuarioUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutTipoInput | usuarioUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuarioUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput> | usuarioCreateWithoutTipoInput[] | usuarioUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutTipoInput | usuarioCreateOrConnectWithoutTipoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutTipoInput | usuarioUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: usuarioCreateManyTipoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutTipoInput | usuarioUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutTipoInput | usuarioUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioCreateNestedManyWithoutEstadoInput = {
    create?: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput> | usuarioCreateWithoutEstadoInput[] | usuarioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutEstadoInput | usuarioCreateOrConnectWithoutEstadoInput[]
    createMany?: usuarioCreateManyEstadoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput> | usuarioCreateWithoutEstadoInput[] | usuarioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutEstadoInput | usuarioCreateOrConnectWithoutEstadoInput[]
    createMany?: usuarioCreateManyEstadoInputEnvelope
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput> | usuarioCreateWithoutEstadoInput[] | usuarioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutEstadoInput | usuarioCreateOrConnectWithoutEstadoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutEstadoInput | usuarioUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: usuarioCreateManyEstadoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutEstadoInput | usuarioUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutEstadoInput | usuarioUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput> | usuarioCreateWithoutEstadoInput[] | usuarioUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutEstadoInput | usuarioCreateOrConnectWithoutEstadoInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutEstadoInput | usuarioUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: usuarioCreateManyEstadoInputEnvelope
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutEstadoInput | usuarioUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutEstadoInput | usuarioUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type tipo_usuarioCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tipo_usuarioCreateWithoutUsuariosInput, tipo_usuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tipo_usuarioCreateOrConnectWithoutUsuariosInput
    connect?: tipo_usuarioWhereUniqueInput
  }

  export type usuario_creacion_proyectoCreateNestedManyWithoutUsuario_creadorInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput> | usuario_creacion_proyectoCreateWithoutUsuario_creadorInput[] | usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput | usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput[]
    createMany?: usuario_creacion_proyectoCreateManyUsuario_creadorInputEnvelope
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
  }

  export type usuario_inversion_proyectoCreateNestedManyWithoutUsuario_inversorInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput> | usuario_inversion_proyectoCreateWithoutUsuario_inversorInput[] | usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput | usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput[]
    createMany?: usuario_inversion_proyectoCreateManyUsuario_inversorInputEnvelope
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
  }

  export type estadoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<estadoCreateWithoutUsuariosInput, estadoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: estadoCreateOrConnectWithoutUsuariosInput
    connect?: estadoWhereUniqueInput
  }

  export type usuario_creacion_proyectoUncheckedCreateNestedManyWithoutUsuario_creadorInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput> | usuario_creacion_proyectoCreateWithoutUsuario_creadorInput[] | usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput | usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput[]
    createMany?: usuario_creacion_proyectoCreateManyUsuario_creadorInputEnvelope
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
  }

  export type usuario_inversion_proyectoUncheckedCreateNestedManyWithoutUsuario_inversorInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput> | usuario_inversion_proyectoCreateWithoutUsuario_inversorInput[] | usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput | usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput[]
    createMany?: usuario_inversion_proyectoCreateManyUsuario_inversorInputEnvelope
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
  }

  export type tipo_usuarioUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<tipo_usuarioCreateWithoutUsuariosInput, tipo_usuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tipo_usuarioCreateOrConnectWithoutUsuariosInput
    upsert?: tipo_usuarioUpsertWithoutUsuariosInput
    connect?: tipo_usuarioWhereUniqueInput
    update?: XOR<XOR<tipo_usuarioUpdateToOneWithWhereWithoutUsuariosInput, tipo_usuarioUpdateWithoutUsuariosInput>, tipo_usuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type usuario_creacion_proyectoUpdateManyWithoutUsuario_creadorNestedInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput> | usuario_creacion_proyectoCreateWithoutUsuario_creadorInput[] | usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput | usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput[]
    upsert?: usuario_creacion_proyectoUpsertWithWhereUniqueWithoutUsuario_creadorInput | usuario_creacion_proyectoUpsertWithWhereUniqueWithoutUsuario_creadorInput[]
    createMany?: usuario_creacion_proyectoCreateManyUsuario_creadorInputEnvelope
    set?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    disconnect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    delete?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    update?: usuario_creacion_proyectoUpdateWithWhereUniqueWithoutUsuario_creadorInput | usuario_creacion_proyectoUpdateWithWhereUniqueWithoutUsuario_creadorInput[]
    updateMany?: usuario_creacion_proyectoUpdateManyWithWhereWithoutUsuario_creadorInput | usuario_creacion_proyectoUpdateManyWithWhereWithoutUsuario_creadorInput[]
    deleteMany?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
  }

  export type usuario_inversion_proyectoUpdateManyWithoutUsuario_inversorNestedInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput> | usuario_inversion_proyectoCreateWithoutUsuario_inversorInput[] | usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput | usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput[]
    upsert?: usuario_inversion_proyectoUpsertWithWhereUniqueWithoutUsuario_inversorInput | usuario_inversion_proyectoUpsertWithWhereUniqueWithoutUsuario_inversorInput[]
    createMany?: usuario_inversion_proyectoCreateManyUsuario_inversorInputEnvelope
    set?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    disconnect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    delete?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    update?: usuario_inversion_proyectoUpdateWithWhereUniqueWithoutUsuario_inversorInput | usuario_inversion_proyectoUpdateWithWhereUniqueWithoutUsuario_inversorInput[]
    updateMany?: usuario_inversion_proyectoUpdateManyWithWhereWithoutUsuario_inversorInput | usuario_inversion_proyectoUpdateManyWithWhereWithoutUsuario_inversorInput[]
    deleteMany?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
  }

  export type estadoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<estadoCreateWithoutUsuariosInput, estadoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: estadoCreateOrConnectWithoutUsuariosInput
    upsert?: estadoUpsertWithoutUsuariosInput
    connect?: estadoWhereUniqueInput
    update?: XOR<XOR<estadoUpdateToOneWithWhereWithoutUsuariosInput, estadoUpdateWithoutUsuariosInput>, estadoUncheckedUpdateWithoutUsuariosInput>
  }

  export type usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorNestedInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput> | usuario_creacion_proyectoCreateWithoutUsuario_creadorInput[] | usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput | usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput[]
    upsert?: usuario_creacion_proyectoUpsertWithWhereUniqueWithoutUsuario_creadorInput | usuario_creacion_proyectoUpsertWithWhereUniqueWithoutUsuario_creadorInput[]
    createMany?: usuario_creacion_proyectoCreateManyUsuario_creadorInputEnvelope
    set?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    disconnect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    delete?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    update?: usuario_creacion_proyectoUpdateWithWhereUniqueWithoutUsuario_creadorInput | usuario_creacion_proyectoUpdateWithWhereUniqueWithoutUsuario_creadorInput[]
    updateMany?: usuario_creacion_proyectoUpdateManyWithWhereWithoutUsuario_creadorInput | usuario_creacion_proyectoUpdateManyWithWhereWithoutUsuario_creadorInput[]
    deleteMany?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
  }

  export type usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorNestedInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput> | usuario_inversion_proyectoCreateWithoutUsuario_inversorInput[] | usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput | usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput[]
    upsert?: usuario_inversion_proyectoUpsertWithWhereUniqueWithoutUsuario_inversorInput | usuario_inversion_proyectoUpsertWithWhereUniqueWithoutUsuario_inversorInput[]
    createMany?: usuario_inversion_proyectoCreateManyUsuario_inversorInputEnvelope
    set?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    disconnect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    delete?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    update?: usuario_inversion_proyectoUpdateWithWhereUniqueWithoutUsuario_inversorInput | usuario_inversion_proyectoUpdateWithWhereUniqueWithoutUsuario_inversorInput[]
    updateMany?: usuario_inversion_proyectoUpdateManyWithWhereWithoutUsuario_inversorInput | usuario_inversion_proyectoUpdateManyWithWhereWithoutUsuario_inversorInput[]
    deleteMany?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutProyectos_creadosInput = {
    create?: XOR<usuarioCreateWithoutProyectos_creadosInput, usuarioUncheckedCreateWithoutProyectos_creadosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProyectos_creadosInput
    connect?: usuarioWhereUniqueInput
  }

  export type proyectoCreateNestedOneWithoutProyectos_usuarioInput = {
    create?: XOR<proyectoCreateWithoutProyectos_usuarioInput, proyectoUncheckedCreateWithoutProyectos_usuarioInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutProyectos_usuarioInput
    connect?: proyectoWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutProyectos_creadosNestedInput = {
    create?: XOR<usuarioCreateWithoutProyectos_creadosInput, usuarioUncheckedCreateWithoutProyectos_creadosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProyectos_creadosInput
    upsert?: usuarioUpsertWithoutProyectos_creadosInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProyectos_creadosInput, usuarioUpdateWithoutProyectos_creadosInput>, usuarioUncheckedUpdateWithoutProyectos_creadosInput>
  }

  export type proyectoUpdateOneRequiredWithoutProyectos_usuarioNestedInput = {
    create?: XOR<proyectoCreateWithoutProyectos_usuarioInput, proyectoUncheckedCreateWithoutProyectos_usuarioInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutProyectos_usuarioInput
    upsert?: proyectoUpsertWithoutProyectos_usuarioInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutProyectos_usuarioInput, proyectoUpdateWithoutProyectos_usuarioInput>, proyectoUncheckedUpdateWithoutProyectos_usuarioInput>
  }

  export type usuarioCreateNestedOneWithoutProyectos_invertidosInput = {
    create?: XOR<usuarioCreateWithoutProyectos_invertidosInput, usuarioUncheckedCreateWithoutProyectos_invertidosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProyectos_invertidosInput
    connect?: usuarioWhereUniqueInput
  }

  export type proyectoCreateNestedOneWithoutProyectos_inversionInput = {
    create?: XOR<proyectoCreateWithoutProyectos_inversionInput, proyectoUncheckedCreateWithoutProyectos_inversionInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutProyectos_inversionInput
    connect?: proyectoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usuarioUpdateOneRequiredWithoutProyectos_invertidosNestedInput = {
    create?: XOR<usuarioCreateWithoutProyectos_invertidosInput, usuarioUncheckedCreateWithoutProyectos_invertidosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutProyectos_invertidosInput
    upsert?: usuarioUpsertWithoutProyectos_invertidosInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutProyectos_invertidosInput, usuarioUpdateWithoutProyectos_invertidosInput>, usuarioUncheckedUpdateWithoutProyectos_invertidosInput>
  }

  export type proyectoUpdateOneRequiredWithoutProyectos_inversionNestedInput = {
    create?: XOR<proyectoCreateWithoutProyectos_inversionInput, proyectoUncheckedCreateWithoutProyectos_inversionInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutProyectos_inversionInput
    upsert?: proyectoUpsertWithoutProyectos_inversionInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutProyectos_inversionInput, proyectoUpdateWithoutProyectos_inversionInput>, proyectoUncheckedUpdateWithoutProyectos_inversionInput>
  }

  export type pasoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput> | pasoCreateWithoutProyectoInput[] | pasoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: pasoCreateOrConnectWithoutProyectoInput | pasoCreateOrConnectWithoutProyectoInput[]
    createMany?: pasoCreateManyProyectoInputEnvelope
    connect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
  }

  export type tecnologia_proyectoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput> | tecnologia_proyectoCreateWithoutProyectoInput[] | tecnologia_proyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutProyectoInput | tecnologia_proyectoCreateOrConnectWithoutProyectoInput[]
    createMany?: tecnologia_proyectoCreateManyProyectoInputEnvelope
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
  }

  export type recursoCreateNestedManyWithoutProyectoInput = {
    create?: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput> | recursoCreateWithoutProyectoInput[] | recursoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutProyectoInput | recursoCreateOrConnectWithoutProyectoInput[]
    createMany?: recursoCreateManyProyectoInputEnvelope
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
  }

  export type usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput> | usuario_creacion_proyectoCreateWithoutProyecto_creadoInput[] | usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput | usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput[]
    createMany?: usuario_creacion_proyectoCreateManyProyecto_creadoInputEnvelope
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
  }

  export type usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput> | usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput[] | usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput | usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput[]
    createMany?: usuario_inversion_proyectoCreateManyProyecto_invertidoInputEnvelope
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
  }

  export type pasoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput> | pasoCreateWithoutProyectoInput[] | pasoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: pasoCreateOrConnectWithoutProyectoInput | pasoCreateOrConnectWithoutProyectoInput[]
    createMany?: pasoCreateManyProyectoInputEnvelope
    connect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
  }

  export type tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput> | tecnologia_proyectoCreateWithoutProyectoInput[] | tecnologia_proyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutProyectoInput | tecnologia_proyectoCreateOrConnectWithoutProyectoInput[]
    createMany?: tecnologia_proyectoCreateManyProyectoInputEnvelope
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
  }

  export type recursoUncheckedCreateNestedManyWithoutProyectoInput = {
    create?: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput> | recursoCreateWithoutProyectoInput[] | recursoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutProyectoInput | recursoCreateOrConnectWithoutProyectoInput[]
    createMany?: recursoCreateManyProyectoInputEnvelope
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
  }

  export type usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput> | usuario_creacion_proyectoCreateWithoutProyecto_creadoInput[] | usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput | usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput[]
    createMany?: usuario_creacion_proyectoCreateManyProyecto_creadoInputEnvelope
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
  }

  export type usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput> | usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput[] | usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput | usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput[]
    createMany?: usuario_inversion_proyectoCreateManyProyecto_invertidoInputEnvelope
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
  }

  export type pasoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput> | pasoCreateWithoutProyectoInput[] | pasoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: pasoCreateOrConnectWithoutProyectoInput | pasoCreateOrConnectWithoutProyectoInput[]
    upsert?: pasoUpsertWithWhereUniqueWithoutProyectoInput | pasoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: pasoCreateManyProyectoInputEnvelope
    set?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    disconnect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    delete?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    connect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    update?: pasoUpdateWithWhereUniqueWithoutProyectoInput | pasoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: pasoUpdateManyWithWhereWithoutProyectoInput | pasoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: pasoScalarWhereInput | pasoScalarWhereInput[]
  }

  export type tecnologia_proyectoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput> | tecnologia_proyectoCreateWithoutProyectoInput[] | tecnologia_proyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutProyectoInput | tecnologia_proyectoCreateOrConnectWithoutProyectoInput[]
    upsert?: tecnologia_proyectoUpsertWithWhereUniqueWithoutProyectoInput | tecnologia_proyectoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tecnologia_proyectoCreateManyProyectoInputEnvelope
    set?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    disconnect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    delete?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    update?: tecnologia_proyectoUpdateWithWhereUniqueWithoutProyectoInput | tecnologia_proyectoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tecnologia_proyectoUpdateManyWithWhereWithoutProyectoInput | tecnologia_proyectoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
  }

  export type recursoUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput> | recursoCreateWithoutProyectoInput[] | recursoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutProyectoInput | recursoCreateOrConnectWithoutProyectoInput[]
    upsert?: recursoUpsertWithWhereUniqueWithoutProyectoInput | recursoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: recursoCreateManyProyectoInputEnvelope
    set?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    disconnect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    delete?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    update?: recursoUpdateWithWhereUniqueWithoutProyectoInput | recursoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: recursoUpdateManyWithWhereWithoutProyectoInput | recursoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: recursoScalarWhereInput | recursoScalarWhereInput[]
  }

  export type usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput> | usuario_creacion_proyectoCreateWithoutProyecto_creadoInput[] | usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput | usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput[]
    upsert?: usuario_creacion_proyectoUpsertWithWhereUniqueWithoutProyecto_creadoInput | usuario_creacion_proyectoUpsertWithWhereUniqueWithoutProyecto_creadoInput[]
    createMany?: usuario_creacion_proyectoCreateManyProyecto_creadoInputEnvelope
    set?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    disconnect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    delete?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    update?: usuario_creacion_proyectoUpdateWithWhereUniqueWithoutProyecto_creadoInput | usuario_creacion_proyectoUpdateWithWhereUniqueWithoutProyecto_creadoInput[]
    updateMany?: usuario_creacion_proyectoUpdateManyWithWhereWithoutProyecto_creadoInput | usuario_creacion_proyectoUpdateManyWithWhereWithoutProyecto_creadoInput[]
    deleteMany?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
  }

  export type usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput> | usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput[] | usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput | usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput[]
    upsert?: usuario_inversion_proyectoUpsertWithWhereUniqueWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpsertWithWhereUniqueWithoutProyecto_invertidoInput[]
    createMany?: usuario_inversion_proyectoCreateManyProyecto_invertidoInputEnvelope
    set?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    disconnect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    delete?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    update?: usuario_inversion_proyectoUpdateWithWhereUniqueWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpdateWithWhereUniqueWithoutProyecto_invertidoInput[]
    updateMany?: usuario_inversion_proyectoUpdateManyWithWhereWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpdateManyWithWhereWithoutProyecto_invertidoInput[]
    deleteMany?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
  }

  export type pasoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput> | pasoCreateWithoutProyectoInput[] | pasoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: pasoCreateOrConnectWithoutProyectoInput | pasoCreateOrConnectWithoutProyectoInput[]
    upsert?: pasoUpsertWithWhereUniqueWithoutProyectoInput | pasoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: pasoCreateManyProyectoInputEnvelope
    set?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    disconnect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    delete?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    connect?: pasoWhereUniqueInput | pasoWhereUniqueInput[]
    update?: pasoUpdateWithWhereUniqueWithoutProyectoInput | pasoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: pasoUpdateManyWithWhereWithoutProyectoInput | pasoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: pasoScalarWhereInput | pasoScalarWhereInput[]
  }

  export type tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput> | tecnologia_proyectoCreateWithoutProyectoInput[] | tecnologia_proyectoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutProyectoInput | tecnologia_proyectoCreateOrConnectWithoutProyectoInput[]
    upsert?: tecnologia_proyectoUpsertWithWhereUniqueWithoutProyectoInput | tecnologia_proyectoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: tecnologia_proyectoCreateManyProyectoInputEnvelope
    set?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    disconnect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    delete?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    update?: tecnologia_proyectoUpdateWithWhereUniqueWithoutProyectoInput | tecnologia_proyectoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: tecnologia_proyectoUpdateManyWithWhereWithoutProyectoInput | tecnologia_proyectoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
  }

  export type recursoUncheckedUpdateManyWithoutProyectoNestedInput = {
    create?: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput> | recursoCreateWithoutProyectoInput[] | recursoUncheckedCreateWithoutProyectoInput[]
    connectOrCreate?: recursoCreateOrConnectWithoutProyectoInput | recursoCreateOrConnectWithoutProyectoInput[]
    upsert?: recursoUpsertWithWhereUniqueWithoutProyectoInput | recursoUpsertWithWhereUniqueWithoutProyectoInput[]
    createMany?: recursoCreateManyProyectoInputEnvelope
    set?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    disconnect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    delete?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    connect?: recursoWhereUniqueInput | recursoWhereUniqueInput[]
    update?: recursoUpdateWithWhereUniqueWithoutProyectoInput | recursoUpdateWithWhereUniqueWithoutProyectoInput[]
    updateMany?: recursoUpdateManyWithWhereWithoutProyectoInput | recursoUpdateManyWithWhereWithoutProyectoInput[]
    deleteMany?: recursoScalarWhereInput | recursoScalarWhereInput[]
  }

  export type usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput = {
    create?: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput> | usuario_creacion_proyectoCreateWithoutProyecto_creadoInput[] | usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput[]
    connectOrCreate?: usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput | usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput[]
    upsert?: usuario_creacion_proyectoUpsertWithWhereUniqueWithoutProyecto_creadoInput | usuario_creacion_proyectoUpsertWithWhereUniqueWithoutProyecto_creadoInput[]
    createMany?: usuario_creacion_proyectoCreateManyProyecto_creadoInputEnvelope
    set?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    disconnect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    delete?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    connect?: usuario_creacion_proyectoWhereUniqueInput | usuario_creacion_proyectoWhereUniqueInput[]
    update?: usuario_creacion_proyectoUpdateWithWhereUniqueWithoutProyecto_creadoInput | usuario_creacion_proyectoUpdateWithWhereUniqueWithoutProyecto_creadoInput[]
    updateMany?: usuario_creacion_proyectoUpdateManyWithWhereWithoutProyecto_creadoInput | usuario_creacion_proyectoUpdateManyWithWhereWithoutProyecto_creadoInput[]
    deleteMany?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
  }

  export type usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput = {
    create?: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput> | usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput[] | usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput[]
    connectOrCreate?: usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput | usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput[]
    upsert?: usuario_inversion_proyectoUpsertWithWhereUniqueWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpsertWithWhereUniqueWithoutProyecto_invertidoInput[]
    createMany?: usuario_inversion_proyectoCreateManyProyecto_invertidoInputEnvelope
    set?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    disconnect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    delete?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    connect?: usuario_inversion_proyectoWhereUniqueInput | usuario_inversion_proyectoWhereUniqueInput[]
    update?: usuario_inversion_proyectoUpdateWithWhereUniqueWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpdateWithWhereUniqueWithoutProyecto_invertidoInput[]
    updateMany?: usuario_inversion_proyectoUpdateManyWithWhereWithoutProyecto_invertidoInput | usuario_inversion_proyectoUpdateManyWithWhereWithoutProyecto_invertidoInput[]
    deleteMany?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
  }

  export type proyectoCreateNestedOneWithoutPasosInput = {
    create?: XOR<proyectoCreateWithoutPasosInput, proyectoUncheckedCreateWithoutPasosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutPasosInput
    connect?: proyectoWhereUniqueInput
  }

  export type proyectoUpdateOneRequiredWithoutPasosNestedInput = {
    create?: XOR<proyectoCreateWithoutPasosInput, proyectoUncheckedCreateWithoutPasosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutPasosInput
    upsert?: proyectoUpsertWithoutPasosInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutPasosInput, proyectoUpdateWithoutPasosInput>, proyectoUncheckedUpdateWithoutPasosInput>
  }

  export type tecnologia_proyectoCreateNestedManyWithoutTecnologiaInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput> | tecnologia_proyectoCreateWithoutTecnologiaInput[] | tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput | tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput[]
    createMany?: tecnologia_proyectoCreateManyTecnologiaInputEnvelope
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
  }

  export type tecnologia_proyectoUncheckedCreateNestedManyWithoutTecnologiaInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput> | tecnologia_proyectoCreateWithoutTecnologiaInput[] | tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput | tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput[]
    createMany?: tecnologia_proyectoCreateManyTecnologiaInputEnvelope
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type tecnologia_proyectoUpdateManyWithoutTecnologiaNestedInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput> | tecnologia_proyectoCreateWithoutTecnologiaInput[] | tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput | tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput[]
    upsert?: tecnologia_proyectoUpsertWithWhereUniqueWithoutTecnologiaInput | tecnologia_proyectoUpsertWithWhereUniqueWithoutTecnologiaInput[]
    createMany?: tecnologia_proyectoCreateManyTecnologiaInputEnvelope
    set?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    disconnect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    delete?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    update?: tecnologia_proyectoUpdateWithWhereUniqueWithoutTecnologiaInput | tecnologia_proyectoUpdateWithWhereUniqueWithoutTecnologiaInput[]
    updateMany?: tecnologia_proyectoUpdateManyWithWhereWithoutTecnologiaInput | tecnologia_proyectoUpdateManyWithWhereWithoutTecnologiaInput[]
    deleteMany?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
  }

  export type tecnologia_proyectoUncheckedUpdateManyWithoutTecnologiaNestedInput = {
    create?: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput> | tecnologia_proyectoCreateWithoutTecnologiaInput[] | tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput[]
    connectOrCreate?: tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput | tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput[]
    upsert?: tecnologia_proyectoUpsertWithWhereUniqueWithoutTecnologiaInput | tecnologia_proyectoUpsertWithWhereUniqueWithoutTecnologiaInput[]
    createMany?: tecnologia_proyectoCreateManyTecnologiaInputEnvelope
    set?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    disconnect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    delete?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    connect?: tecnologia_proyectoWhereUniqueInput | tecnologia_proyectoWhereUniqueInput[]
    update?: tecnologia_proyectoUpdateWithWhereUniqueWithoutTecnologiaInput | tecnologia_proyectoUpdateWithWhereUniqueWithoutTecnologiaInput[]
    updateMany?: tecnologia_proyectoUpdateManyWithWhereWithoutTecnologiaInput | tecnologia_proyectoUpdateManyWithWhereWithoutTecnologiaInput[]
    deleteMany?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
  }

  export type proyectoCreateNestedOneWithoutTecnologiasInput = {
    create?: XOR<proyectoCreateWithoutTecnologiasInput, proyectoUncheckedCreateWithoutTecnologiasInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutTecnologiasInput
    connect?: proyectoWhereUniqueInput
  }

  export type tecnologiaCreateNestedOneWithoutProyectosInput = {
    create?: XOR<tecnologiaCreateWithoutProyectosInput, tecnologiaUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: tecnologiaCreateOrConnectWithoutProyectosInput
    connect?: tecnologiaWhereUniqueInput
  }

  export type proyectoUpdateOneRequiredWithoutTecnologiasNestedInput = {
    create?: XOR<proyectoCreateWithoutTecnologiasInput, proyectoUncheckedCreateWithoutTecnologiasInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutTecnologiasInput
    upsert?: proyectoUpsertWithoutTecnologiasInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutTecnologiasInput, proyectoUpdateWithoutTecnologiasInput>, proyectoUncheckedUpdateWithoutTecnologiasInput>
  }

  export type tecnologiaUpdateOneRequiredWithoutProyectosNestedInput = {
    create?: XOR<tecnologiaCreateWithoutProyectosInput, tecnologiaUncheckedCreateWithoutProyectosInput>
    connectOrCreate?: tecnologiaCreateOrConnectWithoutProyectosInput
    upsert?: tecnologiaUpsertWithoutProyectosInput
    connect?: tecnologiaWhereUniqueInput
    update?: XOR<XOR<tecnologiaUpdateToOneWithWhereWithoutProyectosInput, tecnologiaUpdateWithoutProyectosInput>, tecnologiaUncheckedUpdateWithoutProyectosInput>
  }

  export type proyectoCreateNestedOneWithoutRecursosInput = {
    create?: XOR<proyectoCreateWithoutRecursosInput, proyectoUncheckedCreateWithoutRecursosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutRecursosInput
    connect?: proyectoWhereUniqueInput
  }

  export type proyectoUpdateOneRequiredWithoutRecursosNestedInput = {
    create?: XOR<proyectoCreateWithoutRecursosInput, proyectoUncheckedCreateWithoutRecursosInput>
    connectOrCreate?: proyectoCreateOrConnectWithoutRecursosInput
    upsert?: proyectoUpsertWithoutRecursosInput
    connect?: proyectoWhereUniqueInput
    update?: XOR<XOR<proyectoUpdateToOneWithWhereWithoutRecursosInput, proyectoUpdateWithoutRecursosInput>, proyectoUncheckedUpdateWithoutRecursosInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type usuarioCreateWithoutTipoInput = {
    username: string
    password: string
    email: string
    token: string
    proyectos_creados?: usuario_creacion_proyectoCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoCreateNestedManyWithoutUsuario_inversorInput
    estado?: estadoCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioUncheckedCreateWithoutTipoInput = {
    id?: number
    username: string
    password: string
    email: string
    token: string
    estado_id?: number
    proyectos_creados?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutUsuario_inversorInput
  }

  export type usuarioCreateOrConnectWithoutTipoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput>
  }

  export type usuarioCreateManyTipoInputEnvelope = {
    data: usuarioCreateManyTipoInput | usuarioCreateManyTipoInput[]
  }

  export type usuarioUpsertWithWhereUniqueWithoutTipoInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutTipoInput, usuarioUncheckedUpdateWithoutTipoInput>
    create: XOR<usuarioCreateWithoutTipoInput, usuarioUncheckedCreateWithoutTipoInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutTipoInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutTipoInput, usuarioUncheckedUpdateWithoutTipoInput>
  }

  export type usuarioUpdateManyWithWhereWithoutTipoInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutTipoInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id?: IntFilter<"usuario"> | number
    username?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    tipo_id?: IntFilter<"usuario"> | number
    token?: StringFilter<"usuario"> | string
    estado_id?: IntFilter<"usuario"> | number
  }

  export type usuarioCreateWithoutEstadoInput = {
    username: string
    password: string
    email: string
    token: string
    tipo: tipo_usuarioCreateNestedOneWithoutUsuariosInput
    proyectos_creados?: usuario_creacion_proyectoCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoCreateNestedManyWithoutUsuario_inversorInput
  }

  export type usuarioUncheckedCreateWithoutEstadoInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    proyectos_creados?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutUsuario_creadorInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutUsuario_inversorInput
  }

  export type usuarioCreateOrConnectWithoutEstadoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput>
  }

  export type usuarioCreateManyEstadoInputEnvelope = {
    data: usuarioCreateManyEstadoInput | usuarioCreateManyEstadoInput[]
  }

  export type usuarioUpsertWithWhereUniqueWithoutEstadoInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutEstadoInput, usuarioUncheckedUpdateWithoutEstadoInput>
    create: XOR<usuarioCreateWithoutEstadoInput, usuarioUncheckedCreateWithoutEstadoInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutEstadoInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutEstadoInput, usuarioUncheckedUpdateWithoutEstadoInput>
  }

  export type usuarioUpdateManyWithWhereWithoutEstadoInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutEstadoInput>
  }

  export type tipo_usuarioCreateWithoutUsuariosInput = {
    tipo: string
  }

  export type tipo_usuarioUncheckedCreateWithoutUsuariosInput = {
    id?: number
    tipo: string
  }

  export type tipo_usuarioCreateOrConnectWithoutUsuariosInput = {
    where: tipo_usuarioWhereUniqueInput
    create: XOR<tipo_usuarioCreateWithoutUsuariosInput, tipo_usuarioUncheckedCreateWithoutUsuariosInput>
  }

  export type usuario_creacion_proyectoCreateWithoutUsuario_creadorInput = {
    proyecto_creado: proyectoCreateNestedOneWithoutProyectos_usuarioInput
  }

  export type usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput = {
    id?: number
    proyecto_id: number
  }

  export type usuario_creacion_proyectoCreateOrConnectWithoutUsuario_creadorInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    create: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput>
  }

  export type usuario_creacion_proyectoCreateManyUsuario_creadorInputEnvelope = {
    data: usuario_creacion_proyectoCreateManyUsuario_creadorInput | usuario_creacion_proyectoCreateManyUsuario_creadorInput[]
  }

  export type usuario_inversion_proyectoCreateWithoutUsuario_inversorInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    proyecto_invertido: proyectoCreateNestedOneWithoutProyectos_inversionInput
  }

  export type usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput = {
    id?: number
    proyecto_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoCreateOrConnectWithoutUsuario_inversorInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    create: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput>
  }

  export type usuario_inversion_proyectoCreateManyUsuario_inversorInputEnvelope = {
    data: usuario_inversion_proyectoCreateManyUsuario_inversorInput | usuario_inversion_proyectoCreateManyUsuario_inversorInput[]
  }

  export type estadoCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type estadoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
  }

  export type estadoCreateOrConnectWithoutUsuariosInput = {
    where: estadoWhereUniqueInput
    create: XOR<estadoCreateWithoutUsuariosInput, estadoUncheckedCreateWithoutUsuariosInput>
  }

  export type tipo_usuarioUpsertWithoutUsuariosInput = {
    update: XOR<tipo_usuarioUpdateWithoutUsuariosInput, tipo_usuarioUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tipo_usuarioCreateWithoutUsuariosInput, tipo_usuarioUncheckedCreateWithoutUsuariosInput>
    where?: tipo_usuarioWhereInput
  }

  export type tipo_usuarioUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tipo_usuarioWhereInput
    data: XOR<tipo_usuarioUpdateWithoutUsuariosInput, tipo_usuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type tipo_usuarioUpdateWithoutUsuariosInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type tipo_usuarioUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_creacion_proyectoUpsertWithWhereUniqueWithoutUsuario_creadorInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    update: XOR<usuario_creacion_proyectoUpdateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedUpdateWithoutUsuario_creadorInput>
    create: XOR<usuario_creacion_proyectoCreateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedCreateWithoutUsuario_creadorInput>
  }

  export type usuario_creacion_proyectoUpdateWithWhereUniqueWithoutUsuario_creadorInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    data: XOR<usuario_creacion_proyectoUpdateWithoutUsuario_creadorInput, usuario_creacion_proyectoUncheckedUpdateWithoutUsuario_creadorInput>
  }

  export type usuario_creacion_proyectoUpdateManyWithWhereWithoutUsuario_creadorInput = {
    where: usuario_creacion_proyectoScalarWhereInput
    data: XOR<usuario_creacion_proyectoUpdateManyMutationInput, usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorInput>
  }

  export type usuario_creacion_proyectoScalarWhereInput = {
    AND?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
    OR?: usuario_creacion_proyectoScalarWhereInput[]
    NOT?: usuario_creacion_proyectoScalarWhereInput | usuario_creacion_proyectoScalarWhereInput[]
    id?: IntFilter<"usuario_creacion_proyecto"> | number
    usuario_id?: IntFilter<"usuario_creacion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_creacion_proyecto"> | number
  }

  export type usuario_inversion_proyectoUpsertWithWhereUniqueWithoutUsuario_inversorInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    update: XOR<usuario_inversion_proyectoUpdateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedUpdateWithoutUsuario_inversorInput>
    create: XOR<usuario_inversion_proyectoCreateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedCreateWithoutUsuario_inversorInput>
  }

  export type usuario_inversion_proyectoUpdateWithWhereUniqueWithoutUsuario_inversorInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    data: XOR<usuario_inversion_proyectoUpdateWithoutUsuario_inversorInput, usuario_inversion_proyectoUncheckedUpdateWithoutUsuario_inversorInput>
  }

  export type usuario_inversion_proyectoUpdateManyWithWhereWithoutUsuario_inversorInput = {
    where: usuario_inversion_proyectoScalarWhereInput
    data: XOR<usuario_inversion_proyectoUpdateManyMutationInput, usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorInput>
  }

  export type usuario_inversion_proyectoScalarWhereInput = {
    AND?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
    OR?: usuario_inversion_proyectoScalarWhereInput[]
    NOT?: usuario_inversion_proyectoScalarWhereInput | usuario_inversion_proyectoScalarWhereInput[]
    id?: IntFilter<"usuario_inversion_proyecto"> | number
    usuario_id?: IntFilter<"usuario_inversion_proyecto"> | number
    proyecto_id?: IntFilter<"usuario_inversion_proyecto"> | number
    cantidad?: DecimalFilter<"usuario_inversion_proyecto"> | Decimal | DecimalJsLike | number | string
  }

  export type estadoUpsertWithoutUsuariosInput = {
    update: XOR<estadoUpdateWithoutUsuariosInput, estadoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<estadoCreateWithoutUsuariosInput, estadoUncheckedCreateWithoutUsuariosInput>
    where?: estadoWhereInput
  }

  export type estadoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: estadoWhereInput
    data: XOR<estadoUpdateWithoutUsuariosInput, estadoUncheckedUpdateWithoutUsuariosInput>
  }

  export type estadoUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type estadoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateWithoutProyectos_creadosInput = {
    username: string
    password: string
    email: string
    token: string
    tipo: tipo_usuarioCreateNestedOneWithoutUsuariosInput
    proyectos_invertidos?: usuario_inversion_proyectoCreateNestedManyWithoutUsuario_inversorInput
    estado?: estadoCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioUncheckedCreateWithoutProyectos_creadosInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    estado_id?: number
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutUsuario_inversorInput
  }

  export type usuarioCreateOrConnectWithoutProyectos_creadosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProyectos_creadosInput, usuarioUncheckedCreateWithoutProyectos_creadosInput>
  }

  export type proyectoCreateWithoutProyectos_usuarioInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoCreateNestedManyWithoutProyectoInput
    recursos?: recursoCreateNestedManyWithoutProyectoInput
    proyectos_inversion?: usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUncheckedCreateWithoutProyectos_usuarioInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoUncheckedCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput
    recursos?: recursoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoCreateOrConnectWithoutProyectos_usuarioInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutProyectos_usuarioInput, proyectoUncheckedCreateWithoutProyectos_usuarioInput>
  }

  export type usuarioUpsertWithoutProyectos_creadosInput = {
    update: XOR<usuarioUpdateWithoutProyectos_creadosInput, usuarioUncheckedUpdateWithoutProyectos_creadosInput>
    create: XOR<usuarioCreateWithoutProyectos_creadosInput, usuarioUncheckedCreateWithoutProyectos_creadosInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProyectos_creadosInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProyectos_creadosInput, usuarioUncheckedUpdateWithoutProyectos_creadosInput>
  }

  export type usuarioUpdateWithoutProyectos_creadosInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: tipo_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUpdateManyWithoutUsuario_inversorNestedInput
    estado?: estadoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProyectos_creadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorNestedInput
  }

  export type proyectoUpsertWithoutProyectos_usuarioInput = {
    update: XOR<proyectoUpdateWithoutProyectos_usuarioInput, proyectoUncheckedUpdateWithoutProyectos_usuarioInput>
    create: XOR<proyectoCreateWithoutProyectos_usuarioInput, proyectoUncheckedCreateWithoutProyectos_usuarioInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutProyectos_usuarioInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutProyectos_usuarioInput, proyectoUncheckedUpdateWithoutProyectos_usuarioInput>
  }

  export type proyectoUpdateWithoutProyectos_usuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUpdateManyWithoutProyectoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutProyectos_usuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUncheckedUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type usuarioCreateWithoutProyectos_invertidosInput = {
    username: string
    password: string
    email: string
    token: string
    tipo: tipo_usuarioCreateNestedOneWithoutUsuariosInput
    proyectos_creados?: usuario_creacion_proyectoCreateNestedManyWithoutUsuario_creadorInput
    estado?: estadoCreateNestedOneWithoutUsuariosInput
  }

  export type usuarioUncheckedCreateWithoutProyectos_invertidosInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
    estado_id?: number
    proyectos_creados?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutUsuario_creadorInput
  }

  export type usuarioCreateOrConnectWithoutProyectos_invertidosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutProyectos_invertidosInput, usuarioUncheckedCreateWithoutProyectos_invertidosInput>
  }

  export type proyectoCreateWithoutProyectos_inversionInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoCreateNestedManyWithoutProyectoInput
    recursos?: recursoCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput
  }

  export type proyectoUncheckedCreateWithoutProyectos_inversionInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoUncheckedCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput
    recursos?: recursoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput
  }

  export type proyectoCreateOrConnectWithoutProyectos_inversionInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutProyectos_inversionInput, proyectoUncheckedCreateWithoutProyectos_inversionInput>
  }

  export type usuarioUpsertWithoutProyectos_invertidosInput = {
    update: XOR<usuarioUpdateWithoutProyectos_invertidosInput, usuarioUncheckedUpdateWithoutProyectos_invertidosInput>
    create: XOR<usuarioCreateWithoutProyectos_invertidosInput, usuarioUncheckedCreateWithoutProyectos_invertidosInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutProyectos_invertidosInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutProyectos_invertidosInput, usuarioUncheckedUpdateWithoutProyectos_invertidosInput>
  }

  export type usuarioUpdateWithoutProyectos_invertidosInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: tipo_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    proyectos_creados?: usuario_creacion_proyectoUpdateManyWithoutUsuario_creadorNestedInput
    estado?: estadoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioUncheckedUpdateWithoutProyectos_invertidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
    proyectos_creados?: usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorNestedInput
  }

  export type proyectoUpsertWithoutProyectos_inversionInput = {
    update: XOR<proyectoUpdateWithoutProyectos_inversionInput, proyectoUncheckedUpdateWithoutProyectos_inversionInput>
    create: XOR<proyectoCreateWithoutProyectos_inversionInput, proyectoUncheckedCreateWithoutProyectos_inversionInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutProyectos_inversionInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutProyectos_inversionInput, proyectoUncheckedUpdateWithoutProyectos_inversionInput>
  }

  export type proyectoUpdateWithoutProyectos_inversionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutProyectos_inversionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUncheckedUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput
  }

  export type pasoCreateWithoutProyectoInput = {
    paso: string
  }

  export type pasoUncheckedCreateWithoutProyectoInput = {
    id?: number
    paso: string
  }

  export type pasoCreateOrConnectWithoutProyectoInput = {
    where: pasoWhereUniqueInput
    create: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput>
  }

  export type pasoCreateManyProyectoInputEnvelope = {
    data: pasoCreateManyProyectoInput | pasoCreateManyProyectoInput[]
  }

  export type tecnologia_proyectoCreateWithoutProyectoInput = {
    tecnologia: tecnologiaCreateNestedOneWithoutProyectosInput
  }

  export type tecnologia_proyectoUncheckedCreateWithoutProyectoInput = {
    id?: number
    tecnologia_id: number
  }

  export type tecnologia_proyectoCreateOrConnectWithoutProyectoInput = {
    where: tecnologia_proyectoWhereUniqueInput
    create: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput>
  }

  export type tecnologia_proyectoCreateManyProyectoInputEnvelope = {
    data: tecnologia_proyectoCreateManyProyectoInput | tecnologia_proyectoCreateManyProyectoInput[]
  }

  export type recursoCreateWithoutProyectoInput = {
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
  }

  export type recursoUncheckedCreateWithoutProyectoInput = {
    id?: number
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
  }

  export type recursoCreateOrConnectWithoutProyectoInput = {
    where: recursoWhereUniqueInput
    create: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput>
  }

  export type recursoCreateManyProyectoInputEnvelope = {
    data: recursoCreateManyProyectoInput | recursoCreateManyProyectoInput[]
  }

  export type usuario_creacion_proyectoCreateWithoutProyecto_creadoInput = {
    usuario_creador: usuarioCreateNestedOneWithoutProyectos_creadosInput
  }

  export type usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput = {
    id?: number
    usuario_id: number
  }

  export type usuario_creacion_proyectoCreateOrConnectWithoutProyecto_creadoInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    create: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput>
  }

  export type usuario_creacion_proyectoCreateManyProyecto_creadoInputEnvelope = {
    data: usuario_creacion_proyectoCreateManyProyecto_creadoInput | usuario_creacion_proyectoCreateManyProyecto_creadoInput[]
  }

  export type usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput = {
    cantidad: Decimal | DecimalJsLike | number | string
    usuario_inversor: usuarioCreateNestedOneWithoutProyectos_invertidosInput
  }

  export type usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput = {
    id?: number
    usuario_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoCreateOrConnectWithoutProyecto_invertidoInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    create: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput>
  }

  export type usuario_inversion_proyectoCreateManyProyecto_invertidoInputEnvelope = {
    data: usuario_inversion_proyectoCreateManyProyecto_invertidoInput | usuario_inversion_proyectoCreateManyProyecto_invertidoInput[]
  }

  export type pasoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: pasoWhereUniqueInput
    update: XOR<pasoUpdateWithoutProyectoInput, pasoUncheckedUpdateWithoutProyectoInput>
    create: XOR<pasoCreateWithoutProyectoInput, pasoUncheckedCreateWithoutProyectoInput>
  }

  export type pasoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: pasoWhereUniqueInput
    data: XOR<pasoUpdateWithoutProyectoInput, pasoUncheckedUpdateWithoutProyectoInput>
  }

  export type pasoUpdateManyWithWhereWithoutProyectoInput = {
    where: pasoScalarWhereInput
    data: XOR<pasoUpdateManyMutationInput, pasoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type pasoScalarWhereInput = {
    AND?: pasoScalarWhereInput | pasoScalarWhereInput[]
    OR?: pasoScalarWhereInput[]
    NOT?: pasoScalarWhereInput | pasoScalarWhereInput[]
    id?: IntFilter<"paso"> | number
    paso?: StringFilter<"paso"> | string
    proyecto_id?: IntFilter<"paso"> | number
  }

  export type tecnologia_proyectoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: tecnologia_proyectoWhereUniqueInput
    update: XOR<tecnologia_proyectoUpdateWithoutProyectoInput, tecnologia_proyectoUncheckedUpdateWithoutProyectoInput>
    create: XOR<tecnologia_proyectoCreateWithoutProyectoInput, tecnologia_proyectoUncheckedCreateWithoutProyectoInput>
  }

  export type tecnologia_proyectoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: tecnologia_proyectoWhereUniqueInput
    data: XOR<tecnologia_proyectoUpdateWithoutProyectoInput, tecnologia_proyectoUncheckedUpdateWithoutProyectoInput>
  }

  export type tecnologia_proyectoUpdateManyWithWhereWithoutProyectoInput = {
    where: tecnologia_proyectoScalarWhereInput
    data: XOR<tecnologia_proyectoUpdateManyMutationInput, tecnologia_proyectoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type tecnologia_proyectoScalarWhereInput = {
    AND?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
    OR?: tecnologia_proyectoScalarWhereInput[]
    NOT?: tecnologia_proyectoScalarWhereInput | tecnologia_proyectoScalarWhereInput[]
    id?: IntFilter<"tecnologia_proyecto"> | number
    proyecto_id?: IntFilter<"tecnologia_proyecto"> | number
    tecnologia_id?: IntFilter<"tecnologia_proyecto"> | number
  }

  export type recursoUpsertWithWhereUniqueWithoutProyectoInput = {
    where: recursoWhereUniqueInput
    update: XOR<recursoUpdateWithoutProyectoInput, recursoUncheckedUpdateWithoutProyectoInput>
    create: XOR<recursoCreateWithoutProyectoInput, recursoUncheckedCreateWithoutProyectoInput>
  }

  export type recursoUpdateWithWhereUniqueWithoutProyectoInput = {
    where: recursoWhereUniqueInput
    data: XOR<recursoUpdateWithoutProyectoInput, recursoUncheckedUpdateWithoutProyectoInput>
  }

  export type recursoUpdateManyWithWhereWithoutProyectoInput = {
    where: recursoScalarWhereInput
    data: XOR<recursoUpdateManyMutationInput, recursoUncheckedUpdateManyWithoutProyectoInput>
  }

  export type recursoScalarWhereInput = {
    AND?: recursoScalarWhereInput | recursoScalarWhereInput[]
    OR?: recursoScalarWhereInput[]
    NOT?: recursoScalarWhereInput | recursoScalarWhereInput[]
    id?: IntFilter<"recurso"> | number
    nombre?: StringFilter<"recurso"> | string
    valor?: DecimalFilter<"recurso"> | Decimal | DecimalJsLike | number | string
    cantidad?: IntFilter<"recurso"> | number
    proyecto_id?: IntFilter<"recurso"> | number
  }

  export type usuario_creacion_proyectoUpsertWithWhereUniqueWithoutProyecto_creadoInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    update: XOR<usuario_creacion_proyectoUpdateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedUpdateWithoutProyecto_creadoInput>
    create: XOR<usuario_creacion_proyectoCreateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedCreateWithoutProyecto_creadoInput>
  }

  export type usuario_creacion_proyectoUpdateWithWhereUniqueWithoutProyecto_creadoInput = {
    where: usuario_creacion_proyectoWhereUniqueInput
    data: XOR<usuario_creacion_proyectoUpdateWithoutProyecto_creadoInput, usuario_creacion_proyectoUncheckedUpdateWithoutProyecto_creadoInput>
  }

  export type usuario_creacion_proyectoUpdateManyWithWhereWithoutProyecto_creadoInput = {
    where: usuario_creacion_proyectoScalarWhereInput
    data: XOR<usuario_creacion_proyectoUpdateManyMutationInput, usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoInput>
  }

  export type usuario_inversion_proyectoUpsertWithWhereUniqueWithoutProyecto_invertidoInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    update: XOR<usuario_inversion_proyectoUpdateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedUpdateWithoutProyecto_invertidoInput>
    create: XOR<usuario_inversion_proyectoCreateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedCreateWithoutProyecto_invertidoInput>
  }

  export type usuario_inversion_proyectoUpdateWithWhereUniqueWithoutProyecto_invertidoInput = {
    where: usuario_inversion_proyectoWhereUniqueInput
    data: XOR<usuario_inversion_proyectoUpdateWithoutProyecto_invertidoInput, usuario_inversion_proyectoUncheckedUpdateWithoutProyecto_invertidoInput>
  }

  export type usuario_inversion_proyectoUpdateManyWithWhereWithoutProyecto_invertidoInput = {
    where: usuario_inversion_proyectoScalarWhereInput
    data: XOR<usuario_inversion_proyectoUpdateManyMutationInput, usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoInput>
  }

  export type proyectoCreateWithoutPasosInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    tecnologias?: tecnologia_proyectoCreateNestedManyWithoutProyectoInput
    recursos?: recursoCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUncheckedCreateWithoutPasosInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    tecnologias?: tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput
    recursos?: recursoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoCreateOrConnectWithoutPasosInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutPasosInput, proyectoUncheckedCreateWithoutPasosInput>
  }

  export type proyectoUpsertWithoutPasosInput = {
    update: XOR<proyectoUpdateWithoutPasosInput, proyectoUncheckedUpdateWithoutPasosInput>
    create: XOR<proyectoCreateWithoutPasosInput, proyectoUncheckedCreateWithoutPasosInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutPasosInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutPasosInput, proyectoUncheckedUpdateWithoutPasosInput>
  }

  export type proyectoUpdateWithoutPasosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnologias?: tecnologia_proyectoUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutPasosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    tecnologias?: tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type tecnologia_proyectoCreateWithoutTecnologiaInput = {
    proyecto: proyectoCreateNestedOneWithoutTecnologiasInput
  }

  export type tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput = {
    id?: number
    proyecto_id: number
  }

  export type tecnologia_proyectoCreateOrConnectWithoutTecnologiaInput = {
    where: tecnologia_proyectoWhereUniqueInput
    create: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput>
  }

  export type tecnologia_proyectoCreateManyTecnologiaInputEnvelope = {
    data: tecnologia_proyectoCreateManyTecnologiaInput | tecnologia_proyectoCreateManyTecnologiaInput[]
  }

  export type tecnologia_proyectoUpsertWithWhereUniqueWithoutTecnologiaInput = {
    where: tecnologia_proyectoWhereUniqueInput
    update: XOR<tecnologia_proyectoUpdateWithoutTecnologiaInput, tecnologia_proyectoUncheckedUpdateWithoutTecnologiaInput>
    create: XOR<tecnologia_proyectoCreateWithoutTecnologiaInput, tecnologia_proyectoUncheckedCreateWithoutTecnologiaInput>
  }

  export type tecnologia_proyectoUpdateWithWhereUniqueWithoutTecnologiaInput = {
    where: tecnologia_proyectoWhereUniqueInput
    data: XOR<tecnologia_proyectoUpdateWithoutTecnologiaInput, tecnologia_proyectoUncheckedUpdateWithoutTecnologiaInput>
  }

  export type tecnologia_proyectoUpdateManyWithWhereWithoutTecnologiaInput = {
    where: tecnologia_proyectoScalarWhereInput
    data: XOR<tecnologia_proyectoUpdateManyMutationInput, tecnologia_proyectoUncheckedUpdateManyWithoutTecnologiaInput>
  }

  export type proyectoCreateWithoutTecnologiasInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoCreateNestedManyWithoutProyectoInput
    recursos?: recursoCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUncheckedCreateWithoutTecnologiasInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoUncheckedCreateNestedManyWithoutProyectoInput
    recursos?: recursoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoCreateOrConnectWithoutTecnologiasInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutTecnologiasInput, proyectoUncheckedCreateWithoutTecnologiasInput>
  }

  export type tecnologiaCreateWithoutProyectosInput = {
    tecnologia: string
    tipo: boolean
  }

  export type tecnologiaUncheckedCreateWithoutProyectosInput = {
    id?: number
    tecnologia: string
    tipo: boolean
  }

  export type tecnologiaCreateOrConnectWithoutProyectosInput = {
    where: tecnologiaWhereUniqueInput
    create: XOR<tecnologiaCreateWithoutProyectosInput, tecnologiaUncheckedCreateWithoutProyectosInput>
  }

  export type proyectoUpsertWithoutTecnologiasInput = {
    update: XOR<proyectoUpdateWithoutTecnologiasInput, proyectoUncheckedUpdateWithoutTecnologiasInput>
    create: XOR<proyectoCreateWithoutTecnologiasInput, proyectoUncheckedCreateWithoutTecnologiasInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutTecnologiasInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutTecnologiasInput, proyectoUncheckedUpdateWithoutTecnologiasInput>
  }

  export type proyectoUpdateWithoutTecnologiasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutTecnologiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUncheckedUpdateManyWithoutProyectoNestedInput
    recursos?: recursoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type tecnologiaUpsertWithoutProyectosInput = {
    update: XOR<tecnologiaUpdateWithoutProyectosInput, tecnologiaUncheckedUpdateWithoutProyectosInput>
    create: XOR<tecnologiaCreateWithoutProyectosInput, tecnologiaUncheckedCreateWithoutProyectosInput>
    where?: tecnologiaWhereInput
  }

  export type tecnologiaUpdateToOneWithWhereWithoutProyectosInput = {
    where?: tecnologiaWhereInput
    data: XOR<tecnologiaUpdateWithoutProyectosInput, tecnologiaUncheckedUpdateWithoutProyectosInput>
  }

  export type tecnologiaUpdateWithoutProyectosInput = {
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tecnologiaUncheckedUpdateWithoutProyectosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnologia?: StringFieldUpdateOperationsInput | string
    tipo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type proyectoCreateWithoutRecursosInput = {
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoUncheckedCreateWithoutRecursosInput = {
    id?: number
    nombre: string
    tipo_energia: string
    descripcion: string
    pasos?: pasoUncheckedCreateNestedManyWithoutProyectoInput
    tecnologias?: tecnologia_proyectoUncheckedCreateNestedManyWithoutProyectoInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedCreateNestedManyWithoutProyecto_creadoInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedCreateNestedManyWithoutProyecto_invertidoInput
  }

  export type proyectoCreateOrConnectWithoutRecursosInput = {
    where: proyectoWhereUniqueInput
    create: XOR<proyectoCreateWithoutRecursosInput, proyectoUncheckedCreateWithoutRecursosInput>
  }

  export type proyectoUpsertWithoutRecursosInput = {
    update: XOR<proyectoUpdateWithoutRecursosInput, proyectoUncheckedUpdateWithoutRecursosInput>
    create: XOR<proyectoCreateWithoutRecursosInput, proyectoUncheckedCreateWithoutRecursosInput>
    where?: proyectoWhereInput
  }

  export type proyectoUpdateToOneWithWhereWithoutRecursosInput = {
    where?: proyectoWhereInput
    data: XOR<proyectoUpdateWithoutRecursosInput, proyectoUncheckedUpdateWithoutRecursosInput>
  }

  export type proyectoUpdateWithoutRecursosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type proyectoUncheckedUpdateWithoutRecursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo_energia?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    pasos?: pasoUncheckedUpdateManyWithoutProyectoNestedInput
    tecnologias?: tecnologia_proyectoUncheckedUpdateManyWithoutProyectoNestedInput
    proyectos_usuario?: usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoNestedInput
    proyectos_inversion?: usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoNestedInput
  }

  export type usuarioCreateManyTipoInput = {
    id?: number
    username: string
    password: string
    email: string
    token: string
    estado_id?: number
  }

  export type usuarioUpdateWithoutTipoInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    proyectos_creados?: usuario_creacion_proyectoUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUpdateManyWithoutUsuario_inversorNestedInput
    estado?: estadoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuarioUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
    proyectos_creados?: usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    estado_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateManyEstadoInput = {
    id?: number
    username: string
    password: string
    email: string
    tipo_id: number
    token: string
  }

  export type usuarioUpdateWithoutEstadoInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tipo?: tipo_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    proyectos_creados?: usuario_creacion_proyectoUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUpdateManyWithoutUsuario_inversorNestedInput
  }

  export type usuarioUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    proyectos_creados?: usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorNestedInput
    proyectos_invertidos?: usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tipo_id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_creacion_proyectoCreateManyUsuario_creadorInput = {
    id?: number
    proyecto_id: number
  }

  export type usuario_inversion_proyectoCreateManyUsuario_inversorInput = {
    id?: number
    proyecto_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type usuario_creacion_proyectoUpdateWithoutUsuario_creadorInput = {
    proyecto_creado?: proyectoUpdateOneRequiredWithoutProyectos_usuarioNestedInput
  }

  export type usuario_creacion_proyectoUncheckedUpdateWithoutUsuario_creadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_creacion_proyectoUncheckedUpdateManyWithoutUsuario_creadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_inversion_proyectoUpdateWithoutUsuario_inversorInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proyecto_invertido?: proyectoUpdateOneRequiredWithoutProyectos_inversionNestedInput
  }

  export type usuario_inversion_proyectoUncheckedUpdateWithoutUsuario_inversorInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoUncheckedUpdateManyWithoutUsuario_inversorInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pasoCreateManyProyectoInput = {
    id?: number
    paso: string
  }

  export type tecnologia_proyectoCreateManyProyectoInput = {
    id?: number
    tecnologia_id: number
  }

  export type recursoCreateManyProyectoInput = {
    id?: number
    nombre: string
    valor: Decimal | DecimalJsLike | number | string
    cantidad: number
  }

  export type usuario_creacion_proyectoCreateManyProyecto_creadoInput = {
    id?: number
    usuario_id: number
  }

  export type usuario_inversion_proyectoCreateManyProyecto_invertidoInput = {
    id?: number
    usuario_id: number
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type pasoUpdateWithoutProyectoInput = {
    paso?: StringFieldUpdateOperationsInput | string
  }

  export type pasoUncheckedUpdateWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paso?: StringFieldUpdateOperationsInput | string
  }

  export type pasoUncheckedUpdateManyWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    paso?: StringFieldUpdateOperationsInput | string
  }

  export type tecnologia_proyectoUpdateWithoutProyectoInput = {
    tecnologia?: tecnologiaUpdateOneRequiredWithoutProyectosNestedInput
  }

  export type tecnologia_proyectoUncheckedUpdateWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnologia_id?: IntFieldUpdateOperationsInput | number
  }

  export type tecnologia_proyectoUncheckedUpdateManyWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnologia_id?: IntFieldUpdateOperationsInput | number
  }

  export type recursoUpdateWithoutProyectoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type recursoUncheckedUpdateWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type recursoUncheckedUpdateManyWithoutProyectoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_creacion_proyectoUpdateWithoutProyecto_creadoInput = {
    usuario_creador?: usuarioUpdateOneRequiredWithoutProyectos_creadosNestedInput
  }

  export type usuario_creacion_proyectoUncheckedUpdateWithoutProyecto_creadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_creacion_proyectoUncheckedUpdateManyWithoutProyecto_creadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_inversion_proyectoUpdateWithoutProyecto_invertidoInput = {
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario_inversor?: usuarioUpdateOneRequiredWithoutProyectos_invertidosNestedInput
  }

  export type usuario_inversion_proyectoUncheckedUpdateWithoutProyecto_invertidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type usuario_inversion_proyectoUncheckedUpdateManyWithoutProyecto_invertidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuario_id?: IntFieldUpdateOperationsInput | number
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type tecnologia_proyectoCreateManyTecnologiaInput = {
    id?: number
    proyecto_id: number
  }

  export type tecnologia_proyectoUpdateWithoutTecnologiaInput = {
    proyecto?: proyectoUpdateOneRequiredWithoutTecnologiasNestedInput
  }

  export type tecnologia_proyectoUncheckedUpdateWithoutTecnologiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
  }

  export type tecnologia_proyectoUncheckedUpdateManyWithoutTecnologiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    proyecto_id?: IntFieldUpdateOperationsInput | number
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