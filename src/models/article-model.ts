import { ArticleInterface } from '../interfaces/article-interface';
import { Document, Schema, Model, model } from 'mongoose';

export interface ArticleModel extends Document, ArticleInterface {}

const ArticleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

export const Article: Model<ArticleModel> = model<ArticleModel>(
  'Article',
  ArticleSchema
);
