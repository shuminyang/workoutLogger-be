import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ExerciseRecordSumAggregate {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  reps!: number[] | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  rpe!: number | null;
}
