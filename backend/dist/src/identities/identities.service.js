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
exports.IdentitiesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const supabase_service_1 = require("../supabase/supabase.service");
let IdentitiesService = class IdentitiesService {
    supabase;
    constructor(supabase) {
        this.supabase = supabase;
    }
    async findAll(userId) {
        let query = this.supabase.client.from('Identity').select('*').order('createdAt', { ascending: false });
        if (userId) {
            query = query.eq('userId', userId);
        }
        const { data, error } = await query;
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return data;
    }
    async findOne(id) {
        const { data, error } = await this.supabase.client.from('Identity').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116')
                throw new common_1.NotFoundException(`Record with ID ${id} not found`);
            throw new common_1.InternalServerErrorException(error.message);
        }
        return data;
    }
    async create(data) {
        if (!data.id)
            data.id = (0, crypto_1.randomUUID)();
        const { data: record, error } = await this.supabase.client.from('Identity').insert(data).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async update(id, data) {
        const { data: record, error } = await this.supabase.client.from('Identity').update(data).eq('id', id).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
    async remove(id) {
        const { data: record, error } = await this.supabase.client.from('Identity').delete().eq('id', id).select().single();
        if (error)
            throw new common_1.InternalServerErrorException(error.message);
        return record;
    }
};
exports.IdentitiesService = IdentitiesService;
exports.IdentitiesService = IdentitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], IdentitiesService);
//# sourceMappingURL=identities.service.js.map