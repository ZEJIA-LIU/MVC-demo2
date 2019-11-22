import $ from 'jquery'
import './siteList.css'
const V = {
    el(brother) {
        hashMap.forEach((node, index) => {
            const $Li = $(`
               <li>
                 <div class="site-wrapper">
                    <div class="logo"><img width=32 src='https://${simplifyUrl(node.link)}/favicon.ico' alt="${node.logo}"></div>
                    <div class="link">${simplifyUrl(node.link)}</div>
                    <div class="close"> 
                      <div class="icon-wrapper">
                        <svg class="icon delete">
                          <use xlink:href="#icon-shanchu"></use>
                        </svg>
                       </div>
                    </div>
                </div>    
               </li>
            `).insertBefore(brother)
            C.bindEvent($Li, node, index)
        })
    },
    render(brother) {
        $('.siteList').find('li:not(.lastLi)').remove()
        V.el(brother)
    }
}
const C = {
    init(brother) {
        V.render(brother)
    },
    bindEvent(target, node, index) {
        target.on('click', () => {
            window.open(node.url, '_self')

        })
        target.find('img').on('error', () => {
            target.find('img').css({ display: 'none' })
            target.find('.logo').html(`${node.logo}`)
        })
        target.on('click', '.close', (e) => {
            e.stopPropagation()
            hashMap.splice(index, 1)
            eventHub.emit('delete', index)
            localStorage.setItem('hashMap', JSON.stringify(hashMap))
        })
    },
}

export default C.init