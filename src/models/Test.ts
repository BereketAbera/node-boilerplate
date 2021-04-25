// import { Optional } from 'sequelize'
import { Table, Model, HasMany } from 'sequelize-typescript'
import {Actor} from './Actor'

interface TestAttributes {
  id?: number
  name?: string,
  users: Actor[]
}

// interface TestCreationAttributes extends Optional<TestAttributes, 'id'> {}

@Table
class Test extends Model<TestAttributes> {
  constructor() { 
    super();
    this.users = [];
 }
  @HasMany(() => Actor)
  users: Actor[]

}

export { Test, TestAttributes }