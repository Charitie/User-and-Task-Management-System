import bcrypt from 'bcrypt';
import {
  IPasswordComparison,
  IPasswordEncryption
} from '../../Schema/TypeDefs/UserType';

export const encryptPassword = async ({
  password,
  saltRounds
}: IPasswordEncryption): Promise<string | unknown> => {
  try {
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    return encryptedPassword;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const comparePassword = async ({
  password,
  storedHashedPassword
}: IPasswordComparison): Promise<boolean | void> => {
  try {
    const isValidPassword = await bcrypt.compare(
      password,
      storedHashedPassword as string
    );

    return isValidPassword;
  } catch (error) {
    console.log(error);
    return !!error;
  }
};

// export const validateUserPassword = (
//   password: string,
//   storedHashedPassword: string
// ) => {
//   bcrypt
//     .compare(password, storedHashedPassword)
//     .then((res) => {
//       console.log('valid::', res);
//       return res;
//     })
//     .catch((error) => {
//       console.log('COMPARE PSW ERR::', error);
//       return error;
//     });
// };
