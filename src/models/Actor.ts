// import { Optional } from 'sequelize'
import { Table, Model, ForeignKey, Column } from 'sequelize-typescript'
import { Test } from './Test'

interface ActorAttributes {
  id?: number
  name?: string,
  testId: number
}

// interface ActorCreationAttributes extends Optional<ActorAttributes, 'id'> {}

@Table
class Actor extends Model<ActorAttributes> {
  constructor() { 
    super();
    this.testId = 0;
 }
  @ForeignKey(() => Test)
  @Column
  testId: number
}

export { Actor, ActorAttributes }