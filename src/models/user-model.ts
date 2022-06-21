import { Document, Schema, Model, model } from 'mongoose';
import { UserInterface } from '../interfaces/user-interface';

export interface UserModel extends UserInterface, Document {
  fullName(): string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    created_at: {
      type: Date,
      default: Date.now()
    }
  },
  {
    timestamps: true,
    methods: {
      fullName() {
        return `${this.firstName.trim()} ${this.lastName.trim()}`;
      }
    }
  }
);

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);
