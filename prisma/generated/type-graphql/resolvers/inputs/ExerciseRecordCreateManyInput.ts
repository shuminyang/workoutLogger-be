import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExerciseRecordCreateManyrepsInput } from "../inputs/ExerciseRecordCreateManyrepsInput";
import { Perception } from "../../enums/Perception";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseRecordCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  exerciseId!: string;

  @TypeGraphQL.Field(_type => Perception, {
    nullable: false
  })
  perception!: "GOOD" | "MEDIUM" | "BAD";

  @TypeGraphQL.Field(_type => ExerciseRecordCreateManyrepsInput, {
    nullable: true
  })
  reps?: ExerciseRecordCreateManyrepsInput | undefined;
}