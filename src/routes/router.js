import productRoutes from './product.routes'

export default function (app) {
  app.use("/api/products", productRoutes);
}
