import React from "react";

export const Small = React.memo(({ value }) => {

  console.log('rendering small');

  return (
    <small>{value}</small>
  )
});
