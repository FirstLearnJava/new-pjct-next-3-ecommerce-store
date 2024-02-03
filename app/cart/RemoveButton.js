'use client';

import RemoveItem from './actions';

export default function RemoveButton(props) {
  return (
    <form>
      <button formAction={async () => await RemoveItem(props.id)}>
        remove product
      </button>
    </form>
  );
}
