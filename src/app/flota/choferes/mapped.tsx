import React, { useState } from 'react'
import { Chofer, ChoferExcel } from './types';
import { ChoferMapper } from './mappers/chofer.mapper';

function mapped(data?: Chofer[]) {

  const { dataMap } = ChoferMapper.fromApiToExcel(data);

  return {
    dataMap
  }
}

export default mapped