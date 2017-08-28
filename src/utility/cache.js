
const Cache = Object.create({})
Cache.save = function (data) {
  // object {key: value}
  LS.setItem(data.key, data.value)
}

const LS = {
  setItem: function (key, value) {
    localStorage.setItem(key, value)
  }
}

export default Cache
