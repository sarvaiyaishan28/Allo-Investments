import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LedgerEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$LedgerEntryPayload>;
export type AggregateLedgerEntry = {
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
};
export type LedgerEntryAvgAggregateOutputType = {
    amount: number | null;
};
export type LedgerEntrySumAggregateOutputType = {
    amount: number | null;
};
export type LedgerEntryMinAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    type: string | null;
    description: string | null;
    amount: number | null;
    status: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type LedgerEntryMaxAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    type: string | null;
    description: string | null;
    amount: number | null;
    status: string | null;
    date: Date | null;
    createdAt: Date | null;
};
export type LedgerEntryCountAggregateOutputType = {
    id: number;
    dealId: number;
    dealName: number;
    type: number;
    description: number;
    amount: number;
    status: number;
    date: number;
    createdAt: number;
    _all: number;
};
export type LedgerEntryAvgAggregateInputType = {
    amount?: true;
};
export type LedgerEntrySumAggregateInputType = {
    amount?: true;
};
export type LedgerEntryMinAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    date?: true;
    createdAt?: true;
};
export type LedgerEntryMaxAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    date?: true;
    createdAt?: true;
};
export type LedgerEntryCountAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    type?: true;
    description?: true;
    amount?: true;
    status?: true;
    date?: true;
    createdAt?: true;
    _all?: true;
};
export type LedgerEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LedgerEntryCountAggregateInputType;
    _avg?: LedgerEntryAvgAggregateInputType;
    _sum?: LedgerEntrySumAggregateInputType;
    _min?: LedgerEntryMinAggregateInputType;
    _max?: LedgerEntryMaxAggregateInputType;
};
export type GetLedgerEntryAggregateType<T extends LedgerEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateLedgerEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLedgerEntry[P]> : Prisma.GetScalarType<T[P], AggregateLedgerEntry[P]>;
};
export type LedgerEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithAggregationInput | Prisma.LedgerEntryOrderByWithAggregationInput[];
    by: Prisma.LedgerEntryScalarFieldEnum[] | Prisma.LedgerEntryScalarFieldEnum;
    having?: Prisma.LedgerEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LedgerEntryCountAggregateInputType | true;
    _avg?: LedgerEntryAvgAggregateInputType;
    _sum?: LedgerEntrySumAggregateInputType;
    _min?: LedgerEntryMinAggregateInputType;
    _max?: LedgerEntryMaxAggregateInputType;
};
export type LedgerEntryGroupByOutputType = {
    id: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date;
    createdAt: Date;
    _count: LedgerEntryCountAggregateOutputType | null;
    _avg: LedgerEntryAvgAggregateOutputType | null;
    _sum: LedgerEntrySumAggregateOutputType | null;
    _min: LedgerEntryMinAggregateOutputType | null;
    _max: LedgerEntryMaxAggregateOutputType | null;
};
export type GetLedgerEntryGroupByPayload<T extends LedgerEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LedgerEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LedgerEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LedgerEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LedgerEntryGroupByOutputType[P]>;
}>>;
export type LedgerEntryWhereInput = {
    AND?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    OR?: Prisma.LedgerEntryWhereInput[];
    NOT?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    id?: Prisma.StringFilter<"LedgerEntry"> | string;
    dealId?: Prisma.StringFilter<"LedgerEntry"> | string;
    dealName?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.StringFilter<"LedgerEntry"> | string;
    description?: Prisma.StringFilter<"LedgerEntry"> | string;
    amount?: Prisma.FloatFilter<"LedgerEntry"> | number;
    status?: Prisma.StringFilter<"LedgerEntry"> | string;
    date?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
};
export type LedgerEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    deal?: Prisma.DealOrderByWithRelationInput;
};
export type LedgerEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    OR?: Prisma.LedgerEntryWhereInput[];
    NOT?: Prisma.LedgerEntryWhereInput | Prisma.LedgerEntryWhereInput[];
    dealId?: Prisma.StringFilter<"LedgerEntry"> | string;
    dealName?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.StringFilter<"LedgerEntry"> | string;
    description?: Prisma.StringFilter<"LedgerEntry"> | string;
    amount?: Prisma.FloatFilter<"LedgerEntry"> | number;
    status?: Prisma.StringFilter<"LedgerEntry"> | string;
    date?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
}, "id">;
export type LedgerEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LedgerEntryCountOrderByAggregateInput;
    _avg?: Prisma.LedgerEntryAvgOrderByAggregateInput;
    _max?: Prisma.LedgerEntryMaxOrderByAggregateInput;
    _min?: Prisma.LedgerEntryMinOrderByAggregateInput;
    _sum?: Prisma.LedgerEntrySumOrderByAggregateInput;
};
export type LedgerEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.LedgerEntryScalarWhereWithAggregatesInput | Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LedgerEntryScalarWhereWithAggregatesInput | Prisma.LedgerEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    dealId?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    dealName?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    type?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    description?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    amount?: Prisma.FloatWithAggregatesFilter<"LedgerEntry"> | number;
    status?: Prisma.StringWithAggregatesFilter<"LedgerEntry"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LedgerEntry"> | Date | string;
};
export type LedgerEntryCreateInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
    deal: Prisma.DealCreateNestedOneWithoutLedgerEntriesInput;
};
export type LedgerEntryUncheckedCreateInput = {
    id?: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deal?: Prisma.DealUpdateOneRequiredWithoutLedgerEntriesNestedInput;
};
export type LedgerEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryCreateManyInput = {
    id?: string;
    dealId: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryListRelationFilter = {
    every?: Prisma.LedgerEntryWhereInput;
    some?: Prisma.LedgerEntryWhereInput;
    none?: Prisma.LedgerEntryWhereInput;
};
export type LedgerEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LedgerEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntryAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type LedgerEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LedgerEntrySumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type LedgerEntryCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput> | Prisma.LedgerEntryCreateWithoutDealInput[] | Prisma.LedgerEntryUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutDealInput | Prisma.LedgerEntryCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.LedgerEntryCreateManyDealInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUncheckedCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput> | Prisma.LedgerEntryCreateWithoutDealInput[] | Prisma.LedgerEntryUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutDealInput | Prisma.LedgerEntryCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.LedgerEntryCreateManyDealInputEnvelope;
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
};
export type LedgerEntryUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput> | Prisma.LedgerEntryCreateWithoutDealInput[] | Prisma.LedgerEntryUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutDealInput | Prisma.LedgerEntryCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutDealInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.LedgerEntryCreateManyDealInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutDealInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutDealInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryUncheckedUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput> | Prisma.LedgerEntryCreateWithoutDealInput[] | Prisma.LedgerEntryUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.LedgerEntryCreateOrConnectWithoutDealInput | Prisma.LedgerEntryCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.LedgerEntryUpsertWithWhereUniqueWithoutDealInput | Prisma.LedgerEntryUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.LedgerEntryCreateManyDealInputEnvelope;
    set?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    disconnect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    delete?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    connect?: Prisma.LedgerEntryWhereUniqueInput | Prisma.LedgerEntryWhereUniqueInput[];
    update?: Prisma.LedgerEntryUpdateWithWhereUniqueWithoutDealInput | Prisma.LedgerEntryUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.LedgerEntryUpdateManyWithWhereWithoutDealInput | Prisma.LedgerEntryUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
};
export type LedgerEntryCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
};
export type LedgerEntryUncheckedCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
};
export type LedgerEntryCreateOrConnectWithoutDealInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput>;
};
export type LedgerEntryCreateManyDealInputEnvelope = {
    data: Prisma.LedgerEntryCreateManyDealInput | Prisma.LedgerEntryCreateManyDealInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryUpsertWithWhereUniqueWithoutDealInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutDealInput, Prisma.LedgerEntryUncheckedUpdateWithoutDealInput>;
    create: Prisma.XOR<Prisma.LedgerEntryCreateWithoutDealInput, Prisma.LedgerEntryUncheckedCreateWithoutDealInput>;
};
export type LedgerEntryUpdateWithWhereUniqueWithoutDealInput = {
    where: Prisma.LedgerEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateWithoutDealInput, Prisma.LedgerEntryUncheckedUpdateWithoutDealInput>;
};
export type LedgerEntryUpdateManyWithWhereWithoutDealInput = {
    where: Prisma.LedgerEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyWithoutDealInput>;
};
export type LedgerEntryScalarWhereInput = {
    AND?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
    OR?: Prisma.LedgerEntryScalarWhereInput[];
    NOT?: Prisma.LedgerEntryScalarWhereInput | Prisma.LedgerEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"LedgerEntry"> | string;
    dealId?: Prisma.StringFilter<"LedgerEntry"> | string;
    dealName?: Prisma.StringFilter<"LedgerEntry"> | string;
    type?: Prisma.StringFilter<"LedgerEntry"> | string;
    description?: Prisma.StringFilter<"LedgerEntry"> | string;
    amount?: Prisma.FloatFilter<"LedgerEntry"> | number;
    status?: Prisma.StringFilter<"LedgerEntry"> | string;
    date?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"LedgerEntry"> | Date | string;
};
export type LedgerEntryCreateManyDealInput = {
    id?: string;
    dealName: string;
    type: string;
    description: string;
    amount: number;
    status: string;
    date: Date | string;
    createdAt?: Date | string;
};
export type LedgerEntryUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntryUncheckedUpdateManyWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LedgerEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    date?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    date?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    date?: boolean;
    createdAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntrySelectScalar = {
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    type?: boolean;
    description?: boolean;
    amount?: boolean;
    status?: boolean;
    date?: boolean;
    createdAt?: boolean;
};
export type LedgerEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dealId" | "dealName" | "type" | "description" | "amount" | "status" | "date" | "createdAt", ExtArgs["result"]["ledgerEntry"]>;
export type LedgerEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type LedgerEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type LedgerEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type $LedgerEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LedgerEntry";
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
        date: Date;
        createdAt: Date;
    }, ExtArgs["result"]["ledgerEntry"]>;
    composites: {};
};
export type LedgerEntryGetPayload<S extends boolean | null | undefined | LedgerEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload, S>;
export type LedgerEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LedgerEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LedgerEntryCountAggregateInputType | true;
};
export interface LedgerEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntry'];
        meta: {
            name: 'LedgerEntry';
        };
    };
    findUnique<T extends LedgerEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, LedgerEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LedgerEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LedgerEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LedgerEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LedgerEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LedgerEntryFindManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LedgerEntryCreateArgs>(args: Prisma.SelectSubset<T, LedgerEntryCreateArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LedgerEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LedgerEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LedgerEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LedgerEntryDeleteArgs>(args: Prisma.SelectSubset<T, LedgerEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LedgerEntryUpdateArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LedgerEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, LedgerEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LedgerEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LedgerEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LedgerEntryUpsertArgs>(args: Prisma.SelectSubset<T, LedgerEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__LedgerEntryClient<runtime.Types.Result.GetResult<Prisma.$LedgerEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LedgerEntryCountArgs>(args?: Prisma.Subset<T, LedgerEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LedgerEntryCountAggregateOutputType> : number>;
    aggregate<T extends LedgerEntryAggregateArgs>(args: Prisma.Subset<T, LedgerEntryAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntryAggregateType<T>>;
    groupBy<T extends LedgerEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LedgerEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: LedgerEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LedgerEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LedgerEntryFieldRefs;
}
export interface Prisma__LedgerEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deal<T extends Prisma.DealDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DealDefaultArgs<ExtArgs>>): Prisma.Prisma__DealClient<runtime.Types.Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LedgerEntryFieldRefs {
    readonly id: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly dealId: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly dealName: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly type: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly description: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly amount: Prisma.FieldRef<"LedgerEntry", 'Float'>;
    readonly status: Prisma.FieldRef<"LedgerEntry", 'String'>;
    readonly date: Prisma.FieldRef<"LedgerEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LedgerEntry", 'DateTime'>;
}
export type LedgerEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerEntryScalarFieldEnum | Prisma.LedgerEntryScalarFieldEnum[];
};
export type LedgerEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerEntryScalarFieldEnum | Prisma.LedgerEntryScalarFieldEnum[];
};
export type LedgerEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where?: Prisma.LedgerEntryWhereInput;
    orderBy?: Prisma.LedgerEntryOrderByWithRelationInput | Prisma.LedgerEntryOrderByWithRelationInput[];
    cursor?: Prisma.LedgerEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LedgerEntryScalarFieldEnum | Prisma.LedgerEntryScalarFieldEnum[];
};
export type LedgerEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryCreateInput, Prisma.LedgerEntryUncheckedCreateInput>;
};
export type LedgerEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LedgerEntryCreateManyInput | Prisma.LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LedgerEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    data: Prisma.LedgerEntryCreateManyInput | Prisma.LedgerEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LedgerEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LedgerEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateInput, Prisma.LedgerEntryUncheckedUpdateInput>;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyInput>;
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
};
export type LedgerEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LedgerEntryUpdateManyMutationInput, Prisma.LedgerEntryUncheckedUpdateManyInput>;
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
    include?: Prisma.LedgerEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LedgerEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LedgerEntryCreateInput, Prisma.LedgerEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LedgerEntryUpdateInput, Prisma.LedgerEntryUncheckedUpdateInput>;
};
export type LedgerEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
    where: Prisma.LedgerEntryWhereUniqueInput;
};
export type LedgerEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LedgerEntryWhereInput;
    limit?: number;
};
export type LedgerEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LedgerEntrySelect<ExtArgs> | null;
    omit?: Prisma.LedgerEntryOmit<ExtArgs> | null;
    include?: Prisma.LedgerEntryInclude<ExtArgs> | null;
};
