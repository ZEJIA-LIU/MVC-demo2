import $ from 'jquery'
import siteList from './siteList.js'
import './globalMain.css'

const V = {
    el(container) {
        $(`
     <ul class="siteList">
        <li class="addButton lastLi">
            <div class="icon-wrapper">
                <svg class="icon">
                    <use xlink:href="#icon-add"></use>
                </svg>
                <div class="text"> 新增网站</div>
            </div>
        </li>
    </ul>`).appendTo(container)
    }
}
const C = {
    init(container) {
        V.el(container)
        C.bindEvent()
        C.bindEventHub()
        siteList($('.siteList').find('.lastLi'))
    },
    bindEvent() {
        $('.addButton').on('click', () => {
            let url = window.prompt('请问你要添加的网址是什么？')
            if (url.indexOf('http') !== 0) {
                url = 'https://' + url
            }
            let newSite = {
                logo: simplifyUrl(url)[0].toUpperCase(), url: url, link: url
            }
            hashMap.push(newSite)
            eventHub.emit('add')
            localStorage.setItem('hashMap', JSON.stringify(hashMap))
        })
    },
    bindEventHub() {
        window.eventHub.on('delete', () => { siteList($('.siteList').find('.lastLi')) })
        window.eventHub.on('add', () => { siteList($('.siteList').find('.lastLi')) })
    }
}

export default C.init