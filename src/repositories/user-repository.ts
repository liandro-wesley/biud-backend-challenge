import { UserInterface } from '../interfaces/user-interface';
import { User } from '../models/user-model';

type AuthenticateParams = Pick<UserInterface, 'email' | 'password'>;

export const create = async (data: UserInterface) => {
  const user = new User(data);
  await user.save();
};

export const getById = async (id) => {
  const res = await User.findById(id);
  return res;
};

export const getByEmail = async (email) => {
  const res = await User.findOne({
    email
  });
  return res;
};

export const authenticate = async ({ email, password }: AuthenticateParams) => {
  const res = await User.findOne({
    email: email,
    password: password
  });
  return res;
};
