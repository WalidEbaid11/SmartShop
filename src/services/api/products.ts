import { taagerApi, aliexpressApi } from './config';
import type { Product } from '../../types';

export const productService = {
  async getFeaturedProducts(): Promise<Product[]> {
    try {
      const [taagerProducts, aliProducts] = await Promise.all([
        taagerApi.get('/products/featured'),
        aliexpressApi.get('/products/featured')
      ]);

      return [...taagerProducts.data, ...aliProducts.data];
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  },

  async searchProducts(query: string): Promise<Product[]> {
    try {
      const [taagerResults, aliResults] = await Promise.all([
        taagerApi.get(`/products/search?q=${query}`),
        aliexpressApi.get(`/products/search?q=${query}`)
      ]);

      return [...taagerResults.data, ...aliResults.data];
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  },

  async getProductDetails(id: string, source: 'taager' | 'aliexpress'): Promise<Product> {
    try {
      const api = source === 'taager' ? taagerApi : aliexpressApi;
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  }
};