function imc(weight, height) {
    return new Promise((resolve, reject) => {
      if (typeof weight  !== 'number' || typeof height !== 'number')
        reject('arguments must be of type number')
      else
        resolve(weight / (height * height))
    })
  }

  