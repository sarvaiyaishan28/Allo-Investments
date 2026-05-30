import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IdentityModel = runtime.Types.Result.DefaultSelection<Prisma.$IdentityPayload>;
export type AggregateIdentity = {
    _count: IdentityCountAggregateOutputType | null;
    _min: IdentityMinAggregateOutputType | null;
    _max: IdentityMaxAggregateOutputType | null;
};
export type IdentityMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    email: string | null;
    phone: string | null;
    accreditationStatus: string | null;
    kycStatus: string | null;
    createdAt: Date | null;
};
export type IdentityMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    email: string | null;
    phone: string | null;
    accreditationStatus: string | null;
    kycStatus: string | null;
    createdAt: Date | null;
};
export type IdentityCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    email: number;
    phone: number;
    accreditationStatus: number;
    kycStatus: number;
    createdAt: number;
    _all: number;
};
export type IdentityMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    email?: true;
    phone?: true;
    accreditationStatus?: true;
    kycStatus?: true;
    createdAt?: true;
};
export type IdentityMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    email?: true;
    phone?: true;
    accreditationStatus?: true;
    kycStatus?: true;
    createdAt?: true;
};
export type IdentityCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    email?: true;
    phone?: true;
    accreditationStatus?: true;
    kycStatus?: true;
    createdAt?: true;
    _all?: true;
};
export type IdentityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdentityWhereInput;
    orderBy?: Prisma.IdentityOrderByWithRelationInput | Prisma.IdentityOrderByWithRelationInput[];
    cursor?: Prisma.IdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IdentityCountAggregateInputType;
    _min?: IdentityMinAggregateInputType;
    _max?: IdentityMaxAggregateInputType;
};
export type GetIdentityAggregateType<T extends IdentityAggregateArgs> = {
    [P in keyof T & keyof AggregateIdentity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIdentity[P]> : Prisma.GetScalarType<T[P], AggregateIdentity[P]>;
};
export type IdentityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdentityWhereInput;
    orderBy?: Prisma.IdentityOrderByWithAggregationInput | Prisma.IdentityOrderByWithAggregationInput[];
    by: Prisma.IdentityScalarFieldEnum[] | Prisma.IdentityScalarFieldEnum;
    having?: Prisma.IdentityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IdentityCountAggregateInputType | true;
    _min?: IdentityMinAggregateInputType;
    _max?: IdentityMaxAggregateInputType;
};
export type IdentityGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    email: string;
    phone: string | null;
    accreditationStatus: string;
    kycStatus: string;
    createdAt: Date;
    _count: IdentityCountAggregateOutputType | null;
    _min: IdentityMinAggregateOutputType | null;
    _max: IdentityMaxAggregateOutputType | null;
};
export type GetIdentityGroupByPayload<T extends IdentityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IdentityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IdentityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IdentityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IdentityGroupByOutputType[P]>;
}>>;
export type IdentityWhereInput = {
    AND?: Prisma.IdentityWhereInput | Prisma.IdentityWhereInput[];
    OR?: Prisma.IdentityWhereInput[];
    NOT?: Prisma.IdentityWhereInput | Prisma.IdentityWhereInput[];
    id?: Prisma.StringFilter<"Identity"> | string;
    name?: Prisma.StringFilter<"Identity"> | string;
    type?: Prisma.StringFilter<"Identity"> | string;
    email?: Prisma.StringFilter<"Identity"> | string;
    phone?: Prisma.StringNullableFilter<"Identity"> | string | null;
    accreditationStatus?: Prisma.StringFilter<"Identity"> | string;
    kycStatus?: Prisma.StringFilter<"Identity"> | string;
    createdAt?: Prisma.DateTimeFilter<"Identity"> | Date | string;
};
export type IdentityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    accreditationStatus?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IdentityWhereInput | Prisma.IdentityWhereInput[];
    OR?: Prisma.IdentityWhereInput[];
    NOT?: Prisma.IdentityWhereInput | Prisma.IdentityWhereInput[];
    name?: Prisma.StringFilter<"Identity"> | string;
    type?: Prisma.StringFilter<"Identity"> | string;
    email?: Prisma.StringFilter<"Identity"> | string;
    phone?: Prisma.StringNullableFilter<"Identity"> | string | null;
    accreditationStatus?: Prisma.StringFilter<"Identity"> | string;
    kycStatus?: Prisma.StringFilter<"Identity"> | string;
    createdAt?: Prisma.DateTimeFilter<"Identity"> | Date | string;
}, "id">;
export type IdentityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    accreditationStatus?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IdentityCountOrderByAggregateInput;
    _max?: Prisma.IdentityMaxOrderByAggregateInput;
    _min?: Prisma.IdentityMinOrderByAggregateInput;
};
export type IdentityScalarWhereWithAggregatesInput = {
    AND?: Prisma.IdentityScalarWhereWithAggregatesInput | Prisma.IdentityScalarWhereWithAggregatesInput[];
    OR?: Prisma.IdentityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IdentityScalarWhereWithAggregatesInput | Prisma.IdentityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Identity"> | string | null;
    accreditationStatus?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    kycStatus?: Prisma.StringWithAggregatesFilter<"Identity"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Identity"> | Date | string;
};
export type IdentityCreateInput = {
    id?: string;
    name: string;
    type: string;
    email: string;
    phone?: string | null;
    accreditationStatus: string;
    kycStatus: string;
    createdAt?: Date | string;
};
export type IdentityUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    email: string;
    phone?: string | null;
    accreditationStatus: string;
    kycStatus: string;
    createdAt?: Date | string;
};
export type IdentityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accreditationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdentityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accreditationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdentityCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    email: string;
    phone?: string | null;
    accreditationStatus: string;
    kycStatus: string;
    createdAt?: Date | string;
};
export type IdentityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accreditationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdentityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accreditationStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdentityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    accreditationStatus?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdentityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    accreditationStatus?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdentityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    accreditationStatus?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdentitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    email?: boolean;
    phone?: boolean;
    accreditationStatus?: boolean;
    kycStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["identity"]>;
export type IdentitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    email?: boolean;
    phone?: boolean;
    accreditationStatus?: boolean;
    kycStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["identity"]>;
export type IdentitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    email?: boolean;
    phone?: boolean;
    accreditationStatus?: boolean;
    kycStatus?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["identity"]>;
export type IdentitySelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    email?: boolean;
    phone?: boolean;
    accreditationStatus?: boolean;
    kycStatus?: boolean;
    createdAt?: boolean;
};
export type IdentityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "email" | "phone" | "accreditationStatus" | "kycStatus" | "createdAt", ExtArgs["result"]["identity"]>;
export type $IdentityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Identity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: string;
        email: string;
        phone: string | null;
        accreditationStatus: string;
        kycStatus: string;
        createdAt: Date;
    }, ExtArgs["result"]["identity"]>;
    composites: {};
};
export type IdentityGetPayload<S extends boolean | null | undefined | IdentityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IdentityPayload, S>;
export type IdentityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IdentityCountAggregateInputType | true;
};
export interface IdentityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Identity'];
        meta: {
            name: 'Identity';
        };
    };
    findUnique<T extends IdentityFindUniqueArgs>(args: Prisma.SelectSubset<T, IdentityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IdentityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IdentityFindFirstArgs>(args?: Prisma.SelectSubset<T, IdentityFindFirstArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IdentityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IdentityFindManyArgs>(args?: Prisma.SelectSubset<T, IdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IdentityCreateArgs>(args: Prisma.SelectSubset<T, IdentityCreateArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IdentityCreateManyArgs>(args?: Prisma.SelectSubset<T, IdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IdentityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IdentityDeleteArgs>(args: Prisma.SelectSubset<T, IdentityDeleteArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IdentityUpdateArgs>(args: Prisma.SelectSubset<T, IdentityUpdateArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IdentityDeleteManyArgs>(args?: Prisma.SelectSubset<T, IdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IdentityUpdateManyArgs>(args: Prisma.SelectSubset<T, IdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IdentityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IdentityUpsertArgs>(args: Prisma.SelectSubset<T, IdentityUpsertArgs<ExtArgs>>): Prisma.Prisma__IdentityClient<runtime.Types.Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IdentityCountArgs>(args?: Prisma.Subset<T, IdentityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IdentityCountAggregateOutputType> : number>;
    aggregate<T extends IdentityAggregateArgs>(args: Prisma.Subset<T, IdentityAggregateArgs>): Prisma.PrismaPromise<GetIdentityAggregateType<T>>;
    groupBy<T extends IdentityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IdentityGroupByArgs['orderBy'];
    } : {
        orderBy?: IdentityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IdentityFieldRefs;
}
export interface Prisma__IdentityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IdentityFieldRefs {
    readonly id: Prisma.FieldRef<"Identity", 'String'>;
    readonly name: Prisma.FieldRef<"Identity", 'String'>;
    readonly type: Prisma.FieldRef<"Identity", 'String'>;
    readonly email: Prisma.FieldRef<"Identity", 'String'>;
    readonly phone: Prisma.FieldRef<"Identity", 'String'>;
    readonly accreditationStatus: Prisma.FieldRef<"Identity", 'String'>;
    readonly kycStatus: Prisma.FieldRef<"Identity", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Identity", 'DateTime'>;
}
export type IdentityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where: Prisma.IdentityWhereUniqueInput;
};
export type IdentityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where: Prisma.IdentityWhereUniqueInput;
};
export type IdentityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where?: Prisma.IdentityWhereInput;
    orderBy?: Prisma.IdentityOrderByWithRelationInput | Prisma.IdentityOrderByWithRelationInput[];
    cursor?: Prisma.IdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentityScalarFieldEnum | Prisma.IdentityScalarFieldEnum[];
};
export type IdentityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where?: Prisma.IdentityWhereInput;
    orderBy?: Prisma.IdentityOrderByWithRelationInput | Prisma.IdentityOrderByWithRelationInput[];
    cursor?: Prisma.IdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentityScalarFieldEnum | Prisma.IdentityScalarFieldEnum[];
};
export type IdentityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where?: Prisma.IdentityWhereInput;
    orderBy?: Prisma.IdentityOrderByWithRelationInput | Prisma.IdentityOrderByWithRelationInput[];
    cursor?: Prisma.IdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdentityScalarFieldEnum | Prisma.IdentityScalarFieldEnum[];
};
export type IdentityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdentityCreateInput, Prisma.IdentityUncheckedCreateInput>;
};
export type IdentityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IdentityCreateManyInput | Prisma.IdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdentityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    data: Prisma.IdentityCreateManyInput | Prisma.IdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdentityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdentityUpdateInput, Prisma.IdentityUncheckedUpdateInput>;
    where: Prisma.IdentityWhereUniqueInput;
};
export type IdentityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IdentityUpdateManyMutationInput, Prisma.IdentityUncheckedUpdateManyInput>;
    where?: Prisma.IdentityWhereInput;
    limit?: number;
};
export type IdentityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdentityUpdateManyMutationInput, Prisma.IdentityUncheckedUpdateManyInput>;
    where?: Prisma.IdentityWhereInput;
    limit?: number;
};
export type IdentityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where: Prisma.IdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdentityCreateInput, Prisma.IdentityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IdentityUpdateInput, Prisma.IdentityUncheckedUpdateInput>;
};
export type IdentityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
    where: Prisma.IdentityWhereUniqueInput;
};
export type IdentityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdentityWhereInput;
    limit?: number;
};
export type IdentityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdentitySelect<ExtArgs> | null;
    omit?: Prisma.IdentityOmit<ExtArgs> | null;
};
