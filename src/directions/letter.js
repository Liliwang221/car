import Vue from 'vue';
Vue.directive('letter', function (el, binding) {
    let dom = document.querySelector('#letter');
    if (binding.value) {
        if (dom) {
            dom.innerText = binding.value
        } else {
            dom = document.createElement('div');
            dom.style = {
                ...dom.style,
                position: 'fixed',
                width: '30vw',
                borderRadius: '5%',
                backgroundColor: 'rgba(0,0,0,.7)',
                top: '50%',
                left: '50%',
                transform: 'translate3d(-50%,-50%,0)'
            }
            dom.innerText = binding.value;
            document.body.appendChild(dom);
        }
    } else {
        dom.parentNode.removeChild(dom)
    }


})