import $ from 'jquery'
import './globalHeader.css'
const V = {
    el(container) {
        $(` <form class="search" method="GET" action="https://www.baidu.com/s" target="_blank">
        <input name='wd' type="text" id="searchInput" value="使用百度搜索" style="color:grey">
        <button type='submit'>搜索</button>
    </form>`).appendTo(container)

    }
}
const C = {
    init(container) {
        V.el(container)
        C.bindEvent()
    },
    bindEvent() {
        $('#searchInput').on('focus', () => {
            if ($('#searchInput').val() === '使用百度搜索') {
                $('#searchInput').val('').css('color', 'black')
            }
        })
        $('#searchInput').on('blur', () => {
            if ($('#searchInput').val() === '') {
                $('#searchInput').val('使用百度搜索').css('color', 'grey')
            }
        })
        $('form').on('submit', () => {
            if ($('#searchInput').val() === '使用百度搜索') {
                $('#searchInput').val('')
            }
        })
    }
}
export default C.init