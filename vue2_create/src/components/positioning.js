let getCurrentCityName = function () {
    return new Promise(function (resolve, reject) {
      let myCity = new BMap.LocalCity()
      myCity.get(function (result) {
        resolve(result.name)
      })
    })
  }
  
  export default getCurrentCityName
  