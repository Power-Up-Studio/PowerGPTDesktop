PGPTConversation.onMessage((msg) => {
  if (msg.isGPT) {
    msg.contentChanged(null, () => {
      console.log(msg)
    })
  }
}, window.parent.document)
