import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserDocument } from '../model';
import { createUserDto, updateUserDto } from '../dtos';

@Injectable()
export class UserService {
  constructor(private _userRepository: UserRepository) {}

  async find(): Promise<UserDocument[] | null> {
    const users = await this._userRepository.find({});
    return users;
  }

  async findById(id: string): Promise<UserDocument | null> {
    const user = await this._userRepository.findOne({ id });
    return user;
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    const user = await this._userRepository.findOne({ email });
    return user;
  }

  async create(data: createUserDto): Promise<UserDocument | null> {
    const createUser = await this._userRepository.create(data);
    return createUser;
  }

  async update(id, data: updateUserDto): Promise<UserDocument | null> {
    const updateUser = await this._userRepository.update({ id }, data);
    return updateUser;
  }

  async delete(id): Promise<null> {
    return this._userRepository.delete({ id });
  }

  async deleteAll() {
    return this._userRepository.deleteMany({});
  }
}
