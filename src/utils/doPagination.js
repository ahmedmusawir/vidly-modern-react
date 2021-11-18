import _ from 'lodash';

export default function doPagination(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  // Chained Lodash commands ... .value() is necessary here
  //   return _(items).slice(startIndex).take(pageSize).value();

  // Finds the index or page breaks in data ... basically
  // starting point in a new page of data
  const sliceResult = _.slice(items, startIndex);

  // Takes a data chunk out accroding to items per page or page size
  const takeResult = _.take(sliceResult, pageSize);

  // The following didn't seem necessay. It is needed for the chain
  // command above. Broke it down here to understand...
  //   const final = _(takeResult).value();

  return takeResult;
}
