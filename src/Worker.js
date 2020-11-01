class Worker {
  execute = (inputs, callback) => {
    callback(inputs || false)
  }

  executeAsync = async inputs => {
    return new Promise((resolve) => {
      setTimeout( () => {
        if (inputs){
          resolve(inputs);
        } else {
          resolve(new Error("Failed"));
        }
      }, 250) 
    }) 
  }
}

export default new Worker()
