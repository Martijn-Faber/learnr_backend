import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '@/modules/Prisma/prisma.service';
import { SignUpDto } from './dto/signup-auth.dto';
import { SignInDto } from './dto/signin-auth.dto';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';

@Injectable()
export class AuthService extends Logger {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {
    super();
  }

  async signUp(body: SignUpDto) {
    const { name, email, password } = body;

    const exists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (exists) {
      throw new HttpException('user already exists', HttpStatus.CONFLICT);
    }

    const hashedPassword = await argon2.hash(password);
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      token: this.jwtService.sign({
        sub: user.id,
      }),
    };
  }

  async signIn(body: SignInDto) {
    const { email, password } = body;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException("user doesn't exist", HttpStatus.NOT_FOUND);
    }

    if (await argon2.verify(user.password, password)) {
      return {
        token: this.jwtService.sign({
          sub: user.id,
        }),
      };
    }

    throw new HttpException("password doesn't match", HttpStatus.FORBIDDEN);
  }
}
