import * as bcrypt from 'bcryptjs';

export class UtilsService {
  static async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  static async compareHash(before: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(before, hash);
  }
}
