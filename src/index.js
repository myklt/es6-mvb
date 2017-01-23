{
    function sayHello({ domNodeId = 'root', message: name }) {
        const domNode = document.getElementById(domNodeId);
        domNode.innerHTML = `Hello ${name}!`;
    }
    sayHello({ message: 'World' });
}