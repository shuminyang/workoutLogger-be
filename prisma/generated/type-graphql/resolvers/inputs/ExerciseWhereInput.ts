import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExerciseRecordListRelationFilter } from "../inputs/ExerciseRecordListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { WorkoutRelationFilter } from "../inputs/WorkoutRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ExerciseWhereInput {
  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  AND?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  OR?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExerciseWhereInput], {
    nullable: true
  })
  NOT?: ExerciseWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sets?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reps?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => WorkoutRelationFilter, {
    nullable: true
  })
  workout?: WorkoutRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  workoutId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ExerciseRecordListRelationFilter, {
    nullable: true
  })
  Set?: ExerciseRecordListRelationFilter | undefined;
}
