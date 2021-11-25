/* eslint-disable no-console */
import { LinkedList } from './linked-list/LinkedList';

const list = new LinkedList<number>();

list.insertAtStart(5);
list.insertAtStart(4);

list.insertAtEnd(6);
list.insertAtEnd(7);

list.insertAtStart(3);
list.insertAtStart(2);
list.insertAtStart(1);

list.display();
