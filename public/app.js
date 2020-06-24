import { Invoice } from './Classes/invoice.js';
import { Payment } from './Classes/payment.js';
import { ListTemplate } from './Classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// INPUTS
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// LIST TEMPLATE INSTANCE
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
