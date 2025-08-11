export function isIn<T>(value: T, items: T[]): boolean;
export function isIn<T>(value: T, ...items: T[]): boolean;

export function isIn<T>(value: T, itemsOrFirstItem: T[] | T, ...restItems: T[]): boolean {
    let items: T[];

    if (Array.isArray(itemsOrFirstItem)) {
        items = itemsOrFirstItem;
    } else {
        items = [itemsOrFirstItem, ...restItems];
    }

    return items.includes(value);
}