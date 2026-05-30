import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FeeModel = runtime.Types.Result.DefaultSelection<Prisma.$FeePayload>;
export type AggregateFee = {
    _count: FeeCountAggregateOutputType | null;
    _avg: FeeAvgAggregateOutputType | null;
    _sum: FeeSumAggregateOutputType | null;
    _min: FeeMinAggregateOutputType | null;
    _max: FeeMaxAggregateOutputType | null;
};
export type FeeAvgAggregateOutputType = {
    amount: number | null;
};
export type FeeSumAggregateOutputType = {
    amount: number | null;
};
export type FeeMinAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    type: string | null;
    description: string | null;
    amount: number | null;
    status: string | null;
    dueDate: Date | null;
    paidDate: Date | null;
    createdAt: Date | null;
};
export type FeeMaxAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    type: string | null;
    description: string | null;
    amount: number | null;
    status: string | null;
    dueDate: Date | null;
    paidDate: Date | null;
    createdAt: Date | null;
};
export type FeeCountAggregateOutputType = {
    id: number;
    dealId: number;
    dealName: number;
    type: number;
    description: number;
    amount: number;
    status: number;
    dueDate: number;
    paidDate: number;
    createdAt: number;
    _all: number;
};
export type FeeAvgAggregateInputType = {
    amount?: true;
};
export type FeeSumAggregateInputType = {
    amount?: true;
};
export type FeeMinAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    dueDate?: true;
    paidDate?: true;
    createdAt?: true;
};
export type FeeMaxAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    dueDate?: true;
    paidDate?: true;
    createdAt?: true;
};
export type FeeCountAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    dueDate?: true;
    paidDate?: true;
    createdAt?: true;
    _all?: true;
};
export type FeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithRelationInput | Prisma.FeeOrderByWithRelationInput[];
    cursor?: Prisma.FeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeeCountAggregateInputType;
    _avg?: FeeAvgAggregateInputType;
    _sum?: FeeSumAggregateInputType;
    _min?: FeeMinAggregateInputType;
    _max?: FeeMaxAggregateInputType;
};
export type GetFeeAggregateType<T extends FeeAggregateArgs> = {
    [P in keyof T & keyof AggregateFee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFee[P]> : Prisma.GetScalarType<T[P], AggregateFee[P]>;
};
export type FeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithAggregationInput | Prisma.FeeOrderByWithAggregationInput[];
    by: Prisma.FeeScalarFieldEnum[] | Prisma.FeeScalarFieldEnum;
    having?: Prisma.FeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeeCountAggregateInputType | true;
    _avg?: FeeAvgAggregateInputType;
    _sum?: FeeSumAggregateInputType;
    _min?: FeeMinAggregateInputType;
    _max?: FeeMaxAggregateInputType;
};
export type FeeGroupByOutputType = {
    id: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date;
    paidDate: Date | null;
    createdAt: Date;
    _count: FeeCountAggregateOutputType | null;
    _avg: FeeAvgAggregateOutputType | null;
    _sum: FeeSumAggregateOutputType | null;
    _min: FeeMinAggregateOutputType | null;
    _max: FeeMaxAggregateOutputType | null;
};
export type GetFeeGroupByPayload<T extends FeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeeGroupByOutputType[P]>;
}>>;
export type FeeWhereInput = {
    AND?: Prisma.FeeWhereInput | Prisma.FeeWhereInput[];
    OR?: Prisma.FeeWhereInput[];
    NOT?: Prisma.FeeWhereInput | Prisma.FeeWhereInput[];
    id?: Prisma.StringFilter<"Fee"> | string;
    dealId?: Prisma.StringFilter<"Fee"> | string;
    dealName?: Prisma.StringFilter<"Fee"> | string;
    type?: Prisma.StringFilter<"Fee"> | string;
    description?: Prisma.StringFilter<"Fee"> | string;
    amount?: Prisma.FloatFilter<"Fee"> | number;
    status?: Prisma.StringFilter<"Fee"> | string;
    dueDate?: Prisma.DateTimeFilter<"Fee"> | Date | string;
    paidDate?: Prisma.DateTimeNullableFilter<"Fee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Fee"> | Date | string;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
};
export type FeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deal?: Prisma.DealOrderByWithRelationInput;
};
export type FeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FeeWhereInput | Prisma.FeeWhereInput[];
    OR?: Prisma.FeeWhereInput[];
    NOT?: Prisma.FeeWhereInput | Prisma.FeeWhereInput[];
    dealId?: Prisma.StringFilter<"Fee"> | string;
    dealName?: Prisma.StringFilter<"Fee"> | string;
    type?: Prisma.StringFilter<"Fee"> | string;
    description?: Prisma.StringFilter<"Fee"> | string;
    amount?: Prisma.FloatFilter<"Fee"> | number;
    status?: Prisma.StringFilter<"Fee"> | string;
    dueDate?: Prisma.DateTimeFilter<"Fee"> | Date | string;
    paidDate?: Prisma.DateTimeNullableFilter<"Fee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Fee"> | Date | string;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
}, "id">;
export type FeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FeeCountOrderByAggregateInput;
    _avg?: Prisma.FeeAvgOrderByAggregateInput;
    _max?: Prisma.FeeMaxOrderByAggregateInput;
    _min?: Prisma.FeeMinOrderByAggregateInput;
    _sum?: Prisma.FeeSumOrderByAggregateInput;
};
export type FeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeeScalarWhereWithAggregatesInput | Prisma.FeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeeScalarWhereWithAggregatesInput | Prisma.FeeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    dealId?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    dealName?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"Fee"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Fee"> | string;
    dueDate?: Prisma.DateTimeWithAggregatesFilter<"Fee"> | Date | string;
    paidDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Fee"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Fee"> | Date | string;
};
export type FeeCreateInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
    deal: Prisma.DealCreateNestedOneWithoutFeesInput;
};
export type FeeUncheckedCreateInput = {
    id?: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
};
export type FeeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: Prisma.DealUpdateOneRequiredWithoutFeesNestedInput;
};
export type FeeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeCreateManyInput = {
    id?: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
};
export type FeeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeListRelationFilter = {
    every?: Prisma.FeeWhereInput;
    some?: Prisma.FeeWhereInput;
    none?: Prisma.FeeWhereInput;
};
export type FeeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type FeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    paidDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FeeSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type FeeCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput> | Prisma.FeeCreateWithoutDealInput[] | Prisma.FeeUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.FeeCreateOrConnectWithoutDealInput | Prisma.FeeCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.FeeCreateManyDealInputEnvelope;
    connect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
};
export type FeeUncheckedCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput> | Prisma.FeeCreateWithoutDealInput[] | Prisma.FeeUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.FeeCreateOrConnectWithoutDealInput | Prisma.FeeCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.FeeCreateManyDealInputEnvelope;
    connect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
};
export type FeeUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput> | Prisma.FeeCreateWithoutDealInput[] | Prisma.FeeUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.FeeCreateOrConnectWithoutDealInput | Prisma.FeeCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.FeeUpsertWithWhereUniqueWithoutDealInput | Prisma.FeeUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.FeeCreateManyDealInputEnvelope;
    set?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    disconnect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    delete?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    connect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    update?: Prisma.FeeUpdateWithWhereUniqueWithoutDealInput | Prisma.FeeUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.FeeUpdateManyWithWhereWithoutDealInput | Prisma.FeeUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.FeeScalarWhereInput | Prisma.FeeScalarWhereInput[];
};
export type FeeUncheckedUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput> | Prisma.FeeCreateWithoutDealInput[] | Prisma.FeeUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.FeeCreateOrConnectWithoutDealInput | Prisma.FeeCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.FeeUpsertWithWhereUniqueWithoutDealInput | Prisma.FeeUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.FeeCreateManyDealInputEnvelope;
    set?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    disconnect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    delete?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    connect?: Prisma.FeeWhereUniqueInput | Prisma.FeeWhereUniqueInput[];
    update?: Prisma.FeeUpdateWithWhereUniqueWithoutDealInput | Prisma.FeeUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.FeeUpdateManyWithWhereWithoutDealInput | Prisma.FeeUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.FeeScalarWhereInput | Prisma.FeeScalarWhereInput[];
};
export type FeeCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
};
export type FeeUncheckedCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
};
export type FeeCreateOrConnectWithoutDealInput = {
    where: Prisma.FeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput>;
};
export type FeeCreateManyDealInputEnvelope = {
    data: Prisma.FeeCreateManyDealInput | Prisma.FeeCreateManyDealInput[];
    skipDuplicates?: boolean;
};
export type FeeUpsertWithWhereUniqueWithoutDealInput = {
    where: Prisma.FeeWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeeUpdateWithoutDealInput, Prisma.FeeUncheckedUpdateWithoutDealInput>;
    create: Prisma.XOR<Prisma.FeeCreateWithoutDealInput, Prisma.FeeUncheckedCreateWithoutDealInput>;
};
export type FeeUpdateWithWhereUniqueWithoutDealInput = {
    where: Prisma.FeeWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeeUpdateWithoutDealInput, Prisma.FeeUncheckedUpdateWithoutDealInput>;
};
export type FeeUpdateManyWithWhereWithoutDealInput = {
    where: Prisma.FeeScalarWhereInput;
    data: Prisma.XOR<Prisma.FeeUpdateManyMutationInput, Prisma.FeeUncheckedUpdateManyWithoutDealInput>;
};
export type FeeScalarWhereInput = {
    AND?: Prisma.FeeScalarWhereInput | Prisma.FeeScalarWhereInput[];
    OR?: Prisma.FeeScalarWhereInput[];
    NOT?: Prisma.FeeScalarWhereInput | Prisma.FeeScalarWhereInput[];
    id?: Prisma.StringFilter<"Fee"> | string;
    dealId?: Prisma.StringFilter<"Fee"> | string;
    dealName?: Prisma.StringFilter<"Fee"> | string;
    type?: Prisma.StringFilter<"Fee"> | string;
    description?: Prisma.StringFilter<"Fee"> | string;
    amount?: Prisma.FloatFilter<"Fee"> | number;
    status?: Prisma.StringFilter<"Fee"> | string;
    dueDate?: Prisma.DateTimeFilter<"Fee"> | Date | string;
    paidDate?: Prisma.DateTimeNullableFilter<"Fee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Fee"> | Date | string;
};
export type FeeCreateManyDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    dueDate: Date | string;
    paidDate?: Date | string | null;
    createdAt?: Date | string;
};
export type FeeUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeUncheckedUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeUncheckedUpdateManyWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    paidDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paidDate?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fee"]>;
export type FeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paidDate?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fee"]>;
export type FeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paidDate?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fee"]>;
export type FeeSelectScalar = {
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    dueDate?: boolean;
    paidDate?: boolean;
    createdAt?: boolean;
};
export type FeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dealId" | "dealName" | "type" | "description" | "amount" | "status" | "dueDate" | "paidDate" | "createdAt", ExtArgs["result"]["fee"]>;
export type FeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type FeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type FeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type $FeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Fee";
    objects: {
        deal: Prisma.$DealPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dealId: string;
        dealName: string;
        type: string;
        description: string;
        amount: number;
        status: string;
        dueDate: Date;
        paidDate: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["fee"]>;
    composites: {};
};
export type FeeGetPayload<S extends boolean | null | undefined | FeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeePayload, S>;
export type FeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeeCountAggregateInputType | true;
};
export interface FeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Fee'];
        meta: {
            name: 'Fee';
        };
    };
    findUnique<T extends FeeFindUniqueArgs>(args: Prisma.SelectSubset<T, FeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeeFindFirstArgs>(args?: Prisma.SelectSubset<T, FeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeeFindManyArgs>(args?: Prisma.SelectSubset<T, FeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeeCreateArgs>(args: Prisma.SelectSubset<T, FeeCreateArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeeCreateManyArgs>(args?: Prisma.SelectSubset<T, FeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FeeDeleteArgs>(args: Prisma.SelectSubset<T, FeeDeleteArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeeUpdateArgs>(args: Prisma.SelectSubset<T, FeeUpdateArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeeUpdateManyArgs>(args: Prisma.SelectSubset<T, FeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FeeUpsertArgs>(args: Prisma.SelectSubset<T, FeeUpsertArgs<ExtArgs>>): Prisma.Prisma__FeeClient<runtime.Types.Result.GetResult<Prisma.$FeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeeCountArgs>(args?: Prisma.Subset<T, FeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeeCountAggregateOutputType> : number>;
    aggregate<T extends FeeAggregateArgs>(args: Prisma.Subset<T, FeeAggregateArgs>): Prisma.PrismaPromise<GetFeeAggregateType<T>>;
    groupBy<T extends FeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeeGroupByArgs['orderBy'];
    } : {
        orderBy?: FeeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeeFieldRefs;
}
export interface Prisma__FeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deal<T extends Prisma.DealDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DealDefaultArgs<ExtArgs>>): Prisma.Prisma__DealClient<runtime.Types.Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeeFieldRefs {
    readonly id: Prisma.FieldRef<"Fee", 'String'>;
    readonly dealId: Prisma.FieldRef<"Fee", 'String'>;
    readonly dealName: Prisma.FieldRef<"Fee", 'String'>;
    readonly type: Prisma.FieldRef<"Fee", 'String'>;
    readonly description: Prisma.FieldRef<"Fee", 'String'>;
    readonly amount: Prisma.FieldRef<"Fee", 'Float'>;
    readonly status: Prisma.FieldRef<"Fee", 'String'>;
    readonly dueDate: Prisma.FieldRef<"Fee", 'DateTime'>;
    readonly paidDate: Prisma.FieldRef<"Fee", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Fee", 'DateTime'>;
}
export type FeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where: Prisma.FeeWhereUniqueInput;
};
export type FeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where: Prisma.FeeWhereUniqueInput;
};
export type FeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithRelationInput | Prisma.FeeOrderByWithRelationInput[];
    cursor?: Prisma.FeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeScalarFieldEnum | Prisma.FeeScalarFieldEnum[];
};
export type FeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithRelationInput | Prisma.FeeOrderByWithRelationInput[];
    cursor?: Prisma.FeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeScalarFieldEnum | Prisma.FeeScalarFieldEnum[];
};
export type FeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where?: Prisma.FeeWhereInput;
    orderBy?: Prisma.FeeOrderByWithRelationInput | Prisma.FeeOrderByWithRelationInput[];
    cursor?: Prisma.FeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeeScalarFieldEnum | Prisma.FeeScalarFieldEnum[];
};
export type FeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeCreateInput, Prisma.FeeUncheckedCreateInput>;
};
export type FeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeeCreateManyInput | Prisma.FeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    data: Prisma.FeeCreateManyInput | Prisma.FeeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FeeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeUpdateInput, Prisma.FeeUncheckedUpdateInput>;
    where: Prisma.FeeWhereUniqueInput;
};
export type FeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeeUpdateManyMutationInput, Prisma.FeeUncheckedUpdateManyInput>;
    where?: Prisma.FeeWhereInput;
    limit?: number;
};
export type FeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeeUpdateManyMutationInput, Prisma.FeeUncheckedUpdateManyInput>;
    where?: Prisma.FeeWhereInput;
    limit?: number;
    include?: Prisma.FeeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where: Prisma.FeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeeCreateInput, Prisma.FeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeeUpdateInput, Prisma.FeeUncheckedUpdateInput>;
};
export type FeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
    where: Prisma.FeeWhereUniqueInput;
};
export type FeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeeWhereInput;
    limit?: number;
};
export type FeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeeSelect<ExtArgs> | null;
    omit?: Prisma.FeeOmit<ExtArgs> | null;
    include?: Prisma.FeeInclude<ExtArgs> | null;
};
