function hello(name) {
    if (name && name.length > 0) {
      return `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    } else {
      return 'Hello, World!'
    }
  }