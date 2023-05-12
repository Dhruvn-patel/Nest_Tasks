import { Get, Module } from '@nestjs/common';
import { RolesController } from './roles/roles.controller';
import { AdminController } from './admin/admin.controller';

@Module({
    controllers: [RolesController, AdminController]
})
export class UserModule {

    
}
