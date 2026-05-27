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
exports.DealsService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase/supabase.service");
let DealsService = class DealsService {
    supabase;
    constructor(supabase) {
        this.supabase = supabase;
    }
    async create(data) {
        const { data: record, error } = await this.supabase.client.from('Deal').insert(data).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async findAll() {
        const { data, error } = await this.supabase.client.from('Deal').select('*').order('createdAt', { ascending: false });
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return data;
    }
    async findOne(id) {
        const { data, error } = await this.supabase.client
            .from('Deal')
            .select('*, investments:Investment(*), ledgerEntries:LedgerEntry(*), fees:Fee(*)')
            .eq('id', id)
            .single();
        if (error) {
            if (error.code === 'PGRST116')
                throw new common_1.NotFoundException(`Deal with ID ${id} not found`);
            throw new common_1.InternalServerErrorException(error.message);
        }
        return data;
    }
    async update(id, data) {
        const { data: record, error } = await this.supabase.client.from('Deal').update(data).eq('id', id).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async remove(id) {
        const { data: record, error } = await this.supabase.client.from('Deal').delete().eq('id', id).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
};
exports.DealsService = DealsService;
exports.DealsService = DealsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], DealsService);
//# sourceMappingURL=deals.service.js.map