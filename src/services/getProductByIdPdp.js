import service from "./service";

export default async (id) => {
  try {
    const { data } = await service.get(`/api/product/${id}`);
    return await data;
  } catch (error) {
    return error;
  }
};
