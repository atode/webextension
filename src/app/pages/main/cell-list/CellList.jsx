import React from 'react'

import {
  List
} from '../../../../external_modules/material-design';

import {CellItem} from './CellItem'

const CellList = ({ data }) => (
  <List>
    {data.map(
      ({ node }) => <CellItem {...node} />
    )}
  </List>
)

export {
  CellList
}
