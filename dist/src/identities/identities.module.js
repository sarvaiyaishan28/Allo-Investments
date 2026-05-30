"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitiesModule = void 0;
const common_1 = require("@nestjs/common");
const identities_controller_1 = require("./identities.controller");
const identities_service_1 = require("./identities.service");
let IdentitiesModule = class IdentitiesModule {
};
exports.IdentitiesModule = IdentitiesModule;
exports.IdentitiesModule = IdentitiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [identities_controller_1.IdentitiesController],
        providers: [identities_service_1.IdentitiesService]
    })
], IdentitiesModule);
//# sourceMappingURL=identities.module.js.map