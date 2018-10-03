import { Http } from '../http'
const URL = 'MallProd/GetProdCategoryList'

class HomeModel extends Http {
  getClassify () {
    this.request({
      url: URL
    })
  }
}

export  { HomeModel }