import { resolver } from 'graphql-sequelize'
import { Component } from '../../models'
// import { Sequelize } from 'sequelize';

export const Query = {
  component: resolver(Component)
}
