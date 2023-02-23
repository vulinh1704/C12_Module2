import {ArrayList} from "./ArrayList";
import {IArrayList} from "./IArrayList";

let arrayList: IArrayList<string> = new ArrayList<string>();
arrayList.add('a');
console.log(arrayList.get(0));