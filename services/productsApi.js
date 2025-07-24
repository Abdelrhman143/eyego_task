import supabase from "../lib/supabase";

// get  products
export async function getProducts(
  limit = 10,
  offset = 0,
  category = null,
  sort = null
) {
  let query = supabase.from("products").select("*", { count: "exact" });

  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  if (sort) {
    const [column, direction] = sort.split("-");
    query = query.order(column, { ascending: direction === "asc" });
  }

  query = query.range(offset, offset + limit - 1);

  const { data, error, count } = await query;

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

  if (error) throw new Error("error in edit product");

  return data;
}

// geting revenu
export async function getTotalRevenue() {
  const { data, error } = await supabase
    .from("products")
    .select("sales , price");

  if (error) throw new Error("error in geting revenu");
  let total = 0;
  if (Array.isArray(data)) {
    total = data.reduce(
      (sum, item) => sum + (item.price || 0) * (item.sales || 0),
      0
    );
  }

  console.log("total rev from api", total);

  return total;
}

// geting categorys
export async function getCategoryCounts() {
  const { data, error } = await supabase
    .from("products")
    .select("category, count:id", { groupBy: ["category"] });

  const counts = {};
  data.forEach((item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  return Object.entries(counts).map(([category, count]) => ({
    category,
    count,
  }));

  console.log("data from api", data);
  if (error) throw new Error("error in getting category counts");
  return data;
}
