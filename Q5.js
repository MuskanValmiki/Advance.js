let done = true
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'I Love Mummy'
    resolve(workDone)
  } else {
    const why = 'I am busy now'
    reject(why)
  }
})
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
checkIfItsDone()
// promise example in node js 