import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestmentModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestmentPayload>;
export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null;
    _avg: InvestmentAvgAggregateOutputType | null;
    _sum: InvestmentSumAggregateOutputType | null;
    _min: InvestmentMinAggregateOutputType | null;
    _max: InvestmentMaxAggregateOutputType | null;
};
export type InvestmentAvgAggregateOutputType = {
    subscriptionAmount: number | null;
    capitalWired: number | null;
    managementFee: number | null;
    carry: number | null;
};
export type InvestmentSumAggregateOutputType = {
    subscriptionAmount: number | null;
    capitalWired: number | null;
    managementFee: number | null;
    carry: number | null;
};
export type InvestmentMinAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    investorId: string | null;
    investorName: string | null;
    investorEmail: string | null;
    investorType: string | null;
    status: string | null;
    kycStatus: string | null;
    subscriptionAmount: number | null;
    capitalWired: number | null;
    managementFee: number | null;
    carry: number | null;
    createdAt: Date | null;
    signedAt: Date | null;
};
export type InvestmentMaxAggregateOutputType = {
    id: string | null;
    dealId: string | null;
    dealName: string | null;
    investorId: string | null;
    investorName: string | null;
    investorEmail: string | null;
    investorType: string | null;
    status: string | null;
    kycStatus: string | null;
    subscriptionAmount: number | null;
    capitalWired: number | null;
    managementFee: number | null;
    carry: number | null;
    createdAt: Date | null;
    signedAt: Date | null;
};
export type InvestmentCountAggregateOutputType = {
    id: number;
    dealId: number;
    dealName: number;
    investorId: number;
    investorName: number;
    investorEmail: number;
    investorType: number;
    status: number;
    kycStatus: number;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt: number;
    signedAt: number;
    _all: number;
};
export type InvestmentAvgAggregateInputType = {
    subscriptionAmount?: true;
    capitalWired?: true;
    managementFee?: true;
    carry?: true;
};
export type InvestmentSumAggregateInputType = {
    subscriptionAmount?: true;
    capitalWired?: true;
    managementFee?: true;
    carry?: true;
};
export type InvestmentMinAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    investorId?: true;
    investorName?: true;
    investorEmail?: true;
    investorType?: true;
    status?: true;
    kycStatus?: true;
    subscriptionAmount?: true;
    capitalWired?: true;
    managementFee?: true;
    carry?: true;
    createdAt?: true;
    signedAt?: true;
};
export type InvestmentMaxAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    investorId?: true;
    investorName?: true;
    investorEmail?: true;
    investorType?: true;
    status?: true;
    kycStatus?: true;
    subscriptionAmount?: true;
    capitalWired?: true;
    managementFee?: true;
    carry?: true;
    createdAt?: true;
    signedAt?: true;
};
export type InvestmentCountAggregateInputType = {
    id?: true;
    dealId?: true;
    dealName?: true;
    investorId?: true;
    investorName?: true;
    investorEmail?: true;
    investorType?: true;
    status?: true;
    kycStatus?: true;
    subscriptionAmount?: true;
    capitalWired?: true;
    managementFee?: true;
    carry?: true;
    createdAt?: true;
    signedAt?: true;
    _all?: true;
};
export type InvestmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithRelationInput | Prisma.InvestmentOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestmentCountAggregateInputType;
    _avg?: InvestmentAvgAggregateInputType;
    _sum?: InvestmentSumAggregateInputType;
    _min?: InvestmentMinAggregateInputType;
    _max?: InvestmentMaxAggregateInputType;
};
export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestment[P]> : Prisma.GetScalarType<T[P], AggregateInvestment[P]>;
};
export type InvestmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithAggregationInput | Prisma.InvestmentOrderByWithAggregationInput[];
    by: Prisma.InvestmentScalarFieldEnum[] | Prisma.InvestmentScalarFieldEnum;
    having?: Prisma.InvestmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestmentCountAggregateInputType | true;
    _avg?: InvestmentAvgAggregateInputType;
    _sum?: InvestmentSumAggregateInputType;
    _min?: InvestmentMinAggregateInputType;
    _max?: InvestmentMaxAggregateInputType;
};
export type InvestmentGroupByOutputType = {
    id: string;
    dealId: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt: Date;
    signedAt: Date | null;
    _count: InvestmentCountAggregateOutputType | null;
    _avg: InvestmentAvgAggregateOutputType | null;
    _sum: InvestmentSumAggregateOutputType | null;
    _min: InvestmentMinAggregateOutputType | null;
    _max: InvestmentMaxAggregateOutputType | null;
};
export type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestmentGroupByOutputType[P]>;
}>>;
export type InvestmentWhereInput = {
    AND?: Prisma.InvestmentWhereInput | Prisma.InvestmentWhereInput[];
    OR?: Prisma.InvestmentWhereInput[];
    NOT?: Prisma.InvestmentWhereInput | Prisma.InvestmentWhereInput[];
    id?: Prisma.StringFilter<"Investment"> | string;
    dealId?: Prisma.StringFilter<"Investment"> | string;
    dealName?: Prisma.StringFilter<"Investment"> | string;
    investorId?: Prisma.StringFilter<"Investment"> | string;
    investorName?: Prisma.StringFilter<"Investment"> | string;
    investorEmail?: Prisma.StringFilter<"Investment"> | string;
    investorType?: Prisma.StringFilter<"Investment"> | string;
    status?: Prisma.StringFilter<"Investment"> | string;
    kycStatus?: Prisma.StringFilter<"Investment"> | string;
    subscriptionAmount?: Prisma.FloatFilter<"Investment"> | number;
    capitalWired?: Prisma.FloatFilter<"Investment"> | number;
    managementFee?: Prisma.FloatFilter<"Investment"> | number;
    carry?: Prisma.FloatFilter<"Investment"> | number;
    createdAt?: Prisma.DateTimeFilter<"Investment"> | Date | string;
    signedAt?: Prisma.DateTimeNullableFilter<"Investment"> | Date | string | null;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
};
export type InvestmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    investorName?: Prisma.SortOrder;
    investorEmail?: Prisma.SortOrder;
    investorType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deal?: Prisma.DealOrderByWithRelationInput;
};
export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestmentWhereInput | Prisma.InvestmentWhereInput[];
    OR?: Prisma.InvestmentWhereInput[];
    NOT?: Prisma.InvestmentWhereInput | Prisma.InvestmentWhereInput[];
    dealId?: Prisma.StringFilter<"Investment"> | string;
    dealName?: Prisma.StringFilter<"Investment"> | string;
    investorId?: Prisma.StringFilter<"Investment"> | string;
    investorName?: Prisma.StringFilter<"Investment"> | string;
    investorEmail?: Prisma.StringFilter<"Investment"> | string;
    investorType?: Prisma.StringFilter<"Investment"> | string;
    status?: Prisma.StringFilter<"Investment"> | string;
    kycStatus?: Prisma.StringFilter<"Investment"> | string;
    subscriptionAmount?: Prisma.FloatFilter<"Investment"> | number;
    capitalWired?: Prisma.FloatFilter<"Investment"> | number;
    managementFee?: Prisma.FloatFilter<"Investment"> | number;
    carry?: Prisma.FloatFilter<"Investment"> | number;
    createdAt?: Prisma.DateTimeFilter<"Investment"> | Date | string;
    signedAt?: Prisma.DateTimeNullableFilter<"Investment"> | Date | string | null;
    deal?: Prisma.XOR<Prisma.DealScalarRelationFilter, Prisma.DealWhereInput>;
}, "id">;
export type InvestmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    investorName?: Prisma.SortOrder;
    investorEmail?: Prisma.SortOrder;
    investorType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvestmentCountOrderByAggregateInput;
    _avg?: Prisma.InvestmentAvgOrderByAggregateInput;
    _max?: Prisma.InvestmentMaxOrderByAggregateInput;
    _min?: Prisma.InvestmentMinOrderByAggregateInput;
    _sum?: Prisma.InvestmentSumOrderByAggregateInput;
};
export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestmentScalarWhereWithAggregatesInput | Prisma.InvestmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestmentScalarWhereWithAggregatesInput | Prisma.InvestmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    dealId?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    dealName?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    investorName?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    investorEmail?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    investorType?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    kycStatus?: Prisma.StringWithAggregatesFilter<"Investment"> | string;
    subscriptionAmount?: Prisma.FloatWithAggregatesFilter<"Investment"> | number;
    capitalWired?: Prisma.FloatWithAggregatesFilter<"Investment"> | number;
    managementFee?: Prisma.FloatWithAggregatesFilter<"Investment"> | number;
    carry?: Prisma.FloatWithAggregatesFilter<"Investment"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Investment"> | Date | string;
    signedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Investment"> | Date | string | null;
};
export type InvestmentCreateInput = {
    id?: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
    deal: Prisma.DealCreateNestedOneWithoutInvestmentsInput;
};
export type InvestmentUncheckedCreateInput = {
    id?: string;
    dealId: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
};
export type InvestmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deal?: Prisma.DealUpdateOneRequiredWithoutInvestmentsNestedInput;
};
export type InvestmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentCreateManyInput = {
    id?: string;
    dealId: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
};
export type InvestmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealId?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentListRelationFilter = {
    every?: Prisma.InvestmentWhereInput;
    some?: Prisma.InvestmentWhereInput;
    none?: Prisma.InvestmentWhereInput;
};
export type InvestmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    investorName?: Prisma.SortOrder;
    investorEmail?: Prisma.SortOrder;
    investorType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
};
export type InvestmentAvgOrderByAggregateInput = {
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
};
export type InvestmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    investorName?: Prisma.SortOrder;
    investorEmail?: Prisma.SortOrder;
    investorType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
};
export type InvestmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dealId?: Prisma.SortOrder;
    dealName?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    investorName?: Prisma.SortOrder;
    investorEmail?: Prisma.SortOrder;
    investorType?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    kycStatus?: Prisma.SortOrder;
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    signedAt?: Prisma.SortOrder;
};
export type InvestmentSumOrderByAggregateInput = {
    subscriptionAmount?: Prisma.SortOrder;
    capitalWired?: Prisma.SortOrder;
    managementFee?: Prisma.SortOrder;
    carry?: Prisma.SortOrder;
};
export type InvestmentCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput> | Prisma.InvestmentCreateWithoutDealInput[] | Prisma.InvestmentUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.InvestmentCreateOrConnectWithoutDealInput | Prisma.InvestmentCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.InvestmentCreateManyDealInputEnvelope;
    connect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
};
export type InvestmentUncheckedCreateNestedManyWithoutDealInput = {
    create?: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput> | Prisma.InvestmentCreateWithoutDealInput[] | Prisma.InvestmentUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.InvestmentCreateOrConnectWithoutDealInput | Prisma.InvestmentCreateOrConnectWithoutDealInput[];
    createMany?: Prisma.InvestmentCreateManyDealInputEnvelope;
    connect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
};
export type InvestmentUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput> | Prisma.InvestmentCreateWithoutDealInput[] | Prisma.InvestmentUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.InvestmentCreateOrConnectWithoutDealInput | Prisma.InvestmentCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.InvestmentUpsertWithWhereUniqueWithoutDealInput | Prisma.InvestmentUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.InvestmentCreateManyDealInputEnvelope;
    set?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    disconnect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    delete?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    connect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    update?: Prisma.InvestmentUpdateWithWhereUniqueWithoutDealInput | Prisma.InvestmentUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.InvestmentUpdateManyWithWhereWithoutDealInput | Prisma.InvestmentUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.InvestmentScalarWhereInput | Prisma.InvestmentScalarWhereInput[];
};
export type InvestmentUncheckedUpdateManyWithoutDealNestedInput = {
    create?: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput> | Prisma.InvestmentCreateWithoutDealInput[] | Prisma.InvestmentUncheckedCreateWithoutDealInput[];
    connectOrCreate?: Prisma.InvestmentCreateOrConnectWithoutDealInput | Prisma.InvestmentCreateOrConnectWithoutDealInput[];
    upsert?: Prisma.InvestmentUpsertWithWhereUniqueWithoutDealInput | Prisma.InvestmentUpsertWithWhereUniqueWithoutDealInput[];
    createMany?: Prisma.InvestmentCreateManyDealInputEnvelope;
    set?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    disconnect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    delete?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    connect?: Prisma.InvestmentWhereUniqueInput | Prisma.InvestmentWhereUniqueInput[];
    update?: Prisma.InvestmentUpdateWithWhereUniqueWithoutDealInput | Prisma.InvestmentUpdateWithWhereUniqueWithoutDealInput[];
    updateMany?: Prisma.InvestmentUpdateManyWithWhereWithoutDealInput | Prisma.InvestmentUpdateManyWithWhereWithoutDealInput[];
    deleteMany?: Prisma.InvestmentScalarWhereInput | Prisma.InvestmentScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type InvestmentCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
};
export type InvestmentUncheckedCreateWithoutDealInput = {
    id?: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
};
export type InvestmentCreateOrConnectWithoutDealInput = {
    where: Prisma.InvestmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput>;
};
export type InvestmentCreateManyDealInputEnvelope = {
    data: Prisma.InvestmentCreateManyDealInput | Prisma.InvestmentCreateManyDealInput[];
    skipDuplicates?: boolean;
};
export type InvestmentUpsertWithWhereUniqueWithoutDealInput = {
    where: Prisma.InvestmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestmentUpdateWithoutDealInput, Prisma.InvestmentUncheckedUpdateWithoutDealInput>;
    create: Prisma.XOR<Prisma.InvestmentCreateWithoutDealInput, Prisma.InvestmentUncheckedCreateWithoutDealInput>;
};
export type InvestmentUpdateWithWhereUniqueWithoutDealInput = {
    where: Prisma.InvestmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestmentUpdateWithoutDealInput, Prisma.InvestmentUncheckedUpdateWithoutDealInput>;
};
export type InvestmentUpdateManyWithWhereWithoutDealInput = {
    where: Prisma.InvestmentScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestmentUpdateManyMutationInput, Prisma.InvestmentUncheckedUpdateManyWithoutDealInput>;
};
export type InvestmentScalarWhereInput = {
    AND?: Prisma.InvestmentScalarWhereInput | Prisma.InvestmentScalarWhereInput[];
    OR?: Prisma.InvestmentScalarWhereInput[];
    NOT?: Prisma.InvestmentScalarWhereInput | Prisma.InvestmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Investment"> | string;
    dealId?: Prisma.StringFilter<"Investment"> | string;
    dealName?: Prisma.StringFilter<"Investment"> | string;
    investorId?: Prisma.StringFilter<"Investment"> | string;
    investorName?: Prisma.StringFilter<"Investment"> | string;
    investorEmail?: Prisma.StringFilter<"Investment"> | string;
    investorType?: Prisma.StringFilter<"Investment"> | string;
    status?: Prisma.StringFilter<"Investment"> | string;
    kycStatus?: Prisma.StringFilter<"Investment"> | string;
    subscriptionAmount?: Prisma.FloatFilter<"Investment"> | number;
    capitalWired?: Prisma.FloatFilter<"Investment"> | number;
    managementFee?: Prisma.FloatFilter<"Investment"> | number;
    carry?: Prisma.FloatFilter<"Investment"> | number;
    createdAt?: Prisma.DateTimeFilter<"Investment"> | Date | string;
    signedAt?: Prisma.DateTimeNullableFilter<"Investment"> | Date | string | null;
};
export type InvestmentCreateManyDealInput = {
    id?: string;
    dealName: string;
    investorId: string;
    investorName: string;
    investorEmail: string;
    investorType: string;
    status: string;
    kycStatus: string;
    subscriptionAmount: number;
    capitalWired: number;
    managementFee: number;
    carry: number;
    createdAt?: Date | string;
    signedAt?: Date | string | null;
};
export type InvestmentUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentUncheckedUpdateWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentUncheckedUpdateManyWithoutDealInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dealName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    investorName?: Prisma.StringFieldUpdateOperationsInput | string;
    investorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    investorType?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    kycStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    subscriptionAmount?: Prisma.FloatFieldUpdateOperationsInput | number;
    capitalWired?: Prisma.FloatFieldUpdateOperationsInput | number;
    managementFee?: Prisma.FloatFieldUpdateOperationsInput | number;
    carry?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type InvestmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    investorId?: boolean;
    investorName?: boolean;
    investorEmail?: boolean;
    investorType?: boolean;
    status?: boolean;
    kycStatus?: boolean;
    subscriptionAmount?: boolean;
    capitalWired?: boolean;
    managementFee?: boolean;
    carry?: boolean;
    createdAt?: boolean;
    signedAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["investment"]>;
export type InvestmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    investorId?: boolean;
    investorName?: boolean;
    investorEmail?: boolean;
    investorType?: boolean;
    status?: boolean;
    kycStatus?: boolean;
    subscriptionAmount?: boolean;
    capitalWired?: boolean;
    managementFee?: boolean;
    carry?: boolean;
    createdAt?: boolean;
    signedAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["investment"]>;
export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    investorId?: boolean;
    investorName?: boolean;
    investorEmail?: boolean;
    investorType?: boolean;
    status?: boolean;
    kycStatus?: boolean;
    subscriptionAmount?: boolean;
    capitalWired?: boolean;
    managementFee?: boolean;
    carry?: boolean;
    createdAt?: boolean;
    signedAt?: boolean;
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["investment"]>;
export type InvestmentSelectScalar = {
    id?: boolean;
    dealId?: boolean;
    dealName?: boolean;
    investorId?: boolean;
    investorName?: boolean;
    investorEmail?: boolean;
    investorType?: boolean;
    status?: boolean;
    kycStatus?: boolean;
    subscriptionAmount?: boolean;
    capitalWired?: boolean;
    managementFee?: boolean;
    carry?: boolean;
    createdAt?: boolean;
    signedAt?: boolean;
};
export type InvestmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dealId" | "dealName" | "investorId" | "investorName" | "investorEmail" | "investorType" | "status" | "kycStatus" | "subscriptionAmount" | "capitalWired" | "managementFee" | "carry" | "createdAt" | "signedAt", ExtArgs["result"]["investment"]>;
export type InvestmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    deal?: boolean | Prisma.DealDefaultArgs<ExtArgs>;
};
export type $InvestmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Investment";
    objects: {
        deal: Prisma.$DealPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dealId: string;
        dealName: string;
        investorId: string;
        investorName: string;
        investorEmail: string;
        investorType: string;
        status: string;
        kycStatus: string;
        subscriptionAmount: number;
        capitalWired: number;
        managementFee: number;
        carry: number;
        createdAt: Date;
        signedAt: Date | null;
    }, ExtArgs["result"]["investment"]>;
    composites: {};
};
export type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestmentPayload, S>;
export type InvestmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestmentCountAggregateInputType | true;
};
export interface InvestmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Investment'];
        meta: {
            name: 'Investment';
        };
    };
    findUnique<T extends InvestmentFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestmentFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestmentFindManyArgs>(args?: Prisma.SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestmentCreateArgs>(args: Prisma.SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestmentCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestmentDeleteArgs>(args: Prisma.SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestmentUpdateArgs>(args: Prisma.SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestmentUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestmentUpsertArgs>(args: Prisma.SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestmentClient<runtime.Types.Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestmentCountArgs>(args?: Prisma.Subset<T, InvestmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestmentCountAggregateOutputType> : number>;
    aggregate<T extends InvestmentAggregateArgs>(args: Prisma.Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>;
    groupBy<T extends InvestmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestmentGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestmentFieldRefs;
}
export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    deal<T extends Prisma.DealDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DealDefaultArgs<ExtArgs>>): Prisma.Prisma__DealClient<runtime.Types.Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestmentFieldRefs {
    readonly id: Prisma.FieldRef<"Investment", 'String'>;
    readonly dealId: Prisma.FieldRef<"Investment", 'String'>;
    readonly dealName: Prisma.FieldRef<"Investment", 'String'>;
    readonly investorId: Prisma.FieldRef<"Investment", 'String'>;
    readonly investorName: Prisma.FieldRef<"Investment", 'String'>;
    readonly investorEmail: Prisma.FieldRef<"Investment", 'String'>;
    readonly investorType: Prisma.FieldRef<"Investment", 'String'>;
    readonly status: Prisma.FieldRef<"Investment", 'String'>;
    readonly kycStatus: Prisma.FieldRef<"Investment", 'String'>;
    readonly subscriptionAmount: Prisma.FieldRef<"Investment", 'Float'>;
    readonly capitalWired: Prisma.FieldRef<"Investment", 'Float'>;
    readonly managementFee: Prisma.FieldRef<"Investment", 'Float'>;
    readonly carry: Prisma.FieldRef<"Investment", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Investment", 'DateTime'>;
    readonly signedAt: Prisma.FieldRef<"Investment", 'DateTime'>;
}
export type InvestmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where: Prisma.InvestmentWhereUniqueInput;
};
export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where: Prisma.InvestmentWhereUniqueInput;
};
export type InvestmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithRelationInput | Prisma.InvestmentOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentScalarFieldEnum | Prisma.InvestmentScalarFieldEnum[];
};
export type InvestmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithRelationInput | Prisma.InvestmentOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentScalarFieldEnum | Prisma.InvestmentScalarFieldEnum[];
};
export type InvestmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where?: Prisma.InvestmentWhereInput;
    orderBy?: Prisma.InvestmentOrderByWithRelationInput | Prisma.InvestmentOrderByWithRelationInput[];
    cursor?: Prisma.InvestmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestmentScalarFieldEnum | Prisma.InvestmentScalarFieldEnum[];
};
export type InvestmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentCreateInput, Prisma.InvestmentUncheckedCreateInput>;
};
export type InvestmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestmentCreateManyInput | Prisma.InvestmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    data: Prisma.InvestmentCreateManyInput | Prisma.InvestmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentUpdateInput, Prisma.InvestmentUncheckedUpdateInput>;
    where: Prisma.InvestmentWhereUniqueInput;
};
export type InvestmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestmentUpdateManyMutationInput, Prisma.InvestmentUncheckedUpdateManyInput>;
    where?: Prisma.InvestmentWhereInput;
    limit?: number;
};
export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestmentUpdateManyMutationInput, Prisma.InvestmentUncheckedUpdateManyInput>;
    where?: Prisma.InvestmentWhereInput;
    limit?: number;
    include?: Prisma.InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where: Prisma.InvestmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestmentCreateInput, Prisma.InvestmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestmentUpdateInput, Prisma.InvestmentUncheckedUpdateInput>;
};
export type InvestmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
    where: Prisma.InvestmentWhereUniqueInput;
};
export type InvestmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestmentWhereInput;
    limit?: number;
};
export type InvestmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestmentSelect<ExtArgs> | null;
    omit?: Prisma.InvestmentOmit<ExtArgs> | null;
    include?: Prisma.InvestmentInclude<ExtArgs> | null;
};
