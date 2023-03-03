import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imageAddress) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imageAddress) VALUES (?,?,?)`,
    [name, slug, imageAddress]
  );
  return result;
};

export const updateCategory =async ( id ,name, slug, imageAddress) =>{
  const [result] = await pool.query (
    `UPDATE category SET name=?, slug=?,  imageAddress=? WHERE id=?`,
    [name, slug, imageAddress,id ]
  );
  return result;
}

export const deleteCategory =async (id) =>{
  const [result] =await pool.query (
    `DELETE from category WHERE id=?`,
    [id]
  );
  return result;
};
