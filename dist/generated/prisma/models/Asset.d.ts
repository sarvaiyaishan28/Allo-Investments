import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>;
export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type AssetAvgAggregateOutputType = {
    totalShares: number | null;
    sharePrice: number | null;
    filesCount: number | null;
};
export type AssetSumAggregateOutputType = {
    totalShares: number | null;
    sharePrice: number | null;
    filesCount: number | null;
};
export type AssetMinAggregateOutputType = {
    id: string | null;
    legalName: string | null;
    type: string | null;
    industry: string | null;
    location: string | null;
    securityType: string | null;
    totalShares: number | null;
    sharePrice: number | null;
    filesCount: number | null;
    createdAt: Date | null;
};
export type AssetMaxAggregateOutputType = {
    id: string | null;
    legalName: string | null;
    type: string | null;
    industry: string | null;
    location: string | null;
    securityType: string | null;
    totalShares: number | null;
    sharePrice: number | null;
    filesCount: number | null;
    createdAt: Date | null;
};
export type AssetCountAggregateOutputType = {
    id: number;
    legalName: number;
    type: number;
    industry: number;
    location: number;
    securityType: number;
    totalShares: number;
    sharePrice: number;
    filesCount: number;
    createdAt: number;
    _all: number;
};
export type AssetAvgAggregateInputType = {
    totalShares?: true;
    sharePrice?: true;
    filesCount?: true;
};
export type AssetSumAggregateInputType = {
    totalShares?: true;
    sharePrice?: true;
    filesCount?: true;
};
export type AssetMinAggregateInputType = {
    id?: true;
    legalName?: true;
    type?: true;
    industry?: true;
    location?: true;
    securityType?: true;
    totalShares?: true;
    sharePrice?: true;
    filesCount?: true;
    createdAt?: true;
};
export type AssetMaxAggregateInputType = {
    id?: true;
    legalName?: true;
    type?: true;
    industry?: true;
    location?: true;
    securityType?: true;
    totalShares?: true;
    sharePrice?: true;
    filesCount?: true;
    createdAt?: true;
};
export type AssetCountAggregateInputType = {
    id?: true;
    legalName?: true;
    type?: true;
    industry?: true;
    location?: true;
    securityType?: true;
    totalShares?: true;
    sharePrice?: true;
    filesCount?: true;
    createdAt?: true;
    _all?: true;
};
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AssetCountAggregateInputType;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
    [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsset[P]> : Prisma.GetScalarType<T[P], AggregateAsset[P]>;
};
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[];
    by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum;
    having?: Prisma.AssetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AssetCountAggregateInputType | true;
    _avg?: AssetAvgAggregateInputType;
    _sum?: AssetSumAggregateInputType;
    _min?: AssetMinAggregateInputType;
    _max?: AssetMaxAggregateInputType;
};
export type AssetGroupByOutputType = {
    id: string;
    legalName: string;
    type: string;
    industry: string | null;
    location: string;
    securityType: string;
    totalShares: number | null;
    sharePrice: number | null;
    filesCount: number;
    createdAt: Date;
    _count: AssetCountAggregateOutputType | null;
    _avg: AssetAvgAggregateOutputType | null;
    _sum: AssetSumAggregateOutputType | null;
    _min: AssetMinAggregateOutputType | null;
    _max: AssetMaxAggregateOutputType | null;
};
export type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>;
}>>;
export type AssetWhereInput = {
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    id?: Prisma.StringFilter<"Asset"> | string;
    legalName?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    industry?: Prisma.StringNullableFilter<"Asset"> | string | null;
    location?: Prisma.StringFilter<"Asset"> | string;
    securityType?: Prisma.StringFilter<"Asset"> | string;
    totalShares?: Prisma.FloatNullableFilter<"Asset"> | number | null;
    sharePrice?: Prisma.FloatNullableFilter<"Asset"> | number | null;
    filesCount?: Prisma.IntFilter<"Asset"> | number;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
};
export type AssetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    industry?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrder;
    securityType?: Prisma.SortOrder;
    totalShares?: Prisma.SortOrderInput | Prisma.SortOrder;
    sharePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    OR?: Prisma.AssetWhereInput[];
    NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[];
    legalName?: Prisma.StringFilter<"Asset"> | string;
    type?: Prisma.StringFilter<"Asset"> | string;
    industry?: Prisma.StringNullableFilter<"Asset"> | string | null;
    location?: Prisma.StringFilter<"Asset"> | string;
    securityType?: Prisma.StringFilter<"Asset"> | string;
    totalShares?: Prisma.FloatNullableFilter<"Asset"> | number | null;
    sharePrice?: Prisma.FloatNullableFilter<"Asset"> | number | null;
    filesCount?: Prisma.IntFilter<"Asset"> | number;
    createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string;
}, "id">;
export type AssetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    industry?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrder;
    securityType?: Prisma.SortOrder;
    totalShares?: Prisma.SortOrderInput | Prisma.SortOrder;
    sharePrice?: Prisma.SortOrderInput | Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AssetCountOrderByAggregateInput;
    _avg?: Prisma.AssetAvgOrderByAggregateInput;
    _max?: Prisma.AssetMaxOrderByAggregateInput;
    _min?: Prisma.AssetMinOrderByAggregateInput;
    _sum?: Prisma.AssetSumOrderByAggregateInput;
};
export type AssetScalarWhereWithAggregatesInput = {
    AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    OR?: Prisma.AssetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    legalName?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    industry?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null;
    location?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    securityType?: Prisma.StringWithAggregatesFilter<"Asset"> | string;
    totalShares?: Prisma.FloatNullableWithAggregatesFilter<"Asset"> | number | null;
    sharePrice?: Prisma.FloatNullableWithAggregatesFilter<"Asset"> | number | null;
    filesCount?: Prisma.IntWithAggregatesFilter<"Asset"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string;
};
export type AssetCreateInput = {
    id?: string;
    legalName: string;
    type: string;
    industry?: string | null;
    location: string;
    securityType: string;
    totalShares?: number | null;
    sharePrice?: number | null;
    filesCount: number;
    createdAt?: Date | string;
};
export type AssetUncheckedCreateInput = {
    id?: string;
    legalName: string;
    type: string;
    industry?: string | null;
    location: string;
    securityType: string;
    totalShares?: number | null;
    sharePrice?: number | null;
    filesCount: number;
    createdAt?: Date | string;
};
export type AssetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    securityType?: Prisma.StringFieldUpdateOperationsInput | string;
    totalShares?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sharePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    filesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    securityType?: Prisma.StringFieldUpdateOperationsInput | string;
    totalShares?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sharePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    filesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCreateManyInput = {
    id?: string;
    legalName: string;
    type: string;
    industry?: string | null;
    location: string;
    securityType: string;
    totalShares?: number | null;
    sharePrice?: number | null;
    filesCount: number;
    createdAt?: Date | string;
};
export type AssetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    securityType?: Prisma.StringFieldUpdateOperationsInput | string;
    totalShares?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sharePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    filesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    legalName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    industry?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    securityType?: Prisma.StringFieldUpdateOperationsInput | string;
    totalShares?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    sharePrice?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    filesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AssetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    securityType?: Prisma.SortOrder;
    totalShares?: Prisma.SortOrder;
    sharePrice?: Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetAvgOrderByAggregateInput = {
    totalShares?: Prisma.SortOrder;
    sharePrice?: Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
};
export type AssetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    securityType?: Prisma.SortOrder;
    totalShares?: Prisma.SortOrder;
    sharePrice?: Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    legalName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    industry?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    securityType?: Prisma.SortOrder;
    totalShares?: Prisma.SortOrder;
    sharePrice?: Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AssetSumOrderByAggregateInput = {
    totalShares?: Prisma.SortOrder;
    sharePrice?: Prisma.SortOrder;
    filesCount?: Prisma.SortOrder;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    legalName?: boolean;
    type?: boolean;
    industry?: boolean;
    location?: boolean;
    securityType?: boolean;
    totalShares?: boolean;
    sharePrice?: boolean;
    filesCount?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    legalName?: boolean;
    type?: boolean;
    industry?: boolean;
    location?: boolean;
    securityType?: boolean;
    totalShares?: boolean;
    sharePrice?: boolean;
    filesCount?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    legalName?: boolean;
    type?: boolean;
    industry?: boolean;
    location?: boolean;
    securityType?: boolean;
    totalShares?: boolean;
    sharePrice?: boolean;
    filesCount?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["asset"]>;
export type AssetSelectScalar = {
    id?: boolean;
    legalName?: boolean;
    type?: boolean;
    industry?: boolean;
    location?: boolean;
    securityType?: boolean;
    totalShares?: boolean;
    sharePrice?: boolean;
    filesCount?: boolean;
    createdAt?: boolean;
};
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "legalName" | "type" | "industry" | "location" | "securityType" | "totalShares" | "sharePrice" | "filesCount" | "createdAt", ExtArgs["result"]["asset"]>;
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Asset";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        legalName: string;
        type: string;
        industry: string | null;
        location: string;
        securityType: string;
        totalShares: number | null;
        sharePrice: number | null;
        filesCount: number;
        createdAt: Date;
    }, ExtArgs["result"]["asset"]>;
    composites: {};
};
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>;
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true;
};
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Asset'];
        meta: {
            name: 'Asset';
        };
    };
    findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AssetCountArgs>(args?: Prisma.Subset<T, AssetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType> : number>;
    aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>;
    groupBy<T extends AssetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AssetGroupByArgs['orderBy'];
    } : {
        orderBy?: AssetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AssetFieldRefs;
}
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AssetFieldRefs {
    readonly id: Prisma.FieldRef<"Asset", 'String'>;
    readonly legalName: Prisma.FieldRef<"Asset", 'String'>;
    readonly type: Prisma.FieldRef<"Asset", 'String'>;
    readonly industry: Prisma.FieldRef<"Asset", 'String'>;
    readonly location: Prisma.FieldRef<"Asset", 'String'>;
    readonly securityType: Prisma.FieldRef<"Asset", 'String'>;
    readonly totalShares: Prisma.FieldRef<"Asset", 'Float'>;
    readonly sharePrice: Prisma.FieldRef<"Asset", 'Float'>;
    readonly filesCount: Prisma.FieldRef<"Asset", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Asset", 'DateTime'>;
}
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where?: Prisma.AssetWhereInput;
    orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
    cursor?: Prisma.AssetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
};
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>;
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
    create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>;
};
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
    where: Prisma.AssetWhereUniqueInput;
};
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AssetWhereInput;
    limit?: number;
};
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AssetSelect<ExtArgs> | null;
    omit?: Prisma.AssetOmit<ExtArgs> | null;
};
