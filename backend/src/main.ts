import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Habilita CORS para o frontend no Codespaces
  app.enableCors({
    origin: 'https://animated-space-enigma-g64x9pv95q6fwqj6-3000.app.github.dev',
    credentials: true,
  })

  await app.listen(3001)
}
bootstrap()