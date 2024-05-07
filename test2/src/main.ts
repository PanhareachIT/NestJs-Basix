import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder() //1
        .setTitle('Spotify Clone')
        .setDescription('The Spotify Clone Api documentation')
        .setVersion('1.0')
        .addBearerAuth(
            // Enable Bearer Auth here
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'JWT-auth', // We will use this Bearer Auth with JWT-auth name on the controller function
        )
        .build();

    const document = SwaggerModule.createDocument(app, config); //2
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);


}
bootstrap();
