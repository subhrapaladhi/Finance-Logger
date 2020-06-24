import {Invoice} from './Classes/invoice.js'
import {Payment} from './Classes/payment.js'
import {HasFormatter} from './Interfaces/HasFormatter.js'
import { ListTemplate } from './Classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// INPUTS
const type = document.querySelector('#type') as HTMLInputElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// LIST TEMPLATE INSTANCE
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value == 'invoice'){
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
})