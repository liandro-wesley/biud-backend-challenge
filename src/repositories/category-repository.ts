import { CategoryInterface } from '../interfaces/category-interface';
import { Category } from '../models/category-model';

export const getAll = async () => {
  const res = await Category.find({}, 'title');

  return res;
};

export const create = async (data: CategoryInterface) => {
  const category = new Category(data);
  category.save();
};

export const getByTitle = async (title: CategoryInterface) => {
  const res = await Category.findOne({
    title
  });

  return res;
};

export const update = async (id, data: CategoryInterface) => {
  await Category.findByIdAndUpdate(id, {
    $set: {
      title: data.title
    }
  });
};

export const remove = async (id) => {
  await Category.findOneAndRemove(id);
};
