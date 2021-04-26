import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { WorkoutOrderByInput } from "../../../inputs/WorkoutOrderByInput";
import { WorkoutWhereInput } from "../../../inputs/WorkoutWhereInput";
import { WorkoutWhereUniqueInput } from "../../../inputs/WorkoutWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateWorkoutArgs {
  @TypeGraphQL.Field(_type => WorkoutWhereInput, {
    nullable: true
  })
  where?: WorkoutWhereInput | undefined;

  @TypeGraphQL.Field(_type => [WorkoutOrderByInput], {
    nullable: true
  })
  orderBy?: WorkoutOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => WorkoutWhereUniqueInput, {
    nullable: true
  })
  cursor?: WorkoutWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}