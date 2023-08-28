let totalPrice = 0;

const totalProductPrice = document.getElementById('totalProductPrice');
const couponField = document.getElementById('couponField');



function addToCart(target) {
    const productName = target.childNodes[3].childNodes[1].nextElementSibling;
    const productPrice = target.childNodes[3].childNodes[3].nextElementSibling.childNodes[0];

    //update total value
    totalPrice += parseFloat(productPrice.innerText);

    //create li for assign data
    const listItem = document.createElement('li');
    listItem.innerText = productName.innerText;
    document.getElementById('productList').appendChild(listItem);

    //     show total price
    totalProductPrice.innerText = totalPrice.toFixed('2') + ' ' + 'TK';
    document.getElementById('discountPrice').innerText = totalPrice.toFixed('2') + ' ' + 'TK';

    //function for disabed button
    disableButton(totalPrice >= 200, document.getElementById('couponSubmit'));
    disableButton(totalPrice > 0, document.getElementById('makePurchase'));

}

//function for disable button
function disableButton(condition, btn) {
    if (condition) {
        btn.removeAttribute('disabled');
    }
}

//apply coupon code for discount
document.getElementById('couponSubmit').addEventListener('click', function() {
    function applyCouponCode(couponCode) {
        if (couponCode === 'SELL200') {
            const discount = (totalPrice * 20) / 100;
            const discountTotalPrice = totalPrice - discount
            document.getElementById('discount').innerText = discount.toFixed('2') + ' ' + 'TK';
            document.getElementById('discountPrice').innerText = discountTotalPrice.toFixed('2') + ' ' + 'TK';
        } else {
            alert('Please Try with Valid coupon Code ')
        }
    }

    applyCouponCode(couponField.value);
    couponField.value = ''
})

//show modal for make purchase
document.getElementById('makePurchase').addEventListener('click', function() {
    document.getElementById('my_modal_1').showModal()

})

//click modal button for reload this page
document.getElementById('modalReload').addEventListener('click', function() {
    location.reload()
})