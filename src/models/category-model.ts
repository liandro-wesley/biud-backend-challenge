import { CategoryInterface } from './../interfaces/category-interface';
import { Document, Schema, Model, model } from 'mongoose';

export interface CategoryModel extends Document, CategoryInterface {}

const CategorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

export const Category: Model<CategoryModel> = model<CategoryModel>(
  'Category',
  CategorySchema
);
