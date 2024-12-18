import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateChallengeInput {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;
}
