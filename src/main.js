import $ from 'jquery'
import './reset.css'
import './style.css'
import globalHeader from './globalHeader.js'
import globalMain from './globalMain.js'
import './eventHub.js'

const V = {
    header() {
        $(` <header class="globalHeader"></header>`).appendTo($('#root'))
    },
    main() {
        $(`    <main class=" globalMain"></main>`).appendTo($('#root'))
    }
}
const C = {
    init() {
        V.header()
        V.main()
        globalHeader($('.globalHeader'))
        globalMain($('.globalMain'))
        C.bindEvent()
    },
    bindEvent() {
        document.addEventListener('keypress', (e) => {
            const { key } = e
            for (let i = 0; i < hashMap.length; i++) {
                if (hashMap[i].logo.toLowerCase() === key) {
                    window.open(hashMap[i].url)
                }
            }
        })
    }
}
C.init()