import supabase from "../lib/supabase";

// get All products
export async function getProducts(limit = 10, offset = 0) {
  let { data, error, count } = await supabase
    .from("products")
    .select("*", { count: "exact" })
    .range(offset, offset + limit - 1);

  if (error) throw new Error("error in geting products");

  return { data, count };
}

// adding product
export async function createProduct(product) {
  const { data, error } = await supabase.from("products").insert([product]);
  if (error) throw new Error("error in creating product");

  return data;
}

// delete product
export async function deleteProduct(id) {
  const { data, error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error("error in creating product");

  return data;
}

// edit product
export async function editProduct(id, updates) {
  const { data, error } = await supabase
    .from("products")
    .update(updates)
    .eq("id", id);

  if (error) throw new Error("error in creating product");

  return data;
}

// export async function uploadImage(image) {
//   const imageExt = image.name.split(".").pop();
//   const imageName = `${Math.random()}.${imageExt}`;
//   const imagePath = `https://egctemlxsncxctenrutn.supabase.co/storage/v1/object/public/images//${imageName}`;

//   let { error } = await supabase.storage
//     .from("images")
//     .upload(imagePath, image);
//   if (error) throw error;

//   if (error) throw new Error("error in adding image to storage");

//   const { data } = supabase.storage
//     .from("product-images")
//     .getPublicUrl(imagePath);

//   return data.publicUrl;
// }

// export async function uploadImage(image) {
//   console.log("Uploading image:", image);
//   const imageExt = image.name.split(".").pop();
//   const imageName = `${Date.now()}.${imageExt}`;
//   const filePath = `${imageName}`;

//   const { data: uploadData, error: uploadError } = await supabase.storage
//     .from("images")
//     .upload(filePath, image);

//   if (uploadError) {
//     console.error("Upload error:", uploadError);
//     throw new Error("error in adding image to storage");
//   }

//   const { data: urlData, error: urlError } = supabase.storage
//     .from("images")
//     .getPublicUrl(filePath);

//   if (urlError) {
//     console.error("Get public URL error:", urlError);
//     throw new Error("error in getting public URL");
//   }

//   console.log("Public URL:", urlData.publicUrl);
//   return urlData.publicUrl;
// }
