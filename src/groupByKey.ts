type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, item) => {
    const keyValue = item[key] as unknown as string;

    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
