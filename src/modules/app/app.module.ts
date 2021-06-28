import { Module } from '@nestjs/common';
import { AuthModule } from '@/modules/auth/auth.module';
import { SetModule } from '@/modules/set/set.module';
import { UserModule } from '@/modules/user/user.module';
import { SearchModule } from '@/modules/search/search.module';
@Module({
  imports: [AuthModule, SetModule, UserModule, SearchModule],
})
export class AppModule {}
