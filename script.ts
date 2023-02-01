window.addEventListener('load',()=>{
    const form=document.getElementById("new-task-form") as HTMLFormElement;
const input=document.getElementById("new-task-input") as HTMLInputElement;
const task_container_elem=document.querySelector(".tasks-container") as HTMLDivElement;

form.addEventListener('submit',(e)=>{
e.preventDefault();
const task:string=input.value;



const task_el=document.createElement('div');
task_el.classList.add('task');
//create content element
const content_el=document.createElement('div');
content_el.classList.add('content');
 
task_el.appendChild(content_el);

const content_input=document.createElement('input');
content_input.classList.add('text');

content_input.type='text';
content_input.value=task;
content_input.setAttribute('readonly', 'readonly');

content_el.appendChild(content_input);
//create work button element
const workbuttons_elem=document.createElement('div');
workbuttons_elem.classList.add('work-buttons');

const edit_elem=document.createElement('button');
edit_elem.classList.add('Edit');
edit_elem.type='submit';
edit_elem.innerText='EDIT';

const delete_elem=document.createElement('button');
delete_elem.classList.add('Delete');
delete_elem.type='submit';
delete_elem.innerText='DELETE';

workbuttons_elem.appendChild(edit_elem);
workbuttons_elem.appendChild(delete_elem);

//append conten and worbuttons element into task element
task_el.appendChild(content_el);
task_el.appendChild(workbuttons_elem);
console.log(task_el);
//append task element into task cotainer element
task_container_elem.appendChild(task_el);
 
edit_elem.addEventListener('click',()=>{
if(edit_elem.innerText=="EDIT"){
    content_input.removeAttribute('readonly');
    edit_elem.innerText="SAVE";
    content_input.focus();

}
else{
    edit_elem.innerText="EDIT";
    content_input.setAttribute('readonly', 'readonly');
}

})

delete_elem.addEventListener('click',()=>{
    task_container_elem.removeChild(task_el);
})
})
})
