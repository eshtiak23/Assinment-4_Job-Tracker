Answers to Questions

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: These things are used for finding and selecting things on Webpage based on ID, Class Name & CSS style selector(#id,.class,p)


2. How do you create and insert a new element into the DOM?

Ans: We can create & insert a new element with 2 easy steps:

     1st: Create: const newDiv = document.createElement('div');

     2nd: Add Content: newDiv.textContent = "Hello!";


3. What is Event Bubbling? And how does it work?

Ans: When any event happen on an element like a click then it's doesn't stay still but it bubbles up to its parents. this is called Event Bubbling. 

If user click a <button> inside a <div>, the click event hits the button first, then the <div>, then the <body>, all the way up to the window.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: I think Event Delegation is a JS technique that use a single event listener on a parent element to manage events for multiple, current or future, child elements.
It is very useful because it use less memory

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault()	Stops the default browser action from happening.

     stopPropagation()	Stops the event from bubbling up to parents.