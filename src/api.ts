import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function genAPI() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  const options = new DocumentBuilder()
    .setTitle('Nest.js 项目基础模板')
    .setDescription('基础 API 描述')
    .setVersion('0.1')
    .addTag('Base')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(8081);
}
genAPI();
