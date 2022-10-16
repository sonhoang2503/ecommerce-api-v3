import { Module } from '@nestjs/common';
import { UserModule } from 'src/modules';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers';
import { AuthService } from './providers';
import { ATStrategy, RTStrategy } from './strategies';

@Module({
  imports: [PassportModule, UserModule, JwtModule.register({})],
  providers: [ATStrategy, RTStrategy, AuthService],
  controllers: [AuthController],
  // providers: [AuthService],
})
export class AuthModule {}
