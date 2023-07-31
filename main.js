PGPTConversation.onMessage((msg) => {
  if (msg.isGPT) {
    msg.contentChanged(null, () => {
      setTimeout(() => {
        console.log(msg)
      }, 1000)
    })
  }
}, window.parent.document)
