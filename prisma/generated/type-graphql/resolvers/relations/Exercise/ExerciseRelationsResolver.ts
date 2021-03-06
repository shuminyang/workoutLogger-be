import * as TypeGraphQL from "type-graphql";
import { Exercise } from "../../../models/Exercise";
import { ExerciseRecord } from "../../../models/ExerciseRecord";
import { Workout } from "../../../models/Workout";
import { ExerciseSetArgs } from "./args/ExerciseSetArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exercise)
export class ExerciseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Workout, {
    nullable: false
  })
  async workout(@TypeGraphQL.Root() exercise: Exercise, @TypeGraphQL.Ctx() ctx: any): Promise<Workout> {
    return getPrismaFromContext(ctx).exercise.findUnique({
      where: {
        id: exercise.id,
      },
    }).workout({});
  }

  @TypeGraphQL.FieldResolver(_type => [ExerciseRecord], {
    nullable: false
  })
  async Set(@TypeGraphQL.Root() exercise: Exercise, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExerciseSetArgs): Promise<ExerciseRecord[]> {
    return getPrismaFromContext(ctx).exercise.findUnique({
      where: {
        id: exercise.id,
      },
    }).Set(args);
  }
}
