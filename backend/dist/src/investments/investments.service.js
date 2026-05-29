"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestmentsService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
let InvestmentsService = class InvestmentsService {
    supabase;
    constructor(supabase) {
        this.supabase = supabase;
    }
    async findAll(userId) {
        if (userId) {
            const { data: identities, error: idError } = await this.supabase.client
                .from('Identity')
                .select('id')
                .eq('userId', userId);
            if (idError)
                throw new common_1.InternalServerErrorException(idError.message);
            const identityIds = identities.map((i) => i.id);
            if (identityIds.length === 0) {
                identityIds.push(userId);
            }
            const { data, error } = await this.supabase.client
                .from('Investment')
                .select('*')
                .in('investorId', identityIds)
                .order('createdAt', { ascending: false });
            if (error)
                throw new common_1.InternalServerErrorException(error.message);
            return data;
        }
        const { data, error } = await this.supabase.client
            .from('Investment')
            .select('*')
            .order('createdAt', { ascending: false });
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return data;
    }
    async findOne(id) {
        const { data, error } = await this.supabase.client.from('Investment').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116')
                throw new common_1.NotFoundException(`Record with ID ${id} not found`);
            throw new common_1.InternalServerErrorException(error.message);
        }
        return data;
    }
    async create(data) {
        const { data: record, error } = await this.supabase.client.from('Investment').insert(data).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async update(id, data) {
        const { data: record, error } = await this.supabase.client.from('Investment').update(data).eq('id', id).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async findByDealId(dealId) {
        const { data, error } = await this.supabase.client.from('Investment').select('*').eq('dealId', dealId).order('createdAt', { ascending: false });
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return data;
    }
};
exports.InvestmentsService = InvestmentsService;
exports.InvestmentsService = InvestmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], InvestmentsService);
//# sourceMappingURL=investments.service.js.map