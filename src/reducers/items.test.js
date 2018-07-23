import { classifyItems } from './items';

export const setup = () => {
  const items = [
    {
      id: 0,
      value: 'Item 1',
      isCompleted:  false,
      isRemoved:    false
    },
    {
      id: 1,
      value: 'Item 2',
      isCompleted:  true,
      isRemoved:    false
    },
    {
      id: 2,
      value: 'Item 3',
      isCompleted:  true,
      isRemoved:    true
    },
    {
      id: 3,
      value: 'Item 4',
      isCompleted:  false,
      isRemoved:    true
    },
    {
      id: 4,
      value: 'Item 5',
      isCompleted:  false,
      isRemoved:    true
    },
    {
      id: 5,
      value: 'Item 6',
      isCompleted:  false,
      isRemoved:    false
    },
    {
      id: 6,
      value: 'Item 7',
      isCompleted:  true,
      isRemoved:    false
    }
  ];

  const results = {
    all: 4,       // all but removed
    completed: 2, // completed but removed
    removed: 3    // removed only
  }

  return {
    items,
    ...results
  }
}

describe('Items reducer', () => {
  const items = classifyItems(setup().items);

  it('should return all items', () => {
    const { all } = setup();
    expect(items.all.length).toEqual(all);
  });

  it('should return completed items only', () => {
    const { completed } = setup();
    expect(items.completed.length).toEqual(completed);
  });

  it('should return removed items only', () => {
    const { removed } = setup();
    expect(items.removed.length).toEqual(removed);
  });
});