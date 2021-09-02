client.once('ready', () => {
    client.user.setStatus('idle'); // online, idle, dnd, invisible
});