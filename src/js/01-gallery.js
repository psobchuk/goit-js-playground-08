// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(SimpleLightbox);
console.log(galleryItems);

// Default може бути лише один
export default function foo() {
  console.log('Hello, world');
}

export class Student {
  constructor(name) {
    this.name = name;
  }
}

export function boo() {
  console.log('Hello from boo');
}

function bar() {
  console.log("Let's go to bar!");
}

function baz() {
  console.log("Baz is a Kevin's brother");
}

const test = 10;

export { bar, baz, test };
