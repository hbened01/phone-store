import service from "./service";

export default async (product) => {
  try {
    const { data } = await service.post(`/api/cart`, product);
    return await data;
  } catch (error) {
    return error;
  }
};
