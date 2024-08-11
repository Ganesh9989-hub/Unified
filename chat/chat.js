document.getElementById('message-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    
    if (message) {
        const chatBox = document.getElementById('chat-box');
        
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.innerText = message;

        chatBox.appendChild(messageElement);
        

        chatBox.scrollTop = chatBox.scrollHeight;
        
     
        input.value = '';
        
        setTimeout(receiveMessage, 1000);
    }
}

function receiveMessage() {
    const chatBox = document.getElementById('chat-box');

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'received');
    messageElement.innerText = 'This is a response message.';
    
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
