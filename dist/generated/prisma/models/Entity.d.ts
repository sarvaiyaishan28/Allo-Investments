import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EntityModel = runtime.Types.Result.DefaultSelection<Prisma.$EntityPayload>;
export type AggregateEntity = {
    _count: EntityCountAggregateOutputType | null;
    _min: EntityMinAggregateOutputType | null;
    _max: EntityMaxAggregateOutputType | null;
};
export type EntityMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    structure: string | null;
    masterEntityId: string | null;
    masterEntityName: string | null;
    state: string | null;
    ein: string | null;
    address: string | null;
    registeredAgent: string | null;
    formationDate: Date | null;
    createdAt: Date | null;
};
export type EntityMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    structure: string | null;
    masterEntityId: string | null;
    masterEntityName: string | null;
    state: string | null;
    ein: string | null;
    address: string | null;
    registeredAgent: string | null;
    formationDate: Date | null;
    createdAt: Date | null;
};
export type EntityCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    structure: number;
    masterEntityId: number;
    masterEntityName: number;
    state: number;
    ein: number;
    address: number;
    registeredAgent: number;
    formationDate: number;
    createdAt: number;
    _all: number;
};
export type EntityMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    structure?: true;
    masterEntityId?: true;
    masterEntityName?: true;
    state?: true;
    ein?: true;
    address?: true;
    registeredAgent?: true;
    formationDate?: true;
    createdAt?: true;
};
export type EntityMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    structure?: true;
    masterEntityId?: true;
    masterEntityName?: true;
    state?: true;
    ein?: true;
    address?: true;
    registeredAgent?: true;
    formationDate?: true;
    createdAt?: true;
};
export type EntityCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    structure?: true;
    masterEntityId?: true;
    masterEntityName?: true;
    state?: true;
    ein?: true;
    address?: true;
    registeredAgent?: true;
    formationDate?: true;
    createdAt?: true;
    _all?: true;
};
export type EntityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntityWhereInput;
    orderBy?: Prisma.EntityOrderByWithRelationInput | Prisma.EntityOrderByWithRelationInput[];
    cursor?: Prisma.EntityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EntityCountAggregateInputType;
    _min?: EntityMinAggregateInputType;
    _max?: EntityMaxAggregateInputType;
};
export type GetEntityAggregateType<T extends EntityAggregateArgs> = {
    [P in keyof T & keyof AggregateEntity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEntity[P]> : Prisma.GetScalarType<T[P], AggregateEntity[P]>;
};
export type EntityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntityWhereInput;
    orderBy?: Prisma.EntityOrderByWithAggregationInput | Prisma.EntityOrderByWithAggregationInput[];
    by: Prisma.EntityScalarFieldEnum[] | Prisma.EntityScalarFieldEnum;
    having?: Prisma.EntityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EntityCountAggregateInputType | true;
    _min?: EntityMinAggregateInputType;
    _max?: EntityMaxAggregateInputType;
};
export type EntityGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    structure: string;
    masterEntityId: string | null;
    masterEntityName: string | null;
    state: string;
    ein: string | null;
    address: string;
    registeredAgent: string | null;
    formationDate: Date | null;
    createdAt: Date;
    _count: EntityCountAggregateOutputType | null;
    _min: EntityMinAggregateOutputType | null;
    _max: EntityMaxAggregateOutputType | null;
};
export type GetEntityGroupByPayload<T extends EntityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EntityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EntityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EntityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EntityGroupByOutputType[P]>;
}>>;
export type EntityWhereInput = {
    AND?: Prisma.EntityWhereInput | Prisma.EntityWhereInput[];
    OR?: Prisma.EntityWhereInput[];
    NOT?: Prisma.EntityWhereInput | Prisma.EntityWhereInput[];
    id?: Prisma.StringFilter<"Entity"> | string;
    name?: Prisma.StringFilter<"Entity"> | string;
    type?: Prisma.StringFilter<"Entity"> | string;
    structure?: Prisma.StringFilter<"Entity"> | string;
    masterEntityId?: Prisma.StringNullableFilter<"Entity"> | string | null;
    masterEntityName?: Prisma.StringNullableFilter<"Entity"> | string | null;
    state?: Prisma.StringFilter<"Entity"> | string;
    ein?: Prisma.StringNullableFilter<"Entity"> | string | null;
    address?: Prisma.StringFilter<"Entity"> | string;
    registeredAgent?: Prisma.StringNullableFilter<"Entity"> | string | null;
    formationDate?: Prisma.DateTimeNullableFilter<"Entity"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Entity"> | Date | string;
};
export type EntityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    structure?: Prisma.SortOrder;
    masterEntityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    masterEntityName?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrder;
    ein?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    registeredAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    formationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EntityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EntityWhereInput | Prisma.EntityWhereInput[];
    OR?: Prisma.EntityWhereInput[];
    NOT?: Prisma.EntityWhereInput | Prisma.EntityWhereInput[];
    name?: Prisma.StringFilter<"Entity"> | string;
    type?: Prisma.StringFilter<"Entity"> | string;
    structure?: Prisma.StringFilter<"Entity"> | string;
    masterEntityId?: Prisma.StringNullableFilter<"Entity"> | string | null;
    masterEntityName?: Prisma.StringNullableFilter<"Entity"> | string | null;
    state?: Prisma.StringFilter<"Entity"> | string;
    ein?: Prisma.StringNullableFilter<"Entity"> | string | null;
    address?: Prisma.StringFilter<"Entity"> | string;
    registeredAgent?: Prisma.StringNullableFilter<"Entity"> | string | null;
    formationDate?: Prisma.DateTimeNullableFilter<"Entity"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Entity"> | Date | string;
}, "id">;
export type EntityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    structure?: Prisma.SortOrder;
    masterEntityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    masterEntityName?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrder;
    ein?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    registeredAgent?: Prisma.SortOrderInput | Prisma.SortOrder;
    formationDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EntityCountOrderByAggregateInput;
    _max?: Prisma.EntityMaxOrderByAggregateInput;
    _min?: Prisma.EntityMinOrderByAggregateInput;
};
export type EntityScalarWhereWithAggregatesInput = {
    AND?: Prisma.EntityScalarWhereWithAggregatesInput | Prisma.EntityScalarWhereWithAggregatesInput[];
    OR?: Prisma.EntityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EntityScalarWhereWithAggregatesInput | Prisma.EntityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    structure?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    masterEntityId?: Prisma.StringNullableWithAggregatesFilter<"Entity"> | string | null;
    masterEntityName?: Prisma.StringNullableWithAggregatesFilter<"Entity"> | string | null;
    state?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    ein?: Prisma.StringNullableWithAggregatesFilter<"Entity"> | string | null;
    address?: Prisma.StringWithAggregatesFilter<"Entity"> | string;
    registeredAgent?: Prisma.StringNullableWithAggregatesFilter<"Entity"> | string | null;
    formationDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Entity"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Entity"> | Date | string;
};
export type EntityCreateInput = {
    id?: string;
    name: string;
    type: string;
    structure: string;
    masterEntityId?: string | null;
    masterEntityName?: string | null;
    state: string;
    ein?: string | null;
    address: string;
    registeredAgent?: string | null;
    formationDate?: Date | string | null;
    createdAt?: Date | string;
};
export type EntityUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    structure: string;
    masterEntityId?: string | null;
    masterEntityName?: string | null;
    state: string;
    ein?: string | null;
    address: string;
    registeredAgent?: string | null;
    formationDate?: Date | string | null;
    createdAt?: Date | string;
};
export type EntityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    structure?: Prisma.StringFieldUpdateOperationsInput | string;
    masterEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masterEntityName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    ein?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EntityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    structure?: Prisma.StringFieldUpdateOperationsInput | string;
    masterEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masterEntityName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    ein?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EntityCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    structure: string;
    masterEntityId?: string | null;
    masterEntityName?: string | null;
    state: string;
    ein?: string | null;
    address: string;
    registeredAgent?: string | null;
    formationDate?: Date | string | null;
    createdAt?: Date | string;
};
export type EntityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    structure?: Prisma.StringFieldUpdateOperationsInput | string;
    masterEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masterEntityName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    ein?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EntityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    structure?: Prisma.StringFieldUpdateOperationsInput | string;
    masterEntityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masterEntityName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    ein?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredAgent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formationDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EntityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    structure?: Prisma.SortOrder;
    masterEntityId?: Prisma.SortOrder;
    masterEntityName?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    ein?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    registeredAgent?: Prisma.SortOrder;
    formationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EntityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    structure?: Prisma.SortOrder;
    masterEntityId?: Prisma.SortOrder;
    masterEntityName?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    ein?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    registeredAgent?: Prisma.SortOrder;
    formationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EntityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    structure?: Prisma.SortOrder;
    masterEntityId?: Prisma.SortOrder;
    masterEntityName?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    ein?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    registeredAgent?: Prisma.SortOrder;
    formationDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EntitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    structure?: boolean;
    masterEntityId?: boolean;
    masterEntityName?: boolean;
    state?: boolean;
    ein?: boolean;
    address?: boolean;
    registeredAgent?: boolean;
    formationDate?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["entity"]>;
export type EntitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    structure?: boolean;
    masterEntityId?: boolean;
    masterEntityName?: boolean;
    state?: boolean;
    ein?: boolean;
    address?: boolean;
    registeredAgent?: boolean;
    formationDate?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["entity"]>;
export type EntitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    structure?: boolean;
    masterEntityId?: boolean;
    masterEntityName?: boolean;
    state?: boolean;
    ein?: boolean;
    address?: boolean;
    registeredAgent?: boolean;
    formationDate?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["entity"]>;
export type EntitySelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    structure?: boolean;
    masterEntityId?: boolean;
    masterEntityName?: boolean;
    state?: boolean;
    ein?: boolean;
    address?: boolean;
    registeredAgent?: boolean;
    formationDate?: boolean;
    createdAt?: boolean;
};
export type EntityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "structure" | "masterEntityId" | "masterEntityName" | "state" | "ein" | "address" | "registeredAgent" | "formationDate" | "createdAt", ExtArgs["result"]["entity"]>;
export type $EntityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Entity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: string;
        structure: string;
        masterEntityId: string | null;
        masterEntityName: string | null;
        state: string;
        ein: string | null;
        address: string;
        registeredAgent: string | null;
        formationDate: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["entity"]>;
    composites: {};
};
export type EntityGetPayload<S extends boolean | null | undefined | EntityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EntityPayload, S>;
export type EntityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EntityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EntityCountAggregateInputType | true;
};
export interface EntityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Entity'];
        meta: {
            name: 'Entity';
        };
    };
    findUnique<T extends EntityFindUniqueArgs>(args: Prisma.SelectSubset<T, EntityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EntityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EntityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EntityFindFirstArgs>(args?: Prisma.SelectSubset<T, EntityFindFirstArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EntityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EntityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EntityFindManyArgs>(args?: Prisma.SelectSubset<T, EntityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EntityCreateArgs>(args: Prisma.SelectSubset<T, EntityCreateArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EntityCreateManyArgs>(args?: Prisma.SelectSubset<T, EntityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EntityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EntityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EntityDeleteArgs>(args: Prisma.SelectSubset<T, EntityDeleteArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EntityUpdateArgs>(args: Prisma.SelectSubset<T, EntityUpdateArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EntityDeleteManyArgs>(args?: Prisma.SelectSubset<T, EntityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EntityUpdateManyArgs>(args: Prisma.SelectSubset<T, EntityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EntityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EntityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EntityUpsertArgs>(args: Prisma.SelectSubset<T, EntityUpsertArgs<ExtArgs>>): Prisma.Prisma__EntityClient<runtime.Types.Result.GetResult<Prisma.$EntityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EntityCountArgs>(args?: Prisma.Subset<T, EntityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EntityCountAggregateOutputType> : number>;
    aggregate<T extends EntityAggregateArgs>(args: Prisma.Subset<T, EntityAggregateArgs>): Prisma.PrismaPromise<GetEntityAggregateType<T>>;
    groupBy<T extends EntityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EntityGroupByArgs['orderBy'];
    } : {
        orderBy?: EntityGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EntityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EntityFieldRefs;
}
export interface Prisma__EntityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EntityFieldRefs {
    readonly id: Prisma.FieldRef<"Entity", 'String'>;
    readonly name: Prisma.FieldRef<"Entity", 'String'>;
    readonly type: Prisma.FieldRef<"Entity", 'String'>;
    readonly structure: Prisma.FieldRef<"Entity", 'String'>;
    readonly masterEntityId: Prisma.FieldRef<"Entity", 'String'>;
    readonly masterEntityName: Prisma.FieldRef<"Entity", 'String'>;
    readonly state: Prisma.FieldRef<"Entity", 'String'>;
    readonly ein: Prisma.FieldRef<"Entity", 'String'>;
    readonly address: Prisma.FieldRef<"Entity", 'String'>;
    readonly registeredAgent: Prisma.FieldRef<"Entity", 'String'>;
    readonly formationDate: Prisma.FieldRef<"Entity", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Entity", 'DateTime'>;
}
export type EntityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where: Prisma.EntityWhereUniqueInput;
};
export type EntityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where: Prisma.EntityWhereUniqueInput;
};
export type EntityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where?: Prisma.EntityWhereInput;
    orderBy?: Prisma.EntityOrderByWithRelationInput | Prisma.EntityOrderByWithRelationInput[];
    cursor?: Prisma.EntityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntityScalarFieldEnum | Prisma.EntityScalarFieldEnum[];
};
export type EntityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where?: Prisma.EntityWhereInput;
    orderBy?: Prisma.EntityOrderByWithRelationInput | Prisma.EntityOrderByWithRelationInput[];
    cursor?: Prisma.EntityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntityScalarFieldEnum | Prisma.EntityScalarFieldEnum[];
};
export type EntityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where?: Prisma.EntityWhereInput;
    orderBy?: Prisma.EntityOrderByWithRelationInput | Prisma.EntityOrderByWithRelationInput[];
    cursor?: Prisma.EntityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EntityScalarFieldEnum | Prisma.EntityScalarFieldEnum[];
};
export type EntityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntityCreateInput, Prisma.EntityUncheckedCreateInput>;
};
export type EntityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EntityCreateManyInput | Prisma.EntityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EntityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    data: Prisma.EntityCreateManyInput | Prisma.EntityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EntityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntityUpdateInput, Prisma.EntityUncheckedUpdateInput>;
    where: Prisma.EntityWhereUniqueInput;
};
export type EntityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EntityUpdateManyMutationInput, Prisma.EntityUncheckedUpdateManyInput>;
    where?: Prisma.EntityWhereInput;
    limit?: number;
};
export type EntityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EntityUpdateManyMutationInput, Prisma.EntityUncheckedUpdateManyInput>;
    where?: Prisma.EntityWhereInput;
    limit?: number;
};
export type EntityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where: Prisma.EntityWhereUniqueInput;
    create: Prisma.XOR<Prisma.EntityCreateInput, Prisma.EntityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EntityUpdateInput, Prisma.EntityUncheckedUpdateInput>;
};
export type EntityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
    where: Prisma.EntityWhereUniqueInput;
};
export type EntityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EntityWhereInput;
    limit?: number;
};
export type EntityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EntitySelect<ExtArgs> | null;
    omit?: Prisma.EntityOmit<ExtArgs> | null;
};
