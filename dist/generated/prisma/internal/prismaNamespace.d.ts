import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Deal: "Deal";
    readonly Investment: "Investment";
    readonly Asset: "Asset";
    readonly Entity: "Entity";
    readonly Identity: "Identity";
    readonly LedgerEntry: "LedgerEntry";
    readonly Fee: "Fee";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "deal" | "investment" | "asset" | "entity" | "identity" | "ledgerEntry" | "fee";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Deal: {
            payload: Prisma.$DealPayload<ExtArgs>;
            fields: Prisma.DealFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DealFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DealFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                findFirst: {
                    args: Prisma.DealFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DealFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                findMany: {
                    args: Prisma.DealFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                create: {
                    args: Prisma.DealCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                createMany: {
                    args: Prisma.DealCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DealCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                delete: {
                    args: Prisma.DealDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                update: {
                    args: Prisma.DealUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                deleteMany: {
                    args: Prisma.DealDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DealUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DealUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>[];
                };
                upsert: {
                    args: Prisma.DealUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DealPayload>;
                };
                aggregate: {
                    args: Prisma.DealAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDeal>;
                };
                groupBy: {
                    args: Prisma.DealGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DealCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DealCountAggregateOutputType> | number;
                };
            };
        };
        Investment: {
            payload: Prisma.$InvestmentPayload<ExtArgs>;
            fields: Prisma.InvestmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InvestmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                findFirst: {
                    args: Prisma.InvestmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                findMany: {
                    args: Prisma.InvestmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>[];
                };
                create: {
                    args: Prisma.InvestmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                createMany: {
                    args: Prisma.InvestmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>[];
                };
                delete: {
                    args: Prisma.InvestmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                update: {
                    args: Prisma.InvestmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                deleteMany: {
                    args: Prisma.InvestmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InvestmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>[];
                };
                upsert: {
                    args: Prisma.InvestmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InvestmentPayload>;
                };
                aggregate: {
                    args: Prisma.InvestmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvestment>;
                };
                groupBy: {
                    args: Prisma.InvestmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvestmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InvestmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvestmentCountAggregateOutputType> | number;
                };
            };
        };
        Asset: {
            payload: Prisma.$AssetPayload<ExtArgs>;
            fields: Prisma.AssetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AssetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findFirst: {
                    args: Prisma.AssetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                findMany: {
                    args: Prisma.AssetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                create: {
                    args: Prisma.AssetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                createMany: {
                    args: Prisma.AssetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                delete: {
                    args: Prisma.AssetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                update: {
                    args: Prisma.AssetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                deleteMany: {
                    args: Prisma.AssetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AssetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>[];
                };
                upsert: {
                    args: Prisma.AssetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AssetPayload>;
                };
                aggregate: {
                    args: Prisma.AssetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsset>;
                };
                groupBy: {
                    args: Prisma.AssetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AssetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AssetCountAggregateOutputType> | number;
                };
            };
        };
        Entity: {
            payload: Prisma.$EntityPayload<ExtArgs>;
            fields: Prisma.EntityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EntityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EntityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                findFirst: {
                    args: Prisma.EntityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EntityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                findMany: {
                    args: Prisma.EntityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>[];
                };
                create: {
                    args: Prisma.EntityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                createMany: {
                    args: Prisma.EntityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EntityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>[];
                };
                delete: {
                    args: Prisma.EntityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                update: {
                    args: Prisma.EntityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                deleteMany: {
                    args: Prisma.EntityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EntityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EntityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>[];
                };
                upsert: {
                    args: Prisma.EntityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EntityPayload>;
                };
                aggregate: {
                    args: Prisma.EntityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEntity>;
                };
                groupBy: {
                    args: Prisma.EntityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EntityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EntityCountAggregateOutputType> | number;
                };
            };
        };
        Identity: {
            payload: Prisma.$IdentityPayload<ExtArgs>;
            fields: Prisma.IdentityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IdentityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IdentityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                findFirst: {
                    args: Prisma.IdentityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IdentityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                findMany: {
                    args: Prisma.IdentityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>[];
                };
                create: {
                    args: Prisma.IdentityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                createMany: {
                    args: Prisma.IdentityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IdentityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>[];
                };
                delete: {
                    args: Prisma.IdentityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                update: {
                    args: Prisma.IdentityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                deleteMany: {
                    args: Prisma.IdentityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IdentityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IdentityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>[];
                };
                upsert: {
                    args: Prisma.IdentityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdentityPayload>;
                };
                aggregate: {
                    args: Prisma.IdentityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIdentity>;
                };
                groupBy: {
                    args: Prisma.IdentityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdentityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IdentityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdentityCountAggregateOutputType> | number;
                };
            };
        };
        LedgerEntry: {
            payload: Prisma.$LedgerEntryPayload<ExtArgs>;
            fields: Prisma.LedgerEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LedgerEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LedgerEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                findFirst: {
                    args: Prisma.LedgerEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LedgerEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                findMany: {
                    args: Prisma.LedgerEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
                };
                create: {
                    args: Prisma.LedgerEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                createMany: {
                    args: Prisma.LedgerEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LedgerEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
                };
                delete: {
                    args: Prisma.LedgerEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                update: {
                    args: Prisma.LedgerEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.LedgerEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LedgerEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LedgerEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>[];
                };
                upsert: {
                    args: Prisma.LedgerEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LedgerEntryPayload>;
                };
                aggregate: {
                    args: Prisma.LedgerEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLedgerEntry>;
                };
                groupBy: {
                    args: Prisma.LedgerEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LedgerEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LedgerEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LedgerEntryCountAggregateOutputType> | number;
                };
            };
        };
        Fee: {
            payload: Prisma.$FeePayload<ExtArgs>;
            fields: Prisma.FeeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                findFirst: {
                    args: Prisma.FeeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                findMany: {
                    args: Prisma.FeeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                create: {
                    args: Prisma.FeeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                createMany: {
                    args: Prisma.FeeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FeeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                delete: {
                    args: Prisma.FeeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                update: {
                    args: Prisma.FeeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                deleteMany: {
                    args: Prisma.FeeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FeeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>[];
                };
                upsert: {
                    args: Prisma.FeeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeePayload>;
                };
                aggregate: {
                    args: Prisma.FeeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFee>;
                };
                groupBy: {
                    args: Prisma.FeeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeeCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly avatar: "avatar";
    readonly role: "role";
    readonly walletAddress: "walletAddress";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DealScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly entityName: "entityName";
    readonly status: "status";
    readonly type: "type";
    readonly productType: "productType";
    readonly managementFee: "managementFee";
    readonly carry: "carry";
    readonly targetRaise: "targetRaise";
    readonly minimumInvestment: "minimumInvestment";
    readonly totalSigned: "totalSigned";
    readonly totalWired: "totalWired";
    readonly investorCount: "investorCount";
    readonly estimatedClosingDate: "estimatedClosingDate";
    readonly offeringType: "offeringType";
    readonly memo: "memo";
    readonly pitchDeckUrl: "pitchDeckUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly fundManagerId: "fundManagerId";
    readonly assetId: "assetId";
};
export type DealScalarFieldEnum = (typeof DealScalarFieldEnum)[keyof typeof DealScalarFieldEnum];
export declare const InvestmentScalarFieldEnum: {
    readonly id: "id";
    readonly dealId: "dealId";
    readonly dealName: "dealName";
    readonly investorId: "investorId";
    readonly investorName: "investorName";
    readonly investorEmail: "investorEmail";
    readonly investorType: "investorType";
    readonly status: "status";
    readonly kycStatus: "kycStatus";
    readonly subscriptionAmount: "subscriptionAmount";
    readonly capitalWired: "capitalWired";
    readonly managementFee: "managementFee";
    readonly carry: "carry";
    readonly createdAt: "createdAt";
    readonly signedAt: "signedAt";
};
export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum];
export declare const AssetScalarFieldEnum: {
    readonly id: "id";
    readonly legalName: "legalName";
    readonly type: "type";
    readonly industry: "industry";
    readonly location: "location";
    readonly securityType: "securityType";
    readonly totalShares: "totalShares";
    readonly sharePrice: "sharePrice";
    readonly filesCount: "filesCount";
    readonly createdAt: "createdAt";
};
export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum];
export declare const EntityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly structure: "structure";
    readonly masterEntityId: "masterEntityId";
    readonly masterEntityName: "masterEntityName";
    readonly state: "state";
    readonly ein: "ein";
    readonly address: "address";
    readonly registeredAgent: "registeredAgent";
    readonly formationDate: "formationDate";
    readonly createdAt: "createdAt";
};
export type EntityScalarFieldEnum = (typeof EntityScalarFieldEnum)[keyof typeof EntityScalarFieldEnum];
export declare const IdentityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly email: "email";
    readonly phone: "phone";
    readonly accreditationStatus: "accreditationStatus";
    readonly kycStatus: "kycStatus";
    readonly createdAt: "createdAt";
};
export type IdentityScalarFieldEnum = (typeof IdentityScalarFieldEnum)[keyof typeof IdentityScalarFieldEnum];
export declare const LedgerEntryScalarFieldEnum: {
    readonly id: "id";
    readonly dealId: "dealId";
    readonly dealName: "dealName";
    readonly type: "type";
    readonly description: "description";
    readonly amount: "amount";
    readonly status: "status";
    readonly date: "date";
    readonly createdAt: "createdAt";
};
export type LedgerEntryScalarFieldEnum = (typeof LedgerEntryScalarFieldEnum)[keyof typeof LedgerEntryScalarFieldEnum];
export declare const FeeScalarFieldEnum: {
    readonly id: "id";
    readonly dealId: "dealId";
    readonly dealName: "dealName";
    readonly type: "type";
    readonly description: "description";
    readonly amount: "amount";
    readonly status: "status";
    readonly dueDate: "dueDate";
    readonly paidDate: "paidDate";
    readonly createdAt: "createdAt";
};
export type FeeScalarFieldEnum = (typeof FeeScalarFieldEnum)[keyof typeof FeeScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    deal?: Prisma.DealOmit;
    investment?: Prisma.InvestmentOmit;
    asset?: Prisma.AssetOmit;
    entity?: Prisma.EntityOmit;
    identity?: Prisma.IdentityOmit;
    ledgerEntry?: Prisma.LedgerEntryOmit;
    fee?: Prisma.FeeOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
