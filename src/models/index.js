// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MyModel1, MyModel2 } = initSchema(schema);

export {
  MyModel1,
  MyModel2
};