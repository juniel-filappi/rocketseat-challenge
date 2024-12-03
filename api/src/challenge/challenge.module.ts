import { Module } from '@nestjs/common';
import { ChallengeResolver } from './challenge.resolver';
import { ChallengeService } from './challenge.service';

@Module({
  providers: [ChallengeResolver, ChallengeService],
})
export class ChallengeModule {}