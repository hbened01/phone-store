import service from "./service"

export default async () => {
  try {
    const { data } = await service.get('/api/product')
    return await data;
  } catch (error) {
    return error
  }
}