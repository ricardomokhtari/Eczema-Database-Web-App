// Reference 2 - taken from 
// https://gist.github.com/ShopifyEng/5fdac4fc4fcaa511e07726120bd23ba2#file-react-table-1-basic-cell-basic-js

import * as React from 'react';

export default function Cell({
  content,
  header,
}) {

  const cellMarkup = header ? (
    <th className="Cell Cell-header">
      {content}
    </th>
  ) : (
    <td className="Cell">
      {content}
    </td>
  );

  return (cellMarkup);
}

// end of reference 1