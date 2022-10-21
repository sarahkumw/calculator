1.Why is it important to write clean code?
    so collaborators can easily follow the logic and so you can easily understand code that you come back to long after you've written it
2.What is the difference between good comments and bad comments?
    good comments should explain why you do certain things, what a function does, or how a specific line of code works
3.What is an array?
    An array can hold many values of different data types under a single name, and you can access the values by referring to an index number.
4.What are arrays useful for?
    storing a collection of pieces of data under one name
5.How do you access an array element?
    by and integer index
6.How do you change an array element?
    you can add or take out elements from the beginning or end, change an element at a specific index, or splice out a specific section
7.What are some useful array properties?
    index, length
8.What are some useful array methods?
    includes(), forEach(), join(), filter(), push(), pop(), splice(), shift()
9.What are loops useful for?
    iterating through an array to find an element that meets a certain condition
10.What is the break statement?
    forces the function to exit the loop
11.What is the continue statement?
    stops the current iteration of the loop and forces the function to start a new one
12.What is the DOM?
    Document Object Model is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.
13.How do you target the nodes you want to work with?
    you can use methods like document.querySelector(), .querySelectorAll(), or .getElementById();
14.How do you create an element in the DOM?
    document.createElement("html tag", [options like class/style attributes])
15.How do you add an element to the DOM?
    find the parentNode you want to nest the element in using querySelector or getElementById, then parentNode.appendChild(newElement)
16.How do you remove an element from the DOM?
    parentNode.removeChild(childNode)
17.How can you alter an element in the DOM?
    element.style.cssText = 'css properties';
    element.style.cssProperty = 'value';
    element.setAttribute("attribute");
18.When adding text to a DOM element, should you use textContent or innerHTML?
    you should use textContent because innerHTML can have security issues
19.Where should you include your JavaScript tag in your HTML file when working
with DOM nodes?
    at the end of your html body so all of your html elements load first
20.How do “events” and “listeners” work?
    Events are actions or occurrences that the system tells you about so you can write listeners in your code to react to them
21.What are three ways to use events in your code?
    run functions when an element is clicked, update data when a form is submitted, change an element when cursor hovers over it
22.Why are event listeners the preferred way to handle events?
    because you can add multiple event listeners for the same event
23.What are the benefits of using named functions in your listeners?
    well named event handler functions tell you what is going to happen when that event occurs
24.How do you attach listeners to groups of nodes?
    you can select a group of nodes using querySelectorAll() and the forEach() method to attach an event listener to all of them
25.What is the difference between the return values of querySelector and
querySelectorAll?
    querySelector returns a single node while querySelectorAll returns nodelist
26.What does a “nodelist” contain?
    an array of references to nodes all the nodes that match the selector
27.Explain the difference between “capture” and “bubbling”.
    when nested elements both have an event listener for the same event, with bubbling the event is first captured and handled by the innermost element and with capturing the event is first captured and handled by the outermost element
28.What is the difference between objects and arrays?
    objects are a collection of key value pairs that can be accessed using object.key and arrays are a collection of elements that can only be referenced with an integer index array[index]
29.How do you access object properties?
    object.key