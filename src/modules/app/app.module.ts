import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules/auth/auth.module';
import { SetModule } from '@/modules/set/set.module';
import { UserModule } from '@/modules/user/user.module';
@Module({
  imports: [AuthModule, SetModule, UserModule],
})
export class AppModule {}
