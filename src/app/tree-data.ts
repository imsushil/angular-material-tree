export class TreeItem {
  children?: TreeItem[];
  name: string;
  level: number;
}

export const TREE_DATA: TreeItem[] = [
  {
    name: 'Item 1',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1', level: 3 },
          { name: 'Grandchild 2', level: 3 }
        ]
        ,
        level: 2
      },
      { name: 'Child 2', level: 2 },
      { name: 'Child 3',
        children: [
          { name: 'Grandchild 1', level: 3 },
          { name: 'Grandchild 2', level: 3 }
        ],
        level: 2
      }
    ],
    level: 1
  },
  {
    name: 'Item 2',
    children: [
      { name: 'Child 1', level: 2 },
      { name: 'Child 2', level: 2 },
    ],
    level: 1
  },
  {
    name: 'Item 3',
    children: [
      { name: 'Child 1', level: 2 },
      { name: 'Child 2', level: 2 },
      { name: 'Child 3', level: 2 }
    ],
    level: 1
  }
];
