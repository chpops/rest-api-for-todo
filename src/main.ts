import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const options = new DocumentBuilder()
    .setTitle('Small Angular ToDo API Documentation')
    .setDescription('This Is The Backend API For Angular ToDo Application')
    .setContact('Developer ', '' ,'nikichtube@gmail.com')
    .setVersion('1.0.0')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
