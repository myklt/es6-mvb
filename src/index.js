{
    function say({ domNodeId, message }) {
        const domNode = document.getElementById(domNodeId);
        domNode.innerHTML = message;
    }
    say({ domNodeId: 'root', message: 'Hello World' });
}