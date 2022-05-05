import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Length,
  validate,
  Validate,
  Validator,
} from "class-validator";
import { IsDate, IsNotEmpty } from "class-validator";
import { userState, Users } from "./user.model";

export class UserValidate {
  
  @IsString()
  @Length(3, 20)
  @IsNotEmpty()
  name!: string;

  @Length(5, 20)
  @IsNotEmpty()
  userName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @Length(6, 20)
  @IsNotEmpty()
  password!: string;

  @IsOptional()
  @IsEnum(Users)
  status!: userState;
}
