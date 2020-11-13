import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class MyModel1 {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<MyModel1>);
  static copyOf(source: MyModel1, mutator: (draft: MutableModel<MyModel1>) => MutableModel<MyModel1> | void): MyModel1;
}

export declare class MyModel2 {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<MyModel2>);
  static copyOf(source: MyModel2, mutator: (draft: MutableModel<MyModel2>) => MutableModel<MyModel2> | void): MyModel2;
}