import { Module } from '@nestjs/common';
import { WishlistController } from './controllers/wishlist.controller';
import { WishlistService } from './providers/wishlist.service';

@Module({
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
